import React, { useState } from 'react';
import {
  Code,
  ExternalLink,
  Copy,
  Check,
  Maximize2,
  Image as ImageIcon,
  Sparkles,
  Link,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { Project, ProjectScreen } from '../types/portfolio';

interface ProjectCardProps {
  project: Project;
  onOpenLightbox: (screen: ProjectScreen, projectTitle: string) => void;
  onAddDirectImage: (projectId: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenLightbox,
  onAddDirectImage,
}) => {
  const [viewMode, setViewMode] = useState<'code' | 'screen'>('code');
  const [selectedScreenIndex, setSelectedScreenIndex] = useState(0);
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedHtmlTag, setCopiedHtmlTag] = useState(false);

  const currentScreen = project.screens[selectedScreenIndex] || project.screens[0];

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(project.codeSnippet.rawCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleCopyDirectLink = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(currentScreen.directImageUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleCopyHtmlTag = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const tag = `<img src="${currentScreen.directImageUrl}" alt="${currentScreen.title}" loading="lazy" class="w-full h-auto rounded-lg" />`;
    try {
      await navigator.clipboard.writeText(tag);
      setCopiedHtmlTag(true);
      setTimeout(() => setCopiedHtmlTag(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <article className="card-rim rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-[#494454]/30 shadow-lg transition-all duration-300">
      {/* Left Content (7 cols on lg, 60% ratio) */}
      <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between gap-6">
        <div className="flex flex-col gap-3">
          {/* Category Kicker */}
          <div className="flex items-center gap-2 text-[#d0bcff] font-mono text-[11px] tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d0bcff]"></span>
            <span>{project.category}</span>
          </div>

          {/* Project Title */}
          <h3 className="text-[20px] sm:text-[24px] font-medium text-[#e5e2e1] leading-snug">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-[14px] text-[#cbc3d7] leading-[22px]">
            {project.description}
          </p>
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.techBadges.map((badge, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md bg-[#1c1b1b] border border-[#494454]/30 text-[#e5e2e1] font-mono text-[11px]"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {/* Toggle Code Button */}
          <button
            onClick={() => setViewMode('code')}
            className={`h-9 px-3.5 rounded-lg border text-[13px] flex items-center gap-2 transition-colors cursor-pointer ${
              viewMode === 'code'
                ? 'bg-[#2a2a2a] border-[#d0bcff]/60 text-[#d0bcff]'
                : 'bg-[#201f1f] border-[#494454]/40 text-[#e5e2e1] hover:border-[#d0bcff]/50'
            }`}
          >
            <Code className="w-4 h-4" />
            <span>Ver Código</span>
          </button>

          {/* Toggle Screens Button */}
          <button
            onClick={() => setViewMode('screen')}
            className={`h-9 px-3.5 rounded-lg border text-[13px] flex items-center gap-2 transition-colors cursor-pointer ${
              viewMode === 'screen'
                ? 'bg-[#a078ff]/20 border-[#a078ff] text-[#d0bcff]'
                : 'bg-[#a078ff]/10 border-[#a078ff]/30 text-[#d0bcff] hover:bg-[#a078ff]/20'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>Telas do App ({project.screens.length})</span>
          </button>

          {/* Visitar Site / Demo */}
          <a
            className="h-9 px-3.5 rounded-lg bg-transparent border border-[#494454]/40 text-[#cbc3d7] text-[13px] flex items-center gap-1.5 hover:text-white hover:border-[#958ea0] transition-colors"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Visitar Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Right Column: Code Mockup or Screen Viewer (5 cols on lg, 40% ratio) */}
      <div className="lg:col-span-5 bg-[#0e0e0e] flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#494454]/30 font-mono text-[12px] text-[#cbc3d7] relative overflow-hidden">
        {/* Top Window Bar with Switcher */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#151515] border-b border-[#494454]/30 select-none">
          {/* Window dots */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/70"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]/70"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/70"></span>
            <span className="text-[11px] text-[#958ea0] pl-2 truncate max-w-[150px]">
              {viewMode === 'code' ? project.codeSnippet.filename : currentScreen.title}
            </span>
          </div>

          {/* Quick tab toggle inside window header */}
          <div className="flex items-center gap-1 bg-[#201f1f] p-0.5 rounded border border-[#494454]/40">
            <button
              onClick={() => setViewMode('code')}
              className={`px-2 py-0.5 text-[10px] rounded cursor-pointer transition-colors ${
                viewMode === 'code'
                  ? 'bg-[#353534] text-[#d0bcff] font-medium'
                  : 'text-[#958ea0] hover:text-white'
              }`}
              title="Visualizar snippet de código"
            >
              Código
            </button>
            <button
              onClick={() => setViewMode('screen')}
              className={`px-2 py-0.5 text-[10px] rounded cursor-pointer transition-colors ${
                viewMode === 'screen'
                  ? 'bg-[#a078ff]/30 text-[#d0bcff] font-medium'
                  : 'text-[#958ea0] hover:text-white'
              }`}
              title="Visualizar tela e link direto de imagem"
            >
              Telas & Links
            </button>
          </div>
        </div>

        {/* View Mode: CODE */}
        {viewMode === 'code' && (
          <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between overflow-x-auto relative">
            <pre className="leading-relaxed font-mono text-[12px] select-text">
              {project.codeSnippet.lines.map((line) => (
                <div key={line.num} className="table-row">
                  <span className="table-cell pr-4 text-[#958ea0] select-none text-right">
                    {line.num}
                  </span>
                  <span className="table-cell whitespace-pre">
                    {line.tokens.map((token, i) => (
                      <span key={i} className={token.colorClass}>
                        {token.text}
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </pre>

            {/* Bottom code bar with copy */}
            <div className="pt-4 mt-4 border-t border-[#494454]/20 flex items-center justify-between text-[11px]">
              <span className="text-[#958ea0]">TypeScript • Worker Node</span>
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1c1b1b] border border-[#494454]/40 text-[#cbc3d7] hover:text-[#d0bcff] hover:border-[#d0bcff]/40 transition-colors cursor-pointer"
                title="Copiar snippet de código"
              >
                {copiedCode ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar Código</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* View Mode: SCREEN & DIRECT IMAGE LINKS */}
        {viewMode === 'screen' && (
          <div className="p-4 flex-1 flex flex-col justify-between gap-3 bg-[#0d0d10]">
            {/* Screen container with direct image render */}
            <div
              onClick={() => onOpenLightbox(currentScreen, project.title)}
              className="relative group cursor-pointer rounded-lg overflow-hidden border border-[#494454]/50 bg-[#16161f] shadow-inner"
            >
              {/* Responsive Image with direct link */}
              <img
                src={currentScreen.directImageUrl}
                alt={currentScreen.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-video object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />

              {/* Hover overlay with actions */}
              <div className="absolute inset-0 bg-[#0e0e0e]/75 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-4 text-center">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-full bg-[#d0bcff] text-[#3c0091]">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                  <span className="text-xs text-[#e5e2e1] font-medium font-sans">
                    Clique para tela cheia
                  </span>
                </div>
                <p className="text-[11px] text-[#cbc3d7] max-w-xs font-sans">
                  {currentScreen.description}
                </p>
              </div>
            </div>

            {/* Direct Image Links Toolbar */}
            <div className="flex flex-col gap-2 pt-1">
              {/* Direct Link Information */}
              <div className="flex items-center justify-between text-[11px] text-[#958ea0] bg-[#161616] px-2.5 py-1.5 rounded border border-[#494454]/30">
                <span className="truncate max-w-[200px] text-[#cbc3d7]">
                  🔗 Link Direto da Imagem
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleCopyDirectLink}
                    className="px-2 py-0.5 rounded bg-[#201f1f] text-[#d0bcff] hover:bg-[#353534] border border-[#494454]/40 flex items-center gap-1 cursor-pointer"
                    title="Copiar URL direta da imagem"
                  >
                    {copiedLink ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedLink ? 'Copiado!' : 'URL'}</span>
                  </button>
                  <button
                    onClick={handleCopyHtmlTag}
                    className="px-2 py-0.5 rounded bg-[#201f1f] text-[#c0c1ff] hover:bg-[#353534] border border-[#494454]/40 flex items-center gap-1 cursor-pointer"
                    title="Copiar snippet HTML <img> completo"
                  >
                    {copiedHtmlTag ? <Check className="w-3 h-3 text-emerald-400" /> : <Code className="w-3 h-3" />}
                    <span>{copiedHtmlTag ? 'Tag Copiada!' : 'Tag HTML'}</span>
                  </button>
                </div>
              </div>

              {/* Screens Selector & Add Image button */}
              <div className="flex items-center justify-between gap-2 pt-1 border-t border-[#494454]/20">
                <div className="flex items-center gap-1.5">
                  {project.screens.map((screen, idx) => (
                    <button
                      key={screen.id}
                      onClick={() => setSelectedScreenIndex(idx)}
                      className={`px-2 py-1 rounded text-[11px] cursor-pointer transition-colors ${
                        selectedScreenIndex === idx
                          ? 'bg-[#d0bcff] text-[#3c0091] font-semibold'
                          : 'bg-[#1c1b1b] text-[#cbc3d7] hover:text-white border border-[#494454]/40'
                      }`}
                    >
                      Tela {idx + 1}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => onAddDirectImage(project.id)}
                  className="text-[11px] text-[#d0bcff] hover:underline flex items-center gap-1 cursor-pointer"
                  title="Adicionar outro link direto para este projeto"
                >
                  <span>+ Adicionar Link</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};
