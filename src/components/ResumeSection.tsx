import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Briefcase, GraduationCap, Award, Code, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const timeline = [
  {
    icon: GraduationCap,
    category: "Education",
    title: "Cloud and Network Security Certification (in progress)",
    org: "Cyber Shujaa Academy",
    period: "2026 – ongoing",
    details: "Focus on network security, Cloud Security, Threat & Risk Management and Compliance & Incidence report.",
  },
  {
    icon: GraduationCap,
    category: "Education",
    title: "B.Sc. Information Technology — Software Track",
    org: "Kabarak University",
    period: "2018 – 2022",
    details: "Focus on network security, Web Development, and software engineering. Graduated with a Second Class Honors.",
  },
  {
    icon: Briefcase,
    category: "Experience",
    title: "Junior Ict Officer",
    org: "Solvit Security Solutions Ltd",
    period: "Jan 2025 - Present",
    details: "Troubleshooting, Network Administration, Web Design, and Cybersecurity",
  },
  {
    icon: Briefcase,
    category: "Experience",
    title: "ICT Support Specialist",
    org: "Dasadove Computers",
    period: "Jan 2023 – Dec 2024",
    details: "Provided technical support, network setup, and cybersecurity solutions for small businesses and individual clients.",
  },
];

const certifications = ["CCNA(in progress)", "Cloud & Network Security (in progress)"];

const skills = [
  "Python", "JavaScript/TypeScript", "React", "Node.js",
  "Linux", "Wireshark", "Web Development", "Penetration Testing",
  "PostgreSQL", "Git",
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

const ResumeSection = () => (
  <section id="resume" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-2">
        <SectionHeading tag="// resume" title="Background & Experience" subtitle="A summary of my academic journey, professional experience, and technical skills." />
        <Button
          variant="outline"
          className="self-start sm:self-auto flex-shrink-0"
          onClick={() => window.open('/Dennis Kiptoo CV.pdf', '_blank')}
        >
          <ExternalLink size={16} />
          View Full CV
        </Button>
      </div>

      {/* Timeline */}
      <div className="space-y-8 mb-16">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="flex gap-4 md:gap-6"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mt-1">
              <item.icon size={18} className="text-primary" />
            </div>
            <div className="flex-1 bg-card border border-border rounded-lg p-5 md:p-6 hover:border-primary/30 transition-colors">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="font-display text-xs text-primary uppercase tracking-wider">{item.category}</span>
                <span className="text-xs text-muted-foreground">— {item.period}</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{item.org}</p>
              <p className="text-sm text-secondary-foreground leading-relaxed">{item.details}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skills & Certs */}
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-lg p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Code size={18} className="text-primary" />
            <h3 className="font-display text-lg font-semibold">Technical Skills</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="font-display text-xs px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground border border-border">
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border rounded-lg p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Award size={18} className="text-primary" />
            <h3 className="font-display text-lg font-semibold">Certifications</h3>
          </div>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c} className="flex items-center gap-2 text-sm text-secondary-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ResumeSection;
