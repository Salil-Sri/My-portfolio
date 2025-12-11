import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Country Search Platform",
    description: "A simple and interactive web application that allows users to search for country details using the REST Countries API.",
    image: "/placeholder.svg",
    tech: ["React.js", "APIs", "Javasript", "Tailwind"],
    github: "https://github.com/Salil-Sri/Countries-Search-Project",
    live: "https://country-search-project.netlify.app/",
  },
  {
    title: "Doctor Appointement Site",
    description: "A web application for scheduling and managing doctor appointments with patients via a full-stack interface combining a frontend UI and backend API.",
    image: "/placeholder.svg",
    tech: ["React", "OpenAI", "Node.js", "Redis"],
    github: "https://github.com/Salil-Sri/Doctor-Appointement-site-",
    live: "https://github.com/Salil-Sri/Doctor-Appointement-site-",
  },
  {
    title: "StudywithAI",
    description: "A full-stack AI-powered study assistant web app with frontend and backend components built in JavaScript, designed to help users learn more effectively using AI-driven features",
    image: "/placeholder.svg",
    tech: ["React", "MongoDB", "Express", "D3.js"],
    github: "https://github.com/Salil-Sri/StudywithAI",
    live: "https://studywithai-frontend.onrender.com/",
  },
  {
    title: "Text To Speech Converter",
    description: "A simple web app that converts written text into clear, natural-sounding speech using the browser’s Text-to-Speech API.",
    image: "/placeholder.svg",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Salil-Sri/Text-To-Speech-Converter?tab=readme-ov-file",
    live: "https://salil-sri.github.io/Text-To-Speech-Converter/",
  },
  {
    title: "BizMan",
    description: "A responsive business website built with the Angular framework to showcase services, products, or company information with modern SPA features.",
    image: "/placeholder.svg",
    tech: ["Angular","HTML", "Tailwind"],
    github: "https://github.com/Salil-Sri/Bizman_Angular-Website",
    live: "https://bizman-angular-website.vercel.app/home",
  },
  {
    title: "CRM Dashboard",
    description: "A dynamic CRM dashboard web application that visualizes and manages customer data with interactive charts and user interface components.",
    image: "/placeholder.svg",
    tech: ["React", "Python", "AWS", "Recharts"],
    github: "https://github.com/Salil-Sri/CRM-Dashboard",
    live: "https://crm-dashboard-beta.vercel.app/",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 right-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for 
            creating exceptional digital experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card group overflow-hidden hover-glow transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-heading text-4xl font-bold text-muted-foreground/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button variant="hero" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                  <Button variant="heroOutline" size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-xs font-medium rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
