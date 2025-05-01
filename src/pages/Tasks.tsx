
import React from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check, Calendar, Pencil, Trash2 } from 'lucide-react';
import Icon from '@/components/ui/icon';

interface Task {
  id: number;
  title: string;
  description: string;
  priority: 'высокий' | 'средний' | 'низкий';
  status: 'в процессе' | 'новая' | 'завершена';
  dueDate: string;
}

const Tasks: React.FC = () => {
  const tasks: Task[] = [
    {
      id: 1,
      title: 'Разработать дизайн главной страницы',
      description: 'Создать макет и прототип главной страницы для нового проекта',
      priority: 'высокий',
      status: 'в процессе',
      dueDate: '05.05.2025'
    },
    {
      id: 2,
      title: 'Настроить базу данных',
      description: 'Установить и настроить MongoDB для нового проекта',
      priority: 'средний',
      status: 'новая',
      dueDate: '10.05.2025'
    },
    {
      id: 3,
      title: 'Написать документацию API',
      description: 'Подготовить техническую документацию по всем эндпоинтам API',
      priority: 'низкий',
      status: 'завершена',
      dueDate: '15.05.2025'
    },
  ];

  const getPriorityClass = (priority: string) => {
    switch (priority) {
      case 'высокий': return 'bg-red-100 text-red-800';
      case 'средний': return 'bg-yellow-100 text-yellow-800';
      case 'низкий': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'в процессе': return 'bg-purple-100 text-purple-800';
      case 'новая': return 'bg-blue-100 text-blue-800';
      case 'завершена': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Мои задачи</h1>
            <p className="text-gray-600">Управляйте своими задачами, отслеживайте прогресс и достигайте целей</p>
          </div>
          <Button className="bg-black text-white rounded-lg flex items-center gap-2">
            <Icon name="Plus" size={18} />
            Добавить задачу
          </Button>
        </div>

        <div className="mb-6 flex gap-4">
          <div className="flex-1">
            <Input className="w-full" placeholder="Поиск задач..." />
          </div>
          <div className="w-[200px]">
            <Button variant="outline" className="w-full justify-between">
              Все статусы
              <Icon name="ChevronDown" size={18} />
            </Button>
          </div>
          <div className="w-[200px]">
            <Button variant="outline" className="w-full justify-between">
              Все приоритеты
              <Icon name="ChevronDown" size={18} />
            </Button>
          </div>
        </div>

        <div className="grid gap-4">
          {tasks.map((task) => (
            <div key={task.id} className="bg-white rounded-lg p-5 shadow-sm">
              <div className="flex gap-2 mb-2">
                <span className={`text-xs px-3 py-1 rounded-full ${getPriorityClass(task.priority)}`}>
                  {task.priority}
                </span>
                <span className={`text-xs px-3 py-1 rounded-full ${getStatusClass(task.status)}`}>
                  {task.status}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
              <p className="text-gray-600 mb-4">{task.description}</p>
              
              <div className="flex items-center text-gray-500 mb-4">
                <Calendar size={16} className="mr-2" />
                <span>до {task.dueDate}</span>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Check size={16} />
                  Изменить статус
                </Button>
                <Button variant="ghost" size="icon">
                  <Pencil size={16} />
                </Button>
                <Button variant="ghost" size="icon">
                  <Trash2 size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Tasks;
