import React from 'react';

const mockCryptoData = [
  { name: 'BTC', price: '₹ 2,532,000.00', change: '+4.11%' },
  { name: 'ETH', price: '₹ 168,150.00', change: '+3.25%' },
  { name: 'BNB', price: '₹ 67,170.00', change: '+2.50%' },
  { name: 'SOL', price: '₹ 14,659.67', change: '+3.91%' },
  { name: 'USDC', price: '₹ 87.85', change: '+0.72%' },
  { name: 'STETH', price: '₹ 322,901.00', change: '+6.08%' },
  { name: 'XRP', price: '₹ 55.21', change: '+1.34%' },
  { name: 'DOGE', price: '₹ 7.13', change: '-0.28%' },
];

const CryptoTicker = () => {
  return (
    <div className="w-full overflow-hidden border-b border-purple-700">
      <div className="animate-marquee whitespace-nowrap flex gap-6 px-4 py-2 text-sm bg-gradient-to-r from-black via-gray-900 to-black text-white">
        {mockCryptoData.map((coin, i) => (
          <div key={i} className="flex items-center gap-2 min-w-max">
            <span className="font-semibold">{coin.name}</span>
            <span>{coin.price}</span>
            <span className={`font-medium ${coin.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
              {coin.change}
            </span>
          </div>
        ))}
      
        {mockCryptoData.map((coin, i) => (
          <div key={i + 'x'} className="flex items-center gap-2 min-w-max">
            <span className="font-semibold">{coin.name}</span>
            <span>{coin.price}</span>
            <span className={`font-medium ${coin.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
              {coin.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoTicker;
