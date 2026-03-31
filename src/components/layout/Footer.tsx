import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white dark:bg-[#0a0a0a] border-t border-white/10 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold tracking-tighter mb-4">LUMIÈRE</h2>
            <p className="text-gray-400 max-w-sm mb-6">
              Elevating everyday essentials with premium materials and minimalist design. Discover your style today.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
                In
              </div>
              <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
                Tw
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-lg">Shop</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/category/menswear" className="hover:text-white transition-colors">Menswear</Link></li>
              <li><Link href="/category/womenswear" className="hover:text-white transition-colors">Womenswear</Link></li>
              <li><Link href="/category/accessories" className="hover:text-white transition-colors">Accessories</Link></li>
              <li><Link href="/sale" className="hover:text-white transition-colors">Sale</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-lg">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border border-gray-700 px-4 py-2 w-full focus:outline-none focus:border-white transition-colors"
                title="Email Address"
              />
              <button 
                type="button" 
                className="bg-white text-black px-4 py-2 font-medium hover:bg-gray-200 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Lumière. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
