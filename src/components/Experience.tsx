"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { slideUp, staggerContainer, staggerItem } from "@/utils/animations";

const experiences = [
  {
    role: "Software Developer Intern",
    company: "Palm Infotech",
    location: "Surat, India",
    period: "Jan 2025 - Apr 2025",
    description: [
      "Engineered a full-stack mobile lottery application, improving UI rendering speed and session retention, by developing a cross-platform Flutter frontend integrated with GetStorage and advanced image caching techniques.",
      "Accelerated lottery matching logic and result processing workflows, reducing data retrieval latency by ~25%, by architecting robust NestJS REST APIs and implementing complex MongoDB aggregation pipelines alongside MySQL schemas.",
      "Strengthened system architecture and API request validation, ensuring stable data handoffs across backend services, by implementing NestJS Data Transfer Objects (DTOs), validation pipes, and secure authentication flows."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeading title="Experience" />
      
      <div className="mt-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative border-l border-dark-slate pl-8 py-4"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[5px] top-6 w-2.5 h-2.5 rounded-full bg-electric-blue ring-4 ring-deep-slate"></div>
            
            <motion.div variants={staggerItem} className="mb-2">
              <h3 className="text-2xl font-bold text-foreground">
                {exp.role} <span className="text-neon-teal">@ {exp.company}</span>
              </h3>
              <div className="flex items-center gap-4 text-sm text-slate-400 mt-1 font-mono">
                <span>{exp.period}</span>
                <span>•</span>
                <span>{exp.location}</span>
              </div>
            </motion.div>
            
            <ul className="mt-6 space-y-4">
              {exp.description.map((item, i) => (
                <motion.li 
                  key={i}
                  variants={staggerItem}
                  className="text-slate-300 leading-relaxed flex gap-3"
                >
                  <span className="text-electric-blue mt-1.5">▹</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
