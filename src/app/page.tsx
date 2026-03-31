import Hero from '@/components/home/Hero';
import SalesBanner from '@/components/home/SalesBanner';
import CategoryGrid from '@/components/home/CategoryGrid';
import ProductCard from '@/components/shared/ProductCard';
import { MOCK_PRODUCTS } from '@/data/mockData';

export default function Home() {
  const featuredProducts = MOCK_PRODUCTS.slice(4, 8);

  return (
    <div className="w-full">
      <SalesBanner />
      <Hero />
      <CategoryGrid />
      
      <section className="py-20 bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">New Arrivals</h2>
            <p className="text-muted">The latest additions to our collection.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
