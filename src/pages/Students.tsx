import React from 'react';
import { BookOpen, Calendar, Users, Award } from 'lucide-react';

function Students() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Информация для обучающихся</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <Calendar className="h-8 w-8 text-blue-900 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Учебный процесс</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Начало занятий: 8:30</li>
              <li>• Продолжительность пары: 1 час 30 минут</li>
              <li>• Перерыв между парами: 10 минут</li>
              <li>• Большой перерыв: 30 минут</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <BookOpen className="h-8 w-8 text-blue-900 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Библиотека</h3>
            <p className="text-gray-600 mb-4">
              Время работы библиотеки:<br />
              Пн-Пт: 9:00 - 17:00<br />
              Сб: 9:00 - 14:00
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <Users className="h-8 w-8 text-blue-900 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Студенческая жизнь</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Студенческий совет</li>
              <li>• Спортивные секции</li>
              <li>• Творческие кружки</li>
              <li>• Научное общество</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <Award className="h-8 w-8 text-blue-900 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Достижения</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Конкурсы профмастерства</li>
              <li>• Спортивные соревнования</li>
              <li>• Научные конференции</li>
              <li>• Творческие фестивали</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Students;