const products = [
  { name: "Laptop", price: "$999", image: "https://via.placeholder.com/200x150?text=Laptop" },
  { name: "Phone", price: "$599", image: "https://via.placeholder.com/200x150?text=Phone" },
  { name: "Headphones", price: "$199", image: "https://via.placeholder.com/200x150?text=Headphones" },
  { name: "Watch", price: "$149", image: "https://via.placeholder.com/200x150?text=Watch" },
];

let cartCount = 0;

const cartCountEl = document.getElementById("cart-count");
const productList = document.getElementById("product-list");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product";

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>Price: ${product.price}</p>
    <button>Add to Cart</button>
  `;

  const btn = card.querySelector("button");
  btn.addEventListener("click", () => {
    cartCount++;
    cartCountEl.textContent = cartCount;
  });

  productList.appendChild(card);
});
