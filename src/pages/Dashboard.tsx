
import React from 'react';
import Header from '@/components/Header';
import TaskStatusCard from '@/components/TaskStatusCard';
import ProgressBar from '@/components/ProgressBar';
import DailyProgressChart from '@/components/DailyProgressChart';

const Dashboard: React.FC = () => {
  // Тестовые данные для статистики
  const taskStats = {
    completed: 1,
    inProgress: 1,
    new: 1,
    total: 3
  };

  // Тестовые данные для графика прогресса по дням
  const weeklyProgressData = [
    { day: 'Пн', completed: 2 },
    { day: 'Вт', completed: 3 },
    { day: 'Ср', completed: 1 },
    { day: 'Чт', completed: 4 },
    { day: 'Пт', completed: 2 },
    { day: 'Сб', completed: 0 },
    { day: 'Вс', completed: 1 },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Дашборд</h1>
          <p className="text-gray-600">Обзор ваших задач и текущей активности</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <TaskStatusCard status="completed" count={taskStats.completed} />
          <TaskStatusCard status="in-progress" count={taskStats.inProgress} />
          <TaskStatusCard status="new" count={taskStats.new} />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-medium mb-1">Общий прогресс выполнения</h3>
            <p className="text-sm text-gray-500 mb-4">Процент выполненных задач от общего количества</p>
            
            <ProgressBar completed={taskStats.completed} total={taskStats.total} />
            
            <div className="flex justify-between mt-6 text-center">
              <div>
                <p className="text-gray-500 mb-1">Всего</p>
                <p className="text-2xl font-semibold">{taskStats.total}</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Завершено</p>
                <p className="text-2xl font-semibold">{taskStats.completed}</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Осталось</p>
                <p className="text-2xl font-semibold">{taskStats.total - taskStats.completed}</p>
              </div>
            </div>
          </div>
          
          <DailyProgressChart data={weeklyProgressData} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
