import { FaFilter } from "react-icons/fa"; // Import filter icon
import "./HeaderWithFilter.css"; // Import CSS file

const continents = ["All", "Asia", "Europe", "America"];

const HeaderWithFilter = ({ selectedContinent, handleFilterChange }) => {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-text">
          <h1>🌍 Explore Recent Trips</h1>
          <p className="subtext">
            Discover unique destinations and filter by continent.
          </p>
        </div>

        {/* Filter dropdown with icon */}
        <div className="filter-container">
          <FaFilter className="filter-icon" />
          <select
            className="continent-filter"
            onChange={(e) => handleFilterChange(e.target.value)}
            value={selectedContinent}
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
