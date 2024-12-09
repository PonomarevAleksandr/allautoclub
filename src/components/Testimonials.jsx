import { motion, useInView } from "framer-motion";
import { User } from "lucide-react"; // Иконка профиля
import { testimonials } from "../constants";
import { useState, useRef, useEffect } from "react";

const Testimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const isMobile = window.innerWidth < 640; // Определяем мобильное устройство

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <div className="mt-20 tracking-wide pb-20">
      {/* Заголовок с анимацией */}
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-6xl text-center my-10 lg:my-20 px-4"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        Отзывы о нашем сервисе
      </motion.h2>
      <div className="flex flex-wrap justify-center relative px-4">
        {testimonials.map((testimonial, index) => {
          const itemRef = useRef(null);
          const isInView = useInView(itemRef, {
            once: true,
            amount: isMobile ? 1 : 0.5, // На мобильном устройстве полный отзыв должен быть видим
          });

          useEffect(() => {
            if (isInView && isMobile) {
              itemRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }
          }, [isInView, isMobile]);

          return (
            <motion.div
              key={index}
              ref={itemRef}
              className={`w-full sm:w-full md:w-1/2 lg:w-1/3 px-4 py-4 transition-all duration-300 ${
                hoveredIndex !== null && hoveredIndex !== index
                  ? "blur-sm opacity-50"
                  : "opacity-100"
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin"
              >
                <p className="text-neutral-400">{testimonial.text}</p>
                <div className="flex mt-8 items-center">
                  <div className="w-12 h-12 mr-6 flex items-center justify-center bg-neutral-700 rounded-full border border-neutral-300">
                    <User size={24} className="text-neutral-400" />
                  </div>
                  <div>
                    <h6 className="text-white">{testimonial.user}</h6>
                    <span className="text-sm font-normal italic text-neutral-600">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
