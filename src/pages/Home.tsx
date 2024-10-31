import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Home() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  
  const teachers = [
    {
      name: 'Иванов Иван Иванович',
      position: 'Преподаватель технических дисциплин',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Петрова Мария Сергеевна',
      position: 'Преподаватель математики',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Сидоров Петр Александрович',
      position: 'Преподаватель информатики',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="w-1/2">
            <h1 className="text-5xl font-bold text-white mb-6">
              Костромской<br />
              <span className="text-blue-300">Машиностроительный</span><br />
              Техникум
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Учим с любовью, выпускаем с гордостью!
            </p>
            <div className="space-x-4">
              <Link
                to="/applicants"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Подать документы
              </Link>
              <Link
                to="/schedule"
                className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-900"
              >
                Расписание занятий
              </Link>
            </div>
          </div>
          <div className="w-1/2">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Студенты"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Наши преподаватели
          </h2>
          <div className="relative">
            <button
              onClick={() => setCurrentSlide((prev) => (prev > 0 ? prev - 1 : teachers.length - 1))}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex justify-center space-x-8">
              {teachers.map((teacher, index) => (
                <div
                  key={index}
                  className={`w-64 text-center transition-opacity duration-300 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-50'
                  }`}
                >
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-lg">{teacher.name}</h3>
                  <p className="text-gray-600">{teacher.position}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => setCurrentSlide((prev) => (prev < teachers.length - 1 ? prev + 1 : 0))}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">О техникуме</h2>
              <p className="text-gray-600">
                Костромской машиностроительный техникум - это современное образовательное учреждение,
                которое готовит высококвалифицированных специалистов в области машиностроения и технологий.
                Наши выпускники успешно работают на ведущих предприятиях региона и страны.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1562516155-e0c1ee44059b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Техникум"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Лаборатория"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Наша миссия</h2>
              <p className="text-gray-600">
                Мы стремимся создать образовательную среду, которая способствует развитию
                профессиональных навыков и личностному росту каждого студента. Наши преподаватели
                используют современные методики обучения и передовое оборудование.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Наши партнеры
          </h2>
          <div className="flex justify-center space-x-12">
            <img src="/partner1.svg" alt="Партнер 1" className="h-16" />
            <img src="/partner2.svg" alt="Партнер 2" className="h-16" />
            <img src="/partner3.svg" alt="Партнер 3" className="h-16" />
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Начни свое профессиональное будущее с нами!
          </h2>
          <p className="text-xl mb-8">
            Открыт прием документов на 2024-2025 учебный год
          </p>
          <Link
            to="/applicants"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-gray-100"
          >
            Подробнее о поступлении
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;