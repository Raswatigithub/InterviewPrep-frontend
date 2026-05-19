import { useContext } from 'react';
import { PrepContext } from './PrepContextCore';

export function usePrep() {
  const context = useContext(PrepContext);

  if (!context) {
    throw new Error('usePrep must be used inside PrepProvider.');
  }

  return context;
}
