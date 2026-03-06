let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Load products from localStorage or use default
let products = JSON.parse(localStorage.getItem("products")) || [
  { id: 1, name: "Phone Stand", price: 10, image: "images/phone-stand.jpg", description: "A simple phone stand for desks" },
  { id: 2, name: "Desk Organizer", price: 15, image: "images/organizer.jpg", description: "Holds pens and small items" }
];

// Save products back to localStorage whenever changed
function saveProducts() {
  localStorage.setItem("products", JSON.stringify(products));
}

// Cart functions
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(id){
  const product = products.find(p => p.id === id);
  cart.push(product);
  saveCart();
  alert(product.name + " added to cart");
}

function viewCart(){
  let total = 0;
  let text = "Cart:\n";
  cart.forEach(item => {
    text += item.name + " $" + item.price + "\n";
    total += item.price;
  });
  text += "Total: $" + total;
  alert(text);
}
function updateCartCount(){
  const countSpan = document.getElementById("cartCount");
  if(countSpan) {
    countSpan.textContent = cart.length;
  }
}

// Call this whenever the page loads
updateCartCount();

// Update cart count whenever you add to cart
function addToCart(id){
  const product = products.find(p => p.id === id);
  cart.push(product);
  saveCart();
  updateCartCount();
  alert(product.name + " added to cart");
}