import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArtistList from "./components/ArtistList";
import TrackList from "./components/TrackList";
import TrendingNow from "./components/TrendingNow";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <TrendingNow />
      <main className="main">
        <section className="artists-section">
          <h2>Popular Artists</h2>
          <ArtistList />
        </section>
        <section className="tracks-section">
          <h2>Popular Tracks</h2>
          <TrackList />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;