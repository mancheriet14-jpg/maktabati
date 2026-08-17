// Toast notification system using Zustand.
// Provides success, error, and info toasts with auto-dismiss.

import { create } from 'zustand';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, Info, X } from 'lucide-react';
import { useEffect } from 'react';

type ToastType = 'success' | 'error' | 'info';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastState {
  toasts: Toast[];
  addToast: (message: string, type: ToastType) => void;
  removeToast: (id: string) => void;
}

export const useToastStore = create<ToastState>((set) => ({
  toasts: [],
  addToast: (message, type) => {
    const id = Math.random().toString(36).slice(2);
    set((state) => {
      const next = [...state.toasts, { id, message, type }];
      return { toasts: next.slice(-4) };
    });
  },
  removeToast: (id) =>
    set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) })),
}));

export function toast(message: string, type: ToastType = 'success') {
  useToastStore.getState().addToast(message, type);
}

function ToastItem({ toast: t }: { toast: Toast }) {
  const removeToast = useToastStore((s) => s.removeToast);

  useEffect(() => {
    const timer = setTimeout(() => removeToast(t.id), 3000);
    return () => clearTimeout(timer);
  }, [t.id, removeToast]);

  const icons = {
    success: <CheckCircle2 className="h-8 w-8 text-success-500" />,
    error: <XCircle className="h-8 w-8 text-error-500" />,
    info: <Info className="h-8 w-8 text-primary-500" />,
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 50, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 50, scale: 0.9 }}
      className="flex w-[min(92vw,30rem)] items-center gap-4 rounded-2xl bg-white px-6 py-5 shadow-float"
    >
      {icons[t.type]}
      <span className="text-base font-semibold text-neutral-700">{t.message}</span>
      <button
        onClick={() => removeToast(t.id)}
        className="text-neutral-400 hover:text-neutral-600"
      >
        <X className="h-6 w-6" />
      </button>
    </motion.div>
  );
}

export function ToastContainer() {
  const toasts = useToastStore((s) => s.toasts);

  return (
    <div className="fixed bottom-4 left-4 z-[100] flex flex-col gap-2">
      <AnimatePresence>
        {toasts.map((t) => (
          <ToastItem key={t.id} toast={t} />
        ))}
      </AnimatePresence>
    </div>
  );
}
