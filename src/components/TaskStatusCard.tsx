
import React from 'react';
import { CheckCircleIcon, ClockIcon, ListIcon } from 'lucide-react';

interface TaskStatusCardProps {
  status: 'completed' | 'in-progress' | 'new';
  count: number;
}

const TaskStatusCard: React.FC<TaskStatusCardProps> = ({ status, count }) => {
  const getStatusInfo = () => {
    switch (status) {
      case 'completed':
        return {
          title: 'Завершено',
          subtitle: 'задач выполнено',
          icon: <CheckCircleIcon className="text-green-500" size={24} />,
        };
      case 'in-progress':
        return {
          title: 'В процессе',
          subtitle: 'задач выполняются',
          icon: <ClockIcon className="text-orange-500" size={24} />,
        };
      case 'new':
        return {
          title: 'Новые',
          subtitle: 'задач не начаты',
          icon: <ListIcon className="text-blue-500" size={24} />,
        };
      default:
        return {
          title: 'Задачи',
          subtitle: 'всего задач',
          icon: null,
        };
    }
  };

  const { title, subtitle, icon } = getStatusInfo();

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div className="text-lg font-medium">{title}</div>
        {icon}
      </div>
      <div className="text-4xl font-bold mb-1">{count}</div>
      <div className="text-gray-500 text-sm">{subtitle}</div>
    </div>
  );
};

export default TaskStatusCard;
