import React, { useState, useEffect } from 'react';
import { Menu, X, Bell, Moon, Sun, User } from 'lucide-react';

const currencies = ['USD', 'INR', 'ETH'];

const Header = ({
  scrollToHero, scrollToSquare, scrollToFutures, scrollToMore,
  scrollToEarn, scrollToMarket, scrollToBuy, scrollToTrade
}) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [currency, setCurrency] = useState('USD');
  const [theme, setTheme] = useState('dark');
  const [currentTime, setCurrentTime] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    document.documentElement.classList.toggle('dark');
  };

  const handleAuthSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name?.value;
    const email = e.target.elements.email.value;
    setUser({ name: name || 'User', email });
    setShowAuthModal(false);
  };

  return (
    <header className="bg-[#0f0c29]/90 backdrop-blur-md text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50 border-b border-purple-500/20">
      
      <div onClick={scrollToHero} className="flex items-center gap-3 cursor-pointer">
        <img src="https://cdn1.iconfinder.com/data/icons/cryptocurrency-blockchain-fintech/32/Cryptocurrency_Ripple_XRP-512.png"
             alt="Crypto Logo" className="w-10 h-10 animate-pulse" />
        <h1 className="text-2xl font-bold font-[Orbitron] tracking-wide bg-gradient-to-r from-fuchsia-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
          NΞON CRYPTΞ
        </h1>
      </div>

      
      <nav className="hidden md:flex items-center gap-6 text-sm font-mono">
        {[
          ['Buy', scrollToBuy],
          ['Market', scrollToMarket],
          ['Market Trend', scrollToTrade],
          ['Yearly Prediction', scrollToFutures],
          ['Live Market', scrollToEarn],
          ['Finance', scrollToSquare],
          ['Contact US', scrollToMore],
        ].map(([label, handler]) => (
          <button
            key={label}
            onClick={() => { handler(); setShowMobileMenu(false); }}
            className="relative text-gray-300 hover:text-purple-400 font-semibold transition duration-300 group"
          >
            {label}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </button>
        ))}
      </nav>

      
      <div className="hidden md:flex items-center gap-4">
        <select
          value={currency}
          onChange={e => setCurrency(e.target.value)}
          className="bg-black border border-purple-400 text-purple-300 px-3 py-1 rounded-lg text-sm"
        >
          {currencies.map(cur => <option key={cur} value={cur}>{cur}</option>)}
        </select>

        <Bell className="hover:text-purple-400 cursor-pointer" />

        {user ? (
          <div className="relative group">
            <User className="w-8 h-8 text-purple-400 border border-purple-500 rounded-full p-1 cursor-pointer" />
            <div className="absolute right-0 top-10 bg-[#1A1F38] border border-purple-500 rounded-xl p-2 w-36
                            opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="text-white text-sm mb-2">{user.name}</div>
              <button onClick={() => setUser(null)}
                      className="block w-full text-left text-sm text-white hover:text-red-500">Logout</button>
            </div>
          </div>
        ) : (
          <>
            <button onClick={() => { setAuthMode('login'); setShowAuthModal(true); }}
              className="px-4 py-2 border border-purple-500 text-purple-300 rounded hover:bg-purple-500 hover:text-black transition font-mono">
              Log In
            </button>
            <button onClick={() => { setAuthMode('signup'); setShowAuthModal(true); }}
              className="px-4 py-2 bg-gradient-to-tr from-fuchsia-400 to-purple-500 text-black rounded font-mono hover:brightness-110 transition">
              Sign Up
            </button>
          </>
        )}
      </div>

      
      <button className="md:hidden text-white" onClick={() => setShowMobileMenu(!showMobileMenu)}>
        {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
      </button>

      
      {showMobileMenu && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#0f0c29]/95 border-t border-purple-500/20 py-6 z-40 space-y-4 text-center">
          {['Buy', 'Market', 'Trade', 'Futures', 'Live', 'Square', 'More'].map(label => (
            <button
              key={label}
              onClick={() => { eval(`scrollTo${label}`)(); setShowMobileMenu(false); }}
              className="block w-full text-gray-300 hover:text-purple-400 font-semibold"
            >
              {label}
            </button>
          ))}
        </div>
      )}

      {/* Auth Modal */}
      {/* {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="bg-[#0f172a] text-white p-8 rounded-xl w-full max-w-md border border-purple-500/30 shadow-2xl relative animate-fade-in">
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4 text-purple-400 text-center">
              {authMode === 'login' ? 'Secure Login' : 'Create Account'}
            </h2>
            <p className="text-gray-400 mb-6 font-mono text-center">
              {authMode === 'login'
                ? 'Enter your email and password to log in securely.'
                : 'Fill out your details to create a secure account.'}
            </p>
            <form onSubmit={handleAuthSubmit} className="space-y-4">
              {authMode === 'signup' && (
                <input
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 rounded-lg bg-[#0f0c29] border border-gray-700 text-white focus:border-purple-500"
                  required
                />
              )}
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 rounded-lg bg-[#0f0c29] border border-gray-700 text-white focus:border-purple-500"
                required
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 rounded-lg bg-[#0f0c29] border border-gray-700 text-white focus:border-purple-500"
                required
              />
              <button
                type="submit"
                className="w-full py-2 bg-gradient-to-br from-purple-500 to-pink-500 hover:opacity-90 text-black font-semibold rounded-lg"
              >
                {authMode === 'login' ? 'Log In' : 'Sign Up'}
              </button>
            </form>
          </div>
        </div>
      )} */}
    </header>
  );
};

export default Header;
