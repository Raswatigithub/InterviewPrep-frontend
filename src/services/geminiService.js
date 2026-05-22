import { generateAiContent } from './aiApi';

export async function callGemini({
  prompt,
  systemPrompt = 'You are a senior technical interviewer.',
}) {
  return generateAiContent({ prompt, systemPrompt });
}
