import api from './api';

export async function generateAiContent({ prompt, systemPrompt }) {
  const response = await api.post('/api/ai/generate', {
    prompt,
    systemPrompt,
  });

  const text = response.data?.data?.text;

  if (!text) {
    throw new Error('AI service returned an empty response.');
  }

  return text;
}
