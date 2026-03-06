let cart = [];

const grid = document.getElementById("productGrid");

if(grid){
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

function addToCart(id){
  const product = products.find(p => p.id === id);
  cart.push(product);
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