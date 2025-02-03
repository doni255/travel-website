import React from "react";
import Carditem from "./Carditem";
import "./Card.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out theseEPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Carditem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
              disabled={false}
            />
            <Carditem
              src="images/img-2.jpg"
              text="Travel through the islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
              disabled={false} // Link is enabled
            />
          </ul>
          <ul className="cards__items">
            <Carditem
              src="images/img-3.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
              disabled={false} // Link is enabled
            />
            <Carditem
              src="images/img-1.jpg"
              text="Travel through the islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
              disabled={false} // Link is enabled
            />
            <Carditem
              src="images/img-4.jpg"
              text="Travel through the islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
              disabled={false} // Link is enabled
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
