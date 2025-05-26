import React from "react";
import "../styles/TrackList.css";

const tracks = [
  { name: "Blinding Lights", artist: "The Weeknd", cover: "https://via.placeholder.com/50" },
  { name: "Hotline Bling", artist: "Drake", cover: "https://via.placeholder.com/50" },
  { name: "Bad Guy", artist: "Billie Eilish", cover: "https://via.placeholder.com/50" },
  { name: "Shake It Off", artist: "Taylor Swift", cover: "https://via.placeholder.com/50" },
  { name: "Dakiti", artist: "Bad Bunny", cover: "https://via.placeholder.com/50" },
  { name: "HUMBLE.", artist: "Kendrick Lamar", cover: "https://via.placeholder.com/50" },
];

const TrackList: React.FC = () => {
  return (
    <ul className="track-list">
      {tracks.map((track, index) => (
        <li className="track" key={index}>
          <img src={track.cover} alt={track.name} />
          <div>
            <p className="track-name">{track.name}</p>
            <p className="track-artist">{track.artist}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TrackList;