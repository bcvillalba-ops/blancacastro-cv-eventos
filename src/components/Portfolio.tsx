import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Play,
  ArrowRight,
  X,
  Layers,
  FileText,
  ChevronDown,
  Maximize2,
  CheckCircle2,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { EVENT_PROJECTS, EventProject } from '../data/events';

const MOTION_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const Portfolio = () => {
  const [activeVideoProject, setActiveVideoProject] = useState<EventProject | null>(null);
  const [activeProject, setActiveProject] = useState<EventProject | null>(null);

  const [activeGalleryProject, setActiveGalleryProject] = useState<EventProject | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState<number>(0);

  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [openAreaIndex, setOpenAreaIndex] = useState<number | null>(0);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const featuredProjects = EVENT_PROJECTS.slice(0, 3);
  const additionalProjects = EVENT_PROJECTS.slice(3);

  const handlePrevGalleryImage = useCallback(() => {
    if (!activeGalleryProject?.galleryImgs) return;
    setCurrentGalleryIndex((prev) =>
      prev === 0 ? activeGalleryProject.galleryImgs!.length - 1 : prev - 1
    );
  }, [activeGalleryProject]);

  const handleNextGalleryImage = useCallback(() => {
    if (!activeGalleryProject?.galleryImgs) return;
    setCurrentGalleryIndex((prev) =>
      prev === activeGalleryProject.galleryImgs!.length - 1 ? 0 : prev + 1
    );
  }, [activeGalleryProject]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (zoomedImage) {
          setZoomedImage(null);
        } else if (activeGalleryProject) {
          setActiveGalleryProject(null);
        } else if (activeVideoProject) {
          setActiveVideoProject(null);
        } else if (activeProject) {
          setActiveProject(null);
        }
      } else if (activeGalleryProject) {
        if (e.key === 'ArrowLeft') {
          handlePrevGalleryImage();
        } else if (e.key === 'ArrowRight') {
          handleNextGalleryImage();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [zoomedImage, activeGalleryProject, activeVideoProject, activeProject, handlePrevGalleryImage, handleNextGalleryImage]);

  const handleOpenProject = (project: EventProject) => {
    setActiveProject(project);
    setZoomedImage(null);
    setOpenAreaIndex(0);
  };

  const handleOpenVideo = (project: EventProject) => {
    if (project.hasVideo && project.videoUrl) {
      setActiveVideoProject(project);
    }
  };

  const handleOpenGallery = (project: EventProject, initialIndex = 0) => {
    if (project.galleryImgs && project.galleryImgs.length > 0) {
      setActiveGalleryProject(project);
      setCurrentGalleryIndex(initialIndex);
    }
  };

  const renderCardButtons = (project: EventProject) => {
    const secondaryBtnClass =
      'h-[38px] inline-flex items-center justify-center gap-2 px-3 rounded-[9px] bg-white border border-[#082D26]/15 hover:border-[#082D26]/30 hover:bg-[#F7F8F5] text-[#082D26] font-[\'Poppins\',sans-serif] text-[12.5px] font-medium transition-colors whitespace-nowrap cursor-pointer';

    const primaryBtnClass =
      'h-[38px] inline-flex items-center justify-center gap-2 px-3 rounded-[9px] bg-[#347478] hover:bg-[#295E62] text-[#F7F8F5] font-[\'Poppins\',sans-serif] text-[12.5px] font-medium transition-colors group/btn whitespace-nowrap cursor-pointer';

    if (project.hasGalleryAction) {
      return (
        <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-2.5 items-center">
          <button
            type="button"
            onClick={() => handleOpenGallery(project, 0)}
            className={secondaryBtnClass}
            title="Ver galería de fotografías"
          >
            <ImageIcon size={13} className="text-[#E2AE25] shrink-0" />
            <span>Ver galería</span>
          </button>

          <button
            type="button"
            onClick={() => handleOpenProject(project)}
            className={primaryBtnClass}
          >
            <span>Ver proyecto</span>
            <ArrowRight size={13} className="text-[#E2AE25] group-hover/btn:translate-x-0.5 transition-transform shrink-0" />
          </button>
        </div>
      );
    }

    if (project.hasVideo) {
      return (
        <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-2.5 items-center">
          <button
            type="button"
            onClick={() => handleOpenVideo(project)}
            className={secondaryBtnClass}
            title="Ver vídeo resumen"
          >
            <Play size={11} className="text-[#E2AE25] fill-[#E2AE25] shrink-0" />
            <span>Ver vídeo</span>
          </button>

          <button
            type="button"
            onClick={() => handleOpenProject(project)}
            className={primaryBtnClass}
          >
            <span>Ver proyecto</span>
            <ArrowRight size={13} className="text-[#E2AE25] group-hover/btn:translate-x-0.5 transition-transform shrink-0" />
          </button>
        </div>
      );
    }

    return (
      <button
        type="button"
        onClick={() => handleOpenProject(project)}
        className={`w-full ${primaryBtnClass}`}
      >
        <span>Ver proyecto</span>
        <ArrowRight size={13} className="text-[#E2AE25] group-hover/btn:translate-x-0.5 transition-transform shrink-0" />
      </button>
    );
  };

  return (
    <section
      id="eventos"
      className="relative py-14 sm:py-16 lg:py-[78px] scroll-mt-20"
      style={{
        background:
          'linear-gradient(108deg, #FFFFFF 0%, #FEFEFD 55%, #FCFCFA 100%)',
      }}
    >
      {/* Diffused transition band blending Experiencia profesional tone into the lighter Eventos destacados background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 inset-x-0 h-[44px] sm:h-[56px] z-0"
        style={{
          background:
            'linear-gradient(108deg, #F7F8F5 0%, #F7F8F5 48%, #F3F5F1 72%, #EFF2ED 100%)',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
        }}
      />
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 xl:px-12">
        {/* Section Intro (identical to Experiencia profesional) */}
        <div className="pb-5 mb-8 lg:mb-9 border-b border-[#082D26]/12">
          <h2 className="font-['Poppins',sans-serif] font-semibold text-[#082D26] text-[23px] sm:text-[26px] lg:text-[28px] xl:text-[30px] leading-[1.28] tracking-[-0.02em]">
            <span className="relative inline-block">
              Eventos destacados
              {/* Subtle Editorial 3-Stroke Accent Marks at Upper-Right of "Eventos destacados" */}
              <svg
                aria-hidden="true"
                viewBox="28 34 140 148"
                fill="none"
                className="pointer-events-none select-none absolute -top-[18px] -right-[22px] w-[28px] h-[30px] sm:-top-[22px] sm:-right-[28px] sm:w-[34px] sm:h-[36px] lg:-top-[24px] lg:-right-[32px] lg:w-[38px] lg:h-[40px] xl:-top-[28px] xl:-right-[36px] xl:w-[42px] xl:h-[44px] text-[#C5A276] opacity-75 -scale-x-100"
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

        {/* First Row: Top 3 Featured & Distinct Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-7 gap-y-7 lg:gap-y-8">
          {featuredProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: 0.04 * idx, duration: 0.4, ease: MOTION_EASE }}
              className="group bg-white rounded-[14px] overflow-hidden border border-[#082D26]/12 shadow-[0_8px_24px_-16px_rgba(8,45,38,0.12)] hover:-translate-y-[2px] hover:shadow-[0_12px_28px_-16px_rgba(8,45,38,0.18)] transition-all duration-300 flex flex-col"
            >
              {/* Continuous White Piece: 8px White Photo Frame + Seamless Info Strip */}
              <div className="bg-white">
                <div className="p-2 pb-0">
                  <div
                    onClick={() => handleOpenProject(project)}
                    className="relative aspect-[16/9] w-full rounded-[8px] overflow-hidden bg-white cursor-pointer"
                  >
                    <img
                      src={project.coverImg}
                      alt={`${project.title}${project.subtitle ? ` - ${project.subtitle}` : ''}`}
                      className={`w-full h-full ${project.imgPositionClass || 'object-cover'}`}
                      referrerPolicy="no-referrer"
                      loading="eager"
                    />
                  </div>
                </div>

                {/* Seamless Info Strip (38px height, same white background, zero borders) */}
                <div className="h-[38px] px-4 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span
                      aria-hidden="true"
                      className="w-[6px] h-[6px] rounded-full bg-[#E2AE25] shrink-0"
                    />
                    <span className="font-['Poppins',sans-serif] text-[12px] font-medium text-[#082D26] truncate">
                      {project.category}
                    </span>
                  </div>
                  {project.attendeesConfirmed && (
                    <span className="font-['Poppins',sans-serif] text-[12px] font-medium text-[#082D26] tabular-nums shrink-0">
                      {project.attendeesConfirmed}
                    </span>
                  )}
                </div>

                {/* Subtle Hairline Below Strip */}
                <div className="mx-2 border-b border-[#082D26]/10" />
              </div>

              {/* Card Body */}
              <div className="p-5 pt-6 flex flex-col flex-1">
                <h3
                  onClick={() => handleOpenProject(project)}
                  className="font-['Poppins',sans-serif] font-semibold text-[19px] sm:text-[20px] text-[#082D26] leading-[1.28] cursor-pointer"
                >
                  {project.title}
                </h3>

                {project.subtitle && (
                  <p className="font-['Poppins',sans-serif] text-[13px] font-normal text-[#28312E]/80 leading-[1.45] mt-1.5">
                    {project.subtitle}
                  </p>
                )}

                <div className="mt-auto pt-10 sm:pt-11">
                  {renderCardButtons(project)}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Remaining 2 Rows Revealed Smoothly on Click */}
        <AnimatePresence initial={false}>
          {showAllProjects && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.42, ease: MOTION_EASE }}
              className="overflow-hidden -mx-2 px-2 pb-4"
            >
              <div className="pt-7 lg:pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-7 gap-y-7 lg:gap-y-8">
                {additionalProjects.map((project, idx) => (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * (idx % 3), duration: 0.35, ease: MOTION_EASE }}
                    className="group bg-white rounded-[14px] overflow-hidden border border-[#082D26]/12 shadow-[0_8px_24px_-16px_rgba(8,45,38,0.12)] hover:-translate-y-[2px] hover:shadow-[0_12px_28px_-16px_rgba(8,45,38,0.18)] transition-all duration-300 flex flex-col"
                  >
                    {/* Continuous White Piece: 8px White Photo Frame + Seamless Info Strip */}
                    <div className="bg-white">
                      <div className="p-2 pb-0">
                        <div
                          onClick={() => handleOpenProject(project)}
                          className="relative aspect-[16/9] w-full rounded-[8px] overflow-hidden bg-white cursor-pointer"
                        >
                          <img
                            src={project.coverImg}
                            alt={`${project.title}${project.subtitle ? ` - ${project.subtitle}` : ''}`}
                            className={`w-full h-full ${project.imgPositionClass || 'object-cover'}`}
                            referrerPolicy="no-referrer"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      {/* Seamless Info Strip (38px height, same white background, zero borders) */}
                      <div className="h-[38px] px-4 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <span
                            aria-hidden="true"
                            className="w-[6px] h-[6px] rounded-full bg-[#E2AE25] shrink-0"
                          />
                          <span className="font-['Poppins',sans-serif] text-[12px] font-medium text-[#082D26] truncate">
                            {project.category}
                          </span>
                        </div>
                        {project.attendeesConfirmed && (
                          <span className="font-['Poppins',sans-serif] text-[12px] font-medium text-[#082D26] tabular-nums shrink-0">
                            {project.attendeesConfirmed}
                          </span>
                        )}
                      </div>

                      {/* Subtle Hairline Below Strip */}
                      <div className="mx-2 border-b border-[#082D26]/10" />
                    </div>

                    {/* Card Body */}
                    <div className="p-5 pt-6 flex flex-col flex-1">
                      <h3
                        onClick={() => handleOpenProject(project)}
                        className="font-['Poppins',sans-serif] font-semibold text-[19px] sm:text-[20px] text-[#082D26] leading-[1.28] cursor-pointer"
                      >
                        {project.title}
                      </h3>

                      {project.subtitle && (
                        <p className="font-['Poppins',sans-serif] text-[13px] font-normal text-[#28312E]/80 leading-[1.45] mt-1.5">
                          {project.subtitle}
                        </p>
                      )}

                      <div className="mt-auto pt-10 sm:pt-11">
                        {renderCardButtons(project)}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Visible Expand / Collapse Button */}
        <div className="mt-8 lg:mt-10 flex justify-center">
          <button
            type="button"
            aria-expanded={showAllProjects}
            onClick={() => setShowAllProjects((prev) => !prev)}
            className="h-[48px] px-7 inline-flex items-center justify-center gap-2.5 rounded-[10px] bg-[#347478] hover:bg-[#295E62] text-[#F7F8F5] shadow-[0_8px_22px_-10px_rgba(8,45,38,0.35)] font-['Poppins',sans-serif] text-[14.5px] font-semibold tracking-[0.01em] transition-all duration-200 cursor-pointer"
          >
            <span>{showAllProjects ? 'Ver menos' : 'Ver más proyectos'}</span>
            <span aria-hidden="true" className="text-[#E2AE25] font-bold text-[16px] leading-none">
              {showAllProjects ? '↑' : '↓'}
            </span>
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* Video Modal */}
      {/* ========================================================= */}
      <AnimatePresence>
        {activeVideoProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#082D26]/80 backdrop-blur-sm"
            onClick={() => setActiveVideoProject(null)}
          >
            <motion.div
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`relative w-full bg-black overflow-hidden rounded-[10px] border border-white/15 ${
                activeVideoProject.aspect === '9/16'
                  ? 'max-w-[400px] aspect-[9/16]'
                  : 'max-w-4xl aspect-[16/9]'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/85 to-transparent z-20 flex justify-between items-center">
                <p className="text-white text-xs sm:text-sm font-medium truncate pr-4">
                  {activeVideoProject.title} {activeVideoProject.subtitle ? `· ${activeVideoProject.subtitle}` : ''}
                </p>
                <button
                  type="button"
                  onClick={() => setActiveVideoProject(null)}
                  aria-label="Cerrar vídeo"
                  className="w-9 h-9 rounded-[8px] bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors shrink-0 cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              <iframe
                src={activeVideoProject.videoUrl}
                className="w-full h-full border-0 pt-10"
                allowFullScreen
                title={`Vídeo de ${activeVideoProject.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================= */}
      {/* Gallery Modal */}
      {/* ========================================================= */}
      <AnimatePresence>
        {activeGalleryProject && activeGalleryProject.galleryImgs && activeGalleryProject.galleryImgs.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 bg-[#082D26]/85 backdrop-blur-sm"
            onClick={() => setActiveGalleryProject(null)}
          >
            <motion.div
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl bg-[#0D1E1A] rounded-[14px] overflow-hidden border border-white/15 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-white/10 flex justify-between items-center z-20">
                <div className="flex items-center gap-3 min-w-0">
                  <ImageIcon size={18} className="text-[#E2AE25] shrink-0" />
                  <div className="min-w-0">
                    <h4 className="font-['Playfair_Display',Georgia,serif] text-white text-base sm:text-lg font-medium truncate">
                      {activeGalleryProject.title} {activeGalleryProject.subtitle ? `· ${activeGalleryProject.subtitle}` : ''}
                    </h4>
                    <p className="text-white/60 text-xs tabular-nums">
                      Fotografía {currentGalleryIndex + 1} de {activeGalleryProject.galleryImgs.length}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveGalleryProject(null)}
                  aria-label="Cerrar galería"
                  className="w-9 h-9 rounded-[8px] bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shrink-0 cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="relative flex items-center justify-center min-h-[320px] max-h-[65vh] bg-black/50 p-3">
                <img
                  src={activeGalleryProject.galleryImgs[currentGalleryIndex]}
                  alt={`${activeGalleryProject.title} - Imagen ${currentGalleryIndex + 1}`}
                  className="max-h-[60vh] max-w-full object-contain mx-auto rounded-[6px] select-none"
                  referrerPolicy="no-referrer"
                />

                {activeGalleryProject.galleryImgs.length > 1 && (
                  <button
                    type="button"
                    onClick={handlePrevGalleryImage}
                    aria-label="Fotografía anterior"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-[8px] bg-black/65 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-colors cursor-pointer"
                  >
                    <ChevronLeft size={20} />
                  </button>
                )}

                {activeGalleryProject.galleryImgs.length > 1 && (
                  <button
                    type="button"
                    onClick={handleNextGalleryImage}
                    aria-label="Fotografía siguiente"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-[8px] bg-black/65 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-colors cursor-pointer"
                  >
                    <ChevronRight size={20} />
                  </button>
                )}
              </div>

              {activeGalleryProject.galleryImgs.length > 1 && (
                <div className="p-3 bg-black/70 border-t border-white/10 flex items-center justify-center gap-2 overflow-x-auto">
                  {activeGalleryProject.galleryImgs.map((imgUrl, i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => setCurrentGalleryIndex(i)}
                      className={`relative w-14 h-11 sm:w-16 sm:h-12 rounded-[4px] overflow-hidden shrink-0 border transition-all cursor-pointer ${
                        currentGalleryIndex === i
                          ? 'border-[#E2AE25] opacity-100'
                          : 'border-transparent opacity-50 hover:opacity-80'
                      }`}
                    >
                      <img
                        src={imgUrl}
                        alt={`Miniatura ${i + 1}`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================= */}
      {/* Single Project Editorial Modal */}
      {/* ========================================================= */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center p-3 sm:p-6 bg-[#082D26]/75 backdrop-blur-sm overflow-y-auto"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 18, opacity: 0 }}
              transition={{ duration: 0.25, ease: MOTION_EASE }}
              className="relative w-full max-w-4xl bg-white rounded-[14px] border border-[#082D26]/12 shadow-[0_24px_60px_-20px_rgba(8,45,38,0.28)] overflow-hidden my-auto max-h-[92vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label="Cerrar proyecto"
                className="absolute top-4 right-4 z-30 w-10 h-10 bg-[#F7F8F5] hover:bg-[#EFF2ED] text-[#082D26] rounded-[9px] flex items-center justify-center transition-colors border border-[#082D26]/15 cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="overflow-y-auto p-6 sm:p-9 space-y-8 font-['Poppins',sans-serif]">
                {/* Project Header */}
                <div className="grid md:grid-cols-12 gap-7 items-start">
                  <div className="md:col-span-5 space-y-3">
                    <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-[10px] overflow-hidden bg-[#F7F8F5] border border-[#082D26]/10 group/mainImg">
                      <img
                        src={activeProject.coverImg}
                        alt={activeProject.title}
                        className={`w-full h-full ${activeProject.imgPositionClass || 'object-cover'}`}
                        referrerPolicy="no-referrer"
                      />
                      <button
                        type="button"
                        onClick={() => setZoomedImage(activeProject.coverImg)}
                        className="absolute bottom-3 right-3 p-2 bg-[#347478]/90 hover:bg-[#347478] text-[#F7F8F5] rounded-[7px] opacity-0 group-hover/mainImg:opacity-100 transition-opacity flex items-center gap-1 text-xs cursor-pointer"
                        title="Ampliar imagen"
                      >
                        <Maximize2 size={14} />
                      </button>
                    </div>

                    {activeProject.galleryImgs && activeProject.galleryImgs.length > 1 && (
                      <div className="grid grid-cols-4 gap-2">
                        {activeProject.galleryImgs.slice(0, 4).map((imgUrl, gIdx) => (
                          <button
                            type="button"
                            key={gIdx}
                            onClick={() => handleOpenGallery(activeProject, gIdx)}
                            className="aspect-square rounded-[7px] overflow-hidden border border-[#082D26]/12 hover:border-[#347478] transition-all bg-[#F7F8F5] relative group/thumb cursor-pointer"
                            title={`Ver fotografía ${gIdx + 1}`}
                          >
                            <img
                              src={imgUrl}
                              alt={`Miniatura ${gIdx + 1}`}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-[#082D26]/20 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center">
                              <Maximize2 size={12} className="text-white" />
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between pr-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.11em] text-[#347478] mb-2">
                        <span className="font-semibold">{activeProject.dateCity}</span>
                        {activeProject.topBadge && (
                          <>
                            <span className="text-[#E2AE25] font-bold" aria-hidden="true">·</span>
                            <span className="text-[#082D26] font-medium">{activeProject.topBadge.text}</span>
                          </>
                        )}
                      </div>

                      <h2 className="font-['Playfair_Display',Georgia,serif] text-2xl sm:text-3xl font-semibold text-[#082D26] mb-1">
                        {activeProject.title}
                      </h2>
                      {activeProject.subtitle && (
                        <p className="text-sm sm:text-base font-medium text-[#347478] mb-4">
                          {activeProject.subtitle}
                        </p>
                      )}

                      <div className="text-[#28312E]/90 text-sm sm:text-[0.94rem] leading-relaxed space-y-3 mb-6">
                        {activeProject.shortDesc.map((p, pIdx) => (
                          <p key={pIdx}>{p}</p>
                        ))}
                      </div>
                    </div>

                    <div className="pt-1 flex flex-wrap gap-3">
                      {activeProject.hasVideo && (
                        <button
                          type="button"
                          onClick={() => handleOpenVideo(activeProject)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[9px] text-xs sm:text-sm font-medium text-[#082D26] bg-[#F7F8F5] hover:bg-[#EFF2ED] border border-[#082D26]/18 transition-colors cursor-pointer"
                        >
                          <Play size={14} className="text-[#E2AE25] fill-[#E2AE25]" />
                          <span>Ver vídeo resumen</span>
                        </button>
                      )}

                      {activeProject.hasGalleryAction && (
                        <button
                          type="button"
                          onClick={() => handleOpenGallery(activeProject, 0)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[9px] text-xs sm:text-sm font-medium text-[#082D26] bg-[#F7F8F5] hover:bg-[#EFF2ED] border border-[#082D26]/18 transition-colors cursor-pointer"
                        >
                          <ImageIcon size={14} className="text-[#E2AE25]" />
                          <span>Ver galería completa</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Ficha Técnica */}
                <div className="bg-[#F7F8F5] rounded-[12px] p-5 sm:p-6 border border-[#347478]/20">
                  <div className="flex items-center gap-2 mb-4">
                    <Layers size={16} className="text-[#347478]" />
                    <h3 className="font-['Poppins',sans-serif] text-xs font-semibold text-[#082D26] uppercase tracking-[0.12em]">
                      Ficha técnica
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-xs sm:text-sm">
                    <div className="space-y-1">
                      <p className="text-[11px] font-medium text-[#28312E]/60 uppercase tracking-wider">Fecha</p>
                      <p className="font-medium text-[#082D26]">{activeProject.specs.date}</p>
                    </div>

                    {activeProject.specs.duration && (
                      <div className="space-y-1">
                        <p className="text-[11px] font-medium text-[#28312E]/60 uppercase tracking-wider">Duración</p>
                        <p className="font-medium text-[#082D26]">{activeProject.specs.duration}</p>
                      </div>
                    )}

                    <div className="space-y-1">
                      <p className="text-[11px] font-medium text-[#28312E]/60 uppercase tracking-wider">Ciudad</p>
                      <p className="font-medium text-[#082D26]">{activeProject.specs.city}</p>
                    </div>

                    {activeProject.specs.venue && (
                      <div className="space-y-1 sm:col-span-2 md:col-span-2">
                        <p className="text-[11px] font-medium text-[#28312E]/60 uppercase tracking-wider">Espacio</p>
                        <p className="font-medium text-[#082D26]">{activeProject.specs.venue}</p>
                      </div>
                    )}

                    {activeProject.specs.venues && (
                      <div className="space-y-1 col-span-2 sm:col-span-3 md:col-span-4">
                        <p className="text-[11px] font-medium text-[#28312E]/60 uppercase tracking-wider">Sedes</p>
                        <div className="space-y-1 font-medium text-[#082D26]">
                          {activeProject.specs.venues.map((v, vIdx) => (
                            <p key={vIdx}>
                              <span className="text-[#28312E]/70 font-normal">{v.label}:</span> {v.name}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="space-y-1 sm:col-span-2">
                      <p className="text-[11px] font-medium text-[#28312E]/60 uppercase tracking-wider">Formato</p>
                      <p className="font-medium text-[#082D26]">{activeProject.specs.format}</p>
                    </div>

                    {activeProject.specs.attendees && (
                      <div className="space-y-1 sm:col-span-1">
                        <p className="text-[11px] font-medium text-[#28312E]/60 uppercase tracking-wider">Asistentes</p>
                        <p className="font-medium text-[#082D26]">{activeProject.specs.attendees}</p>
                      </div>
                    )}

                    <div className="space-y-1 sm:col-span-2 md:col-span-2">
                      <p className="text-[11px] font-medium text-[#28312E]/60 uppercase tracking-wider">Entidad organizadora</p>
                      <p className="font-medium text-[#082D26]">{activeProject.specs.organizer}</p>
                    </div>

                    <div className="space-y-1 col-span-2 sm:col-span-3 md:col-span-4 pt-3 border-t border-[#347478]/20">
                      <p className="text-[11px] font-medium text-[#28312E]/60 uppercase tracking-wider">Tipo de participación</p>
                      <p className="font-medium text-[#347478] text-xs sm:text-[0.94rem]">{activeProject.specs.participationType}</p>
                    </div>
                  </div>
                </div>

                {/* Operational Areas Accordion */}
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <FileText size={16} className="text-[#347478]" />
                    <h3 className="font-['Playfair_Display',Georgia,serif] text-xl sm:text-2xl font-semibold text-[#082D26]">
                      {activeProject.myParticipation.sectionTitle || 'Mi participación'}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#28312E]/85 mb-5 leading-relaxed">
                    {activeProject.myParticipation.intro}
                  </p>

                  <div className="space-y-2.5">
                    {activeProject.myParticipation.areas.map((area, aIdx) => {
                      const isOpen = openAreaIndex === aIdx;
                      return (
                        <div
                          key={aIdx}
                          className={`rounded-[10px] border transition-colors ${
                            isOpen
                              ? 'bg-white border-[#347478]'
                              : 'bg-white border-[#082D26]/12 hover:border-[#347478]/45'
                          }`}
                        >
                          <button
                            type="button"
                            onClick={() => setOpenAreaIndex(isOpen ? null : aIdx)}
                            className="w-full p-4 flex items-center justify-between text-left gap-4 cursor-pointer"
                          >
                            <div className="flex items-start gap-3">
                              <div className={`w-7 h-7 rounded-[7px] flex items-center justify-center shrink-0 transition-colors ${
                                isOpen ? 'bg-[#347478] text-[#F7F8F5]' : 'bg-[#F7F8F5] text-[#347478]'
                              }`}>
                                <CheckCircle2 size={15} />
                              </div>
                              <div>
                                <h4 className="font-['Poppins',sans-serif] text-sm sm:text-base font-semibold text-[#082D26]">
                                  {area.title}
                                </h4>
                                <p className="text-xs text-[#28312E]/70 mt-0.5 line-clamp-1">
                                  {area.desc}
                                </p>
                              </div>
                            </div>

                            <ChevronDown
                              size={18}
                              className={`text-[#082D26] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#347478]' : ''}`}
                            />
                          </button>

                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="px-4 pb-4 pt-1 border-t border-[#082D26]/10">
                                  <ul className="space-y-2 pt-3">
                                    {area.tasks.map((task, tIdx) => (
                                      <li key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-[0.88rem] text-[#28312E]/85 leading-relaxed">
                                        <span className="text-[#E2AE25] font-semibold shrink-0 mt-0.5" aria-hidden="true">—</span>
                                        <span>{task}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Project Gallery Strip */}
                {activeProject.galleryImgs && activeProject.galleryImgs.length > 0 && (
                  <div>
                    <div className="flex justify-between items-center mb-3.5">
                      <h3 className="font-['Poppins',sans-serif] text-xs font-semibold text-[#082D26] uppercase tracking-[0.12em]">
                        Galería del evento
                      </h3>
                      {activeProject.galleryImgs.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleOpenGallery(activeProject, 0)}
                          className="text-xs font-medium text-[#082D26] hover:text-[#347478] transition-colors flex items-center gap-1.5 cursor-pointer"
                        >
                          <ImageIcon size={14} className="text-[#E2AE25]" />
                          <span>Ver en pantalla completa</span>
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {activeProject.galleryImgs.map((imgUrl, gIdx) => (
                        <button
                          type="button"
                          key={gIdx}
                          onClick={() => handleOpenGallery(activeProject, gIdx)}
                          className="aspect-[4/3] rounded-[8px] overflow-hidden bg-[#F7F8F5] border border-[#082D26]/12 cursor-pointer group/gal relative"
                        >
                          <img
                            src={imgUrl}
                            alt={`Foto ${gIdx + 1} - ${activeProject.title}`}
                            className="w-full h-full object-cover group-hover/gal:scale-[1.03] transition-transform duration-300"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-[#082D26]/25 opacity-0 group-hover/gal:opacity-100 transition-opacity flex items-center justify-center">
                            <Maximize2 size={16} className="text-white" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Modal Footer Actions */}
                <div className="pt-5 border-t border-[#082D26]/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                  {activeProject.hasVideo && (
                    <button
                      type="button"
                      onClick={() => handleOpenVideo(activeProject)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[9px] text-xs sm:text-sm font-medium text-[#F7F8F5] bg-[#347478] hover:bg-[#295E62] transition-colors cursor-pointer"
                    >
                      <Play size={14} className="text-[#E2AE25] fill-[#E2AE25]" />
                      <span>Ver vídeo resumen</span>
                    </button>
                  )}

                  {activeProject.hasGalleryAction && (
                    <button
                      type="button"
                      onClick={() => handleOpenGallery(activeProject, 0)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[9px] text-xs sm:text-sm font-medium text-[#F7F8F5] bg-[#347478] hover:bg-[#295E62] transition-colors cursor-pointer"
                    >
                      <ImageIcon size={14} className="text-[#E2AE25]" />
                      <span>Ver galería completa</span>
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => setActiveProject(null)}
                    className="text-xs sm:text-sm font-medium text-[#082D26] hover:text-[#347478] transition-colors sm:ml-auto cursor-pointer"
                  >
                    ← Volver a todos los eventos
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Single Image Zoom Modal */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setZoomedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[88vh] overflow-hidden rounded-[8px] bg-black border border-white/15">
              <button
                type="button"
                onClick={() => setZoomedImage(null)}
                aria-label="Cerrar imagen"
                className="absolute top-3 right-3 z-10 w-9 h-9 bg-black/60 hover:bg-black/80 text-white rounded-[8px] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
              <img
                src={zoomedImage}
                alt="Vista ampliada"
                className="max-h-[85vh] w-auto object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
