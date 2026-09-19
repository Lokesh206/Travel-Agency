// ==========================================================================
// TRAVEL INDIA - DATA STORE
// Inspired by Mana Yatri & Namma Yatri (Open Mobility Network - Bharat)
// ==========================================================================

const TRAVEL_DATA = {
  // Available Destinations
  locations: [
    {
      id: "all",
      name: "All India Destinations",
      state: "Bharat",
      shortDescription: "Explore 100% direct-to-driver tours across 25+ cities",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
      totalPackages: 18,
      landmarkHighlight: "India-wide Verified Sarathis"
    },
    {
      id: "hyderabad",
      name: "Hyderabad",
      state: "Telangana",
      tag: "Mana Yatri Heart",
      shortDescription: "City of Pearls, Nizami Palaces, Historic Bazaars & World-Famous Biryani Trails",
      image: "https://images.unsplash.com/photo-1605007493699-ce65834f8a00?auto=format&fit=crop&w=800&q=80",
      totalPackages: 4,
      landmarkHighlight: "Charminar • Golconda • Ramoji • Hussain Sagar",
      popularPickups: ["Banjara Hills", "Hitec City Cyber Towers", "Secunderabad Station", "Begumpet Airport Rd", "Gachibowli", "Charminar Bus Stand"]
    },
    {
      id: "jaipur",
      name: "Jaipur",
      state: "Rajasthan",
      tag: "Royal Heritage",
      shortDescription: "The Pink City: Magnificent Forts, Palaces of the Winds, Rajput Royalties & Color",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
      totalPackages: 3,
      landmarkHighlight: "Hawa Mahal • Amber Palace • Jal Mahal • Nahargarh",
      popularPickups: ["MI Road", "Jaipur Junction Railway Station", "Vaishali Nagar", "Sindhi Camp", "Malviya Nagar", "Amer Road"]
    },
    {
      id: "goa",
      name: "Goa",
      state: "Goa",
      tag: "Coastal Vibe",
      shortDescription: "Sun-kissed Beaches, Portuguese Colonial Forts, Spice Plantations & Serene Rivers",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
      totalPackages: 3,
      landmarkHighlight: "Fort Aguada • Baga & Anjuna • Dudhsagar • Old Goa Churches",
      popularPickups: ["Panaji Bus Stand", "Calangute Beach Circle", "Dabolim Airport", "Madgaon Station", "Candolim", "Vagator"]
    },
    {
      id: "bengaluru",
      name: "Bengaluru",
      state: "Karnataka",
      tag: "Namma Yatri Hub",
      shortDescription: "Silicon Valley of India, Lush Lalbagh Gardens, Bangalore Palace & Nandi Sunrise",
      image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80",
      totalPackages: 2,
      landmarkHighlight: "Lalbagh • Bangalore Palace • Nandi Hills • Indiranagar",
      popularPickups: ["KSR Bengaluru City Station", "Indiranagar 100ft Rd", "Koramangala Sony Signal", "Whitefield ITPL", "MG Road Metro", "Hebbal Flyover"]
    },
    {
      id: "kerala",
      name: "Kerala (Kochi & Munnar)",
      state: "Kerala",
      tag: "God's Own Country",
      shortDescription: "Serene Backwaters, Misty Munnar Tea Estates, Chinese Fishing Nets & Spice Valleys",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
      totalPackages: 2,
      landmarkHighlight: "Fort Kochi • Munnar Tea Hills • Alleppey Backwaters • Mattancherry",
      popularPickups: ["Ernakulam South Station", "Fort Kochi Boat Jetty", "Cochin International Airport", "Munnar Town Center"]
    },
    {
      id: "varanasi",
      name: "Varanasi (Kashi)",
      state: "Uttar Pradesh",
      tag: "Spiritual Eternal",
      shortDescription: "The World's Oldest Living City: Sacred Ganga Ghats, Evening Maha Aarti & Sarnath",
      image: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&w=800&q=80",
      totalPackages: 2,
      landmarkHighlight: "Dashashwamedh Ghat • Kashi Vishwanath • Sarnath • Assi Ghat",
      popularPickups: ["Varanasi Cantt Station", "Godowlia Crossing", "Assi Ghat Chowk", "Lal Bahadur Shastri Airport (Babatpur)"]
    },
    {
      id: "delhi-agra",
      name: "Delhi & Agra",
      state: "NCR & UP",
      tag: "Golden Triangle",
      shortDescription: "Mughal Grandeur, Taj Mahal Sunrise, Red Fort, Qutub Minar & Chandni Chowk Food Walks",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
      totalPackages: 2,
      landmarkHighlight: "Taj Mahal • Agra Fort • Qutub Minar • India Gate • Chandni Chowk",
      popularPickups: ["New Delhi Railway Station", "Connaught Place Inner Circle", "Agra Cantt Station", "Indira Gandhi Airport T3", "Noida City Center"]
    }
  ],

  // Tour Packages Catalog
  packages: [
    // --- HYDERABAD PACKAGES ---
    {
      id: "pkg-hyd-01",
      locationId: "hyderabad",
      locationName: "Hyderabad, Telangana",
      title: "Charminar & Nizami Heritage Rickshaw Safari",
      tagline: "Wander ancient royal alleyways, historic mosques, perfumed Ittar lanes & legendary Irani chai spots",
      category: "heritage",
      vehicleType: "Iconic Auto Rickshaw",
      vehicleCategory: "auto",
      capacity: "Up to 3 Guests",
      duration: "Half Day (4.5 Hours)",
      distance: "Approx. 35 Km",
      price: 899,
      originalPrice: 1450,
      saving: 551,
      badge: "🛺 Mana Yatri Bestseller",
      rating: 4.94,
      reviewsCount: 1840,
      image: "https://images.unsplash.com/photo-1605007493699-ce65834f8a00?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Charminar 360° Photo Stop & Clock Tower View",
        "Mecca Masjid historic architecture visit",
        "Laad Bazaar traditional lacquer bangle & pearls bazaar",
        "Authentic Irani Chai + Osmania Biscuit at Nimrah Cafe",
        "Chowmahalla Palace royal grand courtyards"
      ],
      itinerary: [
        { time: "09:00 AM", title: "Doorstep Pickup", desc: "Your verified Sarathi guide arrives at your doorstep/hotel with a sanitized Auto." },
        { time: "09:45 AM", title: "Charminar & Mecca Masjid", desc: "Explore the 1591 AD iconic four minarets and ancient stone architecture." },
        { time: "11:00 AM", title: "Laad Bazaar & Chudi Market Walk", desc: "Experience the vibrant colors of bridal pearls, zardozi embroidery & attar." },
        { time: "12:00 PM", title: "Chowmahalla Palace & Nimrah Cafe", desc: "Nizam's vintage Rolls Royce collection and fresh bakery treats." },
        { time: "01:30 PM", title: "Return Drop-off", desc: "Safe return to your pickup location with memories." }
      ],
      inclusions: [
        "100% Direct Driver Payment (0% Commission cut)",
        "Fuel, Parking & Vehicle Tolls included",
        "Friendly local driver who doubles as heritage storyteller",
        "Flexible stops for photography and local snacks",
        "Live GPS tracking & SOS emergency link"
      ],
      exclusions: ["Monuments entry tickets (₹50 approx)", "Personal food & shopping expenses"]
    },
    {
      id: "pkg-hyd-02",
      locationId: "hyderabad",
      locationName: "Hyderabad, Telangana",
      title: "Golconda Fort & Qutb Shahi Tombs AC Cab Tour",
      tagline: "Acoustic wonder fortress, medieval cannons, Koh-i-Noor diamond vaults & serene dome gardens",
      category: "heritage",
      vehicleType: "AC Sedan (Dzire / Etios)",
      vehicleCategory: "sedan",
      capacity: "Up to 4 Guests",
      duration: "Full Day (7 Hours)",
      distance: "Approx. 65 Km",
      price: 1899,
      originalPrice: 2800,
      saving: 901,
      badge: "⭐ Top Rated Tour",
      rating: 4.91,
      reviewsCount: 1290,
      image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Golconda Fort Acoustic Clapping Portico & Bala Hissar",
        "Qutb Shahi Tombs 7 Royal Domes garden walk",
        "Taramati Baradari historic music amphitheater",
        "Lunch stop at authentic Hyderabadi Dum Biryani restaurant",
        "Durgam Cheruvu Cable-Stayed Bridge scenic drive"
      ],
      itinerary: [
        { time: "09:30 AM", title: "Comfort Pickup", desc: "AC Sedan with professional driver partner arrives at your location." },
        { time: "10:30 AM", title: "Golconda Fort Exploration", desc: "Discover royal armory, acoustics that warn of attacks 1km away, and palace ruins." },
        { time: "01:00 PM", title: "Hyderabadi Dum Biryani Lunch", desc: "Curated stop at renowned local gem (Paradise / Bawarchi / Shah Ghouse)." },
        { time: "02:30 PM", title: "Qutb Shahi Tombs & Gardens", desc: "Stunning Persian, Pashtun and Hindu architectural confluence." },
        { time: "04:30 PM", title: "Sunset at Durgam Cheruvu", desc: "Drive along Hyderabad's landmark hanging bridge overlooking the tech lake." }
      ],
      inclusions: [
        "Full AC Sedan with clean interiors",
        "Direct-to-driver settlement (Zero brokerage)",
        "Fuel, inter-city tolls and parking covered",
        "Complimentary chilled bottled water",
        "Waiting charges included up to 7 hours"
      ],
      exclusions: ["Fort sound & light show tickets", "Lunch expenses"]
    },
    {
      id: "pkg-hyd-03",
      locationId: "hyderabad",
      locationName: "Hyderabad, Telangana",
      title: "Green EV Auto: Hussain Sagar & City Lake Trail",
      tagline: "Eco-friendly zero-emission ride around Necklace Road, Buddha Statue & Lumbini Laser Show",
      category: "city-tour",
      vehicleType: "Eco Green EV Auto",
      vehicleCategory: "ev-auto",
      capacity: "Up to 3 Guests",
      duration: "Evening Tour (3.5 Hours)",
      distance: "Approx. 25 Km",
      price: 649,
      originalPrice: 1100,
      saving: 451,
      badge: "🌱 100% Zero-Carbon",
      rating: 4.88,
      reviewsCount: 940,
      image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Necklace Road breezy evening drive in silent EV Auto",
        "Buddha Statue monolithic island boat cruise point",
        "NTR Gardens & Lumbini Park fountain stroll",
        "Telangana Martyrs Memorial & Secretariat architectural views",
        "Eat Street lakeside street food tasting"
      ],
      itinerary: [
        { time: "04:30 PM", title: "Evening Hotel Pickup", desc: "Hop into a quiet, 100% electric custom Mana Yatri EV Auto." },
        { time: "05:15 PM", title: "Lumbini Boat Jetty", desc: "Board the ferry to the world's tallest monolithic Buddha statue." },
        { time: "06:45 PM", title: "Secretariat & Martyrs Memorial", desc: "Spectacular evening illuminated views of the new state landmark." },
        { time: "07:30 PM", title: "Eat Street Lake Boulevard", desc: "Sip hot ginger tea and bite into dosa/chaat by the gentle lake breeze." }
      ],
      inclusions: [
        "Quiet, eco-friendly electric ride with USB mobile charger",
        "Driver gets 100% fare via instant UPI",
        "Driver guide knows the best sunset photo spots",
        "All parking and toll charges"
      ],
      exclusions: ["Boat ride ticket (₹80)", "Street snacks"]
    },
    {
      id: "pkg-hyd-04",
      locationId: "hyderabad",
      locationName: "Hyderabad, Telangana",
      title: "Ramoji Film City Full Day Cinema Safari",
      tagline: "Explore the world's largest integrated film studio complex in a spacious private SUV",
      category: "outstation",
      vehicleType: "Spacious AC SUV (Innova / Ertiga)",
      vehicleCategory: "suv",
      capacity: "Up to 6 Guests",
      duration: "Full Day (10 Hours)",
      distance: "Approx. 110 Km roundtrip",
      price: 3299,
      originalPrice: 4600,
      saving: 1301,
      badge: "🎬 Family Special",
      rating: 4.95,
      reviewsCount: 780,
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Seamless door-to-door transit to Ramoji outskirts",
        "Bahubali majestic film sets & London Street sets",
        "Action live stunt show & Filmi Duniya ride",
        "Eco zone, bird park & butterfly sanctuary",
        "Luggage boot space for whole family shopping"
      ],
      itinerary: [
        { time: "08:00 AM", title: "Early Morning Pickup", desc: "Comfortable pickup in a 6-seater AC SUV with family seating." },
        { time: "09:30 AM", title: "Arrival at Ramoji", desc: "Driver assists with drop at the VIP entry gates and parks safely." },
        { time: "10:00 AM - 05:00 PM", title: "Ramoji Studio Attractions", desc: "Spend full day exploring movie sets, stunt shows & carnivals." },
        { time: "05:30 PM", title: "Return Highway Journey", desc: "Relaxing drive back into the city with smooth highway cruising." }
      ],
      inclusions: [
        "Dedicated SUV vehicle for entire 10 hours",
        "Driver allowance, highway tolls (ORR Toll) & studio parking",
        "Zero middleman commission",
        "Multiple pickup/drop stops for family members"
      ],
      exclusions: ["Ramoji entry tickets", "Meals"]
    },

    // --- JAIPUR PACKAGES ---
    {
      id: "pkg-jpr-01",
      locationId: "jaipur",
      locationName: "Jaipur, Rajasthan",
      title: "The Royal Pink City Heritage Auto Safari",
      tagline: "Feel the royal desert breeze: Hawa Mahal honeycomb windows, City Palace & Jal Mahal lake palace",
      category: "heritage",
      vehicleType: "Traditional Rajasthani Auto",
      vehicleCategory: "auto",
      capacity: "Up to 3 Guests",
      duration: "Full Day (6.5 Hours)",
      distance: "Approx. 45 Km",
      price: 999,
      originalPrice: 1600,
      saving: 601,
      badge: "👑 Royal Bestseller",
      rating: 4.96,
      reviewsCount: 2150,
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Hawa Mahal iconic 953-window façade photo shoot",
        "City Palace royal courtyards & Maharaja weapons museum",
        "Jantar Mantar UNESCO astronomical sundials",
        "Jal Mahal floating palace view from Man Sagar promenade",
        "Bapu Bazaar handcrafted blue pottery, jootis & bandhani textiles"
      ],
      itinerary: [
        { time: "09:00 AM", title: "Pink City Pickup", desc: "Pickup by colourful auto rickshaw driven by local Rajput Sarathi." },
        { time: "09:30 AM", title: "Hawa Mahal & Morning Chai", desc: "Catch golden morning light on the red-pink sandstone facade." },
        { time: "11:00 AM", title: "City Palace & Jantar Mantar", desc: "Walk through peacock gate courtyards and ancient sundials." },
        { time: "01:30 PM", title: "Dal Baati Churma Lunch", desc: "Authentic local lunch stop at traditional thali Bhojanalya." },
        { time: "02:45 PM", title: "Jal Mahal & Bapu Bazaar", desc: "Scenic lake view followed by colorful textile shopping." }
      ],
      inclusions: [
        "100% Direct Driver Payment",
        "Zero commission deductions",
        "Driver knows the exact spots for best Instagram photos",
        "Fuel, parking and local taxes"
      ],
      exclusions: ["Monuments composite entry tickets", "Shopping"]
    },
    {
      id: "pkg-jpr-02",
      locationId: "jaipur",
      locationName: "Jaipur, Rajasthan",
      title: "Amer, Nahargarh & Jaigarh Forts Hilltop Cab Expedition",
      tagline: "Grand hilltop ramparts, world's largest wheeled cannon & panoramic sunset over Jaipur",
      category: "heritage",
      vehicleType: "AC Sedan (Dzire / Amaze)",
      vehicleCategory: "sedan",
      capacity: "Up to 4 Guests",
      duration: "Full Day (8 Hours)",
      distance: "Approx. 70 Km",
      price: 1999,
      originalPrice: 2900,
      saving: 901,
      badge: "🏰 Fort Trail",
      rating: 4.93,
      reviewsCount: 1460,
      image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Amer Palace Sheesh Mahal (Palace of Mirrors)",
        "Maota Lake reflection & Amber village cobblestones",
        "Jaigarh Fort massive 'Jaivana' cannon view",
        "Nahargarh Fort Padao viewpoint for magical sunset",
        "Panna Meena Ka Kund ancient geometric stepwell"
      ],
      itinerary: [
        { time: "08:30 AM", title: "Hotel Departure", desc: "Comfortable AC car heads towards the rugged Aravalli hill ranges." },
        { time: "09:30 AM", title: "Amer Fort & Stepwell", desc: "Explore mirrored palaces and historic royal elephant courtyards." },
        { time: "01:00 PM", title: "Jaigarh Fort & Royal Armory", desc: "See the legendary cannon that was never captured in battle." },
        { time: "03:30 PM", title: "Panna Meena Kund", desc: "Marvel at ancient Rajasthani water harvesting architecture." },
        { time: "05:00 PM", title: "Nahargarh Sunset Point", desc: "Watch the entire Pink City light up as dusk descends." }
      ],
      inclusions: [
        "AC Sedan with experienced hill-climbing driver",
        "Direct UPI payment to driver partner",
        "All hill road tolls, checkpoint taxes & parking",
        "Unlimited photo stops"
      ],
      exclusions: ["Fort entrance tickets", "Guide inside Amer Palace"]
    },
    {
      id: "pkg-jpr-03",
      locationId: "jaipur",
      locationName: "Jaipur, Rajasthan",
      title: "Chokhi Dhani Ethnic Village Evening Tour",
      tagline: "Puppet shows, folk Kalbelia dance, camel rides & authentic Rajasthani royal feast",
      category: "food-trail",
      vehicleType: "AC SUV (Ertiga / Bolero Neo)",
      vehicleCategory: "suv",
      capacity: "Up to 6 Guests",
      duration: "Evening Tour (5 Hours)",
      distance: "Approx. 50 Km roundtrip",
      price: 1749,
      originalPrice: 2450,
      saving: 701,
      badge: "🎪 Cultural Night",
      rating: 4.89,
      reviewsCount: 890,
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Chokhi Dhani cultural village festive entrance",
        "Live folk music, acrobatics & magic performances",
        "Traditional mud village huts & pottery workshops",
        "Unlimited Rajasthani thali dinner experience",
        "Safe night return with reliable Sarathi"
      ],
      itinerary: [
        { time: "05:30 PM", title: "Evening Hotel Pickup", desc: "Depart for the Tonk Road cultural village." },
        { time: "06:30 PM", title: "Chokhi Dhani Festivities", desc: "Enjoy fire dancers, camel safari, and astrologers." },
        { time: "08:30 PM", title: "Royal Rajasthani Dining", desc: "Savor ghee-laden churma, ker sangri and gatte ki sabzi." },
        { time: "10:30 PM", title: "Comfortable Return Drop", desc: "Safe doorstep drop after a royal evening." }
      ],
      inclusions: [
        "Private AC SUV vehicle on standby throughout the evening",
        "Direct-to-driver payment with 0% platform fee",
        "Driver parking fees and night allowance included"
      ],
      exclusions: ["Chokhi Dhani entry + dinner pass (paid at venue)"]
    },

    // --- GOA PACKAGES ---
    {
      id: "pkg-goa-01",
      locationId: "goa",
      locationName: "Goa (North Coast)",
      title: "North Goa Coastal Forts & Sunset Beach Trail",
      tagline: "Cruise through swaying coconut groves, 17th-century Portuguese battlements & famous beach shacks",
      category: "city-tour",
      vehicleType: "Open-Top Coastal Auto Rickshaw",
      vehicleCategory: "auto",
      capacity: "Up to 3 Guests",
      duration: "Full Day (7 Hours)",
      distance: "Approx. 55 Km",
      price: 1199,
      originalPrice: 1900,
      saving: 701,
      badge: "🌊 Beach Rider",
      rating: 4.92,
      reviewsCount: 1670,
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Fort Aguada lighthouse & panoramic Arabian Sea bastion",
        "Sinquerim Beach historic seawall",
        "Anjuna Beach red laterite cliffs & flea market avenue",
        "Vagator Beach Chapora Fort 'Dil Chahta Hai' point",
        "Sunset drink stop at trendy beach shack"
      ],
      itinerary: [
        { time: "09:30 AM", title: "Coastal Hotel Pickup", desc: "Pickup in a customized breeze-friendly Goa Auto." },
        { time: "10:15 AM", title: "Fort Aguada & Lighthouse", desc: "Portuguese freshwater reservoir fort overlooking Panaji bay." },
        { time: "12:30 PM", title: "Calangute & Candolim Coastline", desc: "Scenic village roads with colonial Goan Catholic villas." },
        { time: "02:00 PM", title: "Seafood Shack Lunch", desc: "Fresh Goan fish curry rice and chilled tender coconut." },
        { time: "04:30 PM", title: "Chapora Fort Sunset", desc: "Golden hour perched on the scenic ocean cliff ramparts." }
      ],
      inclusions: [
        "100% Direct Driver Payment",
        "Fuel, bridge tolls and beach parking included",
        "Friendly local driver who knows uncrowded hidden spots"
      ],
      exclusions: ["Water sports activities", "Meals & beverages"]
    },
    {
      id: "pkg-goa-02",
      locationId: "goa",
      locationName: "Goa (South & Heritage)",
      title: "Old Goa Latin Quarter & Spice Plantation Cab Tour",
      tagline: "UNESCO Basilica of Bom Jesus, Fontainhas pastel streets & aromatic organic spice lunch",
      category: "heritage",
      vehicleType: "AC Sedan (Etios / Dzire)",
      vehicleCategory: "sedan",
      capacity: "Up to 4 Guests",
      duration: "Full Day (8 Hours)",
      distance: "Approx. 85 Km",
      price: 2199,
      originalPrice: 3200,
      saving: 1001,
      badge: "⛪ Heritage Trail",
      rating: 4.95,
      reviewsCount: 1120,
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Basilica of Bom Jesus (Sacred relics of St. Francis Xavier)",
        "Se Cathedral with giant Golden Bell",
        "Fontainhas Latin Quarter colorful heritage walking lane",
        "Sahakari Spice Plantation tour & traditional banana-leaf buffet",
        "Miramar Beach Mandovi river estuary promenade"
      ],
      itinerary: [
        { time: "09:00 AM", title: "Prompt Hotel Pickup", desc: "Clean AC Sedan arrives with professional local chauffeur." },
        { time: "09:45 AM", title: "Old Goa UNESCO Cathedrals", desc: "Marvel at 400-year-old Baroque architecture and gilt altars." },
        { time: "11:30 AM", title: "Fontainhas Latin Quarter", desc: "Stroll picturesque Portuguese lanes with oyster-shell windows." },
        { time: "01:30 PM", title: "Spice Plantation Experience", desc: "Vanilla, cinnamon, nutmeg trees and spice farm buffet." },
        { time: "04:30 PM", title: "Panaji Mandovi Riverfront", desc: "Scenic drive alongside floating casino ships and mangrove banks." }
      ],
      inclusions: [
        "Full day AC Sedan with 100% direct driver settlement",
        "All fuel, inter-taluka tolls and parking",
        "Driver remains on standby throughout"
      ],
      exclusions: ["Spice farm entry & lunch fee (₹500/head)", "Personal donations"]
    },
    {
      id: "pkg-goa-03",
      locationId: "goa",
      locationName: "Goa (Western Ghats)",
      title: "Dudhsagar Waterfalls & Jungle Jeep Transfer",
      tagline: "Roaring four-tiered milky white waterfall nestled inside the Bhagwan Mahavir Wildlife Sanctuary",
      category: "nature",
      vehicleType: "AC SUV (Innova / Scorpio)",
      vehicleCategory: "suv",
      capacity: "Up to 6 Guests",
      duration: "Full Day (9 Hours)",
      distance: "Approx. 140 Km roundtrip",
      price: 3599,
      originalPrice: 4800,
      saving: 1201,
      badge: "🌿 Nature Adventure",
      rating: 4.90,
      reviewsCount: 750,
      image: "https://images.unsplash.com/photo-1588096344356-9b4974618e47?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Smooth highway transit to Kulem jungle base camp",
        "Scenic Western Ghats mountain pass landscapes",
        "Assistance booking official forest jeep safari",
        "Swim in refreshing natural freshwater pool under the falls",
        "Spot playful langurs and rare tropical birds"
      ],
      itinerary: [
        { time: "06:30 AM", title: "Early Morning Start", desc: "Beat the morning safari queues with an early pickup." },
        { time: "08:30 AM", title: "Arrival at Kulem Sanctuary Gate", desc: "Transfer point to authorized 4x4 jungle jeeps." },
        { time: "09:15 AM - 01:00 PM", title: "Dudhsagar Falls Hike & Swim", desc: "Spend thrilling hours by India's 5th tallest waterfall." },
        { time: "02:00 PM", title: "Jungle Village Lunch", desc: "Traditional Goan feast at rural countryside tavern." },
        { time: "04:30 PM", title: "Smooth Return Journey", desc: "Comfortable drive back to coastal accommodation." }
      ],
      inclusions: [
        "AC SUV roundtrip transit to Kulem base with driver",
        "Driver gets 100% fare directly via UPI",
        "Tolls, permits and parking covered",
        "Complimentary water bottles"
      ],
      exclusions: ["Forest department jeep pass & lifejacket fee (₹600 approx)"]
    },

    // --- BENGALURU PACKAGES ---
    {
      id: "pkg-blr-01",
      locationId: "bengaluru",
      locationName: "Bengaluru, Karnataka",
      title: "Namma Yatri Green Gardens & Colonial Bengaluru",
      tagline: "Lalbagh Glass House, Cubbon Park canopy, Tudor-style Bangalore Palace & filter coffee trail",
      category: "city-tour",
      vehicleType: "Namma Yatri Auto Rickshaw",
      vehicleCategory: "auto",
      capacity: "Up to 3 Guests",
      duration: "Full Day (6 Hours)",
      distance: "Approx. 40 Km",
      price: 849,
      originalPrice: 1350,
      saving: 501,
      badge: "🌿 Namma Classic",
      rating: 4.93,
      reviewsCount: 1980,
      image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Lalbagh Botanical Gardens & 200-year-old bonsai bonsai trees",
        "Cubbon Park red sandstone High Court & Central Library",
        "Vidhana Soudha neo-Dravidian state legislature photo stop",
        "Bangalore Palace royal woodcarvings & grounds",
        "Filter coffee & crispy Benne Dosa at iconic CTR / Vidyarthi Bhavan"
      ],
      itinerary: [
        { time: "08:30 AM", title: "Morning Doorstep Pickup", desc: "Local Kannada/English speaking Sarathi arrives on time." },
        { time: "09:15 AM", title: "Lalbagh Glass House & Lake", desc: "Inspired by London's Crystal Palace, full of exotic flora." },
        { time: "11:00 AM", title: "Cubbon Park & Vidhana Soudha", desc: "Lush city lung space and monumental architecture." },
        { time: "12:30 PM", title: "Malleswaram Heritage Breakfast", desc: "Taste Bengaluru's world-renowned butter masala dosa." },
        { time: "02:00 PM", title: "Bangalore Palace", desc: "Explore the Wodeyar dynasty's Tudor-style residence." }
      ],
      inclusions: [
        "100% Direct Driver Payment (Zero commission)",
        "Fuel, parking and waiting charges",
        "Local route navigation avoiding Bengaluru traffic bottlenecks"
      ],
      exclusions: ["Palace entrance ticket", "Breakfast expenses"]
    },
    {
      id: "pkg-blr-02",
      locationId: "bengaluru",
      locationName: "Bengaluru, Karnataka",
      title: "Nandi Hills Sunrise & Cloud Sea Cab Tour",
      tagline: "Witness breathtaking sunrise above the clouds from 4,851 ft ancient fortress peak",
      category: "nature",
      vehicleType: "AC Sedan (Dzire / Etios)",
      vehicleCategory: "sedan",
      capacity: "Up to 4 Guests",
      duration: "Early Morning (6 Hours)",
      distance: "Approx. 125 Km roundtrip",
      price: 2199,
      originalPrice: 3100,
      saving: 901,
      badge: "🌅 Sunrise Special",
      rating: 4.96,
      reviewsCount: 1540,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Early 04:00 AM departure for sunrise atop Nandi Hills",
        "Tipu's Drop cliff edge & historic summer residence",
        "Bhoga Nandeeshwara 1,000-year-old Chola temple complex",
        "Highway piping hot Thatte Idli breakfast at Harohalli",
        "Smooth cruising via Kempegowda Airport expressway"
      ],
      itinerary: [
        { time: "04:00 AM", title: "Pre-Dawn Pickup", desc: "Car arrives early so you enter the hill gates right as sunrise breaks." },
        { time: "05:45 AM", title: "Sunrise Viewpoint", desc: "Marvel as the sun rises above a sea of rolling white clouds." },
        { time: "07:30 AM", title: "Bhoga Nandeeshwara Temple", desc: "One of Karnataka's oldest intact carved temple courtyards." },
        { time: "08:45 AM", title: "Highway Thatte Idli Breakfast", desc: "Soft steamed idlis with spicy coconut chutney & piping filter coffee." },
        { time: "10:30 AM", title: "Return to Bengaluru", desc: "Drop back well before city traffic peaks." }
      ],
      inclusions: [
        "Direct UPI payment to driver",
        "Airport expressway tolls, hill entry tolls and parking",
        "Reliable early morning punctual driver"
      ],
      exclusions: ["Breakfast food", "Hill entry ticket (₹20)"]
    },

    // --- KERALA PACKAGES ---
    {
      id: "pkg-ker-01",
      locationId: "kerala",
      locationName: "Kerala (Kochi)",
      title: "Fort Kochi Colonial Heritage & Fishing Nets Rickshaw Tour",
      tagline: "Portuguese churches, Dutch palaces, giant Chinese fishing nets & spice warehouse streets",
      category: "heritage",
      vehicleType: "Traditional Kerala Rickshaw",
      vehicleCategory: "auto",
      capacity: "Up to 3 Guests",
      duration: "Half Day (5 Hours)",
      distance: "Approx. 30 Km",
      price: 799,
      originalPrice: 1300,
      saving: 501,
      badge: "🎣 Backwater Vibe",
      rating: 4.91,
      reviewsCount: 1080,
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Iconic Chinese Fishing Nets (Cheena Vala) operating live",
        "St. Francis Church (Vasco da Gama's original burial site)",
        "Santa Cruz Cathedral Basilica gothic interior",
        "Mattancherry Dutch Palace wall murals",
        "Jew Town antique shops & 1568 Paradesi Synagogue"
      ],
      itinerary: [
        { time: "09:00 AM", title: "Kochi Jetty / Hotel Pickup", desc: "Meet your friendly Malayali auto sarathi." },
        { time: "09:30 AM", title: "Chinese Fishing Nets & Beach", desc: "Watch fishermen haul in cantilevered nets from the Arabian Sea." },
        { time: "11:00 AM", title: "St. Francis & Santa Cruz", desc: "India's oldest European built church." },
        { time: "12:30 PM", title: "Jew Town & Spices Market", desc: "Breathe the scent of black pepper, cardamom, clove and cinnamon." },
        { time: "02:00 PM", title: "Return Drop-off", desc: "Drop at your preferred cafe or ferry terminal." }
      ],
      inclusions: [
        "100% Direct Driver Payment",
        "Zero commission platform guarantee",
        "Knowledgeable local driver who knows Jewish Quarter stories",
        "Fuel and bridge tolls"
      ],
      exclusions: ["Synagogue & Dutch Palace entry tickets (₹10)"]
    },
    {
      id: "pkg-ker-02",
      locationId: "kerala",
      locationName: "Kerala (Munnar)",
      title: "Munnar Misty Tea Hills & Eravikulam Nature Safari",
      tagline: "Rolling emerald tea plantations, Nilgiri Tahr mountain goats & highest peak in South India",
      category: "nature",
      vehicleType: "AC SUV (Innova / Scorpio)",
      vehicleCategory: "suv",
      capacity: "Up to 6 Guests",
      duration: "Full Day (8 Hours)",
      distance: "Approx. 90 Km",
      price: 2799,
      originalPrice: 3900,
      saving: 1101,
      badge: "🍃 Hill Paradise",
      rating: 4.97,
      reviewsCount: 1310,
      image: "https://images.unsplash.com/photo-1543083477-4f785aeafaa9?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Eravikulam National Park (Home to endangered Nilgiri Tahr)",
        "Tata Tea Museum & fresh factory tea tasting",
        "Mattupetty Dam lake boating point & dairy farm hills",
        "Echo Point natural acoustic resonance lake",
        "Top Station cloud-covered viewpoint into Tamil Nadu plains"
      ],
      itinerary: [
        { time: "08:30 AM", title: "Munnar Hotel Pickup", desc: "Climb through morning mist in a spacious private SUV." },
        { time: "09:15 AM", title: "Eravikulam National Park", desc: "Spot wild mountain goats among Neelakurinji flower slopes." },
        { time: "11:45 AM", title: "Tea Gardens & Factory Visit", desc: "Witness orthodox tea leaves processed into fragrant brew." },
        { time: "01:30 PM", title: "Traditional Kerala Thali Lunch", desc: "Authentic lunch served on banana leaf with 12 side curries." },
        { time: "03:00 PM", title: "Mattupetty Dam & Echo Point", desc: "Shout your name across the serene mountain reservoir." }
      ],
      inclusions: [
        "Private AC SUV vehicle with experienced mountain driver",
        "100% Direct payment to driver via UPI",
        "Fuel, hill permits and checkpoint taxes included"
      ],
      exclusions: ["National Park bus ticket", "Boating charges"]
    },

    // --- VARANASI PACKAGES ---
    {
      id: "pkg-vns-01",
      locationId: "varanasi",
      locationName: "Varanasi, Uttar Pradesh",
      title: "Subah-e-Banaras Ghats & Kashi Vishwanath Rickshaw Yatra",
      tagline: "Sunrise chants along the sacred Ganges, boat ride, ancient labyrinth galis & Golden Temple darshan",
      category: "spiritual",
      vehicleType: "Heritage Banarasi Rickshaw",
      vehicleCategory: "auto",
      capacity: "Up to 3 Guests",
      duration: "Morning Yatra (5 Hours)",
      distance: "Approx. 20 Km",
      price: 699,
      originalPrice: 1200,
      saving: 501,
      badge: "🕉️ Divine Yatra",
      rating: 4.98,
      reviewsCount: 2420,
      image: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "05:30 AM Subah-e-Banaras classical music & yoga at Assi Ghat",
        "Sunrise rowing boat ride past historic Manikarnika & Dashashwamedh",
        "Kashi Vishwanath Corridor spiritual walk",
        "Annapurna Temple & ancient Kaal Bhairav temple blessing",
        "Legendary Banarasi Kachori-Jalebi breakfast & Blue Lassi tasting"
      ],
      itinerary: [
        { time: "05:15 AM", title: "Brahma Muhurta Pickup", desc: "Your pious local Banarasi Sarathi arrives early." },
        { time: "05:45 AM", title: "Assi Ghat Aarti & Boat", desc: "Gliding across Mother Ganga as the sun illuminates the ghat facades." },
        { time: "07:30 AM", title: "Kashi Vishwanath Corridor", desc: "Smooth navigation through the renovated temple gateway." },
        { time: "09:30 AM", title: "Heritage Gali Walk & Breakfast", desc: "Crisp ram bhandar kachoris, hot jalebi and creamy malai lassi." },
        { time: "10:30 AM", title: "Return Drop", desc: "Spiritual start to your day with complete peace." }
      ],
      inclusions: [
        "100% Direct Driver Payment (0% Commission)",
        "Knowledgeable local driver who navigates narrow Banarasi galis",
        "All vehicle parking and street tolls"
      ],
      exclusions: ["Boat ride charges (₹200 shared/₹600 private)", "Prasad & offerings"]
    },
    {
      id: "pkg-vns-02",
      locationId: "varanasi",
      locationName: "Varanasi, Uttar Pradesh",
      title: "Evening Maha Ganga Aarti & Sarnath Buddhist Trail Cab",
      tagline: "Lord Buddha's First Sermon at Deer Park, Dhamek Stupa & the world-famous Grand Fire Aarti",
      category: "spiritual",
      vehicleType: "AC Sedan (Dzire / Etios)",
      vehicleCategory: "sedan",
      capacity: "Up to 4 Guests",
      duration: "Afternoon to Night (6.5 Hours)",
      distance: "Approx. 45 Km",
      price: 1599,
      originalPrice: 2400,
      saving: 801,
      badge: "🪔 Sacred Light",
      rating: 4.96,
      reviewsCount: 1620,
      image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Sarnath Dhamek Stupa (Where Buddha set the Wheel of Dharma in motion)",
        "Sarnath Archaeological Museum (Original 4-Lion Ashoka Capital)",
        "Tibetan & Thai Buddhist Monasteries in Sarnath",
        "VIP boat reservation assistance for Evening Ganga Aarti at Dashashwamedh",
        "Banarasi Paan tasting at iconic Chowk shop"
      ],
      itinerary: [
        { time: "02:00 PM", title: "Afternoon Pickup", desc: "AC Sedan drives smoothly towards sacred Sarnath (12 km)." },
        { time: "02:45 PM", title: "Sarnath Buddhist Monuments", desc: "Meditate by the 5th-century stupa and inspect the Ashoka Pillar." },
        { time: "05:00 PM", title: "Transit to Dashashwamedh Ghat", desc: "Driver navigates to the closest access point before aarti crowds form." },
        { time: "06:30 PM", title: "Grand Maha Aarti Ceremony", desc: "Synchronized brass lamps, conch shells, and incense over the river." },
        { time: "08:30 PM", title: "Return Drop to Hotel", desc: "Safe return after the grand divine spectacle." }
      ],
      inclusions: [
        "Dedicated AC Sedan with professional driver",
        "100% Direct Driver Payment",
        "All fuel, parking, state taxes included"
      ],
      exclusions: ["Museum entry fee (₹25)", "Aarti boat seat"]
    },

    // --- DELHI & AGRA PACKAGES ---
    {
      id: "pkg-del-01",
      locationId: "delhi-agra",
      locationName: "Delhi & Agra",
      title: "Delhi to Taj Mahal Sunrise Express Highway Tour",
      tagline: "Fast Yamuna Expressway drive, Taj Mahal ivory marble at sunrise & majestic Agra Fort",
      category: "outstation",
      vehicleType: "AC Sedan (Dzire / Ciaz)",
      vehicleCategory: "sedan",
      capacity: "Up to 4 Guests",
      duration: "Full Day (12 Hours)",
      distance: "Approx. 450 Km roundtrip",
      price: 4499,
      originalPrice: 6200,
      saving: 1701,
      badge: "🏛️ World Wonder",
      rating: 4.97,
      reviewsCount: 1890,
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Pre-dawn pickup via 6-lane Yamuna Expressway",
        "Taj Mahal sunrise viewing (Avoid long mid-day queues)",
        "Agra Fort red sandstone royal palaces & Jahangir Mahal",
        "Mehtab Bagh sunset view of Taj across the Yamuna",
        "Famous Agra Petha sweet tasting at authentic Panchhi Petha"
      ],
      itinerary: [
        { time: "03:00 AM", title: "Delhi NCR Pickup", desc: "Early start ensuring you reach Agra right as the Taj gates open." },
        { time: "06:15 AM", title: "Taj Mahal Sunrise Exploration", desc: "3 hours discovering Shah Jahan and Mumtaz Mahal's eternal monument." },
        { time: "10:00 AM", title: "Agra Fort", desc: "Walk where emperors ruled India for three centuries." },
        { time: "01:00 PM", title: "Mughlai Buffet Lunch", desc: "Delicious butter chicken, kebabs, or dal makhani in Agra." },
        { time: "03:30 PM", title: "Return Drive via Expressway", desc: "Relaxing smooth cruise back to Delhi NCR." }
      ],
      inclusions: [
        "100% Direct Driver Payment via UPI (Zero commissions)",
        "Yamuna Expressway high-speed roundtrip tolls included (₹850 value)",
        "State Border Entry Taxes for Uttar Pradesh covered",
        "Driver allowance and fuel included"
      ],
      exclusions: ["Taj Mahal monument tickets (₹50 Indian / ₹1100 Foreign)", "Lunch"]
    },
    {
      id: "pkg-del-02",
      locationId: "delhi-agra",
      locationName: "Delhi (Capital)",
      title: "Old & New Delhi Heritage Rickshaw & Cab Experience",
      tagline: "Chandni Chowk spice market, Red Fort, India Gate, Qutub Minar & Humayun's Tomb",
      category: "city-tour",
      vehicleType: "AC Sedan + Chandni Chowk Rickshaw",
      vehicleCategory: "sedan",
      capacity: "Up to 4 Guests",
      duration: "Full Day (8 Hours)",
      distance: "Approx. 60 Km",
      price: 2299,
      originalPrice: 3400,
      saving: 1101,
      badge: "🇮🇳 National Heritage",
      rating: 4.92,
      reviewsCount: 1410,
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Chandni Chowk cycle rickshaw ride through Khari Baoli spice market",
        "Red Fort & Jama Masjid grandeur from 1648",
        "India Gate war memorial & Kartavya Path stately boulevard",
        "Humayun's Tomb Persian garden precursor to the Taj Mahal",
        "Qutub Minar 73-meter victory tower & iron pillar"
      ],
      itinerary: [
        { time: "09:00 AM", title: "Central Delhi Pickup", desc: "Pickup from any hotel/residence across Delhi NCR." },
        { time: "09:45 AM", title: "Old Delhi Rickshaw Safari", desc: "Experience the bustling lanes of Chandni Chowk & Asia's largest spice market." },
        { time: "12:00 PM", title: "India Gate & Rashtrapati Bhavan", desc: "Drive along the stately ceremonial axis of New Delhi." },
        { time: "01:30 PM", title: "Lunch at Pandara Road", desc: "Famous North Indian cuisine hotspot." },
        { time: "03:00 PM", title: "Humayun's Tomb & Qutub Minar", desc: "Stunning red sandstone & marble monuments of the Delhi Sultanate." }
      ],
      inclusions: [
        "Full day AC Sedan + complimentary Old Delhi Rickshaw ride",
        "100% Direct Driver Payment",
        "All city parking, MCD toll taxes, driver allowance"
      ],
      exclusions: ["Monument entry fees", "Lunch"]
    }
  ],

  // Vehicles Fleet specs
  vehicles: [
    {
      id: "auto",
      name: "Iconic Auto Rickshaw",
      tag: "Mana Yatri Heart",
      icon: "🛺",
      capacity: "3 Passengers",
      luggage: "2 Small Bags",
      features: "Open breeze, best for narrow heritage lanes, zero traffic hassle, 100% authentic local experience",
      basePrice: "₹15 / km",
      co2: "Standard CNG / LPG"
    },
    {
      id: "ev-auto",
      name: "Green EV Auto",
      tag: "Zero-Carbon Bharat",
      icon: "⚡🛺",
      capacity: "3 Passengers",
      luggage: "2 Small Bags",
      features: "100% Electric, silent motor, USB mobile charging on board, zero emissions",
      basePrice: "₹14 / km",
      co2: "Zero Carbon"
    },
    {
      id: "sedan",
      name: "AC Sedan (Dzire / Etios)",
      tag: "Comfort & Style",
      icon: "🚗",
      capacity: "4 Passengers",
      luggage: "3 Large Bags",
      features: "Chilled AC, smooth suspension, boot space, highway ready, professional chauffeur",
      basePrice: "₹22 / km",
      co2: "BS-VI Compliant"
    },
    {
      id: "suv",
      name: "Spacious SUV (Innova / Ertiga)",
      tag: "Family Special",
      icon: "🚙",
      capacity: "6 Passengers",
      luggage: "5 Large Bags",
      features: "Ample legroom, roof rack, dual AC vents, ideal for hilly terrain & family day outs",
      basePrice: "₹28 / km",
      co2: "BS-VI Compliant"
    },
    {
      id: "tempo",
      name: "Tempo Traveller (12-Seater)",
      tag: "Group Pilgrimage",
      icon: "🚐",
      capacity: "12-16 Passengers",
      luggage: "12 Bags",
      features: "Push-back captain seats, audio system, large panoramic windows for group tours",
      basePrice: "₹38 / km",
      co2: "Heavy Commercial"
    }
  ],

  // Verified Driver Partners (Sarathis)
  driverPartners: [
    {
      id: "drv-01",
      name: "Mohammad Riazuddin",
      city: "Hyderabad",
      vehicle: "Auto Rickshaw (TS 09 UA 4821)",
      rating: 4.98,
      trips: "12,450+ Rides",
      languages: ["Telugu", "Hindi", "Urdu", "English"],
      experience: "14 Years in Old City",
      badge: "Mana Yatri Champion",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      quote: "With Travel India, every single rupee the tourist pays reaches my family directly on UPI. No 30% cut! That's why I treat every traveler like a family guest."
    },
    {
      id: "drv-02",
      name: "Vikram Singh Rathore",
      city: "Jaipur",
      vehicle: "AC Sedan (RJ 14 TB 9102)",
      rating: 4.96,
      trips: "8,920+ Rides",
      languages: ["Hindi", "Rajasthani", "English"],
      experience: "11 Years Royal Guide",
      badge: "Heritage Master",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      quote: "Padharo Mhare Desh! Taking travelers to Amber Fort and secret sunset spots in Nahargarh is my passion. Zero commission means honest, transparent hospitality."
    },
    {
      id: "drv-03",
      name: "Prashanth Gowda",
      city: "Bengaluru",
      vehicle: "EV Auto (KA 01 EK 3209)",
      rating: 4.95,
      trips: "15,800+ Rides",
      languages: ["Kannada", "English", "Telugu", "Hindi"],
      experience: "9 Years Sarathi",
      badge: "Green Pioneer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      quote: "Driving an EV Auto on Travel India network saves the environment and saves my earnings. Passengers love the quiet ride around Lalbagh and Cubbon Park."
    },
    {
      id: "drv-04",
      name: "Rosario Fernandes",
      city: "Goa",
      vehicle: "AC SUV (GA 03 T 7781)",
      rating: 4.97,
      trips: "6,400+ Rides",
      languages: ["Konkani", "English", "Portuguese", "Hindi"],
      experience: "16 Years Coastal Chauffeur",
      badge: "Coastal Expert",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
      quote: "Tourists always tell me they were scammed by taxi cartels before. Travel India's upfront pricing and direct driver UPI builds pure trust."
    }
  ],

  // Real-time live ticker updates (simulating live bookings)
  liveTicker: [
    { city: "Hyderabad", user: "Sneha R.", package: "Charminar & Nizami Heritage Rickshaw", time: "Just now", amount: "₹899" },
    { city: "Jaipur", user: "Amitabh S.", package: "Amer & Nahargarh Forts Hilltop Cab", time: "2 mins ago", amount: "₹1,999" },
    { city: "Bengaluru", user: "Pooja V.", package: "Nandi Hills Sunrise & Cloud Sea Cab", time: "4 mins ago", amount: "₹2,199" },
    { city: "Goa", user: "Karan M.", package: "North Goa Coastal Forts & Sunset Beach", time: "7 mins ago", amount: "₹1,199" },
    { city: "Varanasi", user: "Sunil D.", package: "Subah-e-Banaras Ghats & Kashi Rickshaw", time: "11 mins ago", amount: "₹699" },
    { city: "Hyderabad", user: "Kavita T.", package: "Golconda Fort & Qutb Shahi Tombs AC Cab", time: "14 mins ago", amount: "₹1,899" },
    { city: "Delhi", user: "David H.", package: "Delhi to Taj Mahal Sunrise Express", time: "18 mins ago", amount: "₹4,499" }
  ],

  // Platform impact open data metrics
  metrics: {
    totalTrips: 5429810,
    driverEarningsCr: 218.4,
    registeredSarathis: 168400,
    riderSavingsCr: 47.9,
    citiesActive: 28,
    customerRating: 4.93
  },

  // Complete Information of the Agency (Govt Accredited & ONDC Partner)
  agencyInfo: {
    name: "Travel India National Tourism & Mobility Bureau",
    tagline: "Bharat's Premier Open Mobility & Sustainable Tourism Network",
    registrationNo: "MOT-IND/2023/ONDC-88412",
    gstin: "07AABCT9982Q1Z4",
    established: "2022 under ONDC Open Network Protocol",
    vision: "To democratize tourism transport across India by connecting travelers directly to verified native drivers with zero commission cuts, transparent regulated fares, and authentic local cultural storytelling.",
    mission: "Empower 500,000+ local driver-sarathis across 100+ cities while ensuring safe, affordable, world-class travel for over 50 million domestic and global tourists by 2030.",
    helplines: {
      tollFree: "1800-242-728 (1800-BHARAT • 24x7 Tourist Helpline)",
      whatsapp: "+91 98490 12345 (Instant WhatsApp Sarathi Desk)",
      supportEmail: "support@travelindia.org",
      bookingsEmail: "bookings@travelindia.org",
      emergencySOS: "sos@travelindia.org",
      sarathiJoin: "sarathi@travelindia.org"
    },
    headquarters: {
      title: "National Central Bureau - New Delhi",
      address: "Travel India House, 4th Floor, Barakhamba Road, Connaught Place, New Delhi - 110001",
      phone: "+91 11 2341 8900",
      operatingHours: "24 Hours / 7 Days (Operations & Tourist Dispatch)"
    },
    branchOffices: [
      {
        city: "Hyderabad",
        state: "Telangana",
        landmark: "Mana Yatri City Command Center",
        address: "Level 4, Cyber Gateway, HITEC City, Madhapur, Hyderabad - 500081",
        phone: "+91 40 4892 1100",
        head: "Rameshwar Rao",
        email: "hyderabad@travelindia.org"
      },
      {
        city: "Bengaluru",
        state: "Karnataka",
        landmark: "Namma Mobility Operations Hub",
        address: "100ft Road, HAL 2nd Stage, Indiranagar, Bengaluru - 560038",
        phone: "+91 80 2521 4400",
        head: "Anand Murthy",
        email: "bengaluru@travelindia.org"
      },
      {
        city: "Jaipur",
        state: "Rajasthan",
        landmark: "Rajputana Royal Heritage Cell",
        address: "Mirza Ismail Road (MI Road), Opp. Raj Mandir Cinema, Jaipur - 302001",
        phone: "+91 141 237 8899",
        head: "Kalyan Singh Rathore",
        email: "jaipur@travelindia.org"
      },
      {
        city: "Kochi",
        state: "Kerala",
        landmark: "Backwaters & Coastal Directorate",
        address: "Marine Drive Waterfront, Rainbow Bridge Walkway, Ernakulam, Kochi - 682031",
        phone: "+91 484 239 6700",
        head: "George Mathew",
        email: "kochi@travelindia.org"
      },
      {
        city: "Goa",
        state: "Goa",
        landmark: "Panaji Coastal Transit Desk",
        address: "Panaji Waterfront Promenade, DB Marg, Campal, Panaji - 403001",
        phone: "+91 832 242 1200",
        head: "Maria D'Souza",
        email: "goa@travelindia.org"
      },
      {
        city: "Varanasi",
        state: "Uttar Pradesh",
        landmark: "Kashi Yatra Seva Kendra",
        address: "Kashi Heritage Hub, Godowlia Crossing, Dashashwamedh Rd, Varanasi - 221001",
        phone: "+91 542 240 5588",
        head: "Pandit Shivnath Mishra",
        email: "varanasi@travelindia.org"
      }
    ],
    accreditations: [
      "Ministry of Tourism, Govt of India Approved Bureau",
      "ONDC (Open Network for Digital Commerce) Certified Mobility Partner",
      "IATO (Indian Association of Tour Operators) Recognized",
      "ISO 9001:2015 Certified Tourist Safety Standards",
      "Zero-Carbon Bharat Green Fleet Certified (MoPNG)"
    ]
  },

  // Curated Incredible India Tourist Image Gallery
  touristGallery: [
    {
      id: "gal-01",
      title: "The Taj Mahal at Sunrise",
      location: "Agra, Uttar Pradesh",
      state: "Uttar Pradesh",
      category: "heritage",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
      description: "Eternal symbol of love, crafted with ivory-white Makrana marble along the Yamuna riverbank.",
      bestTime: "Oct - Mar",
      topTour: "Delhi to Taj Mahal Sunrise Express",
      directFare: 4499,
      highlightTag: "UNESCO Marble Wonder"
    },
    {
      id: "gal-02",
      title: "Hawa Mahal (Palace of Winds)",
      location: "Jaipur, Rajasthan",
      state: "Rajasthan",
      category: "heritage",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
      description: "Iconic 953 honeycomb windows designed to let cool desert breeze circulate through royal chambers.",
      bestTime: "Oct - Mar",
      topTour: "Pink City Heritage Auto Safari",
      directFare: 999,
      highlightTag: "953 Honeycomb Windows"
    },
    {
      id: "gal-03",
      title: "Charminar & Historic Bazaars",
      location: "Hyderabad, Telangana",
      state: "Telangana",
      category: "heritage",
      image: "https://images.unsplash.com/photo-1605007493699-ce65834f8a00?auto=format&fit=crop&w=800&q=80",
      description: "400-year-old landmark of Nizami grandeur, surrounded by shimmering pearl markets and Irani chai cafes.",
      bestTime: "Year Round",
      topTour: "Charminar Nizami Rickshaw Safari",
      directFare: 899,
      highlightTag: "400-Year Nizam Heritage"
    },
    {
      id: "gal-04",
      title: "Alleppey Backwaters & Houseboats",
      location: "Alleppey, Kerala",
      state: "Kerala",
      category: "nature",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
      description: "Tranquil network of canals, emerald paddy fields, and traditional thatched kettuvallam boats.",
      bestTime: "Sep - Mar",
      topTour: "Alleppey Backwaters & Shikara Tour",
      directFare: 1699,
      highlightTag: "Emerald Canals & Houseboat"
    },
    {
      id: "gal-05",
      title: "Misty Munnar Tea Hills",
      location: "Munnar, Kerala",
      state: "Kerala",
      category: "nature",
      image: "https://images.unsplash.com/photo-1543083477-4f785aeafaa9?auto=format&fit=crop&w=800&q=80",
      description: "Endless rolling green carpets of tea plantations nestled in the high Western Ghats mountain mist.",
      bestTime: "Sep - May",
      topTour: "Munnar Tea Hills & Eravikulam Safari",
      directFare: 2299,
      highlightTag: "Western Ghats Tea Estates"
    },
    {
      id: "gal-06",
      title: "Sacred Evening Ganga Aarti",
      location: "Varanasi, Uttar Pradesh",
      state: "Uttar Pradesh",
      category: "spiritual",
      image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80",
      description: "Grand synchronized fire ritual on Dashashwamedh Ghat honoring Mother Ganga with brass lamps and chants.",
      bestTime: "Oct - Apr",
      topTour: "Evening Ganga Aarti & Sarnath Cab",
      directFare: 1299,
      highlightTag: "Sacred Fire River Ritual"
    },
    {
      id: "gal-07",
      title: "Fort Aguada & Coastal Goa",
      location: "North Goa, Goa",
      state: "Goa",
      category: "nature",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
      description: "17th-century Portuguese fortress overlooking the vast Arabian Sea and golden sun-kissed beaches.",
      bestTime: "Nov - Apr",
      topTour: "North Goa Coastal Forts & Sunset Beach",
      directFare: 1199,
      highlightTag: "Portuguese Ocean Citadel"
    },
    {
      id: "gal-08",
      title: "Amer Fort & Sheesh Mahal",
      location: "Amer, Jaipur, Rajasthan",
      state: "Rajasthan",
      category: "heritage",
      image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
      description: "Majestic hilltop fort featuring the glittering Palace of Mirrors and Maota Lake reflection.",
      bestTime: "Oct - Mar",
      topTour: "Amer & Nahargarh Forts Hilltop Cab",
      directFare: 1999,
      highlightTag: "Palace of Mirrors"
    },
    {
      id: "gal-09",
      title: "Lalbagh Glass House & Nandi Hills",
      location: "Bengaluru, Karnataka",
      state: "Karnataka",
      category: "nature",
      image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80",
      description: "240-acre botanical marvel and morning sunrise sea of clouds over ancient 4,800ft hill fortresses.",
      bestTime: "Year Round",
      topTour: "Nandi Hills Sunrise & Cloud Sea Cab",
      directFare: 2199,
      highlightTag: "Sunrise Cloud Sea"
    },
    {
      id: "gal-10",
      title: "Dudhsagar Four-Tiered Waterfall",
      location: "Western Ghats, Goa",
      state: "Goa",
      category: "nature",
      image: "https://images.unsplash.com/photo-1588096344356-9b4974618e47?auto=format&fit=crop&w=800&q=80",
      description: "India's 5th highest waterfall, cascading 310 meters of frothy white water through dense jungle canopy.",
      bestTime: "Oct - May",
      topTour: "Dudhsagar Waterfalls & Jungle Jeep",
      directFare: 2799,
      highlightTag: "310m Jungle Cascade"
    },
    {
      id: "gal-11",
      title: "Golconda Fort Acoustic Wonder",
      location: "Hyderabad, Telangana",
      state: "Telangana",
      category: "heritage",
      image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80",
      description: "Medieval fortress of the Qutb Shahi dynasty with acoustic clapping porticos and diamond vaults.",
      bestTime: "Year Round",
      topTour: "Golconda Fort & Qutb Shahi Tombs AC Cab",
      directFare: 1899,
      highlightTag: "Acoustic Whispering Arches"
    },
    {
      id: "gal-12",
      title: "Kashi Vishwanath Corridor",
      location: "Varanasi, Uttar Pradesh",
      state: "Uttar Pradesh",
      category: "spiritual",
      image: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&w=800&q=80",
      description: "Spiritual golden sanctum connecting the sacred Ganges directly to the jyotirlinga temple.",
      bestTime: "Year Round",
      topTour: "Subah-e-Banaras Ghats & Kashi Yatra",
      directFare: 699,
      highlightTag: "Golden Spiritual Sanctum"
    }
  ],

  // Comprehensive State-by-State Trip & Event Planning Data
  statesData: [
    {
      id: "telangana",
      name: "Telangana",
      capital: "Hyderabad",
      tagline: "Land of Nizam Splendor, Tech Horizons & Culinary Miracles",
      icon: "🛺",
      banner: "https://images.unsplash.com/photo-1605007493699-ce65834f8a00?auto=format&fit=crop&w=800&q=80",
      bestSeason: "October to March",
      majorHubs: ["Hyderabad", "Warangal", "Secunderabad", "Nizamabad"],
      trips: [
        {
          id: "tel-01",
          title: "Charminar & Nizami Heritage Rickshaw Safari",
          duration: "Half Day (4.5 Hours)",
          vehicle: "Iconic Auto Rickshaw",
          capacity: "Up to 3 Guests",
          fare: 899,
          originalFare: 1450,
          saving: 551,
          type: "Day Tour",
          rating: 4.94,
          stops: ["Charminar", "Mecca Masjid", "Laad Bazaar", "Chowmahalla Palace", "Nimrah Cafe"],
          highlights: "Ancient minarets, authentic Osmania biscuits, pearl jewelry walk, royal vintage car collection."
        },
        {
          id: "tel-02",
          title: "Golconda Fort & Qutb Shahi Tombs AC Cab Tour",
          duration: "Full Day (7 Hours)",
          vehicle: "AC Sedan (Dzire / Etios)",
          capacity: "Up to 4 Guests",
          fare: 1899,
          originalFare: 2800,
          saving: 901,
          type: "Heritage Day Tour",
          rating: 4.91,
          stops: ["Golconda Bala Hissar", "Qutb Shahi 7 Domes", "Taramati Baradari", "Durgam Cheruvu Bridge"],
          highlights: "Acoustic warning architecture, diamond vaults, Persian dome gardens, cable-bridge sunset."
        },
        {
          id: "tel-03",
          title: "Green EV Auto: Hussain Sagar & Lake Boulevard",
          duration: "Evening (3.5 Hours)",
          vehicle: "Eco Green EV Auto",
          capacity: "Up to 3 Guests",
          fare: 649,
          originalFare: 1100,
          saving: 451,
          type: "Eco Evening Tour",
          rating: 4.88,
          stops: ["Necklace Road", "Lumbini Boat Jetty", "Buddha Island", "Telangana Secretariat", "Eat Street"],
          highlights: "Silent 100% electric ride, ferry boat to monolithic Buddha statue, evening laser fountains."
        },
        {
          id: "tel-04",
          title: "Ramoji Film City Full Day Cinema Safari",
          duration: "Full Day (10 Hours)",
          vehicle: "Spacious AC SUV (Innova)",
          capacity: "Up to 6 Guests",
          fare: 3299,
          originalFare: 4600,
          saving: 1301,
          type: "Entertainment & Film Safari",
          rating: 4.95,
          stops: ["Ramoji Gates", "Bahubali Sets", "Action Stunt Arena", "Filmi Duniya", "Bird Sanctuary"],
          highlights: "Door-to-door highway transit, world's largest film studio complex, movie sets and live carnivals."
        },
        {
          id: "tel-05",
          title: "2 Days Complete Hyderabad & Warangal Heritage Circuit",
          duration: "2 Days / 1 Night",
          vehicle: "AC Sedan or SUV",
          capacity: "Up to 4-6 Guests",
          fare: 5499,
          originalFare: 7800,
          saving: 2301,
          type: "Multi-Day State Package",
          rating: 4.97,
          stops: ["Hyderabad Old City", "Golconda", "Warangal 1000 Pillar Temple", "Warangal Fort Kakatiya Gate"],
          highlights: "UNESCO Kakatiya dynastic monuments, Ramappa temple, royal Nizami feast and private driver."
        }
      ]
    },
    {
      id: "rajasthan",
      name: "Rajasthan",
      capital: "Jaipur",
      tagline: "The Royal Land of Rajput Warriors, Palaces & Desert Dunes",
      icon: "👑",
      banner: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
      bestSeason: "October to March",
      majorHubs: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer", "Pushkar"],
      trips: [
        {
          id: "raj-01",
          title: "The Royal Pink City Heritage Auto Safari",
          duration: "Full Day (6.5 Hours)",
          vehicle: "Rajasthani Auto Rickshaw",
          capacity: "Up to 3 Guests",
          fare: 999,
          originalFare: 1600,
          saving: 601,
          type: "Day Tour",
          rating: 4.96,
          stops: ["Hawa Mahal", "City Palace", "Jantar Mantar", "Jal Mahal", "Bapu Bazaar"],
          highlights: "953-window wind palace, astronomical sundials, lake floating palace, bandhani textile market."
        },
        {
          id: "raj-02",
          title: "Amer, Nahargarh & Jaigarh Forts Hilltop Cab Expedition",
          duration: "Full Day (8 Hours)",
          vehicle: "AC Sedan (Dzire / Amaze)",
          capacity: "Up to 4 Guests",
          fare: 1999,
          originalFare: 2900,
          saving: 901,
          type: "Fort Trail",
          rating: 4.93,
          stops: ["Amer Sheesh Mahal", "Panna Meena Kund Stepwell", "Jaigarh Cannon", "Nahargarh Sunset Point"],
          highlights: "Palace of mirrors, geometric stepwell, world's largest wheeled cannon, panoramic sunset."
        },
        {
          id: "raj-03",
          title: "Chokhi Dhani Ethnic Cultural Evening Tour",
          duration: "Evening (5 Hours)",
          vehicle: "AC SUV (Ertiga / Bolero)",
          capacity: "Up to 6 Guests",
          fare: 1749,
          originalFare: 2450,
          saving: 701,
          type: "Cultural Night",
          rating: 4.89,
          stops: ["Tonk Road Transit", "Chokhi Dhani Folk Village", "Kalbelia Dance Arena", "Royal Bhojanalya"],
          highlights: "Fire dancers, puppet shows, camel safari, unlimited traditional Rajasthani royal dinner feast."
        },
        {
          id: "raj-04",
          title: "3 Days / 2 Nights Royal Rajasthan Golden Triangle",
          duration: "3 Days / 2 Nights",
          vehicle: "AC Sedan or SUV",
          capacity: "Up to 4-6 Guests",
          fare: 8999,
          originalFare: 12500,
          saving: 3501,
          type: "Multi-Day State Package",
          rating: 4.98,
          stops: ["Jaipur Forts", "Ajmer Dargah Sharif", "Pushkar Holy Lake", "Brahma Temple", "Chittorgarh"],
          highlights: "Intercity highway cruising, private chauffeur throughout 3 days, desert sunset camel rides."
        }
      ]
    },
    {
      id: "kerala",
      name: "Kerala",
      capital: "Thiruvananthapuram",
      tagline: "God's Own Country: Backwaters, Misty Tea Hills & Ayurvedic Trails",
      icon: "🌴",
      banner: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
      bestSeason: "September to May",
      majorHubs: ["Kochi", "Munnar", "Alleppey", "Wayanad", "Varkala"],
      trips: [
        {
          id: "ker-01",
          title: "Fort Kochi Colonial Heritage & Fishing Nets Rickshaw Safari",
          duration: "Half Day (5 Hours)",
          vehicle: "Traditional Kerala Rickshaw",
          capacity: "Up to 3 Guests",
          fare: 799,
          originalFare: 1300,
          saving: 501,
          type: "Heritage Day Tour",
          rating: 4.91,
          stops: ["Chinese Fishing Nets", "St. Francis Church", "Jew Town & Synagogue", "Mattancherry Dutch Palace"],
          highlights: "Cantilevered fishing nets in action, spice warehouses, Portuguese church, antique alleyways."
        },
        {
          id: "ker-02",
          title: "Munnar Misty Tea Hills & Eravikulam Nature Safari",
          duration: "Full Day (8 Hours)",
          vehicle: "AC SUV (Innova / Scorpio)",
          capacity: "Up to 6 Guests",
          fare: 2799,
          originalFare: 3900,
          saving: 1101,
          type: "Mountain Safari",
          rating: 4.97,
          stops: ["Eravikulam National Park", "Tata Tea Museum", "Mattupetty Dam", "Echo Point", "Top Station"],
          highlights: "Rare Nilgiri Tahr mountain goats, fresh tea processing tasting, mountain mist and echo lake."
        },
        {
          id: "ker-03",
          title: "Alleppey Backwaters Private Shikara & Village Trail",
          duration: "Full Day (7 Hours)",
          vehicle: "AC Sedan + Boat Transfer",
          capacity: "Up to 4 Guests",
          fare: 2499,
          originalFare: 3600,
          saving: 1101,
          type: "Backwater Safari",
          rating: 4.95,
          stops: ["Punnamada Lake Jetty", "Vembanad Canals", "Kuttanad Paddy Fields", "Village Toddy Shop Lunch"],
          highlights: "Private motorized wooden Shikara cruise through quiet narrow waterways and coconut lagoons."
        },
        {
          id: "ker-04",
          title: "3 Days / 2 Nights Complete Kerala: Kochi, Munnar & Alleppey",
          duration: "3 Days / 2 Nights",
          vehicle: "AC Sedan / SUV with Chauffeur",
          capacity: "Up to 4-6 Guests",
          fare: 7999,
          originalFare: 11200,
          saving: 3201,
          type: "Multi-Day State Package",
          rating: 4.99,
          stops: ["Kochi Fort & Jetty", "Cheeyappara Waterfalls", "Munnar Tea Estates", "Alleppey Houseboat"],
          highlights: "Complete scenic Kerala road trip with 100% direct driver settlement and hill-country guide."
        }
      ]
    },
    {
      id: "goa",
      name: "Goa",
      capital: "Panaji",
      tagline: "Pearl of the Orient: Sun, Golden Sand, Colonial Churches & Spice Forests",
      icon: "🌊",
      banner: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
      bestSeason: "October to May",
      majorHubs: ["Panaji", "Calangute", "Madgaon", "Vagator", "Palolem"],
      trips: [
        {
          id: "goa-01",
          title: "North Goa Coastal Forts & Sunset Beach Auto Trail",
          duration: "Full Day (7 Hours)",
          vehicle: "Breeze Coastal Auto Rickshaw",
          capacity: "Up to 3 Guests",
          fare: 1199,
          originalFare: 1900,
          saving: 701,
          type: "Coastal Day Tour",
          rating: 4.92,
          stops: ["Fort Aguada", "Sinquerim Seawall", "Anjuna Red Cliffs", "Vagator Chapora Fort"],
          highlights: "Portuguese coastal battlements, Arabian Sea panorama, Dil Chahta Hai sunset point, beach shacks."
        },
        {
          id: "goa-02",
          title: "Old Goa Latin Quarter & Spice Plantation AC Cab Tour",
          duration: "Full Day (8 Hours)",
          vehicle: "AC Sedan (Etios / Dzire)",
          capacity: "Up to 4 Guests",
          fare: 2199,
          originalFare: 3200,
          saving: 1001,
          type: "Heritage Day Tour",
          rating: 4.95,
          stops: ["Basilica of Bom Jesus", "Se Cathedral", "Fontainhas Latin Quarter", "Sahakari Spice Farm"],
          highlights: "Baroque golden altars, pastel Portuguese colonial streets, aromatic vanilla & nutmeg organic buffet."
        },
        {
          id: "goa-03",
          title: "Dudhsagar Waterfalls & Western Ghats Jungle Jeep Transfer",
          duration: "Full Day (9 Hours)",
          vehicle: "AC SUV (Innova / Scorpio)",
          capacity: "Up to 6 Guests",
          fare: 3599,
          originalFare: 4800,
          saving: 1201,
          type: "Adventure Safari",
          rating: 4.90,
          stops: ["Kulem Base Camp", "Bhagwan Mahavir Sanctuary", "Dudhsagar Natural Pool", "Jungle Spice Lunch"],
          highlights: "310-meter milky waterfall, 4x4 jungle river crossing, swim under the falls, wildlife spotting."
        },
        {
          id: "goa-04",
          title: "3 Days / 2 Nights All-Goa Grand Vacation: North, South & Backwaters",
          duration: "3 Days / 2 Nights",
          vehicle: "Dedicated AC Sedan or SUV",
          capacity: "Up to 4-6 Guests",
          fare: 6499,
          originalFare: 9200,
          saving: 2701,
          type: "Multi-Day State Package",
          rating: 4.96,
          stops: ["Baga & Candolim", "Old Goa", "Dudhsagar", "Palolem & Butterfly Beach", "Panaji River Cruise"],
          highlights: "Private car and driver at your beck and call across North and South Goa with zero taxi cartel surge."
        }
      ]
    },
    {
      id: "karnataka",
      name: "Karnataka",
      capital: "Bengaluru",
      tagline: "One State, Many Worlds: Tech Metros, Palaces & Ancient Empires",
      icon: "🏰",
      banner: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80",
      bestSeason: "September to March",
      majorHubs: ["Bengaluru", "Mysuru", "Coorg", "Hampi", "Chikmagalur"],
      trips: [
        {
          id: "kar-01",
          title: "Namma Yatri Green Gardens & Colonial Bengaluru Auto Tour",
          duration: "Full Day (6 Hours)",
          vehicle: "Namma Yatri Auto Rickshaw",
          capacity: "Up to 3 Guests",
          fare: 849,
          originalFare: 1350,
          saving: 501,
          type: "City Day Tour",
          rating: 4.93,
          stops: ["Lalbagh Glass House", "Cubbon Park", "Vidhana Soudha", "Bangalore Palace", "CTR Benne Dosa"],
          highlights: "Centenary botanical glasshouse, red library avenue, Wodeyar Tudor palace, iconic filter coffee."
        },
        {
          id: "kar-02",
          title: "Nandi Hills Sunrise & Cloud Sea Cab Tour",
          duration: "Early Morning (6 Hours)",
          vehicle: "AC Sedan (Dzire / Etios)",
          capacity: "Up to 4 Guests",
          fare: 2199,
          originalFare: 3100,
          saving: 901,
          type: "Sunrise Mountain Tour",
          rating: 4.96,
          stops: ["Nandi Summit Viewpoint", "Tipu's Drop", "Bhoga Nandeeshwara Temple", "Highway Thatte Idli"],
          highlights: "04:00 AM departure, sea of clouds below your feet, 1,000-year-old carved temple, hot highway idlis."
        },
        {
          id: "kar-03",
          title: "Mysuru Royal Palace & Chamundi Hill Full Day Heritage Cab",
          duration: "Full Day (11 Hours)",
          vehicle: "AC Sedan (Dzire / Ciaz)",
          capacity: "Up to 4 Guests",
          fare: 3199,
          originalFare: 4500,
          saving: 1301,
          type: "Royal Heritage Tour",
          rating: 4.95,
          stops: ["Bengaluru-Mysuru Expressway", "Mysore Palace", "Chamundi Temple", "St. Philomena's", "Brindavan Gardens"],
          highlights: "Illuminated 97,000-bulb palace, golden throne hall, sacred Nandi monolith, musical fountain show."
        }
      ]
    },
    {
      id: "uttar-pradesh",
      name: "Uttar Pradesh",
      capital: "Lucknow",
      tagline: "The Spiritual Epicenter: Lord Rama, Kashi Vishwanath & Mughal Taj",
      icon: "🕉️",
      banner: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
      bestSeason: "October to March",
      majorHubs: ["Varanasi", "Agra", "Ayodhya", "Lucknow", "Mathura"],
      trips: [
        {
          id: "up-01",
          title: "Subah-e-Banaras Ghats & Kashi Vishwanath Rickshaw Yatra",
          duration: "Morning Yatra (5 Hours)",
          vehicle: "Heritage Banarasi Rickshaw",
          capacity: "Up to 3 Guests",
          fare: 699,
          originalFare: 1200,
          saving: 501,
          type: "Spiritual Yatra",
          rating: 4.98,
          stops: ["Assi Ghat Chants", "Sunrise Ganga Rowing Boat", "Kashi Vishwanath Corridor", "Blue Lassi & Kachori"],
          highlights: "Dawn boat ride gliding past Manikarnika, sacred golden temple blessing, labyrinth gali breakfast."
        },
        {
          id: "up-02",
          title: "Evening Maha Ganga Aarti & Sarnath Buddhist Trail Cab",
          duration: "Afternoon to Night (6.5 Hours)",
          vehicle: "AC Sedan (Dzire / Etios)",
          capacity: "Up to 4 Guests",
          fare: 1599,
          originalFare: 2400,
          saving: 801,
          type: "Spiritual & Heritage Cab",
          rating: 4.96,
          stops: ["Sarnath Dhamek Stupa", "Ashoka 4-Lion Museum", "Dashashwamedh Aarti Ghat", "Banarasi Paan Chowk"],
          highlights: "Buddha's First Sermon deer park, original Ashoka capital, synchronized grand fire aarti ceremony."
        },
        {
          id: "up-03",
          title: "Delhi to Taj Mahal Sunrise Express Highway Tour",
          duration: "Full Day (12 Hours)",
          vehicle: "AC Sedan (Dzire / Ciaz)",
          capacity: "Up to 4 Guests",
          fare: 4499,
          originalFare: 6200,
          saving: 1701,
          type: "Outstation Wonder Tour",
          rating: 4.97,
          stops: ["Yamuna Expressway", "Taj Mahal Sunrise", "Agra Fort", "Mehtab Bagh", "Panchhi Petha"],
          highlights: "Pre-dawn start, beat the crowds at the Taj Mahal, Mughal red sandstone fort, high-speed tolls included."
        },
        {
          id: "up-04",
          title: "2 Days Sacred Ayodhya Ram Mandir & Kashi Corridor Yatra",
          duration: "2 Days / 1 Night",
          vehicle: "AC Sedan / SUV with Chauffeur",
          capacity: "Up to 4-6 Guests",
          fare: 5999,
          originalFare: 8400,
          saving: 2401,
          type: "Multi-Day State Package",
          rating: 4.99,
          stops: ["Ayodhya Ram Mandir", "Hanuman Garhi", "Saryu River Aarti", "Varanasi Ghats & Kashi Vishwanath"],
          highlights: "Dedicated AC vehicle covering Ayodhya and Varanasi pilgrimage shrines with verified pious driver."
        }
      ]
    },
    {
      id: "himachal-pradesh",
      name: "Himachal Pradesh",
      capital: "Shimla",
      tagline: "Devbhoomi: Alpine Snow Peaks, Cedar Valleys & Buddhist Monasteries",
      icon: "🏔️",
      banner: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      bestSeason: "April to June & Dec to Feb (Snow)",
      majorHubs: ["Manali", "Shimla", "Dharamshala", "Kullu", "Spiti"],
      trips: [
        {
          id: "hp-01",
          title: "Manali Solang Valley & Atal Tunnel SUV Safari",
          duration: "Full Day (8 Hours)",
          vehicle: "AC SUV (Innova / Scorpio)",
          capacity: "Up to 6 Guests",
          fare: 2899,
          originalFare: 4200,
          saving: 1301,
          type: "Mountain Adventure",
          rating: 4.96,
          stops: ["Solang Valley", "Atal Tunnel (9.02 km)", "Sissu Waterfall (Lahaul)", "Hadimba Temple", "Old Manali"],
          highlights: "Drive through the world's longest high-altitude highway tunnel into trans-Himalayan Lahaul valley."
        },
        {
          id: "hp-02",
          title: "Shimla Colonial Mall Road & Kufri Ridge Cab Tour",
          duration: "Full Day (7 Hours)",
          vehicle: "AC Sedan with Hill Master",
          capacity: "Up to 4 Guests",
          fare: 2199,
          originalFare: 3200,
          saving: 1001,
          type: "Colonial Hill Tour",
          rating: 4.92,
          stops: ["The Ridge & Christ Church", "Jakhoo Hanuman Temple", "Kufri Himalayan Nature Park", "Mall Road"],
          highlights: "Victorian architecture, ropeway cable car to 8,000ft peak, pine forests and apple orchard viewpoints."
        },
        {
          id: "hp-03",
          title: "3 Days / 2 Nights Manali, Rohtang & Kasol Parvati Valley",
          duration: "3 Days / 2 Nights",
          vehicle: "Dedicated AC SUV Chauffeur",
          capacity: "Up to 6 Guests",
          fare: 8499,
          originalFare: 12000,
          saving: 3501,
          type: "Multi-Day State Package",
          rating: 4.98,
          stops: ["Manali Valleys", "Rohtang Snow Point", "Kasol Israeli Cafes", "Manikaran Sahib Hot Springs"],
          highlights: "Glacial snow sports, natural thermal hot sulphur springs, river rafting and riverside mountain cafes."
        }
      ]
    }
  ],

  // A to Z End-to-End Trip Planning Services
  atozServices: [
    {
      letter: "A",
      title: "Airport & Station VIP Arrival",
      desc: "Placard welcome at terminal exits, baggage care, and sanitized AC Cabs or Autos waiting on time.",
      icon: "✈️"
    },
    {
      letter: "B",
      title: "Boutique & Heritage Stays",
      desc: "Curated tie-ups with authentic Havelis, lakeside cottages, and certified clean homestays across Bharat.",
      icon: "🏰"
    },
    {
      letter: "C",
      title: "Certified Multilingual Sarathis",
      desc: "Native chauffeurs fluent in your preferred language (Kannada, Hindi, Telugu, English) who know every local street.",
      icon: "🗣️"
    },
    {
      letter: "D",
      title: "Doorstep Luggage & Senior Care",
      desc: "Complimentary trunk space, gentle boarding assistance for senior citizens, and baby-seat accommodations.",
      icon: "🧳"
    },
    {
      letter: "E",
      title: "Entry Tickets & VIP Darshan",
      desc: "No waiting in 2-hour monument or temple ticket queues—pre-arranged priority access passes.",
      icon: "🎟️"
    },
    {
      letter: "F",
      title: "Food & Culinary Safaris",
      desc: "Hygiene-tested dining stops for authentic Hyderabadi Biryani, Rajasthani Thali, Karnataka Benne Dosa, and Banarasi street treats.",
      icon: "🍱"
    },
    {
      letter: "G",
      title: "Group, Wedding & Event Fleets",
      desc: "Coordinated convoys of 10+ Tempo Travellers, luxury SUVs, and decorative Auto Rickshaws for destination weddings and corporate events.",
      icon: "🎪"
    },
    {
      letter: "Z",
      title: "Zero-Stress Return & Roundtrip Care",
      desc: "Seamless return drops, flight re-confirmation alerts, and 24x7 SOS tourist helpline coverage throughout.",
      icon: "🛡️"
    }
  ],

  // Official Social Media & Community Channels
  socialMedia: [
    { name: "Instagram", handle: "@travelindia.sarathi", url: "https://instagram.com", icon: "📸", followers: "284K Followers", note: "Daily photo stories & reels from local Sarathis" },
    { name: "YouTube", handle: "@TravelIndiaOfficial", url: "https://youtube.com", icon: "▶️", followers: "520K Subscribers", note: "Cinematic India road documentaries & city walks" },
    { name: "X (Twitter)", handle: "@TravelIndiaONDC", url: "https://x.com", icon: "🐦", followers: "118K Followers", note: "Real-time transport advisories & open data updates" },
    { name: "WhatsApp Community", handle: "Travel India Circle", url: "https://whatsapp.com", icon: "💬", followers: "95K Members", note: "Instant local route tips & driver coordination" },
    { name: "LinkedIn", handle: "Travel India Mobility", url: "https://linkedin.com", icon: "💼", followers: "42K Connections", note: "Open mobility protocols & driver welfare updates" }
  ],

  // Official Policies (Payment, Cancellation, Terms & Conditions, Privacy Policy)
  policies: {
    payment: {
      title: "100% Direct Driver Payment Policy",
      tagline: "Zero Platform Commissions • True Open Mobility (ONDC)",
      points: [
        {
          heading: "100% Direct to Driver UPI",
          body: "Unlike traditional commercial aggregators who slice away 25% to 35% of driver fares, every single rupee you pay for your tour goes straight to your assigned Sarathi's bank account via BHIM / UPI QR code."
        },
        {
          heading: "Zero Surge Pricing Guarantee",
          body: "Our standardized fare rates are calibrated in alignment with State Transport Authority guidelines. Whether during monsoon showers or festival peaks, you will never face predatory 3x or 4x surge pricing."
        },
        {
          heading: "Transparent Fare Breakdown",
          body: "Your fare includes dedicated vehicle, certified chauffeur, fuel, state highway tolls, and monument parking. No hidden booking fees, zero convenience convenience cess, and zero platform surcharge."
        },
        {
          heading: "Direct Digital Invoicing",
          body: "Instant digital tax invoice and GST receipt generated immediately upon payment confirmation, valid for corporate claims and personal travel records."
        }
      ]
    },
    cancellation: {
      title: "Fair & Flexible Cancellation Policy",
      tagline: "Rider Freedom with Chauffeur Protection",
      points: [
        {
          heading: "100% Full Refund (Up to 2 Hours Before Pickup)",
          body: "Plans change! Cancel your tour anytime up to 2 hours prior to your scheduled pickup time slot for a 100% instant refund with zero cancellation penalty."
        },
        {
          heading: "Instant Reversal to Source Account",
          body: "Refunds for UPI payments are processed instantly back to your bank account via the ONDC Beckn settlement gateway within 15 minutes."
        },
        {
          heading: "Driver Fuel Compensation (Within 2 Hours)",
          body: "If cancellation occurs within 2 hours of scheduled pickup when the driver is already en route, a modest ₹150 nominal fuel allowance is retained and credited directly to the driver."
        },
        {
          heading: "Free Date & Time Rescheduling",
          body: "Need to change your pickup time or travel date? Reschedule up to 1 hour before pickup with zero fees through our 24/7 WhatsApp concierge."
        }
      ]
    },
    terms: {
      title: "Terms & Conditions of Service",
      tagline: "Governed under Ministry of Tourism & ONDC Mobility Protocol",
      points: [
        {
          heading: "Open Mobility Framework",
          body: "Travel India operates as a decentralized community facilitation bureau connecting travelers with independent, licensed commercial vehicle operators across India."
        },
        {
          heading: "Police-Verified Commercial Chauffeurs",
          body: "All driver partners undergo strict local police badge verification, valid yellow-plate commercial insurance, and annual vehicle fitness audits."
        },
        {
          heading: "Luggage & Passenger Safety Limits",
          body: "Passenger limits are legally enforced: Maximum 3 passengers for Auto Rickshaws, 4 for Sedans, and 6 for SUVs to ensure total road safety."
        },
        {
          heading: "Mutual Respect & Code of Conduct",
          body: "We celebrate the dignity of labor. Travelers and Sarathis agree to treat one another with utmost courtesy, safety, and mutual respect."
        }
      ]
    },
    privacy: {
      title: "Privacy & Data Protection Policy",
      tagline: "Your Personal Information is Never Sold or Monopolized",
      points: [
        {
          heading: "Zero Data Monetization",
          body: "We strictly never sell, lease, or monetize traveler personal data, location traces, or contact numbers to third-party ad networks or marketing agencies."
        },
        {
          heading: "Driver Phone Number Masking",
          body: "Your phone number is temporarily masked through secure encrypted telecommunication channels and shared solely for trip navigation and pickup."
        },
        {
          heading: "Encrypted Storage (AES-256)",
          body: "All booking details, tickets, and payment references are stored using 256-bit encryption compliant with India's Digital Personal Data Protection (DPDP) Act."
        },
        {
          heading: "Right to Forget",
          body: "You can request complete deletion of your booking history and contact records at any time by emailing privacy@travelindia.org."
        }
      ]
    }
  }
};



