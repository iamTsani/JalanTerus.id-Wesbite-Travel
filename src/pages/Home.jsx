import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState, useEffect, useRef } from "react";
import "../styles/Home.css"; // Atur semua styling di file ini

// Carousel Home
const destinations = [
  {
    image: "/images/bali.jpg",
    name: "Pantai Kuta",
    location: "Bali, Indonesia",
  },
  {
    image: "/images/borobudur.jpg",
    name: "Candi Borobudur",
    location: "Magelang, Jawa Tengah",
  },
  {
    image: "/images/rajaampat.jpg",
    name: "Raja Ampat",
    location: "Papua Barat",
  },
];

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  // About Section
  const Counter = ({ end, isVisible }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let start = 0;
      const duration = 2000;
      const stepTime = Math.max(Math.floor(duration / end), 20);

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer);
    }, [end, isVisible]);

    return <span className="counter">{count}+</span>;
  };

  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // agar hanya trigger sekali
        }
      },
      { threshold: 0.4 } // kira-kira 40% area terlihat
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <div className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <Slider {...settings}>
          {destinations.map((item, index) => (
            <div key={index} className="hero-slide">
              <img src={item.image} alt={item.name} />
              <div className="caption">
                <h2>{item.name}</h2>
                <p>{item.location}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Gradient di bawah carousel */}
      <div className="carousel-gradient" />

      {/* About Section*/}
      <section className="about-section" ref={aboutRef}>
        <h2 className="section-title">Tentang Kami</h2>
        <p className="section-desc">
          Kami telah mendampingi perjalanan wisata pelanggan sejak 2022.
        </p>

        <div className="track-record">
          {[
            { value: 3, label: "Tahun Pengalaman" },
            { value: 120, label: "Pelanggan Puas" },
            { value: 25, label: "Instansi Terkait" },
            { value: 80, label: "Paket Terjual" },
          ].map((item, index) => (
            <div key={index} className="record-item">
              <Counter end={item.value} isVisible={isVisible} />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="overview" className="overview-section">
        <div className="overview-container">
          {/* KIRI - Gambar */}
          <div className="overview-image">
            <img src="images/office.jpg" alt="Travel Overview" />
          </div>

          {/* TENGAH - Overview + Kontak */}
          <div className="overview-content">
            <h2>Overview</h2>
            <p>
              Selama lebih dari 3 tahun, biro travel kami telah membantu ratusan
              pelanggan menjelajahi berbagai destinasi wisata favorit di
              Indonesia. Kami juga dipercaya oleh berbagai lembaga, sekolah, dan
              instansi pemerintah untuk mengatur perjalanan wisata yang aman,
              nyaman, dan menyenangkan.
            </p>

            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-phone-alt"></i>
                <span>+62 812 3456 7890</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>info@travelmu.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
