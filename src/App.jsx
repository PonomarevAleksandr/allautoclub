import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import MainBlock from "./components/MainBlock";
import FeaturesBlock from "./components/FeaturesBlock";
import Workflow from "./components/Workflow";
import Testimonials from "./components/Testimonials";
import regions from "./constants/regions.json";
import Franchise from "./components/Franchise/Franchise";
import CardsBlock from "./components/CardsBlock.jsx";
import Warranty from "./components/Warranty.jsx";
import TownOffer from "./components/TownOffer.jsx";
import SpecialOffer from "./components/SpecialOffer.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";

const App = () => {
    const [data, setData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для открытия/закрытия модалки

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

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    if (!data) {
        return <div>Загрузка...</div>; // Пока данные загружаются
    }

    return (
        <div>
            <Navbar navbarContent={data.navbar}/>
            <MainBlock mainBlockContent={data.mainBlock} openModal={openModal}/>
            <FeaturesBlock featuresBlock={data.featuresBlocks}/>
            <Workflow workflowContent={data.workflow}/>
            <Testimonials testimonialsContent={data.testimonials}/>
            <Franchise
                openModal={openModal}
                regions={regions}
                franchiseContent={data.franchise}
                alternativeContent={data.alternative}
            />
            <div className="relative">
                <CardsBlock cities={data.cities} openModal={openModal}/>
            </div>
            <Warranty warrantyContent={data.warranty} openModal={openModal}/>
            <TownOffer townOfferContent={data.townOffer} openModal={openModal}/>
            <SpecialOffer specialOfferContent={data.specialOffer} openModal={openModal} />
            <ContactForm isOpen={isModalOpen} closeModal={closeModal} />
        </div>
    );
};

export default App;
