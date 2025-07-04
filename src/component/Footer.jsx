import React from "react";
import logo from "../assets/logo.png"; // Adjust the path as necessary
import insta from "../assets/contact/icon/Instagram.svg";
import tiktok from "../assets/contact/icon/Tiktok.svg";
import youtube from "../assets/contact/icon/Youtube.svg";
import email from "../assets/contact/icon/Email.svg";
import phone from "../assets/contact/icon/Phone.svg";
import { Link } from "react-router-dom";
import "../styles/Footer.css"; // Adjust the path as necessary
import { color } from "framer-motion";

const Footer = ({ profile }) => {
  return (
    <footer style={styles.footer} className="footer">
      <div style={styles.footerHeader} className="footerHeader">
        BEM FAPERTA UNIVERSITAS ANDALAS
      </div>
      <div style={styles.footerContent} className="footerContent">
        <div style={styles.logoContainer} className="logoContainer">
          <div className="logoWrapper">
            <img src={logo} alt="Logo" style={styles.logo} className="logo" />
            <img
              src={profile.kabinet.logo_url}
              alt="Logo"
              style={styles.logo}
              className="logo"
            />
          </div>
          <div style={styles.contacts} className="contacts">
            <p style={styles.contactHeader} className="footerContactHeader">
              Hubungi Kami
            </p>
            <div style={styles.contact} className="contact">
              <img
                src={insta}
                style={styles.contactLogo}
                className="contactLogo"
              />
              <span style={styles.contactInfo} className="contactInfo">
                @bemkmfpunand
              </span>
            </div>
            <div style={styles.contact} className="contact">
              <img
                src={tiktok}
                style={styles.contactLogo}
                className="contactLogo"
              />
              <span style={styles.contactInfo} className="contactInfo">
                @bemkmfpunand
              </span>
            </div>
            <div style={styles.contact} className="contact">
              <img
                src={youtube}
                style={styles.contactLogo}
                className="contactLogo"
              />
              <span style={styles.contactInfo} className="contactInfo">
                BEM KM FAPERTA UNAND
              </span>
            </div>
            <div style={styles.contact} className="contact">
              <img
                src={email}
                style={styles.contactLogo}
                className="contactLogo"
              />
              <span style={styles.contactInfo} className="contactInfo">
                unandbemkmfp@gmail.com
              </span>
            </div>
            <div style={styles.contact} className="contact">
              <img
                src={phone}
                style={styles.contactLogo}
                className="contactLogo"
              />
              <span style={styles.contactInfo} className="contactInfo">
                085264694940 / 085265896124
              </span>
            </div>
          </div>
        </div>
        <div style={styles.footerLinks} className="footerLinks">
          <p style={styles.contactHeader}>Quick Links</p>
          <ul style={styles.navLinks} className="footerNavLinks">
            <li style={styles.navItem} className="footerNavItem">
              <Link to="/" style={styles.navLink} className="footerNavLink">
                Home
              </Link>
            </li>
            <li style={styles.navItem} className="footerNavItem">
              <Link to="/ukm" style={styles.navLink} className="footerNavLink">
                UKM
              </Link>
            </li>
            <li style={styles.navItem} className="footerNavItem">
              <Link
                to="/artikel"
                style={styles.navLink}
                className="footerNavLink"
              >
                Artikel
              </Link>
            </li>
            <li style={styles.navItem} className="footerNavItem">
              <Link
                to="/layanan"
                style={styles.navLink}
                className="footerNavLink"
              >
                Layanan Mahasiswa
              </Link>
            </li>
            <li style={styles.navItem} className="footerNavItem">
              <Link
                to="/galeri"
                style={styles.navLink}
                className="footerNavLink"
              >
                Galeri
              </Link>
            </li>
            <li style={styles.navItem} className="footerNavItem">
              <Link
                to="/kontak"
                style={styles.navLink}
                className="footerNavLink"
              >
                Kontak
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p style={styles.copyright} className="copyright">
        <a
          href="https://github.com/bmmasaputra"
          target="_blank"
          style={{ textDecoration: "none", color: "white" }}
        >
          bmmasaputra{" "}
        </a>
        © 2025. All rights reserved.
      </p>
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
  },
  contactHeader: {
    fontSize: "18px",
    fontWeight: "600",
    margin: "0",
    marginBottom: "0px",
  },
  contact: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "14px",
  },
  contactLogo: {
    width: "20px",
    height: "20px",
  },
  contactInfo: {
    fontSize: "18px",
    textAlign: "left",
    color: "white",
    fontWeight: "500",
  },
  footerLinks: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "0px",
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
