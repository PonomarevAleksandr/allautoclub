import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import animationData from "../assets/animations/Magnificationglass-left.json"; // Путь к JSON анимации
import { motion } from "framer-motion";

const TownOffer = ({ townOfferContent, openModal}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isPaused, setIsPaused] = useState(false); // Состояние для паузы/воспроизведения анимации

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("town-offer-section");
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const handleClick = () => {
        setIsPaused(!isPaused);
    };

    return (
        <div className="w-full bg-black py-16 px-6" id="town-offer-section">
            <motion.div
                className="max-w-7xl mx-auto flex items-center justify-between"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
                transition={{ duration: 0.8 }}
            >
                {/* Левый блок с анимацией */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="relative flex justify-center items-center" onClick={handleClick}>
                        <Lottie
                            options={defaultOptions}
                            height={200}
                            width={200}
                            isPaused={isPaused}
                            className="sm:opacity-30 sm:w-1/2 sm:h-1/2"
                        />
                    </div>
                </div>

                {/* Правый блок с текстом */}
                <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
                    <h2 className="text-3xl sm:text-2xl md:text-5xl font-extrabold text-white mb-4 sm:text-center lg:text-left">
                        {townOfferContent.title}{" "}
                        <span className="bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">
                            {townOfferContent.highlightedTitle}
                        </span>
                    </h2>
                    <p className="text-lg sm:text-base text-neutral-400 mb-6">
                        {townOfferContent.description}
                    </p>
                    <button
                        onClick={openModal}
                        className="bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg text-lg transition duration-200">
                        {townOfferContent.buttonText}
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default TownOffer;
