import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip } from 'chart.js';
import Marquee from "react-fast-marquee";
import { Sparkles } from 'lucide-react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

const MarketTrends = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'BTC Frequency',
        data: [1200, 1900, 1500, 1800, 2200, 2100, 2600],
        borderColor: '#8B5CF6',
        backgroundColor: 'rgba(139,92,246,0.2)',
        tension: 0.5,
        pointRadius: 0,
        fill: true
      }
    ]
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        ticks: { color: '#d1d5db' },
        grid: { color: 'rgba(255,255,255,0.05)' },
      },
      y: {
        ticks: { color: '#d1d5db' },
        grid: { color: 'rgba(255,255,255,0.05)' },
      }
    },
    plugins: {
      legend: {
        labels: { color: '#fff', font: { size: 14 } },
      }
    }
  };

  const trendingCoins = [
    { name: 'Bitcoin', price: '$29,500' },
    { name: 'Ethereum', price: '$1,850' },
    { name: 'Solana', price: '$23.40' },
    { name: 'XRP', price: '$0.63' },
    { name: 'Litecoin', price: '$92.10' },
    { name: 'BNB', price: '$245.60' },
    { name: 'Cardano', price: '$0.45' },
    { name: 'Dogecoin', price: '$0.076' },
  ];

  return (
    <section className="min-h-screen px-4 py-16 bg-gradient-to-br from-[#0f051d] to-[#1a103f] text-white font-sans scroll-smooth">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-purple-300">📊 Yearly Market Trends</h2>

        {/* Line Chart */}
        <div className="bg-[#1f1147] rounded-xl shadow-xl p-6 mb-12">
          <Line data={data} options={options} />
        </div>

        {/* Scrolling Trending Coins */}
        <div className="mb-16 bg-[#1f1147] border border-purple-900 p-4 rounded-md">
          <Marquee gradient={false} speed={60}>
            {trendingCoins.map((coin, index) => (
              <div key={index} className="flex items-center mx-6 space-x-2 text-purple-300 font-medium">
                <span className="text-white">{coin.name}:</span>
                <span className="text-green-400">{coin.price}</span>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Future of Crypto */}
        <div className="mt-10 bg-[#1f1147] border border-purple-800 rounded-lg p-8 shadow-lg">
          <div className="flex items-center space-x-3 mb-4">
            <Sparkles className="text-purple-400" />
            <h3 className="text-3xl font-bold text-purple-300">The Future of Crypto</h3>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Blockchain innovation is reshaping industries across finance, healthcare, and governance. With decentralized finance (DeFi), NFTs, and smart contracts, crypto is not just a currency—it's a new internet layer. Stay ahead by investing in knowledge and technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketTrends;
