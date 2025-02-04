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
    countryInfo: {
      country: "Indonesia",
      flag: "🇮🇩",
      capital: "Jakarta",
      language: "Indonesian",
      currency: "IDR (Rupiah)",
      bestTimeToVisit: "April - October (Dry Season)",
      recommendedDuration: "7-14 days",
    },
    travelCosts: {
      flight: "$500 - $1,000 (Round Trip)",
      accommodation: "$30 - $150 per night",
      food: "$5 - $25 per meal",
      transport: "$2 - $20 (Taxis, Scooters, Local Buses)",
    },
    bestPlaces: [
      {
        name: "Bali",
        image: "images/bali-min.jpg",
        accommodation: [
          "🏨 Bali Resort & Spa",
          "🏡 Ubud Jungle Villas",
          "🏖️ Kuta Beach Hotel",
        ],
        travelCosts: {
          flight: "$400 - $900",
          accommodation: "$50 - $300 per night",
          food: "$10 - $50 per meal",
          transport: "$5 - $30 (Taxis, Scooters)",
        },
        activities: [
          "🏝️ Relax at Bali’s famous beaches",
          "🌿 Visit the Ubud Monkey Forest",
          "🧘 Try a Yoga retreat in Ubud",
          "🏄 Surfing at Kuta Beach",
        ],
        reviews: [
          {
            name: "Alice",
            country: "🇺🇸",
            comment: "Bali is paradise! The beaches and food are amazing.",
          },
          {
            name: "Kenji",
            country: "🇯🇵",
            comment: "Ubud’s jungle resorts are the best place to relax.",
          },
        ],
      },
      {
        name: "Jakarta",
        image: "images/jakarta-min.jpg",
        accommodation: [
          "🌆 Jakarta Grand Hyatt",
          "🏨 Mandarin Oriental Jakarta",
        ],
        travelCosts: {
          flight: "$300 - $800",
          accommodation: "$60 - $200 per night",
          food: "$5 - $40 per meal",
          transport: "$2 - $20 (Metro, Taxis)",
        },
        activities: [
          "🏛️ Visit the National Monument",
          "🛍️ Shop at Grand Indonesia Mall",
          "🍜 Try street food at Glodok",
        ],
        reviews: [
          {
            name: "Sophia",
            country: "🇬🇧",
            comment: "Jakarta is vibrant, full of history and modern culture!",
          },
        ],
      },
      {
        name: "Yogyakarta",
        image: "images/yogyakarta-min.jpg",
        accommodation: ["🏯 Phoenix Hotel", "🏕️ Greenhost Boutique Hotel"],
        travelCosts: {
          flight: "$250 - $700",
          accommodation: "$40 - $150 per night",
          food: "$5 - $30 per meal",
          transport: "$3 - $20 (Becak, Taxis)",
        },
        activities: [
          "🏛️ Explore Borobudur Temple",
          "🛕 Visit Prambanan Temple",
          "🎭 Watch a traditional Ramayana dance",
        ],
        reviews: [
          {
            name: "Diana",
            country: "🇦🇺",
            comment: "Borobudur was stunning, an unforgettable experience!",
          },
        ],
      },
      {
        name: "Komodo Island",
        image: "images/komodo-islnd-min.jpg",
        accommodation: ["⛵ Komodo Resort", "🏝️ Angel Island Eco Resort"],
        travelCosts: {
          flight: "$500 - $1,200",
          accommodation: "$80 - $400 per night",
          food: "$10 - $50 per meal",
          transport: "$20 - $100 (Boat tours)",
        },
        activities: [
          "🐉 See the legendary Komodo Dragons",
          "🌊 Snorkeling in Pink Beach",
          "🚤 Take a boat tour to Padar Island",
        ],
        reviews: [
          {
            name: "Jake",
            country: "🇺🇸",
            comment: "Seeing Komodo dragons up close was surreal!",
          },
        ],
      },
      {
        name: "Lombok",
        image: "images/lombok-min.jpg",
        accommodation: ["🏖️ Katamaran Resort", "🌄 Rinjani Lodge"],
        travelCosts: {
          flight: "$400 - $900",
          accommodation: "$50 - $200 per night",
          food: "$8 - $40 per meal",
          transport: "$5 - $30 (Scooters, Taxis)",
        },
        activities: [
          "🌊 Surf at Kuta Lombok",
          "🏞️ Hike Mount Rinjani",
          "🐠 Dive in the Gili Islands",
        ],
        reviews: [
          {
            name: "Emma",
            country: "🇬🇧",
            comment: "Gili Islands have the best diving spots!",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    src: "images/singapore.jpg",
    text: "Trip In Singapore",
    bodyText:
      "Discover Singapore, a futuristic city-state with vibrant attractions.",
    label: "Luxury",
    countryInfo: {
      country: "Singapore",
      flag: "🇸🇬",
      capital: "Singapore",
      language: "English, Mandarin, Malay, Tamil",
      currency: "SGD (Singapore Dollar)",
      bestTimeToVisit: "February - April (Pleasant Weather)",
      recommendedDuration: "3-7 days",
    },
    travelCosts: {
      flight: "$400 - $1,200 (Round Trip)",
      accommodation: "$50 - $500 per night",
      food: "$10 - $50 per meal",
      transport: "$2 - $20 (MRT, Taxis, Buses)",
    },
    bestPlaces: [
      { name: "Marina Bay Sands", image: "images/marina-bay.jpg" },
      { name: "Sentosa Island", image: "images/sentosa-island.jpg" },
      { name: "Gardens by the Bay", image: "images/singapore.jpg" },
    ],
    activities: [
      "🌆 Enjoy the Marina Bay Sands SkyPark",
      "🦁 Visit the Merlion & Clarke Quay",
      "🌳 Walk through Gardens by the Bay",
      "🎡 Ride the Singapore Flyer",
      "🛍️ Shop on Orchard Road",
    ],
  },
  {
    id: 3,
    src: "images/italy.jpg",
    text: "Trip In Italy",
    bodyText: "Experience Italy, a country of art, history, and gastronomy.",
    label: "Adventure",
    countryInfo: {
      country: "Italy",
      flag: "🇮🇹",
      capital: "Rome",
      language: "Italian",
      currency: "EUR (Euro)",
      bestTimeToVisit: "April - June, September - October",
      recommendedDuration: "7-14 days",
    },
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
    countryInfo: {
      country: "France",
      flag: "🇫🇷",
      capital: "Paris",
      language: "French",
      currency: "EUR (Euro)",
      bestTimeToVisit: "April - June, September - November",
      recommendedDuration: "5-12 days",
    },
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
    countryInfo: {
      country: "Japan",
      flag: "🇯🇵",
      capital: "Tokyo",
      language: "Japanese",
      currency: "JPY (Yen)",
      bestTimeToVisit: "March - May, September - November",
      recommendedDuration: "7-14 days",
    },
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
    countryInfo: {
      country: "United Arab Emirates",
      flag: "🇦🇪",
      capital: "Abu Dhabi",
      language: "Arabic",
      currency: "AED (Dirham)",
      bestTimeToVisit: "November - March (Cool Season)",
      recommendedDuration: "5-10 days",
    },
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
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleCardCLick = (trip) => {
    setSelectedTrip(trip);
    setSelectedPlace(trip.bestPlaces[0]);
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
