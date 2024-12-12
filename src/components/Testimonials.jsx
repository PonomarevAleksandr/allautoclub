import PropTypes from 'prop-types';
import { motion, useInView } from "framer-motion";
import { User } from "lucide-react";
import { testimonials } from "../constants";
import { useState, useRef } from "react";

const TestimonialCard = ({ testimonial, index, isMobile, hoveredIndex, handleMouseEnter, handleMouseLeave }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, {
    once: true,
    amount: isMobile ? 1 : 0.5,
  });

  return (
    <motion.div
      ref={itemRef}
      className={`w-full sm:w-full md:w-1/2 lg:w-1/3 px-4 py-4 transition-opacity ${
        hoveredIndex !== null && hoveredIndex !== index ? "opacity-50" : "opacity-100"
      }`}
      onMouseEnter={!isMobile ? () => handleMouseEnter(index) : null}
      onMouseLeave={!isMobile ? handleMouseLeave : null}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
    >
      <motion.div
        whileHover={!isMobile ? { scale: 1.05 } : {}}
        className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin shadow-lg flex flex-col justify-between"
        style={{ height: "350px", overflow: "hidden" }} // Фиксированная высота карточки
      >
        <p
          className="text-neutral-400 flex-grow overflow-hidden text-ellipsis"
          style={{ display: "-webkit-box", WebkitLineClamp: 5, WebkitBoxOrient: "vertical" }} // Лимит строк для текста
        >
          {testimonial.text}
        </p>
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
};

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    company: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  isMobile: PropTypes.bool.isRequired,
  hoveredIndex: PropTypes.number,
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
};

const Testimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const isMobile = window.innerWidth < 640;

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <div className="mt-20 tracking-wide">
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-6xl text-center my-10 lg:my-20 px-4"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Отзывы о нашем сервисе
      </motion.h2>
      <div className="flex flex-wrap justify-center relative px-4">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            testimonial={testimonial}
            index={index}
            isMobile={isMobile}
            hoveredIndex={hoveredIndex}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
