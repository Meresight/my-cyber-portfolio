// src/components/GameIntro.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedTitle from "./AnimatedTitle";
import { Button } from "./ui/button";

export default function GameIntro() {
  const router = useRouter();
  const [isStarting, setIsStarting] = useState(false);

  const handleStartGame = () => {
    setIsStarting(true);
    // Cool animation transition before routing to the dashboard
    setTimeout(() => {
      router.push("/dashboard");
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-cyber-dark">
        {!isStarting ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center space-y-8"
          >
            <AnimatedTitle
              text="WELCOME TO MY PORTFOLIO"
              delay={0.5}
              className="text-6xl md:text-8xl font-bold text-neon-blue drop-shadow-neon-blue text-center"
            />
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="text-xl md:text-3xl text-neon-pink text-center"
            >
              PRESS START TO BEGIN YOUR JOURNEY
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.5, type: "spring", stiffness: 100 }}
            >
              <Button
                onClick={handleStartGame}
                className="text-2xl py-4 px-8 animate-pulse shadow-neon-blue hover:shadow-neon-pink"
              >
                START GAME
              </Button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ scale: 2, opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="text-4xl text-neon-blue"
          >
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="text-8xl mb-4"
              >
                ⚙️
              </motion.div>
              <p>LOADING DASHBOARD...</p>
            </div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
}