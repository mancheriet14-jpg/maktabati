// Reusable category card: large square image, thin divider, name below.
// Used for sub-categories, brands, and bag collections.
// Unified design across the entire site.

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CategoryCardProps {
  to: string;
  image: string;
  name: string;
  active?: boolean;
  onClick?: () => void;
}

export default function CategoryCard({ to, image, name, active, onClick }: CategoryCardProps) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`group flex w-32 shrink-0 flex-col overflow-hidden rounded-2xl border bg-white text-center shadow-soft transition hover:-translate-y-1 hover:shadow-card sm:w-40 ${
        active
          ? 'border-primary-600 ring-2 ring-primary-200'
          : 'border-neutral-100 hover:border-primary-200'
      }`}
    >
      <div className="relative aspect-square w-full overflow-hidden bg-neutral-50">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>
      <div className="border-t border-neutral-100 px-2 py-2.5">
        <span className={`text-sm font-bold ${active ? 'text-primary-700' : 'text-neutral-700'}`}>
          {name}
        </span>
      </div>
    </Link>
  );
}

interface SelectableCardProps {
  image: string;
  name: string;
  active?: boolean;
  onClick: () => void;
}

export function SelectableCard({ image, name, active, onClick }: SelectableCardProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`group flex w-32 shrink-0 flex-col overflow-hidden rounded-2xl border bg-white text-center shadow-soft transition-colors duration-300 ease-in-out hover:-translate-y-1 focus:outline-none sm:w-40 ${
        active
          ? 'border-primary-600 !shadow-brand-glow'
          : 'border-neutral-100 hover:border-primary-200 hover:shadow-card'
      }`}
    >
      <div className="relative aspect-square w-full overflow-hidden bg-neutral-50">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className={`h-full w-full object-cover transition duration-500 group-hover:scale-110 ${active ? 'scale-110' : ''}`}
        />
      </div>
      <div className="border-t border-neutral-100 px-2 py-2.5">
        <span className={`text-sm font-bold transition-colors duration-300 ${active ? 'text-primary-700' : 'text-neutral-700'}`}>
          {name}
        </span>
      </div>
    </motion.button>
  );
}
