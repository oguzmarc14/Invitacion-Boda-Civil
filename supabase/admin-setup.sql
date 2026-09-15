-- Ejecutar una sola vez desde Supabase > SQL Editor.
-- Mantiene la tabla invitados cerrada y autoriza únicamente a las cuentas
-- registradas en public.administradores.

create table if not exists public.administradores (
	id uuid primary key references auth.users(id) on delete cascade,
	email text not null unique,
	created_at timestamptz not null default now()
);

alter table public.administradores enable row level security;
alter table public.invitados enable row level security;

revoke all on table public.administradores from anon, authenticated;
revoke all on table public.invitados from anon, authenticated;
grant select, insert, update, delete on table public.invitados to authenticated;

create or replace function public.es_administrador()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
	select exists (
		select 1
		from public.administradores
		where id = auth.uid()
	);
$$;

revoke all on function public.es_administrador() from public, anon;
grant execute on function public.es_administrador() to authenticated;

drop policy if exists "Administradores gestionan invitados"
	on public.invitados;

create policy "Administradores gestionan invitados"
	on public.invitados
	for all
	to authenticated
	using ((select public.es_administrador()))
	with check ((select public.es_administrador()));

do $$
begin
	if not exists (
		select 1
		from pg_constraint
		where conname = 'invitados_cantidad_valida'
			and conrelid = 'public.invitados'::regclass
	) then
		alter table public.invitados
			add constraint invitados_cantidad_valida
			check (
				invitados_permitidos between 1 and 20
				and asistentes_confirmados between 0 and invitados_permitidos
			);
	end if;

	if not exists (
		select 1
		from pg_constraint
		where conname = 'invitados_estado_valido'
			and conrelid = 'public.invitados'::regclass
	) then
		alter table public.invitados
			add constraint invitados_estado_valido
			check (estado in ('pendiente', 'confirmado', 'no_asiste'));
	end if;
end
$$;

-- Después de invitar a la clienta desde Authentication > Users, reemplazar
-- los valores siguientes con el UUID y el correo que muestre Supabase:
--
-- insert into public.administradores (id, email)
-- values ('UUID-DE-LA-CLIENTA', 'correo@cliente.com');
