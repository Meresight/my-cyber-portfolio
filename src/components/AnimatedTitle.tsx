import { motion, Variants, Transition } from "framer-motion"; 
import React from 'react';

// --- INTERFACE FIX: Added 'delay' prop ---
interface AnimatedTitleProps {
    /** The string of text to be animated. */
    text: string;
    /** The size of the text (e.g., "text-4xl", "text-xl"). */
    className?: string;
    /** Optional delay before the animation starts (in seconds). */
    delay?: number; 
}

// --- TRANSITION DEFINITION FIX ---
// Explicitly typed transition for each letter's animation.
const springTransition: Transition = {
    type: "spring",
    damping: 12, 
    stiffness: 100, 
};

// --- CONTAINER VARIANT ---
const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05, 
        }
    }
};

// --- CHILD VARIANT (Per Letter) ---
const child: Variants = {
    hidden: { 
        opacity: 0, 
        y: 20 
    },
    show: {
        opacity: 1,
        y: 0,
        transition: springTransition,
    }
};

/**
 * Animates a string of text, making each letter appear with a subtle spring effect.
 */
export default function AnimatedTitle({ text, className = "text-5xl", delay = 0 }: AnimatedTitleProps) {
    
    const letters = Array.from(text);

    // --- FINAL STRUCTURAL FIX: SAFELY EXTRACT TRANSITION ---
    // Extract the stagger transition object from the container variant.
    // This resolves the TypeScript error: Property 'transition' does not exist on type 'Variant'.
    const staggerTransition = (container.show as any).transition || {};
    
    return (
        <motion.div 
            variants={container} 
            initial="hidden" 
            animate="show"
            
            // --- USAGE FIX: Apply the delay prop here ---
            // Merge the explicit delay prop with the extracted stagger transition settings.
            transition={{ 
                delay: delay, 
                ...staggerTransition 
            }} 
            
            className={`font-bold tracking-tight ${className}`}
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }} 
        >
            {letters.map((letter, index) => (
                <motion.span 
                    variants={child} 
                    key={index}
                    style={{ display: "inline-block" }}
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.div>
    );
}