import { Moon, Sun } from 'lucide-react';
import Button from './ui/Button';

export default function Header({ darkMode, onToggleDarkMode, readyCount, totalCount }) {
  const status = readyCount === totalCount ? 'Ready' : 'In Preparation';

  return (
    <header className="bg-stone-900 px-4 py-10 text-stone-50 shadow-md sm:py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <h1 className="mb-2 text-3xl font-bold tracking-tight md:text-5xl">
            Full-Stack Interview Prep
          </h1>
          <p className="max-w-xl text-lg text-stone-400">
            AI-powered interactive guide to mastering core competencies and executing your
            action plan.
          </p>
        </div>

        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <Button
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="min-w-12 px-3"
            icon={darkMode ? Sun : Moon}
            onClick={onToggleDarkMode}
            variant="ghost"
          />
          <div className="min-w-[200px] rounded-xl border border-stone-700 bg-stone-800 p-4 text-center">
            <div className="mb-1 text-sm font-semibold uppercase tracking-wider text-stone-400">
              Status
            </div>
            <div
              className={
                status === 'Ready'
                  ? 'text-2xl font-bold text-teal-400'
                  : 'text-2xl font-bold text-amber-500'
              }
            >
              {status}
            </div>
            <p className="mt-1 text-xs text-stone-500">
              {readyCount}/{totalCount} checks complete
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
