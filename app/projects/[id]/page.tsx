import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Массив с данными о проектах 
const projects = [
  {
    id: 1,
    title: 'Модернизация электроснабжения завода',
    location: 'г. Якутск',
    year: '2023',
    description: 'Полная модернизация системы электроснабжения промышленного предприятия, включая замену трансформаторных подстанций и прокладку новых кабельных линий.',
    detailedDescription: `В рамках данного проекта команда ЭРС Групп выполнила комплексную модернизацию системы электроснабжения крупного промышленного предприятия в г. Якутск.

Проект включал в себя следующие работы:
- Полная замена устаревших трансформаторных подстанций на современные модели с повышенной энергоэффективностью
- Прокладка новых кабельных линий общей протяженностью более 5 км
- Установка современных систем автоматизации и контроля электроснабжения
- Модернизация систем освещения на всей территории завода
- Установка резервных источников питания для критически важных участков производства

Несмотря на сложные климатические условия Якутии, наша команда успешно выполнила все работы в установленные сроки, что позволило заказчику избежать длительного простоя производства. Модернизированная система электроснабжения не только повысила надежность работы предприятия, но и позволила снизить затраты на электроэнергию на 15% благодаря использованию современного энергоэффективного оборудования.`,
    challenges: 'Экстремально низкие температуры, необходимость ведения работ без остановки производства, сжатые сроки выполнения проекта.',
    results: 'Повышение надежности электроснабжения предприятия, снижение затрат на электроэнергию на 15%, увеличение срока службы оборудования.',
    image: '/images/projects/project-1.jpg',
    gallery: [
      '/images/projects/project-1-1.jpg',
      '/images/projects/project-1-2.jpg',
      '/images/projects/project-1-3.jpg',
    ],
    category: 'электроснабжение',
    client: 'АО "Якутский промышленный комбинат"',
    duration: '3 месяца',
    team: '15 специалистов',
  },
  {
    id: 2,
    title: 'Обслуживание систем теплоснабжения',
    location: 'г. Магадан',
    year: '2022',
    description: 'Комплексное обслуживание и ремонт системы теплоснабжения жилого комплекса из 12 многоквартирных домов.',
    detailedDescription: `Компания ЭРС Групп выполнила масштабный проект по обслуживанию и ремонту систем теплоснабжения крупного жилого комплекса в г. Магадан, состоящего из 12 многоквартирных домов.

В рамках проекта были выполнены следующие работы:
- Полная диагностика состояния трубопроводов и оборудования
- Замена изношенных участков труб общей протяженностью более 800 метров
- Модернизация тепловых пунктов с установкой современных теплообменников
- Установка автоматизированных систем контроля и регулирования подачи тепла
- Очистка и промывка всей системы отопления
- Замена запорной арматуры и регулирующих устройств

Все работы проводились в межотопительный сезон, что позволило избежать дискомфорта для жителей комплекса. Благодаря проведенной модернизации удалось значительно повысить эффективность работы системы отопления и снизить количество аварийных ситуаций в зимний период.`,
    challenges: 'Большой объем работ, необходимость координации с управляющими компаниями и жильцами, ограниченные сроки выполнения работ в межотопительный сезон.',
    results: 'Снижение теплопотерь на 20%, уменьшение количества аварийных ситуаций, повышение комфорта проживания в жилом комплексе.',
    image: '/images/projects/project-2.jpg',
    gallery: [
      '/images/projects/project-2-1.jpg',
      '/images/projects/project-2-2.jpg',
      '/images/projects/project-2-3.jpg',
    ],
    category: 'теплоснабжение',
    client: 'Управляющая компания "Северный дом"',
    duration: '4 месяца',
    team: '12 специалистов',
  },
  {
    id: 3,
    title: 'Монтаж вентиляционного оборудования',
    location: 'г. Владивосток',
    year: '2023',
    description: 'Проектирование и монтаж промышленной вентиляционной системы на складском комплексе общей площадью 5000 м².',
    detailedDescription: `ЭРС Групп успешно реализовала проект по проектированию и монтажу промышленной вентиляционной системы на крупном складском комплексе во Владивостоке общей площадью 5000 м².

Проект включал в себя:
- Разработку проектной документации с учетом специфики хранимых товаров
- Поставку и монтаж приточно-вытяжных установок с рекуперацией тепла
- Установку систем воздуховодов из оцинкованной стали общей протяженностью более 1200 метров
- Монтаж автоматики и систем управления микроклиматом
- Установку фильтров очистки воздуха
- Пусконаладочные работы и балансировку системы

Особенность проекта заключалась в необходимости создания различных температурных зон для разных категорий товаров при сохранении энергоэффективности всего комплекса. Благодаря использованию современного оборудования с рекуперацией тепла удалось добиться значительной экономии энергоресурсов.`,
    challenges: 'Необходимость создания различных температурных зон, большая площадь объекта, высокие требования к качеству воздуха.',
    results: 'Создание оптимального микроклимата для хранения различных категорий товаров, снижение затрат на отопление и кондиционирование.',
    image: '/images/projects/project-3.jpg',
    gallery: [
      '/images/projects/project-3-1.jpg',
      '/images/projects/project-3-2.jpg',
      '/images/projects/project-3-3.jpg',
    ],
    category: 'вентиляция',
    client: 'ООО "Тихоокеанский логистический центр"',
    duration: '2 месяца',
    team: '8 специалистов',
  },
  // Остальные проекты...
];

