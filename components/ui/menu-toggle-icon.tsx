import React from 'react';
import { cn } from '@/lib/utils';

export interface MenuToggleIconProps extends React.SVGProps<SVGSVGElement> {
  open: boolean;
  duration?: number;
  className?: string;
}

export function MenuToggleIcon({
  open,
  duration = 300,
  className,
  ...props
}: MenuToggleIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('transition-all', className)}
      {...props}
    >
      <line
        x1="4"
        y1="6"
        x2="20"
        y2="6"
        className={cn('transition-transform origin-center', {
          'translate-y-[6px] rotate-45': open,
        })}
        style={{ transitionDuration: `${duration}ms` }}
      />
      <line
        x1="4"
        y1="12"
        x2="20"
        y2="12"
        className={cn('transition-opacity', {
          'opacity-0': open,
        })}
        style={{ transitionDuration: `${duration}ms` }}
      />
      <line
        x1="4"
        y1="18"
        x2="20"
        y2="18"
        className={cn('transition-transform origin-center', {
          '-translate-y-[6px] -rotate-45': open,
        })}
        style={{ transitionDuration: `${duration}ms` }}
      />
    </svg>
  );
}
