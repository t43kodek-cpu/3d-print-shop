// script.js

// Cart persistent
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Save cart to localStorage
function saveCart(){ localStorage.setItem("cart", JSON.stringify(cart)); }

// Add product to cart
function addToCart(id){
  const product = products.find(p => p.id === id);
  if(product){
    cart.push(product);
    saveCart();
    updateCartCount();
    alert(product.name + " added to cart!");
  }
}

// Remove item from cart
function removeFromCart(index){
  cart.splice(index,1);
  saveCart();
  renderCart();
  updateCartCount();
}

// Update cart count in header
function updateCartCount(){
  const countSpan = document.getElementById("cartCount");
  if(countSpan) countSpan.textContent = cart.length;
}
updateCartCount();

// Render shop grid
function renderShopGrid(){
  const grid = document.getElementById("productGrid");
  if(!grid) return;
  grid.innerHTML = "";
  products.forEach(product=>{
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML=`
      <a href="product.html?id=${product.id}">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
      </a>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    grid.appendChild(div);
  });
}

// Render cart page
function renderCart(){
  const container = document.getElementById("cartItems");
  if(!container) return;
  container.innerHTML = "";
  let total = 0;
  if(cart.length===0){
    container.innerHTML="<p>Your cart is empty!</p>";
    document.getElementById("cartTotal").textContent="";
    return;
  }
  cart.forEach((item,i)=>{
    const div = document.createElement("div");
    div.className="item";
    div.innerHTML=`
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>$${item.price}</p>
      <button onclick="removeFromCart(${i})">Remove</button>
    `;
    container.appendChild(div);
    total+=item.price;
  });
  document.getElementById("cartTotal").textContent="Total: $"+total;
}

// Call on page load
renderShopGrid();
renderCart();
updateCartCount();