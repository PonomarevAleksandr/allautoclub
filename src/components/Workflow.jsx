import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Award,
  PiggyBank,
  ShoppingBag,
  Smile,
  TrendingUp,
  ShieldCheck,
  DollarSign,
  Clock,
} from "lucide-react";

const icons = [
  <Award key="award" />,
  <PiggyBank key="piggybank" />,
  <ShoppingBag key="shoppingbag" />,
  <Smile key="smile" />,
  <Clock key="clock1" />,
  <TrendingUp key="trendingup" />,
  <ShieldCheck key="shieldcheck" />,
  <DollarSign key="dollarsign" />,
  <Clock key="clock2" />,
];

const WorkflowItem = ({ icon, title, description, delay, isLast }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
      <motion.div
          ref={ref}
          className="flex items-center mb-14"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.5,
            delay,
          }}
      >
        <div className="relative">
          <div className="text-orange-500 bg-neutral-900 h-16 w-16 flex justify-center items-center rounded-full shadow-lg">
            {icon}
          </div>
          {!isLast && (
              <div className="absolute h-full w-0.5 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-orange-500 to-transparent mt-2"></div>
          )}
        </div>
        <div className="ml-8">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <p className="text-md text-neutral-500 leading-relaxed">{description}</p>
        </div>
      </motion.div>
  );
};

const Workflow = ({ workflowContent }) => {
  if (!workflowContent) return <div>Загрузка...</div>;

  return (
      <div className="mt-20 z-10">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
          {workflowContent.title}{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {workflowContent.highlightedTitle}
        </span>
        </h2>
        <div className="flex flex-wrap justify-center mt-12">
          <div className="pt-12 w-full lg:w-1/2">
            {workflowContent.items.map((item, index) => (
                <WorkflowItem
                    key={index}
                    icon={icons[index]}
                    title={item.title}
                    description={item.description}
                    delay={index * 0.2}
                    isLast={index === workflowContent.items.length - 1}
                />
            ))}
          </div>
        </div>
      </div>
  );
};

export default Workflow;
