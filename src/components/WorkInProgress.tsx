"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { staggerContainer, staggerItem } from "@/utils/animations";
import { Wrench, FlaskConical, Beaker, Clock } from "lucide-react";

const wipProjects = [
  {
    title: "Aquaculture Time Series Forecasting",
    status: "Planned",
    description: "Engineered an end-to-end oxygen forecasting pipeline using scikit-learn and pandas. Containerized a FastAPI inference endpoint and deployed to Google Kubernetes Engine (GKE) via Helm, integrating MLflow for model registry and tracking.",
    tags: ["scikit-learn", "FastAPI", "GKE", "MLflow"],
    icon: <FlaskConical className="w-5 h-5 text-electric-blue" />
  },
  {
    title: "Marine Computer Vision Classification",
    status: "Planned",
    description: "Fine-tuned a ResNet model on underwater datasets using PyTorch Lightning. Exported the model to ONNX for optimized inference and deployed to Amazon EKS using TorchServe, enabling dynamic scaling of REST endpoints.",
    tags: ["PyTorch", "ONNX", "EKS", "Docker"],
    icon: <FlaskConical className="w-5 h-5 text-electric-blue" />
  },
  {
    title: "Marine Agentic RAG Pipeline",
    status: "Planned",
    description: "Architected a RAG system using Gemini to ingest marine science PDFs. Deployed ChromaDB as a persistent Kubernetes StatefulSet on GKE, integrating tool-use capabilities for live dataset API lookups.",
    tags: ["Gemini", "ChromaDB", "Kubernetes", "RAG"],
    icon: <Beaker className="w-5 h-5 text-neon-teal" />
  },
  {
    title: "Automated SMS Interception (OTP)",
    status: "80% Complete",
    description: "Developed a background React Native service to intercept international OTP SMS. Routed payloads through API Gateway to a Lambda function, dispatching real-time, low-latency delivery to a Canadian device via AWS IoT Core (MQTT WebSockets).",
    tags: ["React Native", "API Gateway", "AWS IoT Core"],
    icon: <Wrench className="w-5 h-5 text-neon-teal" />
  },
  {
    title: "Multi-Agent Cloud Orchestrator",
    status: "75% Complete",
    description: "Architected a multi-agent framework utilizing AWS Step Functions to route decision-making across specialized LLMs. Enforced strict IAM least-privilege roles per state, ensuring agents only access isolated S3 buckets or DynamoDB tables.",
    tags: ["Step Functions", "Multi-Agent", "IAM", "LLMs"],
    icon: <Wrench className="w-5 h-5 text-neon-teal" />
  },
  {
    title: "Two-Party Cryptographic Cloud Vault",
    status: "Planned",
    description: "Designed a serverless secure storage vault enforcing a 'Two-Man Rule' via Shamir's Secret Sharing. Split AES keys are stored in DynamoDB (encrypted at rest via AWS KMS), requiring simultaneous React Native authentication to reconstruct the key and decrypt S3 payloads.",
    tags: ["Cryptography", "React Native", "AWS KMS", "Lambda"],
    icon: <Clock className="w-5 h-5 text-slate-400" />
  },
  {
    title: "Culinary AI Agent (YouTube RAG)",
    status: "Planned",
    description: "Built a RAG system orchestrating an ingestion pipeline via AWS Step Functions to scrape cooking transcripts. Stored semantic embeddings in Pinecone Serverless, enabling an LLM to retrieve precise timestamps and techniques.",
    tags: ["Step Functions", "Pinecone", "DynamoDB", "RAG"],
    icon: <Clock className="w-5 h-5 text-slate-400" />
  },
  {
    title: "Delivery Geolocation Notification",
    status: "Planned",
    description: "Engineered a real-time geofencing architecture utilizing React Native background tracking. Integrated AWS Location Service to trigger EventBridge rules upon perimeter breaches, dispatching immediate push alerts via Amazon SNS.",
    tags: ["AWS Location", "EventBridge", "React Native"],
    icon: <Clock className="w-5 h-5 text-slate-400" />
  }
];

export default function WorkInProgress() {
  return (
    <section id="labs" className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeading title="Current Focus & Labs" />
      
      <p className="text-slate-400 max-w-2xl mb-12 leading-relaxed">
        A look into the active projects, research, and technical architectures I am currently building or planning over the coming weeks.
      </p>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {wipProjects.map((project, index) => (
          <motion.div 
            key={index}
            variants={staggerItem}
            className="group flex flex-col justify-between bg-dark-slate/50 rounded-xl p-6 border border-slate-800/50 hover:border-slate-700 transition-all duration-300 relative overflow-hidden"
          >
            {/* Status Badge */}
            <div className="absolute top-6 right-6">
              <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border ${
                project.status.includes("%") 
                  ? "border-neon-teal/50 text-neon-teal bg-neon-teal/10" 
                  : "border-slate-700 text-slate-400 bg-slate-800/50"
              }`}>
                {project.status}
              </span>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-deep-slate rounded-lg border border-slate-800">
                  {project.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-electric-blue transition-colors pr-24">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>
            
            <ul className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, i) => (
                <li key={i} className="text-[11px] font-mono text-slate-400 bg-deep-slate/50 px-2 py-1 rounded-md border border-slate-800/50">
                  {tag}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
