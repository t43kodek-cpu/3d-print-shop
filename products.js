// products.js
let products = [
  {
    id: 1,
    name: "Phone Stand",
    price: 10,
    image: "",
    description: "A simple phone stand for desks.",
    clicks: 0
  },
  {
    id: 2,
    name: "Desk Organizer",
    price: 15,
    image: "",
    description: "Holds pens and small items.",
    clicks: 0
  }
];

// Load saved products from localStorage
const savedProducts = JSON.parse(localStorage.getItem("products"));
if(savedProducts) products = savedProducts;