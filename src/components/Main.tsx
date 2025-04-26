import React from "react";
import DataLoader from "./DataLoader";
import "../styles/Main.css";

const Main: React.FC = () => (
  <main className="main-content" role="main">
    <section className="content-section" aria-labelledby="posts-heading">
      <h2 id="posts-heading" className="section-title">
        Последние посты
      </h2>
      <DataLoader apiUrl="https://api.example.com/posts" />
    </section>

    <section className="content-section" aria-labelledby="comments-heading">
      <h2 id="comments-heading" className="section-title">
        Комментарии
      </h2>
      <DataLoader apiUrl="https://api.example.com/comments" />
    </section>
  </main>
);

export default Main;
