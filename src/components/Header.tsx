
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="border-b border-gray-200 bg-white py-4">
      <div className="container mx-auto px-4 flex items-center">
        <nav className="flex space-x-6">
          <Link to="/" className="text-blue-500 font-medium">Дашборд</Link>
          <Link to="/tasks" className="text-gray-600 hover:text-gray-900">Задачи</Link>
          <Link to="/settings" className="text-gray-600 hover:text-gray-900">Настройки</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
