import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import logo from "../src/assets/logo.png";


const Header = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
  
    const handleLogoClick = () => {
      // If already on the homepage, force a refresh
      if (location.pathname === "/") {
        window.location.reload();
      } else {
        navigate("/");
      }
    };
  
    const handleSearch = (e) => {
      e.preventDefault();
      onSearch(searchQuery);  // Call the onSearch function passed from the parent
    };
  
    return (
      <header className="bg-gray-100 p-4 shadow">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={handleLogoClick}>
            <img
              src="/logo.png" // Replace with your logo path
              alt="StackOverflow Logo"
              className="h-8 w-8"
            />
            <h1 className="text-orange-500 font-bold text-lg">StackOverflow</h1>
          </div>
  
          {/* Search Bar Section */}
          <form className="flex gap-2" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search your answers here..."
              className="border px-3 py-1 rounded-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-1 rounded-lg"
            >
              Search
            </button>
          </form>
        </div>
      </header>
    );
  };
  
export default Header;
