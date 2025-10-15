/**
 * Mock data for house rentals
 * Images are stored in public/assets/images/
 * This way, we can reference them directly as strings
 */

const houses = [
  {
    id: 1,
    title: "Modern Apartment in City Center",
    location: "New York, NY",
    price: 2500,
    images: [
      "/assets/images/livingroom-A1.jpg",
      "/assets/images/kitchen-A2.jpg",
      "/assets/images/kitchen-A1.jpg",
      "/assets/images/main-section.webp"
    ],
    description:
      "A beautiful modern apartment located in the heart of New York City. Spacious living area, fully furnished, close to amenities."
  },
  {
    id: 2,
    title: "Cozy Cottage Near the Lake",
    location: "Lake Tahoe, CA",
    price: 1800,
    images: ["/assets/images/10.jpg",
      "/assets/videos/vid-1.mp4",
      "/assets/images/9.jpg"
    ],
    description:
      "Enjoy peace and nature in this cozy lakefront cottage. Perfect for a small family or couple, with breathtaking views."
  },
 {
    id: 8,
    title: "Cozy Cottage Near the Lake",
    location: "Lake Tahoe, CA",
    price: 1800,
    images: [
      "/assets/images/2.jpg",
      "/assets/images/3.jpg"
    ],
    description: "Enjoy peace and nature..."
  },
  {
    id: 3,
    title: "Luxury Villa with Private Pool",
    location: "Miami, FL",
    price: 5200,
    images: ["/assets/images/3.jpg"],
    description:
      "Spacious luxury villa with private pool and garden. Ideal for those who want comfort and style with privacy."
  },
  {
    id: 4,
    title: "Charming Townhouse",
    location: "Austin, TX",
    price: 2200,
    images: ["/assets/images/4.jpg"],
    description:
      "This charming townhouse offers a cozy living space, modern kitchen, and is close to downtown Austin."
  },
  {
    id: 5,
    title: "Beachfront Condo",
    location: "Santa Monica, CA",
    price: 3500,
    images: ["/assets/images/4.jpg"],
    description:
      "Wake up to ocean views every day in this beachfront condo. Modern interior, steps from the beach."
  },
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
];

export default houses;
