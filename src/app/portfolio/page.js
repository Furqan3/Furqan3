'use client';
import React, { useState, useEffect } from 'react';
import {
  Home, User, FileText, Briefcase, MessageSquare, Download, Sun, Moon, Mail, Phone,
  MapPin, Github, Linkedin, Twitter, ExternalLink, GraduationCap, Award, Calendar,
  Send, X, Youtube, Maximize2, Play, Code, Globe, Bot, Minimize2
} from 'lucide-react';
import portfolioItems from './portfolioData';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('portfolio');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [showDescriptionModal, setShowDescriptionModal] = useState(false);
  const [descriptionModalContent, setDescriptionModalContent] = useState({});
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [videoModalContent, setVideoModalContent] = useState('');
  const [isFullScreen, setIsFullScreen] = useState(false);

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

  const handleDescriptionClick = (item) => {
    setDescriptionModalContent(item);
    setShowDescriptionModal(true);
    setIsFullScreen(false);
  };

  const closeDescriptionModal = () => {
    setShowDescriptionModal(false);
    setDescriptionModalContent({});
    setIsFullScreen(false);
  };

  const handleVideoClick = (item) => {
    setVideoModalContent(item);
    setShowVideoModal(true);
    setIsFullScreen(false);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
    setVideoModalContent('');
    setIsFullScreen(false);
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const navigateToChat = () => {
    window.location.href = '/chat';
  };

  const getVideoEmbedUrl = (url) => {
    if (!url) return '';
    
    // For YouTube URLs
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1].split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1].split('?')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes('youtube.com/embed/')) {
      return url;
    }
    
    // For local video files
    if (url.startsWith('/') || url.startsWith('./')) {
      return url;
    }
    
    return url;
  };

  const isLocalVideo = (url) => {
    return url && (url.startsWith('/') || url.startsWith('./')) && (url.includes('.mp4') || url.includes('.webm') || url.includes('.mov'));
  };

  const navigationItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'portfolio', icon: Briefcase, label: 'Portfolio' },
    { id: 'contact', icon: MessageSquare, label: 'Contact' }
  ];

  // Enhanced markdown renderer for comprehensive formatting
  const renderMarkdown = (text) => {
    if (!text) return null;
    
    const lines = text.split('\n');
    const elements = [];
    let listItems = [];
    let inCodeBlock = false;
    let codeBlockLines = [];
    let codeBlockLanguage = '';
    
    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} style={{
            marginLeft: '1.5rem',
            marginBottom: '1rem',
            listStyle: 'disc'
          }}>
            {listItems}
          </ul>
        );
        listItems = [];
      }
    };
    
    const flushCodeBlock = () => {
      if (codeBlockLines.length > 0) {
        elements.push(
          <pre key={`code-${elements.length}`} style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '1rem',
            borderRadius: '8px',
            overflowX: 'auto',
            marginBottom: '1rem',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <code style={{
              fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
              fontSize: '0.9rem',
              color: '#f8f8f2'
            }}>
              {codeBlockLines.join('\n')}
            </code>
          </pre>
        );
        codeBlockLines = [];
        codeBlockLanguage = '';
      }
    };
    
    const processInlineFormatting = (text) => {
      // Handle bold text (**text**)
      text = text.replace(/\*\*(.*?)\*\*/g, '<strong style="color: var(--color-secondary); font-weight: 600;">$1</strong>');
      
      // Handle italic text (*text*)
      text = text.replace(/\*(.*?)\*/g, '<em style="font-style: italic;">$1</em>');
      
      // Handle inline code (`code`)
      text = text.replace(/`([^`]+)`/g, '<code style="background: rgba(255,255,255,0.15); padding: 0.2rem 0.4rem; border-radius: 4px; font-family: Monaco, monospace; font-size: 0.9em;">$1</code>');
      
      // Handle links [text](url)
      text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" style="color: var(--color-secondary); text-decoration: underline;">$1</a>');
      
      return text;
    };
    
    lines.forEach((line, index) => {
      // Handle code blocks
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          flushCodeBlock();
          inCodeBlock = false;
        } else {
          flushList();
          inCodeBlock = true;
          codeBlockLanguage = line.slice(3).trim();
        }
        return;
      }
      
      if (inCodeBlock) {
        codeBlockLines.push(line);
        return;
      }
      
      // Handle headings
      if (line.startsWith('# ')) {
        flushList();
        elements.push(
          <h1 key={index} style={{
            color: 'var(--color-secondary)',
            fontSize: '2.5rem',
            marginBottom: '1rem',
            fontWeight: '700',
            borderBottom: '2px solid var(--color-secondary)',
            paddingBottom: '0.5rem'
          }}>
            {line.slice(2)}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} style={{
            color: 'var(--color-secondary)',
            fontSize: '2rem',
            marginBottom: '0.8rem',
            marginTop: '2rem',
            fontWeight: '600'
          }}>
            {line.slice(3)}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} style={{
            color: 'var(--color-secondary)',
            fontSize: '1.7rem',
            marginBottom: '0.6rem',
            marginTop: '1.5rem',
            fontWeight: '600'
          }}>
            {line.slice(4)}
          </h3>
        );
      } else if (line.startsWith('#### ')) {
        flushList();
        elements.push(
          <h4 key={index} style={{
            color: 'var(--color-secondary)',
            fontSize: '1.4rem',
            marginBottom: '0.5rem',
            marginTop: '1rem',
            fontWeight: '600'
          }}>
            {line.slice(5)}
          </h4>
        );
      } 
      // Handle numbered lists
      else if (/^\d+\.\s/.test(line)) {
        flushList();
        const match = line.match(/^(\d+)\.\s(.+)$/);
        if (match) {
          const number = match[1];
          const content = match[2];
          elements.push(
            <ol key={index} style={{
              marginLeft: '1.5rem',
              marginBottom: '0.5rem',
              listStyle: 'decimal'
            }}>
              <li style={{
                marginBottom: '0.5rem',
                lineHeight: '1.6'
              }} dangerouslySetInnerHTML={{ __html: processInlineFormatting(content) }} />
            </ol>
          );
        }
      }
      // Handle bullet lists
      else if (line.startsWith('- ') || line.startsWith('* ')) {
        const content = line.slice(2);
        listItems.push(
          <li key={`li-${index}`} style={{
            marginBottom: '0.5rem',
            lineHeight: '1.6'
          }} dangerouslySetInnerHTML={{ __html: processInlineFormatting(content) }} />
        );
      }
      // Handle blockquotes
      else if (line.startsWith('> ')) {
        flushList();
        elements.push(
          <blockquote key={index} style={{
            borderLeft: '4px solid var(--color-secondary)',
            paddingLeft: '1rem',
            marginLeft: '0',
            marginBottom: '1rem',
            fontStyle: 'italic',
            background: 'rgba(255,255,255,0.05)',
            padding: '1rem',
            borderRadius: '0 8px 8px 0'
          }}>
            <p dangerouslySetInnerHTML={{ __html: processInlineFormatting(line.slice(2)) }} />
          </blockquote>
        );
      }
      // Handle horizontal rules
      else if (line.trim() === '---' || line.trim() === '***') {
        flushList();
        elements.push(
          <hr key={index} style={{
            border: 'none',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, var(--color-secondary), transparent)',
            margin: '2rem 0'
          }} />
        );
      }
      // Handle empty lines
      else if (line.trim() === '') {
        flushList();
        elements.push(<br key={index} />);
      }
      // Handle regular paragraphs
      else {
        flushList();
        elements.push(
          <p key={index} style={{
            lineHeight: '1.8',
            marginBottom: '1rem',
            textAlign: 'justify'
          }} dangerouslySetInnerHTML={{ __html: processInlineFormatting(line) }} />
        );
      }
    });
    
    // Flush any remaining items
    flushList();
    flushCodeBlock();
    
    return <div>{elements}</div>;
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

        .port-text {
          padding: 2rem 0;
          text-align: center;
          font-size: clamp(0.9rem, 1.2vw, 1.1rem);
          line-height: 1.6;
          color: var(--color-grey-2);
          max-width: 800px;
          margin: 0 auto;
          margin-bottom: 3rem;
        }

        .portfolios {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          grid-gap: 2.5rem;
          margin-top: 3rem;
          padding: 0 2rem;
          max-width: 1400px;
          margin-left: auto;
          margin-right: auto;
        }

        .portfolio-item {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--box-shadow-1);
          transition: all 0.4s ease-in-out;
          background: var(--color-grey-5);
          border: 1px solid rgba(255,255,255,0.1);
          aspect-ratio: 4/3;
        }

        .portfolio-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,.3);
        }

        .portfolio-image-container {
          position: relative;
          height: 100%;
          overflow: hidden;
        }

        .portfolio-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.4s ease-in-out;
        }

        .portfolio-category {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: var(--color-secondary);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .portfolio-year {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(255,255,255,0.2);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          backdrop-filter: blur(10px);
        }

        .hover-items {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--color-secondary), #20B958);
          position: absolute;
          left: 0;
          top: 0;
          border-radius: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.4s ease-in-out;
          padding: 2rem;
          text-align: center;
          backdrop-filter: blur(20px);
        }

        .hover-items h3 {
          font-size: clamp(1.2rem, 2vw, 1.8rem);
          color: var(--color-white);
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .hover-items .buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          width: 100%;
          max-width: 300px;
        }

        .hover-items .buttons .icon {
          background: rgba(255,255,255,0.2);
          border-radius: 12px;
          padding: 0.8rem 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          color: var(--color-white);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          border: 1px solid rgba(255,255,255,0.3);
          backdrop-filter: blur(10px);
        }

        .hover-items .buttons .icon svg {
          margin-right: 0.5rem;
        }

        .hover-items .buttons .description-btn:hover {
          background: rgba(255,255,255,0.9);
          color: var(--color-primary);
        }

        .hover-items .buttons .github-btn:hover {
          background: #333;
          color: white;
        }

        .hover-items .buttons .video-btn:hover {
          background: #ff0000;
          color: white;
        }

        .hover-items .buttons .site-btn:hover {
          background: #4CAF50;
          color: white;
        }

        .portfolio-item:hover .hover-items {
          opacity: 1;
          transform: scale(1);
        }

        .portfolio-item:hover img {
          transform: scale(1.1);
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
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          max-width: 800px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          text-align: center;
          position: relative;
          transform: translateY(-30px) scale(0.9);
          transition: transform 0.3s ease-in-out;
          border: 1px solid var(--color-grey-4);
          color: var(--color-white);
        }

        .modal-content.fullscreen {
          max-width: 95vw;
          width: 95vw;
          max-height: 95vh;
          height: 95vh;
        }

        .modal-overlay.visible .modal-content {
          transform: translateY(0) scale(1);
        }

        .modal-header {
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          position: relative;
          text-align: left;
          margin-bottom: 1rem;
        }

        .modal-controls {
          position: absolute;
          top: 0;
          right: 0;
          display: flex;
          gap: 0.5rem;
        }

        .modal-control-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          border: none;
          color: var(--color-grey-2);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .modal-control-btn:hover {
          background: var(--color-secondary);
          color: white;
          transform: scale(1.1);
        }

        .modal-body {
          padding: 1rem 0;
          text-align: left;
        }

        .modal-content h3 {
          font-size: 2.2rem;
          margin-bottom: 1rem;
          color: var(--color-secondary);
          font-weight: 700;
        }

        .project-meta {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .meta-item {
          background: rgba(255,255,255,0.1);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          color: var(--color-grey-1);
          display: flex;
          align-items: center;
        }

        .tech-section {
          background: rgba(255,255,255,0.05);
          padding: 1.5rem;
          border-radius: 15px;
          margin: 1.5rem 0;
        }

        .tech-title {
          font-size: 1.2rem;
          color: var(--color-secondary);
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          background: var(--color-secondary);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .modal-actions {
          padding: 1.5rem 0 0;
          border-top: 1px solid rgba(255,255,255,0.1);
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .action-btn {
          padding: 0.8rem 1.5rem;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .action-btn.primary {
          background: var(--color-secondary);
          color: white;
        }

        .action-btn.secondary {
          background: rgba(255,255,255,0.1);
          color: var(--color-grey-1);
        }

        .action-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
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

        /* Video Modal Styles */
        .video-modal {
          max-width: 95vw;
          width: 95vw;
          max-height: 95vh;
          padding: 1.5rem;
        }

        .video-modal.fullscreen {
          max-width: 98vw;
          width: 98vw;
          max-height: 98vh;
          height: 98vh;
          padding: 1rem;
        }

        .video-container {
          position: relative;
          width: 100%;
          background: #000;
          border-radius: 15px;
          overflow: hidden;
          margin-bottom: 1rem;
        }

        .video-container.fullscreen {
          height: calc(100% - 120px);
        }

        .video-container:not(.fullscreen) {
          padding-bottom: 56.25%;
          height: 0;
        }

        .video-container iframe,
        .video-container video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        .video-info {
          text-align: center;
          padding: 1rem;
        }

        .video-info h4 {
          color: var(--color-secondary);
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .video-info p {
          color: var(--color-grey-2);
          font-size: 1rem;
        }

        .video-controls {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 1rem;
        }

        .video-control-btn {
          background: rgba(255,255,255,0.1);
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 10px;
          color: var(--color-white);
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .video-control-btn:hover {
          background: var(--color-secondary);
          transform: translateY(-2px);
        }

        .no-video-message {
          text-align: center;
          padding: 3rem;
          color: var(--color-grey-2);
        }

        .no-video-message h4 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--color-secondary);
        }

        /* System Design Image */
        .system-design-section {
          margin: 2rem 0;
        }

        .system-design-title {
          font-size: 1.3rem;
          color: var(--color-secondary);
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .system-design-image {
          width: 100%;
          max-width: 100%;
          height: auto;
          border-radius: 15px;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        /* Responsive Design */
        @media screen and (min-width: 1600px) {
          .container {
            padding: 3rem 5rem;
          }
          .portfolios {
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
          .portfolios {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
          }
        }

        @media screen and (max-width: 1024px) {
          .portfolios {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
            padding: 0 1rem;
          }

          .modal-content {
            max-width: 95%;
            width: 95%;
          }
        }

        @media screen and (max-width: 768px) {
          .container {
            padding: 1rem;
          }
          
          .portfolios {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 0;
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

          .hover-items .buttons {
            grid-template-columns: 1fr 1fr;
            gap: 0.8rem;
          }

          .hover-items .buttons .icon {
            padding: 0.6rem 0.8rem;
            font-size: 0.8rem;
          }

          .modal-content {
            width: 95%;
            max-height: 85vh;
            padding: 2rem;
          }

          .modal-body {
            padding: 1.5rem 0;
          }

          .modal-actions {
            flex-direction: column;
            gap: 0.8rem;
          }

          .video-modal {
            width: 98%;
            max-width: 98%;
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
          
          .portfolios {
            margin-bottom: 2rem;
          }
          
          .chat-bot-btn {
            bottom: 6rem;
            right: 1rem;
            width: 55px;
            height: 55px;
            z-index: 999;
          }

          .hover-items .buttons {
            grid-template-columns: 1fr;
            gap: 0.6rem;
          }

          .hover-items {
            padding: 1.5rem;
          }

          .modal-content {
            width: 98%;
            border-radius: 15px;
            padding: 1.5rem;
          }

          .modal-body {
            padding: 1rem 0;
          }

          .modal-header {
            padding-bottom: 0.8rem;
          }

          .modal-actions {
            padding: 1rem 0 0;
          }

          .action-btn {
            padding: 0.7rem 1rem;
            font-size: 0.9rem;
          }

          .tech-tags {
            gap: 0.3rem;
          }

          .tech-tag {
            padding: 0.4rem 0.8rem;
            font-size: 0.8rem;
          }

          .video-modal {
            padding: 1rem;
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

          .portfolios {
            grid-gap: 1rem;
          }

          .portfolio-item {
            border-radius: 15px;
          }

          .hover-items {
            border-radius: 15px;
            padding: 1rem;
          }

          .hover-items h3 {
            font-size: 1.2rem;
            margin-bottom: 0.8rem;
          }

          .modal-content {
            padding: 1rem;
          }

          .modal-content h3 {
            font-size: 1.8rem;
          }

          .project-meta {
            gap: 0.5rem;
          }

          .meta-item {
            padding: 0.4rem 0.8rem;
            font-size: 0.8rem;
          }

          .video-modal {
            padding: 0.5rem;
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

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .portfolio-item {
          animation: slideInUp 0.6s ease-out forwards;
        }

        .portfolio-item:nth-child(1) { animation-delay: 0.1s; }
        .portfolio-item:nth-child(2) { animation-delay: 0.2s; }
        .portfolio-item:nth-child(3) { animation-delay: 0.3s; }
        .portfolio-item:nth-child(4) { animation-delay: 0.4s; }
        .portfolio-item:nth-child(5) { animation-delay: 0.5s; }
        .portfolio-item:nth-child(6) { animation-delay: 0.6s; }

        .tech-tag {
          animation: fadeInScale 0.4s ease-out forwards;
        }

        .tech-tag:nth-child(1) { animation-delay: 0.1s; }
        .tech-tag:nth-child(2) { animation-delay: 0.2s; }
        .tech-tag:nth-child(3) { animation-delay: 0.3s; }
        .tech-tag:nth-child(4) { animation-delay: 0.4s; }
        .tech-tag:nth-child(5) { animation-delay: 0.5s; }
        .tech-tag:nth-child(6) { animation-delay: 0.6s; }
        .tech-tag:nth-child(7) { animation-delay: 0.7s; }
        .tech-tag:nth-child(8) { animation-delay: 0.8s; }

        /* Scrollbar Styles */
        .modal-content::-webkit-scrollbar {
          width: 8px;
        }

        .modal-content::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.1);
          border-radius: 10px;
        }

        .modal-content::-webkit-scrollbar-thumb {
          background: var(--color-secondary);
          border-radius: 10px;
        }

        .modal-content::-webkit-scrollbar-thumb:hover {
          background: #20B958;
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
        <section className="container active" id="portfolio">
          <div className="main-title">
            <h2>My <span>Portfolio</span><span className="bg-text">My Work</span></h2>
          </div>
          <p className="port-text">
            Here are some of my featured projects that showcase my skills across different domains including
            blockchain development, web applications, machine learning, and embedded systems.
          </p>
          <div className="portfolios">
            {portfolioItems.map((item) => (
              <div key={item.id} className="portfolio-item">
                <div className="portfolio-image-container">
                  <img src={item.image} alt={item.title} />
                  <div className="portfolio-category">{item.category}</div>
                  <div className="portfolio-year">{item.year}</div>
                </div>
                <div className="hover-items">
                  <h3>{item.title}</h3>
                  <div className="buttons">
                    <button className="icon description-btn" onClick={() => handleDescriptionClick(item)} title="View Details">
                      <FileText size={18} />
                      <span>Details</span>
                    </button>
                    {item.githubLink && (
                      <a href={item.githubLink} target="_blank" rel="noopener noreferrer" className="icon github-btn" title="View Code">
                        <Github size={18} />
                        <span>Code</span>
                      </a>
                    )}
                    {item.videoLink && (
                      <button className="icon video-btn" onClick={() => handleVideoClick(item)} title="Watch Demo">
                        <Play size={18} />
                        <span>Demo</span>
                      </button>
                    )}
                    {item.siteLink && (
                      <a href={item.siteLink} target="_blank" rel="noopener noreferrer" className="icon site-btn" title="Live Site">
                        <Globe size={18} />
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

     

      {/* Basic Modal */}
      <div className={`modal-overlay ${showModal ? 'visible' : ''}`}>
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-controls">
              <button className="modal-control-btn" onClick={closeModal}>
                <X size={20} />
              </button>
            </div>
          </div>
          <div className="modal-body">
            <p className="modal-message">{modalMessage}</p>
          </div>
          <div className="modal-actions">
            <button className="modal-ok-btn" onClick={closeModal}>OK</button>
          </div>
        </div>
      </div>

      {/* Description Modal */}
      {showDescriptionModal && (
        <div className={`modal-overlay ${showDescriptionModal ? 'visible' : ''}`}>
          <div className={`modal-content ${isFullScreen ? 'fullscreen' : ''}`}>
            <div className="modal-header">
              <div className="modal-controls">
                <button className="modal-control-btn" onClick={toggleFullScreen} title="Toggle Fullscreen">
                  {isFullScreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                </button>
                <button className="modal-control-btn" onClick={closeDescriptionModal}>
                  <X size={20} />
                </button>
              </div>
              <h3>{descriptionModalContent.title}</h3>
              <div className="project-meta">
                <div className="meta-item">
                  <Calendar size={16} style={{marginRight: '0.5rem'}} />
                  {descriptionModalContent.year}
                </div>
                <div className="meta-item">
                  <Award size={16} style={{marginRight: '0.5rem'}} />
                  {descriptionModalContent.category}
                </div>
              </div>
            </div>
            
            <div className="modal-body">
              <div>
                {renderMarkdown(descriptionModalContent.description || '')}
              </div>

              {/* System Design Image */}
              {descriptionModalContent.systemDesignImage && (
                <div className="system-design-section">
                  <div className="system-design-title">System Architecture</div>
                  <img 
                    src={descriptionModalContent.systemDesignImage} 
                    alt="System Design" 
                    className="system-design-image"
                  />
                </div>
              )}
              
              {descriptionModalContent.techUsed && (
                <div className="tech-section">
                  <div className="tech-title">Technologies & Tools Used</div>
                  <div className="tech-tags">
                    {descriptionModalContent.techUsed.split(', ').map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="modal-actions">
              {descriptionModalContent.githubLink && (
                <a href={descriptionModalContent.githubLink} target="_blank" rel="noopener noreferrer" className="action-btn secondary">
                  <Github size={18} />
                  View Code
                </a>
              )}
              {descriptionModalContent.videoLink && (
                <button onClick={() => handleVideoClick(descriptionModalContent)} className="action-btn secondary">
                  <Play size={18} />
                  Watch Demo
                </button>
              )}
              {descriptionModalContent.siteLink && (
                <a href={descriptionModalContent.siteLink} target="_blank" rel="noopener noreferrer" className="action-btn primary">
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {showVideoModal && (
        <div className={`modal-overlay ${showVideoModal ? 'visible' : ''}`}>
          <div className={`modal-content video-modal ${isFullScreen ? 'fullscreen' : ''}`}>
            <div className="modal-header">
              <div className="modal-controls">
                <button className="modal-control-btn" onClick={toggleFullScreen} title="Toggle Fullscreen">
                  {isFullScreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                </button>
                <button className="modal-control-btn" onClick={closeVideoModal}>
                  <X size={20} />
                </button>
              </div>
              <h3>Project Demo</h3>
            </div>
            
            <div className="modal-body">
              {videoModalContent.videoLink ? (
                <div>
                  <div className={`video-container ${isFullScreen ? 'fullscreen' : ''}`}>
                    {isLocalVideo(videoModalContent.videoLink) ? (
                      <video controls>
                        <source src={getVideoEmbedUrl(videoModalContent.videoLink)} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <iframe
                        src={getVideoEmbedUrl(videoModalContent.videoLink)}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Project Demo Video"
                      ></iframe>
                    )}
                  </div>
                  
                  <div className="video-info">
                    <h4>{videoModalContent.title}</h4>
                    <p>Project demonstration and walkthrough</p>
                  </div>
                  
                  <div className="video-controls">
                    {videoModalContent.githubLink && (
                      <a href={videoModalContent.githubLink} target="_blank" rel="noopener noreferrer" className="video-control-btn">
                        <Github size={18} />
                        View Source Code
                      </a>
                    )}
                    {videoModalContent.siteLink && (
                      <a href={videoModalContent.siteLink} target="_blank" rel="noopener noreferrer" className="video-control-btn">
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              ) : (
                <div className="no-video-message">
                  <h4>No Demo Available</h4>
                  <p>Video demonstration is not available for this project.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;