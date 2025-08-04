import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const cryptos = [
    {
      name: 'BNB',
      icon: 'binance-coin-bnb-logo.png',
      price: '₹ 67,170.00',
      change: '+2.50%',
    },
    {
      name: 'SOL',
      icon: 'solana-sol-logo.png',
      price: '₹ 14,659.67',
      change: '+3.91%',
    },
    {
      name: 'USDC',
      icon: 'usd-coin-usdc-logo.png',
      price: '₹ 87.85',
      change: '+0.72%',
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#0f0c29] text-white flex flex-col justify-center items-center px-6 overflow-hidden">
      
      <motion.img
        src="bitcoin-btc-logo.png"
        alt="Bitcoin"
        className="absolute w-16 top-12 left-12 opacity-60"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
      <motion.img
        src="ethereum-eth-logo.png"
        alt="Ethereum"
        className="absolute w-14 bottom-20 right-16 opacity-60"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />
      <motion.img
        src="tether-usdt-logo.png"
        alt="Tether"
        className="absolute w-12 top-24 right-1/4 opacity-60"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />

     
      <div className="z-10 text-center max-w-2xl">
        <motion.h1
          className="text-4xl md:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Empowering Your <span className="text-purple-500">Crypto</span> Journey
        </motion.h1>
        <motion.p
          className="mt-4 text-gray-300 text-lg md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Trade smarter with real-time insights, lightning-fast updates, and a visually stunning interface.
        </motion.p>

        
        <motion.div
          className="mt-10 flex flex-col md:flex-row justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {cryptos.map((coin, i) => (
            <div
              key={i}
              className="bg-[#1c1c3a] px-6 py-4 rounded-xl text-center shadow-lg border border-[#2e2e4e]"
            >
              <img src={coin.icon} alt={coin.name} className="mx-auto w-12 mb-2" />
              <p className="text-green-400 text-sm font-semibold">{coin.change}</p>
              <p className="text-lg font-bold">{coin.price}</p>
              <p className="mt-1 text-gray-400">{coin.name}</p>
            </div>
          ))}
        </motion.div>

        
        <motion.div
          className="mt-10 flex justify-center gap-6 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-all font-semibold shadow-lg">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-full border border-gray-500 hover:bg-gray-800 transition-all font-semibold">
            Explore Market
          </button>
        </motion.div>
      </div>

     
      <div className="absolute w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-ping top-[-20%] left-[-10%]"></div>
      <div className="absolute w-80 h-80 bg-blue-400 rounded-full blur-2xl opacity-10 animate-pulse bottom-[-15%] right-[-10%]"></div>
    </section>
  );
};

export default HeroSection;
