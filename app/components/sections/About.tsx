"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const advantages = [
    {
      id: 1,
      title: "Профессиональный опыт",
      description:
        "Компания была основана в 2010 году и успешно зарекомендовала себя на рынке аутсорсинга энергетики.",
    },
    {
      id: 2,
      title: "Квалифицированные специалисты",
      description:
        "Наша команда состоит из профессионалов с многолетним опытом работы в энергетической отрасли.",
    },
    {
      id: 3,
      title: "Работа в сложных условиях",
      description:
        "Мы работаем в самых удаленных и суровых регионах России, обеспечивая стабильную работу оборудования.",
    },
    {
      id: 4,
      title: "Современное оборудование",
      description:
        "Используем передовое оборудование и технологии для диагностики и ремонта энергетических систем.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:grid lg:grid-cols-2 lg:gap-16 items-center"
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              О компании ЭРС Групп
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              ЭРС Групп — группа компаний, состоящая из ООО «ЭРС», ООО «КС» и ООО «Лимэкс». 
              Мы решаем проблемы в области эксплуатации, технического обслуживания, 
              текущего ремонта, оперативно-диспетчерского управления и обеспечения 
              бесперебойной работы энергетического оборудования и инженерных сетей.
            </p>
            
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Мы работаем со многими компаниями в различных отраслях, включая промышленный 
              холдинг «Полиметалл» — одного из лидеров России по добыче драгоценных металлов, 
              занимающего первое место по объемам добытого серебра и третье по добыче золота.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={advantage.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={2} 
                      stroke="currentColor" 
                      className="w-6 h-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {advantage.title}
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">
                      {advantage.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 lg:mt-0 lg:ml-auto relative rounded-2xl overflow-hidden"
          >
            <div className="aspect-[4/3] relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/about-image.jpg"
                alt="ЭРС Групп - работа специалистов"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              
              <div className="absolute left-0 right-0 bottom-0 p-6">
                <div className="flex items-center gap-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-blue-600/10 px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 ring-1 ring-inset ring-blue-600/20">
                      Опыт с 2010 года
                    </span>
                    <span className="inline-flex items-center rounded-full bg-orange-600/10 px-3 py-1 text-sm font-medium text-orange-600 dark:text-orange-400 ring-1 ring-inset ring-orange-600/20">
                      500+ специалистов
                    </span>
                    <span className="inline-flex items-center rounded-full bg-green-600/10 px-3 py-1 text-sm font-medium text-green-600 dark:text-green-400 ring-1 ring-inset ring-green-600/20">
                      15+ филиалов
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-full blur-2xl opacity-30"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-600 rounded-full blur-2xl opacity-30"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 