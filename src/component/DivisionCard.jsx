import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/simple-kabinet.png";

const DivisionCard = ({ division }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      style={styles.card}
      className="division-card"
    >
      <img style={styles.logo} src={logo} alt="logo" />
      <p style={styles.name}>{division.fullname}</p>
      <p style={styles.description}>{division.description}</p>
    </motion.div>
  );
};

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: "26px",
    width: "709px",
    boxShadow: "0px 4px 22px 2px rgba(0, 0, 0, 0.25)",
    padding: "34px 34px 34px 248px",
    minHeight: "334px",
    marginRight: "50px",
    position: "relative",
    overflow: "hidden",
    color: "black",
    cursor: "grabbing",
  },
  logo: {
    position: "absolute",
    bottom: "0px",
    left: "0px",
    width: "208px",
  },
  name: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "32px",
    width: "426px",
  },
  description: {
    margin: "0",
    fontSize: "20px",
    fontWeight: "medium",
    width: "426px",
    display: "-webkit-box",
    WebkitLineClamp: 5,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
};

export default DivisionCard;
