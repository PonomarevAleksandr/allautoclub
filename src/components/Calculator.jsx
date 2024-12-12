import PropTypes from 'prop-types';
import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineEnvironment, AiOutlineFileDone, AiOutlineDollar, AiOutlineRise } from "react-icons/ai";

const Calculator = ({ regions }) => {
  const [selectedRegion, setSelectedRegion] = useState(Object.keys(regions)[0]);
  const [contracts, setContracts] = useState(10);
  const [avgCheck, setAvgCheck] = useState(25000);

  const regionData = regions[selectedRegion];

  const revenue = contracts * avgCheck;
  const royalty = revenue * 0.15;
  const profit = revenue - royalty;

  // Расчет стоимости франшизы
  const franchiseCost = regionData.businesses * 0.1 * 0.2 * 300;

  return (
    <motion.div
      id="calc"
      className="mt-20 pb-20 tracking-wide"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.5 }}
    >
      <motion.h2
        className="text-4xl sm:text-5xl lg:text-6xl text-center font-bold text-neutral-100"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Калькулятор стоимости франшизы
      </motion.h2>

      <div className="max-w-3xl mx-auto p-8 bg-gray-800 rounded-lg shadow-lg border border-gray-700 mt-10">
        {/* Регион */}
        <div className="mb-8">
          <label htmlFor="region" className="block text-neutral-300 mb-2 text-lg font-medium">
            Выберите регион:
          </label>
          <div className="flex items-center gap-3">
            <AiOutlineEnvironment className="text-blue-400 text-2xl" />
            <select
              id="region"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full p-3 bg-gray-700 text-neutral-200 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            >
              {Object.keys(regions).map((region) => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Договоры */}
        <div className="mb-8">
          <label htmlFor="contracts" className="block text-neutral-300 mb-2 text-lg font-medium">
            Договоры в месяц:
          </label>
          <div className="flex items-center gap-3">
            <AiOutlineFileDone className="text-green-400 text-2xl" />
            <input
              id="contracts"
              type="range"
              min="10"
              max="60"
              value={contracts}
              onChange={(e) => setContracts(Number(e.target.value))}
              className="w-full accent-green-500"
            />
          </div>
          <div className="text-neutral-400 mt-1 text-center text-lg">{contracts} договоров</div>
        </div>

        {/* Средний чек */}
        <div className="mb-8">
          <label htmlFor="avgCheck" className="block text-neutral-300 mb-2 text-lg font-medium">
            Средний чек (руб.):
          </label>
          <div className="flex items-center gap-3">
            <AiOutlineDollar className="text-yellow-400 text-2xl" />
            <input
              id="avgCheck"
              type="range"
              min="25000"
              max="100000"
              step="5000"
              value={avgCheck}
              onChange={(e) => setAvgCheck(Number(e.target.value))}
              className="w-full accent-yellow-500"
            />
          </div>
          <div className="text-neutral-400 mt-1 text-center text-lg">{avgCheck.toLocaleString()} руб.</div>
        </div>

        {/* Итоги */}
        <div className="mt-8 text-neutral-300 space-y-4">
          <div className="flex items-center gap-3">
            <AiOutlineEnvironment className="text-blue-400 text-2xl" />
            <p>Население региона: <span className="font-bold text-neutral-100">{regionData.population.toLocaleString()} чел.</span></p>
          </div>
          <div className="flex items-center gap-3">
            <AiOutlineEnvironment className="text-blue-400 text-2xl" />
            <p>Бизнесов в регионе: <span className="font-bold text-neutral-100">{regionData.businesses.toLocaleString()} шт.</span></p>
          </div>
          <div className="flex items-center gap-3">
            <AiOutlineDollar className="text-yellow-400 text-2xl" />
            <p>Стоимость франшизы: <span className="font-bold text-neutral-100">{franchiseCost.toLocaleString()} руб.</span></p>
          </div>
          <div className="flex items-center gap-3">
            <AiOutlineDollar className="text-green-400 text-2xl" />
            <p>Выручка: <span className="font-bold text-neutral-100">{revenue.toLocaleString()} руб.</span></p>
          </div>
          <div className="flex items-center gap-3">
            <AiOutlineDollar className="text-red-400 text-2xl" />
            <p>Роялти (15%): <span className="font-bold text-neutral-100">{royalty.toLocaleString()} руб.</span></p>
          </div>
        </div>

        {/* Прибыль */}
        <div className="mt-10 p-6 bg-gray-700 rounded-lg shadow-md border border-gray-600 text-center">
          <div className="flex items-center justify-center gap-3 text-neutral-100">
            <AiOutlineRise className="text-purple-500 text-3xl" />
            <p className="font-bold text-2xl">Прибыль: {profit.toLocaleString()} руб.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

Calculator.propTypes = {
  regions: PropTypes.objectOf(
    PropTypes.shape({
      population: PropTypes.number.isRequired,
      businesses: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default Calculator;