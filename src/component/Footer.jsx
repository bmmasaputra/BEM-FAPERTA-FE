import React from "react";
import logo from "../assets/logo.png"; // Adjust the path as necessary
import insta from "../assets/contact/icon/instagram.svg";
import email from "../assets/contact/icon/email.svg";
import phone from "../assets/contact/icon/phone.svg";
import { Link } from "react-router-dom";

const Footer = ({ profile }) => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerHeader}>BEM FAPERTA UNIVERSITAS ANDALAS</div>
      <div style={styles.footerContent}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="Logo" style={styles.logo} />
          <img src={profile.kabinet.logo_url} alt="Logo" style={styles.logo} />
          <div style={styles.contacts}>
            <p style={styles.contactHeader}>Hubungi Kami</p>
            <div style={styles.contact}>
              <img src={insta} style={styles.contactLogo} />
              <span style={styles.contactInfo}>@bemfapertaunand</span>
            </div>
            <div style={styles.contact}>
              <img src={email} style={styles.contactLogo} />
              <span style={styles.contactInfo}>bemfapertaunand@gmail.com</span>
            </div>
            <div style={styles.contact}>
              <img src={phone} style={styles.contactLogo} />
              <span style={styles.contactInfo}>0813-3544-5455</span>
            </div>
          </div>
        </div>
        <div style={styles.footerLinks}>
          <p style={styles.contactHeader}>Quick Links</p>
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
        </div>
      </div>
      <p style={styles.copyright}>© 2025. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#242B28",
    color: "white",
    padding: "31px 63px 25px 63px",
    textAlign: "center",
    width: "100dvw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "35px",
    borderTopLeftRadius: "50px",
    borderTopRightRadius: "50px",
  },
  footerHeader: {
    fontSize: "24px",
    fontWeight: "bold",
    // marginBottom: "20px",
  },
  footerContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "",
    width: "100%",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    height: "140px",
    marginRight: "22px",
  },
  contacts: {
    marginLeft: "15px",
    paddingLeft: "25px",
    borderLeft: "2px solid white",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "14px",
  },
  contactHeader: {
    fontSize: "18px",
    fontWeight: "600",
    margin: "0",
  },
  contact: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  contactLogo: {
    width: "20px",
    height: "20px",
  },
  contactInfo: {
    fontSize: "18px",
    fontWeight: "medium",
  },
  footerLinks: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "13px",
  },
  navLinks: {
    listStyleType: "none",
    paddingLeft: 0,
    textAlign: "left",
  },
  navItem: {
    marginBottom: "10px",
    textAlign: "left",
  },
  navLink: {
    color: "#fff",
    margin: 0,
    fontSize: "18px",
    fontWeight: "medium",
    textDecoration: "none",
  },
};

export default Footer;