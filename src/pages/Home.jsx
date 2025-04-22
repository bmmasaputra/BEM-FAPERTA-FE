import React from "react";
import { useEffect, useState } from "react";
import hero from "../assets/Hero.png";

const URL = "http://localhost:3000/api/v1";

const Home = () => {
  const [profile, setProfile] = useState([]);
  const [division, setDivision] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch(`${URL}/profile`);
      const data = await response.json();
      setProfile(data.data);
      console.log(data.data);
    };
    fetchProfile();

    const fetchDivision = async () => {
      const response = await fetch(`${URL}/division`);
      const data = await response.json();
      setDivision(data.data);
      console.log(data.data);
    };
    fetchDivision();
  }, []);

  return (
    <>
      <div className="hero-container">
        <img src={profile.hero_img_url} alt="Hero background" class="hero-bg" />
        <div className="hero-content">
          <h2>Selamat Datang di Website</h2>
          <h1>BEM FAPERTA UNAND</h1>
          <button>Tentang Kami</button>
        </div>
        <div className="cutout">
          <div className="stats-container">
            <svg
              class="inward-curve curve-left"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M50 50H0C27.6142 50 50 27.6142 50 0V50Z" />
            </svg>
            <svg
              class="inward-curve curve-top"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
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
    </>
  );
};

export default Home;
