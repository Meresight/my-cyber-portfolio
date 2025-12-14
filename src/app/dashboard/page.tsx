// src/app/(dashboard)/page.tsx
import CyberCard from "@/components/CyberCard";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-neon-blue border-b-4 border-neon-pink/50 pb-2 uppercase tracking-wider">
        // FILE: ABOUT ME
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
        <CyberCard title="PROFESSIONAL SUMMARY">
  <p className="mb-2 text-xl font-bold text-neon-pink">
    Stefan Kar M. Chan, 4th Year IT Student
  </p>
  <p className="mb-4 text-lg">
    I am a 4th-year Information Technology student with a strong passion for web development, software, and emerging technologies.  
    I enjoy exploring modern web frameworks and tools such as <strong>Next.js, TypeScript, and TailwindCSS</strong> to build interactive and user-friendly applications.
  </p>
  <p>
    My goal is to gain hands-on experience, contribute to meaningful IT projects, and continue developing my skills in full-stack and cloud-based solutions.  
    I thrive on learning, solving technical challenges, and creating innovative solutions that bridge technology and real-world problems.
  </p>
</CyberCard>


          <CyberCard title="MISSION LOG">
            <ul className="list-disc list-inside space-y-2">
              <li>Status: Operational</li>
              <li>Current Focus: Flowise AI, Serverless Deployment, Edge Computing</li>
              <li>Next Objective: Secure Project X funding</li>
            </ul>
          </CyberCard>
        </div>

        <div className="lg:col-span-1">
          <CyberCard title="IDENTITY MATRIX">
            {/* TINY IMAGE */}
            <div className="mx-auto w-[259px] h-[355px] border border-neon-pink/30 rounded-md bg-gray-900 flex items-center justify-center p-2">
  <img
    src="/profile.jpg"
    alt="Stefan Kar M. Chan - Professional Portrait"
    className="w-full h-full object-contain"
  />
</div>


            <div className="mt-4 text-center">
              <Button className="w-full">
                DOWNLOAD CV.PDF
              </Button>
            </div>
          </CyberCard>
        </div>
      </div>
    </div>
  );
}
