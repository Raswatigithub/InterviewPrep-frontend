const GEMINI_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models';
const DEFAULT_MODEL = 'gemini-2.5-flash';
const wait = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));

export async function callGemini({
  prompt,
  systemPrompt = 'You are a senior technical interviewer.',
  retries = 3,
}) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const model = import.meta.env.VITE_GEMINI_MODEL || DEFAULT_MODEL;

  if (!apiKey) {
    throw new Error('Missing VITE_GEMINI_API_KEY. Add it to your .env file and restart Vite.');
  }

  let lastError;

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      const response = await fetch(`${GEMINI_ENDPOINT}/${model}:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          systemInstruction: { parts: [{ text: systemPrompt }] },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || `Gemini request failed with ${response.status}.`);
      }

      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!text) {
        throw new Error('Gemini returned an empty response.');
      }

      return text;
    } catch (error) {
      lastError = error;

      if (attempt < retries) {
        await wait(800 * 2 ** attempt);
      }
    }
  }

  throw lastError;
}
