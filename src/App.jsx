import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import FeatureSection from "./components/FeatureSection.jsx";
import TestimonialSection from "./components/TestimonialSection.jsx";
import CallToActionSection from "./components/CallToActionSection.jsx";
import {reviews} from "./Datas.js";
import Footer from "./components/Footer.jsx";
import NewTestimonials from "./components/NewTestimonials.jsx";

function App() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <FeatureSection />
            <TestimonialSection />
            <CallToActionSection />

            {/* ✅ Testimonials Grid */}
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {reviews.map((review) => (
                            <NewTestimonials
                                key={review.name}
                                name={review.name}
                                designation={review.designation}
                                review={review.review}
                                imageURL={review.imageURL}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default App;
