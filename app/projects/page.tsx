import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Link from 'next/link';
import ProjectsFilter from '../components/ui/ProjectsFilter';

// Массив с данными о проектах (расширенный)
const allProjects = [
  {
    id: 1,
    title: 'Модернизация электроснабжения завода',
    location: 'г. Якутск',
    year: '2023',
    description: 'Полная модернизация системы электроснабжения промышленного предприятия, включая замену трансформаторных подстанций и прокладку новых кабельных линий.',
    image: '/images/projects/project-1.jpg',
    category: 'электроснабжение'
  },
  {
    id: 2,
    title: 'Обслуживание систем теплоснабжения',
    location: 'г. Магадан',
    year: '2022',
    description: 'Комплексное обслуживание и ремонт системы теплоснабжения жилого комплекса из 12 многоквартирных домов.',
    image: '/images/projects/project-2.jpg',
    category: 'теплоснабжение'
  },
  {
    id: 3,
    title: 'Монтаж вентиляционного оборудования',
    location: 'г. Владивосток',
    year: '2023',
    description: 'Проектирование и монтаж промышленной вентиляционной системы на складском комплексе общей площадью 5000 м².',
    image: '/images/projects/project-3.jpg',
    category: 'вентиляция'
  },
  {
    id: 4,
    title: 'Аварийный ремонт электросетей',
    location: 'пос. Усть-Нера',
    year: '2022',
    description: 'Оперативный выезд и восстановление электроснабжения после аварии в труднодоступном районе в зимний период.',
    image: '/images/projects/project-4.jpg',
    category: 'электроснабжение'
  },
  {
    id: 5,
    title: 'Обслуживание электрооборудования торгового центра',
    location: 'г. Хабаровск',
    year: '2021',
    description: 'Регулярное техническое обслуживание электрооборудования торгового центра площадью 15000 м², включая системы освещения и аварийного электроснабжения.',
    image: '/images/projects/project-5.jpg',
    category: 'электроснабжение'
  },
  {
    id: 6,
    title: 'Модернизация систем отопления рыбоперерабатывающего завода',
    location: 'г. Петропавловск-Камчатский',
    year: '2023',
    description: 'Комплексная модернизация системы отопления и горячего водоснабжения рыбоперерабатывающего завода с установкой энергоэффективного оборудования.',
    image: '/images/projects/project-6.jpg',
    category: 'теплоснабжение'
  },
  {
    id: 7,
    title: 'Сварочные работы на нефтехранилище',
    location: 'г. Комсомольск-на-Амуре',
    year: '2021',
    description: 'Выполнение сварочных работ при ремонте резервуаров нефтехранилища с соблюдением всех норм безопасности и требований к качеству швов.',
    image: '/images/projects/project-7.jpg',
    category: 'сварочные работы'
  },
  {
    id: 8,
    title: 'Монтаж электрооборудования на алмазном руднике',
    location: 'пос. Мирный',
    year: '2023',
    description: 'Монтаж и наладка электрооборудования на участке алмазного рудника, включая прокладку силовых кабелей и установку распределительных щитов.',
    image: '/images/projects/project-8.jpg',
    category: 'электроснабжение'
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Header />

      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                Реализованные проекты
              </h1>
              <p className="mt-6 text-xl text-gray-300">
                За более чем 10 лет работы мы успешно реализовали сотни проектов в самых разных уголках России
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectsFilter projects={allProjects} />
          </div>
        </section>

        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Нужен подобный проект?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Свяжитесь с нами для консультации и расчета стоимости вашего проекта.
                Наши специалисты ответят на все ваши вопросы.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
              >
                Связаться с нами
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
} 