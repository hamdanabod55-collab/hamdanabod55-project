import Link from 'next/link';
import { CATEGORIES } from '@/data/mockData';

export default function CategoryGrid() {
  return (
    <section className="py-20 bg-secondary dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Shop by Category</h2>
          <p className="text-muted">Curated essentials for every occasion</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CATEGORIES.map((category) => (
            <div key={category.title} className="group relative h-[500px] overflow-hidden rounded-lg">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${category.image})` }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-4">{category.title}</h3>
                <div>
                  <Link 
                    href={category.link}
                    className="inline-block bg-white text-black px-6 py-3 text-sm font-medium hover:bg-gray-100 transition-colors"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
