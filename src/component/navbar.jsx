import React from "react";
import logo from "../assets/logo.png"; // Adjust the path as necessary
import { Link } from "react-router-dom";

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
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>
            Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/ukm" style={styles.navLink}>
            UKM
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/artikel" style={styles.navLink}>
            Artikel
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/layanan" style={styles.navLink}>
            Layanan Mahasiswa
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/galeri" style={styles.navLink}>
            Galeri
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/kontak" style={styles.navLink}>
            Kontak
          </Link>
        </li>
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
    backgroundColor: "#fff",
    color: "#000",
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
    marginLeft: "20px",
  },
  navLink: {
    color: "#000",
    textDecoration: "none",
    fontSize: "16px",
  },
};

export default Navbar;
