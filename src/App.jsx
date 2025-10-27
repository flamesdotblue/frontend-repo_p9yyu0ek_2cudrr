import { motion } from 'framer-motion';
import { Mail, ArrowRight, Discord, Instagram, Twitter } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white selection:bg-indigo-300/30 selection:text-white">
      {/* Floating top nav */}
      <header className="fixed inset-x-0 top-4 z-50 mx-auto w-full max-w-6xl px-6">
        <nav className="flex items-center justify-between rounded-full border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-xl">
          <a href="#home" className="text-sm font-bold tracking-wide">Portfolio</a>
          <div className="hidden items-center gap-4 sm:flex">
            <a className="text-sm text-white/70 hover:text-white" href="#about">About</a>
            <a className="text-sm text-white/70 hover:text-white" href="#projects">Work</a>
            <a className="text-sm text-white/70 hover:text-white" href="#skills">Skills</a>
            <a className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/20" href="#contact">
              <Mail className="h-4 w-4" /> Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="w-full">
        <Hero />
        <About />
        <Projects />
        <Skills />

        {/* Contact */}
        <section id="contact" className="relative w-full bg-[#0a0d0e] py-24">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_50%_0%,rgba(99,102,241,0.12),rgba(10,13,14,0))]" />
          <div className="relative mx-auto max-w-6xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-10"
            >
              <p className="text-sm font-semibold tracking-widest text-indigo-300/80">CONTACT</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">Let's build something beautiful</h2>
              <p className="mt-3 max-w-2xl text-white/70">Share your vision — I’ll craft a digital experience that feels alive.</p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <motion.form
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                onSubmit={(e) => e.preventDefault()}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-white/70">Name</label>
                    <input className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none ring-indigo-300/30 placeholder:text-white/40 focus:ring-2" placeholder="Jane Appleseed" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/70">Email</label>
                    <input type="email" className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none ring-indigo-300/30 placeholder:text-white/40 focus:ring-2" placeholder="jane@email.com" />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-xs font-medium text-white/70">Message</label>
                  <textarea rows={5} className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none ring-indigo-300/30 placeholder:text-white/40 focus:ring-2" placeholder="Tell me about your project..." />
                </div>
                <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-indigo-400/90 px-5 py-3 text-sm font-semibold text-black transition-all hover:bg-indigo-300">
                  Send Message
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.form>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-6"
              >
                <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-indigo-300/10 blur-3xl" />
                <div className="mt-2 grid grid-cols-2 gap-4 text-sm text-white/70">
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p>hello@studio.xyz</p>
                  </div>
                  <div>
                    <p className="font-medium text-white">Focus</p>
                    <p>Web · Motion · Identity</p>
                  </div>
                  <div className="col-span-2">
                    <p className="font-medium text-white">Social</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-xl transition-colors hover:bg-white/10">
                        <Discord className="h-3.5 w-3.5" /> Discord
                      </a>
                      <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-xl transition-colors hover:bg-white/10">
                        <Instagram className="h-3.5 w-3.5" /> Instagram
                      </a>
                      <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-xl transition-colors hover:bg-white/10">
                        <Twitter className="h-3.5 w-3.5" /> X
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/60 py-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Portfolio</p>
          <a href="#home" className="hover:text-white">Back to top</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
