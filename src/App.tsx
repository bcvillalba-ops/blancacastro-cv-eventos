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
  Download,
  Menu,
  X,
  Calendar,
  Award,
  Users,
  MessageCircle,
  GraduationCap,
  Layers,
  Table,
  Laptop
} from 'lucide-react';
import { Portfolio } from './components/Portfolio';
const profilePhotoUrl = 'https://drive.google.com/thumbnail?id=1zGh02SiaQ_ceNbPL-bsitlIZFvjHo_Lo&sz=w2000';

// --- Navigation Component ---

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
    { name: 'Experiencia profesional', href: '#experiencia' },
    { name: 'Eventos destacados', href: '#eventos' },
    { name: 'Formación y herramientas', href: '#formacion' },
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-marfil/95 backdrop-blur-md shadow-sm border-b border-arena/60 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="font-bold tracking-tighter flex items-center text-oliva">
          <span className="text-3xl md:text-4xl lg:text-5xl">BLAN</span>
          <span className="mx-1 text-2xl md:text-3xl lg:text-4xl text-dorado">·</span>
          <span className="font-handwritten text-terracota text-6xl md:text-7xl lg:text-8xl mx-1 transform -rotate-3 translate-y-1">CA</span>
          <span className="mx-1 text-2xl md:text-3xl lg:text-4xl text-dorado">·</span>
          <span className="text-3xl md:text-4xl lg:text-5xl">STRO</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm xl:text-base font-medium hover:text-terracota transition-colors text-carbon/90 whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          aria-label="Abrir menú"
          className="lg:hidden text-oliva p-2 rounded-lg hover:bg-arena/50 transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
        >
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
            className="absolute top-full left-0 w-full bg-marfil shadow-xl py-6 flex flex-col items-center space-y-4 lg:hidden border-b border-arena"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-medium text-carbon hover:text-terracota transition-colors py-1"
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

