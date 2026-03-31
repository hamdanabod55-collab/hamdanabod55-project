import { notFound } from 'next/navigation';
import { MOCK_PRODUCTS } from '@/data/mockData';
import ImageGallery from '@/components/product/ImageGallery';
import ProductInfo from '@/components/product/ProductInfo';
import Accordion from '@/components/product/Accordion';
import ProductCard from '@/components/shared/ProductCard';

export default async function ProductPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const product = MOCK_PRODUCTS.find(p => p.id === id);
  
  if (!product) {
    notFound();
  }

  // Get related products (mock logic: same category or just next 4 products)
  const relatedProducts = MOCK_PRODUCTS
    .filter(p => p.id !== id && p.category === product.category)
    .slice(0, 4);

  if (relatedProducts.length < 4) {
    const others = MOCK_PRODUCTS.filter(p => p.id !== id && !relatedProducts.includes(p));
    relatedProducts.push(...others.slice(0, 4 - relatedProducts.length));
  }

  return (
    <div className="w-full pb-20 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-sm text-muted mb-8">
          <a href="/" className="hover:text-foreground transition-colors">Home</a>
          <span className="mx-2">/</span>
          <a href={`/category/${product.category.toLowerCase()}`} className="hover:text-foreground transition-colors">{product.category}</a>
          <span className="mx-2">/</span>
          <span className="text-foreground font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-20">
          <ImageGallery mainImage={product.image} title={product.name} />
          
          <div>
            <ProductInfo product={product} />
            
            <div className="mt-8">
              <Accordion 
                title="Description" 
                content={product.description} 
                defaultOpen={true} 
              />
              <Accordion 
                title="Shipping & Returns" 
                content={product.shippingInfo} 
              />
              <Accordion 
                title="Details & Care" 
                content="Machine wash cold with like colors.\nTumble dry low.\nDo not bleach.\nIron on low heat if needed." 
              />
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-16 mb-20">
          <h2 className="text-2xl font-bold mb-8">Customer Reviews</h2>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3 text-center md:text-left">
              <div className="text-5xl font-bold mb-2">{product.rating}</div>
              <div className="flex justify-center md:justify-start text-yellow-500 mb-2">
                <span>★★★★☆</span>
              </div>
              <p className="text-muted">Based on {product.reviews} reviews</p>
            </div>
            <div className="md:w-2/3 space-y-6">
              {['Excellent quality!', 'Fits perfectly and feels premium.', 'Great purchase, highly recommend.'].map((review, idx) => (
                <div key={idx} className="border-b border-border pb-6 last:border-0 last:pb-0">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-sm">Reviewer {idx + 1}</span>
                    <span className="text-muted text-sm text-yellow-500">★★★★★</span>
                  </div>
                  <p className="text-muted">{review}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-16">
          <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
