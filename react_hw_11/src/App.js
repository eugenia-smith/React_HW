import "./App.css";
import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import MainPage from "./components/mainPage";
import ArticlesList from "./components/articlesList";
import Article from "./components/article";

function App() {
  return (
    <section>
      <nav className="page_nav">
        <NavLink to="/">
          <span>Home</span>
        </NavLink>
        <NavLink to="/blog">
          <span>Blog</span>
        </NavLink>
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
