import { motion } from "framer-motion";
import { useState } from "react";
import Calculator from "./Calculator";
import Alternative from "./Alternative";

const Franchise = ({ regions, franchiseContent, alternativeContent }) => {
    const [activeTab, setActiveTab] = useState("representative");

    const tabVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
    };

    return (
        <div id="calc" className="relative flex flex-col items-center justify-center text-white mt-20 px-4">
            {/* Заголовок */}
            <motion.h1
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-center tracking-wide mb-10"
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } },
                }}
                initial="hidden"
                animate="visible"
            >
                {franchiseContent.title}{" "}
                <span className="bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
                    {franchiseContent.highlightedTitle}
                </span>
            </motion.h1>

            {/* Переключатель */}
            <div className="relative flex items-center justify-between w-full max-w-md sm:max-w-lg h-14 bg-gray-900/50 backdrop-blur-md rounded-full shadow-lg px-1">
                {/* Фон активного таба */}
                <motion.div
                    className="absolute top-1 bottom-1 rounded-full bg-gradient-to-r from-orange-500 to-red-600"
                    layout
                    initial={{ width: "50%" }}
                    animate={{
                        width: "calc(50% - 8px)", // Уменьшение ширины, чтобы оставить отступы внутри
                        left: activeTab === "representative" ? "4px" : "calc(50% + 4px)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                ></motion.div>

                {/* Табы */}
                <button
                    onClick={() => setActiveTab("representative")}
                    className={`relative z-10 flex-1 py-2 text-center font-medium text-base sm:text-lg transition-colors duration-300 ${
                        activeTab === "representative" ? "text-white" : "text-gray-400"
                    }`}
                >
                    {franchiseContent.tabs.representative}
                </button>
                <button
                    onClick={() => setActiveTab("investor")}
                    className={`relative z-10 flex-1 py-2 text-center font-medium text-base sm:text-lg transition-colors duration-300 ${
                        activeTab === "investor" ? "text-white" : "text-gray-400"
                    }`}
                >
                    {franchiseContent.tabs.investor}
                </button>
            </div>

            {/* Контент */}
            <motion.div
                className="w-full max-w-4xl mx-auto mt-10 min-h-[500px] px-4 sm:px-6"
                key={activeTab}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={tabVariants}
            >
                {activeTab === "representative" && <Calculator regions={regions} />}
                {activeTab === "investor" && <Alternative content={alternativeContent} />}
            </motion.div>
        </div>
    );
};

export default Franchise;
