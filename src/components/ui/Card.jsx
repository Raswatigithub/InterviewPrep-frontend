import { cn } from '../../utils/cn';

export default function Card({ as: Component = 'div', className = '', children, ...props }) {
  return (
    <Component className={cn('glass-panel rounded-2xl', className)} {...props}>
      {children}
    </Component>
  );
}
