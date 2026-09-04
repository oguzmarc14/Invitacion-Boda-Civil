export const invitation = {
	pareja: {
		novia: 'Nayzeth',
		novio: 'Adán',
	},

	evento: {
		titulo: 'Boda civil',

		fechaCorta: '05.02.2027',

		fechaLarga: '5 de febrero de 2027',

		/*
		 * La fecha ya es la correcta.
		 * La hora queda provisional hasta que tengamos
		 * el horario real de la ceremonia.
		 */
		inicio: '2027-02-05T17:00:00-06:00',

		fin: '2027-02-06T01:00:00-06:00',

		/*
		 * PENDIENTE:
		 * Reemplazar cuando tengamos los horarios reales.
		 */
		horaCeremonia: 'Horario por confirmar',

		horaRecepcion: 'Horario por confirmar',

		salon: 'Salón Los Pavorreales',

		direccion:
			'Fernando Montes de Oca S/N, Col. Niños Héroes',

		/*
		 * PENDIENTE:
		 * Colocar las URLs exactas de Google Maps y Waze
		 * cuando confirmemos la ubicación.
		 */
		mapsUrl:
			'https://www.google.com/maps/search/?api=1&query=Salon+Los+Pavorreales+Fernando+Montes+de+Oca',

		wazeUrl:
			'https://www.waze.com/ul?q=Salon%20Los%20Pavorreales&navigate=yes',
	},

	textos: {
		invitacion:
			'Sería un honor que las personas más importantes de nuestras vidas nos acompañen en la primera parte de nuestra unión.',

		mensaje:
			'Porque no es la suerte de haber encontrado a alguien perfecto, sino el construir un amor imperfecto de manera perfecta. Sería un honor que las personas más importantes de nuestras vidas nos acompañen en la primera parte de nuestra unión.',

		cierre:
			'Gracias por acompañarnos en la primera parte de nuestra unión y por ser parte de este momento tan especial.',
	},

	imagenes: {
		portada:
			'/images/welcome-couple.webp',

		tematica:
			'/images/fondo.webp',

		salon:
			'/images/salon.png',

		galeria: [
			{
				src: '/images/galeria/boda_01.webp',
				alt: 'Fotografía de Nayzeth y Adán 01',
				posicion: 'center',
			},

			{
				src: '/images/galeria/boda_02.webp',
				alt: 'Fotografía de Nayzeth y Adán 02',
				posicion: 'center',
			},

			{
				src: '/images/galeria/boda_03.webp',
				alt: 'Fotografía de Nayzeth y Adán 03',
				posicion: 'center',
			},

			{
				src: '/images/galeria/boda_04.webp',
				alt: 'Fotografía de Nayzeth y Adán 04',
				posicion: 'center',
			},

			{
				src: '/images/galeria/boda_05.webp',
				alt: 'Fotografía de Nayzeth y Adán 05',
				posicion: 'center',
			},

			{
				src: '/images/galeria/boda_06.webp',
				alt: 'Fotografía de Nayzeth y Adán 06',
				posicion: 'center',
			},

			{
				src: '/images/galeria/boda_07.webp',
				alt: 'Fotografía de Nayzeth y Adán 07',
				posicion: 'center',
			},

			{
				src: '/images/galeria/boda_08.webp',
				alt: 'Fotografía de Nayzeth y Adán 08',
				posicion: 'center',
			},

			{
				src: '/images/galeria/boda_09.webp',
				alt: 'Fotografía de Nayzeth y Adán 09',
				posicion: 'center',
			},
		],
	},

	/*
	 * PENDIENTE:
	 * Necesitamos los horarios reales para modificar
	 * correctamente el itinerario.
	 */
	itinerario: [
		{
			hora:
				'Por confirmar',

			titulo:
				'Recepción',

			detalle:
				'Bienvenida de nuestros invitados',
		},

		{
			hora:
				'Por confirmar',

			titulo:
				'Ceremonia civil',

			detalle:
				'El momento del sí, acepto',
		},

		{
			hora:
				'Por confirmar',

			titulo:
				'Cena',

			detalle:
				'Compartiremos la mesa y brindaremos',
		},

		{
			hora:
				'Por confirmar',

			titulo:
				'Celebración',

			detalle:
				'Música, baile y buenos momentos',
		},
	],

	vestimenta: {
		codigo:
			'Semiformal',

		descripcion:
			'Código de vestimenta semiformal para acompañarnos en este día tan especial.',

		/*
		 * No me proporcionaste colores reservados,
		 * así que no agregamos una regla inventada.
		 */
		reservados:
			'',
	},

	regalos: {
		titulo:
			'Mesa de regalos',

		mensaje:
			'Tu presencia es nuestro mejor regalo. Si deseas tener un detalle con nosotros, puedes hacerlo mediante nuestra mesa de regalos o sobre de buenos deseos.',

		/*
		 * PENDIENTE:
		 * Información de mesa de regalos.
		 */
		tienda:
			'Por confirmar',

		numeroEvento:
			'Por confirmar',

		url:
			'#',
	},

	rsvp: {
		/*
		 * PENDIENTE:
		 * Fecha límite real para confirmar.
		 */
		fechaLimite:
			'Por confirmar',

		/*
		 * PENDIENTE:
		 * WhatsApp real de confirmación.
		 */
		whatsapp:
			'5210000000000',

		maxAcompanantes:
			2,
	},

	avisos: [
		{
			titulo:
				'Puntualidad',

			texto:
				'Te recomendamos llegar con anticipación para acompañarnos desde el inicio de nuestra celebración.',
		},

		{
			titulo:
				'Vestimenta',

			texto:
				'El código de vestimenta para nuestra celebración será semiformal.',
		},

		{
			titulo:
				'Ubicación',

			texto:
				'La celebración se llevará a cabo en Salón Los Pavorreales, Fernando Montes de Oca S/N, Col. Niños Héroes.',
		},
	],

	musica: {
		src:
			'/audio/musica-boda-provisional.mp3',

		titulo:
			'Instrumental de bienvenida',
	},
} as const;


export type Invitation =
	typeof invitation;