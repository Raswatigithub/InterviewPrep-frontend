import { Boxes, Code2, Layers3, MousePointer2, Orbit, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SplineShowcase() {
  return (
    <section className="mx-auto mt-8 max-w-6xl px-4" aria-label="Interactive study command center">
      <div className="grid overflow-hidden rounded-2xl border border-stone-200 bg-stone-950 text-white shadow-soft dark:border-stone-800 lg:grid-cols-[1fr_1.35fr]">
        <div className="flex flex-col justify-center p-6 md:p-8">
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-teal-300">
            <Layers3 className="h-4 w-4" aria-hidden="true" />
            Native 3D-Inspired Workspace
          </p>
          <h2 className="text-2xl font-bold md:text-3xl">
            Generate material in dedicated tabs, then study without clutter.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-stone-300 md:text-base">
            Use the selectors to define your stack, generate focused material, and review each
            output in a separate workspace built for reading and practice.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {['Layered UI', 'Motion', 'Glass Panels'].map((tag) => (
              <span
                className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold text-stone-200"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="min-h-[260px] border-t border-stone-800 bg-stone-900 lg:border-l lg:border-t-0">
          <div className="relative flex h-full min-h-[320px] items-center justify-center overflow-hidden p-6 md:min-h-[380px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_22%,rgba(45,212,191,0.22),transparent_30%),radial-gradient(circle_at_82%_68%,rgba(99,102,241,0.22),transparent_28%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,184,166,0.12)_1px,transparent_1px),linear-gradient(rgba(20,184,166,0.12)_1px,transparent_1px)] bg-[size:34px_34px]" />

            <motion.div
              animate={{ rotateX: [58, 62, 58], rotateZ: [-10, -6, -10] }}
              className="relative h-[250px] w-[250px] sm:h-[300px] sm:w-[300px]"
              style={{ transformStyle: 'preserve-3d' }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="absolute inset-0 rounded-[32px] border border-teal-300/40 bg-teal-300/10 shadow-[0_30px_90px_rgba(20,184,166,0.25)] backdrop-blur" />
              <div className="absolute inset-8 rounded-[28px] border border-white/15 bg-white/10 backdrop-blur-md" />
              <motion.div
                animate={{ y: [0, -14, 0] }}
                className="absolute left-8 top-8 w-44 rounded-2xl border border-white/15 bg-white/15 p-4 shadow-2xl backdrop-blur-md sm:w-52"
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-teal-300 text-stone-950">
                  <Boxes className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="text-sm font-black">Question Bank</p>
                <p className="mt-1 text-xs text-stone-300">8 guided interview prompts</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                className="absolute bottom-10 right-4 w-44 rounded-2xl border border-white/15 bg-stone-950/50 p-4 shadow-2xl backdrop-blur-md sm:right-0 sm:w-52"
                transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-300 text-stone-950">
                  <Code2 className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="text-sm font-black">Practice Question</p>
                <p className="mt-1 text-xs text-stone-300">Focused exam-style material</p>
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                className="absolute -right-3 top-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-200/30 bg-amber-200/20 backdrop-blur-md"
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Sparkles className="h-6 w-6 text-amber-200" aria-hidden="true" />
              </motion.div>

              <motion.div
                animate={{ x: [0, 14, 0], y: [0, -12, 0] }}
                className="absolute -left-2 bottom-16 flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-bold backdrop-blur"
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <MousePointer2 className="h-4 w-4 text-teal-200" aria-hidden="true" />
                Select & Study
              </motion.div>
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              className="absolute right-8 top-8 hidden h-20 w-20 items-center justify-center rounded-full border border-dashed border-teal-300/30 text-teal-200 sm:flex"
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            >
              <Orbit className="h-6 w-6" aria-hidden="true" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
