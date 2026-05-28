import { Moon, Sun } from 'lucide-react';
import Button from './ui/Button';

export default function Header({ darkMode, onToggleDarkMode, readyCount, totalCount }) {
  const status = readyCount === totalCount ? 'Ready' : 'In Preparation';

  return (
    <header className="bg-slate-950/40 border border-white/5 backdrop-blur-md px-6 py-8 rounded-2xl mx-4 mt-4 shadow-xl">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <h1 className="mb-2 text-3xl font-black tracking-tight md:text-4xl bg-gradient-to-r from-teal-200 via-teal-300 to-indigo-300 bg-clip-text text-transparent">
            Interview Prep AI Workstation
          </h1>
          <p className="max-w-xl text-sm text-stone-400 font-medium">
            Master core syllabus competencies, generate custom interview banks, and review your solutions.
          </p>
        </div>

        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <Button
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="min-w-12 px-3 border border-white/5 dark:bg-white/5 dark:text-stone-300 dark:hover:bg-white/10"
            icon={darkMode ? Sun : Moon}
            onClick={onToggleDarkMode}
            variant="ghost"
          />
          <div className="min-w-[200px] rounded-xl border border-white/5 bg-slate-900/60 p-4 text-center backdrop-blur-md shadow-lg shadow-black/20">
            <div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-stone-500">
              Syllabus Status
            </div>
            <div
              className={
                status === 'Ready'
                  ? 'text-xl font-black text-teal-400 drop-shadow-[0_2px_8px_rgba(45,212,191,0.2)] animate-pulse'
                  : 'text-xl font-black text-amber-400'
              }
            >
              {status}
            </div>
            <p className="mt-1 text-[10px] text-stone-500 font-mono">
              {readyCount}/{totalCount} checkpoints complete
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
