import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Terminal, Lightbulb, Wrench } from "lucide-react";

const challenges = [
  {
    title: "Cloud IAM Misconfiguration Exploitation",
    problem: "Identify and exploit a misconfigured IAM policy in a simulated AWS environment to gain unauthorized access to sensitive resources.",
    approach: "Used AWS CLI to enumerate IAM roles and policies, identified a role with excessive permissions, and crafted a privilege escalation attack to access S3 buckets containing sensitive data.",
    tools: ["AWS IAM", "AWS CLI", "Python"],
    lesson: "Reinforced the importance of least privilege principles and regular access reviews in cloud environments.",
  },
  {
    title: "Web App SQL Injection (CTF)",
    problem: "Extract the admin credentials from a deliberately vulnerable web application within a timed CTF competition.",
    approach: "Used manual testing to identify injection point, then automated extraction with sqlmap. Bypassed WAF rules using encoding techniques.",
    tools: ["Burp Suite", "sqlmap", "cURL", "Firefox DevTools"],
    lesson: "Learned the importance of parameterized queries and input sanitisation in real-world applications.",
  },
  {
    title: "Packet Capture & Analysis",
    problem: "Identify exfiltrated data hidden within DNS queries in a provided PCAP file.",
    approach: "Loaded the PCAP in Wireshark, filtered DNS traffic, decoded hex-encoded subdomains, and reconstructed the exfiltrated file.",
    tools: ["Wireshark", "tshark", "CyberChef", "Python"],
    lesson: "Gained hands-on experience with DNS tunnelling detection and network forensics workflows.",
  },
];

const ChallengesSection = () => (
  <section id="challenges" className="section-padding bg-secondary/30">
    <div className="max-w-6xl mx-auto">
      <SectionHeading tag="// lab challenges" title="Cloud & Network Security Labs" subtitle="Hands-on exercises focused on cloud threat modeling, network attack surfaces, and defensive risk analysis." />

      <div className="space-y-6">
        {challenges.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="bg-card border border-border rounded-lg p-6 md:p-8 hover:border-primary/30 transition-colors"
          >
            <h3 className="font-display text-xl font-semibold mb-4 text-primary">{c.title}</h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Terminal size={14} className="text-primary" />
                  <span className="font-display text-xs uppercase tracking-wider text-muted-foreground">Problem</span>
                </div>
                <p className="text-sm text-secondary-foreground leading-relaxed">{c.problem}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Wrench size={14} className="text-primary" />
                  <span className="font-display text-xs uppercase tracking-wider text-muted-foreground">Approach</span>
                </div>
                <p className="text-sm text-secondary-foreground leading-relaxed">{c.approach}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb size={14} className="text-primary" />
                  <span className="font-display text-xs uppercase tracking-wider text-muted-foreground">Key Lesson</span>
                </div>
                <p className="text-sm text-secondary-foreground leading-relaxed">{c.lesson}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border">
              {c.tools.map((t) => (
                <span key={t} className="font-display text-[10px] px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ChallengesSection;
