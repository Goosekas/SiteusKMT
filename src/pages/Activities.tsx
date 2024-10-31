import React from 'react';
import { Settings, Wrench, Database, Cpu } from 'lucide-react';

function Activities() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Направления деятельности</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <Settings className="h-8 w-8 text-blue-900 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Технология машиностроения</h3>
            <p className="text-gray-600 mb-4">
              Подготовка специалистов по разработке и внедрению технологических процессов производства.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Проектирование технологических процессов</li>
              <li>• Работа с современным оборудованием</li>
              <li>• Контроль качества продукции</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <Wrench className="h-8 w-8 text-blue-900 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Техническое обслуживание</h3>
            <p className="text-gray-600 mb-4">
              Обучение специалистов по обслуживанию и ремонту промышленного оборудования.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Диагностика оборудования</li>
              <li>• Ремонтные работы</li>
              <li>• Профилактическое обслуживание</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <Database className="h-8 w-8 text-blue-900 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Информационные системы</h3>
            <p className="text-gray-600 mb-4">
              Подготовка специалистов в области информационных технологий и систем.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Программирование</li>
              <li>• Базы данных</li>
              <li>• Сетевые технологии</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <Cpu className="h-8 w-8 text-blue-900 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Автоматизация производства</h3>
            <p className="text-gray-600 mb-4">
              Обучение специалистов по автоматизации технологических процессов.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Системы управления</li>
              <li>• Промышленные контроллеры</li>
              <li>• Робототехника</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activities;