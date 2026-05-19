export const topicOptions = {
  languages: ['JavaScript', 'Python', 'Java', 'C#'],
  frontendFrameworks: ['React', 'Angular', 'Vue'],
  backendFrameworks: ['Spring Boot', '.NET', 'Django', 'Node.js'],
  coreTopics: [
    'REST APIs',
    'SQL',
    'OOP',
    'Authentication',
    'Async Programming',
    'System Design',
  ],
  difficulties: ['Beginner', 'Intermediate', 'Advanced'],
  questionTypes: ['MCQ', 'Coding', 'Debugging', 'Conceptual', 'System Design'],
};

export const defaultStudyFocus = {
  language: 'JavaScript',
  frontendFramework: 'React',
  backendFramework: 'Node.js',
  coreTopic: 'REST APIs',
  difficulty: 'Intermediate',
  questionType: 'Conceptual',
};

export function formatStudyFocus(focus) {
  return [
    focus.language,
    focus.frontendFramework,
    focus.backendFramework,
    focus.coreTopic,
    focus.difficulty,
    focus.questionType,
  ]
    .filter(Boolean)
    .join(' + ');
}
