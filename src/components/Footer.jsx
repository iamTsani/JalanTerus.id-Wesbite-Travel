import React from 'react';
import '../styles/Footer.css'; // Pastikan file CSS ini sudah kamu buat

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo dan Deskripsi */}
        <div className="footer-section">
          <h2 className="footer-logo">JalanTerus.id</h2>
          <p>
            Biro perjalanan wisata terpercaya sejak 2022. Menyediakan paket wisata domestik & mancanegara, sewa transportasi, dan layanan custom trip untuk kebutuhan personal maupun korporat.
          </p>
        </div>

        {/* Navigasi */}
        <div className="footer-section">
          <h3>Menu</h3>
          <ul>
            <li><a href="#home">Beranda</a></li>
            <li><a href="#about">Tentang</a></li>
            <li><a href="#services">Layanan</a></li>
            <li><a href="#packages">Paket Wisata</a></li>
            <li><a href="#testimonials">Testimoni</a></li>
          </ul>
        </div>

        {/* Kontak */}
        <div className="footer-section">
          <h3>Kontak Kami</h3>
          <p>WhatsApp: <a href="" target="_blank" rel="noopener noreferrer">+62 812-3456-7890</a></p>
          <p>Email: info@travelmu.com</p>
          <p>Instagram: <a href="" target="_blank" rel="noopener noreferrer">@akuninstagram</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} JalanTerus.id. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
