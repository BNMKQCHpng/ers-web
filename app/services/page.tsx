import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    id: 1,
    title: "Ремонт и обслуживание электротехнического оборудования",
    description: "Профессиональное обслуживание и диагностика электрооборудования, ремонт и замена компонентов, планово-предупредительные работы.",
    longDescription: `Мы предлагаем полный комплекс услуг по ремонту и обслуживанию электротехнического оборудования любой сложности:
    
    - Диагностика и выявление неисправностей
    - Ремонт и замена компонентов
    - Плановое техническое обслуживание
    - Модернизация систем электроснабжения
    - Аварийное обслуживание
    - Обслуживание трансформаторных подстанций
    - Ремонт силовых агрегатов и генераторов
    
    Наши специалисты обладают всеми необходимыми сертификатами и допусками для проведения работ любой сложности.`,
    icon: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z",
    link: "/services/electrical-repair",
    image: "/images/services/electrical-repair.jpg"
  },
  {
    id: 2,
    title: "Обслуживание сетей тепловодоснабжения",
    description: "Монтаж, ремонт и техническое обслуживание систем отопления, водоснабжения и канализации. Устранение аварий и профилактические работы.",
    longDescription: `Наша компания обеспечивает полный цикл работ по обслуживанию сетей тепловодоснабжения:
    
    - Проектирование и монтаж систем отопления и водоснабжения
    - Замена и ремонт трубопроводов
    - Обслуживание насосных станций
    - Чистка систем отопления и водоснабжения
    - Устранение протечек и аварийных ситуаций
    - Модернизация существующих систем
    - Регулярное техническое обслуживание
    
    Мы работаем с объектами любой сложности и в любых климатических условиях.`,
    icon: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z",
    link: "/services/heating-water-supply",
    image: "/images/services/heating-water-supply.jpg"
  },
  {
    id: 3,
    title: "Обслуживание вентиляционного оборудования",
    description: "Установка и обслуживание вентиляционных систем, пылегазоочистного оборудования. Диагностика, очистка и ремонт вентиляционных установок.",
    longDescription: `Мы предлагаем полный цикл работ с вентиляционным оборудованием:
    
    - Проектирование и монтаж вентиляционных систем
    - Обслуживание и чистка воздуховодов
    - Ремонт и замена вентиляционных установок
    - Техническое обслуживание пылегазоочистного оборудования
    - Модернизация и оптимизация вентиляционных систем
    - Диагностика эффективности работы систем вентиляции
    - Плановые профилактические работы
    
    Мы гарантируем соответствие всех работ действующим нормам и стандартам.`,
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
    link: "/services/ventilation-equipment",
    image: "/images/services/ventilation-equipment.jpg"
  },
  {
    id: 4,
    title: "Измерения и испытания",
    description: "Проведение электрических измерений и испытаний оборудования. Проверка качества электрических соединений, диагностика и сертификация.",
    longDescription: `Мы проводим полный комплекс электрических измерений и испытаний:
    
    - Измерение сопротивления изоляции
    - Проверка заземления и молниезащиты
    - Тестирование автоматических выключателей
    - Диагностика электрических сетей и кабельных линий
    - Испытания силового оборудования
    - Тепловизионное обследование электрооборудования
    - Подготовка технической документации и протоколов испытаний
    
    Все работы выполняются на сертифицированном оборудовании, а результаты испытаний оформляются в соответствии с требованиями надзорных органов.`,
    icon: "M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z",
    link: "/services/measurements",
    image: "/images/services/measurements.jpg"
  },
  {
    id: 5,
    title: "Сварочные работы",
    description: "Выполнение сварочных работ любой сложности. Сварка металлоконструкций, трубопроводов, ремонт промышленного оборудования.",
    longDescription: `Наша компания предоставляет полный спектр сварочных работ:
    
    - Сварка металлоконструкций различной сложности
    - Сварка трубопроводов, в том числе под давлением
    - Аргонодуговая сварка
    - Полуавтоматическая и ручная дуговая сварка
    - Ремонт промышленного оборудования
    - Изготовление и монтаж металлоконструкций
    - Сварка цветных металлов и специальных сплавов
    
    Все работы выполняются квалифицированными сварщиками с проверкой качества швов.`,
    icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5",
    link: "/services/welding",
    image: "/images/services/welding.jpg"
  },
  {
    id: 6,
    title: "Монтаж оборудования",
    description: "Профессиональный монтаж электрооборудования и инженерных систем. Установка распределительных щитов, трансформаторов, систем освещения.",
    longDescription: `Мы выполняем монтаж различного электрооборудования и инженерных систем:
    
    - Установка распределительных щитов и шкафов
    - Монтаж трансформаторов и подстанций
    - Прокладка кабельных линий и сетей электроснабжения
    - Установка систем освещения
    - Монтаж систем автоматики и управления
    - Установка аварийного и резервного электропитания
    - Интеграция систем умного дома и автоматизация
    
    Все монтажные работы производятся по проектной документации с соблюдением всех норм и требований.`,
    icon: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z",
    link: "/services/equipment-installation",
    image: "/images/services/equipment-installation.jpg"
  }
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                Наши услуги
              </h1>
              <p className="mt-6 text-xl text-gray-300">
                Комплексные решения для электромонтажных работ и обслуживания инженерных систем
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              {services.map((service) => (
                <div 
                  key={service.id}
                  className="flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative h-48 sm:h-64">
                    <div className="absolute inset-0 bg-blue-600 bg-opacity-20 flex items-center justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="w-16 h-16 text-white"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-5 flex-1">
                      {service.description}
                    </p>
                    
                    <div className="whitespace-pre-line text-sm text-gray-600 dark:text-gray-400 mb-6">
                      {service.longDescription.split('\n\n')[0]}...
                    </div>
                    
                    <Link
                      href={service.link}
                      className="self-start rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all"
                    >
                      Подробнее
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                Почему выбирают нас
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Мы обеспечиваем высококачественные услуги с соблюдением всех технических норм и требований
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Гарантия качества</h3>
                <p className="text-gray-600 dark:text-gray-400">На все выполненные работы предоставляется гарантия до 2 лет</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Опытные специалисты</h3>
                <p className="text-gray-600 dark:text-gray-400">Наши сотрудники имеют профильное образование и многолетний опыт работы</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Оперативность</h3>
                <p className="text-gray-600 dark:text-gray-400">Соблюдаем сроки и быстро реагируем на аварийные ситуации</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Соблюдение стандартов</h3>
                <p className="text-gray-600 dark:text-gray-400">Все работы выполняются в соответствии с действующими нормами и требованиями</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                Свяжитесь с нами для консультации
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
                Наши специалисты проконсультируют вас по любым вопросам и подберут оптимальное решение для ваших задач
              </p>
              <Link
                href="/contacts"
                className="inline-flex items-center rounded-full px-6 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Получить консультацию
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
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