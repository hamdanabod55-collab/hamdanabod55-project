import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&q=80)' }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up">
          Discover Your Style Today
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
          Explore our newest arrivals featuring timeless silhouettes and uncompromising quality for the modern wardrobe.
        </p>
        <Link 
          href="/shop" 
          className="inline-block bg-white text-black px-8 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-gray-200 transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
