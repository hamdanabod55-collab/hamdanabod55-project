export default function SalesBanner() {
  return (
    <div className="bg-black text-white dark:bg-[#1a1a1a] py-3 px-4 text-center">
      <p className="text-sm md:text-base font-medium tracking-wide">
        SPRING COLLECTION 30% OFF <span className="mx-2 text-gray-400">|</span> <a href="/sale" className="underline hover:text-gray-300 transition-colors">Shop Now</a>
      </p>
    </div>
  );
}
