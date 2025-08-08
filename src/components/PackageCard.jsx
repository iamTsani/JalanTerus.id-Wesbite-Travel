// src/components/PackageCard.jsx
import React from "react";

const PackageCard = ({ nama, negara, provinsi, durasi, harga, gambar, deskripsi }) => {
  return (
    <div className="package-card">
      <img src={gambar} alt={nama} className="package-image" />
      <div className="package-content">
        <h3>{nama}</h3>
        <p className="package-location">{provinsi}, {negara}</p>
        {deskripsi && <p className="package-desc">{deskripsi}</p>}
        <p className="package-duration">Durasi: {durasi}</p>
        <p className="package-price">
          Rp {(Number(harga) || 0).toLocaleString()}
        </p>
        <button className="package-btn">Lihat Detail</button>
      </div>
    </div>
  );
};

export default PackageCard;
