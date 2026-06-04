import React from 'react';
import Link from 'next/link';

const Brand = async () => {
    
    const res = await fetch("https://sun-cart-frontend.vercel.app/Brand.json");
    const brands = await res.json();

    
    const displayBrands = brands.slice(0, 4);

    return (
        <div className="w-full">
            <section className='mb-10'>
                <h2 className="text-2xl font-bold text-center text-gray-400 uppercase tracking-[0.3em] mb-10">
                    Top Partners
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
                    {displayBrands.map((brandItem) => (
                        <Link 
                            key={brandItem.id} 
                            href={`/products?brand=${brandItem.brand}`}
                            scroll={false} 
                        >
                            <div className="flex items-center justify-center py-8 border border-gray-800 rounded-xl grayscale hover:grayscale-0 hover:border-[#ff5200] hover:opacity-100 transition-all cursor-pointer group p-6 bg-[#1e293b]/20">
                                <span className="text-xl font-black tracking-tighter text-gray-300 group-hover:text-white">
                                    {brandItem.brand}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Brand;