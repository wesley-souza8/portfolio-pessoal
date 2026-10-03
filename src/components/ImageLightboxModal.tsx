import React, { useState } from 'react';
import { X, Copy, Check, Code, ExternalLink, Download } from 'lucide-react';
import { ProjectScreen } from '../types/portfolio';

interface ImageLightboxModalProps {
  screen: ProjectScreen | null;
  projectTitle: string;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  screen,
  projectTitle,
  onClose,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedTag, setCopiedTag] = useState(false);

  if (!screen) return null;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(screen.directImageUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleCopyTag = async () => {
    const tag = `<img src="${screen.directImageUrl}" alt="${screen.title}" loading="lazy" class="w-full h-auto rounded-lg" />`;
    try {
      await navigator.clipboard.writeText(tag);
      setCopiedTag(true);
      setTimeout(() => setCopiedTag(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full bg-[#141416] border border-[#494454]/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[#494454]/30 bg-[#1c1b1b]">
          <div>
            <span className="text-[11px] font-mono text-[#d0bcff] uppercase tracking-wider">
              {projectTitle}
            </span>
            <h3 className="text-sm font-semibold text-white">{screen.title}</h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="px-2.5 py-1 rounded bg-[#2a2a2a] hover:bg-[#353534] text-xs text-[#d0bcff] flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Copiar link direto da imagem"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Link Copiado!' : 'Copiar URL'}</span>
            </button>

            <button
              onClick={handleCopyTag}
              className="px-2.5 py-1 rounded bg-[#2a2a2a] hover:bg-[#353534] text-xs text-[#c0c1ff] flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Copiar tag HTML <img>"
            >
              {copiedTag ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Code className="w-3.5 h-3.5" />}
              <span>{copiedTag ? 'Tag Copiada!' : 'Tag HTML'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#cbc3d7] hover:text-white hover:bg-[#2a2a2a] transition-colors cursor-pointer ml-1"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image Display */}
        <div className="flex-1 bg-[#0b0b0e] p-4 flex items-center justify-center overflow-auto max-h-[calc(92vh-120px)]">
          <img
            src={screen.directImageUrl}
            alt={screen.title}
            className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain shadow-2xl border border-[#494454]/20"
          />
        </div>

        {/* Footer info */}
        <div className="px-5 py-3 bg-[#171717] border-t border-[#494454]/30 flex flex-wrap items-center justify-between gap-3 text-xs text-[#cbc3d7]">
          <p className="max-w-xl">{screen.description}</p>
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#958ea0]">
            <span>Proporção: {screen.aspectRatio}</span>
            <span>•</span>
            <a
              href={screen.directImageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d0bcff] hover:underline flex items-center gap-1"
            >
              <span>Abrir Original</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
