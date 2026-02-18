import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Gesture Controlled Mouse Using Computer Vision",
    description: "A Python application that uses OpenCV to track hand movements and translate them into mouse cursor control and click actions.",
    tech: ["Python", "OpenCV", "MediaPipe", "Machine Learning"],
    outcome: "Received top marks and was featured in the department's project showcase.",
  },
  {
    title: "Dental Clinic Website",
    description: "A responsive website for a local dental clinic built with React and Tailwind CSS, featuring appointment booking and service information.",
    tech: ["React", "MySql", "Tailwind CSS", "Node.js"],
    outcome: "Successfully deployed and currently used by the clinic to manage appointments and showcase services.",
  },
  {
    title: "Sentiment Analysis of Twitter Data",
    description: "A Python project that collects tweets using the Twitter API and performs sentiment analysis using a pre-trained NLP model to classify tweets as positive, negative, or neutral.",
    tech: ["Python", "Twitter API", "NLP", "Scikit-learn"],
    outcome: "Presented at a university research symposium and received positive feedback for its practical application of machine learning techniques.",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <SectionHeading tag="// projects" title="Featured Work" subtitle="A selection of projects spanning security tooling, web development, and cloud infrastructure." />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="group bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-all hover:box-glow flex flex-col"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">{p.title}</h3>
              <div className="flex gap-2 text-muted-foreground">
                <Github size={16} className="hover:text-primary cursor-pointer transition-colors" />
                <ExternalLink size={16} className="hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
            <p className="text-sm text-secondary-foreground leading-relaxed mb-4 flex-1">{p.description}</p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {p.tech.map((t) => (
                <span key={t} className="font-display text-[10px] px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                  {t}
                </span>
              ))}
            </div>
            <p className="text-xs text-muted-foreground italic">↳ {p.outcome}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
