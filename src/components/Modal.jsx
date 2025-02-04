import React, { useState, useEffect } from "react";
import "./Modal.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Modal({ trip, onClose, selectedPlace, onSelectPlace }) {
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Controls mounting
  const [isOpening, setIsOpening] = useState(false); // Triggers fade-in effect

  // Delay modal appearance for fade-in effect
  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => setIsOpening(true), 10); // Slight delay to trigger animation
  }, []);

  const handleSlideChange = (index) => {
    const newPlace = trip.bestPlaces[index];
    if (newPlace) {
      console.log("Slide changed to:", newPlace.name);
      onSelectPlace(newPlace); // Update the selected place
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 300); // Ensure animation completes before removing modal
  };

  if (!isVisible) return null; // Prevents render after fade-out

  return (
    <div
      className={`modal-overlay ${isOpening ? "show" : ""} ${
        isClosing ? "hide" : ""
      }`}
      onClick={handleClose}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={handleClose}>
          &times;
        </button>

        {/* Destination Overview */}
        <div className="modal-text">
          <h2>
            {trip.text} {trip.countryInfo?.flag}
          </h2>
          <p>{trip.bodyText}</p>
        </div>

        {/* Best Places Carousel */}
        <h3>📍 Best Places to Visit:</h3>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          slideToClickedSlide={true} // Enables clicking on the slide itself
          preventClicksPropagation={false} // Allows clicking on the image
          className="carousel-container"
          onSlideChange={(swiper) => handleSlideChange(swiper.activeIndex)}
        >
          {trip.bestPlaces.map((place, index) => (
            <SwiperSlide key={index}>
              <div className="carousel-slide">
                <img
                  src={place.image}
                  alt={place.name}
                  className="carousel-image"
                />
                <div className="carousel-text-wrapper">
                  <p className="carousel-text">{place.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Selected Place Details */}
        {selectedPlace && (
          <div className="selected-place-container">
            <h3>🏡 Accommodation in {selectedPlace.name}:</h3>
            <div className="accommodation-travel-container">
              {/* Accommodation Section */}
              <div className="accommodation-list">
                <ul>
                  {selectedPlace.accommodation?.map((hotel, index) => (
                    <li key={index}>{hotel}</li>
                  ))}
                </ul>
              </div>

              {/* Travel Costs Section */}
              <div className="travel-costs">
                <ul>
                  <li>
                    <strong>✈️ Flight:</strong>{" "}
                    {selectedPlace.travelCosts?.flight}
                  </li>
                  <li>
                    <strong>🏨 Accommodation:</strong>{" "}
                    {selectedPlace.travelCosts?.accommodation}
                  </li>
                  <li>
                    <strong>🍽️ Food:</strong> {selectedPlace.travelCosts?.food}
                  </li>
                  <li>
                    <strong>🚕 Transport:</strong>{" "}
                    {selectedPlace.travelCosts?.transport}
                  </li>
                </ul>
              </div>
            </div>

            {/* Activities Section */}
            <h3>🎯 Top Activities in {selectedPlace.name}:</h3>
            <div className="activities-container">
              <ul>
                {selectedPlace.activities?.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>

            {/* Reviews Section */}
            <h3>⭐ Reviews for {selectedPlace.name}:</h3>
            <div className="reviews-container">
              {selectedPlace.reviews?.map((review, index) => (
                <div key={index} className="review">
                  <p>
                    <strong>
                      {review.name} {review.country}
                    </strong>
                  </p>
                  <p>"{review.comment}"</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
