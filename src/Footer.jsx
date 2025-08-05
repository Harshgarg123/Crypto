import React from "react";
import {
  ShieldCheck,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0b0b0c] text-gray-400">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
        
        
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-tr from-purple-500 to-indigo-500 p-3 rounded-full">
              <ShieldCheck className="text-white w-6 h-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-white tracking-tight">
              NΞON CRYPTΞ
            </h2>
          </div>
          <p className="text-sm mb-2">Let’s connect 🔗</p>
          <ul className="text-sm space-y-1">
            <li>📞 +91 45454345458</li>
            <li>📩 NΞONCRYPTΞ@gmail.com</li>
            <li>📍 711 Nulla St, Mankato, MS 96522</li>
          </ul>
        </div>

        
        {[
          {
            title: "Products",
            links: [
              "Spot",
              "Perpetuals",
              "Staking",
              "NFT Launchpad",
              "Crypto Wallet"
            ]
          },
          {
            title: "Services",
            links: [
              "Buy Crypto",
              "Live Markets",
              "Portfolio Tracker",
              "Referral Program",
              "Crypto Academy"
            ]
          },
          {
            title: "Support",
            links: [
              "Help Center",
              "Security FAQs",
              "User Feedback",
              "API Docs",
              "Trading Rules"
            ]
          },
          {
            title: "Company",
            links: [
              "About Us",
              "Our Mission",
              "Careers",
              "Blog",
              "Contact"
            ]
          }
        ].map((section, index) => (
          <div key={index}>
            <h4 className="text-white font-semibold mb-4 text-lg">
              {section.title}
            </h4>
            <ul className="space-y-2 text-sm">
              {section.links.map((link, i) => (
                <li
                  key={i}
                  className="hover:text-white transition duration-200 cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      
      <div className="border-t border-gray-800 mt-10 pt-6">
        <div className="flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto px-6 text-sm text-gray-500">
          <p className="mb-4 sm:mb-0">
            © {new Date().getFullYear()} NΞON CRYPTΞ. All Rights Reserved by{" "}
            <a
              href="https://github.com/Harshgarg123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-white transition"
            >
              Harsh
            </a>
          </p>

         
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Twitter size={18} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Instagram size={18} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
