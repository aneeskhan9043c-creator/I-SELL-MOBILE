'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

export interface HandwritingTextProps {
  words: string[];
  className?: string;
  height?: string | number;
  interval?: number;
}

export function HandwritingText({
  words,
  className,
  interval = 3200,
}: HandwritingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!words || words.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  const currentWord = words[currentIndex] || '';

  return (
    <div className={cn('inline-block overflow-hidden py-1', className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 10, filter: 'blur(2px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -10, filter: 'blur(2px)' }}
          transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
          className="sand-shimmer-text font-black tracking-tight select-none"
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
