"use client";

import { motion } from "framer-motion";
import { slideUp } from "@/utils/animations";
import { Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-3xl mx-auto text-center">
      <motion.div
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <p className="text-neon-teal font-mono tracking-wider mb-4">
          What&apos;s Next?
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Get In Touch
        </h2>
        
        <p className="text-slate-400 mb-12 leading-relaxed">
          I am actively seeking a Fall 2026 Software Engineer Co-op position. 
          Whether you have a role available, a question, or just want to say hi, 
          I&apos;ll try my best to get back to you!
        </p>
        
        <div className="flex justify-center gap-6 mb-16">
          <a
            href="mailto:devangjalag@gmail.com"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-dark-slate border border-slate-800 text-slate-300 hover:text-neon-teal hover:border-neon-teal transition-all duration-300 transform hover:-translate-y-1"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://github.com/devang-jalag"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-dark-slate border border-slate-800 text-slate-300 hover:text-electric-blue hover:border-electric-blue transition-all duration-300 transform hover:-translate-y-1"
            aria-label="GitHub"
          >
            <FiGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/devang-j-94364a294/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-dark-slate border border-slate-800 text-slate-300 hover:text-electric-blue hover:border-electric-blue transition-all duration-300 transform hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={24} />
          </a>
        </div>
        
        <a
          href="mailto:devangjalag@gmail.com"
          className="inline-block border-2 border-electric-blue text-electric-blue px-8 py-4 rounded-md font-mono hover:bg-electric-blue/10 transition-colors"
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  );
}
