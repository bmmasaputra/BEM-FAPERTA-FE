import React, { useEffect, useState } from "react";
import "../styles/Galeri.css";

const URL = "http://localhost:3000/api/v1";
const ALBUM_ID = "csHPJygB5rTfK3twZIOlX";

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <div className="spinner" />
      <h2>Loading BEM FAPERTA UNAND...</h2>
    </div>
  );
};

const Galeri = () => {
  const [images, setImages] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`${URL}/album/${ALBUM_ID}`);
        const result = await response.json();
        setImages(result.data.album_images);
      } catch (error) {
        console.error("Failed to fetch article:", error);
      }
    };

    fetchImages();
  }, []);

  if (!images) return <SplashScreen />;

  return (
    <section className="galeri-container">
      <h1>Galeri</h1>
      <div className="image-grid">
        {images.map((image) => (
          <div className="image-card" key={image.id}>
            <img src={image.images.img_url} alt={image.images.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Galeri;
