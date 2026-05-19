import { CalendarDays } from 'lucide-react';
import Button from './ui/Button';

export default function StudyPlanner({
  days,
  hours,
  isLoading,
  onDaysChange,
  onHoursChange,
  onSubmit,
  output,
}) {
  return (
    <section className="animate-fadeIn" aria-labelledby="planner-title">
      <h3 id="planner-title" className="mb-4 flex items-center gap-2 text-xl font-bold text-stone-800 dark:text-stone-100">
        <CalendarDays className="h-5 w-5 text-amber-600" aria-hidden="true" />
        Personalized Study Planner
      </h3>
      <p className="mb-4 text-stone-600 dark:text-stone-300">
        Generate a custom schedule based on your timeline and daily availability.
      </p>
      <div className="mb-4 grid gap-4 sm:grid-cols-2">
        <input
          aria-label="Days until exam"
          className="form-field p-3"
          min="1"
          onChange={(event) => onDaysChange(event.target.value)}
          placeholder="Days until exam (for example 14)"
          type="number"
          value={days}
        />
        <input
          aria-label="Hours per day"
          className="form-field p-3"
          min="1"
          onChange={(event) => onHoursChange(event.target.value)}
          placeholder="Hours per day (for example 3)"
          type="number"
          value={hours}
        />
      </div>
      <Button className="w-full" icon={CalendarDays} isLoading={isLoading} onClick={onSubmit} variant="amber">
        Generate Schedule
      </Button>
      {output ? (
        <div className="output-panel mt-4">{output}</div>
      ) : (
        <p className="mt-4 rounded-lg border border-dashed border-stone-300 p-5 text-sm text-stone-500 dark:border-stone-700 dark:text-stone-400">
          Fill in your availability to generate a focused plan.
        </p>
      )}
    </section>
  );
}
