import { motion } from "framer-motion";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Alternative = ({ content, openModal}) => {
    return (
        <motion.div
            className="relative flex flex-col md:flex-row items-center
            justify-center rounded-lg shadow-lg p-8 md:p-12 text-white bg-neutral-800 backdrop-blur-md border
            border-neutral-600 mt-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            {/* Левая часть с текстом */}
            <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    {content.title}
                </h2>
                <ul className="text-lg text-gray-300 space-y-4">
                    {content.features.map((feature, index) => (
                        <li className="flex items-center" key={index}>
                            <AiOutlineCheckCircle className="text-orange-500 text-2xl mr-3" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
                <p className="text-gray-400 mt-6">
                    {content.infoText}
                </p>
            </div>

            {/* Правая часть с кругом и кнопкой */}
            <div className="md:w-1/2 flex flex-col items-center">
                {/* Круг с процентами */}
                <div className="relative w-48 h-48 border-4 border-orange-500 rounded-full flex items-center justify-center bg-neutral-700/50 backdrop-blur-md">
                    <div className="text-center">
                        <span className="text-5xl font-bold text-orange-500">40%</span>
                        <p className="text-lg text-gray-300">{content.circleText}</p>
                    </div>
                </div>

                {/* Кнопка */}
                <button
                    onClick={openModal}
                    className="mt-8 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300">
                    {content.buttonText}
                </button>
            </div>
        </motion.div>
    );
};

export default Alternative;
