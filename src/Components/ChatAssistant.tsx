"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, Send, X, Volume2, VolumeX, RefreshCw } from "lucide-react";
import Lottie from "lottie-react";

type Message = {
  type: 'bot' | 'user';
  text: string;
};

type PresetQuestion = {
  text: string;
  action: () => void;
};

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', text: 'Hello, I\'m Ava, your FIDES Bridge Virtual Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [soundOn, setSoundOn] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const audioContext = useRef<AudioContext | null>(null);
  
  // Initialize audio context on component mount
  useEffect(() => {
    try {
      // Create audio context only when needed, to fix autoplay policy issues
      const initAudioContext = () => {
        if (!audioContext.current) {
          audioContext.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
      };
      
      // Initialize on first user interaction
      const handleInitAudio = () => {
        initAudioContext();
        document.removeEventListener('click', handleInitAudio);
      };
      
      document.addEventListener('click', handleInitAudio);
      
      return () => {
        document.removeEventListener('click', handleInitAudio);
        audioContext.current?.close();
        audioContext.current = null;
      };
    } catch (error) {
      console.error("Web Audio API not supported:", error);
    }
  }, []);
  
  const playMessageSound = async () => {
    if (!soundOn) return;
    
    try {
      // Create a simple beep sound directly with the Web Audio API
      // This avoids loading issues with external files
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Create oscillator for a simple beep
      const oscillator = audioContext.createOscillator();
      oscillator.type = 'sine'; // Sine wave for a smooth beep
      oscillator.frequency.setValueAtTime(880, audioContext.currentTime); // Higher pitch (A5)
      
      // Add gain node to control volume and create envelope
      const gainNode = audioContext.createGain();
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.2, audioContext.currentTime + 0.01); // Quick fade in
      gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.2); // Quick fade out
      
      // Connect and play
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.2); // Short duration
      
      console.log("Playing message sound"); // Debug log
      
      // Close audio context after sound played
      setTimeout(() => {
        audioContext.close();
      }, 500);
    } catch (error) {
      console.error("Error playing sound:", error);
    }
  };
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const toggleSound = () => {
    setSoundOn(!soundOn);
    // Logic to actually enable/disable sound would go here
  };
  
  const refreshChat = () => {
    setIsRefreshing(true);
    
    // Clear messages and show loading state
    setTimeout(() => {
      setMessages([
        { type: 'bot', text: 'Hello, I\'m Ava, your FIDES Bridge Virtual Assistant. How can I help you today?' }
      ]);
      setIsRefreshing(false);
    }, 2000); // Show loading for 2 seconds
  };
  
  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const newMessages = [...messages, { type: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    
    // Play sound when message is sent
    playMessageSound();
    
    // Simulate bot response with typing indicator
    setTimeout(() => {
      setMessages([
        ...newMessages,
        { 
          type: 'bot', 
          text: 'Thanks for your message. Our team will get back to you soon. Is there anything else I can help you with?' 
        }
      ]);
      // Play sound for bot response
      playMessageSound();
    }, 1000);
  };
  
  const handlePresetQuestion = (question: string) => {
    // Add user message (the preset question)
    const newMessages = [...messages, { type: 'user', text: question }];
    setMessages(newMessages);
    
    // Play sound for user message
    playMessageSound();
    
    // Simulate bot response based on question
    setTimeout(() => {
      let botResponse = '';
      
      switch(question) {
        case "I'm looking for a job.":
          botResponse = "Great! I can help you find job opportunities. Please check our job listings at the top of the page or tell me what kind of position you're looking for.";
          break;
        case "I need help hiring talent.":
          botResponse = "We specialize in connecting companies with top talent. Please provide details about the position you're looking to fill, and our team will assist you.";
          break;
        case "I am a current consultant.":
          botResponse = "Welcome back! For consultant resources or support, please login to your account or let me know how I can assist you today.";
          break;
        case "I have a question.":
          botResponse = "I'm happy to answer any questions. What would you like to know about our services?";
          break;
        default:
          botResponse = "Thank you for your message. How else can I assist you today?";
      }
      
      setMessages([...newMessages, { type: 'bot', text: botResponse }]);
      // Play sound for bot response
      playMessageSound();
    }, 800);
  };
  
  // Preset questions
  const presetQuestions: PresetQuestion[] = [
    { text: "I'm looking for a job.", action: () => handlePresetQuestion("I'm looking for a job.") },
    { text: "I need help hiring talent.", action: () => handlePresetQuestion("I need help hiring talent.") },
    { text: "I am a current consultant.", action: () => handlePresetQuestion("I am a current consultant.") },
    { text: "I have a question.", action: () => handlePresetQuestion("I have a question.") },
  ];

  const formatDate = () => {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    return `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
  };
  
  return (
    <>
      {/* Chat button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
      >
        <MessageCircle size={24} />
      </button>
      
      {/* Chat interface */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent 
          side="bottom" 
          className="w-full sm:w-[450px] p-0 border border-blue-800/20 rounded-t-xl overflow-hidden mx-auto h-[600px] sm:mr-6 shadow-lg bg-[#0B0F19]"
        >
          <SheetHeader className="sr-only">
            <SheetTitle>FIDES Bridge Chat Assistant</SheetTitle>
          </SheetHeader>
          
          {/* Header */}
          <div className="bg-[#001730] text-white p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="h-10 w-10 border-2 border-blue-500">
                    <AvatarImage src="/images/chatbot.png" alt="Ava - FIDES Assistant" />
                    <AvatarFallback className="bg-blue-700">AVA</AvatarFallback>
                  </Avatar>
                  <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border border-[#001730]"></div>
                </div>
                <div>
                  <h3 className="font-medium">Ava</h3>
                  <p className="text-xs text-blue-300">FIDES Bridge Assistant</p>
                </div>
              </div>
              <div className="flex gap-2">
                {/* Sound toggle button */}
                <button 
                  onClick={toggleSound} 
                  className="p-1.5 text-gray-300 hover:text-white rounded-full transition-colors"
                  aria-label={soundOn ? "Turn sound off" : "Turn sound on"}
                >
                  {soundOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
                </button>
                
                {/* Refresh chat button */}
                <button 
                  onClick={refreshChat} 
                  className="p-1.5 text-gray-300 hover:text-white rounded-full transition-colors"
                  disabled={isRefreshing}
                  aria-label="Refresh chat"
                >
                  <RefreshCw size={18} className={isRefreshing ? "animate-spin" : ""} />
                </button>
                
                {/* Close button */}
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="p-1.5 text-gray-300 hover:text-white rounded-full transition-colors"
                  aria-label="Close chat"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          </div>
          
          {/* Date display */}
          <div className="bg-[#0B0F19] flex items-center justify-center h-8 text-xs text-gray-400">
            {formatDate()}
          </div>
          
          {/* Chat messages */}
          <div className="h-[330px] overflow-y-auto p-5 flex flex-col gap-4 bg-[#0B0F19]">
            {isRefreshing ? (
              <div className="absolute inset-0 bg-gradient-to-b from-[#001730] via-[#0c2d5a] to-[#0B0F19] flex flex-col items-center justify-center z-10">
                <div className="w-36 h-36 relative">
                  <div className="absolute inset-0 bg-blue-600/20 rounded-full animate-pulse"></div>
                  <div className="absolute -inset-4 bg-blue-500/5 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <Lottie 
                    animationData={require('/public/assets/chatloading.json')} 
                    loop={true}
                    style={{ filter: 'grayscale(100%) brightness(0.8) sepia(100%) hue-rotate(190deg) saturate(800%)' }} 
                  />
                </div>
                <p className="text-blue-300 mt-4 text-sm font-medium">Refreshing conversation...</p>
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-5 pointer-events-none"></div>
              </div>
            ) : (
              <>
                {messages.map((message, index) => (
                  <div 
                    key={index} 
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.type === 'bot' && (
                      <Avatar className="h-8 w-8 mr-2 self-end mb-1 hidden sm:inline-flex">
                        <AvatarImage src="/images/chatbot.png" alt="Ava" />
                        <AvatarFallback className="bg-blue-700 text-xs">AVA</AvatarFallback>
                      </Avatar>
                    )}
                    <div 
                      className={`max-w-[85%] p-3 rounded-lg ${
                        message.type === 'user' 
                          ? 'bg-blue-600 text-white rounded-tr-none' 
                          : 'bg-[#1A2133] text-gray-200 rounded-tl-none'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>
          
          {/* Pre-set questions (only show when conversation is new and not refreshing) */}
          {messages.length <= 2 && !isRefreshing && (
            <div className="p-4 bg-[#0B0F19] border-t border-blue-900/20">
              <div className="grid gap-2">
                {presetQuestions.map((q, idx) => (
                  <Button 
                    key={idx} 
                    variant="outline" 
                    onClick={q.action}
                    className="justify-start text-left bg-[#101625] hover:bg-[#1A2133] border-blue-800/20 hover:border-blue-500/40 text-white hover:text-white rounded-lg transition-all duration-200"
                  >
                    {q.text}
                  </Button>
                ))}
              </div>
            </div>
          )}
          
          {/* Input area */}
          <div className="p-4 border-t border-blue-900/20 bg-[#0B0F19]">
            <div className="relative">
              <Input
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="border-none border-blue-800/30 bg-[#101625] text-white pr-12 hover:border-transparent focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-blue-800/30 focus-visible:border-blue-800/30 transition-all"
                style={{
                  backgroundImage: 'none',
                  backgroundPosition: '0 0',
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundImage = 'linear-gradient(to right, #1a365d, #3182ce, #1a365d)';
                  e.currentTarget.style.backgroundPosition = '0 100%';
                  e.currentTarget.style.backgroundSize = '100% 1px';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundImage = 'none';
                }}
                disabled={isRefreshing}
              />
              <Button 
                onClick={handleSend} 
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent hover:bg-transparent text-blue-500 hover:text-blue-400 p-2 h-8 w-8"
                disabled={isRefreshing}
              >
                <Send size={18} />
              </Button>
            </div>
            <div className="mt-2 text-center">
              <span className="text-xs text-gray-400">Powered by FIDES AI</span>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
} 