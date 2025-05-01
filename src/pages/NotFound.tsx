
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-black">Страница не найдена</h1>
        <p className="text-xl text-gray-600 mb-6">Запрашиваемая страница не существует</p>
        <Link to="/" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">Вернуться на главную</Link>
      </div>
    </div>
  );
};

export default NotFound;

    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Упс! Страница не найдена</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Вернуться на главную
        </a>
      </div>
    </div>
  );
};

export default NotFound;
