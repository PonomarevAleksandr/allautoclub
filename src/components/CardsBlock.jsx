import React, { useRef, useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";

const CardsBlock = ({ cities }) => {
    const scrollContainerRef = useRef(null);
    const cardRef = useRef(null);  // Ссылка на первую карточку
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);

    // Вычисляем ширину карточки, когда компоненты рендерятся
    useEffect(() => {
        if (cardRef.current) {
            setCardWidth(cardRef.current.offsetWidth);
        }
    }, [cities]);

    const scroll = (direction) => {
        if (scrollContainerRef.current && cardWidth > 0) {
            const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
            scrollContainerRef.current.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const onMouseDown = (e) => {
        e.preventDefault(); // Prevent text selection
        setIsDragging(true);
        setStartX(e.clientX);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const onMouseMove = (e) => {
        if (!isDragging) return;
        const x = e.clientX - startX;
        scrollContainerRef.current.scrollLeft = scrollLeft - x;
    };

    const onMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div className="mt-20 max-w-7xl mx-auto pt-20 px-6">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
                Станьте нашим партнёром
            </h2>
            <div className="relative">
                {/* Стрелка влево */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-[-30px] sm:left-[-10px] md:left-[-10px] lg:left-[-60px] top-1/2 transform -translate-y-1/2 text-white bg-orange-500 p-4 rounded-full z-8"
                >
                    &lt;
                </button>

                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto space-x-4 pb-4 scroll-smooth snap-x snap-mandatory cursor-grab"
                    style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
                    onMouseDown={onMouseDown}
                    onMouseMove={onMouseMove}
                    onMouseUp={onMouseUp}
                    onMouseLeave={onMouseUp}
                >
                    {cities.map((option, index) => (
                        <div
                            key={index}
                            className="flex-none w-[280px] sm:w-[350px] md:w-[420px] lg:w-[480px] p-2 snap-start z-9"
                            style={{ minHeight: "100%" }} // Сравниваем высоту карточек
                            ref={index === 0 ? cardRef : null}  // Устанавливаем ref на первую карточку
                        >
                            <div className="p-10 border border-neutral-700 rounded-xl flex flex-col justify-between h-full">
                                <p className="text-4xl mb-8">{option.city}</p>
                                <p className="text-xl mb-4">
                                    Прогнозируемая средняя чистая прибыль:{" "}
                                    <span className="text-orange-500">{option.profit}</span>
                                </p>
                                <p className="mb-8">
                                    Население: <span className="text-neutral-400">{option.population}</span>
                                </p>
                                <p className="mb-8">
                                    Потенциальные клиенты:{" "}
                                    <span className="text-neutral-400">{option.potentialClients}</span>
                                </p>
                                <p className="mb-8">
                                    Рекомендуемая цена сеанса:{" "}
                                    <span className="text-neutral-400">{option.sessionPrice}</span>
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
                                >
                                    Получить коммерческое
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Стрелка вправо */}
                <button
                    onClick={() => scroll("right")}
                    className="absolute sm:right-[-10px] md:right-[-10px] lg:right-[-60px] top-1/2 transform -translate-y-1/2 text-white bg-orange-500 p-4 rounded-full z-8"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default CardsBlock;
