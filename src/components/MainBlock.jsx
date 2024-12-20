import { motion } from "framer-motion";
import video1 from "../assets/video2.mp4";

const MainBlock = ({ mainBlockContent }) => {
    if (!mainBlockContent) return <div>Загрузка...</div>;

    return (
        <div
            id="home"
            className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden"
        >
            <motion.div
                className="absolute inset-0 w-full h-full"
                style={{
                    transform: `translateY(${window.scrollY * 0.8}px)`
                }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { duration: 1.5 } }
                }}
                initial="hidden"
                animate="visible"
            >
                <video autoPlay loop muted className="w-full h-full object-cover">
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </motion.div>

            <div className="absolute inset-0 w-full h-full bg-black/50"></div>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black"></div>
            <div className="absolute inset-0 w-full h-full bg-black/30 backdrop-blur-md"></div>

            <div className="relative z-10 text-center p-4 sm:p-6">
                <motion.h1
                    className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-center tracking-wide text-white"
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }
                    }}
                    initial="hidden"
                    animate="visible"
                >
                    {mainBlockContent.title}
                    <span className="bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
            {" "}
                        {mainBlockContent.highlightedTitle}
          </span>
                </motion.h1>
                <motion.p
                    className="mt-6 sm:mt-8 md:mt-10 text-sm sm:text-md md:text-lg text-center text-neutral-200 max-w-xs sm:max-w-md md:max-w-4xl mx-auto"
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1 } }
                    }}
                    initial="hidden"
                    animate="visible"
                >
                    {mainBlockContent.subtitle}
                    <span className="bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
            {" "}
                        {mainBlockContent.highlightedSubtitle}
          </span>
                </motion.p>

                <motion.div
                    className="flex justify-center my-6 sm:my-8 md:my-10"
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1.5 } }
                    }}
                    initial="hidden"
                    animate="visible"
                >
                    <a
                        href="#"
                        className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 sm:py-3 sm:px-4 md:px-6 md:py-4 mx-2 sm:mx-3 rounded-md text-sm sm:text-base md:text-lg text-white shadow-lg"
                    >
                        {mainBlockContent.buttonText}
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default MainBlock;
