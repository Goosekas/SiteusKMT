import React from 'react';
import { BookOpen, FileText, Users, Laptop } from 'lucide-react';

function Teachers() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Педагогам</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <FileText className="h-8 w-8 text-blue-900 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Документация</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Рабочие программы</li>
              <li>• Учебные планы</li>
              <li>• Методические указания</li>
              <li>• Оценочные материалы</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <Laptop className="h-8 w-8 text-blue-900 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Электронные ресурсы</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Электронная библиотека</li>
              <li>• Образовательные платформы</li>
              <li>• Вебинары</li>
              <li>• Онлайн-курсы</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <BookOpen className="h-8 w-8 text-blue-900 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Повышение квалификации</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Курсы повышения квалификации</li>
              <li>• Профессиональная переподготовка</li>
              <li>• Стажировки</li>
              <li>• Семинары</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <Users className="h-8 w-8 text-blue-900 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Методические объединения</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• График заседаний</li>
              <li>• Планы работы</li>
              <li>• Обмен опытом</li>
              <li>• Открытые уроки</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teachers;