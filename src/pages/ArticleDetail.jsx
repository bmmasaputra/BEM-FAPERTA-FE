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
          <style>
            {`
              .content h1 {
                font-size: 2.2rem;
                font-weight: 700;
                margin: 1.2em 0 0.7em 0;
                font-family: 'Montserrat', Arial, Helvetica, sans-serif;
                line-height: 1.2;
              }
              .content h2 {
                font-size: 1.7rem;
                font-weight: 600;
                margin: 1.1em 0 0.6em 0;
                font-family: 'Montserrat', Arial, Helvetica, sans-serif;
                line-height: 1.25;
              }
              .content h3 {
                font-size: 1.3rem;
                font-weight: 500;
                margin: 1em 0 0.5em 0;
                font-family: 'Montserrat', Arial, Helvetica, sans-serif;
                line-height: 1.3;
              }
              .content p {
                margin: 0 0 1em 0;
                font-size: 1rem;
                font-family: 'Montserrat', Arial, Helvetica, sans-serif;
                color: #222;
                line-height: 1.7;
              }
              .content b, .content strong {
                font-weight: bold;
              }
              .content i, .content em {
                font-style: italic;
              }
              .content u {
                text-decoration: underline;
              }
              .content ul {
                margin: 0 0 1em 1.5em;
                padding-left: 1.2em;
                list-style-type: disc;
              }
              .content ol {
                margin: 0 0 1em 1.5em;
                padding-left: 1.2em;
                list-style-type: decimal;
              }
              .content li {
                margin-bottom: 0.5em;
                font-size: 1rem;
                font-family: 'Montserrat', Arial, Helvetica, sans-serif;
                line-height: 1.7;
              }
            `}
          </style>
        </div>
        <div className="news">
          <h2 className="news-title" style={{ marginBottom: "20px" }}>
            Artikel Terbaru
          </h2>
          <div className="news-list">
            {news.map((newa) => (
              <NewsCard key={newa.id} newa={newa} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ArtikelDetail;
