import React, { useEffect, useState, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import ArticleCard from "../component/ArticleCard";
import "../styles/Artikel.css";
import empty from "../assets/empty.png";


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
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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

  const filteredArticles = articles.filter((article) => {
    const searchMatch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.content.toLowerCase().includes(searchTerm.toLowerCase());

    const articleDate = new Date(article.created_at);

    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    const startMatch = start ? articleDate >= start : true;
    const endMatch = end ? articleDate <= end : true;

    return searchMatch && startMatch && endMatch;
  });

  return (
    <section>
      <h1>Artikel</h1>
      <div className="artikel-container">
        <div className="artikel-list">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))
          ) : (
            <div className="empty-state">
              <img src={empty} alt="No Articles" className="empty-image" />
              <p className="empty-caption">Artikel Kosong</p>
            </div>
          )}
        </div>
        <div className="sidebar">
          <label htmlFor="search-input" className="search-label">
            Cari Article
          </label>
          <input
            id="search-input"
            type="text"
            placeholder="Cari..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="filter-date">
            <p className="date-header">Filter Tanggal</p>
            <label htmlFor="start-date">Mulai</label>
            <input
              id="start-date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <label htmlFor="end-date">Sampai</label>
            <input
              id="end-date"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};


export default Artikel;
