import React, { useState } from "react";
import Carditem from "./Carditem";
import Modal from "./Modal";
import { data as tripsData } from "./data";

function RecentTrips() {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);

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

  return (
    <>
      <div className="about-section-container">
        <div className="body-recent-trips">
          <div className="header">
            <h1>Recent Trips</h1>
            <p>
              <small>
                You can discover unique destinations and check the prices.
              </small>
            </p>
          </div>

          <div className="cards__wrapper__horizontal custom-wrapper">
            {/* Dynamically render Carditem components */}
            {tripsData.map((item) => (
              <Carditem
                key={item.id}
                src={item.src}
                text={item.text}
                label={item.label}
                bodyText={item.bodyText}
                disabled={true}
                onClick={() => openModal(item)}
              />
            ))}
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
