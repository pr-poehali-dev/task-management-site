
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface ProgressBarProps {
  completed: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ completed, total }) => {
  const percentage = Math.round((completed / total) * 100);
  
  return (
    <div className="card">
      <h3 className="text-lg font-medium mb-1">Общий прогресс выполнения</h3>
      <p className="text-sm text-gray-500 mb-4">Процент выполненных задач от общего количества</p>
      
      <Progress value={percentage} className="h-3 mb-4" />
      
      <div className="text-right text-sm font-medium">{percentage}%</div>
      
      <div className="flex justify-between mt-6">
        <div className="text-center">
          <div className="text-sm text-gray-500">Всего</div>
          <div className="text-xl font-bold">{total}</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-500">Завершено</div>
          <div className="text-xl font-bold">{completed}</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-500">Осталось</div>
          <div className="text-xl font-bold">{total - completed}</div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
