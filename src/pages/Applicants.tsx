import React from 'react';
import { FileText, Calendar, ClipboardList, School } from 'lucide-react';

function Applicants() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Информация для абитуриентов</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="flex items-start space-x-4">
            <Calendar className="h-6 w-6 text-blue-900 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Сроки приема</h3>
              <p className="text-gray-600">Прием документов начинается с 20 июня 2024 года</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <FileText className="h-6 w-6 text-blue-900 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Необходимые документы</h3>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Паспорт (копия)</li>
                <li>Аттестат об образовании</li>
                <li>4 фотографии 3x4</li>
                <li>Медицинская справка</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold mb-6">Специальности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <School className="h-8 w-8 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Технология машиностроения</h3>
              <p className="text-gray-600 mb-4">Срок обучения: 3 года 10 месяцев</p>
              <p className="text-gray-600">Квалификация: Техник</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <ClipboardList className="h-8 w-8 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Автоматизация производства</h3>
              <p className="text-gray-600 mb-4">Срок обучения: 3 года 10 месяцев</p>
              <p className="text-gray-600">Квалификация: Техник-механик</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Applicants;