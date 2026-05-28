import SubjectSelector from '../components/SubjectSelector';
// import WorkspaceSimulator from '../components/WorkspaceSimulator';
import { usePrep } from '../context/usePrep';

export default function StudyFocusPage() {
  const { setStudyFocus, studyFocus } = usePrep();

  return (
    <div className="space-y-12">
      <SubjectSelector
        focus={studyFocus}
        onChange={(field, value) =>
          setStudyFocus((current) => ({
            ...current,
            [field]: value,
          }))
        }
        onReset={setStudyFocus}
      />
      {/* <WorkspaceSimulator /> */}
    </div>
  );
}
