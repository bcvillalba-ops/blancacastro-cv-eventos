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

export const Portfolio = () => {
  const [activeVideoProject, setActiveVideoProject] = useState<EventProject | null>(null);
  const [activeProject, setActiveProject] = useState<EventProject | null>(null);
  
  // Gallery viewer state (for full gallery navigation)
  const [activeGalleryProject, setActiveGalleryProject] = useState<EventProject | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState<number>(0);
  
  // Single image zoom modal
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  
  // Accordion state inside Project Details
  const [openAreaIndex, setOpenAreaIndex] = useState<number | null>(0);

  // Gallery navigation handlers
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

  // Keyboard navigation for modals (Escape, ArrowLeft, ArrowRight)
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

  // Open full project details
  const handleOpenProject = (project: EventProject) => {
    setActiveProject(project);
    setZoomedImage(null);
    setOpenAreaIndex(0);
  };

  // Open video modal
  const handleOpenVideo = (project: EventProject) => {
    if (project.hasVideo && project.videoUrl) {
      setActiveVideoProject(project);
    }
  };

  // Open gallery viewer modal
  const handleOpenGallery = (project: EventProject, initialIndex = 0) => {
    if (project.galleryImgs && project.galleryImgs.length > 0) {
      setActiveGalleryProject(project);
      setCurrentGalleryIndex(initialIndex);
    }
  };

  const categoryChips = [
    'Ferias',
    'Congresos',
    'Foros profesionales',
    'Activaciones',
    'Eventos corporativos'
  ];

  return (
    <section id="eventos" className="py-24 bg-marfil scroll-mt-20 border-b border-arena/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. Encabezado Centrado */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-oliva mb-3 tracking-tight">
            Eventos destacados
          </h2>
          <p className="text-base sm:text-lg text-carbon/80 leading-relaxed max-w-[650px] mx-auto mb-6">
            Una selección de proyectos en los que he participado, combinando planificación, coordinación y atención al detalle.
          </p>

          {/* Barra de categorías discretas con puntos amarillos */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-2 px-4 rounded-full bg-arena/30 border border-arena/70">
            {categoryChips.map((chip, idx) => (
              <React.Fragment key={chip}>
                <span className="text-xs sm:text-sm font-semibold text-oliva">
                  {chip}
                </span>
                {idx < categoryChips.length - 1 && (
                  <span className="text-dorado text-xs select-none">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 2. Cuadrícula de 9 tarjetas (3x3 en escritorio) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {EVENT_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="group bg-white rounded-[18px] overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-arena/70 hover:border-terracota/50 flex flex-col h-full relative"
            >
              {/* Contenedor de Imagen de Portada */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-arena/20">
                <img 
                  src={project.coverImg} 
                  alt={`${project.title} - ${project.subtitle || ''}`}
                  className={`w-full h-full ${project.imgPositionClass || 'object-cover'} group-hover:scale-[1.03] transition-transform duration-500 ease-out`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Etiquetas Superiores */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-start gap-2 pointer-events-none">
                  {project.topBadge ? (
                    <span className={`backdrop-blur-xs text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full shadow-xs ${project.topBadge.style || 'bg-white/95 text-oliva border border-arena'}`}>
                      {project.topBadge.text}
                    </span>
                  ) : (
                    <span className="bg-white/90 backdrop-blur-xs text-oliva text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full border border-arena shadow-xs">
                      {project.category}
                    </span>
                  )}

                  {project.attendeesConfirmed && (
                    <span className="bg-oliva/90 text-white text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded-full shadow-xs ml-auto">
                      {project.attendeesConfirmed}
                    </span>
                  )}
                </div>
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                {/* Fecha y Ciudad */}
                <p className="text-xs font-bold text-terracota uppercase tracking-wider mb-1.5">
                  {project.dateCity}
                </p>

                {/* Nombre del Evento */}
                <h3 className="text-lg font-bold text-oliva leading-snug mb-1">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-xs sm:text-sm font-medium text-carbon/75 mb-3 line-clamp-1">
                    {project.subtitle}
                  </p>
                )}

                {/* Etiquetas Inferiores */}
                <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                  {project.badges.map((badge, bIdx) => (
                    <span 
                      key={bIdx}
                      className="text-[11px] text-carbon/70 bg-arena/30 px-2 py-0.5 rounded-md font-medium"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Botones de Acción (Alineados con exactamente la misma altura) */}
                <div className="pt-3.5 border-t border-arena/60">
                  {/* Caso 1: Family Day (Ver Galería + Ver Proyecto) */}
                  {project.hasGalleryAction && (
                    <div className="grid grid-cols-2 gap-2.5 items-center">
                      <button
                        onClick={() => handleOpenGallery(project, 0)}
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-oliva bg-transparent border border-arena hover:border-dorado/90 hover:bg-arena/20 transition-colors shadow-2xs"
                        title="Ver galería de fotografías"
                      >
                        <ImageIcon size={14} className="text-dorado" />
                        <span>Ver galería</span>
                      </button>

                      <button
                        onClick={() => handleOpenProject(project)}
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-oliva hover:bg-terracota transition-colors shadow-2xs group/btn"
                      >
                        <span>Ver proyecto</span>
                        <ArrowRight size={13} className="text-dorado group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  )}

                  {/* Caso 2: Proyectos con Vídeo (Ver Vídeo + Ver Proyecto) */}
                  {project.hasVideo && !project.hasGalleryAction && (
                    <div className="grid grid-cols-2 gap-2.5 items-center">
                      <button
                        onClick={() => handleOpenVideo(project)}
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-oliva bg-transparent border border-arena hover:border-dorado/90 hover:bg-arena/20 transition-colors shadow-2xs"
                        title="Ver vídeo resumen"
                      >
                        <Play size={13} className="text-dorado fill-dorado" />
                        <span>Ver vídeo</span>
                      </button>

                      <button
                        onClick={() => handleOpenProject(project)}
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-oliva hover:bg-terracota transition-colors shadow-2xs group/btn"
                      >
                        <span>Ver proyecto</span>
                        <ArrowRight size={13} className="text-dorado group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  )}

                  {/* Caso 3: Proyectos sin vídeo ni acción secundaria (Únicamente Ver Proyecto a ancho completo) */}
                  {!project.hasVideo && !project.hasGalleryAction && (
                    <div className="w-full">
                      <button
                        onClick={() => handleOpenProject(project)}
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-oliva hover:bg-terracota transition-colors shadow-2xs group/btn"
                      >
                        <span>Ver proyecto</span>
                        <ArrowRight size={13} className="text-dorado group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Sutil línea de acento amarilla en hover */}
              <div className="h-[2px] w-full bg-dorado scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. Modal de Vídeo Independiente */}
      {/* ========================================================= */}
      <AnimatePresence>
        {activeVideoProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-oliva/85 backdrop-blur-md"
            onClick={() => setActiveVideoProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className={`relative w-full bg-black shadow-2xl overflow-hidden rounded-2xl border border-white/10 ${
                activeVideoProject.aspect === '9/16' 
                  ? 'max-w-[420px] aspect-[9/16]' 
                  : 'max-w-4xl aspect-[16/9]'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Barra superior con título y botón de cierre */}
              <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent z-20 flex justify-between items-center pointer-events-auto">
                <p className="text-white text-xs sm:text-sm font-semibold truncate pr-4">
                  {activeVideoProject.title} {activeVideoProject.subtitle ? `· ${activeVideoProject.subtitle}` : ''}
                </p>
                <button 
                  onClick={() => setActiveVideoProject(null)}
                  aria-label="Cerrar vídeo"
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors shrink-0"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Iframe con vídeo */}
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
      {/* 4. Modal Visor de Galería Completa (con Navegación & Miniaturas) */}
      {/* ========================================================= */}
      <AnimatePresence>
        {activeGalleryProject && activeGalleryProject.galleryImgs && activeGalleryProject.galleryImgs.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 bg-oliva/90 backdrop-blur-md"
            onClick={() => setActiveGalleryProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl bg-black/95 rounded-2xl overflow-hidden shadow-2xl border border-white/15 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Cabecera del Visor */}
              <div className="p-4 bg-gradient-to-b from-black/90 to-transparent flex justify-between items-center z-20">
                <div className="flex items-center gap-3">
                  <ImageIcon size={18} className="text-dorado" />
                  <div>
                    <h4 className="text-white text-sm font-bold truncate">
                      {activeGalleryProject.title} {activeGalleryProject.subtitle ? `· ${activeGalleryProject.subtitle}` : ''}
                    </h4>
                    <p className="text-white/60 text-xs">
                      Fotografía {currentGalleryIndex + 1} de {activeGalleryProject.galleryImgs.length}
                    </p>
                  </div>
                </div>

                <button 
                  onClick={() => setActiveGalleryProject(null)}
                  aria-label="Cerrar galería"
                  className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Imagen Central con Controles de Avance y Retroceso */}
              <div className="relative flex items-center justify-center min-h-[320px] max-h-[65vh] bg-black/60 p-2">
                <img 
                  src={activeGalleryProject.galleryImgs[currentGalleryIndex]} 
                  alt={`${activeGalleryProject.title} - Imagen ${currentGalleryIndex + 1}`}
                  className="max-h-[60vh] max-w-full object-contain mx-auto rounded-lg select-none"
                  referrerPolicy="no-referrer"
                />

                {/* Flecha Anterior */}
                {activeGalleryProject.galleryImgs.length > 1 && (
                  <button
                    onClick={handlePrevGalleryImage}
                    aria-label="Fotografía anterior"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-all hover:scale-105"
                  >
                    <ChevronLeft size={22} />
                  </button>
                )}

                {/* Flecha Siguiente */}
                {activeGalleryProject.galleryImgs.length > 1 && (
                  <button
                    onClick={handleNextGalleryImage}
                    aria-label="Fotografía siguiente"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-all hover:scale-105"
                  >
                    <ChevronRight size={22} />
                  </button>
                )}
              </div>

              {/* Tira de Miniaturas Discretas */}
              {activeGalleryProject.galleryImgs.length > 1 && (
                <div className="p-3 bg-black/80 border-t border-white/10 flex items-center justify-center gap-2 overflow-x-auto">
                  {activeGalleryProject.galleryImgs.map((imgUrl, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentGalleryIndex(i)}
                      className={`relative w-14 h-11 sm:w-16 sm:h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                        currentGalleryIndex === i 
                          ? 'border-dorado ring-1 ring-dorado scale-105 opacity-100' 
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
      {/* 5. Modal / Ficha Única de Proyecto (Desplazamiento Natural) */}
      {/* ========================================================= */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center p-3 sm:p-6 bg-oliva/80 backdrop-blur-md overflow-y-auto"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-arena/80 overflow-hidden my-auto max-h-[92vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón de cierre fijo en esquina superior */}
              <button 
                onClick={() => setActiveProject(null)}
                aria-label="Cerrar proyecto"
                className="absolute top-4 right-4 z-30 w-10 h-10 bg-white/90 hover:bg-white text-oliva rounded-full flex items-center justify-center shadow-md transition-all hover:scale-105 border border-arena"
              >
                <X size={20} />
              </button>

              {/* Contenedor con Scroll Natural para toda la ficha */}
              <div className="overflow-y-auto p-6 sm:p-10 space-y-10">
                
                {/* Cabecera del Proyecto (2 Columnas en Escritorio) */}
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  
                  {/* Columna Izquierda: Imagen Principal & Miniaturas */}
                  <div className="md:col-span-5 space-y-3">
                    <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden bg-arena/20 border border-arena shadow-xs group/mainImg">
                      <img 
                        src={activeProject.coverImg} 
                        alt={activeProject.title}
                        className={`w-full h-full ${activeProject.imgPositionClass || 'object-cover'}`}
                        referrerPolicy="no-referrer"
                      />
                      <button
                        onClick={() => setZoomedImage(activeProject.coverImg)}
                        className="absolute bottom-3 right-3 p-2 bg-black/60 hover:bg-black/80 text-white rounded-lg opacity-0 group-hover/mainImg:opacity-100 transition-opacity flex items-center gap-1 text-xs"
                        title="Ampliar imagen"
                      >
                        <Maximize2 size={14} />
                      </button>
                    </div>

                    {/* Miniaturas de galería si existen */}
                    {activeProject.galleryImgs && activeProject.galleryImgs.length > 1 && (
                      <div className="grid grid-cols-4 gap-2">
                        {activeProject.galleryImgs.slice(0, 4).map((imgUrl, gIdx) => (
                          <button
                            key={gIdx}
                            onClick={() => handleOpenGallery(activeProject, gIdx)}
                            className="aspect-square rounded-xl overflow-hidden border border-arena/70 hover:border-dorado/90 hover:opacity-90 transition-all bg-arena/20 relative group/thumb"
                            title={`Ver fotografía ${gIdx + 1}`}
                          >
                            <img 
                              src={imgUrl} 
                              alt={`Miniatura ${gIdx + 1}`}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-oliva/20 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center">
                              <Maximize2 size={12} className="text-white" />
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Columna Derecha: Información y Descripción */}
                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-terracota uppercase tracking-wider">
                          {activeProject.dateCity}
                        </span>
                        {activeProject.topBadge && (
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${activeProject.topBadge.style || 'bg-arena/50 text-oliva border border-arena'}`}>
                            {activeProject.topBadge.text}
                          </span>
                        )}
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-bold text-oliva mb-1">
                        {activeProject.title}
                      </h2>
                      {activeProject.subtitle && (
                        <p className="text-sm sm:text-base font-semibold text-terracota mb-4">
                          {activeProject.subtitle}
                        </p>
                      )}

                      {/* Descripción corta de máximo 2 párrafos */}
                      <div className="text-carbon/80 text-sm sm:text-[0.93rem] leading-relaxed space-y-3 mb-6">
                        {activeProject.shortDesc.map((p, pIdx) => (
                          <p key={pIdx}>{p}</p>
                        ))}
                      </div>
                    </div>

                    {/* Acciones en la cabecera de la ficha */}
                    <div className="pt-2">
                      {activeProject.hasVideo && (
                        <button
                          onClick={() => handleOpenVideo(activeProject)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-oliva bg-arena/30 hover:bg-arena/60 border border-arena transition-colors"
                        >
                          <Play size={15} className="text-dorado fill-dorado" />
                          <span>Ver vídeo resumen</span>
                        </button>
                      )}

                      {activeProject.hasGalleryAction && (
                        <button
                          onClick={() => handleOpenGallery(activeProject, 0)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-oliva bg-arena/30 hover:bg-arena/60 border border-arena transition-colors"
                        >
                          <ImageIcon size={15} className="text-dorado" />
                          <span>Ver galería completa</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Ficha Técnica */}
                <div className="bg-arena/25 rounded-2xl p-6 sm:p-7 border border-arena/60">
                  <div className="flex items-center gap-2 mb-5">
                    <Layers size={18} className="text-terracota" />
                    <h3 className="text-sm font-bold text-oliva uppercase tracking-wider">
                      Ficha técnica
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-xs sm:text-sm">
                    <div className="space-y-1">
                      <p className="text-[11px] font-semibold text-carbon/60 uppercase tracking-wider">Fecha</p>
                      <p className="font-semibold text-oliva">{activeProject.specs.date}</p>
                    </div>

                    {activeProject.specs.duration && (
                      <div className="space-y-1">
                        <p className="text-[11px] font-semibold text-carbon/60 uppercase tracking-wider">Duración</p>
                        <p className="font-semibold text-oliva">{activeProject.specs.duration}</p>
                      </div>
                    )}

                    <div className="space-y-1">
                      <p className="text-[11px] font-semibold text-carbon/60 uppercase tracking-wider">Ciudad</p>
                      <p className="font-semibold text-oliva">{activeProject.specs.city}</p>
                    </div>

                    {/* Espacio individual */}
                    {activeProject.specs.venue && (
                      <div className="space-y-1 sm:col-span-2 md:col-span-2">
                        <p className="text-[11px] font-semibold text-carbon/60 uppercase tracking-wider">Espacio</p>
                        <p className="font-semibold text-oliva">{activeProject.specs.venue}</p>
                      </div>
                    )}

                    {/* Múltiples sedes en líneas independientes (como Frozen Connect) */}
                    {activeProject.specs.venues && (
                      <div className="space-y-1 col-span-2 sm:col-span-3 md:col-span-4">
                        <p className="text-[11px] font-semibold text-carbon/60 uppercase tracking-wider">Sedes</p>
                        <div className="space-y-1 font-semibold text-oliva">
                          {activeProject.specs.venues.map((v, vIdx) => (
                            <p key={vIdx}>
                              <span className="text-carbon/70 font-medium">{v.label}:</span> {v.name}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="space-y-1 sm:col-span-2">
                      <p className="text-[11px] font-semibold text-carbon/60 uppercase tracking-wider">Formato</p>
                      <p className="font-semibold text-oliva">{activeProject.specs.format}</p>
                    </div>

                    {activeProject.specs.attendees && (
                      <div className="space-y-1 sm:col-span-1">
                        <p className="text-[11px] font-semibold text-carbon/60 uppercase tracking-wider">Asistentes</p>
                        <p className="font-semibold text-oliva">{activeProject.specs.attendees}</p>
                      </div>
                    )}

                    <div className="space-y-1 sm:col-span-2 md:col-span-2">
                      <p className="text-[11px] font-semibold text-carbon/60 uppercase tracking-wider">Entidad organizadora</p>
                      <p className="font-semibold text-oliva">{activeProject.specs.organizer}</p>
                    </div>

                    <div className="space-y-1 col-span-2 sm:col-span-3 md:col-span-4 pt-2 border-t border-arena/50">
                      <p className="text-[11px] font-semibold text-carbon/60 uppercase tracking-wider">Tipo de participación</p>
                      <p className="font-bold text-terracota text-xs sm:text-[0.93rem]">{activeProject.specs.participationType}</p>
                    </div>
                  </div>
                </div>

                {/* Mi Participación (Acordeones por áreas operativas) */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <FileText size={18} className="text-terracota" />
                    <h3 className="text-base sm:text-lg font-bold text-oliva">
                      {activeProject.myParticipation.sectionTitle || 'Mi participación'}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-carbon/75 mb-6 leading-relaxed">
                    {activeProject.myParticipation.intro}
                  </p>

                  {/* Lista de Acordeones */}
                  <div className="space-y-3">
                    {activeProject.myParticipation.areas.map((area, aIdx) => {
                      const isOpen = openAreaIndex === aIdx;
                      return (
                        <div 
                          key={aIdx}
                          className={`rounded-2xl border transition-all ${
                            isOpen 
                              ? 'bg-white border-dorado/90 shadow-xs ring-1 ring-dorado/40' 
                              : 'bg-white/80 border-arena hover:border-arena/90'
                          }`}
                        >
                          <button
                            onClick={() => setOpenAreaIndex(isOpen ? null : aIdx)}
                            className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4"
                          >
                            <div className="flex items-start gap-3.5">
                              <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                                isOpen ? 'bg-oliva text-white' : 'bg-arena/40 text-oliva'
                              }`}>
                                <CheckCircle2 size={16} />
                              </div>
                              <div>
                                <h4 className="text-sm sm:text-base font-bold text-oliva">
                                  {area.title}
                                </h4>
                                <p className="text-xs text-carbon/70 mt-0.5 line-clamp-1">
                                  {area.desc}
                                </p>
                              </div>
                            </div>

                            <ChevronDown 
                              size={18} 
                              className={`text-oliva shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-terracota' : ''}`} 
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
                                <div className="px-5 pb-5 pt-1 border-t border-arena/40">
                                  <ul className="space-y-2.5 pt-3">
                                    {area.tasks.map((task, tIdx) => (
                                      <li key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-[0.88rem] text-carbon/85 leading-relaxed">
                                        <span className="text-terracota shrink-0 mt-1 font-bold">•</span>
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

                {/* Galería de Fotografías en Ficha */}
                {activeProject.galleryImgs && activeProject.galleryImgs.length > 0 && (
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-sm font-bold text-oliva uppercase tracking-wider">
                        Galería del evento
                      </h3>
                      {activeProject.galleryImgs.length > 1 && (
                        <button
                          onClick={() => handleOpenGallery(activeProject, 0)}
                          className="text-xs font-semibold text-oliva hover:text-terracota transition-colors flex items-center gap-1"
                        >
                          <ImageIcon size={14} className="text-dorado" />
                          <span>Ver en pantalla completa</span>
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {activeProject.galleryImgs.map((imgUrl, gIdx) => (
                        <div
                          key={gIdx}
                          onClick={() => handleOpenGallery(activeProject, gIdx)}
                          className="aspect-[4/3] rounded-xl overflow-hidden bg-arena/20 border border-arena/70 cursor-pointer group/gal relative"
                        >
                          <img 
                            src={imgUrl} 
                            alt={`Foto ${gIdx + 1} - ${activeProject.title}`}
                            className="w-full h-full object-cover group-hover/gal:scale-105 transition-transform duration-300"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-oliva/30 opacity-0 group-hover/gal:opacity-100 transition-opacity flex items-center justify-center">
                            <Maximize2 size={16} className="text-white" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Cierre de la Ficha */}
                <div className="pt-8 border-t border-arena/60 flex flex-col sm:flex-row justify-between items-center gap-4">
                  {activeProject.hasVideo && (
                    <button
                      onClick={() => handleOpenVideo(activeProject)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-oliva hover:bg-terracota transition-colors shadow-sm"
                    >
                      <Play size={14} className="text-dorado fill-dorado" />
                      <span>Ver vídeo resumen</span>
                    </button>
                  )}

                  {activeProject.hasGalleryAction && (
                    <button
                      onClick={() => handleOpenGallery(activeProject, 0)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-oliva hover:bg-terracota transition-colors shadow-sm"
                    >
                      <ImageIcon size={14} className="text-dorado" />
                      <span>Ver galería completa</span>
                    </button>
                  )}

                  <button
                    onClick={() => setActiveProject(null)}
                    className="text-xs sm:text-sm font-bold text-oliva hover:text-terracota transition-colors sm:ml-auto"
                  >
                    ← Volver a todos los eventos
                  </button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal para ampliar una sola imagen */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setZoomedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[88vh] overflow-hidden rounded-2xl bg-black border border-white/20">
              <button 
                onClick={() => setZoomedImage(null)}
                aria-label="Cerrar imagen"
                className="absolute top-4 right-4 z-10 w-9 h-9 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
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
