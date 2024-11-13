import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay: string;
}

export function ProcessStep({ title, description, icon: Icon, delay }: ProcessStepProps) {
  return (
    <div 
      className="flex flex-col items-center p-6 bg-dark-green rounded-lg shadow-xl animate-fade-in"
      style={{ animationDelay: delay }}
    >
      <Icon className="w-12 h-12 text-mint mb-4" />
      <h3 className="text-xl font-bold text-mint mb-2">{title}</h3>
      <p className="text-white text-center">{description}</p>
    </div>
  );
}