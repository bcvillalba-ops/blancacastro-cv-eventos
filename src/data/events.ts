export interface EventArea {
  title: string;
  desc: string;
  tasks: string[];
}

export interface EventProject {
  id: string;
  title: string;
  subtitle?: string;
  tagline?: string;
  dateCity: string;
  category: string;
  badges: string[];
  attendeesConfirmed?: string;
  topBadge?: {
    text: string;
    style?: string;
  };
  coverImg: string;
  imgPositionClass?: string;
  galleryImgs?: string[];
  hasVideo?: boolean;
  videoUrl?: string;
  aspect?: '16/9' | '9/16';
  hasGalleryAction?: boolean;
  shortDesc: string[];
  specs: {
    date: string;
    city: string;
    venue?: string;
    venues?: { label: string; name: string }[];
    duration?: string;
    format: string;
    attendees?: string;
    organizer: string;
    participationType: string;
  };
  myParticipation: {
    sectionTitle?: string;
    intro: string;
    areas: EventArea[];
  };
}

export const EVENT_PROJECTS: EventProject[] = [
  {
    id: 'family-day-sccb',
    title: 'Family Day',
    subtitle: 'Sevilla Congress and Convention Bureau',
    dateCity: 'Abril 2026 · Sevilla',
    category: 'Evento profesional',
    topBadge: {
      text: 'SCCB',
      style: 'bg-white/95 text-oliva border border-dorado/80'
    },
    badges: ['Evento profesional', 'Coordinación de equipo'],
    coverImg: 'https://drive.google.com/thumbnail?id=19YD_9N60kWkVS6ywNXAn6xb8jyW1IxP8&sz=w4000',
    imgPositionClass: 'object-cover object-center',
    galleryImgs: [
      'https://drive.google.com/thumbnail?id=19YD_9N60kWkVS6ywNXAn6xb8jyW1IxP8&sz=w4000',
      'https://drive.google.com/thumbnail?id=18SrSBQ-dtHSWtzGnDfFyjRBxk5zpNGXK&sz=w4000',
      'https://drive.google.com/thumbnail?id=1DN_RVH2o5j9GwRJ2qUXRTKUg2lFcaLMC&sz=w4000',
      'https://drive.google.com/thumbnail?id=1zTYNv86fsYMNh1cEQKdJ6m5txlojnKpl&sz=w4000',
      'https://drive.google.com/thumbnail?id=15TRWq8u7q7bF9zOwOJy633NFYQXI5nzK&sz=w4000',
      'https://drive.google.com/thumbnail?id=1r3U8vr1HIv8qo1OmSK2L1DUHhL_zbB7E&sz=w4000',
      'https://drive.google.com/thumbnail?id=1_GKs9jeACfMA2hIdNzzGFeeQhR5ItZu9&sz=w4000',
      'https://drive.google.com/thumbnail?id=11NZ7vW6wvhhGK57CK_XDGsYqNx0nLonT&sz=w4000',
      'https://drive.google.com/thumbnail?id=1JWaDzVAIEiK1g6QRDwLF_yVtKbJ6POdU&sz=w4000'
    ],
    hasVideo: false,
    hasGalleryAction: true,
    shortDesc: [
      'Encuentro profesional y corporativo promovido por el Sevilla Congress and Convention Bureau (SCCB) concebido para reunir a profesionales del sector, empresas asociadas y colaboradores en un entorno participativo y distendido.',
      'Una jornada diseñada para combinar dinamización, networking y actividades experienciales, reforzando la vinculación entre socios y proyectando el valor de la comunidad MICE de Sevilla.'
    ],
    specs: {
      date: 'Abril de 2026',
      city: 'Sevilla',
      venue: 'Torre Cruzcampo',
      format: 'Family Day profesional',
      organizer: 'Sevilla Congress and Convention Bureau',
      participationType: 'Coordinación de equipo, distribución de funciones y apoyo a la organización'
    },
    myParticipation: {
      sectionTitle: 'Coordinación de equipo y desarrollo operativo',
      intro: 'Coordinación del equipo participante en el evento, distribución de funciones y seguimiento de la operativa durante la jornada.',
      areas: [
        {
          title: 'Coordinación de equipo',
          desc: 'Organización del equipo de trabajo y seguimiento de funciones.',
          tasks: [
            'Coordinación del equipo participante en el evento.',
            'Organización y asignación de funciones.',
            'Seguimiento de responsabilidades y necesidades operativas.',
            'Comunicación con las personas implicadas durante el desarrollo de la jornada.'
          ]
        },
        {
          title: 'Planificación y guion operativo',
          desc: 'Estructuración de tiempos, secuencias y necesidades del programa.',
          tasks: [
            'Participación en la planificación del evento.',
            'Elaboración y seguimiento del guion operativo.',
            'Organización de tiempos, actividades y necesidades.',
            'Supervisión del cumplimiento de las funciones asignadas.'
          ]
        },
        {
          title: 'Desarrollo de la jornada',
          desc: 'Acompañamiento operativo y atención a incidencias.',
          tasks: [
            'Apoyo a la coordinación de actividades.',
            'Seguimiento de la operativa durante el evento.',
            'Atención a las necesidades que surgieron durante la ejecución.',
            'Resolución y canalización de incidencias.'
          ]
        }
      ]
    }
  },
  {
    id: 'frozen-food-market-3',
    title: 'Frozen Food Market',
    subtitle: 'III Edición',
    dateCity: 'Enero 2026 · Sevilla',
    category: 'Feria profesional',
    topBadge: {
      text: 'Feria profesional',
      style: 'bg-white/95 text-oliva border border-arena'
    },
    badges: ['Feria profesional', 'MICE'],
    attendeesConfirmed: '+2.000 asistentes',
    coverImg: 'https://drive.google.com/thumbnail?id=1qd4FGHBC6-w4O_m3z3Cl6NuJnPiFOgGh&sz=w4000',
    imgPositionClass: 'object-cover object-center',
    galleryImgs: [
      'https://drive.google.com/thumbnail?id=1UCrgo_70tsiIs-k1hE71X9r3HluRl-tL&sz=w4000',
      'https://drive.google.com/thumbnail?id=12fGn3hwsdnwF1_G8mpB3ZAHiOpizBBKj&sz=w4000',
      'https://drive.google.com/thumbnail?id=1i-ilGm4BdfY7tUVNYUMN64VENFoLM5As&sz=w4000',
      'https://drive.google.com/thumbnail?id=1qOZO7xe2Dj90e6vGqh-_gOhjRsruDLbF&sz=w4000',
      'https://drive.google.com/thumbnail?id=1biQIJ0nF1s3pn4_Qk8nLmgzlKZEGKpRz&sz=w4000',
      'https://drive.google.com/thumbnail?id=1qd4FGHBC6-w4O_m3z3Cl6NuJnPiFOgGh&sz=w4000',
      'https://drive.google.com/thumbnail?id=1osZK96f5uASXaJeHUZ5KbOkaC6xw4dtw&sz=w4000',
      'https://drive.google.com/thumbnail?id=1pqZVPC9LxH3SHOc1N2bGfYFTEgvTLlMx&sz=w4000',
      'https://drive.google.com/thumbnail?id=1BO-iluR_4-eIDD2kTqNOqGzI0pQmjS_4&sz=w4000'
    ],
    hasVideo: true,
    videoUrl: 'https://www.instagram.com/reel/DTxWVwljU_l/embed',
    aspect: '9/16',
    shortDesc: [
      'Feria profesional con concepto de mercado que conecta a todos los operadores del sector alimentario enfocados en el congelado en España.',
      'Un entorno estratégico diseñado para generar negocio B2B, fomentar alianzas comerciales y aportar visibilidad integral a la cadena de valor de la industria.'
    ],
    specs: {
      date: 'Enero de 2026',
      city: 'Sevilla',
      venue: 'FIBES - Palacio de Congresos y Exposiciones',
      format: 'Feria profesional',
      attendees: 'Más de 2.000 personas',
      organizer: 'Asociación Frozen España / RRA Consultoría',
      participationType: 'Coorganización compartida'
    },
    myParticipation: {
      sectionTitle: 'Participación en la coorganización y ejecución del evento',
      intro: 'Participación en la coorganización y ejecución del evento, abarcando imagen, logística, expositores, actividades, comunicación y seguimiento posterior.',
      areas: [
        {
          title: 'Imagen y producción creativa',
          desc: 'Supervisión visual y coherencia gráfica de la feria.',
          tasks: [
            'Participación en la creación y supervisión de la nueva imagen del evento.',
            'Seguimiento de rótulos, señalética y materiales gráficos desarrollados por el equipo de diseño.',
            'Comprobación de la coherencia visual y calidad de los elementos creativos.'
          ]
        },
        {
          title: 'Logística y espacio',
          desc: 'Coordinación del recinto ferial, flujos y servicios.',
          tasks: [
            'Participación en la coordinación del espacio y del montaje.',
            'Seguimiento del flujo de visitantes durante la feria.',
            'Organización y supervisión del alojamiento de participantes cuando fue necesario.'
          ]
        },
        {
          title: 'Expositores',
          desc: 'Soporte, captación y coordinación técnica comercial.',
          tasks: [
            'Participación en la identificación y captación de nuevos expositores.',
            'Soporte y coordinación técnica antes y durante la feria.',
            'Elaboración de portfolios, dosieres informativos y kit creativo para expositores.'
          ]
        },
        {
          title: 'Actividades profesionales',
          desc: 'Seguimiento del programa técnico, demostraciones y B2B.',
          tasks: [
            'Participación en la planificación y seguimiento de las actividades dirigidas a profesionales y público asistente.',
            'Seguimiento de talleres, demostraciones y sesiones B2B.',
            'Comprobación del desarrollo previsto de las actividades.'
          ]
        },
        {
          title: 'Marketing y comunicación',
          desc: 'Canales digitales, plataformas y contenidos.',
          tasks: [
            'Gestión de comunicaciones en redes sociales y newsletters.',
            'Seguimiento de la página web del evento.',
            'Seguimiento de la aplicación de reuniones B2B.',
            'Producción y coordinación de contenidos y materiales de comunicación.'
          ]
        },
        {
          title: 'Experiencia del asistente',
          desc: 'Atención a profesionales y resolución operativa.',
          tasks: [
            'Atención a visitantes, socios y participantes.',
            'Seguimiento de sus necesidades durante la feria.',
            'Apoyo en la resolución de incidencias.',
            'Supervisión de la interacción de los visitantes y recogida de impresiones.'
          ]
        },
        {
          title: 'Seguimiento posterior',
          desc: 'Evaluación post-evento, encuestas y propuestas.',
          tasks: [
            'Elaboración de informes y memoria justificativa.',
            'Recogida de encuestas.',
            'Análisis de resultados.',
            'Propuesta de recomendaciones y mejoras para futuras ediciones.'
          ]
        }
      ]
    }
  },
  {
    id: 'vi-congreso-anual-2025',
    title: 'VI Congreso Anual',
    subtitle: 'Entrega de Premios 2025',
    dateCity: 'Enero 2026 · Sevilla',
    category: 'Congreso corporativo',
    topBadge: {
      text: 'Congreso corporativo',
      style: 'bg-white/95 text-oliva border border-arena'
    },
    badges: ['Congreso corporativo', 'MICE'],
    attendeesConfirmed: '≈200 asistentes',
    coverImg: 'https://drive.google.com/thumbnail?id=1xGq7AKGyvlYBIw31xofTRJuDKSsmMKF0&sz=w4000',
    imgPositionClass: 'object-cover object-bottom',
    galleryImgs: [
      'https://drive.google.com/thumbnail?id=1JsKgO-1UgFWn9hXo2ufnF4NURrRDwVR_&sz=w4000',
      'https://drive.google.com/thumbnail?id=18-mvcoG3EGSfrzdObzt3Y1d7xqnsaRY2&sz=w4000',
      'https://drive.google.com/thumbnail?id=1eTsUJ_Xuk2wZJ7MhCL-nj2sN3RzsEkgV&sz=w4000',
      'https://drive.google.com/thumbnail?id=1xGq7AKGyvlYBIw31xofTRJuDKSsmMKF0&sz=w4000'
    ],
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/5fb32zw8hzs',
    aspect: '16/9',
    shortDesc: [
      'El encuentro corporativo más relevante del año para la organización, reuniendo a profesionales, empresas asociadas y colaboradores institucionales.',
      'Combina ponencias de alto nivel, mesas redondas y networking estratégico, culminando con la gala oficial de Entrega de Premios Anual 2025.'
    ],
    specs: {
      date: 'Enero de 2026',
      city: 'Sevilla',
      venue: 'Setas de Sevilla',
      format: 'Congreso corporativo y entrega de premios',
      attendees: 'Aproximadamente 200 personas',
      organizer: 'Asociación Frozen España / RRA Consultoría',
      participationType: 'Coorganización compartida'
    },
    myParticipation: {
      sectionTitle: 'Participación en la coorganización y ejecución del congreso',
      intro: 'Participación en la coorganización y ejecución del congreso y la gala anual de premios, coordinando imagen, logística, participantes y comunicación.',
      areas: [
        {
          title: 'Imagen y ambientación',
          desc: 'Definición visual, branding y señalética del congreso.',
          tasks: [
            'Participación en la definición y seguimiento de la línea gráfica y visual.',
            'Coordinación con el equipo de diseño.',
            'Seguimiento del branding de presentaciones, escenario y materiales impresos.',
            'Supervisión de rótulos, señalética y ambientación de espacios.'
          ]
        },
        {
          title: 'Logística y montaje',
          desc: 'Espacios, medios técnicos y coordinación de proveedores.',
          tasks: [
            'Participación en la coordinación del montaje de salas, escenario y zonas del evento.',
            'Seguimiento de proveedores y equipos técnicos.',
            'Coordinación con audiovisuales y grupo musical.',
            'Gestión del flujo de asistentes durante el congreso y la entrega de premios.'
          ]
        },
        {
          title: 'Participantes, ponentes y premiados',
          desc: 'Atención técnica e interlocución con galardonados.',
          tasks: [
            'Identificación y coordinación con premiados, ponentes y colaboradores.',
            'Atención y soporte antes y durante el evento.',
            'Seguimiento de necesidades específicas.',
            'Resolución de incidencias relacionadas con su participación.'
          ]
        },
        {
          title: 'Experiencia del socio y del asistente',
          desc: 'Atención personalizada y dinamización.',
          tasks: [
            'Atención personalizada a socios y asistentes.',
            'Seguimiento de necesidades durante el evento.',
            'Apoyo en la resolución inmediata de incidencias.',
            'Coordinación para garantizar una experiencia fluida.'
          ]
        },
        {
          title: 'Marketing y comunicación',
          desc: 'Difusión, convocatorias e invitaciones.',
          tasks: [
            'Gestión de comunicaciones internas y externas.',
            'Seguimiento de la página web y comunicaciones digitales.',
            'Coordinación de newsletters e invitaciones.',
            'Comunicación con participantes, premiados y colaboradores.'
          ]
        },
        {
          title: 'Feedback y mejora',
          desc: 'Encuestas y propuestas de optimización continua.',
          tasks: [
            'Recogida de encuestas de satisfacción.',
            'Seguimiento de impresiones de asistentes y premiados.',
            'Elaboración de recomendaciones y mejoras para futuras ediciones.'
          ]
        }
      ]
    }
  },
  {
    id: 'frozen-connect',
    title: 'Frozen Connect',
    subtitle: 'Foro de comunicación y marketing',
    dateCity: 'Noviembre 2025 · Zamora',
    category: 'Foro profesional',
    topBadge: {
      text: 'Foro profesional',
      style: 'bg-white/95 text-oliva border border-arena'
    },
    badges: ['Foro profesional', 'Marketing B2B'],
    attendeesConfirmed: '≈80 asistentes',
    coverImg: 'https://drive.google.com/thumbnail?id=1IJLTe8-40Wg6W8vlXqC_R8vv_StwL3C1&sz=w4000',
    imgPositionClass: 'object-cover object-top',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/3NXMeGPVP1Y',
    aspect: '9/16',
    shortDesc: [
      'Foro especializado dirigido a equipos comerciales y de marketing, concebido como un espacio de alineación estratégica, debate y capacitación sectorial.',
      'Integra dinámicas participativas, workshops especializados y mesas de trabajo orientadas a fortalecer la comunicación interna y las estrategias comerciales.'
    ],
    specs: {
      date: 'Noviembre de 2025',
      duration: 'Dos jornadas',
      city: 'Zamora',
      venues: [
        { label: 'Primera jornada', name: 'Casino Café Zamora' },
        { label: 'Segunda jornada', name: 'Fundación Rei Afonso Henriques' }
      ],
      format: 'Foro profesional de comunicación y marketing',
      attendees: 'Aproximadamente 80 personas',
      organizer: 'Asociación Frozen España / RRA Consultoría',
      participationType: 'Coorganización compartida'
    },
    myParticipation: {
      sectionTitle: 'Participación en la coordinación y desarrollo de las dos jornadas',
      intro: 'Participación en la coordinación y desarrollo de las dos jornadas, gestionando proveedores locales, convocatorias, workshop y logística general.',
      areas: [
        {
          title: 'Coordinación y desarrollo del foro',
          desc: 'Supervisión de la jornada y coordinación de actividades y workshops.',
          tasks: [
            'Participación en la coordinación y desarrollo del foro, asegurando el cumplimiento del programa.',
            'Coordinación con la empresa externa facilitadora del workshop interactivo.',
            'Seguimiento de la planificación operativa para garantizar tiempos y dinámicas.'
          ]
        },
        {
          title: 'Logística y proveedores locales',
          desc: 'Gestión in situ de catering, medios técnicos y salas de trabajo.',
          tasks: [
            'Búsqueda y coordinación de proveedores locales de restauración y medios.',
            'Gestión y seguimiento del servicio de catering y pausas de café.',
            'Supervisión operativa de las salas de dinámicas durante la jornada.'
          ]
        },
        {
          title: 'Comunicación y participantes',
          desc: 'Convocatorias, confirmaciones y atención a los asistentes.',
          tasks: [
            'Redacción y envío de convocatorias personalizadas para directores comerciales y de marketing.',
            'Confirmación, seguimiento y atención a los participantes antes y después del foro.',
            'Prospección de empresas de la zona para fomentar la asistencia de nuevos socios.'
          ]
        },
        {
          title: 'Materiales y presentaciones',
          desc: 'Preparación de los soportes y documentación de la sesión.',
          tasks: [
            'Elaboración y revisión de presentaciones y soportes visuales para las ponencias.',
            'Preparación del material de trabajo necesario para las dinámicas grupales.'
          ]
        }
      ]
    }
  },
  {
    id: 'hub-360',
    title: 'Hub 360',
    subtitle: 'Summit de innovación',
    dateCity: 'Abril 2025 · Valencia',
    category: 'Foro profesional',
    topBadge: {
      text: 'Foro profesional',
      style: 'bg-white/95 text-oliva border border-arena'
    },
    badges: ['Innovación', 'Networking'],
    coverImg: 'https://drive.google.com/thumbnail?id=18XvrhSBMZSeIX1FJnEowelE398kywCP_&sz=w4000',
    imgPositionClass: 'object-cover object-bottom',
    galleryImgs: [
      'https://drive.google.com/thumbnail?id=18XvrhSBMZSeIX1FJnEowelE398kywCP_&sz=w4000',
      'https://drive.google.com/thumbnail?id=10pjN5YOkut_s0VUWgXPwb8em_1OyAPPj&sz=w4000',
      'https://drive.google.com/thumbnail?id=1FjpSqK7UlmpR5KkWzxV_JVKTrsasOA5g&sz=w4000',
      'https://drive.google.com/thumbnail?id=1X6vVOi-Q6Ru4nECIt1W4QkrHRnulqI8h&sz=w4000',
      'https://drive.google.com/thumbnail?id=1TRuEA-qjDL1JLlaw8gxeyZrgVElThIcS&sz=w4000',
      'https://drive.google.com/thumbnail?id=1VAFrQs7VT93U0tPquJheLJm4Yi7VLows&sz=w4000'
    ],
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/osU8TUwjl1M',
    aspect: '16/9',
    shortDesc: [
      'Foro profesional centrado en innovación, eficiencia operativa y movilidad sostenible, concebido como plataforma de encuentro entre empresas líderes y partners tecnológicos.',
      'Un entorno participativo que combinó mesas de debate técnico, análisis de tendencias y espacios de networking estructurado para generar alianzas estratégicas.'
    ],
    specs: {
      date: 'Abril de 2025',
      city: 'Valencia',
      venue: 'Aspar Circuit',
      format: 'Foro profesional y summit de innovación',
      attendees: 'Directivos, partners y profesionales del sector',
      organizer: 'Asociación Frozen España / RRA Consultoría',
      participationType: 'Participación en la organización y desarrollo del espacio Hub 360'
    },
    myParticipation: {
      sectionTitle: 'Participación en la organización y desarrollo del espacio Hub 360',
      intro: 'Participación en la organización y desarrollo del espacio HUB 360, dinamización de talleres, prospección de patrocinadores y gestión de imagen.',
      areas: [
        {
          title: 'Coordinación del espacio HUB 360',
          desc: 'Adecuación de áreas temáticas y supervisión de montajes.',
          tasks: [
            'Coordinación de la adecuación del espacio especializado en innovación y movilidad.',
            'Supervisión de la ambientación, distribución y funcionalidad de las áreas de networking.',
            'Verificación del montaje según los estándares de imagen corporativa.'
          ]
        },
        {
          title: 'Talleres dinámicos y dinámicas',
          desc: 'Diseño y soporte operativo en actividades participativas.',
          tasks: [
            'Apoyo en la estructuración de talleres interactivos de co-creación.',
            'Coordinación operativa y seguimiento durante el desarrollo de las sesiones dinámicas.'
          ]
        },
        {
          title: 'Patrocinadores y captación',
          desc: 'Soporte en la prospección de partners y base de datos.',
          tasks: [
            'Apoyo en la identificación de patrocinadores estratégicos alineados con el foro.',
            'Estructuración de bases de datos para prospección de nuevos socios.',
            'Gestión de confirmaciones de empresas asistentes.'
          ]
        },
        {
          title: 'Imagen y comunicación',
          desc: 'Soportes gráficos y difusión de actividades.',
          tasks: [
            'Participación en imagen y producción de materiales gráficos vinculados al espacio.',
            'Apoyo en la difusión de las actividades y contenidos del HUB 360.'
          ]
        }
      ]
    }
  },
  {
    id: 'v-congreso-anual-2024',
    title: 'V Congreso Anual',
    subtitle: 'Entrega de Premios 2024',
    dateCity: 'Enero 2025 · Sevilla',
    category: 'Congreso corporativo',
    topBadge: {
      text: 'Congreso corporativo',
      style: 'bg-white/95 text-oliva border border-arena'
    },
    badges: ['Congreso corporativo', 'MICE'],
    attendeesConfirmed: '≈200 asistentes',
    coverImg: 'https://drive.google.com/thumbnail?id=1RDrMqwVR0mIK8A4uv0YvHXKfaOSeyZwa&sz=w4000',
    imgPositionClass: 'object-cover object-top',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/c94B2x1xHKo',
    aspect: '16/9',
    shortDesc: [
      'Punto de encuentro estratégico del sector del congelado, reuniendo a fabricantes, distribuidores y operadores clave para analizar la evolución del mercado y retos regulatorios.',
      'La jornada culminó con la Entrega de Premios Frozen España, reconociendo públicamente la trayectoria y excelencia de las empresas del sector.'
    ],
    specs: {
      date: 'Enero de 2025',
      city: 'Sevilla',
      venue: 'Casino de la Exposición de Sevilla',
      format: 'Congreso corporativo y entrega de premios',
      attendees: 'Aproximadamente 200 personas',
      organizer: 'Asociación Frozen España / RRA Consultoría',
      participationType: 'Apoyo a la organización durante una fase avanzada'
    },
    myParticipation: {
      sectionTitle: 'Apoyo a la organización en fase avanzada',
      intro: 'Apoyo a la organización en una fase avanzada de preparación, colaborando en tareas logísticas y acompañamiento operativo.',
      areas: [
        {
          title: 'Apoyo a la coordinación general',
          desc: 'Soporte organizativo en la fase final previa al evento.',
          tasks: [
            'Apoyo a la coordinación general del Congreso en fase avanzada de organización.',
            'Soporte en tareas logísticas y organizativas previas a la apertura.',
            'Colaboración en la gestión y seguimiento del listado de participantes.'
          ]
        },
        {
          title: 'Acompañamiento operativo in situ',
          desc: 'Asistencia durante la jornada para el correcto flujo del programa.',
          tasks: [
            'Acompañamiento operativo durante la jornada para garantizar el correcto desarrollo de las actividades.',
            'Apoyo al equipo en la supervisión de espacios y control básico de incidencias.',
            'Asistencia puntual en el área de acreditaciones y atención a asistentes.'
          ]
        }
      ]
    }
  },
  {
    id: 'leadership-forum-sevilla',
    title: 'Leadership Forum Sevilla',
    subtitle: 'Ethypharm',
    dateCity: 'Enero 2025 · Sevilla',
    category: 'Cumbre corporativa',
    topBadge: {
      text: 'Cumbre corporativa',
      style: 'bg-white/95 text-oliva border border-arena'
    },
    badges: ['Cumbre corporativa', 'Internacional'],
    coverImg: 'https://drive.google.com/thumbnail?id=18i9vyKMOKbuMKljwYS_gLE4DTOJdgCgN&sz=w4000',
    imgPositionClass: 'object-contain p-8 bg-white',
    hasVideo: false,
    shortDesc: [
      'Cumbre Anual Internacional de Liderazgo de la compañía farmacéutica Ethypharm, celebrada en Sevilla para directivos y líderes de equipo de diversas sedes.',
      'Un encuentro corporativo orientado a alinear estrategias de liderazgo, cultura de empresa y visión internacional en un marco de trabajo de alto nivel.'
    ],
    specs: {
      date: 'Enero de 2025',
      city: 'Sevilla',
      venue: 'Sede hotelera y salas de conferencias',
      format: 'Cumbre internacional de liderazgo corporativo',
      attendees: 'Directivos internacionales y líderes de equipo',
      organizer: 'Ethypharm',
      participationType: 'Participación en coordinación logística y experiencia'
    },
    myParticipation: {
      sectionTitle: 'Participación en coordinación logística y experiencia',
      intro: 'Apoyo a la coordinación logística, transfers, alojamiento y diseño de experiencia para los directivos asistentes.',
      areas: [
        {
          title: 'Logística de transporte y alojamiento',
          desc: 'Coordinación de traslados, transfers y reservas hoteleras.',
          tasks: [
            'Coordinación de transfers y operativa de traslados de llegada y salida para participantes.',
            'Gestión y seguimiento de las reservas de hotel para los directivos internacionales.',
            'Atención a requerimientos específicos de estancia y movilidad.'
          ]
        },
        {
          title: 'Experiencia del asistente y soportes',
          desc: 'Acompañamiento en el desarrollo fluido de la cumbre.',
          tasks: [
            'Apoyo en la planificación de la experiencia global del asistente durante la jornada.',
            'Colaboración en la preparación de presentaciones, dossiers y soportes gráficos para las sesiones de trabajo.',
            'Atención y soporte directo in situ a ponentes y participantes.'
          ]
        }
      ]
    }
  },
  {
    id: 'activaciones-deportivas-in',
    title: 'Activaciones deportivas',
    subtitle: 'Asociación IN',
    dateCity: '2025–2026 · Andalucía',
    category: 'Social / Deportivo',
    topBadge: {
      text: 'Social / Deportivo',
      style: 'bg-white/95 text-oliva border border-arena'
    },
    badges: ['Social / Deportivo', 'Inclusión'],
    coverImg: 'https://drive.google.com/thumbnail?id=1m5q63ozk3FlMnwrHv2QNSzovf6vVcWfH&sz=w4000',
    imgPositionClass: 'object-cover object-center',
    hasVideo: false,
    shortDesc: [
      'La Asociación IN reúne a deportistas con discapacidad y trabaja activamente para visibilizar el deporte adaptado y los valores de superación.',
      'Promueve jornadas deportivas familiares y encuentros inclusivos, utilizando la actividad física como una poderosa herramienta de integración social y comunitaria.'
    ],
    specs: {
      date: '2025–2026',
      city: 'Andalucía',
      venue: 'Instalaciones deportivas y espacios públicos',
      format: 'Jornadas deportivas adaptadas y eventos familiares',
      attendees: 'Deportistas con discapacidad, familias y voluntarios',
      organizer: 'Asociación IN',
      participationType: 'Participación en comunicación y apoyo organizativo'
    },
    myParticipation: {
      sectionTitle: 'Participación en comunicación y apoyo organizativo',
      intro: 'Desarrollo de planes de comunicación, apoyo logístico en competiciones y coordinación con asociaciones colaboradoras.',
      areas: [
        {
          title: 'Comunicación y difusión',
          desc: 'Visibilidad de las actividades y valores de la entidad.',
          tasks: [
            'Desarrollo del plan de comunicación y difusión de actividades.',
            'Seguimiento y cobertura de la visibilidad de los proyectos deportivos.',
            'Redacción de contenidos y gestión de redes sociales.'
          ]
        },
        {
          title: 'Planificación de jornadas y logística',
          desc: 'Coordinación de recursos y soporte en pruebas deportivas.',
          tasks: [
            'Organización y apoyo en la planificación de jornadas deportivas familiares.',
            'Apoyo logístico en competiciones, coordinando necesidades operativas y materiales adaptados.',
            'Colaboración con otras entidades y asociaciones para el desarrollo de sinergias conjuntas.'
          ]
        }
      ]
    }
  },
  {
    id: 'jornadas-conexion-familia-escuela',
    title: 'Jornadas de Conexión',
    subtitle: 'Familia–Escuela',
    dateCity: '2022–2024 · Sevilla',
    category: 'Proyecto educativo',
    topBadge: {
      text: 'Proyecto educativo',
      style: 'bg-white/95 text-terracota border border-terracota/40'
    },
    badges: ['Proyecto educativo', 'Comunidad'],
    coverImg: 'https://drive.google.com/thumbnail?id=19FRTE-epOTlkZkAAJQVCJ9i2cVMz7mmd&sz=w4000',
    imgPositionClass: 'object-cover object-top',
    hasVideo: false,
    shortDesc: [
      'Iniciativa participativa diseñada y desarrollada durante la etapa profesional de Blanca en el ámbito educativo para estrechar la colaboración entre familias y centro escolar.',
      'A través de dinámicas grupales, talleres prácticos y encuentros periódicos, se generaron espacios de confianza que potenciaron la implicación comunitaria y el desarrollo integral del alumnado.'
    ],
    specs: {
      date: '2022–2024',
      city: 'Sevilla',
      venue: 'Centro educativo y espacios exteriores',
      format: 'Talleres experienciales, dinámicas de grupo y jornadas familiares',
      attendees: 'Comunidad educativa: familias, profesorado y alumnado',
      organizer: 'Centro Educativo / Dirección Pedagógica',
      participationType: 'Diseño, coordinación pedagógica y dinamización'
    },
    myParticipation: {
      sectionTitle: 'Diseño, coordinación pedagógica y dinamización',
      intro: 'Proyecto desarrollado durante la etapa educativa de Blanca como directora pedagógica y coordinadora de centro.',
      areas: [
        {
          title: 'Diseño metodológico y actividades',
          desc: 'Creación de las dinámicas y contenidos participativos.',
          tasks: [
            'Diseño pedagógico de talleres y actividades colaborativas para familias y escolares.',
            'Estructuración de objetivos, cronograma y dinámicas de integración.',
            'Elaboración de materiales didácticos y guías de acompañamiento.'
          ]
        },
        {
          title: 'Coordinación operativa y familias',
          desc: 'Gestión de convocatorias, espacios y resolución de necesidades.',
          tasks: [
            'Convocatoria y comunicación continua con las familias participantes.',
            'Coordinación de los espacios y recursos del centro escolar para el desarrollo de las jornadas.',
            'Evaluación cualitativa del impacto y satisfacción de la comunidad educativa.'
          ]
        }
      ]
    }
  }
];
