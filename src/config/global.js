export default {
  global: {
    componenteFormativo: 'Competencias del Joven Emprendedor',
    descripcionCurso:
      'En este componente podrás encontrar los aspectos básicos que tiene el emprendimiento y el emprendedor, teniendo en cuenta las características interiores y su relación con el entorno.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
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
        titulo: 'Emprendimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Emprendimiento juvenil (14 a 28 años)',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Emprendimiento digital',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Explorando oportunidades para jóvenes emprendedores',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'El emprendedor joven',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Características y competencias del emprendedor joven digital',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Modernización de los negocios con tecnología',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Habilidades del siglo XXI para el emprendedor (UNESCO)',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      //{
      //  icono: 'fas fa-sitemap',
      //  titulo: 'Sintesis',
      //  nombreRuta: 'sintesis',
      //},
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      //{
      //  nombreRuta: 'complementario',
      //  icono: 'far fa-folder-open',
      //  titulo: 'Material complementario',
      //},
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
        'Castillo, A. (1999, agosto). Estado del Arte en la Enseñanza del Emprendimiento. Cámara de comercio de Bogotá.',
      link:
        'http://recursos.ccb.org.co/bogotaemprende/portalninos/contenido/doc2estadodelarteenlaensenanzadelemprendimiento.pdf',
    },
    {
      referencia:
        'Escobar Lezama, J. M. (Ed.). (2009). Emprendedor digital: factor clave del éxito en la creación y consolidación de nuevas organizaciones.',
      link:
        'https://adingores.sserver.es/congresos/web/uploads/cio/cio2009/562-571.pdf',
    },
    {
      referencia:
        'Lindner, J. (2021). formación para el emprendimiento para entidades de EFTP. UNESCO.',
      link:
        'https://unevoc.unesco.org/pub/entrepreneurial_learning_guide_es.pdf',
    },
    {
      referencia:
        'S.A.S., E. (2021). Esta es la historia de Rappi, de regalar donas en Bogotá a conquistar la banca digital.',
      link:
        'https://www.larepublica.co/empresas/conozca-la-historia-de-rappi-de-regalar-donas-en-bogota-a-conquistar-la-banca-digital-3138462',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje SENA. (s. f.). Glosario. Sena.',
      link: 'https://www.sena.edu.co/es-co/ciudadano/Paginas/glosario.aspx',
    },
    {
      referencia:
        'Vargas, F. (2015, 23 noviembre). Competencias transversales y espíritu emprendedor. UNESCO.',
      link:
        'http://www.unesco.org/new/fileadmin/MULTIMEDIA/FIELD/Santiago/pdf/Vargas.pdf',
    },
    {
      referencia:
        'Kirby, D. A. (2004). Entrepreneurship education: can business school meet the challenge? Education + Training, 46 (8/9), 510-519.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Características emprendedoras personales',
      significado:
        'Rasgos de la personalidad ligadas a las motivaciones de los individuos (logro, afiliación y poder) y que están asociadas al éxito de cualquier proyecto personal. Se basan en las investigaciones del psicólogo David McClelland realizadas en la década de los años 60.',
    },
    {
      termino: '<em>Community management</em>',
      significado:
        'Profesional encargado de la imagen web de una empresa o personaje, tanto en redes sociales como en medios digitales.',
    },
    {
      termino: 'Emprendedor',
      significado:
        'Persona con actitud innovadora que busca satisfacer una necesidad y generar una oportunidad de negocio o empresa.',
    },
    {
      termino: 'Triángulo de la responsabilidad',
      significado:
        'Esquema que vincula a la persona, el proyecto y la situación, mostrando el equilibrio que es necesario lograr en todo accionar emprendedor. Responsabilidad se entiende como la capacidad de la persona de responder ante las diferentes situaciones que se puedan presentar de una manera proactiva.',
    },
  ],
  complementario: [],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo SENA',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico SENA',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Mónica Bibiana Gallego Madrid',
        cargo: 'Diseñador Instruccional Fundación CA',
        centro: 'Fundación CA',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable equipo SENA',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jhoana Hincapie Herrera',
        cargo: 'Diseño y desarrollo Fundación CA',
        centro: 'Fundación CA',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
