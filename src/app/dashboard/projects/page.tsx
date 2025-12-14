import CyberCard from "@/components/CyberCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Globe, HardHat, Terminal } from "lucide-react";

const projectData = [
  {
    title: "Flowise AI App",
    tech: "Flowise, Next.js API, TypeScript, Vercel",
    description: "A custom AI assistant built with Flowise, integrated directly into this portfolio. Demonstrates proficiency in embedding and utilizing LLM orchestration tools for business logic and user interaction.",
    link: "/dashboard/flowise",
    icon: Terminal,
    buttonText: "VIEW AI INTEGRATION",
    color: "neon-blue",
  },
  {
    title: "SkillBuilder PH",
    tech: "MERN Stack, Stripe, AWS S3, Docker",
    description: "A full-scale e-learning platform enabling users to create and enroll in courses. Architected for scalability and payment processing.",
    link: "#",
    icon: Globe,
    buttonText: "LAUNCH SITE (Placeholder)",
    color: "neon-pink",
  },
  {
    title: "Project Alpha: E-Commerce API",
    tech: "Node.js, Express, MongoDB, Redis",
    description: "High-performance REST API for a headless e-commerce solution. Focused on microservice architecture and fast response times through caching.",
    link: "#",
    icon: HardHat,
    buttonText: "VIEW REPO (Placeholder)",
    color: "neon-blue",
  },
  {
    title: "MaBote.ph Flutter Mobile App",
    tech: "Flutter, Firebase, QR Code, Wallet System",
    description: "Flutter mobile app for the MaBote.ph smart recycling system (Capstone 2 project). Features include user registration, QR code scanning, real-time wallet, transaction history, rewards system, analytics dashboard, leaderboard, notifications, profile management, and machine finder.",
    link: "#",
    icon: Globe,
    buttonText: "VIEW PROJECT",
    color: "neon-green",
  },
  {
    title: "GreenMeadowsPortal",
    tech: "Web App, User Management, Billing, Facility & Service Management",
    description: "Subdivision management portal with features for administrators, staff, and homeowners including user management, announcements, billing, facility reservation, service requests, document management, community forum, security, event calendar, feedback system, contact directory, mobile-friendly design, reports and analytics, polls, and security/privacy management.",
    link: "#",
    icon: HardHat,
    buttonText: "VIEW PORTAL",
    color: "neon-orange",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-neon-blue border-b-4 border-neon-pink/50 pb-2 uppercase tracking-wider">
        // PROJECTS_CATALOG
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <CyberCard
            key={index}
            title={project.title}
            className="hover:scale-[1.02] transition-transform duration-300"
          >
            <div className={`mb-3 text-${project.color}`}>
              <project.icon className="w-8 h-8" />
            </div>
            <p className="text-sm font-light text-gray-400 mb-3">{project.tech}</p>
            <p className="mb-6">{project.description}</p>
            <Link href={project.link} passHref>
              <Button className="w-full text-lg shadow-lg shadow-neon-blue/30">
                {project.buttonText}
              </Button>
            </Link>
          </CyberCard>
        ))}
      </div>
    </div>
  );
}
