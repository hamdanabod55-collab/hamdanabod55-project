'use client';

import { useState } from 'react';

export default function ImageGallery({ mainImage, title }: { mainImage: string, title: string }) {
  const [activeImage, setActiveImage] = useState(mainImage);
  
  // Generating mock thumbnails
  const thumbnails = [
    mainImage,
    `${mainImage}&auto=format&fit=crop&q=60`,
    `${mainImage}&auto=format&fit=crop&q=40`,
    `${mainImage}&auto=format&fit=crop&q=20`,
  ];

  return (
    <div className="flex flex-col space-y-4">
      <div className="aspect-[3/4] overflow-hidden bg-gray-100 rounded-lg">
        <img 
          src={activeImage} 
          alt={title} 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {thumbnails.map((thumb, idx) => (
          <button 
            key={idx}
            onClick={() => setActiveImage(thumb)}
            className={`aspect-square overflow-hidden bg-gray-100 rounded-md border-2 transition-colors ${activeImage === thumb ? 'border-primary dark:border-white' : 'border-transparent'}`}
          >
            <img 
              src={thumb} 
              alt={`${title} thumbnail ${idx + 1}`} 
              className="w-full h-full object-cover object-center"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
