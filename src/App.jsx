import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import FeatureSection from "./components/FeatureSection.jsx";
import TestimonialSection from "./components/TestimonialSection.jsx";
import CallToActionSection from "./components/CallToActionSection.jsx";
import Footer from "./components/Footer.jsx";

function App(){
    return(
        <>
            <Navbar />
            <HeroSection />
            <FeatureSection />
            <TestimonialSection />
            <CallToActionSection />
            <Footer />
        </>
    )
}
export default App;