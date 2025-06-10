'use client';
import React, { useState, useEffect } from 'react';
import {
  Home,
  User,
  FileText,
  Briefcase,
  MessageSquare,
  Download,
  Sun,
  Moon,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  GraduationCap,
  Award,
  Calendar,
  Send,
  X,
  Bot
} from 'lucide-react';

const Contact = () => {
  const [activeSection, setActiveSection] = useState('contact');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    // Prevent scrolling on body
    document.body.style.overflow = 'hidden';
    
    if (isDarkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }

    // Cleanup function to restore scrolling if component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const showCustomModal = (message) => {
    setModalMessage(message);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalMessage('');
  };

  const navigateToChat = () => {
    window.location.href = '/chat';
  };

  const navigationItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'portfolio', icon: Briefcase, label: 'Portfolio' },
    { id: 'contact', icon: MessageSquare, label: 'Contact' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    showCustomModal('Message sent successfully! I will get back to you soon.');
    e.target.reset();
  };

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
          height: 100vh;
          overflow: hidden;
        }

        a {
          display: inline-block;
          text-decoration: none;
          color: inherit;
          font-family: inherit;
        }

        .portfolio-wrapper {
          height: 100vh;
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .container {
          height: 100vh;
          width: 100%;
          position: absolute;
          left: 0;
          top: 0;
          display: flex;
          flex-direction: column;
          background-color: var(--color-primary);
          padding: 2rem;
          overflow: hidden;
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
          border: none;
        }

        .theme-btn:active {
          transform: translateY(-3px);
        }

        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          max-height: 100vh;
          overflow: hidden;
        }

        .main-title {
          text-align: center;
          margin-bottom: 1rem;
          flex-shrink: 0;
        }

        .main-title h2 {
          position: relative;
          text-transform: uppercase;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          color: var(--color-white);
        }

        .main-title h2 span {
          color: var(--color-secondary);
        }

        .main-title h2 .bg-text {
          position: absolute;
          top: 50%;
          left: 50%;
          color: var(--color-grey-5);
          transition: all 0.4s ease-in-out;
          z-index: -1;
          transform: translate(-50%, -50%);
          font-weight: 800;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          white-space: nowrap;
          opacity: 0.1;
        }

        .contact-intro {
          max-width: 700px;
          text-align: center;
          font-size: clamp(0.8rem, 1vw, 1rem);
          color: var(--color-grey-2);
          margin: 0 auto 1.5rem auto;
          line-height: 1.6;
          flex-shrink: 0;
        }

        .contact-content-con {
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1;
          max-width: 700px;
          width: 100%;
          margin: 0 auto;
          overflow: hidden;
        }

        .left-contact {
          background-color: var(--color-grey-5);
          width: 100%;
          max-width: 600px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: var(--box-shadow-1);
          transition: all 0.3s ease-in-out;
          border: 1px solid rgba(255, 255, 255, 0.1);
          max-height: 100%;
          overflow-y: auto;
        }

        .left-contact:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,.4);
        }

        .contact-card {
          width: 100%;
        }

        .left-contact h4 {
          margin-top: 0;
          font-size: clamp(1.3rem, 2vw, 1.8rem);
          text-transform: uppercase;
          color: var(--color-secondary);
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .left-contact p {
          margin: 1rem 0;
          line-height: 1.6;
          color: var(--color-grey-2);
          font-size: clamp(0.8rem, 1vw, 0.95rem);
        }

        .contact-info {
          margin: 1.5rem 0;
        }

        .contact-info .contact-item {
          display: flex;
          align-items: center;
          margin: 0.8rem 0;
          padding: 0.8rem;
          border-radius: 10px;
          background-color: rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
          cursor: pointer;
          border: 1px solid transparent;
        }

        .contact-info .contact-item:hover {
          background-color: var(--color-secondary);
          color: var(--color-primary);
          transform: translateX(5px);
          border: 1px solid var(--color-secondary);
        }

        .contact-item .icon {
          display: flex;
          align-items: center;
          padding: 0.8rem;
          gap: 0.8rem;
          min-width: 100px;
          color: var(--color-secondary);
          transition: color 0.3s ease;
        }

        .contact-item:hover .icon {
          color: var(--color-primary);
        }

        .contact-item .icon span {
          font-weight: 600;
          color: var(--color-white);
          transition: color 0.3s ease;
          font-size: clamp(0.7rem, 0.9vw, 0.9rem);
        }

        .contact-item:hover .icon span {
          color: var(--color-primary);
        }

        .contact-item p {
          margin: 0;
          font-size: clamp(0.8rem, 0.9vw, 0.9rem);
          font-weight: 500;
        }

        .contact-social {
          margin-top: 1.5rem;
          text-align: center;
        }

        .contact-social h5 {
          font-size: clamp(1rem, 1.2vw, 1.2rem);
          margin-bottom: 1rem;
          color: var(--color-secondary);
          font-weight: 600;
        }

        .contact-icon {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .contact-icon .social-icon-link {
          display: flex;
          align-items: center;
          color: var(--color-white);
          background-color: var(--color-grey-4);
          cursor: pointer;
          justify-content: center;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          transition: all 0.4s ease-in-out;
          box-shadow: var(--box-shadow-1);
        }

        .social-icon-link:hover {
          background-color: var(--color-secondary);
          color: var(--color-primary);
          transform: translateY(-3px);
        }

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

        .modal-close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          color: var(--color-grey-2);
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          padding: 0.5rem;
          border-radius: 50%;
        }

        .modal-close-btn:hover {
          color: var(--color-secondary);
          background: rgba(255, 255, 255, 0.1);
          transform: rotate(90deg);
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

        @media screen and (max-width: 768px) {
          .container {
            padding: 1rem;
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
          
          .chat-bot-btn {
            right: 1rem;
            bottom: 6rem;
            width: 50px;
            height: 50px;
          }

          .left-contact {
            padding: 1.5rem;
            border-radius: 12px;
          }

          .contact-info .contact-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
            padding: 1rem;
            margin: 0.6rem 0;
          }

          .contact-item .icon {
            margin-bottom: 0.5rem;
            min-width: unset;
            padding: 0.5rem;
          }

          .contact-icon {
            justify-content: center;
          }

          .contact-icon .social-icon-link {
            width: 40px;
            height: 40px;
          }

          .modal-content {
            width: 95%;
            padding: 2rem;
          }

          .contact-content-con {
            max-width: 500px;
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
          
          .container {
            padding-bottom: 6rem;
          }
          
          .chat-bot-btn {
            bottom: 6rem;
            right: 1rem;
            width: 55px;
            height: 55px;
            z-index: 999;
          }

          .left-contact {
            padding: 1.2rem;
          }

          .contact-intro {
            margin-bottom: 1rem;
          }

          .contact-content-con {
            max-width: 400px;
          }

          .modal-content {
            width: 98%;
            border-radius: 15px;
            padding: 1.5rem;
          }
        }

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
          
          .container {
            padding-bottom: 5.5rem;
          }

          .left-contact {
            padding: 1rem;
            border-radius: 10px;
          }

          .contact-content-con {
            max-width: 350px;
          }

          .modal-content {
            padding: 1rem;
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .left-contact {
          animation: slideInUp 0.6s ease-out forwards;
        }

        .contact-item {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .contact-item:nth-child(1) { animation-delay: 0.2s; }
        .contact-item:nth-child(2) { animation-delay: 0.4s; }
        .contact-item:nth-child(3) { animation-delay: 0.6s; }
        .contact-item:nth-child(4) { animation-delay: 0.8s; }

        .social-icon-link {
          animation: slideInUp 0.4s ease-out forwards;
        }

        .social-icon-link:nth-child(1) { animation-delay: 0.1s; }
        .social-icon-link:nth-child(2) { animation-delay: 0.2s; }
        .social-icon-link:nth-child(3) { animation-delay: 0.3s; }
      `}</style>

      <button className="theme-btn" onClick={toggleTheme} title="Toggle Theme">
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>

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

      <main className="main-content">
        <section className="container active" id="contact">
          <div className="main-title">
            <h2>
              Contact <span>Me</span>
              <span className="bg-text">Get In Touch</span>
            </h2>
          </div>
          
          <p className="contact-intro">
            Ready to bring your innovative projects to life? I&apos;m always excited to collaborate and connect with fellow professionals.
            Whether you have a specific project in mind, are looking for a developer, or simply want to network, please don&apos;t hesitate to reach out!
          </p>
          
          <div className="contact-content-con">
            <div className="left-contact">
              <div className="contact-card">
                <h4>Let&apos;s Connect</h4>
                <p>
                  I&apos;m passionate about technology and enjoy discussing new ideas. Feel free to contact me for potential collaborations,
                  project inquiries, or just a friendly chat.
                </p>
                
                <div className="contact-info">
                  <div className="contact-item">
                    <div className="icon">
                      <Mail size={20} />
                      <span>Email</span>
                    </div>
                    <p>fahmad.ktk@gmail.com</p>
                  </div>
                  
                  <div className="contact-item">
                    <div className="icon">
                      <Phone size={20} />
                      <span>Phone</span>
                    </div>
                    <p>+92 335 0792802</p>
                  </div>
                  
                  <div className="contact-item">
                    <div className="icon">
                      <MapPin size={20} />
                      <span>Location</span>
                    </div>
                    <p>Islamabad, Pakistan</p>
                  </div>
                  
                  <div className="contact-item">
                    <div className="icon">
                      <Calendar size={20} />
                      <span>Available</span>
                    </div>
                    <p>Mon - Fri, 9AM - 6PM PKT</p>
                  </div>
                </div>
                
                <div className="contact-social">
                  <h5>Follow Me</h5>
                  <div className="contact-icon">
                    <a href="https://github.com/Furqan3/" className="social-icon-link" title="GitHub" target="_blank" rel="noopener noreferrer">
                      <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/furqan-ktk/" className="social-icon-link" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <button className="chat-bot-btn" onClick={navigateToChat} title="Chat with Me">
        <Bot size={24} />
      </button>

      <div className={`modal-overlay ${showModal ? 'visible' : ''}`}>
        <div className="modal-content">
          <button className="modal-close-btn" onClick={closeModal} aria-label="Close Modal">
            <X size={20} />
          </button>
          <p className="modal-message">{modalMessage}</p>
          <button className="modal-ok-btn" onClick={closeModal}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;