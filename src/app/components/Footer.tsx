import Link from 'next/link';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <img
                src="/assets/logofooter.png" // Change this to the path of your logo file
                alt="HooBank Logo"
                className="w-10 h-10 mr-2" // Adjust the size as needed
              />
              <span className="text-2xl font-bold text-white">HooBank</span>
            </Link>
            <p className="text-sm">A new way to make payments easy, reliable and secure.</p>
          </div>

          {/* Useful Links */}
          <div className="col-span-1">
            <h3 className="text-white font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {['Content', 'How it Works', 'Create', 'Explore', 'Terms & Services'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-teal-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div className="col-span-1">
            <h3 className="text-white font-bold mb-4">Community</h3>
            <ul className="space-y-2">
              {['Help Center', 'Partners', 'Suggestions', 'Blog', 'Newsletters'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-teal-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partner */}
          <div className="col-span-1">
            <h3 className="text-white font-bold mb-4">Partner</h3>
            <ul className="space-y-2">
              {['Our Partner', 'Become a Partner'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-teal-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright and social icons */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">2022 HooBank. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-teal-400 transition-colors">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="hover:text-teal-400 transition-colors">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-teal-400 transition-colors">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:text-teal-400 transition-colors">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
