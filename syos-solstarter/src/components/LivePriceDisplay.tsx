import React, { useEffect, useState } from "react";

const LivePriceDisplay = () => {
  const [prices, setPrices] = useState({ BTC: 0, ETH: 0, SOL: 0 });

  useEffect(() => {
    const fetchPrices = async () => {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd"
      );
      const data = await res.json();
      setPrices({
        BTC: data.bitcoin.usd,
        ETH: data.ethereum.usd,
        SOL: data.solana.usd,
      });
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 bg-black text-green-400 rounded-md">
      <h2 className="text-xl mb-2 font-bold">📈 Live Prices</h2>
      <p>BTC: ${prices.BTC}</p>
      <p>ETH: ${prices.ETH}</p>
      <p>SOL: ${prices.SOL}</p>
    </div>
  );
};

export default LivePriceDisplay;