export default function ProjectPage({ params }: { params: { id: string } }) {
  const projectId = parseInt(params.id);
  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />

      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 mb-4">
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </span>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                  {project.title}
                </h1>
                <div className="flex justify-center items-center gap-4 text-gray-300">
                  <span>{project.location}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                  <span>{project.year}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden mb-12">
              <div className="h-96 bg-blue-600 bg-opacity-20 flex items-center justify-center">
                {/* Здесь будет основное изображение проекта */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className="w-24 h-24 text-white"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Описание проекта
                </h2>
                <div className="prose max-w-none text-gray-600 dark:text-gray-400 whitespace-pre-line">
                  {project.detailedDescription}
                </div>

                <div className="mt-10">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Сложности и вызовы
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {project.challenges}
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Результаты
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {project.results}
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl h-fit">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">
                  Информация о проекте
                </h3>

                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Клиент</div>
                    <div className="text-gray-900 dark:text-white">{project.client}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Категория</div>
                    <div className="text-gray-900 dark:text-white">{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Год выполнения</div>
                    <div className="text-gray-900 dark:text-white">{project.year}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Срок выполнения</div>
                    <div className="text-gray-900 dark:text-white">{project.duration}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Количество специалистов</div>
                    <div className="text-gray-900 dark:text-white">{project.team}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Расположение</div>
                    <div className="text-gray-900 dark:text-white">{project.location}</div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link 
                    href="/contact"
                    className="w-full inline-flex justify-center items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Заказать похожий проект
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-10 text-center">
              Другие проекты
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects
                .filter(p => p.id !== project.id)
                .slice(0, 3)
                .map((relatedProject) => (
                  <Link 
                    key={relatedProject.id}
                    href={`/projects/${relatedProject.id}`}
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col group"
                  >
                    <div className="relative h-48">
                      <div className="absolute inset-0 bg-blue-600 bg-opacity-20 flex items-center justify-center">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          strokeWidth={1.5} 
                          stroke="currentColor" 
                          className="w-12 h-12 text-white"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {relatedProject.title}
                      </h3>
                      <div className="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                        <span>{relatedProject.location}</span>
                        <span className="mx-2">•</span>
                        <span>{relatedProject.year}</span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/projects"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              >
                Смотреть все проекты
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
        </section>
      </main>

      <Footer />
    </>
  );
} 