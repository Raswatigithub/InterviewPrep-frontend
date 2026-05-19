import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import StudyMaterialWorkspace from '../components/StudyMaterialWorkspace';
import { usePrep } from '../context/usePrep';

const validTabs = ['practice-question', 'question-bank'];

export default function MaterialsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    gemini,
    questionBankOutput,
    questionOutput,
    studyFocusSummary,
  } = usePrep();
  const tabParam = searchParams.get('tab');
  const activeTab = validTabs.includes(tabParam) ? tabParam : 'practice-question';

  useEffect(() => {
    if (!validTabs.includes(tabParam)) {
      setSearchParams({ tab: 'practice-question' }, { replace: true });
    }
  }, [setSearchParams, tabParam]);

  return (
    <StudyMaterialWorkspace
      activeTab={activeTab}
      focusSummary={studyFocusSummary}
      onTabChange={(nextTab) => setSearchParams({ tab: nextTab })}
      practiceQuestion={questionOutput}
      practiceQuestionLoading={gemini.isLoading('question')}
      questionBank={questionBankOutput}
      questionBankLoading={gemini.isLoading('question-bank')}
    />
  );
}
