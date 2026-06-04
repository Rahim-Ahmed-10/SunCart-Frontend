import React from 'react';
import { IoFilterOutline } from "react-icons/io5";

const FilterButtons = () => {
    // আপনার প্রোডাক্ট অনুযায়ী ফিল্টার অপশনগুলোর নাম (Category, Brand, Price, Rating, Stock)
    const filters = ["Category", "Brand", "Price", "Rating", "Stock"];

    return (
        <div className="flex flex-wrap items-center gap-4 py-6 px-4 bg-[#1e293b]/20 rounded-2xl border border-gray-800 backdrop-blur-sm">
            
            {/* ডাইনামিক ফিল্টার বাতনসমূহ */}
            {filters.map((filter, index) => (
                <div key={index} className="relative group">
                    <select className="appearance-none bg-[#1e293b] text-gray-300 hover:text-white px-4 py-2 pr-8 rounded-full text-sm font-medium border border-gray-700 hover:border-[#ff5200] cursor-pointer outline-none transition-all">
                        <option className="bg-[#0f172a]">{filter}</option>
                        
                        {/* আপনার প্রোডাক্টের ডাটা অনুযায়ী স্যাম্পল অপশন (লজিক অ্যাড করার জন্য) */}
                        {filter === "Category" && <option className="bg-[#0f172a]">Outdoor</option>}
                        {filter === "Brand" && <option className="bg-[#0f172a]">ShadePro</option>}
                        {filter === "Price" && <option className="bg-[#0f172a]">Under $50</option>}
                        {filter === "Rating" && <option className="bg-[#0f172a]">4.0+ Stars</option>}
                        {filter === "Stock" && <option className="bg-[#0f172a]">In Stock</option>}
                    </select>
                    
                    {/* কাস্টম অ্যারো আইকন */}
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            ))}

            {/* All Filters বাটন */}
            <button className="flex items-center gap-2 bg-[#1e293b] text-gray-300 hover:text-white px-5 py-2 rounded-full text-sm font-medium border border-gray-700 hover:border-[#ff5200] transition-all">
                All Filters <IoFilterOutline className="text-gray-400 group-hover:text-white" />
            </button>

            {/* Sort By (একদম ডান পাশে নেওয়ার জন্য ml-auto) */}
            <div className="ml-auto relative">
                <select className="appearance-none bg-transparent border border-gray-700 text-gray-300 px-6 py-2 pr-10 rounded-full text-sm font-semibold outline-none focus:border-[#ff5200] cursor-pointer hover:border-[#ff5200] transition-all">
                    <option className="bg-[#0f172a]">Sort by</option>
                    <option className="bg-[#0f172a]">Price: Low to High</option>
                    <option className="bg-[#0f172a]">Price: High to Low</option>
                    <option className="bg-[#0f172a]">Rating: High to Low</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default FilterButtons;