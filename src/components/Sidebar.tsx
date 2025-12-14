"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { User, Code, Mail, HardHat, Terminal } from "lucide-react";
import NavLink from "./NavLink";

const navItems = [
  { href: "/dashboard", label: "ABOUT / HOME", icon: User },
  { href: "/dashboard/projects", label: "PROJECTS", icon: Code },
  { href: "/dashboard/skills", label: "SKILLS & TECH", icon: HardHat },
  { href: "/dashboard/contact", label: "CONTACT / HIRE", icon: Mail },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 50 }}
      // FIX APPLIED HERE: Removed "hidden md:flex" to ensure the sidebar is always visible.
      className="flex flex-col w-64 p-6 border-r border-cyber-border bg-cyber-dark shadow-xl shadow-neon-blue/10 min-h-screen"
    >
      <div className="mb-10 pt-4">
        <Logo className="text-3xl" />
        <p className="mt-2 text-xs text-neon-pink uppercase tracking-widest">
          Portfolio OS v1.4
        </p>
      </div>

      <nav className="flex flex-col space-y-3">
        {navItems.map((item) => (
          <NavLink key={item.href} href={item.href} icon={item.icon} label={item.label} isActive={pathname === item.href} />
        ))}
      </nav>
    </motion.aside>
  );
}