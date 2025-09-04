import React, { useState, useRef } from 'react';

// --- SVG Icon Components (Self-contained) ---
const TaskIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="m9 14 2 2 4-4" />
    </svg>
);

const CollaborationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

const AnalyticsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
    </svg>
);

const IntegrationsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Z" />
        <path d="m8 14 4-4 4 4" />
        <path d="M12 16v-8" />
    </svg>
);


// --- Main App Component ---
export default function App() {
    const ctaRef = useRef(null);

    const handleScrollToCTA = () => {
        ctaRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-white font-sans text-gray-800">
            <Header onSignUpClick={handleScrollToCTA} />
            <main>
                <Hero onSignUpClick={handleScrollToCTA} />
                <Features />
                <Testimonials />
                <CTASection ref={ctaRef} />
            </main>
            <Footer />
        </div>
    );
}

// --- Header Component ---
const Header = ({ onSignUpClick }) => {
    return (
        <header className="bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-gray-200">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-blue-600">
                    TaskFlow
                </div>
                <nav className="hidden md:flex items-center space-x-8">
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
                </nav>
                <button onClick={onSignUpClick} className="hidden md:block bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
                    Sign-up
                </button>
                <button className="md:hidden text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </div>
        </header>
    );
};

// --- Hero Section Component ---
const Hero = ({ onSignUpClick }) => {
    return (
        <section className="pt-32 pb-20 bg-gray-50 text-center">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                    Simplify Your Team’s Workflow
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                    Manage projects, track progress, and collaborate effortlessly. TaskFlow is the single source of truth for your team's success.
                </p>
                <button
                    onClick={onSignUpClick}
                    className="mt-8 bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105"
                >
                    Sign-up for Free
                </button>
            </div>
        </section>
    );
};

// --- Features Section Component ---
const Features = () => {
    const features = [
        {
            icon: <TaskIcon />,
            title: 'Task Tracking',
            description: 'Easily create, assign, and monitor tasks to keep your projects on schedule.',
        },
        {
            icon: <CollaborationIcon />,
            title: 'Seamless Collaboration',
            description: 'Communicate with your team in real-time with comments, mentions, and file sharing.',
        },
        {
            icon: <AnalyticsIcon />,
            title: 'Insightful Analytics',
            description: 'Get a clear overview of your team\'s progress with our powerful analytics dashboard.',
        },
        {
            icon: <IntegrationsIcon />,
            title: 'Easy Integrations',
            description: 'Connect TaskFlow with your favorite tools to streamline your workflow even further.',
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Everything you need to move work forward</h2>
                    <p className="text-lg text-gray-600 mt-2">Focus on the work that matters.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                            {feature.icon}
                            <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
                            <p className="mt-2 text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Testimonials Section Component ---
const Testimonials = () => {
    const testimonials = [
        {
            quote: "TaskFlow made our project management effortless! It's intuitive, powerful, and has become essential for our team's productivity.",
            name: 'Alex Johnson',
            title: 'CEO, Startup Inc.',
        },
        {
            quote: "As a freelancer, managing multiple clients was a nightmare. TaskFlow brought order to the chaos. I can't imagine my work without it.",
            name: 'Maria Garcia',
            title: 'Freelance Designer',
        },
        {
            quote: "The collaboration features are a game-changer. Our team is more aligned, and we're shipping projects faster than ever before.",
            name: 'David Chen',
            title: 'Project Manager, Tech Solutions',
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Loved by teams around the world</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                            <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                            <div className="mt-6">
                                <p className="font-bold text-gray-900">{testimonial.name}</p>
                                <p className="text-sm text-gray-500">{testimonial.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- CTA Section Component ---
const CTASection = React.forwardRef((props, ref) => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form Submitted:', formData);
            setIsSubmitted(true);
            // Here you would typically send the data to a server
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <section ref={ref} className="py-20 bg-blue-600">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Get Started Today – It’s Free</h2>
                <p className="text-lg text-blue-100 mt-2">Join thousands of teams who are already more productive.</p>
                <div className="mt-8 max-w-lg mx-auto bg-white p-8 rounded-xl shadow-2xl">
                    {isSubmitted ? (
                        <div className="text-center text-green-600">
                            <h3 className="text-2xl font-bold">Thank You!</h3>
                            <p className="mt-2">Welcome to TaskFlow! Please check your email to get started.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="space-y-6">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1 text-left">{errors.name}</p>}
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email Address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1 text-left">{errors.email}</p>}
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Create a Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    />
                                    {errors.password && <p className="text-red-500 text-sm mt-1 text-left">{errors.password}</p>}
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full mt-6 bg-green-500 text-white font-bold text-lg py-3 rounded-lg hover:bg-green-600 transition-colors"
                            >
                                Sign Up Now
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
});

// --- Footer Component ---
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-2xl font-bold">TaskFlow</h3>
                        <p className="text-gray-400 mt-2">The best way to manage your work.</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-semibold mb-3">Product</h4>
                            <ul>
                                <li className="mt-2"><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                                <li className="mt-2"><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                                <li className="mt-2"><a href="#" className="text-gray-400 hover:text-white">Integrations</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-3">Company</h4>
                            <ul>
                                <li className="mt-2"><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                                <li className="mt-2"><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                                <li className="mt-2"><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-3">Legal</h4>
                            <ul>
                                <li className="mt-2"><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                                <li className="mt-2"><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} TaskFlow, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
