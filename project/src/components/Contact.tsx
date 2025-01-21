import React from 'react';
import { Mail, MapPin, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#007BFF]">
          Get in Touch
        </h2>
        <div className="max-w-4xl mx-auto bg-[#E0F7FA] rounded-xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-medium mb-6 text-[#212121]">Contact Us</h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, text: 'contact@maxquizzes.com' },
                  { icon: MapPin, text: 'Gujarat, India' },
                  { icon: MessageSquare, text: 'Live Chat Support Available' }
                ].map(({ icon: Icon, text }, index) => (
                  <div key={index} className="flex items-center space-x-4 text-[#212121]/70">
                    <div className="w-10 h-10 bg-[#007BFF] rounded-lg flex items-center justify-center">
                      <Icon size={20} className="text-white" />
                    </div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <form className="space-y-4">
              {[
                { label: 'Name', type: 'text' },
                { label: 'Email', type: 'email' },
                { label: 'Message', type: 'textarea' }
              ].map(({ label, type }) => (
                <div key={label}>
                  <label className="block text-sm font-medium text-[#212121]/70 mb-2">
                    {label}
                  </label>
                  {type === 'textarea' ? (
                    <textarea
                      rows={4}
                      className="w-full bg-white border border-[#007BFF]/20 rounded-lg px-4 py-3 text-[#212121]
                        focus:ring-2 focus:ring-[#007BFF]/50 focus:border-transparent transition-all"
                    />
                  ) : (
                    <input
                      type={type}
                      className="w-full bg-white border border-[#007BFF]/20 rounded-lg px-4 py-3 text-[#212121]
                        focus:ring-2 focus:ring-[#007BFF]/50 focus:border-transparent transition-all"
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="w-full bg-[#FF5722] text-white py-3 px-6 rounded-lg hover:bg-[#FF5722]/90 
                  transform hover:translate-y-[-2px] transition-all duration-300 shadow-lg hover:shadow-[#FF5722]/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}