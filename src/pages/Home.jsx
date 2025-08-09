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

  // Service
  const services = [
    {
      icon: <i className="fas fa-map-marked-alt"></i>,
      title: "Wisata Dalam Negeri",
      description:
        "Nikmati berbagai pilihan paket wisata domestik ke destinasi favorit di seluruh Indonesia.",
    },
    {
      icon: <i className="fas fa-plane-departure"></i>,
      title: "Wisata Luar Negeri",
      description:
        "Jelajahi destinasi internasional dengan paket hemat dan layanan profesional.",
    },
    {
      icon: <i className="fas fa-bus-alt"></i>,
      title: "Penyewaan Transportasi",
      description:
        "Sediakan bus, mini bus, atau kendaraan pribadi sesuai kebutuhan perjalanan Anda.",
    },
    {
      icon: <i className="fas fa-kaaba"></i>,
      title: "Paket Ziarah & Umroh",
      description:
        "Layanan khusus perjalanan religi dengan bimbingan berpengalaman dan fasilitas terbaik.",
    },
    {
      icon: <i className="fas fa-sliders-h"></i>,
      title: "Layanan Custom Trip",
      description:
        "Rancang perjalanan sesuai kebutuhan pribadi, komunitas, atau instansi Anda.",
    },
    {
      icon: <i className="fas fa-user-friends"></i>,
      title: "Pemandu Wisata & Tour Leader",
      description:
        "Tour leader berpengalaman yang siap memandu Anda dengan ramah dan profesional.",
    },
  ];

  // Favorit Paakceges
  const packages = [
    {
      title: "Road Trip Bromo Sunrise",
      image: "/images/bromo.jpg",
      destinations: ["Bromo", "Bukit Teletubbies", "Pasir Berbisik"],
      price: 1500000,
      link: "/paket/bromo",
    },
    {
      title: "Eksplorasi Bali 4 Hari",
      image: "/images/bali.jpg",
      destinations: ["Uluwatu", "Kintamani", "Tanah Lot", "Ubud"],
      price: 3200000,
      link: "/paket/bali",
    },
    {
      title: "Tour Jogja Heritage",
      image: "/images/jogja.jpg",
      destinations: ["Candi Prambanan", "Keraton", "Taman Sari", "Malioboro"],
      price: 1200000,
      link: "/paket/jogja",
    },
  ];

  // Testimoni data Dummy
  const testimonials = [
    {
      name: "Amanda, Jakarta",
      text: "Perjalanan menyenangkan dan penuh kenangan. Terima kasih JalanTerus.id!",
    },
    {
      name: "Budi, Bandung",
      text: "Layanan cepat dan ramah, sangat direkomendasikan untuk liburan keluarga.",
    },
    {
      name: "Sari, Surabaya",
      text: "Suka banget sama pengaturannya, semua berjalan lancar!",
    },
    {
      name: "Dio, Jogja",
      text: "Terbaik! Terorganisir dan fleksibel. Pokoknya puas!",
    },
    {
      name: "Nina, Bali",
      text: "Ini pengalaman paling menyenangkan selama traveling! Paket wisatanya keren-keren.",
    },
    {
      name: "Rian, Medan",
      text: "Dari awal pemesanan sampai akhir trip semuanya tertata rapi dan profesional.",
    },
    {
      name: "Lia, Semarang",
      text: "Sopirnya ramah, itinerary fleksibel, dan semua destinasi sesuai ekspektasi.",
    },
    {
      name: "Yusuf, Makassar",
      text: "Biro travel yang paling bisa diandalkan! Akan booking lagi bulan depan.",
    },
    {
      name: "Citra, Bekasi",
      text: "Serasa liburan bareng keluarga sendiri, stafnya semua helpful banget!",
    },
  ];

  // Partner
  // useEffect(() => {
  //   fetch("/partner/partner-logos.json")
  //     .then((res) => res.json())
  //     .then((data) => setLogos(data))
  //     .catch((err) => console.error("Error fetching logos:", err));
  // }, []);

  return (
    <div className="home" id="home">
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
      <section className="about-section" ref={aboutRef} id="about">
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

      {/* Overview Section */}
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

      {/* Our Service Section */}
      <section className="services-section" id="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Layanan terbaik untuk perjalanan Anda.
          </p>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Favorit Packeges */}
      <section className="favorite-packages" id="packages">
        <div className="container">
          <h2 className="section-title">Paket Wisata Favorit</h2>
          <p className="section-subtitle">
            Rekomendasi terbaik untuk liburan Anda!
          </p>

          <div className="packages-grid">
            {packages.map((pkg, index) => (
              <div key={index} className="package-card">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="package-image"
                />
                <div className="package-content">
                  <h3>{pkg.title}</h3>
                  <ul className="destination-list">
                    {pkg.destinations.map((dest, i) => (
                      <li key={i}> {dest}</li>
                    ))}
                  </ul>
                  <p className="price">
                    Mulai dari <strong>Rp {pkg.price.toLocaleString()}</strong>
                  </p>
                  <a href={pkg.link} className="view-more">
                    View More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="view-all-wrapper">
          <a href="./Packages" className="view-all-link">
            View All Packages
          </a>
        </div>
      </section>

      {/* Testimoni Section */}
      <section className="testimonial-section" id="testimonials">
        <h2 className="section-title">Apa Kata Mereka?</h2>
        <div className="testimonial-masonry">
          {testimonials.map((item, index) => (
            <blockquote key={index} className="testimonial-quote">
              <p>"{item.text}"</p>
              <footer>— {item.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Partner Section */}
      {/* <section className="partner-section">
        <h2 className="partner-title">Partner Kami</h2>
        <div className="slider-container">
          <div className="slider-track">
            {[...logos, ...logos].map((file, i) => (
              <div className="slide" key={i}>
                <img src={`/partner/${file}`} alt={`Partner ${i}`} />
              </div>
            ))}
          </div>
        </div>
      </section> */}



    </div>
  );
}
