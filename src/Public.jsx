import React, { useEffect, useState } from "react";
import Navbar from "./component/navbar";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";

const URL = "https://bemfabe.vercel.app/api/v1";

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <div className="spinner" />
      <h2>Loading BEM FAPERTA UNAND...</h2>
    </div>
  );
};

export default function Public() {
  const [profile, setProfile] = useState(null);

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

    fetchProfile();
  }, []);

  if (!profile) return <SplashScreen />;

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer profile={profile} />
    </>
  );
}
