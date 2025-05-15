import React, { useEffect, useState, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import DivisionCard from "../component/DivisionCard";
import UkmCard from "../component/UkmCard";
import "../styles/Home.css"; // assuming animation CSS goes here

const URL = "https://bemfabe.vercel.app/api/v1";

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <div className="spinner" />
      <h2>Loading BEM FAPERTA UNAND...</h2>
    </div>
  );
};

const Home = () => {
  const [profile, setProfile] = useState(null);
  const [divisions, setDivisions] = useState(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`${URL}/profile`);
        const result = await response.json();
        setProfile(result.data);
      } catch (err) {
        console.error("Failed to fetch profile:", err);
      }
    };

    const fetchDivisions = async () => {
      try {
        const response = await fetch(`${URL}/division`);
        const result = await response.json();
        setDivisions(result.data);
      } catch (err) {
        console.error("Failed to fetch profile:", err);
      }
    };

    fetchProfile();
    fetchDivisions();
  }, []);

  if (!profile || !divisions) return <SplashScreen />;

  return (
    <>
      <div className="hero-container">
        <img
          src={profile.hero_img_url}
          alt="Hero background"
          className="hero-bg"
        />
        <div className="hero-content">
          <h2>Website Resmi</h2>
          <h1>BEM FAPERTA UNAND</h1>
          <a href="#about">
            <button>Tentang Kami</button>
          </a>
        </div>
        <div className="cutout">
          <div className="stats-container">
            <svg
              className="inward-curve curve-left"
              width="50"
              height="50"
              viewBox="0 0 50 50"
            >
              <path d="M50 50H0C27.6142 50 50 27.6142 50 0V50Z" />
            </svg>
            <svg
              className="inward-curve curve-top"
              width="50"
              height="50"
              viewBox="0 0 50 50"
            >
              <path d="M50 50H0C27.6142 50 50 27.6142 50 0V50Z" />
            </svg>
            <div className="stats-card">
              <h5>Total Mahasiswa</h5>
              <p className="stat-count">{profile.total_mahasiswa}</p>
            </div>
            <div className="stats-card">
              <h5>Total Pengurus</h5>
              <p className="stat-count">{profile.total_pengurus}</p>
            </div>
            <div className="stats-card">
              <h5>Jumlah Proker</h5>
              <p className="stat-count">{profile.jumlah_proker}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="gubernur-container" ref={aboutRef} id="about">
        <div className="sambutan-gub-container">
          <h3>
            {profile.kabinet?.pengurus_kabinet_gubernur_idTopengurus?.fullname}
          </h3>
          <p className="text-highlight">Gubernur BEM FAPERTA UNAND</p>
          <h6>{profile.sambutan_gub}</h6>
        </div>
        <div className="gub-img-container">
          <img src={profile.gub_img_url} alt="Foto Gubernur" />
        </div>
        <div className="wagub-img-container">
          <img src={profile.wagub_img_url} alt="Foto Wakil Gubernur" />
        </div>
        <div className="sambutan-wagub-container">
          <h3>
            {profile.kabinet?.pengurus_kabinet_wakil_idTopengurus?.fullname}
          </h3>
          <p className="text-highlight">Wakil Gubernur BEM FAPERTA UNAND</p>
          <h6>{profile.sambutan_wagub}</h6>
        </div>
      </div>
      <div className="kabinet-container">
        <div className="kabinet-logo-container">
          <img
            className="kabinet-image"
            src={profile.kabinet.kabinet_img_url}
            alt="Kabinet Image"
          />
          <img
            className="kabinet-logo"
            src={profile.kabinet.logo_url}
            alt="Kabinet Logo"
          />
          <p className="kabinet-name">Kabinet {profile.kabinet.name}</p>
        </div>
        <div className="visi-misi">
          <p className="vimi">Visi</p>
          <p className="visi">{profile.kabinet.visi}</p>
          <p className="vimi">Misi</p>
          <div
            className="misi-list"
            dangerouslySetInnerHTML={{
              __html: profile.kabinet.misi.replace(
                /<li>/g,
                "<li class='misi-item'>"
              ),
            }}
          ></div>
        </div>
      </div>
      <DivisionSection divisions={divisions} />
    </>
  );
};

const DivisionSection = ({ divisions }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-87%"]);

  return (
    <div className="division-container" ref={targetRef}>
      <div className="division-header">
        <p>Dinas & Biro</p>
        <p>BEM FAPERTA UNAND</p>
      </div>
      <div className="division-list">
        <motion.div style={{ x }} className="division-card-container">
          {divisions.map((division) => (
            <DivisionCard key={division.id} division={division} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
