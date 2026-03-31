'use client';

import { useState } from 'react';

type AccordionProps = {
  title: string;
  content: string;
  defaultOpen?: boolean;
};

export default function Accordion({ title, content, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border">
      <button 
        className="flex w-full justify-between items-center py-5 text-left font-medium text-lg hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className="text-2xl leading-none">{isOpen ? '−' : '+'}</span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-5' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-muted leading-relaxed whitespace-pre-line">{content}</p>
      </div>
    </div>
  );
}
