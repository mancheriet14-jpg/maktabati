// Language selector dropdown — shown in the header between wishlist and profile.
// Persists choice via the i18n module's localStorage handler.

import { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LANGUAGES, type AppLanguage } from '@/i18n';

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = (i18n.language as AppLanguage) || 'ar';

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const select = (code: AppLanguage) => {
    if (code === current) {
      setOpen(false);
      return;
    }
    i18n.changeLanguage(code);
    setOpen(false);
    window.location.reload();
  };

  const currentLabel = LANGUAGES.find((l) => l.code === current)?.label ?? t('language.ar');

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-600 transition hover:bg-neutral-100"
        aria-label={currentLabel}
      >
        <Globe className="h-5 w-5" />
      </button>
      <AnimatePresenceDropdown open={open} current={current} currentLabel={currentLabel} onSelect={select} />
    </div>
  );
}

function AnimatePresenceDropdown({
  open,
  current,
  currentLabel,
  onSelect,
}: {
  open: boolean;
  current: AppLanguage;
  currentLabel: string;
  onSelect: (code: AppLanguage) => void;
}) {
  if (!open) return null;
  return (
    <div className="absolute top-full left-1/2 z-50 mt-2 w-40 -translate-x-1/2 overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-float">
      <div className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-neutral-400">
        <Globe className="h-3.5 w-3.5" />
        {currentLabel}
        <ChevronDown className="h-3 w-3" />
      </div>
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onSelect(lang.code)}
          className={`flex w-full items-center justify-between px-3 py-2.5 text-sm transition ${
            current === lang.code
              ? 'bg-primary-50 font-bold text-primary-700'
              : 'text-neutral-700 hover:bg-neutral-50'
          }`}
        >
          {lang.label}
          {current === lang.code && <Check className="h-4 w-4 text-primary-600" />}
        </button>
      ))}
    </div>
  );
}
