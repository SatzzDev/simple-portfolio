import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  FaReact, 
  FaNodeJs, 
  FaFigma, 
  FaMobileAlt, 
  FaDatabase
} from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  url: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Website toko online dengan sistem pembayaran, keranjang, dan admin dashboard.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    url: "https://github.com/portfolio/ecommerce"
  },
  {
    id: 2,
    title: "Admin Dashboard",
    description: "Dashboard admin dengan visualisasi data statistik dan real-time monitoring.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200",
    category: "web",
    technologies: ["React", "TypeScript", "Chart.js", "Tailwind"],
    url: "https://github.com/portfolio/admin-dashboard"
  },
  {
    id: 3,
    title: "Mobile App Design",
    description: "Desain UI/UX untuk aplikasi fintech dengan animasi dan interaksi yang modern.",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200",
    category: "design",
    technologies: ["Figma", "Adobe XD", "Prototyping"],
    url: "https://dribbble.com"
  },
  {
    id: 4,
    title: "Photography Portfolio",
    description: "Website portfolio fotografi dengan gallery interaktif dan layout responsif.",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200",
    category: "web",
    technologies: ["Next.js", "Animation", "CSS Grid"],
    url: "https://github.com/portfolio/photography"
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
      return <FaDatabase className="mr-1" />;
    default:
      return null;
  }
}

export default function ProjectsSection() {
  const webProjects = projects.filter(p => p.category === "web");
  const designProjects = projects.filter(p => p.category === "design");

  return (
    <motion.div
      className="mt-8 bg-background p-5 rounded-xl shadow-md border border-border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold text-foreground mb-4">Proyek Portfolio</h2>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="all">Semua</TabsTrigger>
          <TabsTrigger value="web">Web Development</TabsTrigger>
          <TabsTrigger value="design">UI/UX Design</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-4">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </TabsContent>
        
        <TabsContent value="web" className="space-y-4">
          {webProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </TabsContent>
        
        <TabsContent value="design" className="space-y-4">
          {designProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
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