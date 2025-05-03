import React, { useState } from "react";
import "boxicons";
import Swal from "sweetalert2";
import insta from "../assets/contact/icon/instagram.svg";
import tiktok from "../assets/contact/icon/tiktok.svg";
import youtube from "../assets/contact/icon/youtube.svg";
import email from "../assets/contact/icon/email.svg";
import phone from "../assets/contact/icon/phone.svg";
import "../styles/Kontak.css";

const URL = "https://bemfabe.vercel.app/api/v1";

const Kontak = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${URL}/aspiration`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Gagal mengirim data");
      }

      const data = await response.json();
      console.log("Berhasil mengirim:", data);
      Swal.fire({
        icon: "success",
        title: "Terkirim!",
        text: "Aspirasi berhasil dikirim.",
        confirmButtonColor: "#3085d6",
      });

      // Optional: reset form
      setForm({
        firstname: "",
        lastname: "",
        email: "",
        subject: "",
        content: "",
      });
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Terjadi kesalahan saat mengirim aspirasi.",
      });
    }
  };

  return (
    <section
      className="contact-section"
      style={{
        marginTop: "26px",
        display: "flex",
        alignItems: "start",
        gap: "86px",
      }}
    >
      <div
        className="contact-container"
        style={{ flex: 1, display: "flex", flexDirection: "column" }}
      >
        <h1>Hubungi Kami</h1>
        <p>
          Kami selalu terbuka untuk berdiskusi, berkolaborasi, dan mendengar
          aspirasi Anda! Jangan ragu untuk menghubungi kami melalui kontak
          berikut
        </p>
        <div style={{ marginBottom: "18px" }}>
          <div className="contact">
            <img src={insta} className="contact-logo" />
            <span
              className="contact-info"
              style={{ fontWeight: 500, fontSize: "18px" }}
            >
              @bemkmfpunand
            </span>
          </div>
          {/* <div className="contact">
            <img src={tiktok} className="contact-logo" />
            <span
              className="contact-info"
              style={{ fontWeight: 500, fontSize: "18px" }}
            >
              @bemkmfpunand
            </span>
          </div>
          <div className="contact">
            <img src={youtube} className="contact-logo" />
            <span
              className="contact-info"
              style={{ fontWeight: 500, fontSize: "18px" }}
            >
              BEM KM FAPERTA UNAND
            </span>
          </div> */}
          <div className="contact">
            <img src={email} className="contact-logo" />
            <span
              className="contact-info"
              style={{ fontWeight: 500, fontSize: "18px" }}
            >
              unandbemkmfp@gmail.com
            </span>
          </div>
          <div className="contact">
            <img src={phone} className="contact-logo" />
            <span
              className="contact-info"
              style={{ fontWeight: 500, fontSize: "18px" }}
            >
              085264694940 / 085265896124
            </span>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.33204714987232!2d100.46107845302511!3d-0.91212542649835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b795178a3f07%3A0x2b9db070640c5627!2sFaculty%20of%20Agriculture!5e0!3m2!1sen!2sid!4v1746247803575!5m2!1sen!2sid"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <form
        method="post"
        className="contact-form"
        onSubmit={handleSubmit}
        style={{
          width: "680px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#E3EDE9",
          padding: "30px 36px",
          borderRadius: "20px",
          boxShadow: "0px 0px 12.8px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <h1>Kotak Aspirasi</h1>
        <p>Sampaikan suara anda disini</p>
        <div className="name-group" style={{ display: "flex", gap: "20px" }}>
          <div className="form-group" style={{ flex: 1 }}>
            <label htmlFor="firstname">
              <i className="bx bx-user-pin"></i>
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="First name"
              value={form.firstname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group" style={{ flex: 1 }}>
            <label htmlFor="lastname">
              <i className="bx bxs-user-pin"></i>
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Last name"
              value={form.lastname}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            <i className="bx bxl-gmail"></i>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">
            <i className="bx bxs-folder-open"></i>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">
            <i className="bx bxs-message-dots"></i>
          </label>
          <textarea
            id="content"
            name="content"
            placeholder="Apa yang bisa kami bantu?"
            value={form.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Kirim</button>
      </form>
    </section>
  );
};

export default Kontak;
