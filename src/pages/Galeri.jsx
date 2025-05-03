import React, { useEffect, useState } from "react";
import empty from "../assets/empty.png";
import "../styles/Galeri.css";

const URL = "https://bemfabe.vercel.app/api/v1";
const ALBUM_ID = "UIGcgfh8Nl7FpKFWhRkso";

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
      {images.length > 0 ? (
        <div className="image-grid">
          {images.map((image) => (
            <div className="image-card" key={image.id}>
              <img src={image.images.img_url} alt={image.images.name} />
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div>
            <img src={empty} alt="No Articles" className="empty-image" />
            <p className="empty-caption">Galeri Kosong</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Galeri;
