/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Globe,
  Sparkles,
  Mail,
  Linkedin,
  Download,
  Menu,
  X,
  Award,
  MessageCircle,
  GraduationCap,
  Layers,
  Table,
  Laptop,
  ArrowUpRight,
  Check,
  Palette
} from 'lucide-react';
import { Portfolio } from './components/Portfolio';

// Real portrait photograph provided by the user (local project asset, zero modifications)
const HERO_PHOTO_URL = '/assets/aistudio/Retrato_de_mujer_en_puente_de_piedra_7ab072c9.png';
const CV_DOWNLOAD_URL = '/assets/aistudio/Blanca_Castro_CV_2026_dde4b657.pdf';
const MOTION_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// --- Navigation Component ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  const navLinks = [
    { id: 'experiencia', name: 'Experiencia profesional', href: '#experiencia' },
    { id: 'eventos', name: 'Eventos destacados', href: '#eventos' },
    { id: 'formacion', name: 'Formación y herramientas', href: '#formacion' },
    { id: 'sobre-mi', name: 'Sobre mí', href: '#sobre-mi' },
    { id: 'contacto', name: 'Contacto', href: '#contacto' },
  ];

  useEffect(() => {
    const sectionIds = ['home', 'experiencia', 'eventos', 'formacion', 'sobre-mi', 'contacto'];

    const updateActiveSection = () => {
      if (window.scrollY < 80) {
        setActiveSection('home');
        return;
      }

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 24) {
        setActiveSection('contacto');
        return;
      }

      const threshold = window.innerHeight * 0.35;
      let current = 'home';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= threshold) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    return () => window.removeEventListener('scroll', updateActiveSection);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full h-[70px] lg:h-[74px] bg-[#F7F8F5]/95 backdrop-blur-md border-b border-[#082D26]/[0.07]">
      <div className="max-w-[1120px] h-full mx-auto px-6 sm:px-8 xl:px-12 flex justify-between items-center gap-4 xl:gap-6">
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          className="inline-flex items-center gap-3.5 shrink-0 group py-1"
        >
          <span
            aria-hidden="true"
            className="w-[2px] h-6 sm:h-7 xl:h-9 bg-[#E2AE25] rounded-full shrink-0"
          />
          <span className="font-['Playfair_Display',Georgia,serif] font-semibold uppercase tracking-[0.04em] text-[#082D26] text-[22px] sm:text-[26px] lg:text-[28px] xl:text-[38px] leading-none">
            BLANCA CASTRO
          </span>
        </a>

        {/* Desktop Nav */}
        <nav aria-label="Navegación principal" className="ml-auto mr-3 hidden items-center justify-end gap-3.5 lg:flex xl:mr-4 xl:gap-5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative py-1.5 font-['Poppins',sans-serif] text-[11.5px] xl:text-[12px] font-normal transition-colors whitespace-nowrap ${
                  isActive ? 'text-[#082D26]' : 'text-[#28312E] hover:text-[#082D26]'
                }`}
              >
                {link.name}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 right-0 bottom-0 h-[2px] rounded-full bg-[#E2AE25] transition-all duration-300 ${
                    isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          className="lg:hidden text-[#082D26] min-w-[44px] min-h-[44px] flex items-center justify-center rounded-[8px] hover:bg-[#082D26]/5 transition-colors cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            aria-label="Navegación móvil"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full inset-x-0 bg-[#F7F8F5] border-t border-[#082D26]/10 border-b border-[#082D26]/15 px-6 py-3 shadow-sm"
          >
            <div className="flex flex-col divide-y divide-[#082D26]/10">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`py-3 font-['Poppins',sans-serif] text-[15px] transition-colors flex items-center justify-between ${
                      isActive ? 'text-[#082D26] font-medium' : 'text-[#28312E] hover:text-[#082D26]'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-5 h-[2px] bg-[#E2AE25] rounded-full" aria-hidden="true" />}
                  </a>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

// --- Hero Component ---

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-[52px] pb-[52px] sm:pt-[60px] sm:pb-[60px] lg:pt-[70px] lg:pb-[64px] lg:min-h-[clamp(600px,70vh,660px)] lg:grid lg:items-center scroll-mt-20 overflow-x-clip"
      style={{
        background:
          'linear-gradient(108deg, #F7F8F5 0%, #F7F8F5 46%, #F3F5F1 62%, #EFF2ED 100%)',
      }}
    >
      <div className="w-full max-w-[1120px] mx-auto px-6 sm:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_390px] gap-10 lg:gap-x-[56px] items-center">
          {/* Left Column: Headline, Mustard Rule, Support Copy & CV Button */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: MOTION_EASE }}
            className="max-w-[620px]"
          >
            <div>
              <div className="relative">
                {/* Subtle Editorial 3-Stroke Accent Marks at Upper-Left of Headline */}
                <svg
                  aria-hidden="true"
                  viewBox="28 34 140 148"
                  fill="none"
                  className="pointer-events-none select-none absolute -top-[34px] -left-[19px] w-[32px] h-[34px] sm:-top-[44px] sm:-left-[28px] sm:w-[48px] sm:h-[51px] lg:-top-[42px] lg:-left-[28px] lg:w-[46px] lg:h-[49px] xl:-top-[52px] xl:-left-[66px] xl:w-[68px] xl:h-[72px] text-[#C5A276] opacity-75"
                >
                  <path
                    d="M 155 118 C 146 94 142 62 147 46 C 151 37 160 40 161 52 C 162 72 158 96 155 118 Z"
                    fill="currentColor"
                  />
                  <path
                    d="M 134 138 C 112 120 88 94 87 77 C 87 67 96 67 104 77 C 117 94 127 116 134 138 Z"
                    fill="currentColor"
                  />
                  <path
                    d="M 121 149 C 95 142 60 144 40 156 C 30 162 34 176 47 175 C 68 172 95 156 121 149 Z"
                    fill="currentColor"
                  />
                </svg>

                <h1 className="font-['Poppins',sans-serif] font-semibold text-[#082D26] text-[27px] sm:text-[31px] lg:text-[30px] xl:text-[33px] leading-[1.28] tracking-[-0.02em]">
                  <span className="block lg:whitespace-nowrap mb-2">Una idea es solo el comienzo.</span>
                  <span className="block lg:whitespace-nowrap mb-2">Creatividad para darle forma.</span>
                  <span className="block lg:whitespace-nowrap">Acción para hacerla realidad.</span>
                </h1>
              </div>

              {/* Horizontal Mustard Line */}
              <div className="w-[80px] h-[3px] bg-[#E2AE25] rounded-full my-[30px]" />

              <p className="font-['Poppins',sans-serif] font-normal text-[15px] sm:text-[15.5px] lg:text-[16px] text-[#28312E] leading-[1.72] max-w-[555px] text-balance">
                Proyectos dinámicos que integran comunicación, eventos y visión comercial para conectar personas, ideas y oportunidades.
              </p>

              <div className="mt-[36px]">
                <a
                  href={CV_DOWNLOAD_URL}
                  download="Blanca_Castro_CV_2026.pdf"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#F7F8F5] text-[#082D26] border border-[#082D26] px-6 py-3 rounded-[9px] font-['Poppins',sans-serif] text-[14.5px] font-medium hover:bg-[#EFF2ED] transition-colors"
                >
                  <Download size={16} className="text-[#E2AE25] shrink-0" />
                  <span>Descargar CV</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Smaller Closer-Cropped Portrait, 2 Subtle Behind Accents & Overlapping Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: MOTION_EASE }}
            className="flex justify-center lg:justify-center"
          >
            <div className="relative w-full max-w-[310px] sm:max-w-[345px] lg:max-w-[355px] xl:max-w-[365px]">
              {/* Elemento 1: Thin rectangular mustard line behind photo */}
              <div
                aria-hidden="true"
                className="hidden sm:block absolute -bottom-3.5 -left-3.5 w-[88%] h-[88%] rounded-[18px] border-[1.5px] border-[#E2AE25]/90 pointer-events-none z-0"
              />

              {/* Elemento 2: Very light greenish-beige solid rectangle behind upper-right */}
              <div
                aria-hidden="true"
                className="hidden sm:block absolute -top-3.5 -right-3.5 w-[82%] h-[82%] rounded-[18px] bg-[#E5EBE2] pointer-events-none z-0"
              />

              {/* Compact Closer-Cropped Vertical Portrait */}
              <div className="relative z-10 aspect-[4/4.5] w-full max-h-[425px] rounded-[18px] overflow-hidden bg-[#EFF2ED] shadow-[0_10px_28px_-18px_rgba(8,45,38,0.16)]">
                <img
                  src={HERO_PHOTO_URL}
                  alt="Blanca Castro"
                  className="w-full h-full object-cover object-[center_12%] scale-[1.42] origin-[53%_13%] block"
                />
              </div>

              {/* Overlapping Quote Card (Bottom-Right on Desktop, Below on Mobile) */}
              <div className="relative z-20 mt-3.5 mx-auto sm:mx-0 sm:mt-0 sm:absolute sm:-bottom-3.5 sm:-right-4 max-w-[295px] sm:max-w-[315px] bg-[#F7F8F5] text-[#06221C] px-4 py-2.5 sm:px-4.5 sm:py-3 rounded-[12px] border border-[#082D26]/12 shadow-[0_8px_24px_-14px_rgba(8,45,38,0.16)]">
                <p className="font-serif italic font-semibold text-[15.5px] sm:text-[16.5px] leading-[1.32] text-[#06221C]">
                  <span className="text-[#D49B1A] not-italic font-bold mr-0.5" aria-hidden="true">“</span>
                  Porque el talento también se demuestra en todo lo que un CV{' '}
                  <span className="whitespace-nowrap">
                    no cuenta.
                    <span className="text-[#D49B1A] not-italic font-bold ml-0.5" aria-hidden="true">”</span>
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Bottom Strip at End of Hero ---

