import React, { useState } from 'react';
import { Terminal, Github, ExternalLink, Menu, X, Image as ImageIcon } from 'lucide-react';

interface NavbarProps {
  onOpenImageManager: () => void;
  onOpenContact: () => void;
  imageCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenImageManager,
  onOpenContact,
  imageCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#131313]/85 backdrop-blur-md border-b border-[#494454]/30 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 flex items-center justify-between h-16">
        {/* Brand Logo / Monogram */}
        <a
          href="#"
          className="flex items-center gap-2 font-mono text-[13px] font-semibold text-[#e5e2e1] group"
        >
          <span className="w-8 h-8 rounded-lg bg-[#201f1f] border border-[#494454]/50 flex items-center justify-center text-[#d0bcff] group-hover:border-[#d0bcff] transition-colors duration-150">
            <Terminal className="w-4 h-4" />
          </span>
          <span className="tracking-tight text-[#e5e2e1] text-sm">dev.io</span>

          {/* Live status pulse */}
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#2a2a2a] border border-[#494454]/40 ml-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-mono text-[11px] text-[#cbc3d7] font-medium">Disponível</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollTo('projetos')}
            className="text-[#d0bcff] font-medium text-[13px] hover:text-[#d0bcff] transition-colors duration-150 cursor-pointer"
          >
            Projetos
          </button>
          <button
            onClick={() => scrollTo('sobre')}
            className="text-[#cbc3d7] font-normal text-[13px] hover:text-[#d0bcff] transition-colors duration-150 cursor-pointer"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollTo('skills')}
            className="text-[#cbc3d7] font-normal text-[13px] hover:text-[#d0bcff] transition-colors duration-150 cursor-pointer"
          >
            Skills
          </button>
          <button
            onClick={onOpenImageManager}
            className="text-[#cbc3d7] font-normal text-[13px] hover:text-[#d0bcff] transition-colors duration-150 flex items-center gap-1.5 cursor-pointer"
            title="Adicionar ou inspecionar links diretos de imagens no HTML"
          >
            <ImageIcon className="w-3.5 h-3.5 text-[#d0bcff]" />
            <span>Telas & Imagens</span>
            <span className="px-1.5 py-0.2 rounded-full bg-[#a078ff]/20 text-[#d0bcff] text-[10px] font-mono border border-[#a078ff]/30">
              {imageCount}
            </span>
          </button>
          <button
            onClick={() => scrollTo('contato')}
            className="text-[#cbc3d7] font-normal text-[13px] hover:text-[#d0bcff] transition-colors duration-150 cursor-pointer"
          >
            Contato
          </button>
        </nav>

        {/* Trailing Actions Cluster */}
        <div className="flex items-center gap-2">
          {/* Direct Images Trigger Button */}
          <button
            onClick={onOpenImageManager}
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#1c1b1b] border border-[#a078ff]/40 text-[#d0bcff] hover:bg-[#a078ff]/10 text-xs font-mono transition-all duration-150 active:scale-95"
            title="Gerenciar e adicionar links diretos de imagens"
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Links Diretos</span>
          </button>

          {/* Terminal / Git Quick Action */}
          <a
            aria-label="GitHub Profile"
            className="w-9 h-9 rounded-lg bg-[#1c1b1b] border border-[#494454]/40 flex items-center justify-center text-[#cbc3d7] hover:text-[#e5e2e1] hover:border-[#958ea0] transition-all duration-150 active:scale-95"
            href="https://github.com"
            rel="noopener noreferrer"
            target="_blank"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* Trailing Primary Action CTA */}
          <button
            onClick={() => scrollTo('contato')}
            className="px-3.5 py-1.5 rounded-lg bg-[#201f1f] border border-[#494454]/50 text-[#e5e2e1] hover:text-[#d0bcff] hover:border-[#d0bcff]/50 text-[13px] transition-all duration-200 active:scale-95 cursor-pointer"
          >
            Entrar em Contato
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#cbc3d7] hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#151515] border-b border-[#494454]/40 px-6 py-4 flex flex-col gap-3">
          <button
            onClick={() => scrollTo('projetos')}
            className="text-left py-2 text-sm text-[#e5e2e1] hover:text-[#d0bcff]"
          >
            Projetos
          </button>
          <button
            onClick={() => scrollTo('sobre')}
            className="text-left py-2 text-sm text-[#e5e2e1] hover:text-[#d0bcff]"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollTo('skills')}
            className="text-left py-2 text-sm text-[#e5e2e1] hover:text-[#d0bcff]"
          >
            Skills
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenImageManager();
            }}
            className="text-left py-2 text-sm text-[#d0bcff] flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4" />
              Telas & Links Diretos de Imagens
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[#a078ff]/20 text-xs font-mono">
              {imageCount}
            </span>
          </button>
          <button
            onClick={() => scrollTo('contato')}
            className="text-left py-2 text-sm text-[#e5e2e1] hover:text-[#d0bcff]"
          >
            Contato
          </button>
        </div>
      )}
    </header>
  );
};
