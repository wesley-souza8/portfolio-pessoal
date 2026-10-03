import React, { useState } from 'react';
import {
  X,
  Plus,
  Image as ImageIcon,
  Copy,
  Check,
  ExternalLink,
  Code,
  Trash2,
  AlertCircle,
  Sparkles,
  Link as LinkIcon,
} from 'lucide-react';
import { Project, ProjectScreen } from '../types/portfolio';

interface ImageManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  onAddScreen: (projectId: string, screen: ProjectScreen) => void;
  onRemoveScreen: (projectId: string, screenId: string) => void;
  onSelectForLightbox: (screen: ProjectScreen, projectTitle: string) => void;
  preselectedProjectId?: string;
}

export const ImageManagerModal: React.FC<ImageManagerModalProps> = ({
  isOpen,
  onClose,
  projects,
  onAddScreen,
  onRemoveScreen,
  onSelectForLightbox,
  preselectedProjectId,
}) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(
    preselectedProjectId || projects[0]?.id || ''
  );
  const [newTitle, setNewTitle] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [previewError, setPreviewError] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedTagId, setCopiedTagId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'gallery' | 'add' | 'exportHtml'>('gallery');

  if (!isOpen) return null;

  const currentProject = projects.find((p) => p.id === selectedProjectId) || projects[0];

  const handleAddNew = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUrl.trim() || !newTitle.trim()) return;

    const newScreen: ProjectScreen = {
      id: `custom-screen-${Date.now()}`,
      title: newTitle.trim(),
      description: newDescription.trim() || 'Captura de tela adicionada via link direto.',
      directImageUrl: newUrl.trim(),
      aspectRatio: '16:9',
      isCustom: true,
    };

    onAddScreen(selectedProjectId, newScreen);
    setNewTitle('');
    setNewUrl('');
    setNewDescription('');
    setPreviewError(false);
    setActiveTab('gallery');
  };

  const handleCopyLink = async (url: string, id: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // fallback
    }
  };

  const handleCopyTag = async (screen: ProjectScreen, id: string) => {
    const tag = `<img src="${screen.directImageUrl}" alt="${screen.title}" loading="lazy" class="w-full h-auto rounded-lg shadow-md" />`;
    try {
      await navigator.clipboard.writeText(tag);
      setCopiedTagId(id);
      setTimeout(() => setCopiedTagId(null), 2000);
    } catch {
      // fallback
    }
  };

  const generateFullHtmlExport = () => {
    return `<!-- Galeria de Telas dos Projetos com Links Diretos de Imagens -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
${projects
  .flatMap((p) =>
    p.screens.map(
      (s) => `  <!-- ${p.title} - ${s.title} -->
  <figure class="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/80 p-4">
    <img 
      src="${s.directImageUrl}" 
      alt="${s.title}" 
      loading="lazy" 
      class="w-full h-auto rounded-lg aspect-video object-cover" 
    />
    <figcaption class="mt-3">
      <h4 class="text-sm font-semibold text-white">${s.title}</h4>
      <p class="text-xs text-neutral-400 mt-1">${s.description}</p>
    </figcaption>
  </figure>`
    )
  )
  .join('\n\n')}
</div>`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#171717] border border-[#494454]/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-[#e5e2e1]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#494454]/30 bg-[#1c1b1b]">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-lg bg-[#a078ff]/20 text-[#d0bcff]">
              <ImageIcon className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-base font-semibold text-white">
                Gerenciador de Telas & Links Diretos de Imagens
              </h2>
              <p className="text-xs text-[#cbc3d7]">
                Visualize, adicione e copie URLs diretas de imagens e tags HTML
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#cbc3d7] hover:text-white hover:bg-[#2a2a2a] transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Informative Banner */}
        <div className="bg-[#201f1f] px-6 py-3 border-b border-[#494454]/30 flex items-start gap-3 text-xs text-[#cbc3d7]">
          <Sparkles className="w-4 h-4 text-[#d0bcff] shrink-0 mt-0.5" />
          <p>
            <strong className="text-white">Sim! É 100% possível adicionar links diretos de imagens:</strong>{' '}
            Você pode inserir links diretos (URLs de CDN, S3, Cloudinary, Imgur, ou GitHub raw) e o app irá renderizá-los diretamente nos cards de projeto e gerar a tag HTML correspondente com suporte a fallback de alta performance.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-[#494454]/20 bg-[#171717]">
          <button
            onClick={() => setActiveTab('gallery')}
            className={`pb-2.5 text-xs font-medium cursor-pointer transition-colors relative ${
              activeTab === 'gallery'
                ? 'text-[#d0bcff] border-b-2 border-[#d0bcff]'
                : 'text-[#958ea0] hover:text-white'
            }`}
          >
            Todas as Telas ({projects.reduce((acc, p) => acc + p.screens.length, 0)})
          </button>
          <button
            onClick={() => setActiveTab('add')}
            className={`pb-2.5 text-xs font-medium cursor-pointer transition-colors relative flex items-center gap-1 ${
              activeTab === 'add'
                ? 'text-[#d0bcff] border-b-2 border-[#d0bcff]'
                : 'text-[#958ea0] hover:text-white'
            }`}
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Adicionar Novo Link Direto</span>
          </button>
          <button
            onClick={() => setActiveTab('exportHtml')}
            className={`pb-2.5 text-xs font-medium cursor-pointer transition-colors relative flex items-center gap-1 ${
              activeTab === 'exportHtml'
                ? 'text-[#d0bcff] border-b-2 border-[#d0bcff]'
                : 'text-[#958ea0] hover:text-white'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>Exportar Código HTML</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)] space-y-6">
          {/* TAB 1: GALLERY */}
          {activeTab === 'gallery' && (
            <div className="space-y-6">
              {/* Project filter selector */}
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#958ea0]">Filtrar por projeto:</span>
                  <select
                    value={selectedProjectId}
                    onChange={(e) => setSelectedProjectId(e.target.value)}
                    className="bg-[#201f1f] border border-[#494454]/40 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#d0bcff]"
                  >
                    {projects.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={() => setActiveTab('add')}
                  className="px-3 py-1.5 rounded-lg bg-[#a078ff]/20 text-[#d0bcff] hover:bg-[#a078ff]/30 text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Adicionar Imagem Neste Projeto</span>
                </button>
              </div>

              {/* Screens Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentProject?.screens.map((screen) => (
                  <div
                    key={screen.id}
                    className="bg-[#1f1f23] border border-[#494454]/40 rounded-xl overflow-hidden flex flex-col justify-between group"
                  >
                    {/* Screen Image Preview */}
                    <div
                      onClick={() => onSelectForLightbox(screen, currentProject.title)}
                      className="relative cursor-pointer aspect-video bg-[#0d0e12] overflow-hidden"
                    >
                      <img
                        src={screen.directImageUrl}
                        alt={screen.title}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-2.5 py-1 rounded bg-[#d0bcff] text-[#3c0091] text-xs font-semibold">
                          Ampliar Tela
                        </span>
                      </div>
                      {screen.isCustom && (
                        <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#a078ff] text-white text-[10px] font-mono">
                          Link Customizado
                        </span>
                      )}
                    </div>

                    {/* Metadata & Actions */}
                    <div className="p-4 flex flex-col justify-between gap-3">
                      <div>
                        <h4 className="text-sm font-semibold text-white">{screen.title}</h4>
                        <p className="text-xs text-[#cbc3d7] mt-1 line-clamp-2">
                          {screen.description}
                        </p>
                      </div>

                      {/* Direct URL input readonly */}
                      <div className="flex items-center gap-1.5 bg-[#141416] p-1.5 rounded border border-[#494454]/30 text-xs">
                        <LinkIcon className="w-3.5 h-3.5 text-[#958ea0] shrink-0" />
                        <input
                          type="text"
                          readOnly
                          value={screen.directImageUrl}
                          className="bg-transparent text-[#cbc3d7] text-[11px] font-mono w-full outline-none truncate"
                        />
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center justify-between pt-1 border-t border-[#494454]/20 text-xs">
                        <div className="flex items-center gap-2">
                          {/* Copy URL */}
                          <button
                            onClick={() => handleCopyLink(screen.directImageUrl, screen.id)}
                            className="px-2.5 py-1 rounded bg-[#2a2a2a] hover:bg-[#353534] text-[#d0bcff] flex items-center gap-1 transition-colors cursor-pointer"
                            title="Copiar URL direta para a área de transferência"
                          >
                            {copiedId === screen.id ? (
                              <Check className="w-3 h-3 text-emerald-400" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                            <span>{copiedId === screen.id ? 'Copiado!' : 'Copiar URL'}</span>
                          </button>

                          {/* Copy HTML tag */}
                          <button
                            onClick={() => handleCopyTag(screen, screen.id)}
                            className="px-2.5 py-1 rounded bg-[#2a2a2a] hover:bg-[#353534] text-[#c0c1ff] flex items-center gap-1 transition-colors cursor-pointer"
                            title="Copiar tag <img> completa pronta para uso"
                          >
                            {copiedTagId === screen.id ? (
                              <Check className="w-3 h-3 text-emerald-400" />
                            ) : (
                              <Code className="w-3 h-3" />
                            )}
                            <span>{copiedTagId === screen.id ? 'Tag Copiada!' : 'Tag <img>'}</span>
                          </button>
                        </div>

                        {screen.isCustom && (
                          <button
                            onClick={() => onRemoveScreen(currentProject.id, screen.id)}
                            className="p-1 text-red-400 hover:text-red-300 transition-colors cursor-pointer"
                            title="Remover tela customizada"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: ADD NEW DIRECT IMAGE LINK */}
          {activeTab === 'add' && (
            <form onSubmit={handleAddNew} className="space-y-4">
              <div className="p-4 rounded-xl bg-[#201f1f] border border-[#494454]/40 space-y-4">
                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                  <Plus className="w-4 h-4 text-[#d0bcff]" />
                  Adicionar Link Direto de Imagem para o Projeto
                </h3>
                <p className="text-xs text-[#cbc3d7]">
                  Insira o link direto de qualquer imagem pública na web (PNG, JPG, WebP ou SVG). Ela será imediatamente vinculada ao card do projeto no portfólio.
                </p>

                {/* Target Project */}
                <div>
                  <label className="block text-xs font-mono text-[#cbc3d7] mb-1">
                    Projeto Alvo
                  </label>
                  <select
                    value={selectedProjectId}
                    onChange={(e) => setSelectedProjectId(e.target.value)}
                    className="w-full bg-[#171717] border border-[#494454]/50 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#d0bcff]"
                  >
                    {projects.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Title */}
                <div>
                  <label className="block text-xs font-mono text-[#cbc3d7] mb-1">
                    Título da Tela / Captura *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Dashboard de Latência em Tempo Real"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full bg-[#171717] border border-[#494454]/50 rounded-lg px-3 py-2 text-sm text-white placeholder:text-[#958ea0] focus:outline-none focus:border-[#d0bcff]"
                  />
                </div>

                {/* Direct Image URL */}
                <div>
                  <label className="block text-xs font-mono text-[#cbc3d7] mb-1">
                    URL Direta da Imagem * (https://... ou data:image/...)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="https://exemplo.com/screenshot-app.png"
                    value={newUrl}
                    onChange={(e) => {
                      setNewUrl(e.target.value);
                      setPreviewError(false);
                    }}
                    className="w-full bg-[#171717] border border-[#494454]/50 rounded-lg px-3 py-2 text-sm text-white placeholder:text-[#958ea0] focus:outline-none focus:border-[#d0bcff] font-mono text-xs"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-mono text-[#cbc3d7] mb-1">
                    Descrição da Tela
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Breve descrição da funcionalidade ou métrica exibida na tela..."
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    className="w-full bg-[#171717] border border-[#494454]/50 rounded-lg px-3 py-2 text-sm text-white placeholder:text-[#958ea0] focus:outline-none focus:border-[#d0bcff] resize-none"
                  />
                </div>

                {/* Live Preview box */}
                {newUrl && (
                  <div className="pt-2 border-t border-[#494454]/30">
                    <span className="block text-xs font-mono text-[#958ea0] mb-2">
                      Pré-visualização do Link Direto:
                    </span>
                    <div className="aspect-video w-full max-w-md rounded-lg overflow-hidden border border-[#494454]/40 bg-[#0d0d10] flex items-center justify-center relative">
                      {!previewError ? (
                        <img
                          src={newUrl}
                          alt="Preview"
                          onError={() => setPreviewError(true)}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="p-4 text-center text-xs text-amber-300 flex flex-col items-center gap-1">
                          <AlertCircle className="w-5 h-5" />
                          <span>Não foi possível carregar a imagem desta URL. Verifique se o link direto é público.</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('gallery')}
                  className="px-4 py-2 rounded-lg bg-[#201f1f] text-xs text-[#cbc3d7] hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#d0bcff] text-[#3c0091] font-medium text-xs hover:bg-[#d0bcff]/90 transition-all shadow-[0_0_16px_rgba(208,188,255,0.2)] cursor-pointer"
                >
                  Salvar e Adicionar ao Projeto
                </button>
              </div>
            </form>
          )}

          {/* TAB 3: EXPORT HTML */}
          {activeTab === 'exportHtml' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#201f1f] border border-[#494454]/40 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      Código HTML com Links Diretos de Imagens
                    </h3>
                    <p className="text-xs text-[#cbc3d7]">
                      Copie o trecho HTML contendo todas as tags <code>&lt;img&gt;</code> configuradas no projeto.
                    </p>
                  </div>
                  <button
                    onClick={async () => {
                      await navigator.clipboard.writeText(generateFullHtmlExport());
                      setCopiedTagId('all-html');
                      setTimeout(() => setCopiedTagId(null), 2000);
                    }}
                    className="px-3.5 py-1.5 rounded-lg bg-[#d0bcff] text-[#3c0091] font-medium text-xs flex items-center gap-1.5 hover:bg-[#d0bcff]/90 cursor-pointer"
                  >
                    {copiedTagId === 'all-html' ? (
                      <Check className="w-3.5 h-3.5" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    <span>{copiedTagId === 'all-html' ? 'Copiado!' : 'Copiar Todo o HTML'}</span>
                  </button>
                </div>

                <div className="bg-[#0e0e0e] p-3 rounded-lg border border-[#494454]/30 overflow-x-auto max-h-72">
                  <pre className="font-mono text-xs text-[#d0bcff] leading-relaxed select-all">
                    {generateFullHtmlExport()}
                  </pre>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
