// src/components/Logo.tsx
import { cn } from "@/lib/utils";
// FIX: Changed MoveHover to a valid icon like Activity, Cpu, or Zap
import { Activity } from "lucide-react"; 

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div
      className={cn(
        "flex items-center text-4xl font-extrabold tracking-widest text-neon-blue drop-shadow-neon-blue",
        className
      )}
    >
      <Activity className="w-8 h-8 mr-2 animate-pulse text-neon-pink" /> 
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-pink">
        SK.
      </span>
    </div>
  );
}