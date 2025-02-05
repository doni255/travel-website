import React, { useState } from "react";
import Carditem from "./Carditem";
import Modal from "./Modal";
import { data as tripsData } from "./data";
import HeaderWithFilter from "./HeaderWithFilter";

function RecentTrips() {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedContinent, setSelectedContinent] = useState("All");

  const openModal = (trip) => {
    setSelectedTrip(trip);
    setSelectedPlace(trip.bestPlaces[0] || null);
  };

  const closeModal = () => {
    setSelectedTrip(null);
    setSelectedPlace(null);
  };

  const handlePlaceSelect = (place) => {
    setSelectedPlace(place);
  };

  const handleFilterChange = (continent) => {
    setSelectedContinent(continent);
  };

  const filteredTrips = tripsData.filter(
    (trip) =>
      selectedContinent === "All" || trip.continent === selectedContinent
  );

  return (
    <>
      <div className="about-section-container">
        <div className="body-recent-trips">
          <HeaderWithFilter
            selectedContinent={selectedContinent}
            handleFilterChange={handleFilterChange}
          />

          <div className="cards__wrapper__horizontal custom-wrapper">
            {/* Dynamically render Carditem components */}
            {filteredTrips.length > 0 ? (
              filteredTrips.map((item) => (
                <Carditem
                  key={item.id}
                  src={item.src}
                  text={item.text}
                  label={item.label}
                  bodyText={item.bodyText}
                  disabled={true}
                  onClick={() => openModal(item)}
                />
              ))
            ) : (
              <div className="no-trips-card">
                <p>No trips available for this continent.</p>
              </div>
            )}
          </div>

          {/* {selectedTrip && <Modal trip={selectedTrip} onClose={closeModal} />} */}

          {selectedTrip && (
            <Modal
              trip={selectedTrip}
              selectedPlace={selectedPlace}
              onSelectPlace={handlePlaceSelect}
              onClose={closeModal}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default RecentTrips;
