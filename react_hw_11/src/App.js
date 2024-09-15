import "./App.css";
import React from "react";
import { Routes, Route, Link, NavLink, useNavigate } from "react-router-dom";
import MainPage from "./components/mainPage";
import ArticlesList from "./components/articlesList";
import Article from "./components/article";

function App() {
  return (
    <section>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blog" element={<ArticlesList />} />
        <Route path="/blog/:articleId" element={<Article />} />
      </Routes>
    </section>
  );
}

export default App;
