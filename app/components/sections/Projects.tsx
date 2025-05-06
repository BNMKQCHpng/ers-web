'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';

// Массив с данными о проектах
const projects = [
  {
    id: 1,
    title: 'Модернизация электроснабжения завода',
    location: 'г. Якутск',
    year: '2023',
    description: 'Полная модернизация системы электроснабжения промышленного предприятия, включая замену трансформаторных подстанций и прокладку новых кабельных линий.',
    image: '/images/projects/project-1.jpg',
  },
  {
    id: 2,
    title: 'Обслуживание систем теплоснабжения',
    location: 'г. Магадан',
    year: '2022',
    description: 'Комплексное обслуживание и ремонт системы теплоснабжения жилого комплекса из 12 многоквартирных домов.',
    image: '/images/projects/project-2.jpg',
  },
  {
    id: 3,
    title: 'Монтаж вентиляционного оборудования',
    location: 'г. Владивосток',
    year: '2023',
    description: 'Проектирование и монтаж промышленной вентиляционной системы на складском комплексе общей площадью 5000 м².',
    image: '/images/projects/project-3.jpg',
  },
  {
    id: 4,
    title: 'Аварийный ремонт электросетей',
    location: 'пос. Усть-Нера',
    year: '2022',
    description: 'Оперативный выезд и восстановление электроснабжения после аварии в труднодоступном районе в зимний период.',
    image: '/images/projects/project-4.jpg',
  },
];

// Анимация для элементов
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Наши проекты
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            С 2010 года мы успешно реализовали более 200 проектов в различных регионах России. 
            Вот некоторые из наших недавних работ.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-56 sm:h-64">
                <div className="absolute inset-0 bg-blue-600 bg-opacity-20 flex items-center justify-center">
                  {/* Здесь будет изображение проекта */}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-16 h-16 text-white"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2.5 py-0.5 rounded">
                    {project.year}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {project.location}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Подробнее
                  <svg 
                    className="w-4 h-4 ml-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
          >
            Все проекты
          </Link>
        </div>
      </div>
    </section>
  );
} 