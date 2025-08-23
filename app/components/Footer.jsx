// components/Footer.jsx
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
        {/* Footer Title */}
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-center">QuickCart</h2>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 mb-4">
          <Link href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:text-blue-500 transition-colors duration-300" />
          </Link>
          <Link href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-400 transition-colors duration-300" />
          </Link>
          <Link href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-500 transition-colors duration-300" />
          </Link>
          <Link href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-600 transition-colors duration-300" />
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} QuickCart. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;