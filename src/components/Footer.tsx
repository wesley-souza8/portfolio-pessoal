import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0e0e0e] border-t border-[#494454]/20 mt-12">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left text-xs">
          <div className="flex items-center gap-1.5 font-mono text-[#e5e2e1] font-semibold">
            <Terminal className="w-3.5 h-3.5 text-[#d0bcff]" />
            <span>dev.io</span>
          </div>
          <span className="hidden sm:inline text-[#494454]">|</span>
          <span className="text-[#cbc3d7]">
            © 2024 Senior Full Stack Developer. Todos os direitos reservados.
          </span>
        </div>

        {/* Footer Quick Links */}
        <div className="flex items-center gap-5 text-xs text-[#cbc3d7]">
          <button
            onClick={() => scrollTo('projetos')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Projetos
          </button>
          <button
            onClick={() => scrollTo('sobre')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollTo('skills')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Skills
          </button>
          <button
            onClick={() => scrollTo('contato')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Contato
          </button>
          <button
            onClick={scrollToTop}
            className="text-[#d0bcff] hover:text-white transition-colors flex items-center gap-1 font-medium cursor-pointer"
          >
            <span>Topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
