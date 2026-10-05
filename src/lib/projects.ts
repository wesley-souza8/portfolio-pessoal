import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ProjectData {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  repoUrl: string;
  liveUrl: string;
  content: string;
  order: number;
}

export function getProjects(): ProjectData[] {
  const contentDir = path.join(process.cwd(), 'src/content/projects');
  
  if (!fs.existsSync(contentDir)) {
    return [];
  }
  
  const files = fs.readdirSync(contentDir);

  const projects = files
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const filePath = path.join(contentDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      return {
        slug: file.replace(/\.mdx$/, ''),
        title: data.title,
        description: data.description,
        technologies: data.technologies || [],
        repoUrl: data.repoUrl || '',
        liveUrl: data.liveUrl || '',
        order: data.order || 99,
        content,
      };
    })
    .sort((a, b) => a.order - b.order);

  return projects;
}
