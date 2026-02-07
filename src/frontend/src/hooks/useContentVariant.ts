import { useMemo } from 'react';
import { contentVariants, defaultVariant, type ContentVariant } from '../content/roseDayContent';

export function useContentVariant(): ContentVariant {
  const variant = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const variantParam = params.get('variant');
    
    if (variantParam && variantParam in contentVariants) {
      return variantParam;
    }
    
    return defaultVariant;
  }, []);

  return contentVariants[variant];
}
