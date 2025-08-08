// src/pages/Packages.jsx
import React, { useState } from "react";
import packagesData from "../data/packagesData";
import PackageCard from "../components/PackageCard";
import FilterPaket from "../components/FilterPaket";
import "../styles/Packages.css";

const Packages = () => {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredPackages = packagesData.filter((pkg) => {
    const matchNegara = !filters.negara || pkg.negara === filters.negara;
    const matchProvinsi =
      !filters.provinsi || pkg.provinsi === filters.provinsi;
    const matchDurasi = !filters.durasi || pkg.durasi === filters.durasi;

    const hargaDari = filters.harga?.dari ? Number(filters.harga.dari) : 0;
    const hargaSampai = filters.harga?.sampai
      ? Number(filters.harga.sampai)
      : Infinity;
    const matchHarga = pkg.harga >= hargaDari && pkg.harga <= hargaSampai;

    return matchNegara && matchProvinsi && matchDurasi && matchHarga;
  });

  return (
    <div className="paket-wisata-page">
      {/* Header / Hero Section */}
      <section className="tour-header">
        <div className="tour-header-content">
          <h1>Paket Wisata</h1>
          <p>
            Lebih dari 80 pilihan destinasi liburan yang seru dan tak
            terlupakan.
          </p>
          <a href="#filter" className="btn-book">
            Lihat Paket
          </a>
        </div>
      </section>

      {/* Filter Section */}
      <section id="filter" className="filter-section">
        <FilterPaket onFilterChange={handleFilterChange} />
      </section>

      {/* Daftar Paket Wisata */}
      <section className="packages-list">
        {packagesData.map((item) => (
          <PackageCard key={item.id} {...item} />
        ))}
      </section>
    </div>
  );
};

export default Packages;
