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
    <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white/85 shadow-soft backdrop-blur-md dark:border-stone-700 dark:bg-stone-900/80">
      <div
        aria-label="AI action plan tools"
        className="flex overflow-x-auto border-b border-stone-200 bg-stone-50 px-2 pt-2 dark:border-stone-700 dark:bg-stone-900"
        role="tablist"
      >
        {tabs.map((tab, index) => (
          <button
            aria-controls={`panel-${tab.id}`}
            aria-selected={activeTab === tab.id}
            className={cn(
              'min-h-12 whitespace-nowrap border-b-2 border-transparent px-5 py-3 text-sm font-medium text-stone-600 transition sm:px-6 dark:text-stone-300',
              activeTab === tab.id && 'border-teal-600 font-semibold text-teal-700 dark:text-teal-400',
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
      <div className="min-h-[300px] p-6 md:p-8">
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
