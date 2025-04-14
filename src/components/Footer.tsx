
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="text-orange-500" />
              <span className="text-xl font-bold text-white">Aahar</span>
            </div>
            <p className="mb-4">
              Connecting those with excess food to those who need it most. Together, we can reduce waste and end hunger.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
              <Link to="/share" className="hover:text-orange-400 transition-colors">Share Food</Link>
              <Link to="/find" className="hover:text-orange-400 transition-colors">Find Food</Link>
              <Link to="/about" className="hover:text-orange-400 transition-colors">About Us</Link>
              <Link to="/contact" className="hover:text-orange-400 transition-colors">Contact</Link>
            </nav>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-orange-500" />
                <span>info@aahar.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-orange-500" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Aahar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
