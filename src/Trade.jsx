import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import { TrendingUp } from "lucide-react";

const coins = [
  { name: "BTC", price: "₹10,11,525.00", change: "+1.34%" },
  { name: "ETH", price: "₹3,23,305.00", change: "+6.07%" },
  { name: "DOGE", price: "₹18.08", change: "+4.09%" },
  { name: "TRX", price: "₹29.21", change: "+2.69%" },
  { name: "STETH", price: "₹3,22,901.00", change: "+6.08%" }
];

const MarketTrends = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const lineChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: coins.map((c) => c.name),
        datasets: [
          {
            label: "Trade Frequency (Millions)",
            data: [25, 18, 10, 8, 12],
            borderColor: "#4f46e5",  // Purple-600
            backgroundColor: "rgba(79, 70, 229, 0.1)",
            borderWidth: 3,
            tension: 0.3,
            pointBackgroundColor: "#fff",
            pointRadius: 5,
            pointHoverRadius: 7,
            fill: true
          }
        ]
      },
      options: {
        animation: { duration: 2000 },
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: "#cbd5e1",
              font: { size: 14 }
            }
          },
          tooltip: {
            mode: 'index',
            intersect: false
          }
        },
        scales: {
          x: {
            ticks: { color: "#a3a3a3" },
            grid: { color: "#2f2f3d" }
          },
          y: {
            beginAtZero: true,
            ticks: { color: "#a3a3a3" },
            grid: { color: "#2f2f3d" },
            title: {
              display: true,
              text: 'Trades (in Millions)',
              color: '#a3a3a3'
            }
          }
        },
        interaction: {
          intersect: false,
          mode: 'nearest'
        }
      }
    });

    return () => {
      lineChart.destroy();
    };
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#0c0c1c] via-[#10101f] to-[#0f172a] py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Market Trends
          </h2>
          <p className="text-gray-400 mt-2">
            Real-time crypto ticker and frequency analysis
          </p>
        </div>

        
        <div className="overflow-hidden border-y border-gray-700 py-3 mb-12">
          <div className="animate-marquee flex gap-10 min-w-full">
            {coins.map((coin, i) => (
              <div
                key={i}
                className="flex items-center gap-4 px-6 py-2 bg-[#1a1a2e] rounded-md shadow-md min-w-fit"
              >
                <span className="text-lg font-semibold">{coin.name}</span>
                <span className="text-yellow-400 font-bold">{coin.price}</span>
                <span className="text-green-400 font-medium">{coin.change}</span>
              </div>
            ))}
          </div>
        </div>

       
        <div className="bg-[#1a1b2f] rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold flex items-center gap-2 text-cyan-400 mb-6">
            <TrendingUp /> Trade Frequency Overview
          </h3>
          <canvas ref={chartRef} height="120"></canvas>
        </div>
      </div>
    </section>
  );
};

export default MarketTrends;