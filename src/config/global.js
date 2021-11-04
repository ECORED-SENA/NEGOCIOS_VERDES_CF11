export default {
  global: {
    componenteFormativo: 'Clientes y canales de distribución',
    descripcionCurso:
      'Conocer los clientes y canales de distribución es necesario para toda empresa, estas variables permiten identificar las preferencias de los compradores para posteriormente crear estrategias de marketing, que permitan distribuir los productos a los consumidores de la mejor manera y cumplir con los objetivos económicos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Economía',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Bien económico',
            hash: 't1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de bienes',
            hash: 't1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Oferta y demanda',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Mercado',
            hash: 't2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'La demanda',
            hash: 't2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'La oferta',
            hash: 't2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Perfil del cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Cliente',
            hash: 't3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Psicología del consumidor',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Formatos comerciales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Formatos comerciales físicos',
            hash: 't5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Formatos comerciales sin presencia física',
            hash: 't5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Canales de distribución',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'El <i>marketing</i> omnicanal',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Gestión de <i>stock</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '8.1',
            titulo: 'Clasificación de <i>stocks</i>',
            hash: 't8_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.2',
            titulo: 'La importancia de gestionar <i>stocks</i>',
            hash: 't8_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.3',
            titulo: 'Margen comercial',
            hash: 't8_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.4',
            titulo: 'Índice de rotación de <i>stocks</i>',
            hash: 't8_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Carrasco, R. (2007). La sociedad de consumo: origen y características. Contribuciones a la Economía. ',
      link: 'http://www.eumed.net/ce/',
    },
    {
      referencia: 'Digital Guide Ionos. (2018). Marketing omnicanal. ',
      link:
        'https://www.ionos.es/digitalguide/online-marketing/vender-en-internet/marketing-omnicanal/',
    },
    {
      referencia: 'Galán, J. (2016). Consumidor. Economipedia. ',
      link: 'https://economipedia.com/definiciones/consumidor.html',
    },
    {
      referencia:
        'Ginner, J. (2019). Canales de distribución, ¿Cuál es el adecuado para tu negocio? Escuela de Negocios y Dirección. ',
      link:
        'https://www.escueladenegociosydireccion.com/revista/business/emprendedores/canales-de-distribucion-cual-es-el-adecuado-para-tu-negocio.',
    },
    {
      referencia:
        'González, M. y Pérez, A. (2009). Introducción a la economía. Pearson. ',
      link:
        'http://148.202.167.116:8080/xmlui/bitstream/handle/123456789/3181/introduccion_economia.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Kotler, P. y Kelller, K (2012). Dirección de marketing. Pearson. ',
      link:
        'http://www.montartuempresa.com/wp-content/uploads/2016/01/direccion-de-marketing-14edi-kotler1.pdf',
    },
    {
      referencia: 'MacMillan Education. (2018). Gestión de stocks. ',
      link:
        'https://www.macmillaneducation.es/wp-content/uploads/2018/10/gestion_logistica_libroalumno_unidad3muestra.pdf.',
    },
    {
      referencia:
        'Mochón, F. (1990). Economía principios y aplicaciones. McGraw Hill. ',
      link:
        'https://ens9004-infd.mendoza.edu.ar/sitio/geografia-economica/upload/09-%20MOCHON%20MORCILLO%20%26%20BEKER%20-%20LIBRO%20-%20Principios%20y%20Aplicaciones%20de%20Econom%EDa.pdf',
    },
    {
      referencia:
        'Orellana (2021) La estructuración de los diferentes canales. Marketing XXI. ',
      link:
        'https://www.marketing-xxi.com/canales-de-distribucion-63.htm,14/07/2021',
    },
    {
      referencia:
        'Rivera, C. y Arellano, C. (2013). Conducta del consumidor: Estrategias y políticas aplicadas al Marketing. ESIC.',
    },
    {
      referencia: 'Sánchez, J. (2016).  Consumidor. Economipedia. ',
      link: 'https://economipedia.com/definiciones/consumidor.html',
    },
    {
      referencia: 'Smith, A. (1776). La riqueza de las naciones. Titivillus. ',
      link:
        'https://www.memoriapoliticademexico.org/Textos/1Independencia/Imag/1776-AS-LRN.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Briefing',
      terminoHtml: '<em>Briefing</em>',
      significado:
        'documento que sirve como herramienta de comunicación entre una empresa y sus proveedores.',
    },
    {
      termino: 'Eslogan',
      significado: 'palabra o frase corta fácil de recordar.',
    },
    {
      termino: 'Marca',
      significado:
        'identificador comercial de los bienes y servicios que ofrece una empresa y los diferencia de los de la competencia.',
    },
    {
      termino: 'Mercadotecnia',
      significado:
        'conjunto de técnicas y estudios que tienen como objeto mejorar la comercialización de un producto.',
    },
    {
      termino: 'Omnicanal',
      significado:
        'estrategia de <em>marketing</em> que busca ofrecer una experiencia única e interconectada a los clientes a través del diálogo y alineación de canales <em>online</em> y <em>offline</em>. Es decir, en lugar de trabajar en paralelo, todos los canales están diseñados y orquestados para cooperar entre sí. ',
    },
    {
      termino: 'Producto',
      significado:
        'bien tangible o producto que ofrece una empresa a los consumidores.',
    },
  ],
  complementario: [
    {
      texto:
        'Cuéllar, L. (2018). Ley de la oferta y la demanda. [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=uJDbxq2zIig&ab_channel=Lic.LourdesCuellar ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jair Roberto Daza Palnecia',
        cargo: 'Experto temático',
        centro:
          'Centro de la Industria, Empresa y Servicios CIES - Regional Santander',
      },
      {
        nombre: 'Paola Moya Peralta',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Evaluadora Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Luis Gabriel Urueta Alvarez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oscar Julian Marquez Sanabria',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jessica Moreno Realpe',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ricardo Vásquez Arroyave',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Veimar Celis Melendez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
