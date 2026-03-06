// products.js
let products = [
  {
    id: 1,
    name: "Phone Stand",
    price: 10,
    image: "https://via.placeholder.com/300x200?text=Phone+Stand",
    description: "A simple phone stand for desks."
  },
  {
    id: 2,
    name: "Desk Organizer",
    price: 15,
    image: "https://via.placeholder.com/300x200?text=Desk+Organizer",
    description: "Holds pens and small items."
  }
];

// Load saved products from localStorage
const savedProducts = JSON.parse(localStorage.getItem("products"));
if(savedProducts) products = savedProducts;