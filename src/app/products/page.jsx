import Brand from '@/components/Brand';
import ProductsCard from '@/components/ProductsCard';
import React from 'react';
import Link from 'next/link'; 

const AllProductsPage = async ({ searchParams }) => {
    
    const { brand } = await searchParams;

    
    const res = await fetch("https://sun-cart-frontend.vercel.app/data.json");
    const allProducts = await res.json();

  
    const filteredProducts = brand 
        ? allProducts.filter(p => p.brand.toLowerCase() === brand.toLowerCase())
        : allProducts;

    return (
        <div className="bg-[#0f172a] text-white min-h-screen">
            <div className="max-w-7xl mx-auto px-6 py-16">
                
                {/* Header Section */}
                <section className="mb-24">
                    <div className="flex flex-col items-center mb-12">
                        <h2 className="text-4xl font-bold italic tracking-wider">
                            {brand ? brand.toUpperCase() : "ALL"}{" "}
                            <span className="text-[#ff5200]">PRODUCTS</span>
                        </h2>
                        
                        
                        <div className='mt-10 w-full'>
                            <Brand />
                        </div>

                        <div className="h-1 w-20 bg-[#ff5200] mt-8"></div>
                    </div>

                   
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <ProductsCard key={product.id} product={product} />
                            ))
                        ) : (
                            <div className="col-span-full text-center py-20">
                                <p className="text-gray-500 text-xl">No products found for "{brand}"</p>
                                <Link href="/products" className="text-[#ff5200] underline mt-4 inline-block">
                                    View All Products
                                </Link>
                            </div>
                        )}
                    </div>
                </section>
                
            </div>
        </div>
    );
};

export default AllProductsPage;