import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

function Contacts() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Контактная информация</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-blue-900 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Адрес</h3>
                <p className="text-gray-600">
                  156019, г. Кострома,<br />
                  ул. Фестивальная, д. 31
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-blue-900 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Телефоны</h3>
                <p className="text-gray-600">
                  Приемная: +7 (4942) 32-13-81<br />
                  Учебная часть: +7 (4942) 32-14-82
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-blue-900 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-gray-600">
                  info@kmtko.ru<br />
                  priemnaya@kmtko.ru
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="h-6 w-6 text-blue-900 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Режим работы</h3>
                <p className="text-gray-600">
                  Понедельник - Пятница: 8:00 - 17:00<br />
                  Суббота: 8:00 - 14:00<br />
                  Воскресенье: выходной
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-4">Как добраться</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">На общественном транспорте:</h4>
                <ul className="text-gray-600 list-disc list-inside">
                  <li>Автобус №1, остановка "Техникум"</li>
                  <li>Маршрутное такси №2, остановка "Техникум"</li>
                  <li>Троллейбус №3, остановка "Техникум"</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">На автомобиле:</h4>
                <p className="text-gray-600">
                  С центра города двигаться по улице Советской до пересечения с улицей Фестивальной,
                  далее повернуть направо и проехать 500 метров до здания техникума.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;