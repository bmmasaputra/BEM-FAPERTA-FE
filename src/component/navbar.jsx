import React, { useEffect } from "react";
import logo from "../assets/logo.png"; // Adjust the path as necessary
import { Link, useLocation } from "react-router";
import { motion } from "framer-motion";

const Navbar = () => {
  const loc = useLocation();

  const isActive = (path) => loc.pathname === path;

  useEffect(() => {
    console.log("Current Path:", loc.pathname);
  }, [loc]);

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
        {[
          { to: "/", label: "Home" },
          { to: "/ukm", label: "UKM" },
          { to: "/artikel", label: "Artikel" },
          { to: "/layanan", label: "Layanan Mahasiswa" },
          { to: "/galeri", label: "Galeri" },
          { to: "/kontak", label: "Kontak" },
        ].map(({ to, label }) => {
          const active = isActive(to);
          return (
            <motion.li
              key={to}
              whileHover={{ scale: 1.1 }}
              animate={active ? { scale: 1.1 } : { scale: 1 }}
              transition={{ type: "linear", duration: 0.2 }}
              style={{
                ...styles.navItem,
              }}
            >
              <Link
                to={to}
                style={{
                  ...styles.navLink,
                  fontWeight: active ? 500 : "normal",
                }}
              >
                {label}
              </Link>
            </motion.li>
          );
        })}
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
    transition: "font-weight 0.2s ease",
  },
};

export default Navbar;
