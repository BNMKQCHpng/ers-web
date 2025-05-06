'use client';

import { useState } from 'react';
import Link from 'next/link';

type Project = {
  id: number;
  title: string;
  location: string;
  year: string;
  description: string;
  image: string;
  category: string;
};

type ProjectFilterProps = {
  projects: Project[];
};

export default function ProjectsFilter({ projects }: ProjectFilterProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  // Получаем уникальные категории из проектов
  const categories = ['all', ...Array.from(new Set(projects.map(project => project.category)))];

  // Фильтруем проекты по выбранной категории
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <>
      <div className="flex flex-wrap gap-4 mb-10 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category === 'all' ? 'Все проекты' : category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div 
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
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
            <div className="p-6 flex-1 flex flex-col">
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
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2.5 py-0.5 rounded">
                  {project.category}
                </span>
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
            </div>
          </div>
        ))}
      </div>
    </>
  );
} 