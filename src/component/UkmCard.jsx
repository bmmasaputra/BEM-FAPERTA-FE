import React from "react";
import { motion } from "framer-motion";
import link from "../assets/icon/link.png";

const UkmCard = ({ ukm }) => {
  return (
    <motion.a
      whileHover={{ scale: 1.02 }}
      transition={{
        type: "linear",
        stiffness: 300,
        damping: 10,
        duration: 0.2,
      }}
      href={ukm.url_link}
      target="blank"
      style={styles.card}
      className="ukm_card"
    >
      <img
        style={styles.logo}
        src={ukm.logo_url}
        alt="logo"
        className="ukm_logo"
      />
      <div style={styles.textContainer} className="ukm_textContainer">
        <div style={styles.nameContainer} className="ukm_nameContainer">
          <p style={styles.name} className="ukm_name">
            {ukm.name}
          </p>
          <img style={styles.link} src={link} alt={link} className="ukm_link" />
        </div>
        <p style={styles.description} className="ukm_description">
          {ukm.description}
        </p>
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
    height: "375px",
    boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.2)",
    padding: "24px 24px 24px 24px",
    gap: "35px",
    overflow: "hidden",
    color: "black",
  },
  logo: {
    height: "140px",
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
    fontSize: "20px",
    fontWeight: "bold",
    margin: "0",
  },
  link: {
    height: "18px",
    width: "18px",
  },
  description: {
    margin: "0",
    fontSize: "18px",
    fontWeight: "medium",
    width: "100%",
    textAlign: "left",
    display: "-webkit-box",
    WebkitLineClamp: 5,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
};

export default UkmCard;
