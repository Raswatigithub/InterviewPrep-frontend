import { BookOpen, ClipboardList, FileQuestion, Loader2 } from 'lucide-react';
import { cn } from '../utils/cn';
import Card from './ui/Card';

const materialTabs = [
  {
    id: 'practice-question',
    label: 'Practice Question',
    icon: FileQuestion,
  },
  {
    id: 'question-bank',
    label: 'Question Bank',
    icon: ClipboardList,
  },
];

function MaterialPanel({ isLoading, output, emptyText }) {
  if (isLoading) {
    return (
      <div className="flex min-h-[280px] flex-col items-center justify-center rounded-xl border border-dashed border-teal-200 bg-teal-50/70 p-8 text-center dark:border-teal-900 dark:bg-teal-950/20">
        <Loader2 className="mb-4 h-9 w-9 animate-spin text-teal-600" aria-hidden="true" />
        <h3 className="text-lg font-bold text-stone-800 dark:text-stone-100">
          Preparing your study material
        </h3>
        <p className="mt-2 max-w-md text-sm text-stone-600 dark:text-stone-400">
          The generated content will appear here as soon as the AI response is ready.
        </p>
      </div>
    );
  }

  if (!output) {
    return (
      <div className="flex min-h-[280px] flex-col items-center justify-center rounded-xl border border-dashed border-stone-300 bg-stone-50 p-8 text-center dark:border-stone-700 dark:bg-stone-950">
        <BookOpen className="mb-4 h-10 w-10 text-stone-400" aria-hidden="true" />
        <h3 className="text-lg font-bold text-stone-700 dark:text-stone-200">
          No material generated yet
        </h3>
        <p className="mt-2 max-w-md text-sm text-stone-500 dark:text-stone-400">
          {emptyText}
        </p>
      </div>
    );
  }

  return <article className="output-panel max-h-[620px] overflow-y-auto">{output}</article>;
}

export default function StudyMaterialWorkspace({
  activeTab,
  focusSummary,
  onTabChange,
  practiceQuestion,
  practiceQuestionLoading,
  questionBank,
  questionBankLoading,
  workspaceRef,
}) {
  return (
    <section
      aria-labelledby="study-material-title"
      className="scroll-mt-8"
      id="study-material-workspace"
      ref={workspaceRef}
    >
      <div className="mb-6">
        <h2 id="study-material-title" className="flex items-center gap-2 text-2xl font-bold text-stone-800 dark:text-stone-100">
          <BookOpen className="h-8 w-8 text-teal-600" aria-hidden="true" />
          Study Material Workspace
        </h2>
        <p className="mt-2 max-w-3xl leading-relaxed text-stone-600 dark:text-stone-300">
          Generated material opens here in its own focused space, separated from the setup and
          configuration controls.
        </p>
      </div>

      <Card className="overflow-hidden">
        <div className="border-b border-stone-200 bg-stone-50 p-3 dark:border-stone-700 dark:bg-stone-900">
          <div
            aria-label="Study material tabs"
            className="grid gap-2 sm:inline-grid sm:grid-cols-2"
            role="tablist"
          >
            {materialTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  aria-controls={`material-panel-${tab.id}`}
                  aria-selected={isActive}
                  className={cn(
                    'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-bold transition',
                    isActive
                      ? 'bg-teal-600 text-white shadow-sm'
                      : 'bg-white text-stone-600 hover:bg-stone-100 dark:bg-stone-950 dark:text-stone-300 dark:hover:bg-stone-800',
                  )}
                  id={`material-tab-${tab.id}`}
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  role="tab"
                  type="button"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {tab.label}
                </button>
              );
            })}
          </div>
          <p className="mt-3 text-xs font-medium text-stone-500 dark:text-stone-400">
            Current focus: {focusSummary}
          </p>
        </div>

        <div className="p-5 md:p-6">
          <div
            aria-labelledby="material-tab-practice-question"
            hidden={activeTab !== 'practice-question'}
            id="material-panel-practice-question"
            role="tabpanel"
            tabIndex={0}
          >
            <MaterialPanel
              emptyText="Select a syllabus domain and click Generate Practice Question."
              isLoading={practiceQuestionLoading}
              output={practiceQuestion}
            />
          </div>
          <div
            aria-labelledby="material-tab-question-bank"
            hidden={activeTab !== 'question-bank'}
            id="material-panel-question-bank"
            role="tabpanel"
            tabIndex={0}
          >
            <MaterialPanel
              emptyText="Choose your study focus and click Generate Question Bank."
              isLoading={questionBankLoading}
              output={questionBank}
            />
          </div>
        </div>
      </Card>
    </section>
  );
}
