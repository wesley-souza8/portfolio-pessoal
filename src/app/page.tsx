import { getProjects } from "@/lib/projects"
import { ProjectCard } from "@/components/ProjectCard"
import { ModeToggle } from "@/components/ModeToggle"
import { Button, buttonVariants } from "@/components/ui/button"
import { FileText, Database, Code, Cloud, LineChart, FileSpreadsheet } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import Image from "next/image"

export default function Home() {
  const projects = getProjects()

  const skills = [
    { name: "SQL Avançado", icon: <Database className="w-5 h-5" /> },
    { name: "Python", icon: <Code className="w-5 h-5" /> },
    { name: "AWS (Glue, Athena, S3)", icon: <Cloud className="w-5 h-5" /> },
    { name: "React & Node", icon: <Code className="w-5 h-5" /> },
    { name: "Análise de Dados", icon: <LineChart className="w-5 h-5" /> },
    { name: "Excel Avançado", icon: <FileSpreadsheet className="w-5 h-5" /> },
    { name: "Microsoft Office", icon: <FileText className="w-5 h-5" /> },
  ]

  return (
    <div className="min-h-screen">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-5xl px-4 h-16 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight">WS.</span>
          <nav className="flex items-center gap-4">
            <a href="#projetos" className="text-sm font-medium hover:text-primary transition-colors">Projetos</a>
            <a href="#sobre" className="text-sm font-medium hover:text-primary transition-colors">Sobre</a>
            <a href="#contato" className="text-sm font-medium hover:text-primary transition-colors">Contato</a>
            <ModeToggle />
          </nav>
        </div>
      </header>

      <main className="container mx-auto max-w-5xl px-4 py-12 flex flex-col gap-24">
        
        {/* 1. Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 pt-8 md:pt-16">
          <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                Olá, eu sou <span className="text-primary">Wesley Souza</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                Engenheiro de Software & Dados | AWS | Finanças
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-[600px] mx-auto md:mx-0">
              Transformo dados em estratégias de negócios e crio soluções completas, desde a modelagem na AWS até interfaces modernas.
            </p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-2">
              <a href="/portfolio-pessoal/curriculo.pdf" target="_blank" className={buttonVariants()}>Baixar Currículo</a>
              <a href="#contato" className={buttonVariants({ variant: 'secondary' })}>Contato</a>
              <a href="https://github.com/wesley-souza8" target="_blank" rel="noreferrer" aria-label="GitHub" className={buttonVariants({ variant: 'outline' })}>
                <FaGithub className="w-4 h-4 mr-2" /> GitHub
              </a>
              <a href="https://linkedin.com/in/wesley-dev-eng/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className={buttonVariants({ variant: 'outline' })}>
                <FaLinkedin className="w-4 h-4 mr-2" /> LinkedIn
              </a>
            </div>
          </div>
          
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-muted">
            <Image 
              src="/portfolio-pessoal/profile.jpg" 
              alt="Wesley Souza" 
              fill
              className="object-cover object-[center_20%]"
              sizes="(max-width: 768px) 192px, 256px"
              priority
            />
          </div>
        </section>

        {/* 2. Projetos */}
        <section id="projetos" className="scroll-mt-24">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Projetos em Destaque</h2>
            <p className="text-muted-foreground">Algumas das soluções que construí recentemente.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </section>

        {/* 3. Sobre Mim & Formação */}
        <section id="sobre" className="scroll-mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Sobre Mim</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sou um profissional apaixonado pela interseção entre dados, tecnologia e negócios. Com formação inicial em Ciências Contábeis pela FECAP e atualmente cursando Engenharia de Software na FIAP, construí uma base sólida que une visão analítica financeira e desenvolvimento de software.
                </p>
                <p>
                  No Itaú Unibanco, atuo na Recuperação de Crédito PF criando plataformas analíticas na AWS (Glue, Athena, S3) e automatizando processos de ponta a ponta. Anteriormente, no Santander, trabalhei com Inteligência de Mercado e Contabilidade.
                </p>
                <p>
                  Minha abordagem envolve entender a fundo as regras de negócio para entregar desde pipelines e modelagem de dados até aplicações web completas.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Formação & Certificações</h2>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-primary/30">
                  <span className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5 ring-4 ring-background"></span>
                  <h3 className="font-semibold text-lg">Engenharia de Software</h3>
                  <p className="text-muted-foreground">FIAP (Previsão: 2026)</p>
                </div>
                <div className="relative pl-6 border-l-2 border-primary/30">
                  <span className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5 ring-4 ring-background"></span>
                  <h3 className="font-semibold text-lg">Ciências Contábeis</h3>
                  <p className="text-muted-foreground">FECAP (Concluído: 2021)</p>
                </div>
                <div className="relative pl-6 border-l-2 border-primary/30">
                  <span className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5 ring-4 ring-background"></span>
                  <h3 className="font-semibold text-lg">AWS Certified Cloud Practitioner</h3>
                  <p className="text-muted-foreground">Válida até 2028</p>
                </div>
                <div className="relative pl-6 border-l-2 border-transparent">
                  <span className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5 ring-4 ring-background"></span>
                  <h3 className="font-semibold text-lg">Lean Six Sigma Yellow Belt</h3>
                  <p className="text-muted-foreground">Melhoria contínua de processos</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Skills */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Habilidades Técnicas</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {skills.map(skill => (
              <div key={skill.name} className="flex items-center gap-2 px-4 py-3 bg-card border border-border rounded-lg shadow-sm hover:border-primary/50 transition-colors">
                <span className="text-primary">{skill.icon}</span>
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Contato */}
        <section id="contato" className="scroll-mt-24 text-center max-w-2xl mx-auto pb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Vamos Conversar?</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Estou sempre aberto a novas oportunidades para criar soluções de impacto usando dados e engenharia de software.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://github.com/wesley-souza8" target="_blank" rel="noreferrer" className={buttonVariants({ size: 'lg', variant: 'outline', className: 'text-base' })}>
              <FaGithub className="w-5 h-5 mr-2" />
              GitHub
            </a>
            <a href="https://linkedin.com/in/wesley-dev-eng/" target="_blank" rel="noreferrer" className={buttonVariants({ size: 'lg', variant: 'outline', className: 'text-base' })}>
              <FaLinkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </div>
        </section>
        
      </main>

      <footer className="border-t border-border/40 py-8 text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} Wesley Souza de Oliveira. Todos os direitos reservados.</p>
        <p className="mt-2 text-xs">Desenvolvido com Next.js, Tailwind CSS e Framer Motion.</p>
      </footer>
    </div>
  )
}
