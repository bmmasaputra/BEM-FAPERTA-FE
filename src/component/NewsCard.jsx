import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NewsCard = ({ newa: article }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate(`/artikel/${article.id}`);
  };

  const timeSince = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);

    let interval = seconds / 31536000;
    if (interval >= 1) return Math.floor(interval) + " Tahun";

    interval = seconds / 2592000;
    if (interval >= 1) return Math.floor(interval) + " Bulan";

    interval = seconds / 604800;
    if (interval >= 1) return Math.floor(interval) + " Minggu";

    interval = seconds / 86400;
    if (interval >= 1) return Math.floor(interval) + " Hari";

    interval = seconds / 3600;
    if (interval >= 1) return Math.floor(interval) + " Jam";

    interval = seconds / 60;
    if (interval >= 1) return Math.floor(interval) + " Menit";

    return "Just now";
  };

  return (
    <motion.div
      onClick={handleClick}
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
      <p style={styles.date}>{timeSince(article.created_at)} yang lalu</p>
      <h2 style={styles.title}>{article.title}</h2>
    </motion.div>
  );
};

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    width: "100%",
    gap: "16px",
    marginBottom: "30px",
    color: "black",
  },
  image: {
    width: "400px",
    height: "204px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  date: {
    fontSize: "16px",
    fontWeight: "500",
    color: "#3E3A3A",
    margin: "0",
  },
  title: {
    fontSize: "20px",
    fontWeight: "600",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    margin: "0",
  },
};

export default NewsCard;
