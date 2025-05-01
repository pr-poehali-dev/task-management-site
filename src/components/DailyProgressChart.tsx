
import React from 'react';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

interface DailyProgressProps {
  data: {
    day: string;
    completed: number;
  }[];
}

const DailyProgressChart: React.FC<DailyProgressProps> = ({ data }) => {
  const chartConfig = {
    completed: {
      label: 'Выполнено задач',
      theme: {
        light: '#2ecc71',
        dark: '#2ecc71'
      }
    }
  };
  
  return (
    <div className="card">
      <h3 className="text-lg font-medium mb-1">Прогресс по дням</h3>
      <p className="text-sm text-gray-500 mb-4">Линейный график выполнения задач за неделю</p>
      
      <div className="h-[300px] w-full">
        <ChartContainer config={chartConfig}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#666' }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 12, fill: '#666' }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line 
              type="monotone" 
              dataKey="completed" 
              name="completed"
              stroke="var(--completed)" 
              strokeWidth={3}
              dot={{ strokeWidth: 3, r: 4, fill: "white" }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default DailyProgressChart;
