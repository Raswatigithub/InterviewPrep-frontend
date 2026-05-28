import { cn } from '../utils/cn';

export default function Tabs({ activeTab, tabs, onTabChange }) {
  const handleKeyDown = (event, index) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;

    event.preventDefault();
    let nextIndex = index;

    if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = tabs.length - 1;

    onTabChange(tabs[nextIndex].id);
    requestAnimationFrame(() => {
      document.getElementById(`tab-${tabs[nextIndex].id}`)?.focus();
    });
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white/90 shadow-soft backdrop-blur-md dark:border-stone-700 dark:bg-stone-900/85">
      <div
        aria-label="AI action plan tools"
        className="flex overflow-x-auto border-b border-stone-200 bg-stone-50 px-3 pt-3 dark:border-stone-700 dark:bg-stone-900"
        role="tablist"
      >
        {tabs.map((tab, index) => (
          <button
            aria-controls={`panel-${tab.id}`}
            aria-selected={activeTab === tab.id}
            className={cn(
              'mb-2 mr-2 min-h-11 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition',
              activeTab === tab.id
                ? 'bg-teal-600 text-white shadow-md shadow-teal-600/20'
                : 'bg-white text-stone-600 hover:bg-stone-100 dark:bg-stone-950 dark:text-stone-300 dark:hover:bg-stone-800',
            )}
            id={`tab-${tab.id}`}
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            role="tab"
            tabIndex={activeTab === tab.id ? 0 : -1}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="min-h-[300px] bg-gradient-to-b from-white/30 to-transparent p-5 md:p-8 dark:from-stone-900/20">
        {tabs.map((tab) => (
          <div
            aria-labelledby={`tab-${tab.id}`}
            hidden={activeTab !== tab.id}
            id={`panel-${tab.id}`}
            key={tab.id}
            role="tabpanel"
            tabIndex={0}
          >
            {activeTab === tab.id ? tab.content : null}
          </div>
        ))}
      </div>
    </div>
  );
}
