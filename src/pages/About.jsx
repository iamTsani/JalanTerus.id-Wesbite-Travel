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
          <h1>About Me</h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="about-our-story">
        <div className="story-container">
          <h2>Our Story</h2>
          <p>
            Berawal dari semangat untuk memperkenalkan keindahan alam dan budaya
            Indonesia, kami hadir sebagai penyedia layanan perjalanan yang dapat
            diandalkan. Dengan komitmen terhadap kenyamanan, keamanan, dan
            pengalaman yang bermakna, kami ingin menjadi bagian dari setiap
            momen berharga perjalanan Anda.
          </p>
        </div>

        <div className="highlight-container">
          <div className="highlight-box">
            <h3>Sejak 2022</h3>
            <p>
              Kami telah membantu ratusan pelanggan menikmati perjalanan terbaik
              mereka.
            </p>
          </div>
          <div className="highlight-box">
            <h3>Misi Kami</h3>
            <p>
              Membuat pengalaman wisata yang mudah, menyenangkan, dan berkesan
              untuk semua orang.
            </p>
          </div>
          <div className="highlight-box">
            <h3>Mengapa Memilih Kami</h3>
            <p>
              Paket fleksibel, layanan ramah, harga transparan, dan dukungan
              sepanjang waktu.
            </p>
          </div>
        </div>
      </section>

      {/* Nilai -  Nilai utama */}
      <section className="core-values-section">
        <h2 className="core-values-title">Nilai-Nilai Utama Kami</h2>
        <div className="core-values-grid">
          <div className="value-item">
            <i className="fas fa-shield-alt icon-large"></i>
            <h3>Keamanan</h3>
            <p>
              Kami mengutamakan keselamatan dan kenyamanan setiap pelanggan
              dalam setiap perjalanan.
            </p>
          </div>
          <div className="value-item">
            <i className="fas fa-handshake icon-large"></i>
            <h3>Pelayanan Ramah</h3>
            <p>
              Kami percaya bahwa pelayanan terbaik dimulai dari hati yang tulus.
            </p>
          </div>
          <div className="value-item">
            <i className="fas fa-file-invoice-dollar icon-large"></i>
            <h3>Transparansi</h3>
            <p>Harga dan fasilitas yang jelas tanpa biaya tersembunyi.</p>
          </div>
          <div className="value-item">
            <i className="fas fa-rocket icon-large"></i>
            <h3>Inovasi</h3>
            <p>
              Kami terus berinovasi untuk memberikan pengalaman perjalanan yang
              berkesan.
            </p>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="cta-content">
          <h2>Siap Memulai Perjalanan Tak Terlupakan?</h2>
          <p>
            Jelajahi destinasi impian Anda bersama kami. Kami siap membantu
            kapan saja!
          </p>
          <div className="cta-buttons">
            <a href="/Packges" className="btn-primary">
              Lihat Paket
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
