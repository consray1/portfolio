import { motion } from "framer-motion";

interface SectionHeadingProps {
  tag: string;
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ tag, title, subtitle }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mb-12 md:mb-16"
  >
    <p className="font-display text-xs text-primary tracking-widest uppercase mb-2">{tag}</p>
    <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">{title}</h2>
    {subtitle && <p className="text-muted-foreground max-w-2xl">{subtitle}</p>}
    <div className="gradient-line h-px w-24 mt-4" />
  </motion.div>
);

export default SectionHeading;
