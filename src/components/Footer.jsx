
import { Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => (
  <footer className="bg-black text-white px-4 py-12">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
      {/* Exclusive Section */}
      <div>
        <h3 className="text-lg font-bold mb-4">Exclusive</h3>
        <h4 className="mb-2">Subscribe</h4>
        <p className="text-sm mb-4">Get 10% off your first order</p>
        <div className="flex border border-white rounded">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent p-2 -inset-3 flex-grow text-sm focus:outline-none"
          />
          <button className="p-2 -ml-2">
            <Send size={20} />
          </button>
        </div>
      </div>

      {/* Support Section */}
      <div>
        <h3 className="text-lg font-bold mb-4">Support</h3>
        <address className="not-italic text-sm">
          Karachi,<br />
          Pakistan.<br /><br />
          example@gmail.com<br />
          +923300000000
        </address>
      </div>

      {/* Account Section */}
      <div>
        <h3 className="text-lg font-bold mb-4">Account</h3>
        <nav className="flex flex-col gap-2 text-sm">
          <a href="#" className="hover:underline">My Account</a>
          <a href="#" className="hover:underline">Login / Register</a>
          <a href="#" className="hover:underline">Cart</a>
          <a href="#" className="hover:underline">Wishlist</a>
          <a href="#" className="hover:underline">Shop</a>
        </nav>
      </div>

      {/* Quick Link Section */}
      <div>
        <h3 className="text-lg font-bold mb-4">Quick Link</h3>
        <nav className="flex flex-col gap-2 text-sm">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms Of Use</a>
          <a href="#" className="hover:underline">FAQ</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">Download App</h3>
        <p className="text-sm mb-4">Save $3 with App New User Only</p>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <img
            src="/qrcode.png"
            alt="QR Code"
            className="w-15 h-15"
          />
          <div className="flex flex-col gap-4">
            <img
              src="/googleplay.png"
              alt="Google Play"
              className="w-10 h-10"
            />
            <img
              src="/appstore.png"
              alt="App Store"
              className="w-10 h-10"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <Facebook size={24} />
          <Twitter size={24} />
          <Instagram size={24} />
          <Linkedin size={24} />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;