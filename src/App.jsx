import React, { useState } from 'react';

const App = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
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
            console.log('Form data submitted:', formData);
            // In a real application, you would send this to a backend.
            setIsSubmitted(true);
            setFormData({ name: '', email: '', password: '' });
            // Reset the success message after a few seconds
            setTimeout(() => setIsSubmitted(false), 5000);
        } else {
            alert('Please fill out all fields.');
        }
    };

    return (
        <div className="taskflow-app">
            <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

        :root {
          --primary-blue: #3b82f6;
          --secondary-green: #22c55e;
          --light-gray: #f3f4f6;
          --dark-gray: #1f2937;
          --text-color: #4b5563;
          --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .taskflow-app {
          font-family: 'Inter', sans-serif;
          color: var(--text-color);
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #ffffff;
        }

        .container {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding: 0 1rem;
        }

        /* --- Header & Nav --- */
        .header {
          width: 100%;
          padding: 1.5rem 0;
          background-color: #fff;
          border-bottom: 1px solid #e5e7eb;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-weight: 700;
          font-size: 1.5rem;
          color: var(--primary-blue);
          display: flex;
          align-items: center;
        }

        .logo svg {
          margin-right: 0.5rem;
        }

        .nav-links {
          display: none; /* Hide on mobile by default */
        }

        .nav-links a {
          margin-left: 2rem;
          color: var(--dark-gray);
          text-decoration: none;
          font-weight: 600;
          transition: color 0.2s ease-in-out;
        }

        .nav-links a:hover {
          color: var(--primary-blue);
        }

        /* --- Buttons & CTAs --- */
        .btn-primary {
          background-color: var(--primary-blue);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          font-weight: 600;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out;
        }

        .btn-primary:hover {
          background-color: #2563eb;
          transform: translateY(-2px);
          box-shadow: var(--shadow);
        }

        .btn-cta {
          font-size: 1.125rem;
          padding: 1rem 2rem;
        }

        /* --- Sections --- */
        .section {
          padding: 4rem 0;
          width: 100%;
          text-align: center;
        }

        .section h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--dark-gray);
          margin-bottom: 1rem;
        }

        .section p {
          max-width: 700px;
          margin: 0 auto 2rem;
        }

        /* --- Hero Section --- */
        .hero {
          padding: 6rem 0;
          text-align: center;
          background-color: var(--light-gray);
        }

        .hero h1 {
          font-size: 3rem;
          font-weight: 700;
          color: var(--dark-gray);
          margin-bottom: 1rem;
        }
        
        .hero .subheadline {
          font-size: 1.25rem;
          max-width: 600px;
          margin: 0 auto 2rem;
        }

        /* --- Features Section --- */
        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .feature-item {
          background-color: #fff;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: var(--shadow);
          text-align: left;
        }

        .feature-item .icon {
          background-color: var(--light-gray);
          border-radius: 50%;
          padding: 0.75rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }
        
        .feature-item .icon svg {
          width: 2rem;
          height: 2rem;
          color: var(--primary-blue);
        }

        .feature-item h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--dark-gray);
          margin-bottom: 0.5rem;
        }

        /* --- Testimonials Section --- */
        .testimonials {
          background-color: var(--light-gray);
        }

        .testimonial-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .testimonial-card {
          background-color: #fff;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: var(--shadow);
        }

        .testimonial-card p {
          font-style: italic;
          margin-bottom: 1rem;
        }

        .testimonial-card span {
          font-weight: 600;
          color: var(--dark-gray);
        }

        /* --- CTA Section --- */
        .cta-section {
          background-color: var(--primary-blue);
          color: #fff;
          border-radius: 1rem;
          padding: 4rem 2rem;
          margin: 4rem 1rem;
          box-shadow: var(--shadow);
        }

        .cta-section h2 {
          color: #fff;
        }

        .signup-form {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          max-width: 400px;
          margin: 0 auto;
        }

        .signup-form input {
          width: 100%;
          padding: 0.75rem;
          border-radius: 0.5rem;
          border: 1px solid #e5e7eb;
          font-size: 1rem;
          color: var(--dark-gray);
        }

        .signup-form .success-message {
          color: var(--secondary-green);
          font-weight: 600;
          font-size: 1.125rem;
          text-align: center;
        }

        /* --- Footer --- */
        .footer {
          width: 100%;
          padding: 2rem 0;
          background-color: var(--dark-gray);
          color: #e5e7eb;
          text-align: center;
        }

        .footer .container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-links a {
          color: #e5e7eb;
          text-decoration: none;
          margin: 0 1rem;
          transition: color 0.2s ease-in-out;
        }

        .footer-links a:hover {
          color: var(--primary-blue);
        }

        .social-icons a {
          color: #e5e7eb;
          font-size: 1.5rem;
          margin: 0 0.5rem;
          transition: color 0.2s ease-in-out;
        }
        
        .social-icons a:hover {
          color: var(--primary-blue);
        }

        /* --- Responsive Design --- */
        @media (min-width: 640px) {
          .nav-links {
            display: block;
          }
          
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .testimonial-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          
          .testimonial-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          
          .cta-section {
            padding: 6rem 4rem;
          }
        }
      `}</style>

            {/* Header */}
            <header className="header">
                <nav className="container nav-content">
                    <div className="logo">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 10.5a.75.75 0 110-1.5.75.75 0 010 1.5zM12 14.25a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                        </svg>
                        TaskFlow
                    </div>
                    <div className="nav-links">
                        <a href="#features">Features</a>
                        <a href="#testimonials">Testimonials</a>
                        <a href="#cta">Sign Up</a>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero section">
                <div className="container">
                    <h1 className="leading-tight">Simplify Your Team’s Workflow</h1>
                    <p className="subheadline">Manage projects, track progress, and collaborate effortlessly to achieve your goals faster.</p>
                    <a href="#cta" className="btn-primary btn-cta">Sign-up for Free</a>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="section">
                <div className="container">
                    <h2>Key Features</h2>
                    <p>TaskFlow offers intuitive tools designed to boost your team's productivity and streamline project management from start to finish.</p>
                    <div className="features-grid">
                        <div className="feature-item">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m-1-11v-1a2 2 0 00-2-2h-5a2 2 0 00-2 2v1m10 0h3a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h4M9 5v1a2 2 0 002 2h2a2 2 0 002-2v-1" />
                                </svg>
                            </div>
                            <h3>Task Tracking</h3>
                            <p>Organize tasks, set deadlines, and monitor project progress with a simple, visual interface.</p>
                        </div>
                        <div className="feature-item">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-2.25v2.25m3-2.25v2.25M6 20.25h12m-6-16.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3zM3 16.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3zM15 16.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3zM21 9a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3z" />
                                </svg>
                            </div>
                            <h3>Collaboration</h3>
                            <p>Facilitate seamless communication with built-in chat, file sharing, and commenting on tasks.</p>
                        </div>
                        <div className="feature-item">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                            </div>
                            <h3>Integrations</h3>
                            <p>Connect with your favorite tools like Slack, Google Drive, and GitHub to centralize your workflow.</p>
                        </div>
                        <div className="feature-item">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041.02a.75.75 0 01-.043 1.05l-3.235 3.236a.75.75 0 01-1.052-.045l-1.085-1.085a.75.75 0 01.045-1.052l3.235-3.235a.75.75 0 011.05.043z" />
                                </svg>
                            </div>
                            <h3>Reporting</h3>
                            <p>Gain valuable insights with powerful analytics and custom reports to monitor team performance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="testimonials section">
                <div className="container">
                    <h2>What Our Users Say</h2>
                    <p>Don't just take our word for it—see how TaskFlow has helped teams around the globe streamline their projects.</p>
                    <div className="testimonial-grid">
                        <div className="testimonial-card">
                            <p>"TaskFlow made our project management effortless. We've cut down on wasted time and our team is more aligned than ever."</p>
                            <span>— Jane Doe, Project Manager</span>
                        </div>
                        <div className="testimonial-card">
                            <p>"The best tool for a small team! It's simple, intuitive, and has all the features we need without the bloat."</p>
                            <span>— John Smith, Startup Founder</span>
                        </div>
                        <div className="testimonial-card">
                            <p>"I've tried a dozen tools, but TaskFlow is the only one that truly simplified my workflow. The reporting is a game-changer."</p>
                            <span>— Emily White, Freelancer</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section with Form */}
            <section id="cta" className="cta-section">
                <div className="container">
                    <h2>Get Started Today—It’s Free!</h2>
                    <p>Join thousands of teams who are simplifying their work with TaskFlow. Sign up now for a free trial.</p>

                    <form onSubmit={handleSubmit} className="signup-form">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit" className="btn-primary btn-cta">Sign-up</button>
                        {isSubmitted && <div className="success-message">🎉 Thanks for signing up! We'll be in touch.</div>}
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} TaskFlow. All rights reserved.</p>
                    <div className="footer-links">
                        <a href="#">About</a>
                        <a href="#">Terms</a>
                        <a href="#">Privacy</a>
                        <a href="#">Contact</a>
                    </div>
                    <div className="social-icons">
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 12h4v8H2z"></path><circle cx="4" cy="7" r="2"></circle></svg></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
