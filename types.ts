
export interface Product {
  id: string;
  category: string;
  name: string;
  description: string;
  price: string;
  image: string;
  features: string[];
}

export enum Category {
  CALENDARS = 'Digital Calendars',
  JOURNALS = 'Guided Journals',
  AUDIO = 'Audiobooks & Audio Guides',
  SYSTEMS = 'Productivity Systems & Templates'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
