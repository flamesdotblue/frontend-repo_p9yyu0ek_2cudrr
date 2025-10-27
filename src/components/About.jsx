import { motion } from 'framer-motion';
import { Palette, Sparkles } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.1 + i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] } }),
};

export default function About() {
  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-black to-[#07090a] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_20%_20%,rgba(129,140,248,0.12),rgba(0,0,0,0))]" />
      <div className="mx-auto max-w-6xl px-6">
        <motion.p initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}
          className="text-sm font-semibold tracking-widest text-indigo-300/80">
          ABOUT
        </motion.p>
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}
          className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          Designer & creative developer crafting cinematic web experiences.
        </motion.h2>
        <motion.p initial="hidden" whileInView="show" custom={1} viewport={{ once: true, amount: 0.3 }} variants={fadeIn}
          className="mt-5 max-w-3xl text-lg text-white/70">
          I merge design systems with digital art — building interfaces that feel tactile, expressive, and effortless. Every detail is tuned for smoothness and clarity.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <FeatureCard
            icon={<Palette className="h-5 w-5" />}
            title="Art-first systems"
            text="Grain, glow, and depth paired with bold type and clean rhythm. Minimal yet immersive."
            i={2}
          />
          <FeatureCard
            icon={<Sparkles className="h-5 w-5" />}
            title="Motion as meaning"
            text="Physically-informed easing and choreography that guide attention without distraction."
            i={3}
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, text, i = 0 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
      custom={i}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 backdrop-blur-xl"
    >
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-indigo-300/10 blur-3xl transition-transform duration-1000 group-hover:translate-x-6 group-hover:-translate-y-6" />
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-300">
          {icon}
        </div>
        <h3 className="text-lg font-bold tracking-tight">{title}</h3>
      </div>
      <p className="mt-3 text-white/70">{text}</p>
    </motion.div>
  );
}
