// Variant selector: renders a group of buttons for each variant option.
// Used inside ProductInfo. Calls onSelect with the chosen variant.

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { ProductVariant } from '@/types';

interface ProductVariantsProps {
  variants: ProductVariant[];
  selectedId?: string;
  onSelect: (variant: ProductVariant | undefined) => void;
}

export default function ProductVariants({ variants, selectedId, onSelect }: ProductVariantsProps) {
  const { t } = useTranslation();
  // Group variants by optionLabel (e.g. "اللون", "الحجم")
  const groups = variants.reduce<Record<string, ProductVariant[]>>((acc, v) => {
    const label = v.optionLabel ?? t('product.chooseOption');
    if (!acc[label]) acc[label] = [];
    acc[label].push(v);
    return acc;
  }, {});

  return (
    <div className="space-y-3">
      {Object.entries(groups).map(([label, group]) => {
        const selected = group.find((v) => v.id === selectedId);
        return (
          <div key={label}>
            <p className="mb-2 text-sm font-bold text-neutral-700">
              {label}: <span className="text-primary-600">
                {selected ? selected.name : t('product.chooseOption')}
              </span>
            </p>
            <div className="flex flex-wrap gap-2">
              {group.map((variant) => {
                const isSelected = variant.id === selectedId;
                const outOfStock = variant.stock !== undefined && variant.stock <= 0;
                return (
                  <motion.button
                    key={variant.id}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onSelect(isSelected ? undefined : variant)}
                    disabled={outOfStock}
                    className={`rounded-xl border px-4 py-2 text-sm font-bold transition ${
                      isSelected
                        ? 'border-primary-600 bg-primary-600 text-white shadow-card'
                        : outOfStock
                          ? 'cursor-not-allowed border-neutral-200 bg-neutral-100 text-neutral-400'
                          : 'border-neutral-200 bg-white text-neutral-700 hover:border-primary-400 hover:bg-primary-50'
                    }`}
                  >
                    {variant.name}
                    {outOfStock && <span className="mr-1 text-xs">{t('product.variantOutOfStock')}</span>}
                  </motion.button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
