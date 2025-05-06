"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 pt-16 overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-1/3 -left-24 w-80 h-80 bg-orange-500 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 sm:pt-24 sm:pb-40 lg:pt-32 lg:pb-48 z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-10 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Надежный партнер в области{" "}
                <span className="text-gradient">энергетики</span> и{" "}
                <span className="text-gradient">электромонтажа</span>
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl">
                ЭРС Групп предоставляет профессиональные электромонтажные услуги 
                и сервисное обслуживание энергетического оборудования в самых 
                суровых регионах России с 2010 года.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="rounded-full bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all"
                >
                  Наши услуги
                </Link>
                <Link
                  href="/contacts"
                  className="rounded-full bg-white/10 px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all"
                >
                  Связаться с нами
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              <div className="relative h-[400px] sm:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-image.jpg"
                  alt="Электромонтажные работы"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                
                <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Профессиональный подход</h3>
                      <p className="text-gray-300 text-sm">Качество, надежность, безопасность</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="flex flex-col items-center text-center">
            <div className="text-4xl font-bold text-white">2010</div>
            <p className="mt-2 text-gray-400">Год основания</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-4xl font-bold text-white">15+</div>
            <p className="mt-2 text-gray-400">Филиалов по России</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-4xl font-bold text-white">500+</div>
            <p className="mt-2 text-gray-400">Сотрудников</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-4xl font-bold text-white">1000+</div>
            <p className="mt-2 text-gray-400">Успешных проектов</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 