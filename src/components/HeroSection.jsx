/*
* Hero banner section with headline, subheadline, and CTA button.
* First impression area highlighting TaskFlow’s value proposition and encouraging sign-up.
* */
import heroImage from '../assets/react.svg';

function HeroSection() {
    return (
        <section className="bg-white text-gray-800 py-20">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">

                {/* Text Content */}
                <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                        Streamline Your Workflow Effortlessly
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 mb-8">
                        Our SaaS tool helps you manage tasks, collaborate with your team, and boost productivity. Focus on what matters most.
                    </p>
                    <a
                        href="#signup"
                        className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-indigo-700 transition-colors duration-300"
                    >
                        Get Started for Free
                    </a>
                </div>

                {/* Image Content */}
                <div className="lg:w-1/2 flex justify-center">
                    <img src={heroImage} alt="Workflow Illustration" className="w-3/4 lg:w-full max-w-md"/>
                </div>

            </div>
        </section>
    );
}
export default HeroSection;