// --- Hero Component ---

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-marfil scroll-mt-20">
      {/* Background Soft Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-arena/40 -skew-x-12 translate-x-1/4 z-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 py-12 md:py-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs sm:text-sm font-bold text-terracota uppercase tracking-[0.18em] mb-3">
            ORGANIZACIÓN Y COORDINACIÓN DE EVENTOS
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-oliva leading-tight mb-4">
            Transformando<br />
            <span className="whitespace-nowrap">ideas en experiencias</span><br />
            <span className="text-oliva text-4xl md:text-5xl lg:text-6xl block mt-2">memorables</span>
          </h1>
          <div className="w-24 h-1 bg-dorado rounded-full mb-6" />
          <p className="text-lg md:text-xl text-carbon/85 mb-8 max-w-lg leading-relaxed">
            Visión de conjunto, atención al detalle y capacidad de respuesta para que cada pieza encaje.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#experiencia" 
              className="bg-terracota text-white px-8 py-4 rounded-full font-bold hover:bg-bosque transition-all shadow-lg hover:shadow-terracota/25"
            >
              Experiencia en eventos
            </a>
            <a 
              href="https://drive.google.com/uc?export=download&id=1-9epS3S7wwWcBIi_4ur-PB1U9dnMcvNU" 
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-oliva text-oliva px-8 py-4 rounded-full font-bold hover:bg-oliva hover:text-white transition-all flex items-center gap-2 group"
            >
              <Download size={18} className="text-dorado group-hover:text-white transition-colors" /> Ver CV
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
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] aspect-square flex items-center justify-center"
          >
            <div className="w-full h-full rounded-full overflow-hidden shadow-xl">
              <img 
                src={profilePhotoUrl} 
                alt="Blanca Castro" 
                className="w-full h-full object-cover object-center block"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Section 1: Experiencia Profesional ---

const Experience = () => {
  return (
    <section id="experiencia" className="py-24 bg-arena/35 scroll-mt-20 border-y border-arena/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Encabezado sin línea decorativa con separación limpia */}
        <div className="text-center mb-12 sm:mb-14">
          <h2 className="text-4xl font-bold text-oliva">Experiencia Profesional</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          
          {/* 1. Viajes Triana: Experiencia actual protagonista (Cabecera independiente con elegante doble marco) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-10"
          >
            {/* Marco exterior en verde corporativo con separación visible de 6px */}
            <div className="rounded-3xl p-[5px] sm:p-[6px] bg-white border border-terracota/50 shadow-sm">
              {/* Marco interior en amarillo mostaza */}
              <div className="rounded-[1.35rem] p-6 sm:p-8 bg-[#FCFDFB] border border-dorado/90">
                
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <span className="text-xs sm:text-sm font-bold text-terracota uppercase tracking-wider">
                    DESDE MAYO DE 2026
                  </span>
                  <span className="border border-dorado/90 bg-arena/20 text-oliva text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-xs">
                    ACTUALIDAD
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-oliva">
                  Viajes Triana
                </h3>
                <p className="text-sm sm:text-base font-semibold text-terracota mb-4">
                  Delegada Comercial BTC · Área Triana Corporate
                </p>

                {/* Línea divisoria horizontal fina */}
                <div className="pt-4 border-t border-arena/70">
                  <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2.5">
                    <li className="flex items-start gap-2.5 text-xs sm:text-[0.88rem] text-carbon/85 leading-relaxed">
                      <span className="text-terracota shrink-0 mt-1">•</span>
                      <span>Desarrollo y puesta en marcha de la nueva área comercial BTC.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs sm:text-[0.88rem] text-carbon/85 leading-relaxed">
                      <span className="text-terracota shrink-0 mt-1">•</span>
                      <span>Prospección y captación de nuevas cuentas corporativas.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs sm:text-[0.88rem] text-carbon/85 leading-relaxed">
                      <span className="text-terracota shrink-0 mt-1">•</span>
                      <span>Mantenimiento, seguimiento y fidelización de la cartera de clientes.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs sm:text-[0.88rem] text-carbon/85 leading-relaxed">
                      <span className="text-terracota shrink-0 mt-1">•</span>
                      <span>Detección de necesidades y elaboración de propuestas comerciales adaptadas.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs sm:text-[0.88rem] text-carbon/85 leading-relaxed">
                      <span className="text-terracota shrink-0 mt-1">•</span>
                      <span>Desarrollo, creación e implementación del CRM para la organización y el seguimiento de la actividad comercial.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs sm:text-[0.88rem] text-carbon/85 leading-relaxed">
                      <span className="text-terracota shrink-0 mt-1">•</span>
                      <span>Coordinación con el equipo técnico para garantizar una atención adecuada y un servicio alineado con las necesidades de cada cliente.</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Línea temporal vertical que arranca debajo de Triana Corporate */}
          <div className="relative pl-6 sm:pl-9 space-y-6 sm:space-y-7 before:absolute before:left-2 sm:before:left-3 before:top-6 before:bottom-6 before:w-[2px] before:bg-arena/80">
            
            {/* 2. RRA Consultoría */}
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Marcador fino en la línea temporal */}
              <div className="absolute -left-[1.45rem] sm:-left-[1.95rem] top-6 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white border-2 border-terracota shadow-xs z-10" />

              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-arena">
                <span className="text-xs sm:text-sm font-bold text-terracota uppercase tracking-wider block mb-1">
                  DICIEMBRE 2024 – MAYO 2026
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-oliva">
                  RRA Consultoría
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-carbon/75 mb-4">
                  Gestión de proyectos, comunicación y eventos
                </p>

                {/* Línea divisoria fina y funciones en dos columnas en escritorio */}
                <div className="pt-4 border-t border-arena/70">
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-2.5">
                    {/* Columna Izquierda: Eventos, ferias, proveedores y materiales */}
                    <ul className="space-y-2.5">
                      <li className="flex items-start gap-2.5 text-xs sm:text-[0.88rem] text-carbon/85 leading-relaxed">
                        <span className="text-terracota shrink-0 mt-1">•</span>
                        <span>Coordinación y coorganización de eventos e iniciativas del tercer sector, desde la planificación hasta la ejecución.</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs sm:text-[0.88rem] text-carbon/85 leading-relaxed">
                        <span className="text-terracota shrink-0 mt-1">•</span>
                        <span>Asistencia a ferias y eventos sectoriales, supervisando las necesidades de los socios participantes y ejerciendo representación institucional.</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs sm:text-[0.88rem] text-carbon/85 leading-relaxed">
                        <span className="text-terracota shrink-0 mt-1">•</span>
                        <span>Gestión y coordinación de proveedores, clientes y colaboradores.</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs sm:text-[0.88rem] text-carbon/85 leading-relaxed">
                        <span className="text-terracota shrink-0 mt-1">•</span>
                        <span>Producción y supervisión de materiales para proyectos y eventos.</span>
                      </li>
                    </ul>

                    {/* Columna Derecha: Comunicación, CRM, captación, atención e incidencias */}
                    <ul className="space-y-2.5">
                      <li className="flex items-start gap-2.5 text-xs sm:text-[0.88rem] text-carbon/85 leading-relaxed">
                        <span className="text-terracota shrink-0 mt-1">•</span>
                        <span>Gestión del área de comunicación: diseño y ejecución del plan de comunicaciones, incluyendo newsletters, contenidos digitales, redes sociales y materiales corporativos.</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs sm:text-[0.88rem] text-carbon/85 leading-relaxed">
                        <span className="text-terracota shrink-0 mt-1">•</span>
                        <span>Desarrollo e implementación del CRM y de automatizaciones, impulsando la digitalización interna y la optimización de procesos.</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs sm:text-[0.88rem] text-carbon/85 leading-relaxed">
                        <span className="text-terracota shrink-0 mt-1">•</span>
                        <span>Seguimiento de la captación y fidelización de socios, atención directa y resolución de incidencias.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3. Centro Infantil Patín Castilleja */}
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-[1.45rem] sm:-left-[1.95rem] top-6 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white border-2 border-terracota shadow-xs z-10" />

              <div className="bg-white p-6 sm:p-7 rounded-3xl shadow-sm border border-arena">
                <span className="text-xs sm:text-sm font-bold text-terracota uppercase tracking-wider block mb-1">
                  AGOSTO 2023 – AGOSTO 2024
                </span>
                <h3 className="text-base sm:text-lg font-bold text-oliva">
                  Centro Infantil Patín Castilleja
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-carbon/75 mb-4">
                  Directora pedagógica
                </p>

                <div className="pt-3.5 border-t border-arena/70">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2.5 text-xs sm:text-[0.85rem] text-carbon/85 leading-relaxed">
                      <span className="text-terracota shrink-0 mt-1">•</span>
                      <span>Dirección y organización operativa del centro.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs sm:text-[0.85rem] text-carbon/85 leading-relaxed">
                      <span className="text-terracota shrink-0 mt-1">•</span>
                      <span>Planificación de actividades, horarios y recursos.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs sm:text-[0.85rem] text-carbon/85 leading-relaxed">
                      <span className="text-terracota shrink-0 mt-1">•</span>
                      <span>Coordinación con familias, proveedores e instituciones.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs sm:text-[0.85rem] text-carbon/85 leading-relaxed">
                      <span className="text-terracota shrink-0 mt-1">•</span>
                      <span>Resolución de incidencias y optimización de procesos internos.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* 4. Trayectoria educativa agrupada (Centro Infantil La Estrella + Diversos centros educativos) */}
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-[1.45rem] sm:-left-[1.95rem] top-6 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white border-2 border-terracota shadow-xs z-10" />

              <div className="bg-white p-6 sm:p-7 rounded-3xl shadow-sm border border-arena">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="text-terracota" size={20} />
                  <h3 className="text-sm sm:text-base font-bold text-oliva uppercase tracking-wider">
                    Trayectoria educativa
                  </h3>
                </div>

                {/* Primera etapa: Centro Infantil La Estrella */}
                <div className="pt-3 border-t border-arena/70">
                  <span className="text-xs sm:text-sm font-bold text-terracota uppercase tracking-wider block mb-1">
                    MARZO 2022 – AGOSTO 2023
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-oliva">
                    Centro Infantil La Estrella
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-carbon/75 mb-3">
                    Coordinadora de centro y tutora de aula
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2.5 text-xs sm:text-[0.85rem] text-carbon/85 leading-relaxed">
                      <span className="text-terracota shrink-0 mt-1">•</span>
                      <span>Organización de actividades y seguimiento de la operativa diaria.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs sm:text-[0.85rem] text-carbon/85 leading-relaxed">
                      <span className="text-terracota shrink-0 mt-1">•</span>
                      <span>Coordinación y comunicación con familias.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs sm:text-[0.85rem] text-carbon/85 leading-relaxed">
                      <span className="text-terracota shrink-0 mt-1">•</span>
                      <span>Supervisión de tareas y acompañamiento educativo.</span>
                    </li>
                  </ul>
                </div>

                {/* Línea horizontal divisoria entre etapas */}
                <div className="my-5 border-t border-arena/70" />

                {/* Segunda etapa: Diversos centros educativos */}
                <div>
                  <span className="text-xs sm:text-sm font-bold text-terracota uppercase tracking-wider block mb-1">
                    ABRIL 2018 – MARZO 2022
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-oliva">
                    Diversos centros educativos
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-carbon/75 mb-3">
                    Maestra y tutora de Educación Infantil
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2.5 text-xs sm:text-[0.85rem] text-carbon/85 leading-relaxed">
                      <span className="text-terracota shrink-0 mt-1">•</span>
                      <span>Planificación y organización de actividades educativas.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs sm:text-[0.85rem] text-carbon/85 leading-relaxed">
                      <span className="text-terracota shrink-0 mt-1">•</span>
                      <span>Seguimiento de la evolución del alumnado.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs sm:text-[0.85rem] text-carbon/85 leading-relaxed">
                      <span className="text-terracota shrink-0 mt-1">•</span>
                      <span>Colaboración con equipos multidisciplinares y familias.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* 5. Experiencias complementarias */}
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Marcador con sutil detalle en mostaza */}
              <div className="absolute -left-[1.45rem] sm:-left-[1.95rem] top-6 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white border-2 border-dorado shadow-xs z-10 flex items-center justify-center">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-dorado" />
              </div>

              <div className="bg-white p-6 sm:p-7 rounded-3xl shadow-sm border border-arena">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="text-dorado" size={18} />
                  <h3 className="text-xs sm:text-sm font-bold text-oliva uppercase tracking-wider">
                    EXPERIENCIAS COMPLEMENTARIAS · 2011–2022
                  </h3>
                </div>

                <div className="pt-3 border-t border-arena/70">
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2.5 text-xs sm:text-[0.85rem] text-carbon/85 leading-relaxed">
                      <span className="text-dorado shrink-0 mt-1">•</span>
                      <span>Soporte logístico y atención a asistentes como azafata en eventos.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs sm:text-[0.85rem] text-carbon/85 leading-relaxed">
                      <span className="text-dorado shrink-0 mt-1">•</span>
                      <span>Experiencia en hostelería, reforzando la organización, la atención al cliente y el trabajo en entornos dinámicos.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs sm:text-[0.85rem] text-carbon/85 leading-relaxed">
                      <span className="text-dorado shrink-0 mt-1">•</span>
                      <span>Apoyo administrativo en un bufete jurídico: gestión documental, facturación y atención al cliente.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

