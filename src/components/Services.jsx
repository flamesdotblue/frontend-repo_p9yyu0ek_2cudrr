import { motion } from 'framer-motion';
import { Layers, Rocket } from 'lucide-react';

const services = [
  {
    title: 'Experience Design',
    desc: 'Bold, minimal interfaces with precision motion and premium feel.',
    icon: Rocket,
  },
  {
    title: 'Creative Development',
    desc: 'GSAP/Framer-motion choreography, WebGL/Spline integration, and performance.',
    icon: Layers,
  },
  {
    title: 'Brand Systems',
    desc: 'Typography, color, and component libraries that scale elegantly.',
    icon: Layers,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-[linear-gradient(180deg,#07090a,rgba(7,9,10,0.8))] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_40%_at_50%_0%,rgba(52,211,153,0.1),rgba(7,9,10,0))]" />
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-semibold tracking-widest text-emerald-300/80">SERVICES</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">What we do</h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={i} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ s, i }) {
  const Icon = s.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
    >
      <div className="pointer-events-none absolute -bottom-20 -right-12 h-48 w-48 rounded-full bg-emerald-300/10 blur-3xl transition-transform duration-1000 group-hover:-translate-y-4 group-hover:translate-x-2" />
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-base font-semibold">{s.title}</h3>
      </div>
      <p className="mt-3 text-sm text-white/70">{s.desc}</p>
    </motion.div>
  );
}
