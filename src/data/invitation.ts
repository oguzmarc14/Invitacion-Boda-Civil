export const invitation = {
	pareja: {
		novia: 'Andrea',
		novio: 'Carlos',
	},

	evento: {
		titulo: 'Boda civil',
		fechaCorta: '31.12.2027',
		fechaLarga: '31 de diciembre de 2027',
		inicio: '2027-12-31T17:00:00-06:00',
		fin: '2028-01-01T01:00:00-06:00',
		horaCeremonia: '5:00 p. m.',
		horaRecepcion: '6:00 p. m.',
		salon: 'Nombre del salón',
		direccion: 'Calle y número, Ciudad, Estado',
		mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Nombre+del+salon',
		wazeUrl: 'https://www.waze.com/ul?q=Nombre%20del%20salon&navigate=yes',
	},

	textos: {
		invitacion:
			'Con inmensa alegría queremos invitarte a compartir con nosotros el comienzo de esta nueva etapa de nuestras vidas.',
		mensaje:
			'Después de tantos momentos compartidos, hemos decidido unir nuestras vidas. Nos hará muy felices celebrar este día rodeados de las personas que forman parte de nuestra historia.',
		cierre:
			'Gracias por acompañarnos en el comienzo de nuestro para siempre.',
	},

	imagenes: {
		portada: '/images/welcome-couple.webp',
		galeria: [
			{
				src: '/images/welcome-couple.webp',
				alt: 'Los novios compartiendo un momento especial',
				posicion: 'center 18%',
			},
			{
				src: '/images/welcome-couple.webp',
				alt: 'Retrato de los novios',
				posicion: '35% center',
			},
			{
				src: '/images/welcome-couple.webp',
				alt: 'Historia de amor de los novios',
				posicion: '70% center',
			},
		],
	},

	itinerario: [
		{ hora: '4:30 p. m.', titulo: 'Recepción', detalle: 'Bienvenida de nuestros invitados' },
		{ hora: '5:00 p. m.', titulo: 'Ceremonia civil', detalle: 'El momento del sí, acepto' },
		{ hora: '6:00 p. m.', titulo: 'Cena', detalle: 'Compartiremos la mesa y brindaremos' },
		{ hora: '8:00 p. m.', titulo: 'Celebración', detalle: 'Música, baile y buenos momentos' },
	],

	vestimenta: {
		codigo: 'Formal · tonos naturales',
		descripcion:
			'Queremos verte elegante y cómodo. Te sugerimos tonos tierra, olivo, arena, champagne o café.',
		reservados: 'El blanco y el marfil están reservados para los novios.',
	},

	regalos: {
		titulo: 'Mesa de regalos',
		mensaje:
			'Tu presencia es nuestro mejor regalo. Si deseas tener un detalle con nosotros, puedes hacerlo mediante nuestra mesa de regalos o sobre de buenos deseos.',
		tienda: 'Nombre de la tienda',
		numeroEvento: '000000',
		url: '#',
	},

	rsvp: {
		fechaLimite: '1 de diciembre de 2027',
		whatsapp: '5210000000000',
		maxAcompanantes: 2,
	},

	avisos: [
		{ titulo: 'Solo adultos', texto: 'Deseamos que disfrutes una noche pensada especialmente para adultos.' },
		{ titulo: 'Puntualidad', texto: 'Te recomendamos llegar 30 minutos antes del inicio de la ceremonia.' },
		{ titulo: 'Estacionamiento', texto: 'El salón contará con estacionamiento para nuestros invitados.' },
	],

	musica: {
		src: '/audio/musica-boda-provisional.mp3',
		titulo: 'Instrumental de bienvenida',
	},
} as const;

export type Invitation = typeof invitation;
