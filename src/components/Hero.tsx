import React from 'react';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  CloudLightning,
  Activity,
  Award,
  Zap,
  Image as ImageIcon,
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onOpenImageManager: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenResume,
  onOpenImageManager,
  onContactClick,
}) => {
  return (
    <section className="flex flex-col items-start gap-6 pt-10 md:pt-14 pb-8 relative">
      {/* Opportunity Pill Status */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1b1b] border border-[#494454]/40 text-[#cbc3d7] font-mono text-[11px] shadow-sm hover:border-[#d0bcff]/40 transition-colors">
        <span className="text-[#d0bcff] text-xs">✨</span>
        <span>Aberto para oportunidades globais & freelas</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#d0bcff] animate-ping ml-0.5"></span>
      </div>

      {/* Main Headline with Crisp Tracking & Gradient */}
      <h1 className="text-[36px] sm:text-[44px] md:text-[54px] font-semibold text-[#e5e2e1] tracking-[-0.035em] leading-[1.12] max-w-4xl">
        Construindo experiências digitais de{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d0bcff] via-[#cebdff] to-[#c0c1ff]">
          alta performance
        </span>{' '}
        e escala.
      </h1>

      {/* Subtitle Description */}
      <p className="text-[15px] sm:text-[16px] text-[#cbc3d7] leading-[26px] max-w-2xl">
        Full Stack Developer especializado no ecossistema TypeScript, React, Next.js e
        arquiteturas de nuvem distribuídas. Transformando regras de negócio complexas em
        produtos rápidos e intuitivos.
      </p>

      {/* Primary Action Buttons & Socials */}
      <div className="flex flex-wrap items-center gap-3 pt-1 w-full sm:w-auto">
        {/* Contato Principal */}
        <button
          onClick={onContactClick}
          className="h-9 px-4 rounded-lg bg-[#d0bcff] text-[#3c0091] text-[13px] font-medium flex items-center justify-center gap-2 hover:bg-[#d0bcff]/90 transition-all duration-200 active:scale-95 shadow-[0_0_24px_rgba(208,188,255,0.25)] cursor-pointer"
        >
          <span>Entrar em Contato</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        {/* Baixar Currículo */}
        <button
          onClick={onOpenResume}
          className="h-9 px-4 rounded-lg bg-[#1c1b1b] border border-[#494454]/50 text-[#e5e2e1] text-[13px] flex items-center justify-center gap-2 hover:border-[#958ea0] hover:bg-[#201f1f] transition-all duration-200 active:scale-95 cursor-pointer"
        >
          <Download className="w-4 h-4 text-[#cbc3d7]" />
          <span>Baixar Currículo</span>
        </button>

        {/* Ver Telas & Imagens Diretas */}
        <button
          onClick={onOpenImageManager}
          className="h-9 px-3.5 rounded-lg bg-[#201f1f] border border-[#a078ff]/30 text-[#d0bcff] text-[13px] flex items-center justify-center gap-2 hover:border-[#d0bcff] hover:bg-[#a078ff]/10 transition-all duration-200 active:scale-95 cursor-pointer"
          title="Ver telas com links diretos para imagens"
        >
          <ImageIcon className="w-4 h-4" />
          <span>Telas & Links HTML</span>
        </button>

        {/* Social Icons Cluster */}
        <div className="flex items-center gap-2 pl-0 sm:pl-3 border-l-0 sm:border-l border-[#494454]/40">
          <a
            className="w-9 h-9 rounded-lg border border-[#494454]/30 flex items-center justify-center text-[#cbc3d7] hover:text-[#d0bcff] hover:border-[#d0bcff]/40 transition-colors"
            href="https://github.com"
            rel="noopener noreferrer"
            target="_blank"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            className="w-9 h-9 rounded-lg border border-[#494454]/30 flex items-center justify-center text-[#cbc3d7] hover:text-[#d0bcff] hover:border-[#d0bcff]/40 transition-colors"
            href="https://linkedin.com"
            rel="noopener noreferrer"
            target="_blank"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Performance Mockup Panel / Hardware Metrics */}
      <div className="w-full mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
        {/* Metric 1 */}
        <div className="card-rim p-4 rounded-xl flex flex-col justify-between">
          <div className="flex items-center justify-between text-[#cbc3d7] font-mono text-[11px] mb-2">
            <span>LIGHTHOUSE</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          </div>
          <div className="text-[28px] sm:text-[32px] font-semibold text-[#e5e2e1] tracking-tight">
            100<span className="text-[#d0bcff] text-sm font-normal">/100</span>
          </div>
          <span className="text-[13px] text-[#cbc3d7] mt-1">Core Web Vitals perfeitas</span>
        </div>

        {/* Metric 2 */}
        <div className="card-rim p-4 rounded-xl flex flex-col justify-between">
          <div className="flex items-center justify-between text-[#cbc3d7] font-mono text-[11px] mb-2">
            <span>SLA UPTIME</span>
            <CloudLightning className="w-4 h-4 text-[#d0bcff]" />
          </div>
          <div className="text-[28px] sm:text-[32px] font-semibold text-[#e5e2e1] tracking-tight">
            99.98%
          </div>
          <span className="text-[13px] text-[#cbc3d7] mt-1">Resiliência em nuvem</span>
        </div>

        {/* Metric 3 */}
        <div className="card-rim p-4 rounded-xl flex flex-col justify-between">
          <div className="flex items-center justify-between text-[#cbc3d7] font-mono text-[11px] mb-2">
            <span>EDGE LATENCY</span>
            <Zap className="w-4 h-4 text-[#cebdff]" />
          </div>
          <div className="text-[28px] sm:text-[32px] font-semibold text-[#e5e2e1] tracking-tight">
            &lt;45ms
          </div>
          <span className="text-[13px] text-[#cbc3d7] mt-1">Global cache routing</span>
        </div>

        {/* Metric 4 */}
        <div className="card-rim p-4 rounded-xl flex flex-col justify-between">
          <div className="flex items-center justify-between text-[#cbc3d7] font-mono text-[11px] mb-2">
            <span>EXPERIÊNCIA</span>
            <Award className="w-4 h-4 text-[#c0c1ff]" />
          </div>
          <div className="text-[28px] sm:text-[32px] font-semibold text-[#e5e2e1] tracking-tight">
            6+ Anos
          </div>
          <span className="text-[13px] text-[#cbc3d7] mt-1">Engenharia end-to-end</span>
        </div>
      </div>
    </section>
  );
};
