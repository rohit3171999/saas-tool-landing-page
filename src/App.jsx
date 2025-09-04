import React, { useState } from "react";

const App = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.password) {
            console.log("Form data submitted:", formData);
            setIsSubmitted(true);
            setFormData({ name: "", email: "", password: "" });
            setTimeout(() => setIsSubmitted(false), 5000);
        } else {
            alert("Please fill out all fields.");
        }
    };

    return (
        <div className="font-inter text-gray-600 leading-relaxed antialiased flex flex-col items-center bg-white">
            {/* Header */}
            <header className="w-full py-6 bg-white border-b border-gray-200 sticky top-0 z-50">
                <nav className="max-w-6xl w-full mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center text-blue-500 font-bold text-xl">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2 w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 10.5a.75.75 0 110-1.5.75.75 0 010 1.5zM12 14.25a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                        </svg>
                        TaskFlow
                    </div>
                    <div className="hidden sm:block">
                        <a
                            href="#features"
                            className="ml-8 text-gray-900 font-semibold hover:text-blue-500"
                        >
                            Features
                        </a>
                        <a
                            href="#testimonials"
                            className="ml-8 text-gray-900 font-semibold hover:text-blue-500"
                        >
                            Testimonials
                        </a>
                        <a
                            href="#cta"
                            className="ml-8 text-gray-900 font-semibold hover:text-blue-500"
                        >
                            Sign Up
                        </a>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="py-24 text-center bg-gray-100 w-full">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        Simplify Your Team’s Workflow
                    </h1>
                    <p className="text-lg max-w-2xl mx-auto mb-8">
                        Manage projects, track progress, and collaborate effortlessly to
                        achieve your goals faster.
                    </p>
                    <a
                        href="#cta"
                        className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-transform transform hover:-translate-y-1 hover:bg-blue-600 shadow-md"
                    >
                        Sign-up for Free
                    </a>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-16 text-center w-full">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
                    <p className="max-w-2xl mx-auto mb-10">
                        TaskFlow offers intuitive tools designed to boost your team's
                        productivity and streamline project management from start to finish.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Task Tracking",
                                desc: "Organize tasks, set deadlines, and monitor project progress with a simple, visual interface.",
                            },
                            {
                                title: "Collaboration",
                                desc: "Facilitate seamless communication with built-in chat, file sharing, and commenting on tasks.",
                            },
                            {
                                title: "Integrations",
                                desc: "Connect with your favorite tools like Slack, Google Drive, and GitHub to centralize your workflow.",
                            },
                            {
                                title: "Reporting",
                                desc: "Gain valuable insights with powerful analytics and custom reports to monitor team performance.",
                            },
                        ].map((f, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-6 rounded-xl shadow-md text-left"
                            >
                                <div className="bg-gray-100 rounded-full p-3 inline-flex items-center justify-center mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 h-8 text-blue-500"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <circle cx="12" cy="12" r="4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {f.title}
                                </h3>
                                <p>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-16 bg-gray-100 w-full text-center">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        What Our Users Say
                    </h2>
                    <p className="max-w-2xl mx-auto mb-10">
                        Don't just take our word for it—see how TaskFlow has helped teams
                        around the globe streamline their projects.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                text: "TaskFlow made our project management effortless. We've cut down on wasted time and our team is more aligned than ever.",
                                author: "— Jane Doe, Project Manager",
                            },
                            {
                                text: "The best tool for a small team! It's simple, intuitive, and has all the features we need without the bloat.",
                                author: "— John Smith, Startup Founder",
                            },
                            {
                                text: "I've tried a dozen tools, but TaskFlow is the only one that truly simplified my workflow. The reporting is a game-changer.",
                                author: "— Emily White, Freelancer",
                            },
                        ].map((t, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
                                <p className="italic mb-4">"{t.text}"</p>
                                <span className="font-semibold text-gray-900">{t.author}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section with Form */}
            <section
                id="cta"
                className="bg-blue-500 text-white rounded-xl shadow-lg py-16 px-6 sm:px-12 my-16 mx-4 w-full text-center"
            >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Get Started Today—It’s Free!</h2>
                    <p className="max-w-2xl mx-auto mb-8">
                        Join thousands of teams who are simplifying their work with
                        TaskFlow. Sign up now for a free trial.
                    </p>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-6 items-center max-w-md mx-auto"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900"
                        />
                        <button
                            type="submit"
                            className="bg-white text-blue-500 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
                        >
                            Sign-up
                        </button>
                        {isSubmitted && (
                            <div className="text-green-400 font-semibold text-lg">
                                🎉 Thanks for signing up! We'll be in touch.
                            </div>
                        )}
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full py-8 bg-gray-900 text-gray-300 text-center">
                <div className="max-w-6xl mx-auto flex flex-col gap-4">
                    <p>&copy; {new Date().getFullYear()} TaskFlow. All rights reserved.</p>
                    <div className="flex justify-center gap-6">
                        <a href="#" className="hover:text-blue-500">
                            About
                        </a>
                        <a href="#" className="hover:text-blue-500">
                            Terms
                        </a>
                        <a href="#" className="hover:text-blue-500">
                            Privacy
                        </a>
                        <a href="#" className="hover:text-blue-500">
                            Contact
                        </a>
                    </div>
                    <div className="flex justify-center gap-4 text-xl">
                        <a href="#" className="hover:text-blue-500">
                            🌐
                        </a>
                        <a href="#" className="hover:text-blue-500">
                            🐦
                        </a>
                        <a href="#" className="hover:text-blue-500">
                            💼
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
