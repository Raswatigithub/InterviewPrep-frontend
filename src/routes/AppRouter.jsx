import { Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import AIToolsPage from '../pages/AIToolsPage';
import ChecklistPage from '../pages/ChecklistPage';
import MaterialsPage from '../pages/MaterialsPage';
import QuestionBankPage from '../pages/QuestionBankPage';
import StudyFocusPage from '../pages/StudyFocusPage';
import SyllabusPage from '../pages/SyllabusPage';

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate replace to="/study-focus" />} />
        <Route path="study-focus" element={<StudyFocusPage />} />
        <Route path="question-bank" element={<QuestionBankPage />} />
        <Route path="materials" element={<MaterialsPage />} />
        <Route path="syllabus" element={<SyllabusPage />} />
        <Route path="ai-tools" element={<AIToolsPage />} />
        <Route path="checklist" element={<ChecklistPage />} />
        <Route path="*" element={<Navigate replace to="/study-focus" />} />
      </Route>
    </Routes>
  );
}
