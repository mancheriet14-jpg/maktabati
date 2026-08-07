// Star rating display.

import { Star } from 'lucide-react';

interface RatingProps {
  value: number;
  size?: 'sm' | 'md';
  showNumber?: boolean;
}

export default function Rating({ value, size = 'sm', showNumber = false }: RatingProps) {
  const stars = [1, 2, 3, 4, 5];
  const starSize = size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4';

  return (
    <div className="flex items-center gap-0.5">
      {stars.map((n) => (
        <Star
          key={n}
          className={`${starSize} ${
            n <= Math.round(value)
              ? 'fill-warning-500 text-warning-500'
              : 'fill-neutral-200 text-neutral-200'
          }`}
        />
      ))}
      {showNumber && (
        <span className="mr-1 text-xs font-medium text-neutral-500">
          {value.toFixed(1)}
        </span>
      )}
    </div>
  );
}
