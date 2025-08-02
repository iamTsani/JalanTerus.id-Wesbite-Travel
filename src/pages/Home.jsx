import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Home.css"; // Atur semua styling di file ini

const destinations = [
  {
    image: "/images/bali.jpg",
    name: "Pantai Kuta",
    location: "Bali, Indonesia"
  },
  {
    image: "/images/borobudur.jpg",
    name: "Candi Borobudur",
    location: "Magelang, Jawa Tengah"
  },
  {
    image: "/images/rajaampat.jpg",
    name: "Raja Ampat",
    location: "Papua Barat"
  }
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
    arrows: true
  };

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

      {/* Section lain (About, Paket, dsb) bisa lanjut di bawah ini */}
    </div>
  );
}
