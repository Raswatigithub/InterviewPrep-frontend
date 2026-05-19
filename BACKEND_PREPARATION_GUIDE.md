# Backend Preparation Guide

## When This Project Needs a Backend

You can keep the first version frontend-only while building:

- Custom Subject & Topic Selector
- AI Interview Question Bank Generator
- Local practice question saving
- Local question library filters
- Practice session mode stored in localStorage

You should add a backend before building production versions of:

- GitHub export
- User authentication
- Shared developer review mode
- Team-visible question banks
- Database-backed progress tracking
- Admin roles
- Rate limiting and audit logs
- Secure Gemini API usage

## Why Backend Becomes Necessary

Frontend environment variables in Vite are visible in the browser bundle. That is acceptable for local demos, but production API keys and GitHub tokens must not live in client-side code.

A backend protects:

- Gemini API key
- GitHub access tokens
- User data
- Saved question banks
- Reviewer decisions
- Usage limits

## Recommended Backend Responsibilities

- Receive AI generation requests from the frontend
- Add server-side prompt rules and validation
- Call Gemini securely
- Save generated questions to a database
- Connect to GitHub securely
- Create commits or pull requests
- Manage user login
- Enforce roles: student, developer, admin
- Rate limit expensive AI requests
- Log important actions for review

## Suggested First Backend Stack

For your current React + Vite project, the simplest backend path is:

- Node.js
- Express
- dotenv
- Gemini SDK or REST API
- GitHub REST API or Octokit
- PostgreSQL later, or Supabase if you want faster setup

## First Backend Endpoints

```text
POST /api/generate-question-bank
POST /api/questions
GET /api/questions
PATCH /api/questions/:id/status
POST /api/github/export
```

## Recommended Build Timing

Add the backend after these frontend features are stable:

1. Custom Subject & Topic Selector
2. AI Interview Question Bank Generator
3. Save Questions Locally
4. Question Library UI

Then move Gemini calls from the frontend service to the backend and add GitHub export safely.
