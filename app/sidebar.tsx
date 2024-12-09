"use client";

import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";


const genres = [
  'Action',
  'Adventure',
  'Animation',
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Family',
  'Fantasy',
  'History',
  'Horror',
  'Music',
  'Mystery',
];

const Sidebar = () => {
  const [search, setSearch] = useState('');

  const filteredGenres = genres.filter((genre) =>
    genre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="sidebar">
      <h2 className="text-lg font-bold my-4">Search</h2>
      <div className="keyword border-b-2 border-gray-600">
        <input
          type="text"
          placeholder='Keywords'
        />
        <button><IoSearchOutline size={30} /></button>
      </div>
      <h2 className="text-lg font-bold my-4">Genres</h2>
      <div className="search">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button><MdOutlineKeyboardArrowDown size={30} /></button>
      </div>
      <div className="genres">
        <button
          className="dropdown-toggle"
        >
          Genres
        </button>
        <div className="dropdown">
          {filteredGenres.map((genre, index) => (
            <div key={index} className="dropdown-item" onClick={() => setSearch(genre)}>
              {genre}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
