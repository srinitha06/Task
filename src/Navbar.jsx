import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Navbar.css';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="navbar">
      <img
        className="navbar_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix Logo"
      />
      <div className="navbar_search">
        <input
          type="text"
          className="navbar_searchInput"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="navbar_right">
        {/* Link to Sign In and Login pages */}
        <Link to="/signin" className="navbar_button">
          Sign In
        </Link>
       
      </div>
      <img
        className="navbar_avatar"
        src="https://th.bing.com/th/id/OIP.DL5L0ZXk28GQ2OHPYd5owgHaHa?w=157&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        alt="User Avatar"
      />
    </div>
  );
};

export default Navbar;
