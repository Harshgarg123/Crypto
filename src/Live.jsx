import React, { useEffect, useState } from 'react';
import axios from 'axios';

const COIN_IDS = [
  'bitcoin',
  'ethereum',
  'ripple',
  'tether',
  'binancecoin',
  'solana',
  'dogecoin',
];

export default function LiveMarket() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetchLiveData();
    const interval = setInterval(fetchLiveData, 3000);
    return () => clearInterval(interval);
  }, []);

  async function fetchLiveData() {
    try {
      const res = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets',
        {
          params: {
            vs_currency: 'inr',
            ids: COIN_IDS.join(','),
            order: 'market_cap_desc',
            per_page: COIN_IDS.length,
            sparkline: false,
            price_change_percentage: '24h',
          },
        }
      );
      setCoins(res.data);
    } catch (err) {
      console.error('CoinGecko fetch error:', err);
    }
  }

  return (
    <section className="bg-gradient-to-br from-[#0c0c1d] via-[#1a1a2e] to-[#0f172a] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-cyan-400 mb-6">
          Live Market Data
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-[#1a1b2f] rounded-lg table-auto">
            <thead>
              <tr className="text-left text-gray-300 uppercase text-sm border-b border-gray-600">
                <th className="px-5 py-3">Coin</th>
                <th className="px-5 py-3">Price (₹)</th>
                <th className="px-5 py-3">24h Change</th>
                <th className="px-5 py-3">Market Cap</th>
              </tr>
            </thead>
            <tbody>
              {coins.map((coin) => (
                <tr
                  key={coin.id}
                  className="border-b border-gray-700 hover:bg-[#252a3a] transition"
                >
                  <td className="px-5 py-4 flex items-center gap-3">
                    <img
                      src={coin.image}
                      alt={coin.name}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="font-semibold">{coin.symbol.toUpperCase()}</span>
                  </td>
                  <td className="px-5 py-4 font-semibold">
                    ₹{coin.current_price.toLocaleString('en-IN')}
                  </td>
                  <td
                    className={`px-5 py-4 font-medium ${
                      coin.price_change_percentage_24h >= 0
                        ? 'text-green-400'
                        : 'text-red-400'
                    }`}
                  >
                    {coin.price_change_percentage_24h?.toFixed(2)}%
                  </td>
                  <td className="px-5 py-4">
                    ₹{(coin.market_cap / 1_000_000).toFixed(0)}M
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
