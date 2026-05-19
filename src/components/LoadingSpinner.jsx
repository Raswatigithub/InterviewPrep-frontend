import { cn } from '../utils/cn';

export default function LoadingSpinner({ className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-block h-5 w-5 animate-spin rounded-full border-[3px] border-white/40 border-l-white',
        className,
      )}
    />
  );
}
