import Hero from "../Components/Hero";
import FeatureSection from "../Components/FeatureSection";
import Navbar from "../Components/Navbar";
import StatusWindow from "@/Components/StatusWindow";
import { useLocation } from "react-router-dom";

function HomePage() {
    const location = useLocation();
    const { userData } = location.state || {};
    console.log('userData:', userData);
    return (
        <>
            <Navbar />
            <StatusWindow />
            <Hero />
            <FeatureSection />
        </>
    );
}

export default HomePage