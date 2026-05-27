"use client";
import { useState } from "react";
import Link from "next/link";
// ফুটারের সাথে মিল রেখে React Icons ব্যবহার করা হয়েছে
import { FaBars, FaTimes } from "react-icons/fa"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // ফুটারের ব্যাকগ্রাউন্ড #0f172a এর সাথে মিল রাখা হয়েছে
    <div className="bg-[#0f172a] border-b border-white/5 text-gray-300 sticky top-0 z-[100] shadow-xl">
      <nav className="flex justify-between items-center py-4 max-w-7xl mx-auto px-6 w-full relative">
        
        {/* Logo - SunCart Style */}
        <Link href="/" className="flex gap-2 items-center group">
          <h3 className="font-black text-2xl tracking-tighter text-white transition-all">
            Sun<span className="text-orange-500 group-hover:text-orange-400">Cart</span>
          </h3>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-[13px] font-semibold uppercase tracking-wider">
          <li>
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-orange-500 transition-colors">Products</Link>
          </li>
          <li>
            <Link href="/sale" className="text-orange-500 hover:text-orange-400 transition-colors flex items-center gap-1">
              Summer Sale <span className="text-[10px] bg-red-600 text-white px-1 rounded animate-pulse">HOT</span>
            </Link>
          </li>
          <li>
            <Link href="/profile" className="hover:text-orange-500 transition-colors">Profile</Link>
          </li>
        </ul>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex gap-6 items-center text-[13px] font-bold uppercase tracking-widest">
          <Link href="/signup" className="hover:text-white transition-colors">SignUp</Link>
          <Link 
            href="/signin" 
            className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-2.5 rounded-full shadow-lg shadow-orange-900/20 transition-all duration-300"
          >
            SignIn
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 text-white outline-none hover:text-orange-500 transition-colors"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-[#0f172a] border-b border-white/10 shadow-2xl z-50 md:hidden animate-in fade-in slide-in-from-top-2">
            <ul className="flex flex-col p-6 gap-5 text-sm font-semibold uppercase tracking-widest">
              <li><Link href="/" onClick={() => setIsOpen(false)} className="hover:text-orange-500 block">Home</Link></li>
              <li><Link href="/products" onClick={() => setIsOpen(false)} className="hover:text-orange-500 block">Products</Link></li>
              <li><Link href="/sale" onClick={() => setIsOpen(false)} className="text-orange-500 block">Summer Sale 🔥</Link></li>
              <li><Link href="/profile" onClick={() => setIsOpen(false)} className="hover:text-orange-500 block">Profile</Link></li>
              <hr className="border-white/5" />
              <li className="flex flex-col gap-4 pt-2">
                <Link href="/signup" onClick={() => setIsOpen(false)} className="text-center py-2">SignUp</Link>
                <Link 
                  href="/signin" 
                  onClick={() => setIsOpen(false)}
                  className="block bg-orange-600 text-white text-center py-3 rounded-lg font-bold"
                >
                  SignIn
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;