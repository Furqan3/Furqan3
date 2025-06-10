'use client';
import React, { useState, useEffect } from 'react';
import {
  Home,
  User,
  Briefcase,
  MessageSquare,
  Sun,
  Moon,
  Download,
  Github,
  Linkedin,
  Bot
} from 'lucide-react';

const HomePage = () => {
  // State management
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // Theme effect
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  }, [isDarkMode]);

  // Utility functions
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const showCustomModal = (message) => {
    setModalMessage(message);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setModalMessage('');
  };

  // Navigation to chat
  const navigateToChat = () => {
    window.location.href = '/chat';
  };

  const navigationItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'portfolio', icon: Briefcase, label: 'Portfolio' },
    { id: 'contact', icon: MessageSquare, label: 'Contact' }
  ];

  return (
    <div className={`portfolio-wrapper ${isDarkMode ? '' : 'light-mode'}`}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }

        :root {
          --color-primary: #191d2b;
          --color-secondary: #27AE60;
          --color-white: #FFFFFF;
          --color-black: #000;
          --color-grey0: #f8f8f8;
          --color-grey-1: #dbe1e8;
          --color-grey-2: #b2becd;
          --color-grey-3: #6c7983;
          --color-grey-4: #454e56;
          --color-grey-5: #2a2e35;
          --color-grey-6: #12181b;
          --br-sm-2: 14px;
          --box-shadow-1: 0 3px 15px rgba(0,0,0,.3);
          --chat-gradient: linear-gradient(135deg, var(--color-secondary), #20B958);
        }

        .light-mode {
          --color-primary: #FFFFFF;
          --color-secondary: #ff6f00;
          --color-white: #454e56;
          --color-black: #000;
          --color-grey0: #f8f8f8;
          --color-grey-1: #6c7983;
          --color-grey-2: #6c7983;
          --color-grey-3: #6c7983;
          --color-grey-4: #454e56;
          --color-grey-5: #f8f8f8;
          --color-grey-6: #12181b;
        }

        body {
          background-color: var(--color-primary);
          font-family: "Poppins", sans-serif;
          font-size: 1.1rem;
          color: var(--color-white);
          transition: all 0.4s ease-in-out;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .portfolio-wrapper {
          min-height: 100vh;
          position: relative;
          width: 100%;
        }

        .container {
          min-height: 100vh;
          width: 100%;
          position: absolute;
          left: 0;
          top: 0;
          display: block;
          transform: translateY(0) scaleY(1);
          transition: all 0.4s ease-in-out;
          background-color: var(--color-primary);
          padding: 2rem;
        }

        .controls {
          position: fixed;
          z-index: 10;
          top: 50%;
          right: 3%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transform: translateY(-50%);
        }

        .controls .control {
          padding: 1rem;
          cursor: pointer;
          background-color: var(--color-grey-4);
          width: 55px;
          height: 55px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0.7rem 0;
          box-shadow: var(--box-shadow-1);
          color: var(--color-grey-2);
          transition: all 0.4s ease-in-out;
        }

        .controls .control:hover {
          background-color: var(--color-secondary);
          color: var(--color-white);
        }

        .controls .active-btn {
          background-color: var(--color-secondary);
          color: var(--color-white);
        }

        .theme-btn {
          top: 5%;
          right: 3%;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background-color: var(--color-grey-4);
          cursor: pointer;
          position: fixed;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
          transition: all 0.1s ease-in-out;
          z-index: 10;
          color: var(--color-grey-2);
        }

        .theme-btn:active {
          transform: translateY(-3px);
        }

        .header-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: calc(100vh - 4rem);
          gap: 2rem;
          padding-right: 6%;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
        }

        .left-header {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          min-height: 500px;
        }

        .h-shape {
          transition: all 0.4s ease-in-out;
          width: 35%;
          height: 100vh;
          background-color: var(--color-secondary);
          position: fixed;
          left: 0;
          top: 0;
          z-index: -1;
          clip-path: polygon(0 0, 55% 0, 95% 100%, 0% 100%);
        }

        .image {
          border-radius: var(--br-sm-2);
          width: 80%;
          max-width: 400px;
          aspect-ratio: 3/4;
          margin-left: 3rem;
          border: 2px solid currentColor;
          transition: all 0.4s ease-in-out;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
          overflow: hidden;
        }

        .image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.4s ease-in-out;
          box-shadow: 5px 10px 25px rgba(0, 0, 0, 0.5);
          filter: grayscale(100%);
        }

        .image img:hover {
          filter: grayscale(0);
        }

        .right-header {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 2rem;
        }

        .name {
          font-size: clamp(2rem, 4vw, 4rem);
          font-weight: 700;
          line-height: 1.2;
        }

        .name span {
          color: var(--color-secondary);
        }

        .right-header h2 {
          font-size: clamp(1.5rem, 3vw, 2.5rem);
          font-weight: 600;
          margin-top: 0.5rem;
        }

        .right-header p {
          margin: 1.5rem 0;
          line-height: 1.8;
          font-size: clamp(0.9rem, 1.2vw, 1.1rem);
        }

        .social-icons {
          display: flex;
          margin-top: 1.5rem;
          gap: 0.8rem;
        }

        .social-icons .icon-link {
          background-color: var(--color-grey-5);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.4s ease-in-out;
          color: var(--color-white);
          text-decoration: none;
        }

        .social-icons .icon-link:hover {
          background-color: var(--color-secondary);
          color: var(--color-primary);
        }

        .main-btn {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          padding: 0.8rem 2rem;
          border-radius: 30px;
          font-weight: 600;
          border: 1px solid var(--color-secondary);
          background-color: transparent;
          color: inherit;
          text-decoration: none;
          cursor: pointer;
          width: fit-content;
          position: relative;
          margin: 1rem 0;
          transition: all 0.3s ease-in-out;
        }

        .main-btn:hover {
          background-color: var(--color-secondary);
          color: var(--color-white);
          transform: translateY(-2px);
        }

        .btn-text {
          padding-right: 1rem;
          text-align: center;
        }

        .btn-icon {
          background-color: var(--color-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          padding: 0.8rem;
          transition: all 0.3s ease-in-out;
        }

        /* Chat Bot Button - Now matching controls styling */
        .chat-bot-btn {
          position: fixed;
          bottom: 2rem;
          right: 3%; 
          z-index: 1000;
          padding: 1rem;
          cursor: pointer;
          background-color: var(--color-grey-4);
          width: 55px;
          height: 55px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: var(--box-shadow-1);
          color: var(--color-grey-2);
          transition: all 0.4s ease-in-out;
          border: none;
        }

        .chat-bot-btn:hover {
          background-color: var(--color-secondary);
          color: var(--color-white);
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease-in-out;
          backdrop-filter: blur(5px);
        }

        .modal-overlay.visible {
          opacity: 1;
          visibility: visible;
        }

        .modal-content {
          background: var(--color-primary);
          padding: 2.5rem;
          border-radius: 15px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          max-width: 450px;
          width: 90%;
          text-align: center;
          position: relative;
          transform: translateY(-30px) scale(0.9);
          transition: transform 0.3s ease-in-out;
          border: 1px solid var(--color-grey-4);
        }

        .modal-overlay.visible .modal-content {
          transform: translateY(0) scale(1);
        }

        .modal-message {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          color: var(--color-white);
          line-height: 1.5;
        }

        .modal-ok-btn {
          background: var(--chat-gradient);
          color: white;
          padding: 0.8rem 2rem;
          border: none;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          font-weight: 600;
        }

        .modal-ok-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(39, 174, 96, 0.4);
        }

        /* Responsive Design */
        @media screen and (min-width: 1600px) {
          .container {
            padding: 3rem 5rem;
          }
          .header-content {
            max-width: 1600px;
            gap: 4rem;
          }
        }

        @media screen and (max-width: 1432px) {
          .container {
            padding: 2rem 3rem;
          }
        }

        @media screen and (max-width: 1250px) {
          .container {
            padding: 2rem;
          }
          .right-header {
            padding-left: 1rem;
          }
        }

        @media screen and (max-width: 1024px) {
          .header-content {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }
          
          .left-header {
            order: 2;
            min-height: 400px;
          }
          
          .right-header {
            order: 1;
            padding-left: 0;
            text-align: center;
          }
          
          .h-shape {
            display: none;
          }
          
          .image {
            margin: 0 auto;
            width: 60%;
            max-width: 300px;
          }
          
          .social-icons {
            justify-content: center;
          }
        }

        @media screen and (max-width: 768px) {
          .container {
            padding: 1rem;
          }
          
          .header-content {
            gap: 2rem;
            min-height: calc(100vh - 8rem);
          }
          
          .image {
            width: 70%;
            max-width: 250px;
          }
          
          .theme-btn {
            width: 60px;
            height: 60px;
            top: 3%;
            right: 3%;
          }
          
          .controls {
            right: 2%;
          }
          
          .controls .control {
            width: 50px;
            height: 50px;
          }
          
          /* Chat bot button positioned to avoid overlap */
          .chat-bot-btn {
            right: 1rem;
            bottom: 6rem;
            width: 50px;
            height: 50px;
          }
        }

        @media screen and (max-width: 600px) {
          .container {
            padding: 1rem 0.5rem;
          }
          
          .theme-btn {
            width: 50px;
            height: 50px;
            top: 2%;
            right: 2%;
          }
          
          .controls {
            top: auto;
            bottom: 0;
            flex-direction: row;
            justify-content: space-around;
            left: 0;
            right: 0;
            transform: none;
            width: 100%;
            background-color: var(--color-grey-5);
            padding: 0.8rem 0;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
            box-shadow: 0 -3px 15px rgba(0,0,0,.3);
            height: 5rem;
          }
          
          .controls .control {
            margin: 0;
            width: 60px;
            height: 60px;
          }
          
          .header-content {
            padding-bottom: 6rem;
            gap: 1.5rem;
          }
          
          .image {
            width: 80%;
            max-width: 200px;
          }
          
          .right-header p {
            font-size: 0.95rem;
            line-height: 1.6;
            margin: 1rem 0;
          }
          
          .social-icons .icon-link {
            width: 45px;
            height: 45px;
          }
          
          /* Chat bot button repositioned to avoid overlap with navigation */
          .chat-bot-btn {
            bottom: 6rem;
            right: 1rem;
            width: 55px;
            height: 55px;
            z-index: 999;
          }
        }

        /* Extra small screens */
        @media screen and (max-width: 480px) {
          .chat-bot-btn {
            bottom: 5.5rem;
            right: 0.5rem;
            width: 50px;
            height: 50px;
          }
          
          .controls {
            height: 4.5rem;
            padding: 0.6rem 0;
          }
          
          .controls .control {
            width: 55px;
            height: 55px;
          }
          
          .header-content {
            padding-bottom: 5.5rem;
          }
        }
      `}</style>

      {/* Theme Toggle Button */}
      <div className="theme-btn" onClick={toggleTheme}>
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </div>

      {/* Navigation Controls */}
      <div className="controls">
        {navigationItems.map((item) => (
          <div
            key={item.id}
            className={`control ${activeSection === item.id ? 'active-btn' : ''}`}
            onClick={() => window.location.href = `/${item.id}`}
            title={item.label}
          >
            <item.icon size={24} />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <main className="main-content">
        <section className="container active" id="home">
          <div className="header-content">
            <div className="left-header">
              <div className="h-shape"></div>
              <div className="image">
                <img src="img/hero.png" alt="Furqan Ahmad" />
              </div>
            </div>
            <div className="right-header">
              <h1 className="name">
                Hi, I&apos;m <span>FURQAN AHMAD.</span>
              </h1>
              <h2>A Computer Engineer.</h2>
              <div style={{ textAlign: 'justify' }}>
                <p>
                  <strong>Welcome to my portfolio!</strong><br />
                  I&apos;m Furqan Ahmad, a Computer Engineer passionate about creating innovative, real-world solutions. My expertise spans <strong>Machine Learning</strong>, <strong>Web Development</strong>, and <strong>Database echnologies</strong>. With a strong foundation in both software and hardware, I bring a well-rounded approach to solving complex problems. Explore my projects to see how I combine creativity and engineering to drive impact. I&apos;m always open to meaningful collaborations—<strong>let&apos;s connect!</strong>
                </p>
              </div>
              <div className="btn-con">
                <a
                  href="/Furqan_Resume.pdf"
                  className="main-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="btn-text">Resume</span>
                  <span className="btn-icon">
                    <Download size={16} />
                  </span>
                </a>
              </div>
              <div className="social-icons">
                <a href="https://github.com/Furqan3/" className="icon-link" target="_blank" rel="noopener noreferrer">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/furqan-ktk/" className="icon-link" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>


      {/* Modal */}
      <div className={`modal-overlay ${showModal ? 'visible' : ''}`}>
        <div className="modal-content">
          <p className="modal-message">{modalMessage}</p>
          <button className="modal-ok-btn" onClick={closeModal}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;