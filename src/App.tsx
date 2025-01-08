import React, { useState } from 'react';
import { Menu, X, ChevronRight, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <a href="#" className="logo">ATLAS</a>
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
          alt="Hero Background"
          className="hero-image"
        />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to Atlas</h1>
            <p className="hero-description">We create amazing digital experiences that transform businesses</p>
            <button className="button">Get Started</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Us</h2>
            <p className="section-description">
              We are a creative agency focused on growing brands through innovative digital solutions.
            </p>
          </div>
          <div className="grid">
            {[
              {
                title: "Our Mission",
                description: "To deliver exceptional digital experiences that drive growth and success for our clients."
              },
              {
                title: "Our Vision",
                description: "To be the leading creative force in digital transformation and innovation."
              },
              {
                title: "Our Values",
                description: "Innovation, integrity, and excellence in everything we do."
              }
            ].map((item, index) => (
              <div key={index} className="card">
                <ChevronRight size={32} color="#2563eb" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-description">
              We offer comprehensive digital solutions to help your business grow.
            </p>
          </div>
          <div className="grid">
            {[
              {
                title: "Web Development",
                description: "Custom websites and applications built with modern technologies.",
                image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Digital Marketing",
                description: "Strategic marketing solutions to reach your target audience.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Brand Strategy",
                description: "Comprehensive branding solutions to establish your market presence.",
                image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=800&q=80"
              }
            ].map((service, index) => (
              <div key={index} className="card service-card">
                <img src={service.image} alt={service.title} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Portfolio</h2>
            <p className="section-description">
              Explore our recent projects and success stories.
            </p>
          </div>
          <div className="grid">
            {[
              {
                title: "Modern Website",
                category: "Web Design",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Brand Identity",
                category: "Branding",
                image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Digital Campaign",
                category: "Marketing",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
              }
            ].map((project, index) => (
              <div key={index} className="portfolio-card">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-description">
              Get in touch with us for any inquiries or collaboration opportunities.
            </p>
          </div>
          <div className="grid">
            <div className="card">
              <form className="form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" className="input" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" className="input" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" className="input textarea" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="button">Send Message</button>
              </form>
            </div>
            <div className="card">
              <div className="contact-info">
                <div>
                  <MapPin />
                  <p>123 Business Street, New York, NY 10001</p>
                </div>
                <div>
                  <Phone />
                  <p>+1 (555) 123-4567</p>
                </div>
                <div>
                  <Mail />
                  <p>info@atlasagency.com</p>
                </div>
                <div className="social-links">
                  <Facebook />
                  <Twitter />
                  <Instagram />
                  <Linkedin />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <h3>Atlas</h3>
              <p>Creating digital experiences that inspire and transform businesses.</p>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
              </ul>
            </div>
            <div>
              <h4>Services</h4>
              <ul className="footer-links">
                <li><a href="#">Web Development</a></li>
                <li><a href="#">Digital Marketing</a></li>
                <li><a href="#">Brand Strategy</a></li>
                <li><a href="#">UI/UX Design</a></li>
              </ul>
            </div>
            <div>
              <h4>Newsletter</h4>
              <p>Subscribe to our newsletter for updates.</p>
              <form className="form">
                <input type="email" className="input" placeholder="Your email" />
                <button type="submit" className="button">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 Atlas. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;