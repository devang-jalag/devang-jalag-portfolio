"use client";

import { motion } from "framer-motion";
import { slideUp, fadeIn } from "@/utils/animations";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/20 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-teal/20 rounded-full blur-[128px] -z-10" />

      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-neon-teal font-mono tracking-wider mb-4"
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1
          variants={slideUp}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight"
        >
          Devang Jalag.
          <span className="block text-slate-400 mt-2">I build scalable systems.</span>
        </motion.h1>

        <motion.p
          variants={slideUp}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Master of Applied Computer Science student specializing in distributed systems, 
          cloud infrastructure, and full-stack engineering.
        </motion.p>

        <motion.div
          variants={slideUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 bg-electric-blue text-white px-8 py-3 rounded-full font-medium hover:bg-electric-blue/90 transition-all duration-300 transform hover:-translate-y-1"
          >
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-transparent border border-neon-teal text-neon-teal px-8 py-3 rounded-full font-medium hover:bg-neon-teal/10 transition-all duration-300 transform hover:-translate-y-1"
          >
            Download Resume
            <Download size={18} className="group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
