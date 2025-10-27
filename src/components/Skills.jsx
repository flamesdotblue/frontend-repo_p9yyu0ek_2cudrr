import { motion } from 'framer-motion';
import { Code, Cpu, Zap } from 'lucide-react';

const skills = [
  { title: 'Framer Motion', level: 'Expert', icon: Zap },
  { title: 'React / Vite', level: 'Advanced', icon: Code },
  { title: 'WebGL / Spline', level: 'Advanced', icon: Cpu },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-[linear-gradient(180deg,#07090a,rgba(7,9,10,0.85))] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_40%_at_50%_0%,rgba(99,102,241,0.12),rgba(7,9,10,0))]" />
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-semibold tracking-widest text-indigo-300/80">SKILLS</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">Craft & Capabilities</h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {skills.map((s, i) => (
            <SkillCard key={i} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ s, i }) {
  const Icon = s.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
    >
      <div className="pointer-events-none absolute -bottom-20 -right-12 h-48 w-48 rounded-full bg-indigo-300/10 blur-3xl transition-transform duration-1000 group-hover:-translate-y-4 group-hover:translate-x-2" />
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-300">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-base font-semibold">{s.title}</h3>
      </div>
      <p className="mt-3 text-sm text-white/70">{s.level}</p>
    </motion.div>
  );
}
