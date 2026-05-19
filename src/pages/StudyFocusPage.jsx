import SubjectSelector from '../components/SubjectSelector';
import { usePrep } from '../context/usePrep';

export default function StudyFocusPage() {
  const { setStudyFocus, studyFocus } = usePrep();

  return (
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
  );
}
