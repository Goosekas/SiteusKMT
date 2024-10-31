import React from 'react';
import { Box, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Info() {
  const sections = [
    {
      id: 'basic',
      title: 'Основные сведения',
      icon: <Box className="w-6 h-6" />,
      path: '/info/basic'
    },
    {
      id: 'structure',
      title: 'Структура и органы управления образовательной организации',
      icon: <Box className="w-6 h-6" />,
      path: '/info/structure'
    },
    {
      id: 'documents',
      title: 'Документы',
      icon: <Box className="w-6 h-6" />,
      path: '/info/documents'
    },
    {
      id: 'education',
      title: 'Образование',
      icon: <Box className="w-6 h-6" />,
      path: '/info/education'
    },
    {
      id: 'standards',
      title: 'Образовательные стандарты и требования',
      icon: <Box className="w-6 h-6" />,
      path: '/info/standards'
    },
    {
      id: 'management',
      title: 'Руководство. Педагогический состав',
      icon: <Box className="w-6 h-6" />,
      path: '/info/management'
    },
    {
      id: 'resources',
      title: 'Материально-техническое обеспечение и оснащенность образовательность процесса',
      icon: <Box className="w-6 h-6" />,
      path: '/info/resources'
    },
    {
      id: 'scholarships',
      title: 'Стипендии и иные виды материальной поддержки',
      icon: <Box className="w-6 h-6" />,
      path: '/info/scholarships'
    },
    {
      id: 'paid-services',
      title: 'Платные образовательные услуги',
      icon: <Box className="w-6 h-6" />,
      path: '/info/paid-services'
    },
    {
      id: 'financial',
      title: 'Финансово-хозяйственная деятельность',
      icon: <Box className="w-6 h-6" />,
      path: '/info/financial'
    },
    {
      id: 'vacancies',
      title: 'Вакантные места для приема (перевода)',
      icon: <Box className="w-6 h-6" />,
      path: '/info/vacancies'
    },
    {
      id: 'accessibility',
      title: 'Доступная среда',
      icon: <Box className="w-6 h-6" />,
      path: '/info/accessibility'
    },
    {
      id: 'international',
      title: 'Международное сотрудничество',
      icon: <Box className="w-6 h-6" />,
      path: '/info/international'
    },
    {
      id: 'anti-corruption',
      title: 'Противодействие коррупции',
      icon: <Box className="w-6 h-6" />,
      path: '/info/anti-corruption'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Сведения</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((section) => (
          <Link
            key={section.id}
            to={section.path}
            className="bg-blue-50 p-6 rounded-lg hover:bg-blue-100 transition-colors group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {section.icon}
                <span className="text-gray-900">{section.title}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Info;