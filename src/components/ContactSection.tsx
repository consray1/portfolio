import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

const links = [
  { icon: Mail, label: "consraydennis77@gmail.com", href: "mailto:consraydennis77@gmail.com" },
  { icon: Linkedin, label: "linkedin.com/in/dennis-kipruto-kiptoo/", href: "https://linkedin.com/in/dennis-kipruto-kiptoo/" },
  { icon: Github, label: "github.com/consray1", href: "https://github.com/consray1" },
  { icon: Phone, label: "+254 715 770 113", href: "tel:+254715770113" },
];

const ContactSection = () => (
  <section id="contact" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <SectionHeading tag="// contact" title="Get in Touch" subtitle="Open to opportunities, collaborations, and interesting conversations." />

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {links.map((l, i) => (
            <a
              key={i}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/40 hover:box-glow transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <l.icon size={18} className="text-primary" />
              </div>
              <span className="font-display text-sm text-secondary-foreground group-hover:text-foreground transition-colors">{l.label}</span>
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="bg-card border border-border rounded-lg p-6 flex flex-col justify-center"
        >
          <p className="font-display text-primary text-sm mb-3">{">"} message.txt</p>
          <p className="text-secondary-foreground leading-relaxed mb-6">
            Whether you have a project idea, a security challenge to discuss, or just want to connect — 
            I'd love to hear from you. Feel free to reach out through any of the channels listed here.
          </p>
          <div className="gradient-line h-px w-full" />
          <p className="text-xs text-muted-foreground mt-4 font-display">
            Response time: typically within 24 hours
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
