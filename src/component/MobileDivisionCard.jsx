import React from "react";
import { motion } from "framer-motion";
import { text } from "framer-motion/m";
// import logo from "../assets/simple-kabinet.png";

const MobileDivisionCard = ({ division }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.00 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      style={styles.card}
      className="division-card"
    >
      <p style={styles.name} className="division-name">{division.fullname}</p>
      <p style={styles.description} className="division-description">{division.description}</p>
    </motion.div>
  );
};

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#30a846",
    borderRadius: "26px",
    width: "100%",
    boxShadow: "0px 4px 22px 2px rgba(0, 0, 0, 0.25)",
    padding: "20px 10px 20px 10px",
    color: "white",
    cursor: "pointer",
  },
  name: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "12px",
    textAlign: "center",
    width: "100%",
    minHeight: "45px"
  },
  description: {
    margin: "0",
    fontSize: "16px",
    // textAlign: "justify",    
    fontWeight: "medium",
    display: "-webkit-box",
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
};

export default MobileDivisionCard;
