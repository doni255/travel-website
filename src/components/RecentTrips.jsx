import React, { useEffect, useState } from "react";
import Carditem from "./Carditem";
import Modal from "./Modal";
import { data as trips } from "./data";
import HeaderWithFilter from "./HeaderWithFilter";

function RecentTrips() {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedContinent, setSelectedContinent] = useState("All");
  const [tripsData, setTripsData] = useState([]);

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setTripsData(trips);
    });
  }, []);

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
      <div className="body-recent-trips">
        <HeaderWithFilter
          selectedContinent={selectedContinent}
          handleFilterChange={handleFilterChange}
        />

        <div className="cards">
          <div className="cards__container">
            <div className="cards__wrapper">
              {filteredTrips.length > 0 ? (
                <ul
                  className={`cards__items ${
                    filteredTrips.length <= 2 ? "few-cards" : ""
                  }`}
                >
                  {" "}
                  {/* ✅ Wrap all list items inside a single <ul> */}
                  {filteredTrips.map((item) => (
                    <Carditem
                      key={item.id} // ✅ Now `key` is applied directly to the mapped component
                      src={item.src}
                      text={item.text}
                      label={item.label}
                      bodyText={item.bodyText}
                      disabled={true}
                      onClick={() => openModal(item)}
                    />
                  ))}
                </ul>
              ) : (
                <div className="no-trips-card">
                  <p>No trips available for this continent.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {selectedTrip && (
          <Modal
            trip={selectedTrip}
            selectedPlace={selectedPlace}
            onSelectPlace={handlePlaceSelect}
            onClose={closeModal}
          />
        )}
      </div>
    </>
  );
}

export default RecentTrips;
