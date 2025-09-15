/*
* Description: Carousel or grid layout for user feedback/testimonials (manual version).
* Purpose: Provides social proof to build trust and credibility without mapping over array.
*/

function TestimonialSection() {
    return (
        <section id="testimonials" className="bg-white py-20">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
                        Loved by Teams Worldwide
                    </h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
                    </p>
                </div>

                {/* Testimonials Grid (manual entries) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Testimonial 1 */}
                    <figure className="bg-gray-50 p-8 rounded-lg shadow-md flex flex-col justify-between">
                        <blockquote className="relative">
                            <svg className="w-10 h-10 text-indigo-200 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                <path d="M9.333 4C4.186 4 0 8.186 0 13.333c0 5.147 4.186 9.333 9.333 9.333.36 0 .713-.027.933-.053v-4.027c-.22-.026-.586-.053-.933-.053-2.4 0-4.333-1.933-4.333-4.333s1.933-4.333 4.333-4.333h.8L12 4.053A9.287 9.287 0 009.333 4zm13.334 0c-5.147 0-9.333 4.186-9.333 9.333 0 5.147 4.186 9.333 9.333 9.333.36 0 .713-.027.933-.053v-4.027c-.22-.026-.586-.053-.933-.053-2.4 0-4.333-1.933-4.333-4.333s1.933-4.333 4.333-4.333h.8L25.333 4.053A9.287 9.287 0 0022.667 4z" />
                            </svg>
                            <p className="text-gray-600 text-lg italic">
                                "This tool has completely transformed our workflow. We're more organized and productive than ever before. It's a game-changer for our entire team."
                            </p>
                        </blockquote>
                        <figcaption className="flex items-center mt-6">
                            <img className="w-14 h-14 rounded-full object-cover" src="https://i.pravatar.cc/100?img=1" alt="Avatar of Jane Doe" />
                            <div className="ml-4">
                                <p className="font-semibold text-gray-800">Jane Doe</p>
                                <p className="text-sm text-gray-500">Project Manager, TechCorp</p>
                            </div>
                        </figcaption>
                    </figure>

                    {/* Testimonial 2 */}
                    <figure className="bg-gray-50 p-8 rounded-lg shadow-md flex flex-col justify-between">
                        <blockquote className="relative">
                            <svg className="w-10 h-10 text-indigo-200 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                <path d="M9.333 4C4.186 4 0 8.186 0 13.333c0 5.147 4.186 9.333 9.333 9.333.36 0 .713-.027.933-.053v-4.027c-.22-.026-.586-.053-.933-.053-2.4 0-4.333-1.933-4.333-4.333s1.933-4.333 4.333-4.333h.8L12 4.053A9.287 9.287 0 009.333 4zm13.334 0c-5.147 0-9.333 4.186-9.333 9.333 0 5.147 4.186 9.333 9.333 9.333.36 0 .713-.027.933-.053v-4.027c-.22-.026-.586-.053-.933-.053-2.4 0-4.333-1.933-4.333-4.333s1.933-4.333 4.333-4.333h.8L25.333 4.053A9.287 9.287 0 0022.667 4z" />
                            </svg>
                            <p className="text-gray-600 text-lg italic">
                                "The intuitive design and powerful features made adoption a breeze. Our team was up and running in minutes, not days. Highly recommended!"
                            </p>
                        </blockquote>
                        <figcaption className="flex items-center mt-6">
                            <img className="w-14 h-14 rounded-full object-cover" src="https://i.pravatar.cc/100?img=3" alt="Avatar of John Smith" />
                            <div className="ml-4">
                                <p className="font-semibold text-gray-800">John Smith</p>
                                <p className="text-sm text-gray-500">Lead Developer, Innovate LLC</p>
                            </div>
                        </figcaption>
                    </figure>

                    {/* Testimonial 3 */}
                    <figure className="bg-gray-50 p-8 rounded-lg shadow-md flex flex-col justify-between">
                        <blockquote className="relative">
                            <svg className="w-10 h-10 text-indigo-200 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                <path d="M9.333 4C4.186 4 0 8.186 0 13.333c0 5.147 4.186 9.333 9.333 9.333.36 0 .713-.027.933-.053v-4.027c-.22-.026-.586-.053-.933-.053-2.4 0-4.333-1.933-4.333-4.333s1.933-4.333 4.333-4.333h.8L12 4.053A9.287 9.287 0 009.333 4zm13.334 0c-5.147 0-9.333 4.186-9.333 9.333 0 5.147 4.186 9.333 9.333 9.333.36 0 .713-.027.933-.053v-4.027c-.22-.026-.586-.053-.933-.053-2.4 0-4.333-1.933-4.333-4.333s1.933-4.333 4.333-4.333h.8L25.333 4.053A9.287 9.287 0 0022.667 4z" />
                            </svg>
                            <p className="text-gray-600 text-lg italic">
                                "Customer support is top-notch, and the analytics have given us invaluable insights into our project cycles. We can't imagine working without it."
                            </p>
                        </blockquote>
                        <figcaption className="flex items-center mt-6">
                            <img className="w-14 h-14 rounded-full object-cover" src="https://i.pravatar.cc/100?img=5" alt="Avatar of Emily White" />
                            <div className="ml-4">
                                <p className="font-semibold text-gray-800">Emily White</p>
                                <p className="text-sm text-gray-500">CEO, Solutions Inc.</p>
                            </div>
                        </figcaption>
                    </figure>

                </div>
            </div>
        </section>
    );
}

export default TestimonialSection;
