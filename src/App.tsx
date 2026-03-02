/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  Sparkles, 
  Lightbulb, 
  Mail, 
  Linkedin, 
  ChevronRight, 
  ExternalLink, 
  Download,
  Menu,
  X,
  MapPin,
  Calendar,
  Award,
  Users,
  MessageCircle
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Mi historia', href: '#story' },
    { name: 'Mi CV', href: '#cv' },
    { name: 'Proyectos', href: '#portfolio' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className={`font-bold tracking-tighter flex items-center text-midnight`}>
          <span className="text-3xl md:text-4xl lg:text-5xl">BLAN</span>
          <span className="mx-1 text-2xl md:text-3xl lg:text-4xl text-coral">·</span>
          <span className="font-handwritten text-coral text-6xl md:text-7xl lg:text-8xl mx-1 transform -rotate-3 translate-y-1">CA</span>
          <span className="mx-1 text-2xl md:text-3xl lg:text-4xl text-coral">·</span>
          <span className="text-3xl md:text-4xl lg:text-5xl">STRO</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-medium hover:text-coral transition-colors text-midnight"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-midnight" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 flex flex-col items-center space-y-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-medium text-midnight hover:text-coral"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-midnight/5 -skew-x-12 translate-x-1/4 z-0" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-midnight leading-tight mb-6">
            Transformando<br />
            <span className="whitespace-nowrap">ideas en experiencias</span><br />
            <span className="text-midnight text-4xl md:text-5xl lg:text-6xl block mt-2">memorables</span>
          </h1>
          <p className="text-xl md:text-2xl italic text-midnight mb-8 max-w-lg">
            Estrategia, creatividad y ejecución para experiencias que conectan y perduran.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#story" className="bg-coral text-white px-8 py-4 rounded-full font-bold hover:bg-coral/90 transition-all shadow-lg hover:shadow-coral/20">
              Mi historia
            </a>
            <a href="#portfolio" className="border-2 border-midnight text-midnight px-8 py-4 rounded-full font-bold hover:bg-midnight hover:text-white transition-all">
              Proyectos
            </a>
          </div>
          <div className="mt-8 flex gap-4">
             <a href="#cv" className="text-midnight font-semibold flex items-center gap-2 hover:text-coral transition-colors">
               Mi CV <ChevronRight size={18} />
             </a>
             <a href="#contact" className="text-midnight font-semibold flex items-center gap-2 hover:text-coral transition-colors">
               Contacto <ChevronRight size={18} />
             </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <motion.div 
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative p-3 rounded-[2.5rem] bg-white shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-midnight/5 w-full max-w-[620px]"
          >
            <img 
              src="https://drive.google.com/thumbnail?id=1rZqfuM5jP4raJVH8aWe736zrJeXJ4aY_&sz=w2000" 
              alt="Blanca Castro" 
              className="w-full h-auto rounded-[2rem] block"
              referrerPolicy="no-referrer"
            />
            
            {/* Floating Badge - smaller and moved down */}
            <div className="absolute -bottom-10 -left-4 bg-coral text-white px-4 py-2 rounded-xl shadow-2xl z-10 hidden md:block">
              <p className="text-sm font-medium italic">Construyendo proyectos con sentido</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Story = () => {
  const [selectedImg, setSelectedImg] = useState<number | null>(null);
  const africaPhotos = [
    { id: 1, url: 'https://drive.google.com/thumbnail?id=1LUAlLM-kIoWyZfyvPYFAeR5Jip0EsCE3&sz=w2000', title: 'Comunidad' },
    { id: 2, url: 'https://drive.google.com/thumbnail?id=1Wldo4xGG2Tx1zhiEhbfqQRzJDjm-X07k&sz=w2000', title: 'Trabajo en equipo' },
    { id: 3, url: 'https://drive.google.com/thumbnail?id=1JitFimCncA4znb-fvCXbva08mPilAWl8&sz=w2000', title: 'Resiliencia' },
    { id: 4, url: 'https://drive.google.com/thumbnail?id=1c-dK3TN7aSjLIQJcrF_srHLsmx1poQji&sz=w2000', title: 'Impacto' },
  ];

  return (
    <section id="story" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 leading-tight">
              <span className="text-midnight block">Inquieta desde siempre.</span>
              <span className="text-coral block">Imparable cuando creo en algo.</span>
            </h2>
            <div className="space-y-6 text-base text-dark-gray leading-relaxed">
              <p className="font-bold text-midnight text-xl italic">
                ¿Qué destacaría de mi vida?
              </p>
              <p>
                Sin duda, mi cambio profesional: de la docencia a la organización de eventos. 
                Una transición impulsada por la pasión de crear momentos que perduren.
              </p>
              <p className="bg-midnight/5 p-6 rounded-2xl border-l-4 border-coral italic">
                “Si hay algo que considero mi mayor regalo, ha sido <span className="font-bold">cumplir uno de mis sueños</span> desde pequeña: vivir la experiencia como voluntaria en <span className="font-bold">África</span>, concretamente en el poblado de <span className="font-bold">Benga, Malawi</span>. Lo que empezó como un viaje sin billete de vuelta se convirtió en seis meses viviendo en una de las tierras más auténticas que he conocido. Sumergirme en su cultura y colaborar en distintos proyectos me confirmó mi <span className="font-bold">resiliencia</span>, que <span className="font-bold">el trabajo en equipo multiplica objetivos</span> y la importancia de convertir ideas en acciones que realmente generan un <span className="font-bold">impacto</span>.”
              </p>
              <div className="flex gap-6 pt-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-midnight/10 rounded-full flex items-center justify-center text-midnight mb-2">
                    <Globe size={24} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-tighter">Mundo</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-midnight/10 rounded-full flex items-center justify-center text-midnight mb-2">
                    <Sparkles size={24} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-tighter">Magia</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-midnight/10 rounded-full flex items-center justify-center text-midnight mb-2">
                    <Lightbulb size={24} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-tighter">Ideas</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {africaPhotos.map((photo, idx) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl aspect-[4/3]"
                onClick={() => setSelectedImg(idx)}
              >
                <img 
                  src={photo.url} 
                  alt={photo.title} 
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    idx === 1 ? 'scale-[1.15] group-hover:scale-[1.35]' : 'group-hover:scale-125'
                  } ${
                    idx === 0 ? 'object-[center_15%]' : idx === 1 ? 'object-[10%_center]' : idx === 3 ? 'object-[center_55%]' : 'object-center'
                  }`}
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-midnight/95 flex items-center justify-center p-6"
            onClick={() => setSelectedImg(null)}
          >
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="max-w-4xl w-full relative"
              onClick={e => e.stopPropagation()}
            >
              <button 
                className="absolute -top-12 right-0 text-white hover:text-coral transition-colors"
                onClick={() => setSelectedImg(null)}
              >
                <X size={32} />
              </button>
              <img 
                src={africaPhotos[selectedImg].url} 
                alt="Africa" 
                className="w-full rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <p className="text-white text-center mt-4 text-xl font-bold">{africaPhotos[selectedImg].title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const CV = () => {
  const skills = [
    'Capacidad de resolución',
    'Comunicación asertiva',
    'Creatividad',
    'Responsabilidad',
    'Organización',
    'Proactividad',
  ];

  return (
    <section id="cv" className="py-24 bg-midnight/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-midnight mb-4">Trayectoria & Competencias</h2>
          <div className="w-20 h-1 bg-coral mx-auto rounded-full" />
        </div>

        <div className="space-y-16">
          {/* 1. Formación Académica */}
          <div>
            <h3 className="text-2xl font-bold text-midnight mb-8 flex items-center gap-3 justify-center">
              <Award className="text-coral" /> Formación Académica
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Máster en Organización de Congresos y Eventos (MOCE)', school: 'Cámara de Comercio de Sevilla', status: 'En curso', highlight: true },
                { title: 'Máster en Tecnología Educativa y Competencias Digitales', school: 'UNIR', status: null },
                { title: 'Experto en E-Learning y Gamificación', school: 'UNIR', status: null },
                { title: 'Graduada en Educación Infantil', school: 'Universidad San Pablo CEU', status: null },
              ].map((edu, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`p-6 rounded-2xl shadow-sm border ${edu.highlight ? 'bg-midnight text-white border-coral ring-2 ring-coral/20' : 'bg-white border-midnight/5 text-midnight'}`}
                >
                  <h4 className={`font-bold text-base mb-2 ${edu.highlight ? 'text-coral' : 'text-midnight'}`}>{edu.title}</h4>
                  <p className={`text-xs mb-4 ${edu.highlight ? 'text-white/70' : 'text-dark-gray/60'}`}>{edu.school}</p>
                  {edu.status && (
                    <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${edu.highlight ? 'bg-coral text-white' : 'bg-midnight/5 text-midnight'}`}>
                      {edu.status}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
            
          </div>

          {/* 2. Competencias */}
          <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-midnight/5">
            <h3 className="text-2xl font-bold text-midnight mb-8 text-center">Competencias Clave</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.05, backgroundColor: '#FF6F61', color: '#fff' }}
                  className="px-6 py-3 bg-midnight/5 text-midnight rounded-full font-bold text-xs transition-all cursor-default border border-midnight/10"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
            <p className="mt-10 text-center text-base italic text-dark-gray/70 max-w-2xl mx-auto">
              "Poseo gran capacidad de superación y de enfrentarme a nuevos retos, ya que ha sido una constante en las distintas experiencias de mi vida."
            </p>
          </div>

          {/* 3. Experiencia Profesional */}
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-midnight mb-8 flex items-center gap-3">
                  <Calendar className="text-coral" /> Experiencia Profesional
                </h3>
                <div className="space-y-10 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-midnight/10">
                  {[
                    {
                      company: 'RRA Consultoría',
                      role: 'Gestión integral de proyectos, comunicación y eventos',
                      period: 'Diciembre 2024 – Actualidad',
                      tasks: [
                        'Coordinación y coorganización de eventos e iniciativas del tercer sector, desde la planificación hasta la ejecución.',
                        'Asistencia a ferias y eventos sectoriales, supervisando necesidades de socios participantes y ejerciendo representación institucional.',
                        'Producción y supervisión de materiales para proyectos y eventos.',
                        'Gestión y coordinación de proveedores, clientes y colaboradores.',
                        'Responsable del área de comunicación: diseño y ejecución del plan de comunicaciones (newsletters, contenidos digitales, redes sociales y materiales corporativos).',
                        'Desarrollo e implementación de CRM y automatizaciones, liderando la digitalización interna y la optimización de procesos.',
                        'Seguimiento de captación y fidelización de socios.',
                        'Atención directa al socio y resolución de incidencias.',
                        'Gestión administrativa vinculada a proyectos: facturación y control documental.'
                      ]
                    },
                    {
                      company: 'Centro Infantil Patín Castilleja',
                      role: 'Directora Pedagógica',
                      period: 'Agosto 2023 – Agosto 2024',
                      tasks: [
                        'Dirección y coordinación del equipo educativo y personal del centro, organizando funciones, horarios y planificación anual.',
                        'Planificación y supervisión de actividades, jornadas y eventos internos, asegurando correcta ejecución logística.',
                        'Gestión integral del centro: organización operativa diaria, coordinación de recursos y resolución de incidencias.',
                        'Interlocución con familias, proveedores e instituciones, garantizando una comunicación fluida y efectiva.',
                        'Implementación de mejoras organizativas y optimización de procesos internos.',
                        'Gestión administrativa y documental del centro.'
                      ]
                    },
                    {
                      company: 'Centro Infantil La Estrella',
                      role: 'Coordinadora de centro y tutora de aula',
                      period: 'Marzo 2022 – Agosto 2023',
                      tasks: [
                        'Organización y coordinación de actividades, eventos y dinámicas del centro.',
                        'Apoyo en la planificación operativa y supervisión de tareas diarias.',
                        'Comunicación y seguimiento con familias.',
                        'Tutora de aula: seguimiento del aprendizaje y evolución.'
                      ]
                    },
                    {
                      company: 'Diversos centros educativos',
                      role: 'Maestra y tutora en Educación Infantil (en sustitución)',
                      period: 'Abril 2018 – Marzo 2022',
                      tasks: [
                        'Planificación y organización de actividades educativas en distintos entornos.',
                        'Tutora de aula: seguimiento del aprendizaje y evolución de los estudiantes.',
                        'Colaboración en el trabajo con compañeros y equipos multidisciplinares.'
                      ]
                    }
                  ].map((exp, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="pl-10 relative"
                    >
                      <div className="absolute left-0 top-1.5 w-6 h-6 bg-white border-4 border-coral rounded-full z-10" />
                      <span className="text-sm font-bold text-coral uppercase tracking-wider">{exp.period}</span>
                      <h4 className="text-lg font-bold text-midnight mt-1">{exp.company}</h4>
                      <p className="text-sm font-semibold text-midnight/70 mb-3">{exp.role}</p>
                      <ul className="space-y-2">
                        {exp.tasks.map((task, tIdx) => (
                          <li key={tIdx} className="text-dark-gray/80 text-xs flex gap-2">
                            <span className="text-coral">•</span> {task}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Experiencia Adicional */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-midnight/5"
              >
                <h3 className="text-xl font-bold text-midnight mb-4 flex items-center gap-3">
                  <Sparkles className="text-coral" size={20} /> Experiencia adicional
                </h3>
                <div className="space-y-4 text-dark-gray/80 text-sm leading-relaxed">
                  <p>
                    <span className="font-bold text-midnight">Marzo 2022 – Septiembre 2011</span>
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Soporte logístico y atención a asistentes en eventos (azafata), colaborando en control de accesos, acompañamiento y coordinación operativa.</li>
                    <li>Experiencia en hostelería, reforzando capacidad de organización, gestión del ritmo de trabajo y atención al cliente.</li>
                    <li>Apoyo administrativo en bufete jurídico: gestión documental, facturación y atención al cliente.</li>
                  </ul>
                </div>
              </motion.div>
            </div>

            <div className="space-y-8">
              <div className="bg-midnight text-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Globe size={24} className="text-coral" /> Idiomas
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold">Inglés</span>
                    <span className="bg-coral px-3 py-1 rounded-full text-xs font-bold">B2 - Trinity College</span>
                  </div>
                  <p className="text-xs text-white/70">Abril 2018. Certificación oficial.</p>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm font-bold mb-1">Experiencia Internacional</p>
                    <p className="text-xs text-white/70">Aupair en Galway (Irlanda). Abril 2015 – Febrero 2016.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [activeVideoProject, setActiveVideoProject] = useState<any | null>(null);
  const [activeDetails, setActiveDetails] = useState<any | null>(null);
  const [showFunctions, setShowFunctions] = useState(false);

  const projects = [
    {
      title: 'Frozen Food Market\n· III Edicion',
      category: 'MICE',
      desc: 'ENERO 2026 · SEVILLA\n\nEl Frozen Food Market es una feria profesional con concepto de mercado que conecta a todos los operadores del sector alimentario enfocados en el congelado.\n\nUn entorno diseñado para generar negocio, fomentar alianzas estratégicas y aportar visibilidad a la industria, impulsando el crecimiento y la conexión del sector del congelado en España.',
      functions: `III Edición Frozen Food Market – Gestión integral y supervisión del evento

1. Supervisión creativa e imagen del evento
- Guiar y supervisar la creación de la nueva imagen del evento, rótulos y materiales gráficos desarrollados por el equipo de diseño.
- Asegurar coherencia visual y calidad de todos los elementos creativos del evento.

2. Supervisión de logística
- Coordinación del espacio y montaje del evento.
- Gestión del flujo de visitantes durante la feria.
- Organización y supervisión del alojamiento de los participantes.

3. Expositores
- Identificación y captación de nuevos expositores para la feria.
- Soporte y coordinación técnica de los expositores pre-evento y durante la feria.
- Elaboración de portfolios, dossier informativos y kit creativo del expositor.

4. Coordinación de actividades
- Planificación y supervisión de todas las actividades desarrolladas para profesionales y público asistente.
- Aseguramiento de la correcta ejecución de talleres, demostraciones y sesiones B2B.

5. Marketing y comunicación
- Gestión de comunicaciones en redes sociales y newsletters del evento.
- Seguimiento de la página web y app de reuniones B2B.

6. Experiencia del asistente
- Supervisión de la interacción de los visitantes y aseguramiento de su satisfacción.

7. Análisis post-evento y feedback
- Elaboración de informes post-evento y memoria justificativa.
- Recogida de encuestas y análisis de resultados.
- Propuestas de recomendaciones y mejoras para futuras ediciones.`,
      img: 'https://drive.google.com/thumbnail?id=1qd4FGHBC6-w4O_m3z3Cl6NuJnPiFOgGh&sz=w4000',
      stats: null,
      videoUrl: 'https://www.instagram.com/reel/DTxWVwljU_l/embed',
      aspect: '9/16'
    },
    {
      title: 'VI Congreso Anual\n· Entrega de Premios Anual 2025',
      category: 'Corporativo',
      desc: 'ENERO 2026 · SEVILLA\n\nEl VI Congreso Anual es el encuentro corporativo más importante del año, diseñado para reunir a profesionales del sector y colaboradores de la organización.\n\nEl evento combina conferencias, presentaciones y actividades de networking, y culmina con la Entrega de Premios Anual 2025, en la que se reconoce públicamente la excelencia y el talento de personas, equipos o empresas destacadas. Es un espacio que potencia la motivación, el reconocimiento y la conexión entre todos los participantes.',
      functions: `VI Congreso Anual · Entrega de Premios 2025 – Memoria de ejecución

1. Supervisión creativa e imagen del evento
- Definición y supervisión de la línea gráfica y visual del evento, incluyendo branding de presentaciones, escenarios y materiales impresos.
- Coordinación con el equipo de diseño para asegurar coherencia visual y calidad en todos los elementos creativos.
- Supervisión de rótulos, señalética y ambientación de espacios.

2. Supervisión de logística
- Coordinación del montaje de salas, escenario y espacios de exposición.
- Gestión del flujo de asistentes durante el congreso y la ceremonia de entrega de premios.
- Coordinación de proveedores y equipos técnicos, incluyendo grupo musical y audiovisuales.

3. Gestión de participantes y premiados
- Identificación y coordinación con premiados, ponentes y colaboradores.
- Atención técnica y soporte antes y durante el evento.

4. Experiencia del socio
- Supervisión de la experiencia integral de los socios durante el evento, asegurando su satisfacción y atención personalizada.
- Gestión de necesidades específicas de los socios y resolución inmediata de incidencias para garantizar una experiencia fluida y positiva.

5. Marketing y comunicación
- Gestión de comunicaciones internas y externas relacionadas con el evento.
- Seguimiento de la página web y comunicaciones digitales sobre el congreso.
- Coordinación de newsletters e invitaciones para participantes y premiados.

6. Feedback y mejora continua
- Recogida de encuestas de satisfacción de asistentes y premiados.
- Propuestas de recomendaciones y mejoras para futuras ediciones del Congreso Anual.`,
      img: 'https://drive.google.com/thumbnail?id=1xGq7AKGyvlYBIw31xofTRJuDKSsmMKF0&sz=w4000',
      stats: 'Congreso',
      videoUrl: 'https://www.youtube.com/embed/5fb32zw8hzs',
      aspect: '16/9'
    },
    {
      title: 'Hub 360\n· Summit de innovación',
      category: null,
      desc: 'ABRIL 2025 · VALENCIA\n\nEl HUB 360 es un foro profesional centrado en innovación, eficiencia y movilidad, concebido como un espacio estratégico de encuentro entre empresas, patrocinadores y profesionales del sector.\n\nSe trata de un entorno dinámico que combina contenido especializado —mesas de debate, intervenciones técnicas y análisis de tendencias— con espacios de networking diseñados para fomentar la colaboración, el intercambio de conocimiento y la generación de oportunidades de negocio.\n\nEl HUB 360 actúa como plataforma de reflexión y conexión, impulsando el diálogo sobre los principales retos y avances del sector.',
      functions: `HUB 360 – Memoria de ejecución

1. Supervisión del espacio
- Coordinación y supervisión de la adecuación del espacio HUB 360 como foro especializado en innovación, eficiencia y movilidad.
- Control de la correcta distribución, ambientación y funcionalidad del área.
- Supervisión del montaje y verificación del cumplimiento de los estándares definidos.

2. Captación de patrocinadores
- Identificación y captación de patrocinadores alineados con el posicionamiento del HUB 360.

3. Desarrollo de base de datos y captación de socios
- Creación y estructuración de base de datos de nuevos posibles socios en la zona.
- Captación de nuevos socios a través de acciones vinculadas al HUB 360.

4. Imagen y creatividad
- Desarrollo y supervisión de la identidad visual del HUB 360.
- Coordinación de materiales gráficos y elementos creativos para garantizar coherencia estética del espacio.

5. Comunicación
- Gestión de la comunicación vinculada al HUB 360 dentro del marco general del evento.
- Coordinación de la difusión del foro y sus actividades.

6. Confirmación de participantes
- Gestión y confirmación de empresas y participantes del foro.
- Coordinación previa para garantizar su correcta asistencia y participación en las dinámicas programadas.

7. Organización de talleres dinámicos
- Diseño y estructuración de talleres participativos.
- Coordinación operativa y supervisión de su correcta ejecución durante el evento.`,
      img: 'https://drive.google.com/thumbnail?id=18XvrhSBMZSeIX1FJnEowelE398kywCP_&sz=w4000',
      stats: null,
      videoUrl: 'https://www.youtube.com/embed/osU8TUwjl1M',
      aspect: '16/9'
    },
    {
      title: 'Frozen Connect\n· Foro de comunicación y marketing',
      category: null,
      desc: 'NOVIEMBRE 2025 · ZAMORA\n\nFrozen Connect es un foro especializado dirigido a equipos comerciales y de marketing, concebido como un espacio estratégico de encuentro, alineación y desarrollo profesional.\n\nEl evento combina sesiones de trabajo, workshops y dinámicas de equipo orientadas a potenciar la coordinación interna, reforzar la estrategia comercial y mejorar la comunicación entre departamentos. Un entorno participativo diseñado para impulsar la cohesión, el intercambio de ideas y la optimización de resultados.',
      functions: `Frozen Connect – Memoria de ejecución

1. Coordinación y organización
- Coordinación general del foro y supervisión del desarrollo de la jornada.
- Seguimiento de la planificación para asegurar que todo se ejecutara según lo previsto.
- Coordinación con la empresa externa responsable del workshop para su correcta integración en el programa.

2. Comunicación y participantes
- Gestión completa de la comunicación del evento.
- Redacción y envío de convocatorias.
- Confirmación y seguimiento de asistentes antes y después de la jornada.

3. Desarrollo de negocio
- Búsqueda de nuevas empresas de la zona con objetivo de captación.
- Generación de oportunidades de colaboración vinculadas al evento.

4. Proveedores y logística
- Búsqueda y coordinación de proveedores locales.
- Gestión y seguimiento del catering.
- Supervisión operativa durante el evento.

5. Materiales
- Elaboración de presentaciones y soportes utilizados durante la jornada.`,
      img: 'https://drive.google.com/thumbnail?id=1IJLTe8-40Wg6W8vlXqC_R8vv_StwL3C1&sz=w4000',
      stats: null,
      videoUrl: 'https://www.youtube.com/embed/3NXMeGPVP1Y',
      aspect: '9/16'
    },
    {
      title: 'V Congreso Anual\n· Entrega de Premios Anual 2024',
      category: 'Corporativo',
      desc: 'ENERO 2025 · SEVILLA\n\nEl V Congreso de Frozen España fue el punto de encuentro estratégico del sector del congelado, reuniendo a fabricantes, distribuidores y operadores clave para analizar la evolución del mercado, los retos regulatorios y las oportunidades de crecimiento.\n\nDurante la jornada se abordaron tendencias de consumo, innovación en producto y sostenibilidad, consolidando el Congreso como un espacio de reflexión sectorial y visión de futuro.\n\nEl evento culminó con la Entrega de Premios Frozen España, un reconocimiento a las empresas y profesionales que destacan por su excelencia, trayectoria e impulso al desarrollo del sector, poniendo en valor el talento y la capacidad transformadora de la industria del congelado en España.',
      img: 'https://drive.google.com/thumbnail?id=1RDrMqwVR0mIK8A4uv0YvHXKfaOSeyZwa&sz=w4000',
      functions: `V Congreso Anual - Entrega de Premios Anual 2024 - Memoria Ejecutiva 

- Apoyo a la coordinación general del Congreso en fase avanzada de organización.
- Colaboración en la gestión y seguimiento de participantes.
- Soporte en tareas logísticas y organizativas previas al evento.
- Acompañamiento operativo durante la jornada para garantizar el correcto desarrollo de las actividades.
- Apoyo al equipo en la supervisión de espacios y control básico de incidencias.`,
      stats: 'Congreso',
      videoUrl: 'https://www.youtube.com/embed/c94B2x1xHKo',
      aspect: '16/9'
    },
    {
      title: 'Activaciones deportivas\n· Asociacion IN',
      category: 'Social / Deportivo',
      desc: 'La Asociación IN reúne a deportistas con discapacidad y trabaja para dar visibilidad al deporte adaptado. Además, promueve jornadas deportivas familiares, fomentando la inclusión, la participación activa y el disfrute del deporte como herramienta de integración y desarrollo personal.',
      img: 'https://drive.google.com/thumbnail?id=1m5q63ozk3FlMnwrHv2QNSzovf6vVcWfH&sz=w4000',
      functions: `Asociación IN – Memoria de ejecución

- Desarrollo del plan de comunicación, incluyendo difusión de actividades y seguimiento de la visibilidad del proyecto.
- Organización y apoyo en la planificación de las jornadas deportivas, asegurando su correcta ejecución.
- Apoyo logístico en competiciones deportivas, coordinando recursos y necesidades operativas.
- Colaboración con otras asociaciones y proyectos, fomentando sinergias y la participación conjunta en iniciativas deportivas y sociales.`,
      stats: 'Deportivo'
    },
    {
      title: 'Leadership Forum Sevilla\n· Etypharm',
      category: 'Corporativo',
      desc: 'Cumbre Anual Internacional de Liderazgo Etypharm\nEnero 2025 - Sevilla',
      img: 'https://drive.google.com/thumbnail?id=18i9vyKMOKbuMKljwYS_gLE4DTOJdgCgN&sz=w4000',
      functions: `Etypharm Leadership Forum – Memoria de ejecución

- Logística de transporte y alojamiento: Coordinación de transfers y gestión de reservas de hotel para los participantes del foro.
- Diseño de la experiencia del evento: Planificación y supervisión de la experiencia global, asegurando una jornada coherente y de alto impacto para los asistentes.
- Creación de materiales: Elaboración de presentaciones, dossiers y soportes gráficos necesarios para las distintas actividades.`,
      stats: 'Forum'
    },
    {
      title: 'Jornadas de Conexión\nFamilia-Escuela',
      category: 'Educativo / Social',
      desc: 'Las Jornadas de Conexión Familia-Escuela son espacios participativos diseñados para fomentar la colaboración entre familias y centros educativos. A través de actividades dinámicas, talleres y encuentros, se busca fortalecer la relación educativa, promover la participación activa de las familias y generar experiencias compartidas que refuercen el aprendizaje y la integración de la comunidad escolar.',
      img: 'https://drive.google.com/thumbnail?id=19FRTE-epOTlkZkAAJQVCJ9i2cVMz7mmd&sz=w4000',
      stats: 'Familiar'
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-midnight mb-4">Portfolio de Proyectos</h2>
            <p className="text-dark-gray/70 max-w-xl">Una selección de experiencias donde la estrategia y la creatividad se encuentran para crear impacto.</p>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 text-midnight font-bold">
              <Users size={20} className="text-coral" />
              <span>5+ Eventos</span>
            </div>
            <div className="flex items-center gap-2 text-midnight font-bold">
              <Award size={20} className="text-coral" />
              <span>Innovación</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-midnight/5 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className={`w-full h-full transition-transform duration-700 ${
                    project.title.includes('VI Congreso') ? 'object-cover object-bottom group-hover:scale-110' : 
                    project.title.includes('Frozen Connect') ? 'object-cover object-top group-hover:scale-110' :
                    project.title.includes('Hub 360') ? 'object-cover object-bottom group-hover:scale-110' :
                    project.title.includes('V Congreso') ? 'object-cover object-top group-hover:scale-110' :
                    project.title.includes('Familia-Escuela') ? 'object-cover object-top group-hover:scale-110' :
                    project.title.includes('Etypharm') ? 'object-contain p-8 bg-gray-50 group-hover:scale-105' :
                    'object-cover group-hover:scale-110'
                  }`}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-base font-bold text-midnight mb-4 min-h-[3.5rem] flex items-center whitespace-pre-line">
                  {project.title}
                </h3>
                
                <div className="mt-auto pt-4 border-t border-midnight/5 flex justify-between items-center">
                  <button 
                    onClick={() => project.videoUrl && setActiveVideoProject(project)}
                    className={`text-[11px] font-bold uppercase tracking-wider transition-colors ${project.videoUrl ? 'text-midnight hover:text-coral' : 'text-dark-gray/30 cursor-not-allowed'}`}
                  >
                    VER VIDEO
                  </button>
                  <button 
                    onClick={() => setActiveDetails(project)}
                    className="text-[11px] font-bold uppercase tracking-wider text-midnight hover:text-coral transition-colors"
                  >
                    VER DETALLES
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideoProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-midnight/95 backdrop-blur-md"
            onClick={() => setActiveVideoProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative w-full shadow-2xl overflow-hidden rounded-2xl ${
                activeVideoProject.aspect === '9/16' 
                  ? 'max-w-[400px] aspect-[9/16]' 
                  : 'max-w-5xl aspect-[16/9]'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveVideoProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all"
              >
                <X size={24} />
              </button>
              <iframe
                src={activeVideoProject.videoUrl}
                className="w-full h-full border-0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Details Modal */}
      <AnimatePresence>
        {activeDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-midnight/90 backdrop-blur-sm"
            onClick={() => setActiveDetails(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveDetails(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-midnight/5 hover:bg-midnight/10 text-midnight rounded-full flex items-center justify-center transition-all"
              >
                <X size={24} />
              </button>
              
              <div className="grid md:grid-cols-2 max-h-[90vh] overflow-y-auto">
                <div className="h-64 md:h-auto sticky top-0">
                  <img 
                    src={activeDetails.img} 
                    alt={activeDetails.title}
                    className={`w-full h-full ${activeDetails.title.includes('Etypharm') ? 'object-contain p-12 bg-gray-50' : 'object-cover'}`}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-10">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-midnight whitespace-pre-line">
                      {activeDetails.title}
                    </h3>
                  </div>
                  <div className="h-px w-12 bg-coral mb-6"></div>
                  <div className="text-dark-gray/80 leading-relaxed whitespace-pre-line text-sm mb-8">
                    {activeDetails.desc}
                  </div>

                  {activeDetails.functions && (
                    <button 
                      onClick={() => setShowFunctions(true)}
                      className="w-full py-4 bg-midnight text-white text-[11px] font-bold uppercase tracking-widest rounded-xl hover:bg-coral transition-all flex items-center justify-center gap-2 group"
                    >
                      Memoria de Ejecución
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Functions Modal (Nested) */}
      <AnimatePresence>
        {showFunctions && activeDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-midnight/95 backdrop-blur-md"
            onClick={() => setShowFunctions(false)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 border-b border-midnight/5 flex justify-between items-center bg-midnight text-white">
                <h4 className="text-lg font-bold uppercase tracking-widest">Memoria de Ejecución</h4>
                <button 
                  onClick={() => setShowFunctions(false)}
                  className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-10 max-h-[70vh] overflow-y-auto">
                <div className="text-dark-gray/80 leading-relaxed text-sm">
                  {activeDetails.functions.split('\n').map((line: string, i: number) => {
                    const trimmedLine = line.trim();
                    if (trimmedLine.startsWith('-')) {
                      return (
                        <div key={i} className="flex gap-3 mb-2 pl-4">
                          <span className="text-coral font-bold mt-0.5">-</span>
                          <span>{trimmedLine.substring(1).trim()}</span>
                        </div>
                      );
                    }
                    if (/^\d+\./.test(trimmedLine)) {
                      return (
                        <div key={i} className="font-bold text-midnight text-base mt-8 mb-4 border-b border-midnight/5 pb-2">
                          {trimmedLine}
                        </div>
                      );
                    }
                    if (i === 0) {
                      return (
                        <div key={i} className="text-midnight font-bold text-lg mb-6">
                          {line}
                        </div>
                      );
                    }
                    return (
                      <div key={i} className={line.trim() ? "mb-4" : "h-4"}>
                        {line}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="p-6 bg-gray-50 border-t border-midnight/5 text-center">
                <button 
                  onClick={() => setShowFunctions(false)}
                  className="text-[11px] font-bold uppercase tracking-widest text-midnight hover:text-coral transition-all"
                >
                  Volver a detalles
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-midnight scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">¿Hablamos de tu <span className="text-coral">próximo evento?</span></h2>
            <p className="text-white/70 text-lg mb-12">
              Estoy lista para aportar mi energía, organización y visión estratégica a tu equipo. ¡Conectemos!
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <a href="mailto:bcvillalba@gmail.com" className="flex flex-col items-center p-8 bg-white/5 rounded-3xl group hover:bg-coral transition-all">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-coral group-hover:bg-white group-hover:text-coral transition-all mb-4">
                  <Mail size={28} />
                </div>
                <p className="text-sm text-white/50 uppercase font-bold tracking-widest mb-1">Email</p>
                <p className="text-lg font-bold break-all">bcvillalba@gmail.com</p>
              </a>
              
              <a href="https://www.linkedin.com/in/blancacv-eventos/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-8 bg-white/5 rounded-3xl group hover:bg-coral transition-all">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-coral group-hover:bg-white group-hover:text-coral transition-all mb-4">
                  <Linkedin size={28} />
                </div>
                <p className="text-sm text-white/50 uppercase font-bold tracking-widest mb-1">LinkedIn</p>
                <p className="text-lg font-bold break-all">blancacv-eventos</p>
              </a>
              
              <a href="https://wa.me/34611491011" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-8 bg-white/5 rounded-3xl group hover:bg-coral transition-all">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-coral group-hover:bg-white group-hover:text-coral transition-all mb-4">
                  <MessageCircle size={28} />
                </div>
                <p className="text-sm text-white/50 uppercase font-bold tracking-widest mb-1">WhatsApp</p>
                <p className="text-lg font-bold break-all">+34 611 49 10 11</p>
              </a>
            </div>

            <div className="pt-8 border-t border-white/10 mb-12">
              <p className="text-sm text-white/50 uppercase font-bold tracking-widest mb-4">Descarga mi CV</p>
              <a 
                href="https://drive.google.com/uc?export=download&id=1CuTgr3-4HuGxHtJhEhoO0-KWEltQoo4Z" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-coral text-white px-8 py-4 rounded-2xl font-bold hover:bg-coral/90 transition-all shadow-lg hover:shadow-coral/20"
              >
                <Download size={20} /> Descargar PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-midnight/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-dark-gray/60 text-sm font-medium">
          © 2026 Blanca Castro. Todos los derechos reservados.
        </p>
        <div className="flex gap-8">
          <a href="#home" className="text-sm font-bold text-midnight hover:text-coral transition-colors">Inicio</a>
          <a href="#story" className="text-sm font-bold text-midnight hover:text-coral transition-colors">Historia</a>
          <a href="#cv" className="text-sm font-bold text-midnight hover:text-coral transition-colors">CV</a>
          <a href="#portfolio" className="text-sm font-bold text-midnight hover:text-coral transition-colors">Proyectos</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="antialiased selection:bg-coral selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <CV />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
