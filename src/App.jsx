import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import MainBlock from "./components/MainBlock";
import FeaturesBlock from "./components/FeaturesBlock";
import Workflow from "./components/Workflow";
import Testimonials from "./components/Testimonials";
import regions from "./constants/regions.json";
import Franchise from "./components/Franchise/Franchise";
import CardsBlock from "./components/CardsBlock.jsx";

const App = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`/content.json?timestamp=${Date.now()}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Ошибка сети: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log("Данные загружены в App:", data);
                setData(data);
            })
            .catch((error) => console.error("Ошибка загрузки данных в App:", error));
    }, []);

    if (!data) {
        return <div>Загрузка...</div>; // Пока данные загружаются
    }

    return (
        <div>
            <Navbar navbarContent={data.navbar} />
            <MainBlock mainBlockContent={data.mainBlock} />
                <FeaturesBlock featuresBlock={data.featuresBlocks} />
                <Workflow workflowContent={data.workflow} />
                <Testimonials testimonialsContent={data.testimonials} />
                <Franchise
                    regions={regions}
                    franchiseContent={data.franchise}
                    alternativeContent={data.alternative}
                />
                <div className="relative">
                    <CardsBlock cities={data.cities} />
                </div>
        </div>
    );


};

export default App;
