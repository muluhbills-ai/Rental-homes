/**
 * Mock data for house rentals
 * Images are stored in public/assets/images/
 * This way, we can reference them directly as strings
 */

const houses = [
 {
    id: 1,
    title: "TUTORIAL VIDEO GUID",
    location: "Home Page",
    price: 1,
    images: ["/assets/images/tutorial-video.png",
      "/assets/videos/tutorial-guid.mp4"
    ],
    description:
      "Wake up to ocean views every day in this beachfront condo. Modern interior, steps from the beach."
  },
  {
    id: 2,
    title: "Bright Future",
    location: "Down Quater",
    price: 200000,
    images: [
      "/assets/images/bright-future-1.jpg",
      "/assets/images/bright-future-2.jpg",
      "/assets/images/bright-future-3.jpg",
      "/assets/videos/bright-future-6.mp4"
    ],
    description:
      "A fully self enclosed room with an inner toilet and an available store right in the cite by the side of the Down Quater school street road.  It contains quality flowing water inside the toilets"
  },
  {
    id: 3,
    title: "Cite Labrad",
    location: "Down Quater",
    price: 260000,
    images: ["/assets/images/cite-labrad-4.jpg",
      "/assets/videos/cite-labrad-7.mp4",
      "/assets/images/cite-labrad-5.jpg",
      "/assets/images/cite-labrad-1.jpg"
      
    ],
    description:
      "Enjoy peace and nature in this cite labrad. Perfect for students who are ready to study, with breathtaking views. Found about 50m from the main road"
  },
 {
    id: 4,
    title: "Early Bird",
    location: "Down Quater",
    price: 260000,
    images: [
      "/assets/images/early-bird-1.jpg",
      "/assets/images/early-bird-2.jpg",
      "/assets/videos/early-bird-8.mp4"
    ],
    description: "Really close to the road. Room, toilet and kitchen at a really affordable price. Extra FCFA50000 is added for a pair"
  },
  {
    id: 5,
    title: "Gamsi Entrance",
    location: "Down Quater",
    price: 230000,
    images: ["/assets/images/Gamsi-Entrance-3.jpg",
      "/assets/images/Gamsi-Entrance-2.jpg",
      "/assets/images/Gamsi-Entrance-1.jpg",
      "/assets/videos/Gamsi-Entrance-9.mp4"
    ],
    description:
      "A small quite self contained modern cite with constant flowing water and electricity  . Ideal for those who want comfort and style with privacy."
  },
  {
    id: 6,
    title: "No Name cite",
    location: "Presbyterian Church, Down Quater ",
    price: 450000,
    images: ["/assets/images/No-Name-in.jpg",
      "/assets/images/No-Name-front.jpg",
      "/assets/videos/no-name-room-5.mp4",
      "/assets/videos/no-name-room-2.mp4"

    ],
    description:
      "This charming luxurious cite offers a cozy living space, modern kitchen and toilet, and is close to school campus. this rent is divided as follows(400000 for rent, 30000 for caution, 20000 for light and water). all this excludes a 10000 fee to be paid to the hpuse agent"
  },
  {
    id: 7,
    title: "Standard Hostel",
    location: "Caps Junction",
    price: 250000,
    images: ["/assets/images/standard-hostel-1.jpg",
      "/assets/images/standard-hostel-2.jpg",
      "/assets/images/standard-hostel-3.jpg",
      "/assets/images/standard-hostel-4.jpg",
      "/assets/videos/standard-hostel-6.mp4"
    ],
    description:
      "Wake up to the road view. Modern interior, stady water and electricity flow"
  },
  /** 
  {
    id: 6,
    title: "Coastal Condo",
    location: "Santa Monica, CA",
    price: 3500,
    images: ["/assets/images/5.jpg"],
    description:
      "Wake up to ocean views every day in this beachfront condo. Modern interior, steps from the beach."
  },
  {
    id: 7,
    title: "Modern Family Home",
    location: "Douala, Cameroon",
    price: 250000,
    images: [
      "/assets/images/6.jpg",
      "/assets/images/7.jpg",
      "/assets/images/8.jpg"
    ],
    description: "Spacious 4-bedroom home with a beautiful garden."
  }
  */
];

export default houses;