const SPECIALTY_ITEMS = [
  'Eventos corporativos',
  'Ferias y congresos',
  'Comunicación',
  'Desarrollo comercial',
  'Gestión de proyectos',
];

const TransitionBand = () => {
  return (
    <div aria-label="Áreas de especialidad" className="w-full">
      <div
        aria-hidden="true"
        className="h-[8px] w-full"
        style={{
          background: 'linear-gradient(to bottom, #F3F5F1 0%, #347478 100%)',
        }}
      />
      <div className="bg-[#347478] min-h-[46px] py-2.5 lg:py-0 lg:h-[48px] flex items-center justify-center px-6">
        <p className="font-['Poppins',sans-serif] text-[13.5px] sm:text-[14.5px] font-normal text-[#F7F8F5] text-center leading-snug tracking-[0.015em] flex flex-wrap items-center justify-center gap-x-3.5 sm:gap-x-5 lg:gap-x-6 gap-y-1">
          {SPECIALTY_ITEMS.map((item, idx) => (
            <React.Fragment key={item}>
              <span>{item}</span>
              {idx < SPECIALTY_ITEMS.length - 1 && (
                <span aria-hidden="true" className="text-[#E2AE25] font-bold">
                  ·
                </span>
              )}
            </React.Fragment>
          ))}
        </p>
      </div>
      <div
        aria-hidden="true"
        className="h-[8px] w-full"
        style={{
          background:
            'linear-gradient(to bottom, #347478 0%, rgba(52, 116, 120, 0) 100%), linear-gradient(108deg, #F7F8F5 0%, #F7F8F5 48%, #F3F5F1 72%, #EFF2ED 100%)',
        }}
      />
    </div>
  );
};

// --- Section 1: Experiencia Profesional ---

const MUSTARD_DOT = (
  <span
    aria-hidden="true"
    className="w-[5px] h-[5px] rounded-full bg-[#E2AE25] shrink-0 mt-[9.5px]"
  />
);

