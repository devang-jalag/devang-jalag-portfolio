"use client";

import { motion } from "framer-motion";
import { slideUp } from "@/utils/animations";

interface SectionHeadingProps {
  title: string;
}

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <motion.div
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        {title}
      </h2>
      <div className="h-1 w-20 bg-neon-teal mt-4 rounded-full"></div>
    </motion.div>
  );
}
