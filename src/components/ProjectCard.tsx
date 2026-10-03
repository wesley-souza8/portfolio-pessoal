"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "./ui/card"
import { Badge } from "./ui/badge"
import { buttonVariants } from "./ui/button"
import { ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { ProjectData } from "@/lib/projects"

export function ProjectCard({ project, index }: { project: ProjectData, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col hover:border-primary/50 transition-colors">
        <CardHeader>
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <CardDescription className="text-muted-foreground mt-2">
            {project.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="flex-1">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map(tech => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
          
          <div className="text-sm text-muted-foreground">
            {project.content}
          </div>
        </CardContent>
        
        <CardFooter className="flex gap-4 pt-4 border-t border-border/50">
          {project.repoUrl ? (
            <a href={project.repoUrl} target="_blank" rel="noreferrer" aria-label={`Repositório do ${project.title}`} className={buttonVariants({ variant: 'outline', size: 'sm', className: 'flex-1' })}>
              <FaGithub className="w-4 h-4 mr-2" />
              Código
            </a>
          ) : null}
          <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Deploy do ${project.title}`} className={buttonVariants({ size: 'sm', className: 'flex-1' })}>
            <ExternalLink className="w-4 h-4 mr-2" />
            Visitar
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
