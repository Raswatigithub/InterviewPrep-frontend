# Full-Stack Exam Prep

A production-ready React + Vite conversion of the original single-file exam preparation portal. It preserves the interactive syllabus chart, Gemini-powered tutoring features, tabs, code review actions, study planner, and environment checklist.

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Chart.js + react-chartjs-2
- Framer Motion
- Gemini API via `VITE_GEMINI_API_KEY`

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

Add your Gemini API key to `.env`:

```bash
VITE_GEMINI_API_KEY=your_api_key_here
```

The visual hero is built natively with React, Tailwind, and Framer Motion. No Spline key or embed is required.

## Scripts

```bash
npm run dev      # Start local development server
npm run build    # Build production assets
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── SyllabusChart.jsx
│   ├── SyllabusDetails.jsx
│   ├── AIQuestionGenerator.jsx
│   ├── CodeReviewPanel.jsx
│   ├── ConceptDemystifier.jsx
│   ├── StudyPlanner.jsx
│   ├── LogisticsChecklist.jsx
│   ├── Tabs.jsx
│   ├── LoadingSpinner.jsx
│   └── ui/
├── data/
│   ├── syllabusData.js
│   └── logisticsData.js
├── hooks/
│   ├── useGemini.js
│   └── useLocalStorage.js
├── context/
│   ├── PrepContext.jsx
│   ├── PrepContextCore.js
│   └── usePrep.js
├── layouts/
│   └── AppLayout.jsx
├── pages/
│   ├── AIToolsPage.jsx
│   ├── ChecklistPage.jsx
│   ├── MaterialsPage.jsx
│   ├── QuestionBankPage.jsx
│   ├── StudyFocusPage.jsx
│   └── SyllabusPage.jsx
├── routes/
│   └── AppRouter.jsx
├── services/
│   └── geminiService.js
├── utils/
│   └── cn.js
├── App.jsx
├── main.jsx
└── index.css
```

## Routes

```text
/study-focus
/question-bank
/materials
/syllabus
/ai-tools
/checklist
```

`App.jsx` only mounts `BrowserRouter`, the shared `PrepProvider`, and `AppRouter`. Feature sections live in dedicated page components.
