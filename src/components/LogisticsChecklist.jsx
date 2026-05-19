import { Check, Eye, Laptop, UsersRound, WifiOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

const icons = {
  Eye,
  Laptop,
  UsersRound,
  WifiOff,
};

export default function LogisticsChecklist({ items, checkedItems, onToggle }) {
  return (
    <section className="scroll-mt-8" id="logistics-section" aria-labelledby="logistics-title">
      <h2 id="logistics-title" className="mb-6 text-2xl font-bold text-stone-800 dark:text-stone-100">
        Environment Checklist
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const Icon = icons[item.icon] || Check;
          const isReady = Boolean(checkedItems[item.id]);

          return (
            <motion.button
              aria-pressed={isReady}
              className={cn(
                'group rounded-xl border border-l-4 bg-white p-5 text-left shadow-sm transition-all duration-200 hover:translate-x-1 hover:bg-stone-50 dark:border-stone-700 dark:bg-stone-900 dark:hover:bg-stone-800',
                isReady
                  ? 'border-l-teal-600 bg-teal-50 dark:bg-teal-950/30'
                  : 'border-l-stone-300 dark:border-l-stone-700',
              )}
              key={item.id}
              onClick={() => onToggle(item.id)}
              type="button"
              whileTap={{ scale: 0.99 }}
            >
              <div className="mb-2 flex items-center justify-between gap-3">
                <h3 className="flex items-center gap-2 font-bold text-stone-800 dark:text-stone-100">
                  <Icon className="h-5 w-5 text-teal-600" aria-hidden="true" />
                  {item.title}
                </h3>
                <span
                  className={cn(
                    'flex h-5 w-5 items-center justify-center rounded-full border-2 transition',
                    isReady ? 'border-teal-500 bg-teal-500 text-white' : 'border-stone-300',
                  )}
                >
                  {isReady ? <Check className="h-3 w-3" aria-hidden="true" /> : null}
                </span>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-400">{item.description}</p>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
