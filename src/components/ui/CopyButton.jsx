import { Check, Copy } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '../../utils/cn';

export default function CopyButton({
  className = '',
  disabled = false,
  label = 'Copy',
  onCopy,
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return undefined;
    }

    const timeout = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  const handleClick = async () => {
    const didCopy = await onCopy?.();

    if (didCopy) {
      setCopied(true);
    }
  };

  return (
    <button
      aria-label={copied ? `${label} copied` : label}
      className={cn(
        'inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-3 py-2 text-xs font-bold text-stone-700 transition hover:bg-stone-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-200 dark:hover:bg-stone-900',
        className,
      )}
      disabled={disabled}
      onClick={handleClick}
      type="button"
    >
      {copied ? <Check className="h-4 w-4 text-teal-600" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
      {copied ? 'Copied' : label}
    </button>
  );
}
