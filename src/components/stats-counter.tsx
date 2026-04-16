'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface StatsCounterProps {
  value: string; // e.g. "$2B+", "34", "<5 min"
  label: string;
}

export default function StatsCounter({ value, label }: StatsCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState<string>(value);

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric part from value
    const numericMatch = value.match(/\d+(\.\d+)?/);
    if (!numericMatch) {
      // No numeric part, just display as is
      setDisplayValue(value);
      return;
    }

    const targetNumber = parseFloat(numericMatch[0]);
    const prefix = value.substring(0, numericMatch.index);
    const suffix = value.substring((numericMatch.index || 0) + numericMatch[0].length);

    // Determine if it's a decimal number
    const isDecimal = numericMatch[0].includes('.');
    const decimals = isDecimal ? numericMatch[0].split('.')[1].length : 0;

    const duration = 2000; // 2 seconds
    const steps = 60; // 60 frames
    const increment = targetNumber / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentValue = Math.min(currentStep * increment, targetNumber);
      const formattedValue = isDecimal
        ? currentValue.toFixed(decimals)
        : Math.floor(currentValue).toString();

      setDisplayValue(`${prefix}${formattedValue}${suffix}`);

      if (currentStep >= steps) {
        clearInterval(timer);
        setDisplayValue(value); // Ensure final value matches exactly
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl sm:text-3xl font-bold gradient-text">
        {displayValue}
      </div>
      <div className="mt-1 text-sm text-navy-400">{label}</div>
    </div>
  );
}
