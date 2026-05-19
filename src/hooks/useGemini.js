import { useCallback, useState } from 'react';
import { callGemini } from '../services/geminiService';

export function useGemini() {
  const [loadingKey, setLoadingKey] = useState(null);
  const [error, setError] = useState('');

  const generate = useCallback(async ({ key, prompt, systemPrompt }) => {
    setLoadingKey(key);
    setError('');

    try {
      return await callGemini({ prompt, systemPrompt });
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unable to reach the AI tutor.';
      setError(message);
      throw new Error(message);
    } finally {
      setLoadingKey(null);
    }
  }, []);

  const clearError = useCallback(() => setError(''), []);

  return {
    clearError,
    error,
    generate,
    isLoading: (key) => loadingKey === key,
    loadingKey,
  };
}
