// Cart persistent
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Products persistent
const savedProducts = JSON.parse(localStorage.getItem("products"));
if(savedProducts) products.splice(0, products.length, ...savedProducts);

// Update cart count in header
function updateCartCount(){
  const countSpan = document.getElementById("cartCount");
  if(countSpan) countSpan.textContent = cart.length;
}
updateCartCount();

// Save cart
function saveCart(){ localStorage.setItem("cart", JSON.stringify(cart)); }

// Add product to cart
function addToCart(id){
  const product = products.find(p => p.id === id);
  cart.push(product);
  saveCart();
  updateCartCount();
  alert(product.name + " added to cart!");
}

// View cart
function viewCart(){
  if(cart.length === 0){
    alert("Your cart is empty!");
    return;
  }
  let text = "Cart:\n";
  let total = 0;
  cart.forEach((p,i)=>{
    text += `${i+1}. ${p.name} - $${p.price}\n`;
    total += p.price;
  });
  text += `Total: $${total}`;
  alert(text);
}

// Generate product grid
const grid = document.getElementById("productGrid");
if(grid){
  grid.innerHTML = "";
  products.forEach(product => {
    const item = document.createElement("div");
    item.className = "item";
    item.innerHTML = `
      <a href="product.html?id=${product.id}">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
      </a>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    grid.appendChild(item);
  });
}