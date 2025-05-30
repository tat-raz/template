import React, { useEffect, useState } from "react";
import "../styles/TrendingNow.css"


const trendingTracks = [
  "Blinding Lights – The Weeknd",
  "Easy On Me – Adele",
  "Industry Baby – Lil Nas X",
  "As It Was – Harry Styles",
];

const TrendingNow: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % trendingTracks.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="trending-banner">
      <p>🔥 Trending now: {trendingTracks[index]}</p>
    </div>
  );
};

export default TrendingNow;
