import { notFound } from 'next/navigation';
import { CATEGORIES, MOCK_PRODUCTS } from '@/data/mockData';
import ProductCard from '@/components/shared/ProductCard';

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  
  const validCategories = CATEGORIES.map(c => c.title.toLowerCase());
  
  if (!validCategories.includes(slug)) {
    notFound();
  }

  const products = MOCK_PRODUCTS.filter(p => p.category.toLowerCase() === slug);
  const categoryTitle = CATEGORIES.find(c => c.title.toLowerCase() === slug)?.title;

  return (
    <div className="w-full pb-20 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-sm text-muted mb-8">
          <a href="/" className="hover:text-foreground transition-colors">Home</a>
          <span className="mx-2">/</span>
          <span className="text-foreground font-medium">{categoryTitle}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 shrink-0">
            <div className="sticky top-24">
              <h2 className="font-bold text-lg mb-6 tracking-tight uppercase">Filters</h2>
              
              <div className="mb-6 border-b border-border pb-6">
                <h3 className="font-medium mb-3">Sort By</h3>
                <select className="w-full bg-transparent border border-border p-2 rounded-md focus:border-foreground outline-none transition-colors">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest Arrivals</option>
                </select>
              </div>

              <div className="mb-6 border-b border-border pb-6">
                <h3 className="font-medium mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                    <button key={size} className="w-10 h-10 border border-border rounded-md text-sm hover:border-foreground transition-colors">
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="flex items-center space-x-2">
                  <input type="number" placeholder="Min" className="w-full border border-border p-2 rounded-md text-sm bg-transparent focus:border-foreground outline-none transition-colors" />
                  <span>-</span>
                  <input type="number" placeholder="Max" className="w-full border border-border p-2 rounded-md text-sm bg-transparent focus:border-foreground outline-none transition-colors" />
                </div>
              </div>
              
              <button className="w-full bg-foreground text-background py-3 rounded-md font-medium hover:opacity-90 transition-opacity">
                Apply Filters
              </button>
            </div>
          </aside>

          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{categoryTitle}</h1>
            <p className="text-muted mb-8">{products.length} Products</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
              {products.length === 0 && (
                <div className="col-span-full text-center py-20 text-muted border border-dashed border-border rounded-lg">
                  No products found in this category.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
