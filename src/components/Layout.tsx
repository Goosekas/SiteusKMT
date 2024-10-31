import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { User } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import Footer from './Footer';

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuthStore();

  const navigation = [
    { name: 'Главная', path: '/' },
    { name: 'Сведения', path: '/info' },
    { name: 'Абитуриентам', path: '/applicants' },
    { name: 'Обучающимся', path: '/students' },
    { name: 'Педагогам', path: '/teachers' },
    { name: 'Направления деятельности', path: '/activities' },
    { name: 'Контакты', path: '/contacts' },
    { name: 'Доп. Материалы', path: '/materials' },
    { name: 'Новости', path: '/news' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center h-20 px-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo.svg" alt="КМТ" className="h-12" />
            </Link>

            <nav className="hidden lg:flex space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center">
              {isAuthenticated ? (
                <button
                  onClick={logout}
                  className="inline-flex items-center px-4 py-2 border border-blue-600 text-sm font-medium rounded-md text-blue-600 hover:bg-blue-50"
                >
                  Выйти
                </button>
              ) : (
                <Link
                  to="/login"
                  className="inline-flex items-center px-4 py-2 border border-blue-600 text-sm font-medium rounded-md text-blue-600 hover:bg-blue-50"
                >
                  <User className="h-4 w-4 mr-2" />
                  Вход
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;