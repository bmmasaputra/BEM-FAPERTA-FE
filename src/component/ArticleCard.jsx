import React, { useState } from "react";
import { motion } from "framer-motion";
import { link, object } from "framer-motion/client";

const ArticleCard = ({ article }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        scale: 1.02,
      }}
      transition={{ type: "spring", stiffness: 300 }}
      style={styles.card}
      className="article-card"
    >
      <motion.img
        animate={{
          boxShadow: isHovered
            ? "0px 4px 22px 2px rgba(0, 0, 0, 0.25)"
            : "none",
        }}
        transition={{ type: "spring", stiffness: 300 }}
        style={styles.image}
        src={article.thumbnail_url}
        alt="Article"
      />
      <div style={styles.textContainer}>
        <h2 style={styles.title}>{article.title}</h2>
        <p style={styles.date}>
          {new Date(article.created_at).toLocaleDateString("in-IN", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <p style={styles.description}>{article.content}</p>
        <a style={styles.link} href="https://example.com">
          Baca Artikel
        </a>
      </div>
    </motion.div>
  );
};

const styles = {
  card: {
    display: "flex",
    backgroundColor: "#fff",
    width: "845px",
    gap: "28px",
    marginBottom: "50px",
    color: "black",
    borderRadius: "8px",
  },
  image: {
    width: "420px",
    height: "246px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  textContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "13px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "600",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    margin: "0",
  },
  date: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#3E3A3A",
    margin: "0",
  },
  description: {
    fontSize: "14px",
    fontWeight: "regular",
    display: "-webkit-box",
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    margin: "0",
    marginBottom: "3px",
  },
  link: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#2B48BD",
    textDecoration: "none",
    margin: "0",
  },
};

export default ArticleCard;
