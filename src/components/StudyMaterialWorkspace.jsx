import { BookOpen, CalendarRange, ClipboardList, FileQuestion, Loader2 } from 'lucide-react';
import { cn } from '../utils/cn';
import Card from './ui/Card';
import CopyButton from './ui/CopyButton';

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
  {
    id: 'study-plan',
    label: 'Study Plan',
    icon: CalendarRange,
  },
];

function MaterialPanel({ copyLabel, emptyText, heading, isLoading, onCopy, output, tone = 'teal' }) {
  const loadingTone =
    tone === 'amber'
      ? 'border-amber-200 bg-amber-50/70 dark:border-amber-900 dark:bg-amber-950/20'
      : 'border-teal-200 bg-teal-50/70 dark:border-teal-900 dark:bg-teal-950/20';
  const loadingIconTone = tone === 'amber' ? 'text-amber-600' : 'text-teal-600';

  if (isLoading) {
    return (
      <div className={cn('flex min-h-[280px] flex-col items-center justify-center rounded-xl border border-dashed p-8 text-center', loadingTone)}>
        <Loader2 className={cn('mb-4 h-9 w-9 animate-spin', loadingIconTone)} aria-hidden="true" />
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

  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-3 rounded-xl border border-stone-200 bg-stone-50/80 p-4 dark:border-stone-700 dark:bg-stone-900/70 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
            Generated Material
          </p>
          <h3 className="mt-1 text-lg font-bold text-stone-800 dark:text-stone-100">{heading}</h3>
        </div>
        <CopyButton label={copyLabel} onCopy={onCopy} />
      </div>
      <article className="output-panel max-h-[620px] overflow-y-auto rounded-xl border border-stone-200 bg-white/90 p-5 shadow-sm dark:border-stone-700 dark:bg-stone-950/80 md:p-6">
        {output}
      </article>
    </div>
  );
}

export default function StudyMaterialWorkspace({
  activeTab,
  onCopy,
  focusSummary,
  onTabChange,
  practiceQuestion,
  practiceQuestionLoading,
  questionBank,
  questionBankLoading,
  studyPlan,
  studyPlanLoading,
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
              copyLabel="Copy Question"
              emptyText="Select a syllabus domain and click Generate Practice Question."
              heading="Practice Interview Question"
              isLoading={practiceQuestionLoading}
              onCopy={() => onCopy(practiceQuestion, 'practice question')}
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
              copyLabel="Copy Bank"
              emptyText="Choose your study focus and click Generate Question Bank."
              heading="Interview Question Bank"
              isLoading={questionBankLoading}
              onCopy={() => onCopy(questionBank, 'question bank')}
              output={questionBank}
            />
          </div>
          <div
            aria-labelledby="material-tab-study-plan"
            hidden={activeTab !== 'study-plan'}
            id="material-panel-study-plan"
            role="tabpanel"
            tabIndex={0}
          >
            <MaterialPanel
              copyLabel="Copy Plan"
              emptyText="Set your days and hours, then generate a personalized study plan."
              heading="Personalized Study Plan"
              isLoading={studyPlanLoading}
              onCopy={() => onCopy(studyPlan, 'study plan')}
              output={studyPlan}
              tone="amber"
            />
          </div>
        </div>
      </Card>
    </section>
  );
}
