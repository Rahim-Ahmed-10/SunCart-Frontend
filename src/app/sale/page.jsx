import ProductsCard from '@/components/ProductsCard';
import React from 'react';

const SalePage = async () => {

    const res = await fetch("https://sun-cart-frontend.vercel.app/data.json");
    const allProducts = await res.json();

  
    const saleProducts = allProducts.filter(product => product.price < 25);

    return (
        <div className="bg-[#0f172a] text-white min-h-screen">
            <div className="max-w-7xl mx-auto px-6 py-16">
                
                {/* Sale Header */}
                <section className="mb-16 text-center">
                    <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4 animate-pulse">
                        LIMITED TIME OFFER
                    </div>
                    <h2 className="text-5xl font-extrabold italic tracking-tighter mb-4">
                        FLASH <span className="text-[#ff5200]">SALE</span>
                    </h2>
                    <p className="text-gray-400 max-w-lg mx-auto">
                        সুপার ডিসকাউন্টে আপনার প্রিয় প্রোডাক্টগুলো লুফে নিন। স্টক শেষ হওয়ার আগেই অর্ডার করুন!
                    </p>
                    <div className="h-1 w-24 bg-[#ff5200] mx-auto mt-6"></div>
                </section>

                {/* Sale Products Grid */}
                {saleProducts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
                        {saleProducts.map((product) => (
                            <div key={product.id} className="relative group">
                                {/* Sale Badge */}
                                <div className="absolute top-4 left-4 z-10 bg-[#ff5200] text-white text-xs font-bold px-3 py-1 rounded-md shadow-lg">
                                    SAVE BIG
                                </div>
                                <ProductsCard product={product} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 border border-dashed border-gray-700 rounded-2xl">
                        <p className="text-gray-500 text-xl italic">
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SalePage;