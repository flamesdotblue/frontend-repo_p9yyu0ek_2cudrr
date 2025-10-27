import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const works = [
  {
    title: 'Volumetric Space',
    tag: 'Interactive Installation',
    gradient: 'from-emerald-300/20 via-emerald-300/10 to-transparent',
  },
  {
    title: 'Kinetic Identity',
    tag: 'Brand Motion',
    gradient: 'from-sky-300/20 via-sky-300/10 to-transparent',
  },
  {
    title: 'Specular Grid',
    tag: 'Web Experience',
    gradient: 'from-purple-300/20 via-purple-300/10 to-transparent',
  },
  {
    title: 'Holographic Type',
    tag: 'Typography',
    gradient: 'from-pink-300/20 via-pink-300/10 to-transparent',
  },
  {
    title: 'Parallax Field',
    tag: 'Creative Code',
    gradient: 'from-amber-300/20 via-amber-300/10 to-transparent',
  },
  {
    title: 'Depth Studio',
    tag: 'Art Direction',
    gradient: 'from-emerald-300/20 via-emerald-300/10 to-transparent',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative w-full bg-[#07090a] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_80%_10%,rgba(16,185,129,0.08),rgba(0,0,0,0))]" />
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <p className="text-sm font-semibold tracking-widest text-emerald-300/80">PORTFOLIO</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">Selected Works</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w, idx) => (
            <TiltCard key={idx} title={w.title} tag={w.tag} gradient={w.gradient} i={idx} />)
          )}
        </div>
      </div>
    </section>
  );
}

function TiltCard({ title, tag, gradient, i }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 8; // subtle tilt
    const rotateX = (0.5 - py) * 8;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.05 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 will-change-transform"
      style={{ transform: 'perspective(900px)' }}
    >
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${gradient}`} />
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/70">{tag}</span>
          <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-300/80" />
        </div>
        <h3 className="mt-4 text-lg font-bold tracking-tight md:text-xl">{title}</h3>
        <p className="mt-2 text-sm text-white/60">Cinematic parallax, depth, and tactile micro-interactions.</p>
        <div className="mt-6 h-36 w-full rounded-xl bg-gradient-to-tr from-white/10 to-transparent ring-1 ring-inset ring-white/10" />
      </div>
    </motion.article>
  );
}
