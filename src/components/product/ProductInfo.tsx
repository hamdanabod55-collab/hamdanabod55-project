'use client';

import { useState } from 'react';
import { Product } from '@/data/mockData';
import { useCart } from '@/context/CartContext';

export default function ProductInfo({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">{product.name}</h1>
      <div className="flex items-center space-x-4 mb-6">
        <span className="text-2xl font-medium">${product.price.toFixed(2)}</span>
        <div className="flex items-center text-sm text-yellow-500">
          <span className="text-lg mr-1">★</span>
          <span className="text-muted">{product.rating} ({product.reviews} reviews)</span>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-sm font-medium">Size</h3>
          <button className="text-sm text-muted underline hover:text-foreground transition-colors">Size Guide</button>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`py-3 border rounded-md text-sm font-medium transition-all ${
                selectedSize === size 
                  ? 'border-primary bg-primary text-background dark:border-foreground dark:bg-foreground dark:text-background' 
                  : 'border-border hover:border-gray-400 dark:hover:border-gray-600'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <button 
        className="w-full bg-primary text-background dark:bg-foreground dark:text-background py-4 rounded-md font-semibold text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors uppercase tracking-wide mb-8"
        onClick={() => {
          if (!selectedSize && product.sizes[0] !== 'One Size') {
            alert('Please select a size first.');
            return;
          }
          const sizeToAdd = selectedSize || product.sizes[0];
          addToCart(product, sizeToAdd);
          alert(`Added ${product.name} (${sizeToAdd}) to cart!`);
        }}
      >
        Add to Cart
      </button>

      <div className="border-t border-border pt-6">
        <p className="text-sm text-center text-muted">Secure checkout with encryption. Free returns within 30 days.</p>
      </div>
    </div>
  );
}
