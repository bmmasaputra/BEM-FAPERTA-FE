import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../styles/ArtikelDetail.css";
import NewsCard from "../component/NewsCard";

const URL = "https://bemfabe.vercel.app/api/v1";

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <div className="spinner" />
      <h2>Loading BEM FAPERTA UNAND...</h2>
    </div>
  );
};

const ArtikelDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`${URL}/article/${id}`);
        const result = await response.json();
        setArticle(result.data);
      } catch (error) {
        console.error("Failed to fetch article:", error);
      }
    };

    const fetchNews = async () => {
      try {
        const response = await fetch(`${URL}/article`);
        const result = await response.json();
        setNews(result.data);
      } catch (error) {
        console.error("Failed to fetch News:", error);
      }
    };

    if (id) {
      fetchArticle();
      window.scrollTo(0, 0);
    }

    fetchNews();
  }, [id]);

  if (!article || !news) return <SplashScreen />;

  return (
    <>
      <img src={article.thumbnail_url} className="image" alt="Article Image" />
      <section className="article-section">
        <div className="article">
          <h1 className="title">{article.title}</h1>
          <div className="info">
            <p className="publisher">
              {article.admin_artikel_publisher_idToadmin.username}
            </p>
            <span>&nbsp;&#8226;&nbsp;</span>
            <p className="date">
              {new Date(article.created_at).toLocaleDateString("in-IN", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
        <div className="news">
          <h2 className="news-title" style={{marginBottom: "20px"}}>Artikel Terbaru</h2>
          {news.map((newa) => (
            <NewsCard key={newa.id} newa={newa} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ArtikelDetail;
