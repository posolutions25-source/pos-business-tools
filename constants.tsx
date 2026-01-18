
import React from 'react';
import { Product, Category } from './types';
import { Calendar, BookOpen, Mic, LayoutGrid, Zap, Shield, TrendingUp, Target } from 'lucide-react';

export const PRODUCTS: Product[] = [
  {
    id: 'cal-01',
    category: Category.CALENDARS,
    name: 'Goal-Setter Digital Planner 2025',
    description: 'Plan your days with clarity. This business-ready calendar helps you stay organized and focused.',
    price: '$29.00',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80',
    features: ['Hyperlinked tabs', 'Quarterly goal tracking', 'Daily focus blocks']
  },
  {
    id: 'jou-01',
    category: Category.JOURNALS,
    name: 'The Growth Catalyst Journal',
    description: 'Build better habits and track your progress with structured prompts designed for real-world growth.',
    price: '$24.00',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80',
    features: ['Morning mindset prompts', 'Evening reflection', 'Weekly habit tracker']
  },
  {
    id: 'aud-01',
    category: Category.AUDIO,
    name: 'Mindset Reset: Fast Track',
    description: 'Fast, practical lessons that help you reset your mindset and grow your business with confidence.',
    price: '$19.00',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80',
    features: ['High-quality MP3', 'Companion workbook', 'Actionable takeaways']
  },
  {
    id: 'sys-01',
    category: Category.SYSTEMS,
    name: 'Streamline Workflow Template',
    description: 'Ready-to-use digital tools that streamline your workflow and help you operate like a pro.',
    price: '$47.00',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    features: ['Notion compatible', 'Automated reporting', 'Team collaboration hubs']
  },
];

export const NAV_LINKS = [
  { name: 'Home', href: '#' },
  { name: 'Shop All', href: '#shop' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' }
];

export const CATEGORY_ICONS = {
  [Category.CALENDARS]: <Calendar className="w-6 h-6 text-[#39FF14]" />,
  [Category.JOURNALS]: <BookOpen className="w-6 h-6 text-[#39FF14]" />,
  [Category.AUDIO]: <Mic className="w-6 h-6 text-[#39FF14]" />,
  [Category.SYSTEMS]: <LayoutGrid className="w-6 h-6 text-[#39FF14]" />,
};

export const VALUE_PROPS = [
  {
    icon: <Zap className="w-8 h-8 text-[#39FF14]" />,
    title: 'Fast Growth',
    description: 'Designed for real people who want measurable results without the wait.'
  },
  {
    icon: <Shield className="w-8 h-8 text-[#39FF14]" />,
    title: 'Confidence',
    description: 'Tools that empower you to take control of your business and mindset.'
  },
  {
    icon: <Target className="w-8 h-8 text-[#39FF14]" />,
    title: 'No Overwhelm',
    description: 'Simple, accessible systems built for the complexities of real life.'
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-[#39FF14]" />,
    title: 'Scalable',
    description: 'Systems that grow as you grow, from side hustle to full-scale enterprise.'
  }
];
