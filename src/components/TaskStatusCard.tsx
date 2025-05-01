
import React from 'react';
import { CheckCircle, Clock, ListPlus } from 'lucide-react';
import Icon from './ui/icon';

interface TaskStatusCardProps {
  status: 'completed' | 'in-progress' | 'new';
  count: number;
}

const statusConfig = {
  completed: {
    title: 'Завершено',
    icon: 'CheckCircle',
    color: 'text-[#2ecc71]',
    description: 'задач выполнено',
    iconBg: 'bg-[#2ecc71]/10'
  },
  'in-progress': {
    title: 'В процессе',
    icon: 'Clock',
    color: 'text-[#ff9941]',
    description: 'задач выполняются',
    iconBg: 'bg-[#ff9941]/10'
  },
  new: {
    title: 'Новые',
    icon: 'ListPlus',
    color: 'text-[#4a85f0]',
    description: 'задач не начаты',
    iconBg: 'bg-[#4a85f0]/10'
  }
};

const TaskStatusCard: React.FC<TaskStatusCardProps> = ({ status, count }) => {
  const config = statusConfig[status];
  
  return (
    <div className="card flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">{config.title}</h3>
        <div className={`${config.iconBg} p-2 rounded-full ${config.color}`}>
          <Icon name={config.icon as any} size={20} />
        </div>
      </div>
      <div>
        <span className="text-5xl font-bold">{count}</span>
        <p className="text-sm text-gray-500 mt-1">{config.description}</p>
      </div>
    </div>
  );
};

export default TaskStatusCard;
