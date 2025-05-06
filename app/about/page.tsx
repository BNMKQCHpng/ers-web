import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                О компании
              </h1>
              <p className="mt-6 text-xl text-gray-300">
                ЭРС Групп — надежный партнер в сфере электромонтажных работ с 2010 года
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  История компании
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  ЭРС Групп была основана в 2010 году группой инженеров-электриков, которые видели потребность в высококачественных электромонтажных услугах в дальних регионах России.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  Начав с небольших проектов в Якутии, компания постепенно расширила географию своего присутствия на весь Дальний Восток и Сибирь. Сегодня ЭРС Групп — это команда более чем из 100 высококвалифицированных специалистов, способных решать задачи любой сложности.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Наша компания реализовала более 500 проектов различной сложности для заказчиков из промышленного сектора, муниципальных предприятий и частного бизнеса.
                </p>
              </div>
              <div className="relative h-96 bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1} 
                    stroke="currentColor" 
                    className="w-24 h-24 text-gray-400"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Наша миссия и ценности
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Мы стремимся обеспечивать надежное и эффективное функционирование электрических систем наших клиентов
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
                <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Качество</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Мы не идем на компромиссы, когда речь идет о качестве выполняемых работ. Все проекты реализуются с соблюдением высоких стандартов и нормативных требований.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
                <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Надежность</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Наши клиенты могут рассчитывать на нас в любых ситуациях. Мы выполняем свои обязательства точно в срок и в полном объеме, даже в самых сложных условиях.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
                <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Инновации</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Мы постоянно следим за новыми технологиями и внедряем инновационные решения, которые повышают эффективность и надежность электрических систем.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Наш опыт
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                За более чем 10 лет работы мы накопили огромный опыт реализации проектов различной сложности
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
                <div className="text-gray-600 dark:text-gray-400">Выполненных проектов</div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">100+</div>
                <div className="text-gray-600 dark:text-gray-400">Квалифицированных специалистов</div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">20+</div>
                <div className="text-gray-600 dark:text-gray-400">Регионов присутствия</div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">13</div>
                <div className="text-gray-600 dark:text-gray-400">Лет на рынке</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Нужна консультация?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Наши специалисты готовы помочь вам с любыми вопросами и расчетом стоимости работ.
              </p>
              <Link
                href="/contacts"
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