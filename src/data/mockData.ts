export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Menswear' | 'Womenswear' | 'Accessories';
  image: string;
  rating: number;
  reviews: number;
  sizes: string[];
  description: string;
  shippingInfo: string;
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Classic Linen Blend Shirt',
    price: 89.99,
    category: 'Menswear',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e32f85e10?w=800&q=80',
    rating: 4.8,
    reviews: 124,
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A breathable linen blend tailored for a relaxed yet refined fit. Perfect for spring and summer transitions.',
    shippingInfo: 'Free shipping on orders over $100. Standard delivery: 3-5 business days.'
  },
  {
    id: '2',
    name: 'Minimalist Silk Midi Dress',
    price: 145.00,
    category: 'Womenswear',
    image: 'https://images.unsplash.com/photo-1572804013309-82a89b43af28?w=800&q=80',
    rating: 4.9,
    reviews: 89,
    sizes: ['S', 'M', 'L'],
    description: 'Crafted from 100% premium silk, this midi dress drapes elegantly, featuring a subtle side slit and adjustable straps.',
    shippingInfo: 'Free shipping on orders over $100. Standard delivery: 3-5 business days.'
  },
  {
    id: '3',
    name: 'Structured Wool Overcoat',
    price: 295.00,
    category: 'Menswear',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
    rating: 4.7,
    reviews: 215,
    sizes: ['M', 'L', 'XL', 'XXL'],
    description: 'A timeless silhouette constructed with heavy-weight wool blends to keep you warm without sacrificing style.',
    shippingInfo: 'Free expedited shipping on this item. Delivery: 1-3 business days.'
  },
  {
    id: '4',
    name: 'Sleek Leather Crossbody',
    price: 120.00,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
    rating: 4.6,
    reviews: 56,
    sizes: ['One Size'],
    description: 'Genuine leather handbag featuring minimalist gold-tone hardware and an adjustable strap.',
    shippingInfo: 'Free shipping on orders over $100. Standard delivery: 3-5 business days.'
  },
  {
    id: '5',
    name: 'Ribbed Knit Sweater',
    price: 75.00,
    category: 'Womenswear',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80',
    rating: 4.5,
    reviews: 312,
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Chunky, ultra-soft ribbed knit sweater tailored for a cozy and oversized fit.',
    shippingInfo: 'Free shipping on orders over $100. Standard delivery: 3-5 business days.'
  },
  {
    id: '6',
    name: 'Essential Cotton V-Neck',
    price: 35.00,
    category: 'Menswear',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
    rating: 4.4,
    reviews: 420,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Everyday staple made from 100% organic cotton. Features a tailored fit that retains its shape wash after wash.',
    shippingInfo: 'Standard shipping $5. Delivery: 3-5 business days.'
  },
  {
    id: '7',
    name: 'Geometric Statement Earrings',
    price: 45.00,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    rating: 4.8,
    reviews: 94,
    sizes: ['One Size'],
    description: 'Lightweight gold-dipped geometric earrings that add a modern touch to any outfit.',
    shippingInfo: 'Standard shipping $5. Delivery: 3-5 business days.'
  },
  {
    id: '8',
    name: 'High-Waisted Tailored Trousers',
    price: 110.00,
    category: 'Womenswear',
    image: 'https://images.unsplash.com/photo-1594610427303-356a6ec155bb?w=800&q=80',
    rating: 4.7,
    reviews: 167,
    sizes: ['S', 'M', 'L'],
    description: 'Wide-leg tailored pants offering a flattering high waist and fluid drape for seamless day-to-night styling.',
    shippingInfo: 'Free shipping on orders over $100. Standard delivery: 3-5 business days.'
  }
];

export const CATEGORIES = [
  {
    title: 'Menswear',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80',
    link: '/category/menswear'
  },
  {
    title: 'Womenswear',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
    link: '/category/womenswear'
  },
  {
    title: 'Accessories',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    link: '/category/accessories'
  }
];
