import React, { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

const Chatbot: React.FC = () => {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://jawabu.app.n8n.cloud/webhook/dec328cc-f47e-4727-b1c5-7370be86a958/chat',
      target: '#n8n-chat',
      mode: 'window',
      showWelcomeScreen: true,
      chatInputKey: 'chatInput',
      chatSessionKey: 'sessionId',
      loadPreviousSession: true,
      defaultLanguage: 'en',
      initialMessages: [
        "🧁 Hi there! I'm your Sweet Corner assistant. I'm here to help you with dessert corners, cupcake orders, and event planning. What sweet treats can I help you with today?"
      ],
      allowFileUploads: false
    });

    // Add custom CSS to match Sweet Corner theme
    const style = document.createElement('style');
    style.textContent = `
      /* Chat Toggle Button Styling */
      .n8n-chat-toggle {
        background: linear-gradient(135deg, #8B5CF6 0%, #ec4899 100%) !important;
        border: none !important;
        box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3) !important;
        transition: all 0.3s ease !important;
        width: 60px !important;
        height: 60px !important;
      }
      
      .n8n-chat-toggle:hover {
        background: linear-gradient(135deg, #7C3AED 0%, #db2777 100%) !important;
        transform: scale(1.05) !important;
        box-shadow: 0 15px 35px rgba(139, 92, 246, 0.4) !important;
      }
      
      /* Chat Window Header */
      .n8n-chat-header {
        background: linear-gradient(135deg, #8B5CF6 0%, #ec4899 100%) !important;
        color: white !important;
        border-radius: 16px 16px 0 0 !important;
        padding: 20px !important;
        border-bottom: none !important;
      }
      
      .n8n-chat-title {
        font-family: 'Playfair Display', serif !important;
        font-weight: 700 !important;
        font-size: 20px !important;
        color: white !important;
        margin: 0 !important;
      }
      
      .n8n-chat-subtitle {
        color: rgba(255, 255, 255, 0.9) !important;
        font-size: 14px !important;
        font-family: 'Inter', sans-serif !important;
        margin-top: 4px !important;
      }
      
      /* Chat Window Container */
      .n8n-chat-window {
        border-radius: 16px !important;
        box-shadow: 0 20px 60px rgba(139, 92, 246, 0.2) !important;
        border: 2px solid rgba(139, 92, 246, 0.1) !important;
        overflow: hidden !important;
        font-family: 'Inter', sans-serif !important;
      }
      
      /* Chat Messages Area */
      .n8n-chat-messages {
        background: linear-gradient(to bottom, #fdf2f8, #ffffff) !important;
        padding: 20px !important;
      }
      
      /* User Messages */
      .n8n-chat-message.user .n8n-chat-message-text {
        background: linear-gradient(135deg, #8B5CF6 0%, #ec4899 100%) !important;
        color: white !important;
        border-radius: 18px 18px 4px 18px !important;
        padding: 12px 16px !important;
        margin: 8px 0 !important;
        box-shadow: 0 4px 12px rgba(139, 92, 246, 0.2) !important;
        border: none !important;
        font-family: 'Inter', sans-serif !important;
      }
      
      /* Bot Messages */
      .n8n-chat-message.bot .n8n-chat-message-text {
        background: white !important;
        color: #374151 !important;
        border: 2px solid rgba(139, 92, 246, 0.1) !important;
        border-radius: 18px 18px 18px 4px !important;
        padding: 12px 16px !important;
        margin: 8px 0 !important;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05) !important;
        font-family: 'Inter', sans-serif !important;
      }
      
      /* Chat Input Area */
      .n8n-chat-input-container {
        background: white !important;
        border-top: 2px solid rgba(139, 92, 246, 0.1) !important;
        padding: 20px !important;
      }
      
      .n8n-chat-input {
        border: 2px solid rgba(139, 92, 246, 0.2) !important;
        border-radius: 25px !important;
        padding: 12px 20px !important;
        font-size: 14px !important;
        transition: all 0.3s ease !important;
        background: #fdf2f8 !important;
        font-family: 'Inter', sans-serif !important;
        width: 100% !important;
      }
      
      .n8n-chat-input:focus {
        border-color: #ec4899 !important;
        box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.1) !important;
        outline: none !important;
        background: white !important;
      }
      
      .n8n-chat-input::placeholder {
        color: #9ca3af !important;
      }
      
      /* Send Button */
      .n8n-chat-send-button {
        background: linear-gradient(135deg, #8B5CF6 0%, #ec4899 100%) !important;
        border: none !important;
        border-radius: 50% !important;
        width: 44px !important;
        height: 44px !important;
        margin-left: 12px !important;
        transition: all 0.3s ease !important;
        box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3) !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
      }
      
      .n8n-chat-send-button:hover {
        background: linear-gradient(135deg, #7C3AED 0%, #db2777 100%) !important;
        transform: scale(1.05) !important;
        box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4) !important;
      }
      
      .n8n-chat-send-button svg {
        color: white !important;
        width: 20px !important;
        height: 20px !important;
      }
      
      /* Welcome Screen */
      .n8n-chat-welcome {
        background: linear-gradient(to bottom, #fdf2f8, #ffffff) !important;
        padding: 30px 24px !important;
        text-align: center !important;
      }
      
      .n8n-chat-welcome-title {
        font-family: 'Playfair Display', serif !important;
        font-weight: 700 !important;
        font-size: 24px !important;
        color: #8B5CF6 !important;
        margin-bottom: 12px !important;
      }
      
      .n8n-chat-welcome-message {
        color: #6b7280 !important;
        font-size: 16px !important;
        line-height: 1.6 !important;
        font-family: 'Inter', sans-serif !important;
      }
      
      /* Scrollbar Styling */
      .n8n-chat-messages::-webkit-scrollbar {
        width: 6px !important;
      }
      
      .n8n-chat-messages::-webkit-scrollbar-track {
        background: #f1f1f1 !important;
        border-radius: 3px !important;
      }
      
      .n8n-chat-messages::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #8B5CF6, #ec4899) !important;
        border-radius: 3px !important;
      }
      
      .n8n-chat-messages::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to bottom, #7C3AED, #db2777) !important;
      }
      
      /* Typing Indicator */
      .n8n-chat-typing {
        color: #8B5CF6 !important;
        font-family: 'Inter', sans-serif !important;
      }
      
      .n8n-chat-typing-dots {
        background: #8B5CF6 !important;
      }
      
      /* Close Button */
      .n8n-chat-close {
        color: white !important;
        opacity: 0.8 !important;
        transition: opacity 0.3s ease !important;
        width: 24px !important;
        height: 24px !important;
      }
      
      .n8n-chat-close:hover {
        opacity: 1 !important;
        transform: scale(1.1) !important;
      }
      
      /* Message Timestamps */
      .n8n-chat-message-timestamp {
        color: #9ca3af !important;
        font-size: 12px !important;
        font-family: 'Inter', sans-serif !important;
      }
      
      /* Mobile Responsiveness */
      @media (max-width: 640px) {
        .n8n-chat-window {
          width: calc(100vw - 24px) !important;
          height: calc(100vh - 120px) !important;
          max-height: 500px !important;
          margin: 12px !important;
        }
        
        .n8n-chat-toggle {
          width: 56px !important;
          height: 56px !important;
          bottom: 20px !important;
          right: 20px !important;
        }
        
        .n8n-chat-header {
          padding: 16px !important;
        }
        
        .n8n-chat-title {
          font-size: 18px !important;
        }
        
        .n8n-chat-messages {
          padding: 16px !important;
        }
        
        .n8n-chat-input-container {
          padding: 16px !important;
        }
        
        .n8n-chat-welcome {
          padding: 24px 20px !important;
        }
        
        .n8n-chat-welcome-title {
          font-size: 20px !important;
        }
        
        .n8n-chat-welcome-message {
          font-size: 14px !important;
        }
      }
      
      /* Animation for chat toggle */
      @keyframes sweetPulse {
        0% { 
          box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
          transform: scale(1);
        }
        50% { 
          box-shadow: 0 15px 35px rgba(139, 92, 246, 0.5);
          transform: scale(1.02);
        }
        100% { 
          box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
          transform: scale(1);
        }
      }
      
      .n8n-chat-toggle {
        animation: sweetPulse 4s infinite !important;
      }
      
      /* Custom branding */
      .n8n-chat-header::before {
        content: "🧁";
        font-size: 24px;
        margin-right: 8px;
      }
      
      /* Enhanced message styling */
      .n8n-chat-message {
        margin-bottom: 16px !important;
      }
      
      .n8n-chat-message.user {
        text-align: right !important;
      }
      
      .n8n-chat-message.bot {
        text-align: left !important;
      }
      
      /* Input focus ring */
      .n8n-chat-input:focus-visible {
        outline: 2px solid #ec4899 !important;
        outline-offset: 2px !important;
      }
      
      /* Smooth transitions */
      .n8n-chat-window * {
        transition: all 0.2s ease !important;
      }
      
      /* Loading states */
      .n8n-chat-loading {
        color: #8B5CF6 !important;
      }
      
      /* Error states */
      .n8n-chat-error {
        color: #ef4444 !important;
        background: #fef2f2 !important;
        border: 1px solid #fecaca !important;
        border-radius: 8px !important;
        padding: 12px !important;
        margin: 8px 0 !important;
      }
    `;
    
    document.head.appendChild(style);

    // Cleanup function
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };

  }, []);

  return <div id="n8n-chat"></div>;
};

export default Chatbot;