import { useState } from "react";
import "./HeaderWithFilter.css";

const continents = ["All", "Asia", "Europe", "America"];

const HeaderWithFilter = ({ selectedContinent, handleFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-text">
          <h1>Explore Recent Trips</h1>
          <p className="subtext">
            Discover unique destinations and filter by continent.
          </p>
        </div>

        {/* Filter dropdown with animation */}
        <div className={`filter-container ${isOpen ? "active" : ""}`}>
          <select
            className="continent-filter"
            onChange={(e) => handleFilterChange(e.target.value)}
            value={selectedContinent}
            onFocus={() => setIsOpen(true)} // ✅ Open animation
            onBlur={() => setTimeout(() => setIsOpen(false), 200)} // ✅ Delay close for smooth effect
          >
            {continents.map((continent) => (
              <option key={continent} value={continent}>
                {continent}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default HeaderWithFilter;
