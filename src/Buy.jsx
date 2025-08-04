import React from "react";
import { ShoppingCart, CheckCircle2, CreditCard } from "lucide-react";

const premiumFeatures = [
  {
    id: 1,
    name: "Starter Plan",
    price: "$29/mo",
    features: ["Real-time Prices", "Basic Portfolio", "Support"],
    gradient: "from-blue-500 to-purple-600",
  },
  {
    id: 2,
    name: "Pro Trader",
    price: "$69/mo",
    features: ["Advanced Analytics", "Unlimited Portfolio", "Premium News"],
    gradient: "from-green-500 to-blue-600",
  },
  {
    id: 3,
    name: "Elite Access",
    price: "$149/mo",
    features: ["AI Trading Bots", "1-on-1 Consult", "Early NFT Drops"],
    gradient: "from-yellow-400 to-red-500",
  },
];

const BuyCrypto = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-[#0c0c1d] via-[#1a1a2e] to-[#0f172a] text-white py-20 px-4 md:px-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-700 blur-[120px] opacity-20 rounded-full animate-pulse -z-10" />
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Premium Crypto Access
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
          Unlock next-gen features with one of our flexible premium plans designed for every crypto enthusiast.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {premiumFeatures.map((plan) => (
          <div
            key={plan.id}
            className={`bg-gradient-to-tr ${plan.gradient} p-8 rounded-xl shadow-xl transform hover:scale-105 transition duration-300`}
          >
            <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
            <p className="text-3xl font-semibold mb-4">{plan.price}</p>
            <ul className="mb-6 space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2 text-white">
                  <CheckCircle2 className="text-white w-5 h-5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full flex items-center justify-center gap-2 bg-black/20 border border-white text-white py-2 px-4 rounded-lg hover:bg-black/30 transition duration-300">
              <ShoppingCart className="w-5 h-5" />
              Buy Now
            </button>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <h3 className="text-3xl font-bold mb-6 text-white">Choose Payment Method</h3>
        <div className="flex justify-center gap-6 flex-wrap">
          <div className="bg-white/10 p-5 rounded-lg hover:scale-105 transition backdrop-blur-md shadow-md w-56">
            <CreditCard className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h4 className="text-white font-semibold">Credit / Debit Card</h4>
            <p className="text-sm text-gray-300 mt-1">Visa, MasterCard, AMEX</p>
          </div>
          <div className="bg-white/10 p-5 rounded-lg hover:scale-105 transition backdrop-blur-md shadow-md w-56">
            <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" alt="Bitcoin" className="w-8 h-8 mx-auto mb-3" />
            <h4 className="text-white font-semibold">Pay with Bitcoin</h4>
            <p className="text-sm text-gray-300 mt-1">Fast, secure, and global</p>
          </div>
          <div className="bg-white/10 p-5 rounded-lg hover:scale-105 transition backdrop-blur-md shadow-md w-56">
            <img src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="Ethereum" className="w-8 h-8 mx-auto mb-3" />
            <h4 className="text-white font-semibold">Pay with Ethereum</h4>
            <p className="text-sm text-gray-300 mt-1">Smart and decentralized</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyCrypto;
