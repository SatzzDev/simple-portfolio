import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const skills = [
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "UI/UX Design", level: 90, category: "design" },
  { name: "Tailwind CSS", level: 95, category: "frontend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "Figma", level: 85, category: "design" },
  { name: "MongoDB", level: 70, category: "backend" },
];

export default function SkillsSection() {
  const frontendSkills = skills.filter(skill => skill.category === "frontend");
  const backendSkills = skills.filter(skill => skill.category === "backend");
  const designSkills = skills.filter(skill => skill.category === "design");

  return (
    <motion.div
      className="mt-8 bg-white p-5 rounded-xl shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold text-neutral-800 mb-4">Keahlian</h2>
      
      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-neutral-700">Frontend</h3>
            <div className="flex gap-1">
              {frontendSkills.map(skill => (
                <Badge key={skill.name} variant="outline" className="bg-primary/5 text-primary border-primary/20">
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            {frontendSkills.map(skill => (
              <div key={skill.name} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{skill.name}</span>
                  <span className="text-neutral-500">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-neutral-700">Backend</h3>
            <div className="flex gap-1">
              {backendSkills.map(skill => (
                <Badge key={skill.name} variant="outline" className="bg-violet-50 text-violet-600 border-violet-200">
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            {backendSkills.map(skill => (
              <div key={skill.name} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{skill.name}</span>
                  <span className="text-neutral-500">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-neutral-700">Design</h3>
            <div className="flex gap-1">
              {designSkills.map(skill => (
                <Badge key={skill.name} variant="outline" className="bg-emerald-50 text-emerald-600 border-emerald-200">
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            {designSkills.map(skill => (
              <div key={skill.name} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{skill.name}</span>
                  <span className="text-neutral-500">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}