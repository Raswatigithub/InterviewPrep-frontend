import { Brain, ClipboardCheck } from 'lucide-react';
import CodeReviewPanel from '../components/CodeReviewPanel';
import ConceptDemystifier from '../components/ConceptDemystifier';
import StudyPlanner from '../components/StudyPlanner';
import Tabs from '../components/Tabs';
import { usePrep } from '../context/usePrep';

export default function AIToolsPage() {
  const {
    activeTab,
    code,
    concept,
    conceptOutput,
    copyGeneratedText,
    gemini,
    handleCodeReview,
    handleExplainConcept,
    handleGeneratePlan,
    plannerDays,
    plannerHours,
    plannerOutput,
    reviewOutput,
    setActiveTab,
    setCode,
    setConcept,
    setPlannerDays,
    setPlannerHours,
  } = usePrep();

  const tabs = [
    {
      id: 'ai-review',
      label: 'AI Code Review',
      content: (
        <CodeReviewPanel
          code={code}
          isLoading={gemini.isLoading}
          onCodeChange={setCode}
          onCopy={copyGeneratedText}
          onSubmit={handleCodeReview}
          output={reviewOutput}
        />
      ),
    },
    {
      id: 'eli5',
      label: 'Concept Demystifier',
      content: (
        <ConceptDemystifier
          concept={concept}
          isLoading={gemini.isLoading('eli5')}
          onConceptChange={setConcept}
          onCopy={copyGeneratedText}
          onSubmit={handleExplainConcept}
          output={conceptOutput}
        />
      ),
    },
    {
      id: 'planner',
      label: 'Study Planner',
      content: (
        <StudyPlanner
          days={plannerDays}
          hours={plannerHours}
          isLoading={gemini.isLoading('planner')}
          onDaysChange={setPlannerDays}
          onHoursChange={setPlannerHours}
          onCopy={copyGeneratedText}
          onSubmit={handleGeneratePlan}
          output={plannerOutput}
        />
      ),
    },
    {
      id: 'mindset',
      label: 'Mindset',
      content: (
        <section className="animate-fadeIn" aria-labelledby="mindset-title">
          <h3 id="mindset-title" className="mb-4 flex items-center gap-2 text-xl font-bold text-stone-800 dark:text-stone-100">
            <Brain className="h-5 w-5 text-teal-600" aria-hidden="true" />
            Test Day Readiness
          </h3>
          <p className="max-w-2xl text-stone-600 dark:text-stone-300">
            Since external browsing is prohibited, rely on fundamental understanding.
            Prioritize clear reasoning, edge-case thinking, and explaining tradeoffs out loud
            as you work.
          </p>
        </section>
      ),
    },
  ];

  return (
    <section className="scroll-mt-8" id="action-plan-section" aria-labelledby="action-title">
      <div className="mb-6">
        <h2 id="action-title" className="flex items-center gap-2 text-2xl font-bold text-stone-800 dark:text-stone-100">
          <ClipboardCheck className="h-8 w-8 text-teal-600" aria-hidden="true" />
          AI Action Plan & Code Review
        </h2>
        <p className="mt-2 max-w-3xl leading-relaxed text-stone-600 dark:text-stone-300">
          Use AI tools to refine your coding logic. Paste practice code below to get a deep-dive
          explanation, optimization tips, or bug review.
        </p>
      </div>
      <Tabs activeTab={activeTab} onTabChange={setActiveTab} tabs={tabs} />
    </section>
  );
}
