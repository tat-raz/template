import React from "react";
import "../styles/ArtistList.css";

const artists = [
  { name: "The Weeknd", image: "https://via.placeholder.com/100" },
  { name: "Drake", image: "https://via.placeholder.com/100" },
  { name: "Billie Eilish", image: "https://via.placeholder.com/100" },
  { name: "Taylor Swift", image: "https://via.placeholder.com/100" },
  { name: "Bad Bunny", image: "https://via.placeholder.com/100" },
  { name: "Kendrick Lamar", image: "https://via.placeholder.com/100" },
  { name: "Ariana Grande", image: "https://via.placeholder.com/100" },
];

const ArtistList: React.FC = () => {
  return (
    <div className="artist-list">
      {artists.map((artist, index) => (
        <div className="artist" key={index}>
          <img src={artist.image} alt={artist.name} />
          <p>{artist.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ArtistList;