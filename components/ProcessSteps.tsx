
import React from 'react';
import { DCP_MATH_STEPS } from '../constants.tsx';

export const ProcessSteps: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-blue-400">核心算法逻辑：暗原色先验 (DCP)</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {DCP_MATH_STEPS.map((step, idx) => (
          <div key={idx} className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 hover:border-blue-500/50 transition-colors">
            <span className="text-xs font-bold text-zinc-500 uppercase">步骤 {idx + 1}</span>
            <h4 className="font-medium mt-1 mb-2">{step.title}</h4>
            <div className="bg-zinc-950 p-2 rounded mb-2 overflow-x-auto">
              <code className="text-blue-300 text-sm whitespace-nowrap">{step.formula}</code>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
