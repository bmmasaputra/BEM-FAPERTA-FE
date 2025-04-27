import React, { useEffect, useState, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import ArticleCard from "../component/ArticleCard";
import "../styles/Artikel.css";

const URL = "http://localhost:3000/api/v1";

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <div className="spinner" />
      <h2>Loading BEM FAPERTA UNAND...</h2>
    </div>
  );
};

const Artikel = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(`${URL}/article`);
        const result = await response.json();
        setArticles(result.data);
      } catch (err) {
        console.error("Failed to fetch articles:", err);
      }
    };

    fetchArticles();
  }, []);

  if (!articles) return <SplashScreen />;

  return (
    <section>
      <h1>Artikel</h1>
      <div className="artikel-container">
        <div className="artikel-list">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        <div className="sidebar"></div>
      </div>
    </section>
  );
};

export default Artikel;
