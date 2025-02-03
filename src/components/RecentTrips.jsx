import React, { useState } from "react";
import Carditem from "./Carditem";
import Modal from "./Modal";

const data = [
  {
    id: 1,
    src: "images/img-9.jpg",
    text: "Trip In Indonesia",
    bodyText:
      "Explore Indonesia, an archipelago with stunning islands and cultural heritage.",
    label: "Adventure",
    bestPlaces: [
      { name: "Bali", image: "images/bali-min.jpg" },
      { name: "Jakarta", image: "images/jakarta-min.jpg" },
      { name: "Yogyakarta", image: "images/yogyakarta-min.jpg" },
      { name: "Komodo Island", image: "images/komodo-islnd-min.jpg" },
      { name: "Lombok", image: "images/lombok-min.jpg" },
    ],
  },
  {
    id: 2,
    src: "images/singapore.jpg",
    text: "Trip In Singapore",
    bodyText:
      "Discover Singapore, a futuristic city-state with vibrant attractions.",
    label: "Luxury",
    bestPlaces: [
      { name: "Marina Bay Sands", image: "images/marina-bay.jpg" },
      { name: "Sentosa Island", image: "images/sentosa-island.jpg" },
      { name: "Gardens by the Bay", image: "images/singapore.jpg" },
    ],
  },
  {
    id: 3,
    src: "images/italy.jpg",
    text: "Trip In Italy",
    bodyText: "Experience Italy, a country of art, history, and gastronomy.",
    label: "Adventure",
    bestPlaces: [
      { name: "Rome", image: "images/rome.jpg" },
      { name: "Venice", image: "images/venice.jpg" },
      { name: "Florence", image: "images/florence.jpg" },
      { name: "Milan", image: "images/milan.jpg" },
      { name: "Naples", image: "images/naples.jpg" },
    ],
  },
  {
    id: 4,
    src: "images/france.jpg",
    text: "Trip In France",
    bodyText: "Fall in love with France, a land of romance and culture.",
    label: "Luxury",
    bestPlaces: [
      { name: "Paris", image: "images/paris.jpg" },
      { name: "Nice", image: "images/nice.jpg" },
      { name: "Lyon", image: "images/lyon.jpg" },
      { name: "Marseille", image: "images/marseille.jpg" },
      { name: "Bordeaux", image: "images/bordeaux.jpg" },
    ],
  },
  {
    id: 5,
    src: "images/japan.jpg",
    text: "Trip In Japan",
    bodyText: "Visit Japan, where tradition meets technology.",
    label: "Adventure",
    bestPlaces: [
      { name: "Tokyo", image: "images/tokyo.jpg" },
      { name: "Kyoto", image: "images/kyoto.jpg" },
      { name: "Osaka", image: "images/osaka.jpg" },
      { name: "Hokkaido", image: "images/hokkaido.jpg" },
      { name: "Hiroshima", image: "images/hiroshima.jpg" },
    ],
  },
  {
    id: 6,
    src: "images/dubai.jpg",
    text: "Trip In Dubai",
    bodyText: "Explore Dubai, the city of skyscrapers and desert adventures.",
    label: "Luxury",
    bestPlaces: [
      { name: "Burj Khalifa", image: "images/burj-khalifa.jpg" },
      { name: "Palm Jumeirah", image: "images/palm-jumeirah.jpg" },
      { name: "Dubai Mall", image: "images/dubai-mall.jpg" },
      { name: "Desert Safari", image: "images/desert-safari.jpg" },
    ],
  },
];

function RecentTrips() {
  const [selectedTrip, setSelectedTrip] = useState(null);

  const handleCardCLick = (trip) => {
    setSelectedTrip(trip);
  };

  const closeModal = () => {
    setSelectedTrip(null);
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
            {data.map((item) => (
              <Carditem
                key={item.id}
                src={item.src}
                text={item.text}
                label={item.label}
                bodyText={item.bodyText}
                disabled={true}
                onClick={() => handleCardCLick(item)}
              />
            ))}
          </div>

          {selectedTrip && <Modal trip={selectedTrip} onClose={closeModal} />}
        </div>
      </div>
    </>
  );
}

export default RecentTrips;
