import React from "react";
import "./Modal.css";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Modal({ trip, onClose }) {
  const [isClosing, setIsClosing] = useState(false);

  // Fade-out effect before closing modal
  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(onClose, 300);
      return () => clearTimeout(timer);
    }
  }, [isClosing, onClose]);

  const handleClose = () => {
    setIsClosing(true);
  };

  return (
    <>
      <div className={`modal-overlay`} onClick={handleClose}>
        <div
          className={`modal-content ${isClosing ? "fade-out" : "fade-in"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="close-btn" onClick={handleClose}>
            &times;
          </button>
          {/* <img src={trip.src} alt={trip.txt} className="modal-image" /> */}
          <div className="modal-text">
            <h2>{trip.text}</h2>
            <p>{trip.bodyText}</p>
            <h3>Best places to visit:</h3>

            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="carousel-container"
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
