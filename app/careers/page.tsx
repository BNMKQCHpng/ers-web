import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Link from 'next/link';

const vacancies = [
  {
    id: 1,
    title: 'Инженер-электрик',
    location: 'Владивосток',
    type: 'Полная занятость',
    salary: 'от 80 000 ₽',
    description: 'В связи с расширением деятельности и увеличением объема работ, требуется инженер-электрик для работы на объектах Дальнего Востока. Опыт работы от 3 лет в сфере промышленного электроснабжения обязателен.',
    responsibilities: [
      'Выполнение электромонтажных работ любой сложности',
      'Обслуживание и ремонт электрооборудования',
      'Работа с проектной документацией',
      'Организация работы бригады электромонтажников',
      'Контроль качества выполнения работ'
    ],
    requirements: [
      'Высшее техническое образование',
      'Опыт работы от 3 лет в сфере промышленного электроснабжения',
      'Знание нормативных документов и стандартов',
      'Умение читать электрические схемы',
      'Готовность к командировкам'
    ],
    benefits: [
      'Официальное трудоустройство по ТК РФ',
      'Конкурентная заработная плата',
      'Компенсация затрат на жилье при работе на удаленных объектах',
      'Обучение и повышение квалификации за счет компании',
      'Дружный коллектив профессионалов'
    ]
  },
  {
    id: 2,
    title: 'Инженер-теплотехник',
    location: 'Хабаровск',
    type: 'Полная занятость',
    salary: 'от 75 000 ₽',
    description: 'Требуется инженер-теплотехник для проектирования и обслуживания систем теплоснабжения на объектах компании в Хабаровском крае. Работа предполагает участие в проектах по модернизации систем отопления.',
    responsibilities: [
      'Проектирование систем отопления и теплоснабжения',
      'Расчет тепловых нагрузок и подбор оборудования',
      'Выполнение пусконаладочных работ',
      'Техническое обслуживание тепловых сетей',
      'Консультирование заказчиков по вопросам эксплуатации'
    ],
    requirements: [
      'Высшее техническое образование',
      'Опыт работы от 2 лет в сфере проектирования систем теплоснабжения',
      'Знание нормативной документации',
      'Владение специализированным ПО',
      'Готовность к командировкам'
    ],
    benefits: [
      'Официальное трудоустройство по ТК РФ',
      'Стабильная заработная плата',
      'Компенсация затрат на мобильную связь',
      'Возможность карьерного роста',
      'Корпоративные мероприятия'
    ]
  },
  {
    id: 3,
    title: 'Сварщик',
    location: 'Якутск',
    type: 'Полная занятость',
    salary: 'от 90 000 ₽',
    description: 'В связи с увеличением объема работ требуется сварщик с опытом работы на промышленных объектах. Работа вахтовым методом в Республике Саха (Якутия).',
    responsibilities: [
      'Выполнение сварочных работ на промышленных объектах',
      'Сварка металлоконструкций различной сложности',
      'Сварка трубопроводов, в том числе под давлением',
      'Проверка качества сварных соединений',
      'Соблюдение техники безопасности'
    ],
    requirements: [
      'Среднее профессиональное образование',
      'Опыт работы от 3 лет',
      'Наличие действующих удостоверений по профессии',
      'Умение работать с различными видами сварки (MMA, TIG, MIG/MAG)',
      'Готовность к работе вахтовым методом'
    ],
    benefits: [
      'Высокая заработная плата',
      'Оплата проезда к месту работы и обратно',
      'Предоставление жилья на время вахты',
      'Обеспечение спецодеждой и СИЗ',
      'Возможность выполнения сверхурочных работ с дополнительной оплатой'
    ]
  }
];

export default function CareersPage() {
  return (
    <>
      <Header />

      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                Вакансии
              </h1>
              <p className="mt-6 text-xl text-gray-300">
                Присоединяйтесь к нашей команде профессионалов и развивайтесь вместе с нами
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Открытые вакансии
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Мы постоянно развиваемся и ищем талантливых специалистов для работы на проектах в различных регионах России
              </p>
            </div>
            
            <div className="space-y-12">
              {vacancies.map((vacancy) => (
                <div key={vacancy.id} className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-md">
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {vacancy.title}
                        </h3>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300">
                            {vacancy.location}
                          </span>
                          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300">
                            {vacancy.type}
                          </span>
                          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300">
                            {vacancy.salary}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 sm:mt-0">
                        <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                          Откликнуться
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {vacancy.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                          Обязанности
                        </h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                          {vacancy.responsibilities.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                          Требования
                        </h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                          {vacancy.requirements.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                          Мы предлагаем
                        </h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                          {vacancy.benefits.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Не нашли подходящую вакансию?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  Отправьте нам свое резюме, и мы свяжемся с вами, когда появится подходящая вакансия.
                </p>
                
                <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div className="sm:col-span-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      ФИО
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Телефон
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                      />
                    </div>
                  </div>
                  
                  <div className="sm:col-span-2">
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Интересующая должность
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="position"
                        id="position"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                      />
                    </div>
                  </div>
                  
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Сопроводительное письмо
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="sm:col-span-2">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <input
                          id="terms"
                          name="terms"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded dark:bg-gray-800 dark:border-gray-700"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Я согласен на обработку моих персональных данных в соответствии с{' '}
                          <Link href="#" className="font-medium text-blue-600 dark:text-blue-400 hover:underline">
                            политикой конфиденциальности
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Отправить резюме
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
} 