const Experience = () => {
  const [showMoreExperiences, setShowMoreExperiences] = useState(false);

  return (
    <section
      id="experiencia"
      className="py-14 sm:py-16 lg:py-[78px] scroll-mt-20"
      style={{
        background:
          'linear-gradient(108deg, #F7F8F5 0%, #F7F8F5 48%, #F3F5F1 72%, #EFF2ED 100%)',
      }}
    >
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8 xl:px-12">
        {/* Section Intro */}
        <div className="pb-5 mb-8 lg:mb-9 border-b border-[#082D26]/12">
          <h2 className="font-['Poppins',sans-serif] font-semibold text-[#082D26] text-[23px] sm:text-[26px] lg:text-[28px] xl:text-[30px] leading-[1.28] tracking-[-0.02em]">
            Experiencia profesional
          </h2>
        </div>

        {/* 1. Viajes Triana (Open Mustard Frame on Continuous Background, No Timeline Dot/Line) */}
        <motion.article
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, ease: MOTION_EASE }}
          className="relative px-4 py-6 sm:px-8 sm:py-8 mb-12 lg:mb-14"
        >
          {/* Open Subtle Mustard Frame: Top-Left Rounded Corner + Left Vertical Line, and Slightly Longer Bottom-Right Rounded Corner */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-0 w-36 sm:w-44 h-[84%] border-t border-l border-[#E2AE25]/65 rounded-tl-[14px]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 w-52 sm:w-64 h-24 sm:h-28 border-b border-r border-[#E2AE25]/65 rounded-br-[14px]"
          />

          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-x-6 gap-y-3 pb-4 mb-5 border-b border-[#347478]/20">
              <div>
                <h3 className="font-['Poppins',sans-serif] font-semibold tracking-[-0.01em] text-[17.5px] sm:text-[19px] text-[#347478] leading-[1.25]">
                  Viajes Triana
                </h3>
                <p className="font-['Poppins',sans-serif] font-semibold text-[12.5px] sm:text-[13px] text-[#082D26] uppercase tracking-[0.13em] leading-[1.4] mt-3.5">
                  Delegada Comercial BTC.
                </p>
                <p className="font-['Poppins',sans-serif] font-medium text-[11.5px] sm:text-[12px] text-[#28312E]/80 uppercase tracking-[0.11em] mt-1 leading-[1.4]">
                  Departamento Triana Corporate.
                </p>
              </div>

              <div className="flex flex-row sm:flex-col items-center sm:items-end sm:text-right sm:ml-auto shrink-0 gap-2.5 sm:gap-1.5 pt-0.5">
                <span className="font-['Poppins',sans-serif] text-[11px] font-medium uppercase tracking-[0.11em] text-[#347478]">
                  DESDE MAYO DE 2026
                </span>
                <span className="inline-block border border-[#E2AE25] text-[#E2AE25] font-['Poppins',sans-serif] text-[10px] font-semibold uppercase tracking-[0.14em] px-2 py-0.5 rounded-[6px]">
                  ACTUALIDAD
                </span>
              </div>
            </div>

            {/* Functions in 2 Visually Balanced Columns */}
            <div lang="es" className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 xl:gap-x-14 gap-y-3">
              <ul className="space-y-3">
                {[
                  'Desarrollo y puesta en marcha del área comercial de Business Travel.',
                  'Prospección, captación y fidelización de nuevas cuentas corporativas.',
                  'Detección de necesidades y elaboración de propuestas comerciales personalizadas.',
                  'Desarrollo e implantación del CRM comercial en el departamento Corporate, colaborando posteriormente en su adaptación y aplicación en otros departamentos.',
                  'Organización y optimización de procesos de seguimiento, gestión de clientes y oportunidades comerciales.',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-['Poppins',sans-serif] text-[13px] sm:text-[13.5px] text-[#28312E]/90 leading-[1.8]"
                  >
                    {MUSTARD_DOT}
                    <span className="flex-1 text-left [text-wrap:pretty]">{item}</span>
                  </li>
                ))}
              </ul>

              <ul className="space-y-3">
                {[
                  'Unificación y actualización del diseño de presentaciones, dosieres y materiales corporativos, mejorando la coherencia visual y la forma de presentar los servicios y propuestas de distintos departamentos.',
                  'Impulso de mejoras en la imagen corporativa y en las herramientas utilizadas para la comunicación comercial.',
                  'Coordinación con el equipo técnico para garantizar un servicio adaptado a las necesidades de cada cliente.',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-['Poppins',sans-serif] text-[13px] sm:text-[13.5px] text-[#28312E]/90 leading-[1.8]"
                  >
                    {MUSTARD_DOT}
                    <span className="flex-1 text-left [text-wrap:pretty]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.article>

        {/* Chronological Timeline (Starts at RRA Consultoría) */}
        <div className="relative pl-6 sm:pl-9">
          {/* Continuous Vertical Teal Line */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-[5px] top-[14px] bottom-2 w-[1px] bg-[#347478]/35"
          />

          <div className="space-y-11 lg:space-y-12">
            {/* 2. RRA Consultoría */}
            <motion.article
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, ease: MOTION_EASE }}
              className="relative"
            >
              {/* Hollow Corporate Teal Circle aligned with Title */}
              <span
                aria-hidden="true"
                className="absolute -left-6 sm:-left-9 top-[6px] w-[11px] h-[11px] rounded-full border-[2px] border-[#347478] bg-[#F7F8F5] z-10"
              />

              <div className="pb-4 mb-5 border-b border-[#347478]/20">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-['Poppins',sans-serif] font-semibold tracking-[-0.01em] text-[17.5px] sm:text-[19px] text-[#347478] leading-[1.25]">
                    RRA Consultoría
                  </h3>
                  <span className="sm:ml-auto sm:text-right shrink-0 font-['Poppins',sans-serif] text-[11px] font-medium uppercase tracking-[0.11em] text-[#347478]">
                    DICIEMBRE 2024 – MAYO 2026
                  </span>
                </div>
                <p className="font-['Poppins',sans-serif] font-semibold text-[12.5px] sm:text-[13px] text-[#082D26] uppercase tracking-[0.12em] leading-[1.45] mt-3">
                  Gestión de proyectos, comunicación y eventos
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 xl:gap-x-14 gap-y-3">
                <ul className="space-y-3">
                  {[
                    'Planificación, coordinación y producción de eventos e iniciativas del tercer sector.',
                    'Organización y seguimiento de la participación de asociados en ferias y eventos sectoriales.',
                    'Coordinación de proveedores, clientes, colaboradores y materiales.',
                    'Gestión y seguimiento de la facturación vinculada a proyectos, eventos y servicios, en coordinación con el área administrativa.',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-['Poppins',sans-serif] text-[13px] sm:text-[13.5px] text-[#28312E]/90 leading-[1.8]"
                    >
                      {MUSTARD_DOT}
                      <span className="flex-1 text-left [text-wrap:pretty]">{item}</span>
                    </li>
                  ))}
                </ul>

                <ul className="space-y-3">
                  {[
                    'Gestión de la comunicación corporativa: newsletters, contenidos digitales, redes sociales y materiales informativos.',
                    'Mejora de la imagen corporativa y diseño de presentaciones, dosieres, propuestas y materiales visuales.',
                    'Desarrollo e implantación del CRM y de automatizaciones para digitalizar y optimizar procesos internos.',
                    'Apoyo en la captación y fidelización de socios, atención directa y resolución de incidencias.',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-['Poppins',sans-serif] text-[13px] sm:text-[13.5px] text-[#28312E]/90 leading-[1.8]"
                    >
                      {MUSTARD_DOT}
                      <span className="flex-1 text-left [text-wrap:pretty]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>

            {/* 3. Centro Infantil Patín Castilleja */}
            <motion.article
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, ease: MOTION_EASE }}
              className="relative"
            >
              {/* Hollow Corporate Teal Circle aligned with Title */}
              <span
                aria-hidden="true"
                className="absolute -left-6 sm:-left-9 top-[6px] w-[11px] h-[11px] rounded-full border-[2px] border-[#347478] bg-[#F7F8F5] z-10"
              />

              <div className="pb-4 mb-5 border-b border-[#347478]/20">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-['Poppins',sans-serif] font-semibold tracking-[-0.01em] text-[17.5px] sm:text-[19px] text-[#347478] leading-[1.25]">
                    Centro Infantil Patín Castilleja
                  </h3>
                  <span className="sm:ml-auto sm:text-right shrink-0 font-['Poppins',sans-serif] text-[11px] font-medium uppercase tracking-[0.11em] text-[#347478]">
                    AGOSTO 2023 – AGOSTO 2024
                  </span>
                </div>
                <p className="font-['Poppins',sans-serif] font-semibold text-[12.5px] sm:text-[13px] text-[#082D26] uppercase tracking-[0.12em] leading-[1.45] mt-3">
                  Directora pedagógica
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 xl:gap-x-14 gap-y-3">
                <ul className="space-y-3">
                  {[
                    'Dirección pedagógica y coordinación integral del funcionamiento diario del centro.',
                    'Coordinación y supervisión del equipo educativo, organización de funciones y seguimiento del trabajo diario.',
                    'Planificación, seguimiento y evaluación de la programación pedagógica.',
                    'Organización de horarios, actividades, recursos y necesidades operativas.',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-['Poppins',sans-serif] text-[13px] sm:text-[13.5px] text-[#28312E]/90 leading-[1.8]"
                    >
                      {MUSTARD_DOT}
                      <span className="flex-1 text-left [text-wrap:pretty]">{item}</span>
                    </li>
                  ))}
                </ul>

                <ul className="space-y-3">
                  {[
                    'Comunicación y coordinación con las familias, atendiendo consultas y realizando el seguimiento de cada situación.',
                    'Gestión de proveedores y coordinación con instituciones y servicios externos.',
                    'Resolución de incidencias e implantación de mejoras en la organización y los procesos internos.',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-['Poppins',sans-serif] text-[13px] sm:text-[13.5px] text-[#28312E]/90 leading-[1.8]"
                    >
                      {MUSTARD_DOT}
                      <span className="flex-1 text-left [text-wrap:pretty]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>

            {/* 4. Toggle Button & Collapsible Prior Trajectory */}
            <div>
              <button
                type="button"
                aria-expanded={showMoreExperiences}
                onClick={() => setShowMoreExperiences((prev) => !prev)}
                className="h-[44px] px-5 inline-flex items-center gap-3 bg-white hover:bg-[#FAFBF8] border border-[#347478] rounded-[9px] shadow-[0_4px_14px_-8px_rgba(8,45,38,0.16)] font-['Poppins',sans-serif] text-[13.5px] font-semibold text-[#1D5255] transition-colors cursor-pointer"
              >
                <span>{showMoreExperiences ? 'Ver menos' : 'Ver trayectoria completa'}</span>
                <span
                  aria-hidden="true"
                  className="text-[#E2AE25] font-bold text-[17px] leading-none"
                >
                  {showMoreExperiences ? '−' : '+'}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {showMoreExperiences && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: MOTION_EASE }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-11 lg:space-y-12 pt-11 lg:pt-12">
                      {/* Centro Infantil La Estrella */}
                      <article className="relative">
                        <span
                          aria-hidden="true"
                          className="absolute -left-6 sm:-left-9 top-[6px] w-[11px] h-[11px] rounded-full border-[2px] border-[#347478] bg-[#F7F8F5] z-10"
                        />

                        <div className="pb-4 mb-5 border-b border-[#347478]/20">
                          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-x-4 gap-y-1">
                            <h3 className="font-['Poppins',sans-serif] font-semibold tracking-[-0.01em] text-[17.5px] sm:text-[19px] text-[#347478] leading-[1.25]">
                              Centro Infantil La Estrella
                            </h3>
                            <span className="sm:ml-auto sm:text-right shrink-0 font-['Poppins',sans-serif] text-[11px] font-medium uppercase tracking-[0.11em] text-[#347478]">
                              MARZO 2022 – AGOSTO 2023
                            </span>
                          </div>
                          <p className="font-['Poppins',sans-serif] font-semibold text-[12.5px] sm:text-[13px] text-[#082D26] uppercase tracking-[0.12em] leading-[1.45] mt-3">
                            Coordinadora de centro y tutora de aula
                          </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 xl:gap-x-14 gap-y-3">
                          <ul className="space-y-3">
                            {[
                              'Organización de actividades y seguimiento de la operativa diaria.',
                              'Coordinación y comunicación con las familias.',
                            ].map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3 font-['Poppins',sans-serif] text-[13px] sm:text-[13.5px] text-[#28312E]/90 leading-[1.8]"
                              >
                                {MUSTARD_DOT}
                                <span className="flex-1 text-left [text-wrap:pretty]">{item}</span>
                              </li>
                            ))}
                          </ul>

                          <ul className="space-y-3">
                            {[
                              'Desarrollo e implementación de recursos TIC aplicados a la gestión y la práctica educativa.',
                              'Supervisión de tareas y acompañamiento educativo.',
                            ].map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3 font-['Poppins',sans-serif] text-[13px] sm:text-[13.5px] text-[#28312E]/90 leading-[1.8]"
                              >
                                {MUSTARD_DOT}
                                <span className="flex-1 text-left [text-wrap:pretty]">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </article>

                      {/* Diversos centros educativos */}
                      <article className="relative">
                        <span
                          aria-hidden="true"
                          className="absolute -left-6 sm:-left-9 top-[6px] w-[11px] h-[11px] rounded-full border-[2px] border-[#347478] bg-[#F7F8F5] z-10"
                        />

                        <div className="pb-4 mb-5 border-b border-[#347478]/20">
                          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-x-4 gap-y-1">
                            <h3 className="font-['Poppins',sans-serif] font-semibold tracking-[-0.01em] text-[17.5px] sm:text-[19px] text-[#347478] leading-[1.25]">
                              Diversos centros educativos
                            </h3>
                            <span className="sm:ml-auto sm:text-right shrink-0 font-['Poppins',sans-serif] text-[11px] font-medium uppercase tracking-[0.11em] text-[#347478]">
                              ABRIL 2018 – MARZO 2022
                            </span>
                          </div>
                          <p className="font-['Poppins',sans-serif] font-semibold text-[12.5px] sm:text-[13px] text-[#082D26] uppercase tracking-[0.12em] leading-[1.45] mt-3">
                            Maestra y tutora de Educación Infantil
                          </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 xl:gap-x-14 gap-y-3">
                          <ul className="space-y-3">
                            {[
                              'Planificación y organización de actividades educativas.',
                              'Seguimiento de la evolución del alumnado.',
                            ].map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3 font-['Poppins',sans-serif] text-[13px] sm:text-[13.5px] text-[#28312E]/90 leading-[1.8]"
                              >
                                {MUSTARD_DOT}
                                <span className="flex-1 text-left [text-wrap:pretty]">{item}</span>
                              </li>
                            ))}
                          </ul>

                          <ul className="space-y-3">
                            {[
                              'Colaboración con equipos multidisciplinares y familias.',
                            ].map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3 font-['Poppins',sans-serif] text-[13px] sm:text-[13.5px] text-[#28312E]/90 leading-[1.8]"
                              >
                                {MUSTARD_DOT}
                                <span className="flex-1 text-left [text-wrap:pretty]">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </article>

                      {/* Experiencias complementarias */}
                      <article className="relative">
                        <span
                          aria-hidden="true"
                          className="absolute -left-6 sm:-left-9 top-[6px] w-[11px] h-[11px] rounded-full border-[2px] border-[#347478] bg-[#F7F8F5] z-10"
                        />

                        <div className="pb-4 mb-5 border-b border-[#347478]/20">
                          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-x-4 gap-y-1">
                            <h3 className="font-['Poppins',sans-serif] font-semibold tracking-[-0.01em] text-[17.5px] sm:text-[19px] text-[#347478] leading-[1.25]">
                              Experiencias complementarias
                            </h3>
                            <span className="sm:ml-auto sm:text-right shrink-0 font-['Poppins',sans-serif] text-[11px] font-medium uppercase tracking-[0.11em] text-[#347478]">
                              2011–2022
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 xl:gap-x-14 gap-y-3">
                          <ul className="space-y-3">
                            {[
                              'Soporte logístico y atención a asistentes como azafata en eventos.',
                              'Experiencia en hostelería, reforzando la organización, la atención al cliente y el trabajo en entornos dinámicos.',
                            ].map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3 font-['Poppins',sans-serif] text-[13px] sm:text-[13.5px] text-[#28312E]/90 leading-[1.8]"
                              >
                                {MUSTARD_DOT}
                                <span className="flex-1 text-left [text-wrap:pretty]">{item}</span>
                              </li>
                            ))}
                          </ul>

                          <ul className="space-y-3">
                            {[
                              'Apoyo administrativo en un bufete jurídico: gestión documental, facturación y atención al cliente.',
                            ].map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3 font-['Poppins',sans-serif] text-[13px] sm:text-[13.5px] text-[#28312E]/90 leading-[1.8]"
                              >
                                {MUSTARD_DOT}
                                <span className="flex-1 text-left [text-wrap:pretty]">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </article>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Section 3: Formación y Herramientas ---

const EducationAndSkills = () => {
  const skills = [
    'Organización con visión global',
    'Resolución ante imprevistos',
    'Comunicación clara y cercana',
    'Iniciativa y capacidad de adaptación',
    'Creatividad con enfoque práctico',
    'Atención al detalle',
  ];

  const digitalTools = [
    {
      name: 'IA generativa',
      description: 'Contenidos, investigación, desarrollo de ideas y optimización de tareas.',
      icon: Sparkles,
    },
    {
      name: 'Microsoft 365',
      description: 'Documentación, presentaciones, análisis de información y coordinación diaria.',
      icon: Layers,
    },
    {
      name: 'Airtable + Make',
      description: 'CRM, seguimiento comercial y automatización de procesos.',
      icon: Table,
    },
    {
      name: 'Canva',
      description: 'Presentaciones, dosieres y materiales corporativos coherentes con la imagen de marca.',
      icon: Palette,
    },
  ];

  const educationItems = [
    {
      title: 'Máster en Organización de Congresos y Eventos (MOCE)',
      school: 'Escuela de Negocios de la Cámara de Comercio de Sevilla',
      status: 'Finalizado · Mayo 2026',
      highlight: true,
    },
    {
      title: 'Máster en Tecnología Educativa y Competencias Digitales',
      school: 'UNIR',
      status: null,
      highlight: false,
    },
    {
      title: 'Experto en E-Learning y Gamificación',
      school: 'UNIR',
      status: null,
      highlight: false,
    },
    {
      title: 'Graduada en Educación Infantil',
      school: 'Universidad San Pablo CEU',
      status: null,
      highlight: false,
    },
  ];

  return (
    <section
      id="formacion"
      className="relative py-14 sm:py-16 lg:py-[78px] scroll-mt-20"
      style={{
        background:
          'linear-gradient(108deg, #F7F8F5 0%, #F7F8F5 48%, #F3F5F1 72%, #EFF2ED 100%)',
      }}
    >
      {/* Diffused transition band matching Experiencia -> Eventos (fading Eventos background smoothly into Formación) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 inset-x-0 h-[44px] sm:h-[56px] z-0"
        style={{
          background:
            'linear-gradient(108deg, #FFFFFF 0%, #FEFEFD 55%, #FCFCFA 100%)',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
        }}
      />

      <div className="relative z-10 max-w-[1120px] mx-auto px-6 sm:px-8 xl:px-12">
        {/* Section Intro */}
        <div className="pb-5 mb-8 lg:mb-9 border-b border-[#082D26]/12">
          <h2 className="font-['Poppins',sans-serif] font-semibold text-[#082D26] text-[23px] sm:text-[26px] lg:text-[28px] xl:text-[30px] leading-[1.28] tracking-[-0.02em]">
            Formación y herramientas
          </h2>
        </div>

        <div className="space-y-8 lg:space-y-10">
          {/* 1. Formación Académica */}
          <div>
            <div className="flex items-center gap-2.5 pb-3.5 mb-6 border-b border-[#347478]/20">
              <GraduationCap size={15} className="text-[#E2AE25] shrink-0" aria-hidden="true" />
              <h3 className="font-['Poppins',sans-serif] font-semibold text-[12.5px] sm:text-[13px] text-[#082D26] uppercase tracking-[0.13em]">
                FORMACIÓN ACADÉMICA
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
              {educationItems.map((edu, idx) => (
                <motion.article
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: idx * 0.05, duration: 0.4, ease: MOTION_EASE }}
                  className={`relative rounded-[12px] p-5 sm:p-6 flex flex-col justify-between ${
                    edu.highlight
                      ? 'border border-[#E2AE25]'
                      : 'border border-[#347478]'
                  }`}
                >
                  {edu.highlight && (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-[5px] rounded-[8px] border border-[#E2AE25]/35"
                    />
                  )}

                  <div className="relative z-10">
                    <h4 className="font-['Poppins',sans-serif] font-semibold text-[#082D26] text-[15.5px] sm:text-[16px] leading-[1.4]">
                      {edu.title}
                    </h4>
                    {edu.status && (
                      <p className="font-['Poppins',sans-serif] text-[13px] text-[#28312E]/80 leading-[1.55] mt-2">
                        {edu.school}
                      </p>
                    )}
                  </div>

                  <div
                    className={`relative z-10 mt-5 pt-3 border-t ${
                      edu.status ? 'border-[#E2AE25]/30' : 'border-[#347478]/20'
                    }`}
                  >
                    {edu.status ? (
                      <p className="font-['Poppins',sans-serif] text-[11px] font-semibold uppercase tracking-[0.11em] text-[#E2AE25]">
                        {edu.status}
                      </p>
                    ) : (
                      <p className="font-['Poppins',sans-serif] text-[11px] font-medium uppercase tracking-[0.1em] text-[#347478]">
                        {edu.school}
                      </p>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* 2. Competencias Clave y Herramientas Digitales (2 Equal White Columns) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-7 items-stretch">
            {/* Left Column: Competencias Clave */}
            <motion.article
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, ease: MOTION_EASE }}
              className="bg-white rounded-[14px] p-6 sm:p-7 border border-[#082D26]/10 shadow-[0_6px_24px_-18px_rgba(8,45,38,0.10)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 pb-3.5 mb-4 border-b border-[#347478]/20">
                  <Award size={15} className="text-[#E2AE25] shrink-0" aria-hidden="true" />
                  <h3 className="font-['Poppins',sans-serif] font-semibold text-[12.5px] sm:text-[13px] text-[#082D26] uppercase tracking-[0.13em]">
                    COMPETENCIAS CLAVE
                  </h3>
                </div>

                <p className="font-['Poppins',sans-serif] text-[13px] text-[#28312E]/80 leading-[1.6] mb-5">
                  Las habilidades que definen mi forma de trabajar y de afrontar cada proyecto.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
                  {skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 font-['Poppins',sans-serif] text-[13.5px] font-medium text-[#082D26] leading-[1.45]"
                    >
                      <Check size={14} className="text-[#E2AE25] shrink-0 mt-[3px]" aria-hidden="true" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 pt-4">
                <p className="font-['Playfair_Display',Georgia,serif] not-italic font-normal text-[16px] sm:text-[17px] text-[#082D26]/80 leading-[1.5]">
                  “Cada proyecto es diferente: me gusta entenderlo, adaptarme a lo que necesita y cuidar cada detalle hasta hacerlo realidad.”
                </p>
              </div>
            </motion.article>

            {/* Right Column: Herramientas Digitales */}
            <motion.article
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: 0.06, duration: 0.45, ease: MOTION_EASE }}
              className="bg-white rounded-[14px] p-6 sm:p-7 border border-[#082D26]/10 shadow-[0_6px_24px_-18px_rgba(8,45,38,0.10)] flex flex-col"
            >
              <div>
                <div className="flex items-center gap-2.5 pb-3.5 mb-4 border-b border-[#347478]/20">
                  <Laptop size={15} className="text-[#E2AE25] shrink-0" aria-hidden="true" />
                  <h3 className="font-['Poppins',sans-serif] font-semibold text-[12.5px] sm:text-[13px] text-[#082D26] uppercase tracking-[0.13em]">
                    HERRAMIENTAS DIGITALES
                  </h3>
                </div>

                <p className="font-['Poppins',sans-serif] text-[13px] text-[#28312E]/80 leading-[1.6] mb-5">
                  Uso práctico aplicado a la organización y optimización de procesos
                </p>

                <ul className="space-y-4">
                  {digitalTools.map((tool, idx) => {
                    const IconComponent = tool.icon;
                    return (
                      <li
                        key={idx}
                        className="flex items-start gap-3.5"
                      >
                        <IconComponent size={16} className="text-[#E2AE25] shrink-0 mt-0.5" aria-hidden="true" />
                        <div className="min-w-0">
                          <p className="font-['Poppins',sans-serif] font-semibold text-[#082D26] text-[14px] leading-[1.35]">
                            {tool.name}
                          </p>
                          <p className="font-['Poppins',sans-serif] text-[13px] text-[#28312E]/80 leading-[1.6] mt-0.5">
                            {tool.description}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.article>
          </div>

          {/* 3. Idiomas Strip (Transparent over Section Background, Top-Left Open Teal Accent) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: 0.1, duration: 0.45, ease: MOTION_EASE }}
            className="relative px-4 sm:px-6 py-4 flex flex-wrap items-center justify-start gap-x-5 sm:gap-x-7 gap-y-2"
          >
            {/* Open Subtle Teal Frame: Top-Left Rounded Corner Only */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-0 left-0 w-28 sm:w-44 h-[72%] border-t border-l border-[#347478] rounded-tl-[12px]"
            />

            <div className="relative z-10 flex items-center gap-2.5 shrink-0">
              <Globe size={15} className="text-[#E2AE25] shrink-0" aria-hidden="true" />
              <span className="font-['Poppins',sans-serif] font-semibold text-[13.5px] text-[#082D26]">
                Inglés · B2
              </span>
            </div>
            <p className="relative z-10 font-['Poppins',sans-serif] text-[13px] text-[#28312E]/85 leading-[1.5]">
              Experiencia internacional en Galway, Irlanda + Voluntariado internacional en Malawi, África
            </p>
          </motion.div>
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
      id: 'frozen-food',
      url: '/assets/aistudio/evento_ad6bb372.jpeg',
      title: 'Frozen Food Market · Sevilla',
      subtitle: 'Participación en la organización y desarrollo de su III edición.'
    },
    {
      id: 'reunion-comercial',
      url: '/assets/aistudio/WhatsApp_Image_2026-11-25_at_11.47.34__1__23dbb2cd.jpeg',
      title: 'Networking comercial',
      subtitle: 'Encuentro con proveedores internacionales y profesionales del sector turístico.'
    },
    {
      id: 'companeras',
      url: '/assets/aistudio/WhatsApp_Image_2026-08-31_at_12.03.18__1__fde78fd0.jpeg',
      title: 'Family Day · Sevilla',
      subtitle: 'Codirección y coordinación del proyecto desarrollado para Sevilla Congress and Convention Bureau.'
    },
    {
      id: 'tis',
      url: '/assets/aistudio/WhatsApp_Image_2026-11-25_at_11.47.40_fa511659.jpeg',
      title: 'Tourism Innovation Summit (TIS)',
      subtitle: 'Presencia en grandes congresos y encuentros del sector.'
    },
    {
      id: 'malawi',
      url: '/assets/aistudio/IMG-20190725-WA0024_c4577971.jpg',
      title: 'Voluntariado en Benga, Malawi',
      subtitle: 'Experiencia internacional de seis meses vinculada al desarrollo de un proyecto docente.'
    },
  ];

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImg !== null) {
        setSelectedImg(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [selectedImg]);

  return (
    <section
      id="sobre-mi"
      className="relative py-14 sm:py-16 lg:py-[78px] scroll-mt-20 overflow-x-clip"
      style={{
        background:
          'linear-gradient(108deg, #F7F8F5 0%, #F7F8F5 48%, #F3F5F1 72%, #EFF2ED 100%)',
      }}
    >
      <div className="relative z-10 max-w-[1120px] mx-auto px-6 sm:px-8 xl:px-12">
        {/* Section Intro */}
        <div className="pb-4 mb-5 lg:mb-6 border-b border-[#082D26]/12">
          <h2 className="font-['Poppins',sans-serif] font-semibold text-[#082D26] text-[23px] sm:text-[26px] lg:text-[28px] xl:text-[30px] leading-[1.28] tracking-[-0.02em]">
            <span className="relative inline-block">
              Sobre mí
              {/* Subtle Editorial 3-Stroke Accent Marks at Upper-Left over the S */}
              <svg
                aria-hidden="true"
                viewBox="28 34 140 148"
                fill="none"
                className="pointer-events-none select-none absolute -top-[26px] -left-[22px] w-[28px] h-[30px] sm:-top-[32px] sm:-left-[32px] sm:w-[34px] sm:h-[36px] lg:-top-[34px] lg:-left-[36px] lg:w-[38px] lg:h-[40px] xl:-top-[38px] xl:-left-[42px] xl:w-[42px] xl:h-[44px] text-[#C5A276] opacity-75"
              >
                <path
                  d="M 155 118 C 146 94 142 62 147 46 C 151 37 160 40 161 52 C 162 72 158 96 155 118 Z"
                  fill="currentColor"
                />
                <path
                  d="M 134 138 C 112 120 88 94 87 77 C 87 67 96 67 104 77 C 117 94 127 116 134 138 Z"
                  fill="currentColor"
                />
                <path
                  d="M 121 149 C 95 142 60 144 40 156 C 30 162 34 176 47 175 C 68 172 95 156 121 149 Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </h2>
        </div>

        {/* Heading Phrases + Full-Width Initial Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, ease: MOTION_EASE }}
          className="mb-3.5 lg:mb-4"
        >
          <h3 className="mb-3">
            <span className="font-['Poppins',sans-serif] text-[21px] sm:text-[25px] lg:text-[28px] font-semibold text-[#082D26] block leading-[1.24] tracking-[-0.015em]">
              Inquieta desde siempre.
            </span>
            <span className="font-['Playfair_Display',Georgia,serif] italic text-[20px] sm:text-[22px] lg:text-[25px] font-normal text-[#347478] block mt-1 leading-[1.28]">
              Imparable cuando creo en algo.
            </span>
          </h3>

          <div
            lang="es"
            className="space-y-2.5 font-['Poppins',sans-serif] text-[14.5px] sm:text-[15.5px] lg:text-[14px] text-[#28312E]/90 leading-[1.72] text-left sm:text-justify [text-wrap:pretty] sm:[hyphens:auto] sm:[hyphenate-limit-chars:8_3_3]"
          >
            <p>
              Pasar de la educación al mundo de los eventos fue{' '}
              <strong className="font-semibold text-[#347478]">
                un cambio de vida, pero no de esencia
              </strong>
              .
            </p>
            <p>
              <span className="font-['Playfair_Display',Georgia,serif] italic font-medium text-[#28312E]/90 text-[16.5px] sm:text-[17.5px] mr-1.5">
                ¿Y este cambio?
              </span>
              Esa es la gran pregunta. Solo puedo decirte una cosa: la vida.
            </p>
            <p>
              Así llegué a RRA Consultoría: un escenario completamente distinto, pero también una oportunidad para convertir la organización, la comunicación y la creatividad en algo tangible. Participar en la planificación y ejecución de{' '}
              <strong className="font-semibold text-[#347478]">
                ferias, congresos y encuentros profesionales
              </strong>{' '}
              confirmó mis ganas de seguir creciendo en ese camino.
            </p>
          </div>
        </motion.div>

        {/* Block 1: Commercial & Business Travel Narrative (Left) + 4 Professional Photos Composition (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,62fr)_minmax(0,38fr)] gap-6 lg:gap-10 xl:gap-12 items-start mb-3.5 lg:mb-4">
          <motion.div
            lang="es"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, ease: MOTION_EASE }}
            className="space-y-2.5 font-['Poppins',sans-serif] text-[14.5px] sm:text-[15.5px] lg:text-[14px] text-[#28312E]/90 leading-[1.72] text-left sm:text-justify [text-wrap:pretty] sm:[hyphens:auto] sm:[hyphenate-limit-chars:8_3_3]"
          >
            <p>
              Al mismo tiempo, mis funciones fueron incorporando{' '}
              <strong className="font-semibold text-[#347478]">
                una dimensión cada vez más comercial
              </strong>
              . El contacto con clientes, proveedores y asociados, la elaboración de propuestas y la captación y fidelización me permitieron comprender cada proyecto desde una perspectiva más amplia: escuchar una necesidad, darle forma y encontrar la mejor manera de presentarla.
            </p>
            <p>
              A medida que avanzaba en esta nueva etapa, tenía más claro que quería seguir formándome y conocer mejor el sector. Por eso decidí cursar el Máster en Organización de Congresos y Eventos, y fue precisamente a raíz de esa formación cuando surgió la oportunidad de asumir un nuevo proyecto en Viajes Triana:{' '}
              <strong className="font-semibold text-[#347478]">
                poner en marcha y desarrollar el área comercial de{' '}
                <em className="italic">Business Travel</em>
              </strong>
              . Una etapa en la que continúo construyendo relaciones con empresas y mejorando procesos, herramientas y formas de presentar nuestros servicios.
            </p>
          </motion.div>

          {/* 4 Professional Photographs: Frozen Food Main + 3 Secondary */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: 0.06, ease: MOTION_EASE }}
            className="w-full space-y-2 lg:pt-[5px]"
          >
            {/* Main Professional Photograph: Frozen Food Market */}
            <button
              type="button"
              onClick={() => setSelectedImg(0)}
              className="w-full relative group cursor-pointer overflow-hidden rounded-[10px] aspect-[2/1] bg-[#EFF2ED] text-left block"
            >
              <img
                src={aboutPhotos[0].url}
                alt={aboutPhotos[0].title}
                className="w-full h-full object-cover object-[center_45%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082D26]/75 via-[#082D26]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <p className="font-['Playfair_Display',Georgia,serif] text-base font-semibold text-[#E2AE25]">
                    {aboutPhotos[0].title}
                  </p>
                  <p className="font-['Poppins',sans-serif] text-xs text-white/90 leading-snug mt-0.5">
                    {aboutPhotos[0].subtitle}
                  </p>
                </div>
              </div>
            </button>

            {/* 3 Secondary Professional Photographs */}
            <div className="grid grid-cols-3 gap-2">
              {aboutPhotos.slice(1, 4).map((photo, idx) => (
                <button
                  type="button"
                  key={photo.id}
                  onClick={() => setSelectedImg(idx + 1)}
                  className="relative group cursor-pointer overflow-hidden rounded-[10px] aspect-[3/2] bg-[#EFF2ED] text-left"
                >
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
                      idx === 0
                        ? 'object-[center_40%] group-hover:scale-[1.04]'
                        : idx === 1
                          ? 'object-[center_24%] group-hover:scale-[1.04]'
                          : 'object-[18%_64%] scale-[1.22] origin-[18%_64%] group-hover:scale-[1.26]'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#082D26]/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2.5">
                    <p className="font-['Poppins',sans-serif] text-[11px] font-medium text-white leading-tight">
                      {photo.title}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Block 2: Malawi + Closing Text (Left) + Horizontal Malawi Photograph (Right, Exact Same Width) */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,62fr)_minmax(0,38fr)] gap-6 lg:gap-10 xl:gap-12 items-start">
          <motion.div
            lang="es"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, ease: MOTION_EASE }}
            className="space-y-2.5 font-['Poppins',sans-serif] text-[14.5px] sm:text-[15.5px] lg:text-[14px] text-[#28312E]/90 leading-[1.72] text-left sm:text-justify [text-wrap:pretty] sm:[hyphens:auto] sm:[hyphenate-limit-chars:8_3_3]"
          >
            <p>
              El interés por aprender y afrontar nuevos retos ha sido una constante en mi recorrido. Mucho antes de esta evolución profesional, ese mismo impulso me llevó hasta Benga, Malawi, donde cumplí un sueño que tenía desde pequeña. Pasé{' '}
              <strong className="font-semibold text-[#082D26]">
                seis meses como voluntaria
              </strong>{' '}
              y, aunque fui con la intención de aportar, terminé recibiendo mucho más de lo que pude dejar allí. Convivir con una realidad tan diferente me enseñó a mirar con otros ojos, a desenvolverme en lo desconocido y a comprender que los esquemas cambian por completo en cuanto bajas del avión.
            </p>
            <p>
              Cada cambio y cada experiencia, dentro y fuera del trabajo, han reforzado mi capacidad para adaptarme, buscar soluciones, seguir aprendiendo y cuidar los detalles. No son habilidades de una sola etapa, sino el resultado de todas ellas.
            </p>
          </motion.div>

          {/* Horizontal Elongated Prominent Malawi Photograph */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: 0.06, ease: MOTION_EASE }}
            className="w-full lg:pt-[5px]"
          >
            <button
              type="button"
              onClick={() => setSelectedImg(4)}
              className="w-full relative group cursor-pointer overflow-hidden rounded-[10px] aspect-[16/9] bg-[#EFF2ED] text-left block"
            >
              <img
                src={aboutPhotos[4].url}
                alt={aboutPhotos[4].title}
                className="w-full h-full object-cover object-[center_53%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082D26]/75 via-[#082D26]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <p className="font-['Playfair_Display',Georgia,serif] text-base font-semibold text-[#E2AE25]">
                    {aboutPhotos[4].title}
                  </p>
                  <p className="font-['Poppins',sans-serif] text-xs text-white/90 leading-snug mt-0.5">
                    {aboutPhotos[4].subtitle}
                  </p>
                </div>
              </div>
            </button>
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
            className="fixed inset-0 z-[100] bg-[#082D26]/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedImg(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-4xl w-full relative bg-[#0D1E1A] p-3 sm:p-4 rounded-[12px] border border-white/15"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Cerrar imagen"
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-[8px] bg-black/60 hover:bg-black/85 text-white flex items-center justify-center transition-colors cursor-pointer"
                onClick={() => setSelectedImg(null)}
              >
                <X size={18} />
              </button>
              <img
                src={aboutPhotos[selectedImg].url}
                alt={aboutPhotos[selectedImg].title}
                className="w-full max-h-[75vh] object-contain rounded-[8px]"
              />
              <div className="text-center mt-3 pb-1">
                <p className="font-['Playfair_Display',Georgia,serif] text-[#E2AE25] text-base sm:text-lg font-medium">
                  {aboutPhotos[selectedImg].title}
                </p>
                <p className="font-['Poppins',sans-serif] text-white/75 text-xs sm:text-sm mt-0.5">
                  {aboutPhotos[selectedImg].subtitle}
                </p>
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
    <section id="contacto" className="w-full scroll-mt-20">
      {/* Top Progressive Gradient Blend from Sobre mí (#F7F8F5/#EFF2ED) into Corporate Teal (#347478) */}
      <div
        aria-hidden="true"
        className="h-[22px] sm:h-[32px] w-full"
        style={{
          background:
            'linear-gradient(to bottom, rgba(52, 116, 120, 0) 0%, #347478 100%), linear-gradient(108deg, #F7F8F5 0%, #F7F8F5 48%, #F3F5F1 72%, #EFF2ED 100%)',
        }}
      />

      {/* Corporate Teal Full-Width Band */}
      <div className="bg-[#347478] py-14 sm:py-16 lg:py-[76px] text-[#F7F8F5]">
        <div className="max-w-[1120px] mx-auto px-6 sm:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Main Message */}
            <div className="lg:col-span-7">
              <h2 className="font-['Poppins',sans-serif] font-semibold text-[#F7F8F5] text-[26px] sm:text-[31px] lg:text-[34px] leading-[1.24] tracking-[-0.02em] mb-5 max-w-[24ch]">
                Las buenas ideas también empiezan con una{' '}
                <span className="font-['Playfair_Display',Georgia,serif] italic font-medium text-[#E2AE25]">
                  conversación.
                </span>
              </h2>

              <p className="font-['Poppins',sans-serif] text-[#F7F8F5]/90 text-[14.5px] sm:text-[15.5px] leading-[1.72] max-w-[54ch] mb-7">
                Esta web es solo un resumen de mi recorrido. Hay mucho que no cabe en un CV: lo que sigo aprendiendo, lo que me mueve y las ganas de afrontar nuevos retos. ¿Hablamos?
              </p>

              <a
                href={CV_DOWNLOAD_URL}
                download="Blanca_Castro_CV_2026.pdf"
                className="inline-flex items-center justify-center gap-2.5 border border-[#F7F8F5]/45 hover:border-[#F7F8F5] hover:bg-white/10 text-[#F7F8F5] px-6 py-3 rounded-[9px] font-['Poppins',sans-serif] text-[14px] font-medium transition-colors"
              >
                <Download size={16} className="text-[#E2AE25] shrink-0" />
                <span>Descargar CV (PDF)</span>
              </a>
            </div>

            {/* Right Column: Clean Informative Contact Lines with White Low-Opacity Dividers */}
            <div className="lg:col-span-5 divide-y divide-white/20 border-t lg:border-t-0 border-white/20 pt-2 lg:pt-0">
              <a
                href="mailto:bcvillalba@gmail.com"
                className="py-5 first:pt-2 flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <Mail size={18} className="text-[#E2AE25] shrink-0" />
                  <div className="min-w-0">
                    <span className="block font-['Poppins',sans-serif] text-[10.5px] text-[#F7F8F5]/70 uppercase font-semibold tracking-[0.16em]">
                      Email
                    </span>
                    <span className="font-['Poppins',sans-serif] text-[15px] sm:text-[15.5px] font-medium text-[#F7F8F5] group-hover:text-[#E2AE25] transition-colors break-all">
                      bcvillalba@gmail.com
                    </span>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-[#E2AE25] opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </a>

              <a
                href="https://www.linkedin.com/in/blancacastro-eventos-comunicacion-proyectos/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-5 flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <Linkedin size={18} className="text-[#E2AE25] shrink-0" />
                  <div className="min-w-0">
                    <span className="block font-['Poppins',sans-serif] text-[10.5px] text-[#F7F8F5]/70 uppercase font-semibold tracking-[0.16em]">
                      LinkedIn
                    </span>
                    <span className="font-['Poppins',sans-serif] text-[15px] sm:text-[15.5px] font-medium text-[#F7F8F5] group-hover:text-[#E2AE25] transition-colors">
                      Blanca Castro
                    </span>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-[#E2AE25] opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </a>

              <a
                href="https://wa.me/34611491011"
                target="_blank"
                rel="noopener noreferrer"
                className="py-5 last:pb-2 flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <MessageCircle size={18} className="text-[#E2AE25] shrink-0" />
                  <div className="min-w-0">
                    <span className="block font-['Poppins',sans-serif] text-[10.5px] text-[#F7F8F5]/70 uppercase font-semibold tracking-[0.16em]">
                      WhatsApp
                    </span>
                    <span className="font-['Poppins',sans-serif] text-[15px] sm:text-[15.5px] font-medium text-[#F7F8F5] group-hover:text-[#E2AE25] transition-colors tabular-nums">
                      +34 611 49 10 11
                    </span>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-[#E2AE25] opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Progressive Gradient Fade Out from Corporate Teal (#347478) into Footer Light Canvas */}
      <div
        aria-hidden="true"
        className="h-[22px] sm:h-[32px] w-full"
        style={{
          background:
            'linear-gradient(to bottom, #347478 0%, rgba(52, 116, 120, 0) 100%), linear-gradient(108deg, #F7F8F5 0%, #F7F8F5 48%, #F3F5F1 72%, #EFF2ED 100%)',
        }}
      />
    </section>
  );
};

// --- Footer Component ---

const Footer = () => {
  return (
    <footer
      className="py-8"
      style={{
        background:
          'linear-gradient(108deg, #F7F8F5 0%, #F7F8F5 48%, #F3F5F1 72%, #EFF2ED 100%)',
      }}
    >
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8 xl:px-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <p className="font-['Playfair_Display',Georgia,serif] text-lg font-semibold text-[#082D26]">
              Blanca Castro
            </p>
            <p className="font-['Poppins',sans-serif] text-xs text-[#28312E]/75 mt-0.5">
              Eventos · Comunicación · Gestión de proyectos
            </p>
          </div>

          <p className="font-['Poppins',sans-serif] text-xs text-[#28312E]/70">
            © 2026 Blanca Castro. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="antialiased selection:bg-[#082D26] selection:text-white bg-[#F7F8F5] text-[#28312E] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TransitionBand />
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
