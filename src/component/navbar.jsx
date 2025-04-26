import React from "react";
import logo from "../assets/logo.png"; // Adjust the path as necessary
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={styles.name}>BEM FAPERTA</span>
          <span style={styles.name}>Universitas Andalas</span>
        </div>
      </div>
      <ul style={styles.navLinks}>
        <motion.li
          whileHover={{ scale: 1.1, fontWeight: "500" }}
          transition={{ type: "spring", stiffness: 300 }}
          style={styles.navItem}
        >
          <Link to="/" style={styles.navLink}>
            Home
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1, fontWeight: "500" }}
          transition={{ type: "spring", stiffness: 300 }}
          style={styles.navItem}
        >
          <Link to="/artikel" style={styles.navLink}>
            Artikel
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1, fontWeight: "500" }}
          transition={{ type: "spring", stiffness: 300 }}
          style={styles.navItem}
        >
          <Link to="/layanan" style={styles.navLink}>
            Layanan Mahasiswa
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1, fontWeight: "500" }}
          transition={{ type: "spring", stiffness: 300 }}
          style={styles.navItem}
        >
          <Link to="/galeri" style={styles.navLink}>
            Galeri
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1, fontWeight: "500" }}
          transition={{ type: "spring", stiffness: 300 }}
          style={styles.navItem}
        >
          <Link to="/kontak" style={styles.navLink}>
            Kontak
          </Link>
        </motion.li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "100px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 63px",
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    backdropFilter: "blur(10px)",
    color: "#000",
    zIndex: 1000,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    height: "54px",
    marginRight: "20px",
  },
  name: {
    fontSize: "18px",
    fontWeight: 600,
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: "30px",
  },
  navLink: {
    color: "#000",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "inherit",
  },
};

export default Navbar;
