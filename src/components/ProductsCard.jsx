import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const ProductsCard = ({product}) => {
    return (
        <div className="bg-[#1e293b] rounded-2xl overflow-hidden border border-gray-700 hover:border-[#ff5200] transition-all duration-300 group">
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
                                        <Link href={`products/${product.id}`}>
                                        <button className="bg-[#ff5200] hover:bg-[#e64a00] text-white font-bold py-2 px-6 rounded-lg transition-colors uppercase text-sm">
                                            View Details
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
    );
};

export default ProductsCard;