// src/Portfolio.js
import React from "react";
import "./portfolio.css";
import {
  FaHome, FaEnvelope, FaMailBulk, FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaCode, FaGitAlt, FaLaptopCode, FaCuttlefish, FaGithub,
  FaLinkedin, FaInstagram, FaTwitter, FaFacebook
} from "react-icons/fa";

import { Typewriter } from "react-simple-typewriter";
import mhImage from "./images/mh.PNG";
import index from "./images/indexhtml.PNG";
import mind from "./images/mindbloom.PNG";

function Portfolio() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <h1>Barkha</h1>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#projects">
              <FaCode /> Projects
            </a>
          </li>
          <li>
            <a href="#skills">
              <FaHome /> Skills
            </a>
          </li>
          <li>
            <a href="#contact">
              <FaEnvelope /> Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Sections */}
      <section className="hero">
        <h2>Hi, I'm Barkha 👋</h2>
        <p className="typing-text">
          <Typewriter
            words={[
              "Front-End Developer 💻",
              "React Enthusiast ⚛️",
              "C++ & DSA Learner 📘",
              "Digital Creator 🎨",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        <a href="#contact" className="cta-btn">
          Hire Me
        </a>
      </section>
{/* Projects */}
      <section id="projects" className="projects-section">
  <h2 className="section-title">✨ My Projects</h2>
  <div className="projects-grid">
    <div className="project-card">
      <img src={mhImage} alt="Project 1" />
      <h3>Mental Health Assistant</h3>
      <p>Helps users manage emotional well-being using AI-based responses.</p>
      <a href="https://github.com/Coderbarkha/MentalHealthAssistant" className="project-link">View Project</a>
    </div>
    <div className="project-card">
      <img src={index} alt="Project 2" />
      <h3>ElectroMart -Ecommerce Application</h3>
      <p>An Ecommerce application that have features like product catalog ,cart functionality,authentication of user.</p>
      <a href="https://github.com/Coderbarkha/ElectroMart" className="project-link">View Project</a>
    </div>
    <div className="project-card">
      <img src={mind} alt="Project 3" />
      <h3>MindBloom -Weekly Mental Health Journal</h3>
      <p>A web application that helps users track and reflect on their mental health throughout the week.</p>
      <a href="https://github.com/Coderbarkha/MindBloom" className="project-link">View Project</a>
    </div>
  </div>
</section>
{/* Skills */}
<section id="skills" className="skills-section">
<h2 className="section-title">My Skills</h2>
  <div className="skill-list">
  <div className="skill-item">
    <FaHtml5 className="skill-icon" />
    <span>HTML</span>
    <div className="progress-bar"><div className="progress" style={{ width: "95%" }}></div></div>
  </div>
  <div className="skill-item">
    <FaCss3Alt className="skill-icon" />
    <span>CSS</span>
    <div className="progress-bar"><div className="progress" style={{ width: "90%" }}></div></div>
  </div>
  <div className="skill-item">
    <FaJs className="skill-icon" />
    <span>JavaScript</span>
    <div className="progress-bar"><div className="progress" style={{ width: "85%" }}></div></div>
  </div>
  <div className="skill-item">
    <FaReact className="skill-icon" />
    <span>React</span>
    <div className="progress-bar"><div className="progress" style={{ width: "50%" }}></div></div>
  </div>
  <div className="skill-item">
    <FaCuttlefish className="skill-icon" />
    <span>C++</span>
    <div className="progress-bar"><div className="progress" style={{ width: "70%" }}></div></div>
  </div>
  <div className="skill-item">
    <FaCode className="skill-icon" />
    <span>DSA</span>
    <div className="progress-bar"><div className="progress" style={{ width: "60%" }}></div></div>
  </div>
  <div className="skill-item">
    <FaGitAlt className="skill-icon" />
    <span>Git</span>
    <div className="progress-bar"><div className="progress" style={{ width: "75%" }}></div></div>
  </div>
  <div className="skill-item">
    <FaLaptopCode className="skill-icon" />
    <span>Responsive Design</span>
    <div className="progress-bar"><div className="progress" style={{ width: "80%" }}></div></div>
  </div>
</div>
</section>
{/* Contact container */}
<section id="contact" className="contact-section">
  <h2 className="section-title">📬 Contact Me</h2>

  <div className="contact-container">
    <div className="contact-info">
      <p><FaHome /> Location: India</p>
      <p><FaMailBulk /> Email: barkhaxxxxx@gmail.com</p>
      <div className="social-icons">
        <a href="https://github.com/Coderbarkha" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/barkhathakkar" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://instagram.com/barkhathakkar241" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
    </div>

    <form className="contact-form" onSubmit={(e) => {
  e.preventDefault();
  alert("Message sent!"); // You can replace this with backend integration later
}}>
      <h3>Get in Touch</h3>
      <p>Feel free to reach out for collaborations or just a chat!</p>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" rows="5" required></textarea>
      <button type="submit">Send Message</button>
    </form>
    
  </div>
</section>
{/* Footer */}
<footer className="footer">
  <div className="footer-content">
    <div className="footer-left">
      <h3>Barkha's Portfolio</h3>
      <p>Designed and built with 💖 using React.js</p>
    </div>

    <div className="footer-middle">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>

    <div className="footer-right">
      <h4>Follow Me</h4>
      <div className="social-icons">
        <a href="https://github.com/Coderbarkha" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/barkhathakkar" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://instagram.com/barkhathakkar241" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <p>&copy; {new Date().getFullYear()} Barkha Thakkar. All rights reserved.</p>
  </div>
</footer>


    </div>
  );
}

export default Portfolio;
