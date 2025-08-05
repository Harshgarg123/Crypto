import React from "react";
import { motion } from "framer-motion";
import { Wallet, TrendingUp, ShieldCheck, Users } from "lucide-react";

const features = [
  {
    icon: <Wallet size={28} />,
    title: "Next-Gen Wallet",
    desc: "Multi-layered security with biometric access and backup vaults.",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Live Market Feed",
    desc: "Access real-time charts, trends, and price alerts seamlessly.",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Fortress-Level Safety",
    desc: "Blockchain-grade encryption & fraud detection AI.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: <Users size={28} />,
    title: "Community Power",
    desc: "Vibrant global network driving innovation and support.",
    color: "from-pink-400 to-fuchsia-500",
  },
];

const SquareSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#0f0f0f] via-[#0b0b0b] to-black py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-violet-500 bg-clip-text text-transparent"
        >
          The Future of Finance, Today.
        </motion.h2>
        <p className="text-gray-400 mt-5 text-lg max-w-2xl mx-auto">
          Here's why thousands trust us to power their crypto journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.06, rotate: 0.5 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-black/40 backdrop-blur-xl border border-gray-800 shadow-lg rounded-2xl p-6 hover:shadow-yellow-500/30 group transition-all duration-300"
            >
              <div
                className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-br ${feature.color} text-white shadow-lg`}
              >
                {feature.icon}
              </div>
              <h3 className="text-white text-lg font-bold mt-2 group-hover:text-yellow-400">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SquareSection;
