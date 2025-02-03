import React, { useState } from "react";
import { FaAndroid, FaTimes } from "react-icons/fa"; // Import Android icon
import "./FloatingButton.css"; // Import CSS

const FloatingButton = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div
        className={`floating-button ${showPopup ? "button-active" : ""}`}
        onClick={() => setShowPopup((prev) => !prev)}
      >
        {showPopup ? <FaTimes /> : <FaAndroid className="icon" />}
        <span>{showPopup ? "" : "Save more on App!"}</span>
      </div>

        <div className={`popup-overlay ${showPopup ? "show" : ""}`}>
          <div className="popup-content">
            <h2>Save 10% on your 1st app booking!</h2>
            <p>Just scan the QR code for instant savings</p>
            <img
              src="/images/Qrcode_wikipedia.jpg"
              alt="QR Code"
              className="qr-code"
            />
          </div>
        </div>
      
    </>
  );
};

export default FloatingButton;
