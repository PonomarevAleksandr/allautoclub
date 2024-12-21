import PropTypes from "prop-types";
import { User } from "lucide-react";
import { useState } from "react";

const TestimonialCard = ({ testimonial, index, isMobile, hoveredIndex, handleMouseEnter, handleMouseLeave }) => {
    return (
        <div
            className={`w-full sm:w-full md:w-1/2 lg:w-1/3 px-6 py-6 transition-all transform ${
                hoveredIndex === index ? "scale-105 shadow-2xl" : "scale-100"
            }`}
            onMouseEnter={!isMobile ? () => handleMouseEnter(index) : null}
            onMouseLeave={!isMobile ? handleMouseLeave : null}
        >
            <div className="bg-neutral-800 rounded-lg p-6 text-md border border-neutral-700 shadow-lg flex flex-col justify-between space-y-4 h-full">
                <p
                    className="text-neutral-300 text-lg font-light leading-relaxed"
                    style={{
                        minHeight: '120px',  // Обеспечиваем минимальную высоту для текста
                        height: '100%',      // Высота текста внутри карточки будет адаптироваться
                        overflow: "hidden",  // Текст не будет выходить за пределы
                    }}
                >
                    {testimonial.text}
                </p>
                <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 flex items-center justify-center bg-neutral-700 rounded-full border border-neutral-600">
                        <User size={28} className="text-neutral-300" />
                    </div>
                    <div>
                        <h6 className="text-white text-lg font-semibold">{testimonial.user}</h6>
                        <span className="text-sm font-normal italic text-neutral-400">
              {testimonial.company}
            </span>
                    </div>
                </div>
            </div>
        </div>
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

const Testimonials = ({ testimonialsContent }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const isMobile = window.innerWidth < 640;

    const handleMouseEnter = (index) => setHoveredIndex(index);
    const handleMouseLeave = () => setHoveredIndex(null);

    if (!testimonialsContent) return <div>Загрузка...</div>;

    return (
        <div className="mt-20 tracking-wide">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl text-center my-10 lg:my-20 px-4 text-white">
                {testimonialsContent.title}
            </h2>
            <div className="flex flex-wrap justify-center relative px-4">
                {testimonialsContent.items.map((testimonial, index) => (
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

Testimonials.propTypes = {
    testimonialsContent: PropTypes.shape({
        title: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(
            PropTypes.shape({
                user: PropTypes.string.isRequired,
                company: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
};

export default Testimonials;
