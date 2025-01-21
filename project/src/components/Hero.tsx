import React from 'react';
import { Github, Instagram, Mail, ChevronDown, Brain, Star, Zap, BookOpen, Target } from 'lucide-react';
import HeroLogo from './HeroLogo';

const floatingIcons = [Brain, Star, Zap, BookOpen, Target];

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Interactive Background */}
      <div className="fixed inset-0 wave-bg"></div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Bubbles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`bubble-${i}`}
            className="bubble"
            style={{
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

        {/* Geometric Shapes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`shape-${i}`}
            className="shape"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              borderRadius: `${Math.random() * 40 + 30}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

        {/* Floating Icons */}
        {[...Array(10)].map((_, i) => {
          const Icon = floatingIcons[i % floatingIcons.length];
          return (
            <div
              key={`icon-${i}`}
              className="absolute floating-icon"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                color: `rgba(0, 123, 255, ${Math.random() * 0.3 + 0.1})`,
              }}
            >
              <Icon size={Math.random() * 20 + 15} />
            </div>
          );
        })}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        <div className="flex flex-row items-center justify-between gap-4 md:gap-8">
          <div className="flex-1 max-w-2xl">
            <div className="glass-card p-8 rounded-2xl mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-[#007BFF]">
                Welcome to <span className="bg-gradient-to-r from-[#007BFF] to-[#00BCD4] text-transparent bg-clip-text">Max Quizzes</span>
              </h1>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#212121]/80 mb-6">
                Interactive Learning Platform
              </h2>
              
              <p className="text-lg sm:text-xl text-[#212121]/70 mb-8">
                Engage, learn, and challenge yourself with our interactive quizzes.
                Making education fun and accessible for everyone.
              </p>
              
              <button className="relative group px-8 py-3 bg-[#007BFF] text-white rounded-full font-semibold text-lg 
                shadow-lg transform hover:translate-y-[-2px] transition-all duration-300">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#007BFF] to-[#00BCD4] opacity-0 
                  group-hover:opacity-100 blur-xl transition-all duration-300"></div>
                <span className="relative z-10">Start Quiz Now</span>
              </button>
            </div>
            
            <div className="flex space-x-4 md:space-x-6">
              {[
                { href: "https://github.com/maxquizzes", Icon: Github },
                { href: "https://www.instagram.com/max_quizzes", Icon: Instagram },
                { href: "mailto:contact@maxquizzes.com", Icon: Mail }
              ].map(({ href, Icon }, index) => (
                <a 
                  key={index}
                  href={href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 md:p-4 rounded-xl hover:scale-110 transition-all duration-300"
                >
                  <Icon size={20} className="text-[#007BFF]" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] flex-shrink-0">
            <HeroLogo />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-[#007BFF]" />
      </div>
    </div>
  );
}