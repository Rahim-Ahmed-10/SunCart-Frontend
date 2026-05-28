import React from 'react';
import { FaStar } from 'react-icons/fa';

const TopPopular =async () => {

    const res= await fetch("https://sun-cart-frontend.vercel.app/data.json");
    const products=await res.json();
    
    const topProducts= products.slice(0, 3);
    console.log(topProducts)
    return (
        <div className="bg-[#0f172a] text-white min-h-screen">
            <div className="max-w-7xl mx-auto px-6 py-16">
                
                {/* Popular Products Section */}
                <section className="mb-24">
                    <div className="flex flex-col items-center mb-12">
                        <h2 className="text-4xl font-bold italic tracking-wider">
                            POPULAR <span className="text-[#ff5200]">PRODUCTS</span>
                        </h2>
                        <div className="h-1 w-20 bg-[#ff5200] mt-2"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
                        {topProducts.map((product) => (
                            <div key={product.id} className="bg-[#1e293b] rounded-2xl overflow-hidden border border-gray-700 hover:border-[#ff5200] transition-all duration-300 group">
                                <div className="relative h-64 overflow-hidden">
                                    <img 
                                        src={product.image} 
                                        alt={product.name} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4 bg-[#ff5200] text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                                        <FaStar className='text-orange-300' />{product.rating}
                                    </div>
                                </div>
                                
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">{product.name}</h3>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                                    
                                    <div className="flex justify-between items-center mt-6">
                                        <span className="text-2xl font-black text-[#ff5200]">${product.price}</span>
                                        <button className="bg-[#ff5200] hover:bg-[#e64a00] text-white font-bold py-2 px-6 rounded-lg transition-colors uppercase text-sm">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Summer Care Tips Section */}
                <section className="mb-24 bg-gradient-to-r from-[#1e293b] to-[#0f172a] p-10 rounded-3xl border-l-8 border-[#ff5200]">
                    <h2 className="text-3xl font-black mb-8 italic uppercase">Summer Care <span className="text-[#ff5200]">Tips</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex gap-4">
                            <div className="text-[#ff5200] text-3xl font-bold">01</div>
                            <div>
                                <h4 className="text-xl font-bold mb-2 text-orange-400">Deep Hydration</h4>
                                <p className="text-gray-300 leading-relaxed">তীব্র গরমে ত্বক সতেজ রাখতে দিনে অন্তত ৩-৪ লিটার পানি পান করুন এবং হাইড্রেটিং লোশন ব্যবহার করুন।</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-[#ff5200] text-3xl font-bold">02</div>
                            <div>
                                <h4 className="text-xl font-bold mb-2 text-orange-400">Sun Protection</h4>
                                <p className="text-gray-300 leading-relaxed">বাইরে বের হওয়ার ২০ মিনিট আগে আমাদের চর্মরোগ বিশেষজ্ঞ দ্বারা পরীক্ষিত সানস্ক্রিন ব্যবহার করুন।</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default TopPopular;