import React from 'react';
import { Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => (
  <footer className="bg-black text-white">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-10">
        {/* Exclusive Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Exclusive</h3>
          <h4 className="font-medium">Subscribe</h4>
          <p className="text-sm text-gray-300">Get 10% off your first order</p>
          <div className="flex border border-gray-700 rounded-lg overflow-hidden hover:border-gray-500 transition-colors">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-4 py-2 flex-grow text-sm focus:outline-none"
            />
            <button className="px-4 hover:bg-gray-800 transition-colors">
              <Send size={20} />
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Support</h3>
          <address className="not-italic text-sm text-gray-300 space-y-2">
            <p>Karachi,</p>
            <p>Pakistan.</p>
            <p>example@gmail.com</p>
            <p>+923300000000</p>
          </address>
        </div>

        {/* Account Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Account</h3>
          <nav className="flex flex-col gap-2 text-sm text-gray-300">
            {['My Account', 'Login / Register', 'Cart', 'Wishlist', 'Shop'].map(item => (
              <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
            ))}
          </nav>
        </div>

        {/* Quick Link Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Quick Link</h3>
          <nav className="flex flex-col gap-2 text-sm text-gray-300">
            {['Privacy Policy', 'Terms Of Use', 'FAQ', 'Contact'].map(item => (
              <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
            ))}
          </nav>
        </div>

        {/* Download App Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Download App</h3>
          <p className="text-sm text-gray-300">Save $3 with App New User Only</p>
          <div className="flex gap-4 mb-6">
            <img src="/qrcode.png" alt="QR Code" className="w-10 h-10 rounded" />
            <img src="/googleplay.png" alt="Google Play" className="w-10 h-10 rounded" />
            <img src="/appstore.png" alt="App Store" className="w-10 h-10 rounded" />
          </div>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Abdul Salam @Ecommerce. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;