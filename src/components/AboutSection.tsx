import React from 'react';
import { TimelineItem } from '../types/portfolio';

interface AboutSectionProps {
  timeline: TimelineItem[];
}

export const AboutSection: React.FC<AboutSectionProps> = ({ timeline }) => {
  return (
    <section className="flex flex-col gap-6 pt-6" id="sobre">
      <div className="flex flex-col gap-1">
        <span className="font-mono text-[11px] text-[#d0bcff] tracking-wider uppercase font-semibold">
          // TRAJETÓRIA & BACKGROUND
        </span>
        <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#e5e2e1] tracking-tight">
          Engenharia com foco em produto
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Coluna 1: Trajetória & Filosofia (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4 text-[#cbc3d7] text-[14px] sm:text-[15px] leading-relaxed">
          <p>
            Minha abordagem à engenharia de software combina rigor estrutural, design refinado e
            foco absoluto em resultados de negócio. Ao longo dos últimos 6 anos, liderei o design de
            arquitetura de múltiplos sistemas que processam milhões de requisições por dia com SLAs
            rígidos de tolerância a falhas.
          </p>
          <p>
            Acredito que o código limpo, a testabilidade ponta a ponta e a boa ergonomia para
            desenvolvedores são requisitos indispensáveis para a escalabilidade sustentável. Atuo desde
            a definição técnica de schemas até o polimento visual de interfaces acessíveis e fluidas.
          </p>

          {/* Métricas Resumidas */}
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#494454]/30 mt-2">
            <div>
              <span className="text-[24px] sm:text-[28px] text-[#e5e2e1] font-bold tracking-tight block">
                30+
              </span>
              <p className="text-[12px] sm:text-[13px] text-[#cbc3d7] leading-tight mt-1">
                Projetos entregues em produção
              </p>
            </div>
            <div>
              <span className="text-[24px] sm:text-[28px] text-[#e5e2e1] font-bold tracking-tight block">
                100k+
              </span>
              <p className="text-[12px] sm:text-[13px] text-[#cbc3d7] leading-tight mt-1">
                Linhas de código revisadas
              </p>
            </div>
            <div>
              <span className="text-[24px] sm:text-[28px] text-[#e5e2e1] font-bold tracking-tight block">
                99.9%
              </span>
              <p className="text-[12px] sm:text-[13px] text-[#cbc3d7] leading-tight mt-1">
                Satisfação em entregas
              </p>
            </div>
          </div>
        </div>

        {/* Coluna 2: Formação & Linha do Tempo (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6 relative pl-6 border-l border-[#494454]/30">
          {timeline.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline marker */}
              <span
                className={`absolute -left-[31px] top-1.5 w-3 h-3 rounded-full border-2 border-[#131313] transition-transform duration-200 group-hover:scale-125 ${
                  item.isCurrent
                    ? 'bg-[#d0bcff] ring-4 ring-[#d0bcff]/20'
                    : 'bg-[#2a2a2a]'
                }`}
              ></span>

              <span className="font-mono text-[11px] block font-medium" style={{ color: item.statusColor }}>
                {item.period}
              </span>
              <h4 className="text-[16px] sm:text-[17px] font-medium text-[#e5e2e1] mt-0.5">
                {item.title}
              </h4>
              <p className="text-[13px] text-[#cbc3d7] leading-relaxed mt-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
