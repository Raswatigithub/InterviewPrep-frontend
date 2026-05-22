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

Add your Gemini API config to `.env`:

```bash
VITE_GEMINI_API_KEY=your_api_key_here
VITE_GEMINI_MODEL=gemini-2.5-flash
```

For stronger reasoning, you can switch the model to:

```bash
VITE_GEMINI_MODEL=gemini-2.5-pro
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

`App.jsx` only mounts `HashRouter`, the shared `PrepProvider`, and `AppRouter`. Feature sections live in dedicated page components. `HashRouter` is used so the routed app deploys cleanly on GitHub Pages without server-side rewrite rules.

## GitHub Actions Secrets

For the GitHub Pages workflow in [.github/workflows/deploy.yml](/C:/Users/admin/Documents/Practics-website/.github/workflows/deploy.yml), add:

- Repository secret: `VITE_GEMINI_API_KEY`
- Repository variable: `VITE_GEMINI_MODEL`
  Example: `gemini-2.5-flash` or `gemini-2.5-pro`

Important:

- `GITHUB_TOKEN` is already provided automatically by GitHub Actions for deployment. You do not need to create it manually.
- `VITE_` variables are bundled into the frontend. That means the Gemini key is exposed in the deployed client app.
- For a real production-secure setup, move Gemini requests to a backend and keep the API key server-side only.

## Backend Planning

The login-first backend plan is documented in [BACKEND_PREPARATION_GUIDE.md](/C:/Users/admin/Documents/Practics-website/BACKEND_PREPARATION_GUIDE.md).

The backend CI/CD setup guide is documented in [BACKEND_CICD_GUIDE.md](/C:/Users/admin/Documents/Practics-website/BACKEND_CICD_GUIDE.md).

The Spring Boot backend module lives in [backend/README.md](/C:/Users/admin/Documents/Practics-website/backend/README.md).
