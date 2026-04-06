'use client';
import { useEffect, useState } from 'react';

export function useMenuNavigation(length: number, onSelect?: (index: number) => void) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        setSelectedIndex((prev) => Math.min(prev + 1, length - 1));
      }

      if (e.key === 'ArrowUp') {
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      }

      if (e.key === 'Enter') {
        onSelect?.(selectedIndex);
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [length, selectedIndex, onSelect]);

  return { selectedIndex, setSelectedIndex };
}