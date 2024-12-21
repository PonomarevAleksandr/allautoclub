import PropTypes from "prop-types";
import {motion} from "framer-motion";
import {useState} from "react";
import {
    AiOutlineEnvironment,
    AiOutlineFileDone,
    AiOutlineDollar,
    AiOutlineRise,
} from "react-icons/ai";

const Calculator = ({regions, openModal}) => {
    const [selectedRegion, setSelectedRegion] = useState(Object.keys(regions)[0]);
    const [contracts, setContracts] = useState(10);
    const [avgCheck, setAvgCheck] = useState(25000);
    const regionData = regions[selectedRegion];
    const revenue = contracts * avgCheck;
    const royalty = revenue * 0.15;
    const profit = revenue - royalty;
    const franchiseCost = regionData.businesses * 0.1 * 0.2 * 300;

    return (
        <div id="calc" className="relative flex justify-center items-center">
            <motion.div
                className="w-full max-w-[400px] sm:max-w-[600px] bg-neutral-800 md:max-w-[700px] lg:max-w-[800px] p-6 sm:p-8  rounded-lg shadow-lg border border-neutral-700 backdrop-blur-md mt-10"
                initial={{opacity: 0, scale: 0.9}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.8, ease: "easeOut"}}
            >
                <div className="max-w-full mx-auto">
                    {/* Регион */}
                    <div className="mb-6">
                        <label
                            htmlFor="region"
                            className="block text-neutral-300 mb-2 text-sm sm:text-base md:text-lg font-medium"
                        >
                            Выберите регион:
                        </label>
                        <div className="flex items-center gap-3">
                            <AiOutlineEnvironment className="text-blue-400 text-xl sm:text-2xl"/>
                            <select
                                id="region"
                                value={selectedRegion}
                                onChange={(e) => setSelectedRegion(e.target.value)}
                                className="w-full p-2 sm:p-3 text-neutral-200 bg-neutral-700 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                            >
                                {Object.keys(regions).map((region) => (
                                    <option key={region} value={region}>
                                        {region}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Договоры */}
                    <div className="mb-6">
                        <label
                            htmlFor="contracts"
                            className="block text-neutral-300 mb-2 text-sm sm:text-base md:text-lg font-medium"
                        >
                            Договоры в месяц:
                        </label>
                        <div className="flex items-center gap-3">
                            <AiOutlineFileDone className="text-green-400 text-xl sm:text-2xl"/>
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
                        <div className="text-neutral-400 mt-1 text-center text-sm sm:text-base md:text-lg">
                            {contracts} договоров
                        </div>
                    </div>

                    {/* Средний чек */}
                    <div className="mb-6">
                        <label
                            htmlFor="avgCheck"
                            className="block text-neutral-300 mb-2 text-sm sm:text-base md:text-lg font-medium"
                        >
                            Средний чек (руб.):
                        </label>
                        <div className="flex items-center gap-3">
                            <AiOutlineDollar className="text-yellow-400 text-xl sm:text-2xl"/>
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
                        <div className="text-neutral-400 mt-1 text-center text-sm sm:text-base md:text-lg">
                            {avgCheck.toLocaleString()} руб.
                        </div>
                    </div>

                    {/* Итоги */}
                    <div className="mt-6 text-neutral-300 space-y-3 sm:space-y-4">
                        <div className="flex items-center gap-3">
                            <AiOutlineEnvironment className="text-blue-400 text-xl sm:text-2xl"/>
                            <p>
                                Население региона:{" "}
                                <span className="font-bold text-neutral-100">
                {regionData.population.toLocaleString()} чел.
              </span>
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <AiOutlineEnvironment className="text-blue-400 text-xl sm:text-2xl"/>
                            <p>
                                Бизнесов в регионе:{" "}
                                <span className="font-bold text-neutral-100">
                {regionData.businesses.toLocaleString()} шт.
              </span>
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <AiOutlineDollar className="text-green-400 text-xl sm:text-2xl"/>
                            <p>
                                Выручка:{" "}
                                <span className="font-bold text-neutral-100">
                {revenue.toLocaleString()} руб.
              </span>
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <AiOutlineDollar className="text-red-400 text-xl sm:text-2xl"/>
                            <p>
                                Роялти (15%):{" "}
                                <span className="font-bold text-neutral-100">
                {royalty.toLocaleString()} руб.
              </span>
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <AiOutlineDollar className="text-yellow-400 text-xl sm:text-2xl"/>
                            <p>
                                Стоимость франшизы:{" "}
                                <span className="font-bold text-neutral-100">
                {franchiseCost.toLocaleString()} руб.
              </span>
                            </p>
                        </div>
                    </div>

                    {/* Прибыль */}
                    <div
                        className="mt-8 p-4 sm:p-2 bg-neutral-700 rounded-lg shadow-md border border-neutral-600 text-center">
                        <div onClick={openModal} className="flex items-center justify-center gap-3 text-neutral-100">
                            <AiOutlineRise className="text-purple-500 text-2xl sm:text-3xl"/>
                            <button
                                className="font-bold text-lg sm:text-sm">
                                Прибыль: {profit.toLocaleString()} руб.
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
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
