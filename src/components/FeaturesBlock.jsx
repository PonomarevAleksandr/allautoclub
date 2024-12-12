import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { features } from "../constants";

const FeaturesBlock = () => {
  const featureRefs = useRef([]);
  const [visibleFeatures, setVisibleFeatures] = useState([]);
  const [titleInView, setTitleInView] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const featureObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.dataset.index;
          if (entry.isIntersecting && !visibleFeatures.includes(index)) {
            setVisibleFeatures((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    featureRefs.current.forEach((ref) => {
      if (ref) featureObserver.observe(ref);
    });

    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !titleInView) {
          setTitleInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }

    return () => {
      featureObserver.disconnect();
      titleObserver.disconnect();
    };
  }, [visibleFeatures, titleInView]);

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div
      id="club"
      className="relative mt-20 border-b border-neutral-800 min-h-[800px] px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden pb-20"
    >
      <motion.div
        ref={titleRef}
        className="text-center"
        variants={titleVariants}
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
        transition={{ duration: 0.8 }}
      >
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Кто мы
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          ALLAUTO{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            CLUB
          </span>
        </h2>
      </motion.div>
      <div className="flex flex-wrap justify-center mt-10 lg:mt-20 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 px-4"
            ref={(el) => (featureRefs.current[index] = el)}
            data-index={index}
            variants={itemVariants}
            initial="hidden"
            animate={visibleFeatures.includes(index.toString()) ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div className="mt-4 text-center">
                <h5 className="mt-1 mb-2 text-xl">{feature.text}</h5>
                <p className="text-md text-neutral-500">{feature.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesBlock;
