"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { staggerContainer, staggerItem } from "@/utils/animations";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "TypeScript", "JavaScript", "SQL"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "GCP", "Terraform", "Docker", "CI/CD"]
  },
  {
    title: "Frameworks & Tools",
    skills: ["React", "Next.js", "Node.js", "Spring Boot", "Git"]
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "DynamoDB"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeading title="Skills Matrix" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-xl font-bold text-foreground mb-6 font-mono border-b border-slate-800 pb-2">
              <span className="text-neon-teal">0{index + 1}.</span> {category.title}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="px-4 py-2 rounded-lg bg-dark-slate border border-slate-800 text-slate-300 font-medium hover:border-electric-blue hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
