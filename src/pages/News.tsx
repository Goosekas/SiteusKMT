import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

function News() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const news = [
    {
      id: 1,
      date: '16 сентября',
      time: '10:00 2023',
      title: 'Открыт набор на бесплатные курсы программирования от Яндекса',
      image: '/news/yandex-courses.jpg',
      content: `Продолжается регистрация на бесплатные курсы по программированию от Яндекса для учеников 8-11-х классов и студентов СПО в рамках проекта «Код будущего» 💻

      Программу курса подготовили специалисты Яндекс.Лицея, Яндекс.Учебника и Яндекс Практикума. Эксперты разработали задания разной сложности, которые помогут познакомиться с IT, попробовать себя в программировании и подготовиться к ОГЭ и ЕГЭ 🎯🎮🎲

      Набор продлится до 25 сентября 2023 года ⌛`,
      tags: ['#КМТ', '#ЯндексЛицей', '#Программирование']
    },
    {
      id: 2,
      date: '18 сентября',
      time: '17:43 2023',
      title: 'Разговоры о важном',
      image: '/news/important-talks.jpg',
      content: `Говорили сегодня о подвиге Зои Космодемьянской, которая вошла в историю как первая женщина, удостоенная звания Героя Советского Союза в годы Великой Отечественной войны. Рассуждали о том, какими качествами должен обладать человек, способный совершить подвиг. Смотрели интервью с актрисой Анастасией Мишиной, которая сыграла главную роль в художественном фильме «Зоя».

      Вспомнили имена и других защитников страны – Леонида Голикова, Валентина Котика, Виктора Коробкова, Зины Портновой. Об этом надо знать, об этом надо помнить!`,
      tags: ['#РазговорыОВажном', '#ГероиОтечества']
    }
  ];

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Новости</h1>
      
      <div className="space-y-8">
        {news.map((item, index) => (
          <div key={item.id} className="bg-blue-50 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="text-sm text-gray-500">
                  {item.date} {item.time}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg w-full h-64 object-cover"
              />
              <div>
                <h2 className="text-xl font-bold mb-4">{item.title}</h2>
                <p className="text-gray-600 mb-4">{item.content}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-sm text-blue-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex justify-between items-center">
              <div className="flex space-x-2">
                {[0, 1, 2].map((dot) => (
                  <button
                    key={dot}
                    onClick={() => handleDotClick(dot)}
                    className={`w-2 h-2 rounded-full ${
                      currentSlide === dot ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <button className="text-blue-600 flex items-center">
                Развернуть <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;