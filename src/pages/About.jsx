import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="about-hero">
        <img
          src="/images/office.jpg"
          alt="Tentang JalanTerus.id"
          className="about-banner-img"
        />
        <div className="about-hero-text">
          <h1>Tentang Kami</h1>
        </div>
      </section>

      {/* Warp Section */}
      <section className="about-wrapper">
        <div className="about-container">
          <div className="about-left">
            <h2>About Us</h2>
            <div className="underline"></div>
            <p>
              Selamat datang di JalanTerus.id, biro travel yang berkomitmen
              memberikan pengalaman perjalanan terbaik dan menyenangkan bagi
              Anda. Kami hadir untuk membantu Anda menjelajahi keindahan alam
              dan budaya Indonesia melalui paket wisata yang fleksibel dan
              terpercaya.Jika Anda ingin mengetahui lebih banyak tentang kami atau ingin
              menjadwalkan konsultasi, silakan hubungi kami:
            </p>
          </div>

          <div className="about-right">
            <div className="contact-info">
              <div className="contact-icon">
                <i className="fas fa-phone-alt" aria-hidden="true"></i>
              </div>
              <div className="contact-text">
                <strong>WhatsApp</strong>
                <br />
                +62 852 1234 5678
              </div>
            </div>

            <div className="contact-info">
              <div className="contact-icon">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </div>
              <div className="contact-text">
                <strong>Email</strong>
                <br />
                info@jalanterus.id
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
