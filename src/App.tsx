import React from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const navItems = [
    { title: "Главная", url: "/" },
    { title: "О нас", url: "/about" },
    { title: "Контакты", url: "/contact" }
  ];

  const copyText = "Моя компания. Все права защищены.";

  return (
    <>
      <Header navItems={navItems} />
      <Main />
      <Footer copyText={copyText} />
    </>
  );
}

export default App;