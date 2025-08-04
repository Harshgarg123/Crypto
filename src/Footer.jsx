import React from "react";
import {
  
  ShieldCheck,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0c0c0d] text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
       
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-tr from-purple-500 to-indigo-500 p-2 rounded-full">
              <ShieldCheck className="text-white w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight"> NΞON CRYPTΞ</h2>
          </div>
          <p className="text-sm text-gray-400 mb-2">Let’s connect 🔗</p>
          <p className="text-sm text-gray-300 mb-1">📞 +91 45454345458</p>
          <p className="text-sm text-gray-300 mb-1">📩  NΞON CRYPTΞ@gmail.com</p>
          <p className="text-sm text-gray-300">
            📍 711-2880 Nulla St. Mankato, MS 96522
          </p>
        </div>

       
        <div>
          <h4 className="text-white font-semibold mb-4">Products</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white transition">Spot</li>
            <li className="hover:text-white transition">Perpetuals</li>
            <li className="hover:text-white transition">Staking</li>
            <li className="hover:text-white transition">NFT Launchpad</li>
            <li className="hover:text-white transition">Crypto Wallet</li>
          </ul>
        </div>

       
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white transition">Buy Crypto</li>
            <li className="hover:text-white transition">Live Markets</li>
            <li className="hover:text-white transition">Portfolio Tracker</li>
            <li className="hover:text-white transition">Referral Program</li>
            <li className="hover:text-white transition">Crypto Academy</li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white transition">Help Center</li>
            <li className="hover:text-white transition">Security FAQs</li>
            <li className="hover:text-white transition">User Feedback</li>
            <li className="hover:text-white transition">API Docs</li>
            <li className="hover:text-white transition">Trading Rules</li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white transition">About Us</li>
            <li className="hover:text-white transition">Our Mission</li>
            <li className="hover:text-white transition">Careers</li>
            <li className="hover:text-white transition">Blog</li>
            <li className="hover:text-white transition">Contact</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} CryptoX. All Rights Reserved by{" "}
          <a
            href="https://github.com/Harshgarg123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-white transition"
          >
            Harsh
          </a>
        </p>

        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-blue-500 transition">
            <Facebook size={18} />
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <Twitter size={18} />
          </a>
          <a href="#" className="hover:text-pink-500 transition">
            <Instagram size={18} />
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
