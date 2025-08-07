// src/components/FilterPaket.jsx
import React, { useState } from 'react';
import { negaraList, provinsiPerNegara, durasiList } from '../data/filterOptions';
import '../styles/filter.css';


const FilterPaket = ({ onFilterChange }) => {
  const [selectedNegara, setSelectedNegara] = useState('');
  const [selectedProvinsi, setSelectedProvinsi] = useState('');
  const [selectedDurasi, setSelectedDurasi] = useState('');
  const [hargaDari, setHargaDari] = useState('');
  const [hargaSampai, setHargaSampai] = useState('');

  const handleFilter = () => {
    const filters = {
      negara: selectedNegara,
      provinsi: selectedProvinsi,
      durasi: selectedDurasi,
      harga: {
        dari: hargaDari,
        sampai: hargaSampai,
      }
    };
    onFilterChange(filters); // kirim filter ke parent
  };

  return (
    <div className="filter-container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Negara */}
      <div>
        <label>Negara:</label><br />
        <select value={selectedNegara} onChange={(e) => {
          setSelectedNegara(e.target.value);
          setSelectedProvinsi('');
        }}>
          <option value="">-- Pilih Negara --</option>
          {negaraList.map((negara, idx) => (
            <option key={idx} value={negara}>{negara}</option>
          ))}
        </select>
      </div>

      {/* Provinsi */}
      <div>
        <label>Provinsi/Destinasi:</label><br />
        <select
          value={selectedProvinsi}
          onChange={(e) => setSelectedProvinsi(e.target.value)}
          disabled={!selectedNegara}
        >
          <option value="">-- Pilih Provinsi --</option>
          {selectedNegara &&
            provinsiPerNegara[selectedNegara]?.map((provinsi, idx) => (
              <option key={idx} value={provinsi}>{provinsi}</option>
            ))}
        </select>
      </div>

      {/* Durasi */}
      <div>
        <label>Durasi Perjalanan:</label><br />
        <select value={selectedDurasi} onChange={(e) => setSelectedDurasi(e.target.value)}>
          <option value="">-- Pilih Durasi --</option>
          {durasiList.map((durasi, idx) => (
            <option key={idx} value={durasi}>{durasi}</option>
          ))}
        </select>
      </div>

      {/* Harga */}
      <div>
        <label>Harga (dari - sampai):</label><br />
        <input
          type="number"
          placeholder="Dari (Rp)"
          value={hargaDari}
          onChange={(e) => setHargaDari(e.target.value)}
          style={{ marginRight: '0.5rem' }}
        />
        <input
          type="number"
          placeholder="Sampai (Rp)"
          value={hargaSampai}
          onChange={(e) => setHargaSampai(e.target.value)}
        />
      </div>

      {/* Tombol Filter */}
      <button onClick={handleFilter}>Terapkan Filter</button>
    </div>
  );
};

export default FilterPaket;
