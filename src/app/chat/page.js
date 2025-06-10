'use client';
import React, { useState, useEffect, useRef } from 'react';
import {
  Home,
  User,
  Briefcase,
  MessageSquare,
  Sun,
  Moon,
  Send,
  Trash2,
  Bot,
  User as UserIcon,
  Loader,
  RefreshCw,
  X
} from 'lucide-react';

const Chat = () => {
  const [activeSection, setActiveSection] = useState('chat');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  // API Configuration
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  }, [isDarkMode]);

  useEffect(() => {
    // Generate session ID
    const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    setSessionId(newSessionId);
    
    // Add welcome message
    setMessages([{
      id: 1,
      text: "Hi! I'm Furqan Ahmad. Welcome to my portfolio chat! Feel free to ask me about my projects, experience, skills, or anything else you'd like to know about me.",
      isUser: false,
      timestamp: new Date(),
      isWelcome: true
    }]);
    
    // Check API connection
    checkConnection();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const checkConnection = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/health`);
      if (response.ok) {
        setIsConnected(true);
      }
    } catch (error) {
      setIsConnected(false);
      console.error('Connection check failed:', error);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const showCustomModal = (message) => {
    setModalMessage(message);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalMessage('');
  };

  const navigationItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'portfolio', icon: Briefcase, label: 'Portfolio' },
    { id: 'contact', icon: MessageSquare, label: 'Contact' }
  ];

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;
    
    if (!isConnected) {
      showCustomModal('Connection to chat server is not available. Please try again later.');
      return;
    }

    const userMessage = {
      id: Date.now(),
      text: inputMessage.trim(),
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/ask`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_input: userMessage.text,
          session_id: sessionId
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      const botMessage = {
        id: Date.now() + 1,
        text: data.response,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = {
        id: Date.now() + 1,
        text: "I apologize, but I'm having trouble responding right now. Please check your connection and try again.",
        isUser: false,
        timestamp: new Date(),
        isError: true
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = async () => {
    try {
      await fetch(`${API_BASE_URL}/clear`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_id: sessionId
        })
      });
      
      setMessages([{
        id: 1,
        text: "Chat cleared! I'm Furqan Ahmad. How can I help you today?",
        isUser: false,
        timestamp: new Date(),
        isWelcome: true
      }]);
      
    } catch (error) {
      console.error('Error clearing chat:', error);
      showCustomModal('Failed to clear chat history. Please try again.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const renderMarkdown = (text) => {
    if (!text) return text;
    
    let html = text
      // Headers
      .replace(/^### (.*$)/gm, '<h3>$1</h3>')
      .replace(/^## (.*$)/gm, '<h2>$1</h2>')
      .replace(/^# (.*$)/gm, '<h1>$1</h1>')
      
      // Bold and italic
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      
      // Code blocks
      .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
      .replace(/`(.*?)`/g, '<code>$1</code>')
      
      // Line breaks
      .replace(/\n/g, '<br>')
      
      // Lists (basic)
      .replace(/^\- (.*$)/gm, '<li>$1</li>')
      .replace(/^(\d+)\. (.*$)/gm, '<li>$2</li>')
      
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    
    // Wrap consecutive list items in ul tags
    html = html.replace(/(<li>.*<\/li>)/g, (match) => {
      if (!match.includes('<ul>')) {
        return '<ul>' + match + '</ul>';
      }
      return match;
    });
    
    return html;
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
          --color-grey-6: #e5e7eb;
          --chat-gradient: linear-gradient(135deg, #ff6f00, #e65100);
        }

        body {
          background-color: var(--color-primary);
          font-family: "Poppins", sans-serif;
          font-size: 1.1rem;
          color: var(--color-white);
          transition: all 0.4s ease-in-out;
          min-height: 100vh;
          overflow: hidden;
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
          border: none;
        }

        .theme-btn:active {
          transform: translateY(-3px);
        }

        .main-title {
          text-align: center;
          margin-top: 1rem;
          margin-bottom: 1rem;
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
          font-size: clamp(2.5rem, 6vw, 4rem);
          white-space: nowrap;
          opacity: 0.1;
        }

        .chat-container {
          max-width: 1000px;
          margin: 0 auto;
          height: calc(100vh - 8rem);
          display: flex;
          flex-direction: column;
          background: var(--color-grey-5);
          border-radius: 20px;
          box-shadow: var(--box-shadow-1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
        }

        .chat-header {
          background: var(--chat-gradient);
          padding: 1.5rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .chat-header-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .chat-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .chat-title {
          color: white;
        }

        .chat-title h3 {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 0.2rem;
        }

        .chat-status {
          font-size: 0.9rem;
          opacity: 0.9;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .status-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #4ade80;
          animation: pulse 2s infinite;
        }

        .status-indicator.offline {
          background: #ef4444;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .chat-actions {
          display: flex;
          gap: 0.5rem;
        }

        .chat-action-btn {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          border-radius: 8px;
          padding: 0.8rem;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .chat-action-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-1px);
        }

        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background: var(--color-primary);
        }

        .chat-messages::-webkit-scrollbar {
          width: 6px;
        }

        .chat-messages::-webkit-scrollbar-track {
          background: var(--color-grey-5);
        }

        .chat-messages::-webkit-scrollbar-thumb {
          background: var(--color-secondary);
          border-radius: 3px;
        }

        .message {
          display: flex;
          gap: 1rem;
          animation: slideInUp 0.3s ease-out;
        }

        .message.user {
          flex-direction: row-reverse;
        }

        .message-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .message-avatar.bot {
          background: var(--chat-gradient);
          color: white;
        }

        .message-avatar.user {
          background: var(--color-grey-4);
          color: var(--color-white);
        }

        .light-mode .message-avatar.user {
          background: var(--color-grey-4);
          color: #FFFFFF;
        }

        .message-content {
          max-width: 70%;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .message.user .message-content {
          align-items: flex-end;
        }

        .message-bubble {
          padding: 1rem 1.5rem;
          border-radius: 20px;
          line-height: 1.6;
          word-wrap: break-word;
          position: relative;
        }

        .message-bubble h1,
        .message-bubble h2,
        .message-bubble h3,
        .message-bubble h4,
        .message-bubble h5,
        .message-bubble h6 {
          color: var(--color-secondary);
          margin: 0.8rem 0 0.5rem 0;
          font-weight: 600;
        }

        .message-bubble h1 { font-size: 1.5rem; }
        .message-bubble h2 { font-size: 1.3rem; }
        .message-bubble h3 { font-size: 1.2rem; }
        .message-bubble h4 { font-size: 1.1rem; }
        .message-bubble h5 { font-size: 1rem; }
        .message-bubble h6 { font-size: 0.9rem; }

        .message-bubble p {
          margin: 0.5rem 0;
          line-height: 1.6;
        }

        .message-bubble ul,
        .message-bubble ol {
          margin: 0.5rem 0;
          padding-left: 1.5rem;
        }

        .message-bubble li {
          margin: 0.3rem 0;
        }

        .message-bubble strong {
          font-weight: 600;
          color: inherit;
        }

        .message-bubble em {
          font-style: italic;
        }

        .message-bubble code {
          background: rgba(0, 0, 0, 0.1);
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
          font-family: 'Courier New', monospace;
          font-size: 0.9em;
        }

        .message-bubble.user code {
          background: rgba(255, 255, 255, 0.2);
        }

        .message-bubble pre {
          background: rgba(0, 0, 0, 0.1);
          padding: 1rem;
          border-radius: 8px;
          overflow-x: auto;
          margin: 0.5rem 0;
          border-left: 3px solid var(--color-secondary);
        }

        .message-bubble.user pre {
          background: rgba(255, 255, 255, 0.2);
          border-left-color: rgba(255, 255, 255, 0.5);
        }

        .message-bubble pre code {
          background: none;
          padding: 0;
        }

        .message-bubble blockquote {
          border-left: 3px solid var(--color-secondary);
          padding-left: 1rem;
          margin: 0.5rem 0;
          font-style: italic;
          opacity: 0.9;
        }

        .message-bubble a {
          color: var(--color-secondary);
          text-decoration: underline;
        }

        .message-bubble.user a {
          color: rgba(255, 255, 255, 0.9);
        }

        .message-bubble.bot {
          background: var(--color-grey-5);
          color: var(--color-white);
          border-bottom-left-radius: 8px;
        }

        .message-bubble.user {
          background: var(--chat-gradient);
          color: white;
          border-bottom-right-radius: 8px;
        }

        .message-bubble.welcome {
          background: linear-gradient(135deg, rgba(39, 174, 96, 0.1), rgba(32, 185, 88, 0.1));
          border: 1px solid rgba(39, 174, 96, 0.3);
        }

        .message-bubble.error {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #fca5a5;
        }

        .message-time {
          font-size: 0.8rem;
          color: var(--color-grey-2);
          opacity: 0.7;
        }

        .message.user .message-time {
          text-align: right;
        }

        .typing-indicator {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 0;
        }

        .typing-dots {
          display: flex;
          gap: 4px;
          padding: 1rem 1.5rem;
          background: var(--color-grey-5);
          border-radius: 20px;
          border-bottom-left-radius: 8px;
        }

        .typing-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--color-secondary);
          animation: typingAnimation 1.4s infinite ease-in-out;
        }

        .typing-dot:nth-child(1) { animation-delay: -0.32s; }
        .typing-dot:nth-child(2) { animation-delay: -0.16s; }

        @keyframes typingAnimation {
          0%, 80%, 100% { transform: scale(0); opacity: 0.5; }
          40% { transform: scale(1); opacity: 1; }
        }

        .chat-input-container {
          padding: 1.5rem 2rem;
          background: var(--color-grey-5);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .chat-input-wrapper {
          display: flex;
          gap: 1rem;
          align-items: flex-end;
          max-width: 100%;
        }

        .chat-input {
          flex: 1;
          background: var(--color-primary);
          border: 1px solid var(--color-grey-4);
          border-radius: 25px;
          padding: 1rem 1.5rem;
          color: var(--color-white);
          font-family: inherit;
          font-size: 1rem;
          line-height: 1.4;
          resize: none;
          max-height: 120px;
          min-height: 50px;
          transition: all 0.3s ease;
        }

        .chat-input:focus {
          outline: none;
          border-color: var(--color-secondary);
          box-shadow: 0 0 0 3px rgba(39, 174, 96, 0.1);
        }

        .chat-input::placeholder {
          color: var(--color-grey-2);
        }

        .send-button {
          background: var(--chat-gradient);
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .send-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(39, 174, 96, 0.4);
        }

        .send-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
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
          transition: all 0.3s ease-in-out;
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
          .chat-container {
            height: calc(100vh - 6rem);
          }

          .message-content {
            max-width: 80%;
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

          .chat-container {
            height: calc(100vh - 4rem);
            border-radius: 15px;
          }

          .chat-header {
            padding: 1rem 1.5rem;
          }

          .chat-header h3 {
            font-size: 1.2rem;
          }

          .chat-avatar {
            width: 40px;
            height: 40px;
          }

          .chat-messages {
            padding: 1rem;
          }

          .message-content {
            max-width: 85%;
          }

          .chat-input-container {
            padding: 1rem 1.5rem;
          }

          .modal-content {
            width: 95%;
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

          .chat-container {
            height: calc(100vh - 8rem);
          }

          .chat-header {
            padding: 1rem;
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .chat-header-info {
            justify-content: center;
          }

          .message-content {
            max-width: 90%;
          }

          .chat-input-container {
            padding: 1rem;
          }

          .chat-input-wrapper {
            gap: 0.5rem;
          }

          .send-button {
            width: 45px;
            height: 45px;
          }

          .modal-content {
            width: 98%;
            border-radius: 15px;
            padding: 1.5rem;
          }
        }

        /* Extra small screens */
        @media screen and (max-width: 480px) {
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

          .chat-container {
            height: calc(100vh - 7rem);
            border-radius: 12px;
          }

          .message-bubble {
            padding: 0.8rem 1.2rem;
            border-radius: 15px;
          }

          .message-bubble.bot {
            border-bottom-left-radius: 6px;
          }

          .message-bubble.user {
            border-bottom-right-radius: 6px;
          }

          .modal-content {
            padding: 1rem;
          }
        }

        /* Animation enhancements */
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
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

        .chat-container {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>

      {/* Theme Toggle Button */}
      <button className="theme-btn" onClick={toggleTheme} title="Toggle Theme">
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>

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
        <section className="container active" id="chat">
          <div className="main-title">
            <h2>Chat with <span>Furqan</span><span className="bg-text">AI Assistant</span></h2>
          </div>
          
          <div className="chat-container">
            {/* Chat Header */}
            <div className="chat-header">
              <div className="chat-header-info">
                <div className="chat-avatar">
                  <Bot size={24} />
                </div>
                <div className="chat-title">
                  <h3>Furqan Ahmad</h3>
                  <div className="chat-status">
                    <div className={`status-indicator ${isConnected ? '' : 'offline'}`}></div>
                    {isConnected ? 'Online' : 'Offline'}
                  </div>
                </div>
              </div>
              <div className="chat-actions">
                <button 
                  className="chat-action-btn" 
                  onClick={clearChat}
                  title="Clear Chat"
                >
                  <Trash2 size={18} />
                </button>
                <button 
                  className="chat-action-btn" 
                  onClick={checkConnection}
                  title="Refresh Connection"
                >
                  <RefreshCw size={18} />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="chat-messages" ref={chatContainerRef}>
              {messages.map((message) => (
                <div key={message.id} className={`message ${message.isUser ? 'user' : 'bot'}`}>
                  <div className={`message-avatar ${message.isUser ? 'user' : 'bot'}`}>
                    {message.isUser ? <UserIcon size={20} /> : <Bot size={20} />}
                  </div>
                  <div className="message-content">
                    <div className={`message-bubble ${message.isUser ? 'user' : 'bot'} ${message.isWelcome ? 'welcome' : ''} ${message.isError ? 'error' : ''}`}>
                      {message.isUser ? (
                        message.text
                      ) : (
                        <div dangerouslySetInnerHTML={{ __html: renderMarkdown(message.text) }} />
                      )}
                    </div>
                    <div className="message-time">
                      {formatTime(message.timestamp)}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isLoading && (
                <div className="message bot">
                  <div className="message-avatar bot">
                    <Bot size={20} />
                  </div>
                  <div className="typing-indicator">
                    <div className="typing-dots">
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="chat-input-container">
              <div className="chat-input-wrapper">
                <textarea
                  className="chat-input"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message here..."
                  disabled={isLoading || !isConnected}
                  rows={1}
                />
                <button
                  className="send-button"
                  onClick={sendMessage}
                  disabled={isLoading || !inputMessage.trim() || !isConnected}
                  title="Send Message"
                >
                  {isLoading ? <Loader size={20} className="animate-spin" /> : <Send size={20} />}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modal for notifications */}
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

export default Chat;