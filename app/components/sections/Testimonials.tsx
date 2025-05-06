"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    id: 1,
    content: "ЭРС Групп отличается высоким профессионализмом и оперативностью в решении любых задач. Их вклад в обеспечение бесперебойной работы нашего предприятия трудно переоценить.",
    author: "Алексей Михайлов",
    role: "Главный энергетик, АО Полиметалл",
    image: "/images/testimonials/person1.jpg",
  },
  {
    id: 2,
    content: "Сотрудничаем с ЭРС Групп более 5 лет. Ценим их за качество работ, соблюдение сроков и внимание к деталям. Настоящие профессионалы своего дела!",
    author: "Екатерина Соколова",
    role: "Директор по производству, ООО Энергопром",
    image: "/images/testimonials/person2.jpg",
  },
  {
    id: 3,
    content: "Специалисты ЭРС Групп выполнили сложнейшие электромонтажные работы в крайне сжатые сроки. Все было сделано качественно, с соблюдением всех норм и стандартов.",
    author: "Сергей Петров",
    role: "Технический директор, ЗАО Энергострой",
    image: "/images/testimonials/person3.jpg",
  },
];

const partners = [
  { id: 1, name: "Полиметалл", logo: "/images/partners/partner1.svg" },
  { id: 2, name: "Энергопром", logo: "/images/partners/partner2.svg" },
  { id: 3, name: "РусГидро", logo: "/images/partners/partner3.svg" },
  { id: 4, name: "Энергострой", logo: "/images/partners/partner4.svg" },
  { id: 5, name: "ТЭК-Инжиниринг", logo: "/images/partners/partner5.svg" },
];

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-gray-900 overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Что говорят наши клиенты
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            Наш успех измеряется удовлетворенностью наших клиентов и долгосрочными партнерскими отношениями
          </p>
        </motion.div>

        <div className="relative">
          <div className="mx-auto max-w-4xl">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: activeTestimonial === index ? 1 : 0,
                  x: activeTestimonial === index ? 0 : 20,
                  display: activeTestimonial === index ? 'block' : 'none'
                }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 relative z-10"
              >
                <div className="flex items-center gap-6">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.author}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <svg className="h-12 w-12 text-gray-200 dark:text-gray-700 absolute top-6 right-8" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-lg text-gray-700 dark:text-gray-300">"{testimonial.content}"</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`h-3 w-3 rounded-full transition-colors duration-300 focus:outline-none ${
                  activeTestimonial === index ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-700'
                }`}
                aria-label={`Показать отзыв ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="text-center text-xl font-semibold text-gray-900 dark:text-white mb-10">
            Нам доверяют
          </h3>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {partners.map((partner) => (
              <div key={partner.id} className="flex justify-center">
                <div className="h-16 w-32 relative grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 