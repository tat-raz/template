import React, { useState } from "react";
import "../styles/TrackList.css";

const allTracks = [
  { title: "Blinding Lights", artist: "The Weeknd", duration: 202, cover: "https://via.placeholder.com/80" },
  { title: "Hello", artist: "Adele", duration: 295, cover: "https://via.placeholder.com/80" },
  { title: "Formation", artist: "Beyoncé", duration: 210, cover: "https://via.placeholder.com/80" },
  { title: "God's Plan", artist: "Drake", duration: 190, cover: "https://via.placeholder.com/80" },
  { title: "Levitating", artist: "Dua Lipa", duration: 250, cover: "https://via.placeholder.com/80" },
  { title: "As It Was", artist: "Harry Styles", duration: 205, cover: "https://via.placeholder.com/80" },
];

const formatDuration = (sec: number) => {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
};

const TrackList: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [sort, setSort] = useState("title");

  const sortedTracks = [...allTracks].sort((a, b) => {
    if (sort === "title") return a.title.localeCompare(b.title);
    if (sort === "duration") return a.duration - b.duration;
    return 0;
  });

  const visibleTracks = sortedTracks.slice(0, visibleCount);

  return (
    <div>
      <div className="track-sort">
        <label>Sort by: </label>
        <select onChange={(e) => setSort(e.target.value)} value={sort}>
          <option value="title">Title (A–Z)</option>
          <option value="duration">Duration</option>
        </select>
      </div>
      <ul className="track-list">
        {visibleTracks.map((track, index) => (
          <li key={index} className="track">
            <img src={track.cover} alt={track.title} />
            <div>
              <p className="track-name">{track.title}</p>
              <p className="track-artist">{track.artist}</p>
            </div>
            <span>{formatDuration(track.duration)}</span>
          </li>
        ))}
      </ul>
      {visibleCount < allTracks.length && (
        <button onClick={() => setVisibleCount(visibleCount + 2)}>Show More</button>
      )}
    </div>
  );
};

export default TrackList;
