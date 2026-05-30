import React from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPaperPlane 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
              Sun<span className="text-orange-500">Cart</span>
            </h2>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              Your ultimate destination for summer essentials. We bring you the finest collection of sunglasses, beachwear, and skincare products.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-lg"><FaFacebookF size={16} /></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-lg"><FaTwitter size={16} /></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-lg"><FaInstagram size={16} /></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-lg"><FaYoutube size={16} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 border-b border-orange-500/20 pb-2 w-fit">Explore</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Summer Sale</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 border-b border-orange-500/20 pb-2 w-fit">Get In Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-orange-500 mt-1" />
                <span className="text-gray-400">Kishoreganj, Dhaka Division,<br /> Bangladesh</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaPhoneAlt className="text-orange-500" />
                <span>+880 1690-123104</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaEnvelope className="text-orange-500" />
                <span>support@suncart.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 border-b border-orange-500/20 pb-2 w-fit">Newsletter</h3>
            <p className="text-sm mb-4 text-gray-400">Subscribe for exclusive summer deals!</p>
            <div className="flex items-center overflow-hidden rounded-lg bg-white/5 p-1 border border-white/10">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-transparent border-none px-3 py-2 w-full focus:outline-none text-white text-sm"
              />
              <button className="bg-orange-600 hover:bg-orange-500 p-2.5 rounded-md transition-all">
                <FaPaperPlane className="text-white" size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-gray-500">
          <p>© 2026 SunCart Store. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;