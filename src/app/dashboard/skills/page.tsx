import CyberCard from "@/components/CyberCard";
import { Code, Server, Wand2 } from "lucide-react";

const skillCategories = [
  {
    title: "FRONTEND",
    icon: Wand2,
    skills: ["HTML5 & CSS3", "JavaScript", "Responsive Design", "Basic React.js", "TailwindCSS"],
    color: "text-neon-blue",
  },
  {
    title: "BACKEND",
    icon: Server,
    skills: ["PHP (Laravel/Vanilla)", "MySQL / MariaDB", "Node.js Basics", "REST APIs", "Server Management Basics"],
    color: "text-neon-pink",
  },
  {
    title: "TOOLS & LEARNING",
    icon: Code,
    skills: ["Git & GitHub", "Docker Basics", "Next.js (App Router)", "Flowise / LLM Basics", "Cloud Deployment (Vercel/AWS)"],
    color: "text-green-400",
  },
];

export default function SkillsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-neon-blue border-b-4 border-neon-pink/50 pb-2 uppercase tracking-wider">
        // SKILL_MATRIX_IT
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <CyberCard key={index} title={category.title}>
            <category.icon className={`w-8 h-8 mb-4 ${category.color}`} />
            <ul className="space-y-3">
              {category.skills.map((skill, sIndex) => (
                <li key={sIndex} className="flex items-center text-sm">
                  <span className="mr-2 text-neon-pink font-extrabold">//</span>
                  {skill}
                </li>
              ))}
            </ul>
          </CyberCard>
        ))}
      </div>

      <div className="pt-4">
        <CyberCard title="PROFICIENCY LEVELS">
          <p>
            <strong>Comfortable With:</strong>
            <span className="block mt-2 text-sm text-neon-blue">HTML, CSS, JavaScript, PHP, MySQL</span>
            <strong>Currently Learning:</strong>
            <span className="block text-sm text-neon-pink">React.js, Next.js, Docker, Cloud Deployment, Flowise</span>
          </p>
        </CyberCard>
      </div>
    </div>
  );
}