// --- Section 3: Formación y Herramientas ---

const EducationAndSkills = () => {
  const skills = [
    'Organización',
    'Capacidad de resolución',
    'Proactividad',
    'Comunicación asertiva',
    'Creatividad',
    'Responsabilidad',
  ];

  const digitalTools = [
    {
      name: 'IA generativa',
      description: 'Aplicación práctica en planificación, creación de contenidos y optimización de tareas.',
      icon: Sparkles,
    },
    {
      name: 'Microsoft 365',
      description: 'Manejo habitual de herramientas de trabajo y gestión documental.',
      icon: Layers,
    },
    {
      name: 'Airtable',
      description: 'Organización, seguimiento y gestión de información.',
      icon: Table,
    },
  ];

  return (
    <section id="formacion" className="py-24 bg-arena/35 scroll-mt-20 border-y border-arena/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-oliva mb-4">Formación y Herramientas</h2>
          <div className="w-20 h-1 bg-terracota mx-auto rounded-full" />
        </div>

        <div className="space-y-16">
          {/* 1. Formación Académica (MOCE con fondo verde oscuro exclusivo) */}
          <div>
            <h3 className="text-2xl font-bold text-oliva mb-8 flex items-center gap-3 justify-center">
              <GraduationCap className="text-terracota" /> Formación Académica
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { 
                  title: 'Máster en Organización de Congresos y Eventos (MOCE)', 
                  school: 'Escuela de Negocios de la Cámara de Comercio de Sevilla', 
                  status: 'Finalizado · Mayo 2026', 
                  highlight: true 
                },
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
                  className={`p-6 rounded-2xl shadow-sm border flex flex-col justify-between ${edu.highlight ? 'bg-oliva text-marfil border-terracota ring-2 ring-terracota/30' : 'bg-white border-arena text-oliva'}`}
                >
                  <div>
                    <h4 className={`font-bold text-base mb-2 ${edu.highlight ? 'text-dorado' : 'text-oliva'}`}>{edu.title}</h4>
                    <p className={`text-xs sm:text-[0.82rem] leading-relaxed ${edu.highlight ? 'text-marfil/95 mb-3 font-medium' : 'text-carbon/75'}`}>{edu.school}</p>
                  </div>
                  {edu.status && (
                    <p className={`text-xs mt-2 ${edu.highlight ? 'text-marfil/75' : 'text-carbon/60'}`}>
                      {edu.status}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* 2. Bloque inferior: Competencias Clave (Izquierda) + Herramientas e Idiomas (Derecha) */}
          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Columna Izquierda: Competencias Clave */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 bg-white p-7 sm:p-8 rounded-3xl shadow-sm border border-arena flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-oliva mb-2 flex items-center gap-3">
                  <Award className="text-terracota" size={24} /> Competencias Clave
                </h3>
                <p className="text-xs sm:text-sm text-carbon/75 mb-5">
                  Cualidades y habilidades personales aplicadas a la gestión eficaz de proyectos y eventos.
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.04 }}
                      whileHover={{ scale: 1.04, backgroundColor: '#2D6A4F', color: '#fff' }}
                      className="px-4 py-2 bg-arena/40 text-carbon rounded-full font-semibold text-xs transition-all cursor-default border border-arena/70 hover:border-terracota"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-arena/70">
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-dorado shrink-0 mt-1.5" />
                  <p className="text-xs sm:text-sm text-carbon/85 leading-relaxed font-medium">
                    “Me adapto rápido, busco soluciones y afronto los retos con iniciativa y determinación.”
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Columna Derecha: Herramientas Digitales (Arriba) + Idiomas (Abajo) */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              
              {/* Tarjeta 1: Herramientas Digitales (Mayor relevancia) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-6 sm:p-7 rounded-3xl shadow-sm border border-arena flex-1"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-arena/40 flex items-center justify-center text-terracota border border-arena">
                    <Laptop size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-oliva">Herramientas digitales</h3>
                    <p className="text-xs text-carbon/70">Uso práctico aplicado a la organización y optimización de procesos</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {digitalTools.map((tool, idx) => {
                    const IconComponent = tool.icon;
                    return (
                      <div 
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded-2xl bg-arena/20 border border-arena/60 hover:bg-arena/35 transition-colors"
                      >
                        <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-terracota shrink-0 shadow-xs border border-arena relative mt-0.5">
                          <IconComponent size={15} />
                          <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-dorado" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-oliva text-xs sm:text-sm mb-0.5">
                            {tool.name}
                          </p>
                          <p className="text-xs sm:text-[0.82rem] text-carbon/85 leading-relaxed">
                            {tool.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Tarjeta 2: Idiomas (Información secundaria, discreta y reducida) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white px-5 py-4 rounded-2xl shadow-sm border border-arena"
              >
                <div className="flex items-center justify-between text-xs text-carbon/80">
                  <div className="flex items-center gap-2">
                    <Globe size={15} className="text-terracota" />
                    <span className="font-bold text-oliva text-xs sm:text-sm">Inglés · B2</span>
                  </div>
                  <span className="text-carbon/70 text-xs">
                    Experiencia internacional en Galway, Irlanda
                  </span>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Section 4: Sobre Mí ---

const Story = () => {
  const [selectedImg, setSelectedImg] = useState<number | null>(null);
  
  const aboutPhotos = [
    { 
      id: 'malawi', 
      url: 'https://drive.google.com/thumbnail?id=1c-dK3TN7aSjLIQJcrF_srHLsmx1poQji&sz=w2000', 
      title: 'Voluntariado en Benga, Malawi',
      subtitle: 'Una experiencia transformadora que me enseñó a adaptarme y aportar valor con resiliencia.'
    },
    { 
      id: 'event-1', 
      url: 'https://drive.google.com/thumbnail?id=1HV1mUDTnnel6mP3YmL7vPwxtnkisgRlE&sz=w2000', 
      title: 'Coordinación y producción de eventos',
      subtitle: 'Cuidado al detalle en cada fase operativa y de protocolo.'
    },
    { 
      id: 'event-2', 
      url: 'https://drive.google.com/thumbnail?id=1Wldo4xGG2Tx1zhiEhbfqQRzJDjm-X07k&sz=w2000', 
      title: 'Montaje y gestión de espacios',
      subtitle: 'Transformando espacios en experiencias profesionales impecables.'
    },
    { 
      id: 'event-3', 
      url: 'https://drive.google.com/thumbnail?id=11NZ7vW6wvhhGK57CK_XDGsYqNx0nLonT&sz=w2000', 
      title: 'Materiales personalizados y producción',
      subtitle: 'Detalle y calidad en papelería, señalética y elementos impresos.'
    },
  ];

  return (
    <section id="sobre-mi" className="py-24 lg:py-32 bg-marfil scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Columna Izquierda (aprox 48% en desktop para perfecta legibilidad en dos líneas) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[48%] flex flex-col justify-center"
          >
            <h2 className="mb-4">
              <span className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-oliva block leading-tight">
                Inquieta desde siempre.
              </span>
              <span className="text-xl sm:text-2xl lg:text-[1.85rem] font-bold text-terracota block mt-1.5 leading-snug sm:whitespace-nowrap">
                Imparable cuando creo en algo.
              </span>
            </h2>

            {/* Línea horizontal amarilla corta */}
            <div className="w-16 h-1 bg-dorado rounded-full mb-6" />

            {/* Texto con cuerpo aumentado (+1/2px) e interlineado holgado */}
            <div className="space-y-4 text-[1.05rem] sm:text-[1.125rem] text-carbon/90 leading-[1.8] max-w-xl">
              <p>
                Pasar de la educación a los eventos fue <strong className="font-bold text-terracota">un cambio de vida, pero no de esencia</strong>. En RRA Consultoría descubrí lo que me mueve: convertir ideas en algo que sucede, se vive y se recuerda. Coorganizar ferias, congresos y encuentros profesionales confirmó mis ganas de seguir creciendo en ese camino.
              </p>
              <p>
                Pero no todo lo que me define cabe en un currículum. Cumplir un sueño me llevó hasta Benga, Malawi, donde pasé <strong className="font-bold text-terracota">seis meses como voluntaria</strong>. Aprendí a mirar con otros ojos, a adaptarme a lo desconocido y a descubrir cuánto podía aportar. Una experiencia cuya huella sigue conmigo.
              </p>
              <p>
                Cada etapa ha reforzado mi resiliencia y mi <strong className="font-bold text-terracota">capacidad para encontrar soluciones</strong>. Hoy llevo esa curiosidad, sensibilidad y determinación a cada proyecto.
              </p>
            </div>

            {/* Cierre en desktop con formato firma personal en dos líneas */}
            <div className="hidden lg:flex items-start gap-3.5 pt-6 mt-6 pb-1 border-t border-arena/70">
              <span className="w-2.5 h-2.5 rounded-full bg-dorado shrink-0 mt-1.5" />
              <div className="flex flex-col">
                <span className="font-bold text-terracota text-base sm:text-[1.05rem] leading-tight">
                  Me ilusionan las ideas.
                </span>
                <span className="font-normal text-oliva text-sm sm:text-base mt-1">
                  Me implico para hacerlas realidad.
                </span>
              </div>
            </div>
          </motion.div>

          {/* Columna Derecha: Galería Editorial Asimétrica alineada con el bloque superior y centrada */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-full lg:w-[52%] lg:self-start lg:pt-3"
          >
            {/* Versión Desktop & Tablet: Galería Asimétrica con altura calibrada */}
            <div className="hidden sm:grid grid-cols-12 gap-3.5 lg:gap-4 h-[395px] lg:h-[435px]">
              
              {/* Protagonista: Malawi (aprox 2/3 de protagonismo y 7 de 12 columnas) */}
              <div 
                onClick={() => setSelectedImg(0)}
                className="col-span-7 relative group cursor-pointer overflow-hidden rounded-2xl shadow-sm hover:shadow-md border border-arena/80 h-full bg-arena/20 transition-all duration-300"
              >
                <img 
                  src={aboutPhotos[0].url} 
                  alt={aboutPhotos[0].title}
                  className="w-full h-full object-cover object-[center_68%] scale-[1.18] transition-transform duration-700 ease-out group-hover:scale-[1.26]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-oliva/80 via-oliva/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <div className="text-white">
                    <p className="text-sm font-bold text-dorado">{aboutPhotos[0].title}</p>
                    <p className="text-xs text-white/90 leading-tight mt-1">{aboutPhotos[0].subtitle}</p>
                  </div>
                </div>
              </div>

              {/* 3 Fotos de Eventos más compactas en columna lateral */}
              <div className="col-span-5 flex flex-col gap-3.5 lg:gap-4 h-full">
                {aboutPhotos.slice(1).map((photo, idx) => (
                  <div
                    key={photo.id}
                    onClick={() => setSelectedImg(idx + 1)}
                    className="flex-1 relative group cursor-pointer overflow-hidden rounded-xl shadow-sm hover:shadow-md border border-arena/80 bg-arena/20 transition-all duration-300 min-h-0"
                  >
                    <img 
                      src={photo.url} 
                      alt={photo.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                        idx === 0 ? 'object-center' : idx === 1 ? 'object-[center_30%]' : 'object-[center_40%]'
                      }`}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-oliva/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                      <p className="text-xs font-semibold text-white leading-snug">{photo.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Versión Móvil: Malawi protagonista arriba + 3 eventos compactos debajo */}
            <div className="sm:hidden space-y-3">
              {/* Malawi protagonista */}
              <div 
                onClick={() => setSelectedImg(0)}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-sm border border-arena/80 aspect-[4/3] bg-arena/20"
              >
                <img 
                  src={aboutPhotos[0].url} 
                  alt={aboutPhotos[0].title}
                  className="w-full h-full object-cover object-[center_68%] scale-[1.18]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-oliva/80 to-transparent p-3 text-white">
                  <p className="text-xs font-bold text-dorado">{aboutPhotos[0].title}</p>
                </div>
              </div>

              {/* 3 eventos en fila compacta */}
              <div className="grid grid-cols-3 gap-2.5">
                {aboutPhotos.slice(1).map((photo, idx) => (
                  <div
                    key={photo.id}
                    onClick={() => setSelectedImg(idx + 1)}
                    className="relative cursor-pointer overflow-hidden rounded-xl shadow-sm border border-arena/80 aspect-square bg-arena/20"
                  >
                    <img 
                      src={photo.url} 
                      alt={photo.title}
                      className={`w-full h-full object-cover ${idx === 2 ? 'object-[center_40%]' : 'object-center'}`}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Cierre en móvil (visible solo en pantallas pequeñas) */}
            <div className="flex lg:hidden items-start gap-3 pt-5 mt-5 pb-1 border-t border-arena/70">
              <span className="w-2.5 h-2.5 rounded-full bg-dorado shrink-0 mt-1" />
              <div className="flex flex-col">
                <span className="font-bold text-terracota text-sm sm:text-base leading-tight">
                  Me ilusionan las ideas.
                </span>
                <span className="font-normal text-oliva text-xs sm:text-sm mt-0.5">
                  Me implico para hacerlas realidad.
                </span>
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-carbon/95 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedImg(null)}
          >
            <motion.div 
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-w-4xl w-full relative bg-oliva/60 p-2 sm:p-3 rounded-2xl border border-white/10"
              onClick={e => e.stopPropagation()}
            >
              <button 
                aria-label="Cerrar imagen"
                className="absolute -top-10 right-0 sm:-top-12 sm:-right-2 text-white hover:text-dorado transition-colors"
                onClick={() => setSelectedImg(null)}
              >
                <X size={28} />
              </button>
              <img 
                src={aboutPhotos[selectedImg].url} 
                alt={aboutPhotos[selectedImg].title} 
                className="w-full max-h-[75vh] object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
              <div className="text-center mt-3 pb-1">
                <p className="text-dorado text-base sm:text-lg font-bold">{aboutPhotos[selectedImg].title}</p>
                <p className="text-marfil/80 text-xs sm:text-sm mt-0.5">{aboutPhotos[selectedImg].subtitle}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// --- Section 5: Contacto ---

const Contact = () => {
  return (
    <section id="contacto" className="py-24 lg:py-28 bg-oliva scroll-mt-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-5 text-white">¿Hablamos de tu <span className="text-terracota">próximo evento?</span></h2>
            <p className="text-marfil/90 text-lg sm:text-xl font-medium mb-3 max-w-2xl mx-auto">
              Estoy lista para aportar energía, organización y visión global a tu próximo evento.
            </p>
            <p className="text-dorado text-lg font-bold mb-12">
              ¡Conectemos!
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <a href="mailto:bcvillalba@gmail.com" className="flex flex-col items-center p-8 bg-white/10 rounded-3xl group hover:bg-terracota transition-all border border-white/10 shadow-lg">
                <div className="w-14 h-14 bg-black/25 rounded-2xl flex items-center justify-center text-dorado group-hover:bg-dorado group-hover:text-oliva transition-all mb-4">
                  <Mail size={28} />
                </div>
                <p className="text-sm text-marfil/60 uppercase font-bold tracking-widest mb-1">Email</p>
                <p className="text-lg font-bold break-all text-white">bcvillalba@gmail.com</p>
              </a>
              
              <a href="https://www.linkedin.com/in/blancacv-eventos/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-8 bg-white/10 rounded-3xl group hover:bg-terracota transition-all border border-white/10 shadow-lg">
                <div className="w-14 h-14 bg-black/25 rounded-2xl flex items-center justify-center text-dorado group-hover:bg-dorado group-hover:text-oliva transition-all mb-4">
                  <Linkedin size={28} />
                </div>
                <p className="text-sm text-marfil/60 uppercase font-bold tracking-widest mb-1">LinkedIn</p>
                <p className="text-lg font-bold break-all text-white">blancacv-eventos</p>
              </a>
              
              <a href="https://wa.me/34611491011" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-8 bg-white/10 rounded-3xl group hover:bg-terracota transition-all border border-white/10 shadow-lg">
                <div className="w-14 h-14 bg-black/25 rounded-2xl flex items-center justify-center text-dorado group-hover:bg-dorado group-hover:text-oliva transition-all mb-4">
                  <MessageCircle size={28} />
                </div>
                <p className="text-sm text-marfil/60 uppercase font-bold tracking-widest mb-1">WhatsApp</p>
                <p className="text-lg font-bold break-all text-white">+34 611 49 10 11</p>
              </a>
            </div>

            <div className="pt-8 border-t border-white/15 mb-4">
              <p className="text-sm text-marfil/60 uppercase font-bold tracking-widest mb-4">Descarga mi CV</p>
              <a 
                href="https://drive.google.com/uc?export=download&id=1-9epS3S7wwWcBIi_4ur-PB1U9dnMcvNU" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-terracota text-white px-8 py-4 rounded-2xl font-bold hover:bg-terracota/90 transition-all shadow-lg hover:shadow-terracota/20 group"
              >
                <Download size={20} className="text-dorado group-hover:text-white transition-colors" /> Descargar PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Footer Component ---

const Footer = () => {
  return (
    <footer className="py-12 bg-marfil border-t border-arena">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-carbon/60 text-sm font-medium">
          © 2026 Blanca Castro. Todos los derechos reservados.
        </p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <a href="#home" className="text-sm font-bold text-oliva hover:text-terracota transition-colors">Inicio</a>
          <a href="#experiencia" className="text-sm font-bold text-oliva hover:text-terracota transition-colors">Experiencia</a>
          <a href="#eventos" className="text-sm font-bold text-oliva hover:text-terracota transition-colors">Eventos</a>
          <a href="#formacion" className="text-sm font-bold text-oliva hover:text-terracota transition-colors">Formación</a>
          <a href="#sobre-mi" className="text-sm font-bold text-oliva hover:text-terracota transition-colors">Sobre mí</a>
          <a href="#contacto" className="text-sm font-bold text-oliva hover:text-terracota transition-colors">Contacto</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="antialiased selection:bg-terracota selection:text-white bg-marfil min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Portfolio />
        <EducationAndSkills />
        <Story />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
