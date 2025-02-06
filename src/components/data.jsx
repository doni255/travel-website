export const data = [
  {
    id: 1,
    src: "images/img-9.jpg",
    text: "Trip In Indonesia",
    bodyText:
      "Explore Indonesia, an archipelago with stunning islands and cultural heritage.",
    label: "Adventure",
    continent: "Asia",
    countryInfo: {
      country: "Indonesia",
      flag: "https://flagcdn.com/id.svg",
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
    continent: "Asia",
    countryInfo: {
      country: "Singapore",
      flag: "https://flagcdn.com/sg.svg",
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
      {
        name: "Marina Bay Sands",
        image: "images/marina-bay.jpg",
        accommodation: [
          "🏨 Marina Bay Sands Hotel",
          "🏨 The Ritz-Carlton Millenia Singapore",
        ],
        travelCosts: {
          flight: "$500 - $1,200",
          accommodation: "$150 - $500 per night",
          food: "$20 - $100 per meal",
          transport: "$5 - $30 (Taxis, MRT)",
        },
        activities: [
          "🏙️ Enjoy the Marina Bay Sands SkyPark",
          "🛍️ Shop at The Shoppes",
          "🍽️ Dine at Celebrity Chef Restaurants",
        ],
        reviews: [
          {
            name: "David",
            country: "🇺🇸",
            comment:
              "Marina Bay Sands is a must-visit, the views are incredible!",
          },
        ],
      },
      {
        name: "Sentosa Island",
        image: "images/sentosa-island.jpg",
        accommodation: ["🏨 Resorts World Sentosa"],
        travelCosts: {
          flight: "$500 - $1,200",
          accommodation: "$100 - $400 per night",
          food: "$15 - $50 per meal",
          transport: "$5 - $30 (Taxis, Cable Car)",
        },
        activities: [
          "🏖️ Relax at Siloso Beach",
          "🎢 Visit Universal Studios Singapore",
          "🐠 Explore S.E.A. Aquarium",
        ],
        reviews: [
          {
            name: "Sophie",
            country: "🇬🇧",
            comment: "Sentosa Island is a fun-filled paradise for families!",
          },
        ],
      },
      {
        name: "Gardens by the Bay",
        image: "images/singapore.jpg",
        accommodation: ["🏨 Marina Bay Sands Hotel"],
        travelCosts: {
          flight: "$500 - $1,200",
          accommodation: "$150 - $500 per night",
          food: "$20 - $100 per meal",
          transport: "$5 - $30 (Taxis, MRT)",
        },
        activities: [
          "🌳 Walk through the Supertree Grove",
          "🌺 Visit the Flower Dome & Cloud Forest",
          "🌼 See the OCBC Skyway",
        ],
        reviews: [
          {
            name: "Emma",
            country: "🇬🇧",
            comment: "Gardens by the Bay is a futuristic marvel!",
          },
        ],
      },
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
    continent: "Europe",
    countryInfo: {
      country: "Italy",
      flag: "https://flagcdn.com/it.svg",
      capital: "Rome",
      language: "Italian",
      currency: "EUR (Euro)",
      bestTimeToVisit: "April - June, September - October",
      recommendedDuration: "7-14 days",
    },
    bestPlaces: [
      {
        name: "Rome",
        image: "images/rome.jpg",
        accommodation: [
          "🏨 Hotel Artemide",
          "🏨 Hotel Hassler Roma",
          "🏨 The St. Regis Rome",
        ],
        travelCosts: {
          flight: "$500 - $1,200",
          accommodation: "$70 - $300 per night",
          food: "$10 - $50 per meal",
          transport: "$2 - $20 (Metro, Taxis)",
        },
        activities: [
          "🏛️ Visit the Colosseum & Roman Forum",
          "🌇 Explore the Vatican City",
          "🍝 Taste authentic Italian pasta",
        ],
        reviews: [
          {
            name: "Sophia",
            country: "🇬🇧",
            comment: "Rome’s history and architecture are breathtaking!",
          },
        ],
      },
      {
        name: "Venice",
        image: "images/venice.jpg",
        accommodation: [
          "🏨 Hotel Danieli",
          "🏨 Gritti Palace",
          "🏨 Belmond Hotel Cipriani",
        ],
        travelCosts: {
          flight: "$500 - $1,200",
          accommodation: "$100 - $400 per night",
          food: "$15 - $50 per meal",
          transport: "$5 - $30 (Water Taxis, Vaporetto)",
        },
        activities: [
          "🚤 Gondola ride on the Grand Canal",
          "🎭 Attend a Venetian opera",
          "🍷 Taste Veneto wines",
        ],
        reviews: [
          {
            name: "David",
            country: "🇺🇸",
            comment: "Venice is a unique city, like no other in the world!",
          },
        ],
      },
      {
        name: "Florence",
        image: "images/florence.jpg",
        accommodation: [
          "🏨 Four Seasons Hotel Firenze",
          "🏨 Hotel Lungarno",
          "🏨 Portrait Firenze",
        ],
        travelCosts: {
          flight: "$500 - $1,200",
          accommodation: "$80 - $300 per night",
          food: "$10 - $50 per meal",
          transport: "$2 - $20 (Buses, Taxis)",
        },
        activities: [
          "🏛️ Visit the Uffizi Gallery",
          "🍷 Taste Tuscan wines",
          "🍝 Try traditional Florentine cuisine",
        ],
        reviews: [
          {
            name: "Alice",
            country: "🇺🇸",
            comment: "Florence’s art and food are a dream come true!",
          },
        ],
      },
      {
        name: "Milan",
        image: "images/milan.jpg",
        accommodation: [
          "🏨 Armani Hotel Milano",
          "🏨 Park Hyatt Milano",
          "🏨 Bulgari Hotel Milano",
        ],
        travelCosts: {
          flight: "$500 - $1,200",
          accommodation: "$100 - $400 per night",
          food: "$15 - $50 per meal",
          transport: "$5 - $30 (Metro, Taxis)",
        },
        activities: [
          "🛍️ Shop at Galleria Vittorio Emanuele II",
          "🏛️ Visit the Duomo di Milano",
          "🍝 Try Milanese risotto",
        ],
        reviews: [
          {
            name: "Kenji",
            country: "🇯🇵",
            comment: "Milan’s fashion and architecture are world-class!",
          },
        ],
      },
      {
        name: "Naples",
        image: "images/naples.jpg",
        accommodation: [
          "🏨 Grand Hotel Parker's",
          "🏨 Romeo Hotel",
          "🏨 Grand Hotel Vesuvio",
        ],
        travelCosts: {
          flight: "$500 - $1,200",
          accommodation: "$50 - $200 per night",
          food: "$10 - $50 per meal",
          transport: "$2 - $20 (Metro, Taxis)",
        },
        activities: [
          "🏛️ Visit the ruins of Pompeii",
          "🍕 Try authentic Neapolitan pizza",
          "🏖️ Relax on the Amalfi Coast",
        ],
        reviews: [
          {
            name: "Diana",
            country: "🇦🇺",
            comment: "Naples has the best pizza in the world!",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    src: "images/france.jpg",
    text: "Trip In France",
    bodyText: "Fall in love with France, a land of romance and culture.",
    label: "Luxury",
    continent: "Europe",
    countryInfo: {
      country: "France",
      flag: "https://flagcdn.com/fr.svg",
      capital: "Paris",
      language: "French",
      currency: "EUR (Euro)",
      bestTimeToVisit: "April - June, September - November",
      recommendedDuration: "5-12 days",
    },
    bestPlaces: [
      {
        name: "Paris",
        image: "images/paris.jpg",
        accommodation: [
          "🏨 Four Seasons Hotel George V",
          "🏨 Le Meurice",
          "🏨 The Ritz Paris",
        ],
        travelCosts: {
          flight: "$500 - $1,200",
          accommodation: "$150 - $500 per night",
          food: "$20 - $100 per meal",
          transport: "$5 - $30 (Metro, Taxis)",
        },
        activities: [
          "🗼 Visit the Eiffel Tower",
          "🎨 Explore the Louvre Museum",
          "🥐 Taste French pastries",
        ],
        reviews: [
          {
            name: "David",
            country: "🇺🇸",
            comment: "Paris is the most romantic city in the world!",
          },
        ],
      },
      {
        name: "Nice",
        image: "images/nice.jpg",
        accommodation: [
          "🏨 Hotel Negresco",
          "🏨 Hyatt Regency Nice Palais de la Méditerranée",
          "🏨 Le Méridien Nice",
        ],
        travelCosts: {
          flight: "$500 - $1,200",
          accommodation: "$100 - $400 per night",
          food: "$15 - $50 per meal",
          transport: "$5 - $30 (Trams, Taxis)",
        },
        activities: [
          "🏖️ Relax on the French Riviera",
          "🏰 Explore the Castle Hill",
          "🍷 Taste local wines",
        ],
        reviews: [
          {
            name: "Sophie",
            country: "🇬🇧",
            comment: "Nice has the best beaches and views!",
          },
        ],
      },
      {
        name: "Lyon",
        image: "images/lyon.jpg",
        accommodation: [
          "🏨 Villa Maïa",
          "🏨 Cour des Loges",
          "🏨 Hotel Carlton Lyon",
        ],
        travelCosts: {
          flight: "$500 - $1,200",
          accommodation: "$80 - $300 per night",
          food: "$10 - $50 per meal",
          transport: "$2 - $20 (Metro, Taxis)",
        },
        activities: [
          "🍷 Taste Beaujolais wines",
          "🍲 Try Lyonnaise cuisine",
          "🏛️ Visit the Basilica of Notre-Dame de Fourvière",
        ],
        reviews: [
          {
            name: "Alice",
            country: "🇺🇸",
            comment: "Lyon is a food lover’s paradise!",
          },
        ],
      },
      {
        name: "Marseille",
        image: "images/marseille.jpg",
        accommodation: [
          "🏨 InterContinental Marseille - Hotel Dieu",
          "🏨 Sofitel Marseille Vieux-Port",
          "🏨 Radisson Blu Hotel Marseille Vieux Port",
        ],
        travelCosts: {
          flight: "$500 - $1,200",
          accommodation: "$50 - $200 per night",
          food: "$10 - $50 per meal",
          transport: "$2 - $20 (Metro, Taxis)",
        },
        activities: [
          "🏖️ Relax on Marseille’s beaches",
          "🏛️ Visit the Old Port",
          "🍲 Try Bouillabaisse seafood stew",
        ],
        reviews: [
          {
            name: "Kenji",
            country: "🇯🇵",
            comment: "Marseille’s seafood is the best I’ve ever tasted!",
          },
        ],
      },
      {
        name: "Bordeaux",
        image: "images/bordeaux.jpg",
        accommodation: [
          "🏨 InterContinental Bordeaux Le Grand Hotel",
          "🏨 Yndo Hotel",
          "🏨 Le Boutique Hotel Bordeaux",
        ],
        travelCosts: {
          flight: "$500 - $1,200",
          accommodation: "$80 - $300 per night",
          food: "$10 - $50 per meal",
          transport: "$2 - $20 (Trams, Taxis)",
        },
        activities: [
          "🍷 Taste Bordeaux wines",
          "🧀 Try local cheese platters",
          "🏛️ Visit the Cité du Vin museum",
        ],
        reviews: [
          {
            name: "Diana",
            country: "🇦🇺",
            comment: "Bordeaux’s wine tours are a must-do experience!",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    src: "images/japan.jpg",
    text: "Trip In Japan",
    bodyText: "Visit Japan, where tradition meets technology.",
    label: "Adventure",
    continent: "Asia",
    countryInfo: {
      country: "Japan",
      flag: "https://flagcdn.com/jp.svg",
      capital: "Tokyo",
      language: "Japanese",
      currency: "JPY (Yen)",
      bestTimeToVisit: "March - May, September - November",
      recommendedDuration: "7-14 days",
    },
    bestPlaces: [
      {
        name: "Tokyo",
        image: "images/tokyo.jpg",
        accommodation: [
          "🏨 The Ritz-Carlton Tokyo",
          "🏨 Park Hyatt Tokyo",
          "🏨 Mandarin Oriental Tokyo",
        ],
        travelCosts: {
          flight: "$500 - $1,200",
          accommodation: "$150 - $500 per night",
          food: "$20 - $100 per meal",
          transport: "$5 - $30 (Metro, Taxis)",
        },
        activities: [
          "🏯 Visit the historic Senso-ji Temple",
          "🍣 Try authentic sushi at Tsukiji Fish Market",
          "🏙️ Explore the bustling Shinjuku district",
        ],
        reviews: [
          {
            name: "David",
            country: "🇺🇸",
            comment: "Tokyo is a city of endless discoveries!",
          },
        ],
      },
      {
        name: "Kyoto",
        image: "images/kyoto.jpg",
        accommodation: [
          "🏨 The Ritz-Carlton Kyoto",
          "🏨 Suiran, a Luxury Collection Hotel",
          "🏨 Hotel Granvia Kyoto",
        ],
        travelCosts: {
          flight: "$500 - $1,200",
          accommodation: "$150 - $500 per night",
          food: "$20 - $100 per meal",
          transport: "$5 - $30 (Metro, Taxis)",
        },
        activities: [
          "⛩️ Visit the Fushimi Inari Shrine",
          "🍵 Experience a traditional tea ceremony",
          "🌸 See the cherry blossoms in spring",
        ],
        reviews: [
          {
            name: "Sophie",
            country: "🇬🇧",
            comment: "Kyoto’s temples and gardens are serene and beautiful!",
          },
        ],
      },
      {
        name: "Osaka",
        image: "images/osaka.jpg",
        accommodation: [
          "🏨 The St. Regis Osaka",
          "🏨 Conrad Osaka",
          "🏨 InterContinental Osaka",
        ],
        travelCosts: {
          flight: "$500 - $1,200",
          accommodation: "$100 - $400 per night",
          food: "$15 - $50 per meal",
          transport: "$5 - $30 (Metro, Taxis)",
        },
        activities: [
          "🏯 Visit Osaka Castle",
          "🎡 Explore Universal Studios Japan",
          "🍣 Try street food at Dotonbori",
        ],
        reviews: [
          {
            name: "Alice",
            country: "🇺🇸",
            comment: "Osaka’s food and nightlife are unforgettable!",
          },
        ],
      },
      {
        name: "Hokkaido",
        image: "images/hokkaido.jpg",
        accommodation: [
          "🏨 The Kiroro, a Tribute Portfolio Hotel",
          "🏨 Hilton Niseko Village",
          "🏨 The Green Leaf Niseko Village",
        ],
        travelCosts: {
          flight: "$500 - $1,200",
          accommodation: "$80 - $300 per night",
          food: "$10 - $50 per meal",
          transport: "$2 - $20 (Trains, Buses)",
        },
        activities: [
          "🏔️ Skiing in Niseko",
          "🍶 Visit Otaru Canal",
          "🍜 Try Hokkaido Ramen",
        ],
        reviews: [
          {
            name: "Kenji",
            country: "🇯🇵",
            comment: "Hokkaido’s snow and food are amazing!",
          },
        ],
      },
      {
        name: "Hiroshima",
        image: "images/hiroshima.jpg",
        accommodation: [
          "🏨 Sheraton Grand Hiroshima Hotel",
          "🏨 RIHGA Royal Hotel Hiroshima",
        ],
        travelCosts: {
          flight: "$500 - $1,200",
          accommodation: "$50 - $200 per night",
          food: "$10 - $50 per meal",
          transport: "$2 - $20 (Trains, Buses)",
        },
        activities: [
          "🏯 Visit the Hiroshima Peace Memorial",
          "🎎 Explore Miyajima Island",
          "🍱 Try Hiroshima-style Okonomiyaki",
        ],
        reviews: [
          {
            name: "Diana",
            country: "🇦🇺",
            comment:
              "Hiroshima’s history and culture are moving and inspiring!",
          },
          {
            name: "Emma",
            country: "🇬🇧",
            comment:
              "Miyajima Island’s floating torii gate is a must-see natural wonder!",
          },
          {
            name: "Jake",
            country: "🇺🇸",
            comment:
              "Hiroshima’s food is delicious, especially the Okonomiyaki!",
          },
          {
            name: "Sophia",
            country: "🇬🇧",
            comment:
              "Hiroshima’s Peace Memorial is a powerful reminder of history!",
          },
          {
            name: "Alice",
            country: "🇺🇸",
            comment: "Miyajima Island’s deer and temples are magical!",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    src: "images/dubai.jpg",
    text: "Trip In Dubai",
    bodyText: "Explore Dubai, the city of skyscrapers and desert adventures.",
    label: "Luxury",
    continent: "Asia",
    countryInfo: {
      country: "United Arab Emirates",
      flag: "https://flagcdn.com/ae.svg",
      capital: "Abu Dhabi",
      language: "Arabic",
      currency: "AED (Dirham)",
      bestTimeToVisit: "November - March (Cool Season)",
      recommendedDuration: "5-10 days",
    },
    bestPlaces: [
      {
        name: "Burj Khalifa",
        image: "images/burj-khalifa.jpg",
        accommodation: [
          "🏨 Armani Hotel Dubai",
          "🏨 Address Downtown",
          "🏨 The Ritz-Carlton",
        ],
        travelCosts: {
          flight: "$500 - $1,200",
          accommodation: "$150 - $500 per night",
          food: "$20 - $100 per meal",
          transport: "$5 - $30 (Taxis, Metro)",
        },
        activities: [
          "🏙️ Visit the Burj Khalifa Observation Deck",
          "🛍️ Shop at The Dubai Mall",
          "🍽️ Dine at At.mosphere Restaurant",
        ],
        reviews: [
          {
            name: "David",
            country: "🇺🇸",
            comment: "Burj Khalifa’s views are breathtaking, a must-see!",
          },
        ],
      },
      {
        name: "Palm Jumeirah",
        image: "images/palm-jumeirah.jpg",
        accommodation: [
          "🏨 Atlantis The Palm",
          "🏨 Jumeirah Zabeel Saray",
          "🏨 One&Only The Palm",
        ],
        travelCosts: {
          flight: "$500 - $1,200",
          accommodation: "$200 - $600 per night",
          food: "$30 - $150 per meal",
          transport: "$5 - $30 (Taxis, Monorail)",
        },
        activities: [
          "🏖️ Relax on the private beaches",
          "🐬 Visit Dolphin Bay",
          "🍹 Enjoy sunset views at The Observatory",
        ],
        reviews: [
          {
            name: "Sophie",
            country: "🇬🇧",
            comment: "Palm Jumeirah’s luxury resorts are a dream come true!",
          },
        ],
      },
      {
        name: "Dubai Mall",
        image: "images/dubai-mall.jpg",
        accommodation: [
          "🏨 Address Dubai Mall",
          "🏨 The Address Boulevard",
          "🏨 Armani Hotel Dubai",
        ],
        travelCosts: {
          flight: "$500 - $1,200",
          accommodation: "$150 - $500 per night",
          food: "$20 - $100 per meal",
          transport: "$5 - $30 (Taxis, Metro)",
        },
        activities: [
          "🛍️ Shop at luxury boutiques",
          "🍽️ Dine at world-class restaurants",
          "🎥 Watch movies at Reel Cinemas",
        ],
        reviews: [
          {
            name: "Emma",
            country: "🇬🇧",
            comment: "Dubai Mall is a shopper’s paradise with endless options!",
          },
        ],
      },
      {
        name: "Desert Safari",
        image: "images/desert-safari.jpg",
        accommodation: ["🏜️ Desert Safari Dubai", "🏜️ Platinum Heritage"],
        travelCosts: {
          flight: "$500 - $1,200",
          accommodation: "$100 - $400 per night",
          food: "$20 - $100 per meal",
          transport: "$10 - $50 (4x4 SUVs, Camels)",
        },
        activities: [
          "🐪 Camel riding in the desert",
          "🏜️ Dune bashing in a 4x4 SUV",
          "🌅 Sunset views and traditional Bedouin dinner",
        ],
        reviews: [
          {
            name: "David",
            country: "🇺🇸",
            comment: "Desert Safari was an unforgettable adventure!",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    src: "images/USA.jpg",
    text: "Trip In USA",
    bodyText: "Experience the diverse culture and landscapes of the USA.",
    label: "Urban",
    continent: "America", // ✅ Add Continent Here
    countryInfo: {
      country: "United States",
      flag: "https://flagcdn.com/us.svg",
      capital: "Washington D.C.",
      language: "English",
      currency: "USD ($)",
      bestTimeToVisit: "Spring & Fall",
      recommendedDuration: "10-20 days",
    },
    bestPlaces: [
      {
        name: "New York",
        image: "images/newyork.jpg",
        accommodation: [
          "🏨 The Plaza Hotel",
          "🏨 The Ritz-Carlton New York",
          "🏨 The St. Regis New York",
        ],
        travelCosts: {
          flight: "$300 - $800",
          accommodation: "$150 - $500 per night",
          food: "$20 - $100 per meal",
          transport: "$5 - $30 (Subway, Taxis)",
        },
        activities: [
          "🗽 Visit the Statue of Liberty",
          "🎭 Watch a Broadway show",
          "🍎 Explore Central Park",
        ],
        reviews: [
          {
            name: "David",
            country: "🇺🇸",
            comment: "New York is the city that never sleeps, full of life!",
          },
          {
            name: "Sophie",
            country: "🇬🇧",
            comment: "Central Park is a peaceful oasis in the bustling city!",
          },
        ],
      },
      {
        name: "Los Angeles",
        image: "images/los-angales.jpg",
        accommodation: [
          "🏨 The Ritz-Carlton Los Angeles",
          "🏨 Waldorf Astoria Beverly Hills",
          "🏨 The Peninsula Beverly Hills",
        ],
        travelCosts: {
          flight: "$300 - $800",
          accommodation: "$200 - $600 per night",
          food: "$30 - $150 per meal",
          transport: "$5 - $30 (Metro, Taxis)",
        },
        activities: [
          "🌴 Relax on Santa Monica Beach",
          "🎬 Visit Hollywood Walk of Fame",
          "🎢 Explore Universal Studios Hollywood",
        ],
        reviews: [
          {
            name: "Sophie",
            country: "🇬🇧",
            comment: "Los Angeles is the entertainment capital of the world!",
          },
          {
            name: "David",
            country: "🇺🇸",
            comment: "Santa Monica Beach is the perfect place to unwind!",
          },
        ],
      },
    ],
  },
  
];
