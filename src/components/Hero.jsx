import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative h-[100dvh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays for depth (won't block Spline interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_30%,rgba(168,85,247,0.16),rgba(0,0,0,0))]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70" />

      <motion.div style={{ y, opacity }} className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4 text-fuchsia-300" />
            <span className="text-xs/none font-medium tracking-wide text-white/90">Modern · Minimal · Ultra-smooth</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-balance font-[800] tracking-[-0.035em] text-white"
          >
            <span className="block text-4xl sm:text-5xl md:text-6xl">Futuristic Portfolio</span>
            <span className="block bg-gradient-to-r from-white via-indigo-200 to-fuchsia-300 bg-clip-text text-5xl text-transparent sm:text-6xl md:text-7xl">
              Digital Art & Web
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="mt-5 max-w-2xl text-base text-white/70 md:text-lg"
          >
            A premium, cinematic showcase with elegant motion, parallax, and subtle 3D interactions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 1 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-indigo-400/90 px-5 py-3 text-sm font-semibold text-black transition-all hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur-xl transition-colors hover:bg-white/10"
            >
              About Me
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating parallax orbs */}
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute -left-24 top-24 h-64 w-64 rounded-full bg-indigo-400/10 blur-3xl"
      />
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute -right-24 bottom-12 h-72 w-72 rounded-full bg-fuchsia-300/10 blur-3xl"
      />
    </section>
  );
}
