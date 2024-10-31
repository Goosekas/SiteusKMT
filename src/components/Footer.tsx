import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="/logo-white.svg" alt="КМТ" className="h-12 mb-4" />
            <p className="text-gray-400">
              Костромской машиностроительный техникум - ведущее учебное заведение в области машиностроения и технологий
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Полезные ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  О техникуме
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-400 hover:text-white">
                  Образовательные программы
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="text-gray-400 hover:text-white">
                  Расписание занятий
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-400 hover:text-white">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <p className="text-gray-400 mb-2">
              156019, г. Кострома, ул. Фестивальная, д. 31
            </p>
            <p className="text-gray-400 mb-2">
              Телефон: +7 (4942) 32-13-81
            </p>
            <p className="text-gray-400 mb-4">
              Email: info@kmtko.ru
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Костромской Машиностроительный Техникум. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;