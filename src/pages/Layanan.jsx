import React, { useEffect, useState, useRef } from "react";
import "../styles/Layanan.css";
import survey from "../assets/icon/survey.png";

const Layanan = () => {
return (
    <section className="layanan-container">
        <h1>Layanan Mahasiswa</h1>
        <div className="layanan-list">
            <div className="layanan-card">
                <img src={survey} alt="Survey" />
                <div className="layanan-content">
                    <h2>Survey Pengaduan Fasilitas Laboratorium</h2>
                    <p>
                        Pengisian pendataan ini dapat diisi lebih dari 1 laboratorium, baik
                        dari jurusan maupun bukan jurusan mahasiswa itu sendiri
                    </p>
                    <div className="cta-list">
                        <a
                            target="_blank"
                            href="https://docs.google.com/forms/d/e/1FAIpQLScOgkRmWdI_AnlpwXpyzoHWvBWNMXpUmH8UQ77da-JdONIC9g/viewform "
                        >
                            Ikuti Survey
                        </a>
                        <a
                            target="_blank"
                            href="https://drive.google.com/drive/folders/1CT2l74GJ5YILN86vP6xY63PuW1tbUAhB"
                        >
                            Lihat Hasil Survey
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
};

export default Layanan;
