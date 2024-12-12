import Navbar from "./components/Navbar";
import MainBlock from "./components/MainBlock.jsx";
import FeaturesBlock from "./components/FeaturesBlock.jsx";
import Workflow from "./components/Workflow";
import Calculator from "./components/Calculator";
import regions from "./constants/regions.json"
import Testimonials from "./components/Testimonials";

const App = () => {
    return (
        <>
            <Navbar />
            <MainBlock/>
            <div className="max-w-7xl mx-auto pt-20 z-9 px-6">

                <FeaturesBlock/>
                <Workflow/>
                {/*<CardsBlock/>*/}
                <Testimonials/>
                <Calculator regions={regions} />

                {/*<Footer/>*/}
            </div>
        </>
    );
};

export default App;
