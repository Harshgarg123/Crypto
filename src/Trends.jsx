import React, { useState } from "react";
import { Star, LineChart, Flame, TrendingUp } from "lucide-react";

const marketData = {
  Favorites: [
    {
      pair: "BTC/USDT",
      price: "$114.40K",
      change: "+0.49%",
      changeColor: "text-green-400",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
    },
    {
      pair: "ETH/USDT",
      price: "$3.55K",
      change: "+2.05%",
      changeColor: "text-green-400",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
    },
    {
      pair: "XRP/USDT",
      price: "$2.98",
      change: "+3.97%",
      changeColor: "text-green-400",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png"
    },
    {
      pair: "SOL/USDT",
      price: "$92.50",
      change: "+5.50%",
      changeColor: "text-green-400",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png"
    },
    {
      pair: "DOGE/USDT",
      price: "$0.15",
      change: "+8.20%",
      changeColor: "text-green-400",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/74.png"
    },
    {
      pair: "ADA/USDT",
      price: "$1.12",
      change: "-1.10%",
      changeColor: "text-red-400",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png"
    }
  ],
  Spot: [
    {
      pair: "ETH/USDT",
      price: "$3.55K",
      change: "+2.05%",
      changeColor: "text-green-400",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
    },
    {
      pair: "XRP/USDT",
      price: "$2.98",
      change: "+3.97%",
      changeColor: "text-green-400",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png"
    }
  ],
  Futures: [
    {
      pair: "ADA/USDT",
      price: "$1.12",
      change: "-1.10%",
      changeColor: "text-red-400",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png"
    }
  ],
  "Top Gainers": [
    {
      pair: "SOL/USDT",
      price: "$92.50",
      change: "+5.50%",
      changeColor: "text-green-400",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png"
    },
    {
      pair: "DOGE/USDT",
      price: "$0.15",
      change: "+8.20%",
      changeColor: "text-green-400",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/74.png"
    }
  ]
};

const tabs = [
  { name: "Favorites", icon: <Star size={16} /> },
  { name: "Spot", icon: <LineChart size={16} /> },
  { name: "Futures", icon: <Flame size={16} /> },
  { name: "Top Gainers", icon: <TrendingUp size={16} /> }
];

export default function BuyCrypto() {
  const [activeTab, setActiveTab] = useState("Favorites");

  return (
    <section className="relative bg-gradient-to-br from-black via-[#0d0d1d] to-[#111132] text-white py-24 px-6 md:px-20 min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-yellow-400 via-purple-400 to-violet-500 bg-clip-text text-transparent">
          Buy & Trade Cryptocurrency Instantly
        </h1>

        
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-all
                ${
                  activeTab === tab.name
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-transparent border-purple-500 text-purple-300 hover:bg-purple-600 hover:text-white"
                }`}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {(marketData[activeTab] || []).map((market, index) => (
            <div
              key={`${activeTab}-${index}`}
              className="bg-black/30 backdrop-blur-md border border-gray-800 hover:border-purple-500 p-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-purple-500/30"
            >
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={market.icon}
                  alt={market.pair}
                  className="w-12 h-12 rounded-full border border-gray-500"
                  onError={(e) => {
                    e.target.src = "https://cryptologos.cc/logos/bitcoin-btc-logo.png";
                  }}
                />
                <div>
                  <h2 className="text-lg font-semibold">{market.pair}</h2>
                  <p className="text-sm text-gray-400">Real-time Market</p>
                </div>
              </div>
              <div className="text-right mb-5">
                <p className="text-2xl font-bold">{market.price}</p>
                <p className={`text-sm ${market.changeColor}`}>{market.change}</p>
              </div>
              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => alert(`Buy ${market.pair} now!`)}
                  className="bg-purple-500 hover:bg-purple-600 px-4 py-2 text-sm font-semibold rounded-full transition"
                >
                  Buy Now
                </button>
                <button
                  onClick={() => alert(`Details about ${market.pair}`)}
                  className="border border-purple-500 text-purple-300 hover:bg-purple-600 hover:text-white px-4 py-2 text-sm font-semibold rounded-full transition"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="absolute top-[-10%] left-[-5%] w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-72 h-72 bg-violet-600 rounded-full blur-2xl opacity-10 animate-ping"></div>
    </section>
  );
}
