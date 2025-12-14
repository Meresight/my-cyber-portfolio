import Link from "next/link";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface NavLinkProps {
  href: string;
  label: string;
  icon: LucideIcon;
  isActive: boolean;
}

export default function NavLink({ href, label, icon: Icon, isActive }: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <motion.div
        whileHover={{ scale: 1.05, x: 5 }}
        className={`flex items-center p-3 text-sm font-medium transition-all duration-200 rounded-lg cursor-pointer ${
          isActive
            ? "bg-neon-blue/20 text-neon-blue shadow-lg shadow-neon-blue/30 border border-neon-blue"
            : "text-gray-400 hover:bg-cyber-border hover:text-white"
        }`}
      >
        <Icon className={`w-5 h-5 mr-3 ${isActive ? 'text-neon-pink' : 'text-neon-blue'}`} />
        {label}
        {isActive && (
          <motion.span
            layoutId="underline"
            className="absolute left-0 w-1 h-full bg-neon-pink rounded-r-full"
          />
        )}
      </motion.div>
    </Link>
  );
}