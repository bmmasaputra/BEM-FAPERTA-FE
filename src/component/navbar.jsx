import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png"; // Adjust the path as necessary
import menuIcon from "../assets/icon/menu.svg";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Navbar.css"; // Assuming you have a CSS file for styles

const Navbar = () => {
  const loc = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isActive = (path) => loc.pathname === path;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    console.log("Current Path:", loc.pathname);
    console.log("Is Mobile:", isMobile);
    console.log("Sidebar Open:", sidebarOpen);
  }, [loc]);

  return (
    <nav className="navbar">
      <div className="logoContainer">
        <img src={logo} alt="Logo" className="logo" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span className="name">BEM FAPERTA</span>
          <span className="name">Universitas Andalas</span>
        </div>
      </div>
      {isMobile ? (
        <button
          className="menu-button"
          onClick={() => {
            setSidebarOpen(!sidebarOpen);
          }}
        >
          <img src={menuIcon} alt="Menu" className="menu-icon" />
        </button>
      ) : (
        <ul className="navLinks">
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
                className="navItem"
              >
                <Link
                  to={to}
                  style={{
                    ...styles.navLink,
                    fontWeight: active ? 500 : "normal",
                  }}
                  className="navLink"
                >
                  {label}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      )}
      <AnimatePresence>
        {isMobile && sidebarOpen && (
          <motion.div
            className="sidebar"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="logoContainer">
              <img src={logo} alt="Logo" className="logo" />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span className="name">BEM FAPERTA</span>
                <span className="name">Universitas Andalas</span>
              </div>
            </div>
            <ul className="m-navLinks">
              {[
                { to: "/", label: "Home" },
                { to: "/ukm", label: "UKM" },
                { to: "/artikel", label: "Artikel" },
                { to: "/layanan", label: "Layanan Mahasiswa" },
                { to: "/galeri", label: "Galeri" },
                { to: "/kontak", label: "Kontak" },
              ].map(({ to, label }) => (
                <li key={to} className="m-navItem">
                  <Link
                    to={to}
                    style={{
                      ...styles.navLink,
                      fontWeight: isActive(to) ? 500 : "normal",
                      className: "navLink",
                    }}
                    onClick={() => setSidebarOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const styles = {
  // navbar: {
  //   position: "fixed",
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   height: "100px",
  //   display: "flex",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   padding: "0px 63px",
  //   backgroundColor: "rgba(255, 255, 255, 0.85)",
  //   backdropFilter: "blur(10px)",
  //   color: "#000",
  //   zIndex: 1000,
  // },
  // logoContainer: {
  //   display: "flex",
  //   alignItems: "center",
  // },
  // logo: {
  //   height: "54px",
  //   marginRight: "20px",
  // },
  // name: {
  //   fontSize: "18px",
  //   fontWeight: 600,
  // },
  // navLinks: {
  //   listStyle: "none",
  //   display: "flex",
  //   margin: 0,
  //   padding: 0,
  // },
  // navItem: {
  //   marginLeft: "30px",
  // },
  navLink: {
    color: "#000",
    textDecoration: "none",
    transition: "font-weight 0.2s ease",
  },
};

export default Navbar;
