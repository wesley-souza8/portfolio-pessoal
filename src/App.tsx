import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ImageManagerModal } from './components/ImageManagerModal';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { ResumeModal } from './components/ResumeModal';
import { CalendlyModal } from './components/CalendlyModal';
import { initialProjects, skillCategories, timelineItems } from './data/portfolioData';
import { Project, ProjectScreen } from './types/portfolio';
import { Image as ImageIcon, Plus, Sparkles } from 'lucide-react';

export default function App() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [lightboxData, setLightboxData] = useState<{
    screen: ProjectScreen | null;
    projectTitle: string;
  }>({ screen: null, projectTitle: '' });
  const [isImageManagerOpen, setIsImageManagerOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [targetProjectIdForAdd, setTargetProjectIdForAdd] = useState<string | undefined>(undefined);

  const totalScreensCount = projects.reduce((acc, p) => acc + p.screens.length, 0);

  const handleOpenLightbox = (screen: ProjectScreen, projectTitle: string) => {
    setLightboxData({ screen, projectTitle });
  };

  const handleCloseLightbox = () => {
    setLightboxData({ screen: null, projectTitle: '' });
  };

  const handleAddDirectImageToProject = (projectId: string) => {
    setTargetProjectIdForAdd(projectId);
    setIsImageManagerOpen(true);
  };

  const handleAddScreen = (projectId: string, newScreen: ProjectScreen) => {
    setProjects((prev) =>
      prev.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            screens: [newScreen, ...project.screens],
          };
        }
        return project;
      })
    );
  };

  const handleRemoveScreen = (projectId: string, screenId: string) => {
    setProjects((prev) =>
      prev.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            screens: project.screens.filter((s) => s.id !== screenId),
          };
        }
        return project;
      })
    );
  };

  const scrollToContact = () => {
    const el = document.getElementById('contato');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#131313] text-[#e5e2e1] antialiased selection:bg-[#a078ff] selection:text-[#340080] min-h-screen relative overflow-x-hidden font-['Geist',sans-serif]">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 glow-radial"></div>
      <div className="fixed top-1/3 -left-64 w-[500px] h-[500px] rounded-full bg-[#3131c0]/10 blur-[130px] pointer-events-none"></div>
      <div className="fixed bottom-1/4 -right-64 w-[500px] h-[500px] rounded-full bg-[#a078ff]/10 blur-[140px] pointer-events-none"></div>

      {/* Top Navigation Bar */}
      <Navbar
        onOpenImageManager={() => {
          setTargetProjectIdForAdd(undefined);
          setIsImageManagerOpen(true);
        }}
        onOpenContact={scrollToContact}
        imageCount={totalScreensCount}
      />

      {/* Main Container */}
      <main className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-8 pt-24 pb-16 flex flex-col gap-16 md:gap-24">
        {/* 1. Hero Section */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenImageManager={() => {
            setTargetProjectIdForAdd(undefined);
            setIsImageManagerOpen(true);
          }}
          onContactClick={scrollToContact}
        />

        {/* 2. Featured Projects Section */}
        <section className="flex flex-col gap-6" id="projetos">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[11px] text-[#d0bcff] tracking-wider uppercase font-semibold">
                // PORTFÓLIO SELECIONADO
              </span>
              <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#e5e2e1] tracking-tight">
                Projetos que geraram impacto real
              </h2>
            </div>

            {/* Quick banner to manage direct image links */}
            <button
              onClick={() => {
                setTargetProjectIdForAdd(undefined);
                setIsImageManagerOpen(true);
              }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#1c1b1b] border border-[#a078ff]/40 text-xs text-[#d0bcff] hover:bg-[#a078ff]/10 hover:border-[#d0bcff] transition-all cursor-pointer w-fit"
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Gerenciar Links Diretos de Imagens</span>
              <span className="px-1.5 py-0.2 rounded-full bg-[#a078ff]/20 text-[10px] font-mono">
                {totalScreensCount} telas
              </span>
            </button>
          </div>

          {/* Bento-style Project Cards */}
          <div className="flex flex-col gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenLightbox={handleOpenLightbox}
                onAddDirectImage={handleAddDirectImageToProject}
              />
            ))}
          </div>

          {/* Interactive Direct Image Link Helper Notice */}
          <div className="p-4 rounded-xl bg-[#18181b] border border-[#494454]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#cbc3d7]">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-[#d0bcff] shrink-0" />
              <span>
                <strong>Links Diretos no HTML:</strong> Cada tela possui URL direta pronta para copiar e colar na tag <code>&lt;img src="..." /&gt;</code> do seu código.
              </span>
            </div>
            <button
              onClick={() => {
                setTargetProjectIdForAdd(undefined);
                setIsImageManagerOpen(true);
              }}
              className="px-3 py-1.5 rounded-md bg-[#252528] text-white hover:bg-[#323238] border border-[#494454]/40 whitespace-nowrap cursor-pointer text-xs font-mono"
            >
              Ver Todas as URLs Diretas →
            </button>
          </div>
        </section>

        {/* 3. Trajetória & Background */}
        <AboutSection timeline={timelineItems} />

        {/* 4. Habilidades Técnicas */}
        <SkillsSection categories={skillCategories} />

        {/* 5. Contato & Disponibilidade */}
        <ContactSection onOpenCalendly={() => setIsCalendlyOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ImageManagerModal
        isOpen={isImageManagerOpen}
        onClose={() => setIsImageManagerOpen(false)}
        projects={projects}
        onAddScreen={handleAddScreen}
        onRemoveScreen={handleRemoveScreen}
        onSelectForLightbox={(screen, projTitle) => {
          handleOpenLightbox(screen, projTitle);
        }}
        preselectedProjectId={targetProjectIdForAdd}
      />

      <ImageLightboxModal
        screen={lightboxData.screen}
        projectTitle={lightboxData.projectTitle}
        onClose={handleCloseLightbox}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
      />
    </div>
  );
}
