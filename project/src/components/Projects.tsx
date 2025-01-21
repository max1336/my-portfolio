import React from 'react';
import { ExternalLink, Play } from 'lucide-react';

const quizCategories = [
  {
    title: 'Mathematics',
    description: 'Test your math skills with our comprehensive quiz collection',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800',
    questions: 100,
    difficulty: 'All Levels'
  },
  {
    title: 'Science',
    description: 'Explore the wonders of science through interactive quizzes',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800',
    questions: 150,
    difficulty: 'Beginner to Advanced'
  },
  {
    title: 'General Knowledge',
    description: 'Challenge yourself with diverse general knowledge questions',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800',
    questions: 200,
    difficulty: 'Mixed'
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-[#E0F7FA]" id="quizzes">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#007BFF]">
          Popular Quiz Categories
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quizCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <div className="relative group">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-[#007BFF]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="px-6 py-2 bg-[#FF5722] text-white rounded-full flex items-center gap-2 hover:bg-[#FF5722]/90 transition-colors">
                    <Play size={20} />
                    Start Quiz
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2 text-[#212121]">{category.title}</h3>
                <p className="text-[#212121]/70 mb-4">{category.description}</p>
                <div className="flex justify-between text-sm text-[#007BFF]">
                  <span>{category.questions} Questions</span>
                  <span>{category.difficulty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}