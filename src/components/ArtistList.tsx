import React, { useState } from "react";
import "../styles/ArtistList.css";

const allArtists = [
  { name: "The Weeknd", image: "https://via.placeholder.com/100" },
  { name: "Adele", image: "https://via.placeholder.com/100" },
  { name: "Beyoncé", image: "https://via.placeholder.com/100" },
  { name: "Coldplay", image: "https://via.placeholder.com/100" },
  { name: "Drake", image: "https://via.placeholder.com/100" },
  { name: "Doja Cat", image: "https://via.placeholder.com/100" },
  { name: "Eminem", image: "https://via.placeholder.com/100" },
];

const ArtistList: React.FC = () => {
  const [filter, setFilter] = useState("All");

  const letters = ["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

  const filtered = allArtists.filter((a) =>
    filter === "All" ? true : a.name.startsWith(filter)
  );

  return (
    <div>
      <div className="artist-filter">
        {letters.map((l) => (
          <button key={l} onClick={() => setFilter(l)}>{l}</button>
        ))}
      </div>
      <div className="artist-list">
        {filtered.map((artist, index) => (
          <div className="artist" key={index}>
            <img src={artist.image} alt={artist.name} />
            <p>{artist.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistList;
