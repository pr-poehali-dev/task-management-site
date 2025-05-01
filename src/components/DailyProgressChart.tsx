
import React from 'react';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, PieChart, Pie, Cell } from 'recharts';

interface DailyProgressProps {
  data: {
    day: string;
    completed: number;
  }[];
}

const DailyProgressChart: React.FC<DailyProgressProps> = ({ data }) => {
  const pieData = [
    { name: 'Завершено', value: 1, color: '#2ecc71' },
    { name: 'В процессе', value: 1, color: '#f97316' },
    { name: 'Новые', value: 1, color: '#3b82f6' },
  ];
  
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-medium mb-1">Распределение задач</h3>
      <p className="text-sm text-gray-500 mb-4">Соотношение задач по статусам</p>
      
      <div className="h-[300px] w-full flex flex-col items-center">
        <div className="w-[220px] h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                dataKey="value"
                strokeWidth={0}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4 w-full">
          {pieData.map((entry, index) => (
            <div key={index} className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.color }}></div>
                <span>{entry.name}</span>
              </div>
              <span>33%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyProgressChart;
