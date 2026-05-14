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
      "Architected a 2-module NestJS 11 REST API (User, Lottery) with TypeORM + MySQL, using a shared DataSource with autoLoadEntities: true — exposing 10 parameterized CRUD endpoints with clean module separation for independent testability.",
      "Applied COALESCE-based SQL partial-update pattern in NestJS TypeORM service — enabling atomic field-selective mutations via a single parameterized query, eliminating over-write risk on nullable optional fields, using TypeORM 0.3 and MySQL 8.",
      "Hardened user credential handling via bcrypt hashing (10 salt rounds) and pre-wired @nestjs/jwt + passport-jwt scaffolding — establishing a secure auth foundation ready for JWT token issuance without refactoring the service layer, using NestJS 11 and bcrypt 5.1."
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
