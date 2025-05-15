import React from "react";
import { motion } from "framer-motion";
import link from "../assets/icon/link.png";

const UkmCard = ({ ukm }) => {
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      href={ukm.url_link}
      target="blank"
      style={styles.card}
      className="ukm-card"
    >
      <img style={styles.logo} src={ukm.logo_url} alt="logo" />
      <div style={styles.textContainer}>
        <div style={styles.nameContainer}>
          <p style={styles.name}>{ukm.name}</p>
          <img style={styles.link} src={link} alt={link} />
        </div>
        <p style={styles.description}>{ukm.description}</p>
      </div>
    </motion.a>
  );
};

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "26px",
    width: "100%",
    height: "402px",
    boxShadow: "0px 4px 22px 2px rgba(0, 0, 0, 0.25)",
    padding: "35px 35px 35px 35px",
    gap: "20px",
    overflow: "hidden",
    color: "black",
  },
  logo: {
    height: "166px",
  },
  textContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    gap: "12px",
    // marginRight: "35px",
  },
  nameContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "18px",
  },
  name: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "0",
  },
  link: {
    height: "24px",
    width: "24px",
  },
  description: {
    margin: "0",
    fontSize: "18px",
    fontWeight: "medium",
    width: "100%",
    textAlign: "center",
    display: "-webkit-box",
    WebkitLineClamp: 5,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
};

export default UkmCard;
