export interface ProjectScreen {
  id: string;
  title: string;
  description: string;
  directImageUrl: string;
  fallbackSvgType?: 'analytics' | 'ecommerce' | 'cloud' | 'design-system';
  aspectRatio: string;
  isCustom?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  iconName: string;
  accentColor: string;
  description: string;
  techBadges: string[];
  repoUrl: string;
  liveUrl: string;
  codeSnippet: {
    filename: string;
    language: string;
    rawCode: string;
    lines: {
      num: number;
      tokens: { text: string; colorClass: string }[];
    }[];
  };
  screens: ProjectScreen[];
}

export interface SkillItem {
  name: string;
  level: 'Especialista' | 'Avançado' | 'Sólido' | 'Intermediário' | 'Certificado';
  detail?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  accent: string;
  skills: SkillItem[];
}

export interface TimelineItem {
  period: string;
  title: string;
  description: string;
  statusColor: string;
  isCurrent?: boolean;
}
