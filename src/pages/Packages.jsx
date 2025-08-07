import React from "react";
import FilterPaket from '../components/FilterPaket';
import "../styles/Packages.css";

const Packages = () => {
  return (
    <div className="paket-wisata-page">
      {/* Header / Hero Section */}
      <section class="tour-header">
        <div class="tour-header-content">
          <h1>Paket Wisata</h1>
          <p>
            Lebih dari 80 pilihan destinasi liburan yang seru dan tak
            terlupakan.
          </p>
          <a href="#filter" class="btn-book">
            Lihat Paket
          </a>
        </div>
      </section>

      {/* Filter Section */}
      <section id="filter" className="filter-section">
        <FilterPaket />
      </section>

      {/* Nanti kamu bisa lanjutkan di sini untuk Daftar Paket Wisata */}
      {/* <PaketList /> atau komponen lainnya */}
    </div>
  );
};

export default Packages;
