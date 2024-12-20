// import Navbar from "./components/Navbar";
// import MainBlock from "./components/MainBlock.jsx";
// import FeaturesBlock from "./components/FeaturesBlock.jsx";
// import Workflow from "./components/Workflow";
// import Calculator from "./components/Calculator";
// import regions from "./constants/regions.json"
// import Testimonials from "./components/Testimonials";
// import React, { useEffect, useState } from "react";
//
// const App = () => {
//     const [data, setData] = useState(null);
//
//     useEffect(() => {
//         fetch(`/content.json?timestamp=${Date.now()}`)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error(`Ошибка сети: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 console.log("Данные загружены в App:", data);
//                 setData(data);
//             })
//             .catch((error) => console.error("Ошибка загрузки данных в App:", error));
//     }, []);
//
//     if (!data) {
//         return <div>Загрузка...</div>; // Пока данные загружаются
//     }
//     return (
//         <>
//             <Navbar />
//             <MainBlock/>
//             <div className="max-w-7xl mx-auto pt-20 z-9 px-6">
//
//                 <FeaturesBlock featuresBlock={data.featuresBlock}/>
//                 <Workflow/>
//                 {/*<CardsBlock/>*/}
//                 <Testimonials/>
//                 <Calculator regions={regions} />
//
//                 {/*<Footer/>*/}
//             </div>
//         </>
//     );
// };
//
// export default App;


import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import MainBlock from "./components/MainBlock";
import FeaturesBlock from "./components/FeaturesBlock";
import Workflow from "./components/Workflow";
import Testimonials from "./components/Testimonials.jsx";
import Calculator from "./components/Calculator";
import regions from "./constants/regions.json"

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
            <Calculator regions={regions} />

        </div>
    );
};

export default App;
