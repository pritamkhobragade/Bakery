document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { name: "Chocolate Cake", image: "https://source.unsplash.com/400x300/?chocolate-cake", price: "$20" },
    { name: "Strawberry Cupcake", image: "https://source.unsplash.com/400x300/?cupcake", price: "$5" },
    { name: "Cookies", image: "https://source.unsplash.com/400x300/?cookies", price: "$8" },
    { name: "Macarons", image: "https://source.unsplash.com/400x300/?macarons", price: "$10" },
  ];

  const container = document.getElementById("product-list");
  products.forEach(product => {
    const col = document.createElement("div");
    col.className = "col-md-3";
    col.innerHTML = `
      <div class="card h-100 shadow">
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-body text-center">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.price}</p>
          <button class="btn btn-sm btn-pink">Order Now</button>
        </div>
      </div>
    `;
    container.appendChild(col);
  });
});




// Back to Top
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});





const products = [
  { name: "Chocolate Cake", image: "...", price: "$20", category: "cakes" },
  { name: "Vanilla Cupcake", image: "...", price: "$5", category: "cupcakes" },
  { name: "Oatmeal Cookies", image: "...", price: "$8", category: "cookies" },
  // Add more with category keys
];

function renderProducts(category = "all") {
  const container = document.getElementById("product-list");
  container.innerHTML = "";
  const filtered = category === "all" ? products : products.filter(p => p.category === category);
  filtered.forEach(product => {
    const col = document.createElement("div");
    col.className = "col-md-3";
    col.innerHTML = `
      <div class="card h-100 shadow" data-aos="zoom-in">
        <a href="${product.image}" data-lightbox="products" data-title="${product.name}">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
        </a>
        <div class="card-body text-center">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.price}</p>
          <button class="btn btn-sm btn-pink">Order Now</button>
        </div>
      </div>`;
    container.appendChild(col);
  });
}
renderProducts();

// Filter buttons
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProducts(btn.dataset.category);
  });
});



