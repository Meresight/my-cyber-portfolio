// src/components/CyberCard.tsx
"use client"; // <--- ADD THIS LINE AT THE TOP
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface CyberCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function CyberCard({ title, children, className }: CyberCardProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "p-6 bg-cyber-dark border border-neon-blue/50 rounded-lg shadow-xl shadow-neon-blue/10 hover:shadow-neon-pink/20 transition-all duration-300 backdrop-blur-sm",
        className
      )}
    >
      <h3 className="text-xl font-bold mb-4 border-b pb-2 border-neon-pink text-neon-pink uppercase tracking-wider">
        // {title}
      </h3>
      <div className="text-gray-300">{children}</div>
    </motion.div>
  );
}