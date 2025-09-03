import React from "react";
import "./App.css"; // we'll define CSS separately

export default function App() {
    return (
        <div className="page">
            {/* Navbar */}
            <header className="navbar">
                <h1 className="logo">TaskFlow</h1>
                <nav>
                    <a href="#features">Features</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#contact">Contact</a>
                    <button className="signup-btn">Sign Up</button>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h2>Organize Your Work. Boost Your Productivity.</h2>
                    <p>
                        TaskFlow is a modern project management tool designed to help teams
                        plan, collaborate, and deliver projects faster than ever.
                    </p>
                    <button className="cta-btn">Sign Up</button>
                </div>
                <div className="hero-image">
                    <img
                        src="https://via.placeholder.com/500x300"
                        alt="Dashboard Preview"
                    />
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="features">
                <h3>Powerful Features</h3>
                <div className="feature-list">
                    <div className="feature-card">
                        <h4>📅 Task Scheduling</h4>
                        <p>Stay on top of deadlines with our intuitive scheduling tools.</p>
                    </div>
                    <div className="feature-card">
                        <h4>👥 Team Collaboration</h4>
                        <p>Assign tasks, share files, and collaborate seamlessly.</p>
                    </div>
                    <div className="feature-card">
                        <h4>📊 Analytics</h4>
                        <p>Track progress with real-time insights and dashboards.</p>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="pricing">
                <h3>Simple Pricing</h3>
                <div className="pricing-cards">
                    <div className="price-card">
                        <h4>Free</h4>
                        <p>$0 / month</p>
                        <ul>
                            <li>Up to 3 projects</li>
                            <li>Basic collaboration</li>
                        </ul>
                        <button className="signup-btn">Get Started</button>
                    </div>
                    <div className="price-card">
                        <h4>Pro</h4>
                        <p>$12 / month</p>
                        <ul>
                            <li>Unlimited projects</li>
                            <li>Advanced analytics</li>
                            <li>Priority support</li>
                        </ul>
                        <button className="signup-btn">Choose Pro</button>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact">
                <h3>Contact Us</h3>
                <p>Email: support@taskflow.com</p>
                <p>Phone: +1 234 567 890</p>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>© 2025 TaskFlow. All rights reserved.</p>
            </footer>
        </div>
    );
}
