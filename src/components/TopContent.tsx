import React, { useEffect, useState } from "react";
import { fetchTopArtists, fetchTopTracks, Artist, Track } from "../api/Api";

const TopContent: React.FC = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const [artistsData, tracksData] = await Promise.all([
          fetchTopArtists(),
          fetchTopTracks()
        ]);

        setArtists(artistsData);
        setTracks(tracksData);
        setError(null); 
      } catch (err) {
        setError("Не удалось загрузить данные с API. Попробуйте позже.");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) return <p>Загрузка данных...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>🔥 Популярные исполнители</h2>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {artists.map((artist, index) => (
          <div key={index} style={{ width: "150px", textAlign: "center" }}>
            <img
              src={artist.image?.[2]?.["#text"] || ""}
              alt={artist.name}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <p>{artist.name}</p>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: "40px" }}>🎧 Популярные треки</h2>
      <ul>
        {tracks.map((track, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {typeof track.artist === "string" ? track.artist : track.artist.name} — {track.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopContent;
