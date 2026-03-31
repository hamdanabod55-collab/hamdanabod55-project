import Link from 'next/link';
import { Product } from '@/data/mockData';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col">
      <Link href={`/product/${product.id}`} className="block relative overflow-hidden bg-secondary dark:bg-[#111] rounded-lg mb-4 aspect-[4/5]">
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/90 px-2 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
          {product.category}
        </div>
      </Link>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-lg mb-1">
            <Link href={`/product/${product.id}`} className="hover:underline underline-offset-4">
              {product.name}
            </Link>
          </h3>
          <div className="flex items-center text-sm text-yellow-500 mb-2">
            <span>★</span>
            <span className="ml-1 text-muted text-xs">{product.rating} ({product.reviews})</span>
          </div>
        </div>
        <span className="font-semibold text-lg">${product.price.toFixed(2)}</span>
      </div>
    </div>
  );
}
