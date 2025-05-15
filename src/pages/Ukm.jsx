import React, { useEffect, useState, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import UkmCard from "../component/UkmCard";
import "../styles/ukm.css"; // assuming animation CSS goes here

const URL = "https://bemfabe.vercel.app/api/v1";

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <div className="spinner" />
      <h2>Loading BEM FAPERTA UNAND...</h2>
    </div>
  );
};

const Ukm = () => {
  const [ukms, setUkms] = useState(null);

  useEffect(() => {
    const fetchUkms = async () => {
      try {
        const response = await fetch(`${URL}/ukm`);
        const result = await response.json();
        console.log(result.data)
        setUkms(result.data);
      } catch (err) {
        console.error("Failed to fetch profile:", err);
      }
    };

    fetchUkms();
  }, []);

  if (!ukms) return <SplashScreen />;

  return (
    <section className="ukm-section">
      <h1>Unit Kegiatan Mahasiswa</h1>
      <div className="ukm-grid-container">
        {ukms.map((ukm) => (
          <UkmCard key={ukm.id} ukm={ukm} />
        ))}
      </div>
    </section>
  );
};

export default Ukm;
