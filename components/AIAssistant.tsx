
import React, { useState } from 'react';
import { Send, Sparkles, Loader2, User, Bot } from 'lucide-react';
import { getToolRecommendation } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I'm your POS Growth Advisor. Tell me what's holding your business back, and I'll find the perfect tool to help you reset and rise." }
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await getToolRecommendation(userMessage);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I'm having trouble connecting to the network." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-[#0d0d0d] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-[#39FF14]/10 rounded-2xl mb-4">
            <Sparkles className="w-8 h-8 text-[#39FF14]" />
          </div>
          <h2 className="text-4xl font-black mb-4">Personalized Growth Path</h2>
          <p className="text-gray-400">Not sure where to start? Ask our AI Growth Advisor for a tailored recommendation.</p>
        </div>

        <div className="bg-[#111] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[500px]">
          {/* Messages Area */}
          <div className="flex-grow overflow-y-auto p-6 space-y-6 scrollbar-hide">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[80%] space-x-3 ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    msg.role === 'user' ? 'bg-blue-600' : 'bg-[#39FF14] text-black'
                  }`}>
                    {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white/5 border border-white/10 text-gray-200 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none flex items-center space-x-2">
                  <Loader2 className="w-4 h-4 text-[#39FF14] animate-spin" />
                  <span className="text-xs text-gray-400">Analyzing growth potential...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 bg-white/5">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g. 'I feel overwhelmed with my daily tasks...'"
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-4 pl-6 pr-14 text-white focus:outline-none focus:border-[#39FF14] transition-colors"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-2 bottom-2 px-4 bg-[#39FF14] text-black rounded-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
