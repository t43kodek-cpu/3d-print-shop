// script.js

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Save cart
function saveCart(){ localStorage.setItem("cart", JSON.stringify(cart)); }

// Add to cart
function addToCart(id){
  const product = products.find(p => p.id === id);
  if(product){
    cart.push(product);
    saveCart();
    updateCartCount();
    alert(product.name + " added to cart!");
  }
}

// Remove from cart
function removeFromCart(index){
  cart.splice(index,1);
  saveCart();
  renderCart();
  updateCartCount();
}

// Update cart count
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
    div.className="item";
    div.innerHTML=`
      <a href="product.html?id=${product.id}" onclick="incrementClick(${product.id})">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
      </a>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    grid.appendChild(div);
  });
}

// Increment click counter
function incrementClick(id){
  const product = products.find(p => p.id === id);
  if(product){
    product.clicks = (product.clicks || 0) + 1;
    localStorage.setItem("products", JSON.stringify(products));
  }
}

// Render cart
function renderCart(){
  const container = document.getElementById("cartItems");
  if(!container) return;
  container.innerHTML = "";
  let total=0;
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

// Admin functions
function renderAdminProducts(){
  const container = document.getElementById("adminProducts");
  if(!container) return;
  container.innerHTML="";
  products.forEach((product,index)=>{
    const div = document.createElement("div");
    div.className="item";
    div.innerHTML=`
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <p>Clicks: ${product.clicks || 0}</p>
      <button onclick="deleteProduct(${index})">Delete</button>
    `;
    container.appendChild(div);
  });
}

function deleteProduct(index){
  if(confirm("Delete "+products[index].name+"?")){
    products.splice(index,1);
    localStorage.setItem("products",JSON.stringify(products));
    renderAdminProducts();
    renderShopGrid();
  }
}

// Image upload
function handleImageUpload(fileInput, previewId){
  const file = fileInput.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = function(e){
    document.getElementById(previewId).src = e.target.result;
    document.getElementById(previewId).dataset.image = e.target.result;
  }
  reader.readAsDataURL(file);
}