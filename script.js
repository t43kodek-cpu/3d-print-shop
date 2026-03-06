// Load cart from localStorage or create empty
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Save cart to localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(id){
  const product = products.find(p => p.id === id);
  cart.push(product);
  saveCart();
  alert(product.name + " added to cart");
}

// Optional: view cart function
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