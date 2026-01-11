// Fix: Added React import to resolve the 'Cannot find namespace React' error for React.ReactNode
import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface BookingData {
  name: string;
  email: string;
  company: string;
  date: string;
  time: string;
  message: string;
}
