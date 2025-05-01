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
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "26px",
    width: "object-fit-content",
    boxShadow: "0px 4px 22px 2px rgba(0, 0, 0, 0.25)",
    padding: "26px 35px 26px 35px",
    gap: "40px",
    minHeight: "218px",
    marginRight: "50px",
    overflow: "hidden",
    color: "black",
  },
  logo: {
    height: "166px",
  },
  textContainer: {
    display: "flex",
    width: "289px",
    flexDirection: "column",
    gap: "12px",
    // marginRight: "35px",
  },
  nameContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "18px",
  },
  name: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "0",
    width: "332px",
  },
  link: {
    height: "24px",
    width: "24px",
  },
  description: {
    margin: "0",
    fontSize: "18px",
    fontWeight: "medium",
    width: "289px",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
};

export default UkmCard;
