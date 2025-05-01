
import React from 'react';
import Header from '@/components/Header';

const Settings: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Настройки</h1>
          <p className="text-gray-600">Управление настройками системы</p>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <p className="text-gray-600">Страница настроек находится в разработке</p>
        </div>
      </main>
    </div>
  );
};

export default Settings;
