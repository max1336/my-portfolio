import React from 'react';
import { BookOpen, Target, Trophy } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#007BFF]">
          Why Choose Max Quizzes?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: BookOpen,
              title: 'Learn Interactively',
              description: 'Engage with our carefully crafted quizzes designed to make learning fun and effective.'
            },
            {
              icon: Target,
              title: 'Track Progress',
              description: 'Monitor your performance and see your knowledge grow with detailed analytics.'
            },
            {
              icon: Trophy,
              title: 'Earn Rewards',
              description: 'Get badges and certificates as you complete quizzes and improve your scores.'
            }
          ].map((item, index) => (
            <div key={index} className="bg-[#E0F7FA] rounded-xl p-6 transform hover:scale-105 transition-all duration-300 shadow-lg">
              <div className="w-16 h-16 mb-6 bg-[#007BFF] rounded-xl flex items-center justify-center">
                <item.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-[#212121]">{item.title}</h3>
              <p className="text-[#212121]/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}