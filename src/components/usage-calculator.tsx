'use client';
import { useState } from 'react';
import { SERVICE_PRICING } from '@/lib/constants';

export function UsageCalculator() {
  const [properties, setProperties] = useState(100);
  const [frequency, setFrequency] = useState<'monthly' | 'weekly' | 'daily'>('monthly');

  const multiplier = frequency === 'daily' ? 30 : frequency === 'weekly' ? 4 : 1;
  const avgPrice = SERVICE_PRICING.reduce((sum, s) => sum + parseFloat(s.price.replace('$', '')), 0) / SERVICE_PRICING.length;
  const estimatedCost = (properties * multiplier * avgPrice * 2).toFixed(2); // assume 2 services avg

  return (
    <div className="glass rounded-xl p-8 border border-brand-500/20">
      <h3 className="text-xl font-bold text-white text-center mb-6">
        Estimate Your Monthly Cost
      </h3>

      {/* Properties Slider */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-navy-300 mb-3">
          Number of Properties: <span className="text-brand-400 font-bold">{properties}</span>
        </label>
        <input
          type="range"
          min="1"
          max="10000"
          value={properties}
          onChange={(e) => setProperties(Number(e.target.value))}
          className="w-full h-2 bg-navy-800 rounded-lg appearance-none cursor-pointer slider-thumb"
        />
        <div className="flex justify-between text-xs text-navy-500 mt-1">
          <span>1</span>
          <span>10,000</span>
        </div>
      </div>

      {/* Frequency Select */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-navy-300 mb-3">
          Analysis Frequency
        </label>
        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value as 'monthly' | 'weekly' | 'daily')}
          className="w-full px-4 py-3 rounded-lg bg-navy-800 text-white border border-navy-700 focus:border-brand-500 focus:outline-none transition-colors"
        >
          <option value="monthly">Monthly</option>
          <option value="weekly">Weekly</option>
          <option value="daily">Daily</option>
        </select>
      </div>

      {/* Result Card */}
      <div className="rounded-lg bg-gradient-to-br from-brand-500/20 to-brand-600/10 border border-brand-500/30 p-6 text-center">
        <div className="text-sm text-brand-400 font-medium mb-2">
          Estimated Monthly Cost
        </div>
        <div className="text-4xl font-bold gradient-text">
          ${estimatedCost}
        </div>
        <div className="text-xs text-navy-400 mt-3">
          Based on {properties} properties analyzed {frequency} × 2 services average
        </div>
      </div>

      <div className="mt-4 text-xs text-center text-navy-500">
        Actual costs depend on specific services used. See pricing table below.
      </div>
    </div>
  );
}
