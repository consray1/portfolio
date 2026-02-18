import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="section-padding min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-16 relative z-10">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-primary/40 animate-pulse-glow">
            <img src={profilePhoto} alt="Professional portrait" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <p className="font-display text-sm text-primary mb-3 tracking-widest uppercase">Welcome to my portfolio</p>
          <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-4">
            Dennis <span className="text-primary text-glow">Kiptoo</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary-foreground max-w-lg leading-relaxed mb-8">
            Cybersecurity enthusiast & software engineer with a passion for building secure, 
            scalable systems. Focused on penetration testing, cloud security, and Network Engineering.
          </p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <span className="font-display text-xs px-3 py-1 rounded-full border border-primary/30 text-primary bg-primary/5">
              Cybersecurity
            </span>
            <span className="font-display text-xs px-3 py-1 rounded-full border border-primary/30 text-primary bg-primary/5">
              Network Engineering
            </span>
            <span className="font-display text-xs px-3 py-1 rounded-full border border-primary/30 text-primary bg-primary/5">
              Cloud Security
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="text-muted-foreground" size={20} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
