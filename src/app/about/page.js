'use client';
import React, { useState, useEffect } from 'react';
import {
  Home,
  User,
  Briefcase as BriefcaseIcon,
  MessageSquare,
  Download,
  Sun,
  Moon,
  GraduationCap,
  Award,
  X,
  Bot
} from 'lucide-react';

const About = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
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
    { id: 'portfolio', icon: BriefcaseIcon, label: 'Portfolio' },
    { id: 'contact', icon: MessageSquare, label: 'Contact' }
  ];

  const skills = [
    { name: 'Python', percentage: 70 },
    { name: 'C++', percentage: 55 },
    { name: 'Matlab', percentage: 40 },
    { name: 'NLP', percentage: 63 },
    { name: 'LLMs', percentage: 62 },
    { name: 'CV', percentage: 61 },
    { name: 'Computer Networks', percentage: 45 },
    { name: 'Graphics Designing', percentage: 80 }
  ];

  const timelineItems = [
    {
      icon: BriefcaseIcon,
      duration: 'June 2024- Ongoing',
      title: 'Machine Learning  Engineer',
      subtitle: 'Vision Tech 360',
      description: 'As a Machine Learning Engineer from July 2024 to the present, I have spearheaded the development of Retrieval-Augmented Generation (RAG) chatbots, managing the entire pipeline from data collection to deployment, achieving a 20% improvement in response accuracy for knowledge-based queries and enhancing user satisfaction. I engineered a state-of-the-art facial recognition surveillance system, overseeing all stages from data acquisition to deployment, attaining an impressive 95% accuracy across over 50 cameras in real-time, significantly strengthening security measures. I successfully deployed machine learning models via REST APIs, optimizing for high performance to handle over 500 requests per second with an average latency of just 150ms, ensuring seamless scalability and user experience. By leveraging advanced optimization techniques and parallel processing, I enhanced model efficiency, reducing inference time by 20%, which led to faster response rates and improved system performance. Additionally, I streamlined deployment processes by automating CI/CD pipelines, cutting deployment time by 50% and accelerating the delivery of new features and updates. My thesis work on a blockchain-based transaction processor with FPGA implementation, supported by coursework in Data Structures & Algorithms, AI, Computer Vision, and Digital Signal Processing, and a technical focus on machine learning, image processing, and embedded systems, has further strengthened my expertise in these areas.'
    },
    {
      icon: GraduationCap,
      duration: 'Nov 2020- June 2024',
      title: 'Computer Engineering',
      subtitle: 'National University of Technology (Nust)',
      description: 'During my Bachelor\'s degree, I immersed myself in a comprehensive curriculum that solidified my expertise in machine learning and related fields. Through key courses like Data Structures & Algorithms, Artificial Intelligence, Computer Vision, and Digital Signal Processing, I developed a strong foundation in designing efficient algorithms, building AI-driven models, and optimizing image processing pipelines. I honed my skills in analyzing complex datasets, implementing machine learning models for predictive tasks, and programming embedded systems for real-time applications. Hands-on projects allowed me to explore advanced techniques in feature extraction, model optimization, and signal processing, fostering a deep understanding of how to apply theoretical concepts to practical challenges. This academic journey cultivated my ability to innovate and solve problems, directly contributing to my success in professional roles where I developed RAG chatbots, facial recognition systems, and IoT solutions. My thesis on a blockchain-based transaction processor with FPGA implementation further complemented my machine learning focus, integrating hardware-level optimization with advanced computational techniques.'
    },
    {
      icon: BriefcaseIcon,
      duration: 'June 2023- Set 2023',
      title: 'Software Engineer Intern',
      subtitle: 'Imagage inc',
      description: 'As a Software Development Engineering Intern from June 2023 to September 2023, I led the development of the "TT Scorer" web application, creating a user-friendly platform that streamlined scoring processes and significantly improved user engagement. I designed and implemented a responsive front-end interface, optimizing page load times by 40%, which enhanced user experience and accessibility across devices. By optimizing database queries, I achieved a 60% improvement in response time for handling over 100,000 records, boosting the application\'s performance and efficiency. Additionally, I ensured exceptional reliability with 99.9% uptime by implementing robust error handling and proactive monitoring systems. My thesis work on a blockchain-based transaction processor with FPGA implementation, supported by coursework in Data Structures & Algorithms, AI, Computer Vision, and Digital Signal Processing, and a technical focus on machine learning, image processing, and embedded systems, complemented my practical experience in delivering high-quality software solutions.'
    },
    {
      icon: BriefcaseIcon,
      duration: 'Feb 2022- May2023',
      title: 'IoT/Embedded Systems Engineer Intern',
      subtitle: 'AIRLIFT Technologies',
      description: 'As an IoT/Embedded Systems Engineer Intern at AIRLIFT Technologies in Islamabad, Pakistan, from February 2022 to May 2022, I innovated an automatic lock system that reduced delivery time by 30% across over 900 cabins, significantly enhancing operational efficiency and customer satisfaction. I developed cutting-edge embedded solutions that improved delivery efficiency by 45%, streamlining logistics and reducing costs. Additionally, I engineered energy-efficient firmware for IoT devices, achieving a 25% reduction in power consumption, which extended device lifespan and lowered operational costs. Through rigorous testing and quality assurance, I attained 98% system reliability, ensuring consistent performance and minimizing downtime. This experience complemented my thesis work on a blockchain-based transaction processor with FPGA implementation, supported by coursework in Data Structures & Algorithms, AI, Computer Vision, and Digital Signal Processing, and a technical focus on machine learning, image processing, and embedded systems, further strengthening my expertise in developing efficient and reliable embedded solutions.'
    },
    {
      icon: GraduationCap,
      duration: 'April 2018- june 2020',
      title: 'FSC in Pre-Engineering',
      subtitle: 'Army Public School and College',
      description: 'During my pre-engineering F.Sc. at Army Public School, I established a solid foundation in core sciences and mathematics, with a focus on physics, chemistry, and mathematics. The rigorous curriculum sharpened my analytical and problem-solving abilities, equipping me with essential skills for tackling complex challenges. The disciplined environment at Army Public School encouraged a methodical approach to learning, which significantly contributed to my success in subsequent professional roles, including my work as an IoT/Embedded Systems Engineer Intern, Software Development Engineering Intern, and Machine Learning Engineer.'
    }
  ];

  const aboutStats = [
    { number: '10+', label: 'Projects Completed' },
    { number: '5+', label: 'Programming Languages' },
    { number: '3+', label: 'Years Experience' },
    { number: '50+', label: 'Happy Clients' }
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

        a {
          display: inline-block;
          text-decoration: none;
          color: inherit;
          font-family: inherit;
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

        .main-title {
          text-align: center;
          margin-top: 3rem;
          margin-bottom: 2rem;
        }

        .main-title h2 {
          position: relative;
          text-transform: uppercase;
          font-size: clamp(2.5rem, 5vw, 4rem);
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
          font-size: clamp(3rem, 8vw, 6.3rem);
          white-space: nowrap;
          opacity: 0.1;
        }

        .about-container {
          display: grid;
          text-align: justify;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
          padding-top: 3.5rem;
          padding-bottom: 5rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .left-about {
          padding-right: 2rem;
        }

        .left-about p {
          line-height: 1.8;
          padding: 1rem 0;
          color: var(--color-grey-1);
          font-size: clamp(0.9rem, 1.1vw, 1.1rem);
        }

        .left-about h4 {
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          text-transform: uppercase;
          color: var(--color-white);
          margin-bottom: 1rem;
        }

        .right-about {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 2rem;
        }

        .about-item {
          border: 1px solid var(--color-grey-5);
          border-radius: 15px;
          transition: all 0.4s ease-in-out;
          box-shadow: 1px 2px 15px rgba(0, 0, 0, 0.4);
          border-color: var(--color-secondary);
          border-width: 3px;
          background: rgba(255, 255, 255, 0.02);
        }

        .about-item:hover {
          cursor: default;
          transform: translateY(-5px);
          border: 1px solid var(--color-secondary);
          box-shadow: 1px 4px 15px rgba(0, 0, 0, 0.32);
        }

        .abt-text {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          text-align: center;
        }

        .large-text {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          color: var(--color-secondary);
        }

        .small-text {
          position: relative;
          text-transform: uppercase;
          font-size: clamp(0.8rem, 1vw, 1.2rem);
          color: var(--color-grey-1);
          letter-spacing: 1px;
          margin-top: 0.5rem;
        }

        .about-stats {
          padding-bottom: 4rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .stat-title {
          text-transform: uppercase;
          font-size: clamp(1.2rem, 1.8vw, 1.4rem);
          text-align: center;
          padding: 3.5rem 0;
          position: relative;
          color: var(--color-white);
        }

        .stat-title::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 0;
          width: 40%;
          height: 1px;
          background-color: var(--color-grey-5);
          transform: translateX(-50%);
        }

        .progress-bars {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 2rem;
        }

        .progress-bar {
          display: flex;
          flex-direction: column;
        }

        .prog-title {
          text-transform: uppercase;
          font-weight: 500;
          margin-bottom: 0.5rem;
          font-size: clamp(0.9rem, 1vw, 1rem);
        }

        .progress-con {
          display: flex;
          align-items: center;
        }

        .prog-text {
          color: var(--color-grey-2);
          min-width: 40px;
          font-size: clamp(0.8rem, 0.9vw, 0.9rem);
        }

        .progress {
          width: 100%;
          height: 0.45rem;
          background-color: var(--color-grey-4);
          margin-left: 1rem;
          position: relative;
          border-radius: 5px;
          overflow: hidden;
        }

        .progress span {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          background-color: var(--color-secondary);
          transition: all 0.4s ease-in-out;
          border-radius: 5px;
        }

        .timeline {
          display: grid;
          text-align: justify;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 2rem;
          padding-bottom: 3rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .timeline-item {
          position: relative;
          padding-left: 3rem;
          border-left: 1px solid var(--color-grey-5);
        }

        .tl-icon {
          position: absolute;
          left: -27px;
          top: 0;
          background-color: var(--color-secondary);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-white);
        }

        .tl-duration {
          padding: 0.2rem 0.6rem;
          background-color: var(--color-grey-5);
          border-radius: 15px;
          display: inline-block;
          font-size: clamp(0.7rem, 0.8vw, 0.8rem);
          text-transform: uppercase;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .timeline-item h5 {
          padding: 1rem 0;
          text-transform: uppercase;
          font-size: clamp(1rem, 1.5vw, 1.3rem);
          font-weight: 600;
          color: var(--color-white);
        }

        .timeline-item h5 span {
          color: var(--color-grey-2);
          font-weight: 500;
          font-size: clamp(0.9rem, 1.3vw, 1.2rem);
        }

        .timeline-item p {
          color: var(--color-grey-2);
          line-height: 1.7;
          font-size: clamp(0.85rem, 1vw, 1rem);
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

        /* Chat Bot Button - Same as home */
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

        .modal-close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          color: var(--color-grey-2);
          cursor: pointer;
          transition: color 0.3s ease-in-out;
          padding: 0.5rem;
          border-radius: 50%;
        }

        .modal-close-btn:hover {
          color: var(--color-secondary);
          background: rgba(255, 255, 255, 0.1);
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

        /* Responsive Design - Same as home */
        @media screen and (min-width: 1600px) {
          .container {
            padding: 3rem 5rem;
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
        }

        @media screen and (max-width: 1024px) {
          .about-container {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding-top: 2rem;
            padding-bottom: 3rem;
          }

          .left-about {
            padding-right: 0;
          }

          .right-about {
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 1.5rem;
          }

          .timeline {
            grid-template-columns: 1fr;
            grid-gap: 1.5rem;
          }

          .progress-bars {
            grid-template-columns: 1fr;
            grid-gap: 1.5rem;
          }
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

          .right-about {
            grid-template-columns: 1fr;
            grid-gap: 1rem;
          }

          .about-item {
            border-radius: 10px;
          }

          .abt-text {
            padding: 1rem;
          }

          .modal-content {
            width: 95%;
            max-height: 85vh;
            padding: 2rem;
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

          .modal-content {
            width: 98%;
            border-radius: 15px;
            padding: 1.5rem;
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
          
          .container {
            padding-bottom: 5.5rem;
          }

          .about-container {
            gap: 1.5rem;
          }

          .timeline {
            grid-gap: 1rem;
          }

          .timeline-item {
            padding-left: 2.5rem;
          }

          .tl-icon {
            left: -22px;
            width: 45px;
            height: 45px;
          }

          .modal-content {
            padding: 1rem;
          }
        }

        /* Animation enhancements */
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

        .about-item {
          animation: slideInUp 0.6s ease-out forwards;
        }

        .about-item:nth-child(1) { animation-delay: 0.1s; }
        .about-item:nth-child(2) { animation-delay: 0.2s; }
        .about-item:nth-child(3) { animation-delay: 0.3s; }
        .about-item:nth-child(4) { animation-delay: 0.4s; }

        .timeline-item {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .timeline-item:nth-child(1) { animation-delay: 0.2s; }
        .timeline-item:nth-child(2) { animation-delay: 0.4s; }
        .timeline-item:nth-child(3) { animation-delay: 0.6s; }
        .timeline-item:nth-child(4) { animation-delay: 0.8s; }
        .timeline-item:nth-child(5) { animation-delay: 1.0s; }

        .progress-bar {
          animation: slideInUp 0.6s ease-out forwards;
        }

        .progress-bar:nth-child(1) { animation-delay: 0.1s; }
        .progress-bar:nth-child(2) { animation-delay: 0.2s; }
        .progress-bar:nth-child(3) { animation-delay: 0.3s; }
        .progress-bar:nth-child(4) { animation-delay: 0.4s; }
        .progress-bar:nth-child(5) { animation-delay: 0.5s; }
        .progress-bar:nth-child(6) { animation-delay: 0.6s; }
        .progress-bar:nth-child(7) { animation-delay: 0.7s; }
        .progress-bar:nth-child(8) { animation-delay: 0.8s; }
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
        <section className="container active" id="about">
          <div className="main-title">
            <h2>About <span>me</span><span className="bg-text">my stats</span></h2>
          </div>
          
          <div className="about-container">
            <div className="left-about">
              <h4>Information About me</h4>
              <p>
                I&apos;m Furqan Ahmad, a dedicated Machine Learning Engineer based in Islamabad, Pakistan, with a strong academic background in Computer Engineering from the National University of Science and Technology. My journey began in embedded systems and gradually expanded into web development, blockchain, and artificial intelligence. What drives me is the challenge of solving real-world problems through innovative, user-focused solutions. I bring a well-rounded approach to technology, combining deep analytical thinking with a passion for continuous learning and impact-driven development.
              </p>
              <p>
                Professionally, I have led and contributed to projects that significantly improved operational efficiency, system accuracy, and user experience. At Vision Tech 360, I played a key role in developing intelligent systems that enhanced information retrieval and surveillance capabilities. My contributions have consistently resulted in measurable performance improvements and streamlined processes. During my previous experiences at companies like IMAGE INC and AIRLIFT Technologies, I was entrusted with impactful responsibilities that strengthened both front-end usability and back-end performance, while optimizing system reliability and resource efficiency.
              </p>
              <p>
                Throughout my career, I&apos;ve focused on building solutions that address practical challenges—from developing digital assistants and security systems to medical imaging tools and accessibility-focused applications. My academic and project work reflect a consistent commitment to innovation, problem-solving, and creating meaningful user experiences. With a strong foundation in core technologies and a passion for purposeful engineering, I continue to grow as a well-rounded, forward-thinking professional ready to shape the future of technology.
              </p>
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
            </div>
            
            <div className="right-about">
              {aboutStats.map((stat, index) => (
                <div key={index} className="about-item">
                  <div className="abt-text">
                    <p className="large-text">{stat.number}</p>
                    <p className="small-text">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-stats">
            <h4 className="stat-title">My Skills</h4>
            <div className="progress-bars">
              {skills.map((skill, index) => (
                <div key={index} className="progress-bar">
                  <p className="prog-title">{skill.name}</p>
                  <div className="progress-con">
                    <p className="prog-text">{skill.percentage}%</p>
                    <div className="progress">
                      <span style={{ width: `${skill.percentage}%` }}></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h4 className="stat-title">My Timeline</h4>
          <div className="timeline">
            {timelineItems.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="tl-icon">
                  <item.icon size={20} />
                </div>
                <p className="tl-duration">{item.duration}</p>
                <h5>{item.title}<span> - {item.subtitle}</span></h5>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

    

      {/* Custom Modal */}
      <div className={`modal-overlay ${showModal ? 'visible' : ''}`}>
        <div className="modal-content">
          <button className="modal-close-btn" onClick={closeModal}>
            <X size={24} />
          </button>
          <p className="modal-message">{modalMessage}</p>
          <button className="modal-ok-btn" onClick={closeModal}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default About;