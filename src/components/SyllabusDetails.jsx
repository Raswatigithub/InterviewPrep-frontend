import { Bot, FileCode2, Hand, Monitor, ServerCog } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const icons = {
  Bot,
  FileCode2,
  Hand,
  Monitor,
  ServerCog,
};

export default function SyllabusDetails({ domain, domainData }) {
  if (!domain || !domainData) {
    return (
      <div className="flex h-full flex-col items-center justify-center text-center">
        <Hand className="mb-4 h-16 w-16 text-stone-300 dark:text-stone-700" aria-hidden="true" />
        <h3 className="mb-2 text-xl font-semibold text-stone-500 dark:text-stone-300">
          Select a Domain
        </h3>
        <p className="text-stone-400 dark:text-stone-500">
          Click any section on the doughnut chart to start AI practice.
        </p>
      </div>
    );
  }

  const Icon = icons[domainData.icon] || FileCode2;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={domain}
        animate={{ opacity: 1, y: 0 }}
        className="flex h-full flex-col justify-center"
        exit={{ opacity: 0, y: 5 }}
        initial={{ opacity: 0, y: 5 }}
        transition={{ duration: 0.25 }}
      >
        <div className="mb-4 flex items-center gap-3 border-b border-stone-200 pb-3 dark:border-stone-700">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm dark:bg-stone-800"
            style={{ color: domainData.color }}
          >
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>
          <h3 className="text-left text-2xl font-bold text-stone-800 dark:text-stone-100">
            {domain}
          </h3>
        </div>
        <p className="text-left text-lg leading-relaxed text-stone-700 dark:text-stone-300">
          {domainData.details}
        </p>
      </motion.div>
    </AnimatePresence>
  );
}
