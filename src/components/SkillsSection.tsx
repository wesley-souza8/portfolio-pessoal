import React, { useState } from 'react';
import { Globe, Server, Database, ShieldCheck, Info } from 'lucide-react';
import { SkillCategory } from '../types/portfolio';

interface SkillsSectionProps {
  categories: SkillCategory[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ categories }) => {
  const [activeSkillDetail, setActiveSkillDetail] = useState<string | null>(null);

  const getCategoryIcon = (icon: string) => {
    switch (icon) {
      case 'web':
        return <Globe className="w-4 h-4 text-[#d0bcff]" />;
      case 'dns':
        return <Server className="w-4 h-4 text-[#c0c1ff]" />;
      case 'database':
        return <Database className="w-4 h-4 text-[#cebdff]" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-[#d0bcff]" />;
    }
  };

  return (
    <section className="flex flex-col gap-6 pt-6" id="skills">
      <div className="flex flex-col gap-1">
        <span className="font-mono text-[11px] text-[#d0bcff] tracking-wider uppercase font-semibold">
          // COMPETÊNCIAS & TOOLSET
        </span>
        <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#e5e2e1] tracking-tight">
          Habilidades Técnicas
        </h2>
      </div>

      {/* Categories Grid (4 cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="card-rim p-5 rounded-xl flex flex-col gap-4 border border-[#494454]/30"
          >
            {/* Header */}
            <div className="flex items-center gap-2 pb-2.5 border-b border-[#494454]/20">
              {getCategoryIcon(category.icon)}
              <h3 className="text-[17px] font-medium text-[#e5e2e1]">{category.title}</h3>
            </div>

            {/* List */}
            <ul className="flex flex-col gap-2.5 text-[13px] text-[#cbc3d7]">
              {category.skills.map((skill, sIdx) => {
                const isSelected = activeSkillDetail === `${category.title}-${skill.name}`;
                return (
                  <li
                    key={sIdx}
                    onClick={() =>
                      setActiveSkillDetail(isSelected ? null : `${category.title}-${skill.name}`)
                    }
                    className="flex flex-col gap-1 cursor-pointer group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[#e5e2e1] group-hover:text-[#d0bcff] transition-colors">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[11px] text-[#958ea0] group-hover:text-white transition-colors">
                        {skill.level}
                      </span>
                    </div>

                    {/* Expandable detail explanation */}
                    {isSelected && skill.detail && (
                      <div className="p-2 rounded bg-[#1c1b1b] border border-[#494454]/40 text-[11px] text-[#cbc3d7] font-mono animate-fade-in">
                        {skill.detail}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
