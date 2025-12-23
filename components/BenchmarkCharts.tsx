
import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line 
} from 'recharts';

const dummyData = [
  { fog: '无雾', Direct: 0.98, HE: 0.95, DCP: 0.97 },
  { fog: '轻度', Direct: 0.72, HE: 0.81, DCP: 0.94 },
  { fog: '中度', Direct: 0.45, HE: 0.62, DCP: 0.91 },
  { fog: '重度', Direct: 0.15, HE: 0.38, DCP: 0.86 },
];

export const BenchmarkCharts: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[400px]">
      <div className="bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800">
        <h3 className="text-sm font-semibold mb-4 text-zinc-400">任务 1: 识别准确率 vs. 雾气浓度</h3>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={dummyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
            <XAxis dataKey="fog" stroke="#71717a" />
            <YAxis stroke="#71717a" domain={[0, 1]} tickFormatter={(val) => `${(val * 100)}%`} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46' }}
              itemStyle={{ color: '#e4e4e7' }}
              formatter={(value: number) => [`${(value * 100).toFixed(1)}%`, '准确率']}
            />
            <Legend formatter={(value) => {
              if (value === 'Direct') return '直接识别';
              if (value === 'HE') return '直方图均衡化';
              if (value === 'DCP') return '暗原色去雾(本文)';
              return value;
            }} />
            <Bar dataKey="Direct" fill="#71717a" radius={[4, 4, 0, 0]} />
            <Bar dataKey="HE" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="DCP" fill="#10b981" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800">
        <h3 className="text-sm font-semibold mb-4 text-zinc-400">任务 3: 实时性能监控 (ms)</h3>
        <ResponsiveContainer width="100%" height="90%">
          <LineChart data={dummyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
            <XAxis dataKey="fog" stroke="#71717a" />
            <YAxis stroke="#71717a" />
            <Tooltip 
               contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46' }}
               formatter={(value) => [`${value} ms`, '延迟']}
            />
            <Legend formatter={(value) => {
               if (value === 'DCP') return 'DCP 处理延迟';
               if (value === 'HE') return 'HE 处理延迟';
               return value;
            }} />
            <Line type="monotone" name="DCP" dataKey="DCP" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} />
            <Line type="monotone" name="HE" dataKey="HE" stroke="#3b82f6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
