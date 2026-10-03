import React from 'react';
import { X, Download, Printer, ExternalLink, Mail, MapPin, Award, CheckCircle } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl bg-[#171717] border border-[#494454]/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[90vh] text-[#e5e2e1]">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#494454]/30 bg-[#1c1b1b]">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#d0bcff]" />
            <h2 className="text-sm font-semibold text-white">
              Currículo Profissional — Alexandre Silva
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-[#2a2a2a] hover:bg-[#353534] text-xs text-[#cbc3d7] hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / Salvar PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#cbc3d7] hover:text-white hover:bg-[#2a2a2a] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-sm">
          {/* Header */}
          <div className="border-b border-[#494454]/30 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white">Alexandre Silva</h1>
              <p className="text-sm text-[#d0bcff] font-mono mt-0.5">
                Senior Full Stack Developer • Tech Lead
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#cbc3d7] mt-2">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#958ea0]" />
                  São Paulo, Brasil (Disponível Remoto Global)
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-[#958ea0]" />
                  contato@dev.io
                </span>
              </div>
            </div>
            <div className="flex sm:flex-col items-start gap-1 font-mono text-xs text-[#958ea0] bg-[#1c1b1b] p-3 rounded-lg border border-[#494454]/30">
              <span className="text-[#4ade80]">● Disponibilidade Imediata</span>
              <span>SLA Uptime: 99.98%</span>
              <span>Lighthouse: 100/100</span>
            </div>
          </div>

          {/* Resumo Profissional */}
          <div>
            <h3 className="text-xs font-mono uppercase text-[#d0bcff] tracking-wider mb-2">
              // Resumo Profissional
            </h3>
            <p className="text-[#cbc3d7] leading-relaxed">
              Engenheiro de Software Sênior com mais de 6 anos de experiência projetando e implementando sistemas de alta performance e disponibilidade massiva. Especialista no ecossistema TypeScript (React 19, Next.js App Router, Node.js/NestJS), com histórico comprovado de liderança técnica em arquiteturas distribuídas, observabilidade com Kafka/ClickHouse, e microsserviços serverless na AWS com latência ultra-baixa (&lt;45ms).
            </p>
          </div>

          {/* Experiência Selecionada */}
          <div>
            <h3 className="text-xs font-mono uppercase text-[#d0bcff] tracking-wider mb-3">
              // Experiência em Destaque
            </h3>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#201f1f] border border-[#494454]/30">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-white">Tech Lead & Arquiteto Distribuído</h4>
                    <span className="text-xs text-[#c0c1ff] font-mono">Pulse Analytics • 2023 — Presente</span>
                  </div>
                  <span className="text-xs text-[#958ea0] font-mono">Remoto</span>
                </div>
                <ul className="mt-2 text-xs text-[#cbc3d7] space-y-1 list-disc list-inside">
                  <li>Liderança na arquitetura de streaming com Kafka processando 1.8M msg/s.</li>
                  <li>Desenvolvimento de visualização WebGL a 60 FPS com buffers otimizados sem travamentos.</li>
                  <li>Redução de 45% nos custos de infraestrutura através de sharding inteligente no ClickHouse.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#201f1f] border border-[#494454]/30">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-white">Senior Full Stack Engineer</h4>
                    <span className="text-xs text-[#c0c1ff] font-mono">Nova Commerce Enterprise • 2021 — 2023</span>
                  </div>
                  <span className="text-xs text-[#958ea0] font-mono">São Paulo</span>
                </div>
                <ul className="mt-2 text-xs text-[#cbc3d7] space-y-1 list-disc list-inside">
                  <li>Implementação de checkout com tempo de resposta de 58ms durante picos de Black Friday.</li>
                  <li>Gestão de locks distribuídos no Redis com zero overbooking em múltiplos estoques regionais.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Formação Acadêmica */}
          <div>
            <h3 className="text-xs font-mono uppercase text-[#d0bcff] tracking-wider mb-2">
              // Formação Acadêmica & Certificações
            </h3>
            <div className="p-4 rounded-xl bg-[#201f1f] border border-[#494454]/30 text-xs text-[#cbc3d7] space-y-2">
              <div className="flex justify-between">
                <strong className="text-white">Bacharelado em Ciência da Computação</strong>
                <span className="font-mono text-[#958ea0]">2018 — 2022</span>
              </div>
              <p>Foco em algoritmos distribuídos, compiladores e estruturas de dados concorrentes.</p>
              <div className="pt-2 border-t border-[#494454]/30 flex flex-wrap gap-2 text-[11px] font-mono text-[#d0bcff]">
                <span>• AWS Certified Solutions Architect</span>
                <span>• Kubernetes CKA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
