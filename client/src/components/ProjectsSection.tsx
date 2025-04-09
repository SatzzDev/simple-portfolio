import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import axios from "axios";
import { 
  FaReact, 
  FaNodeJs, 
  FaFigma, 
  FaMobileAlt, 
  FaDatabase,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaCode,
  FaPython
} from "react-icons/fa";
import { SiTypescript, SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  url: string;
}

interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  topics: string[];
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
}

// Fallback projects in case GitHub API fails
const fallbackProjects: Project[] = [
  {
    id: 1,
    title: "REST API Service",
    description: "Layanan REST API dengan Express dan Node.js yang menyediakan berbagai endpoint untuk integrasi aplikasi",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200",
    category: "backend",
    technologies: ["Node.js", "Express", "MongoDB", "RESTful API"],
    url: "https://github.com/KurniawanSatria/satria-api"
  },
  {
    id: 2,
    title: "WhatsApp Bot",
    description: "Bot WhatsApp dengan berbagai fitur untuk membantu otomatisasi pesan dan layanan.",
    image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200",
    category: "backend",
    technologies: ["JavaScript", "Node.js", "WhatsApp API"],
    url: "https://github.com/KurniawanSatria"
  }
];

function getIcon(tech: string) {
  switch (tech.toLowerCase()) {
    case 'react':
      return <FaReact className="mr-1" />;
    case 'node.js':
      return <FaNodeJs className="mr-1" />;
    case 'figma':
      return <FaFigma className="mr-1" />;
    case 'mobile':
      return <FaMobileAlt className="mr-1" />;
    case 'mongodb':
      return <SiMongodb className="mr-1" />;
    case 'javascript':
    case 'js':
      return <FaJs className="mr-1" />;
    case 'html':
    case 'html5':
      return <FaHtml5 className="mr-1" />;
    case 'css':
    case 'css3':
      return <FaCss3Alt className="mr-1" />;
    case 'typescript':
    case 'ts':
      return <SiTypescript className="mr-1" />;
    case 'express':
      return <SiExpress className="mr-1" />;
    case 'tailwind':
    case 'tailwindcss':
      return <SiTailwindcss className="mr-1" />;
    case 'python':
      return <FaPython className="mr-1" />;
    case 'database':
      return <FaDatabase className="mr-1" />;
    case 'github':
      return <FaGithub className="mr-1" />;
    case 'restful api':
    case 'rest api':
    case 'api':
      return <FaCode className="mr-1" />;
    default:
      return <FaCode className="mr-1" />;
  }
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Function to map GitHub repository to our Project interface
  const mapGithubRepoToProject = (repo: GithubRepo, index: number): Project => {
    // Define placeholder image URLs based on repo topics or language
    let imageUrl = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200";
    
    if (repo.language?.toLowerCase() === 'javascript' || repo.topics.includes('javascript')) {
      imageUrl = "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200";
    } else if (repo.language?.toLowerCase() === 'typescript' || repo.topics.includes('typescript')) {
      imageUrl = "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200";
    } else if (repo.topics.includes('api') || repo.name.toLowerCase().includes('api')) {
      imageUrl = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200";
    } else if (repo.topics.includes('bot') || repo.name.toLowerCase().includes('bot')) {
      imageUrl = "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200";
    }

    // Determine category
    let category = "other";
    if (repo.topics.includes('frontend') || repo.topics.includes('website')) {
      category = "web";
    } else if (repo.topics.includes('api') || repo.topics.includes('backend')) {
      category = "backend";
    } else if (repo.topics.includes('bot')) {
      category = "bot";
    }

    // Determine technologies
    let technologies: string[] = [];
    if (repo.language) {
      technologies.push(repo.language);
    }
    
    // Add common technologies based on repo name or topics
    if (repo.topics.includes('nodejs') || repo.name.includes('node')) {
      technologies.push('Node.js');
    }
    if (repo.topics.includes('express') || repo.name.includes('express')) {
      technologies.push('Express');
    }
    if (repo.topics.includes('api') || repo.name.includes('api')) {
      technologies.push('RESTful API');
    }
    if (repo.topics.includes('mongodb') || repo.name.includes('mongo')) {
      technologies.push('MongoDB');
    }
    if (repo.topics.includes('whatsapp') || repo.name.includes('whatsapp') || repo.name.includes('wa')) {
      technologies.push('WhatsApp API');
    }
    
    // Ensure we have at least one technology
    if (technologies.length === 0) {
      technologies.push(repo.language || 'JavaScript');
    }

    return {
      id: repo.id,
      title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      description: repo.description || `A ${category} project written in ${repo.language || 'JavaScript'}`,
      image: imageUrl,
      category,
      technologies: Array.from(new Set(technologies)),
      url: repo.html_url
    };
  };

  useEffect(() => {
    const fetchGithubRepos = async () => {
      try {
        setIsLoading(true);
        const username = 'SatzzDev';
        const response = await axios.get(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        
        if (response.status === 200 && Array.isArray(response.data)) {
          // Filter out forked repositories and empty repositories
          const filteredRepos = response.data.filter((repo: any) => 
            !repo.fork && 
            (repo.description || repo.name)
          );
          
          // Map GitHub repos to our Project interface
          const projectsFromGithub = filteredRepos.map(mapGithubRepoToProject);
          
          // Limit to 6 projects maximum
          setProjects(projectsFromGithub.slice(0, 6));
        } else {
          // Fall back to default projects if API response is not what we expect
          setProjects(fallbackProjects);
          setError("Could not fetch GitHub repositories properly");
        }
      } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
        setProjects(fallbackProjects);
        setError("Error fetching GitHub repositories. Using fallback projects.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchGithubRepos();
  }, []);

  // Filter projects by category
  const backendProjects = projects.filter(p => p.category === "backend");
  const webProjects = projects.filter(p => p.category === "web");
  const botProjects = projects.filter(p => p.category === "bot");

  return (
    <motion.div
      className="mt-8 bg-background p-5 rounded-xl shadow-md border border-border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-foreground">Proyek GitHub</h2>
        {isLoading && (
          <div className="flex items-center text-muted-foreground text-sm">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Loading...
          </div>
        )}
      </div>
      
      {error && (
        <div className="text-yellow-500 text-sm mb-4 bg-yellow-500/10 p-2 rounded-md border border-yellow-500/20">
          {error}
        </div>
      )}
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-4">
          <TabsTrigger value="all">Semua</TabsTrigger>
          <TabsTrigger value="backend">Backend</TabsTrigger>
          <TabsTrigger value="web">Web</TabsTrigger>
          <TabsTrigger value="bot">Bot</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-4">
          {isLoading ? (
            <div className="space-y-4">
              {[1, 2].map(i => (
                <div key={i} className="h-40 animate-pulse bg-muted rounded-lg"></div>
              ))}
            </div>
          ) : (
            projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))
          )}
        </TabsContent>
        
        <TabsContent value="backend" className="space-y-4">
          {isLoading ? (
            <div className="space-y-4">
              <div className="h-40 animate-pulse bg-muted rounded-lg"></div>
            </div>
          ) : backendProjects.length > 0 ? (
            backendProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="text-center text-muted-foreground py-8">
              No backend projects found
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="web" className="space-y-4">
          {isLoading ? (
            <div className="space-y-4">
              <div className="h-40 animate-pulse bg-muted rounded-lg"></div>
            </div>
          ) : webProjects.length > 0 ? (
            webProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="text-center text-muted-foreground py-8">
              No web projects found
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="bot" className="space-y-4">
          {isLoading ? (
            <div className="space-y-4">
              <div className="h-40 animate-pulse bg-muted rounded-lg"></div>
            </div>
          ) : botProjects.length > 0 ? (
            botProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="text-center text-muted-foreground py-8">
              No bot projects found
            </div>
          )}
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-card rounded-lg overflow-hidden hover:shadow-lg border border-border transition-all"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="md:flex">
        <div className="md:w-1/3 h-48 md:h-auto">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 md:w-2/3">
          <h3 className="font-medium text-lg text-foreground">{project.title}</h3>
          <p className="text-muted-foreground text-sm mt-1 mb-3">{project.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map(tech => (
              <Badge key={tech} variant="secondary" className="flex items-center text-xs px-2 py-0.5 bg-primary/10 text-primary border border-primary/20">
                {getIcon(tech)}{tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.a>
  );
}