function handleSearch(event) {
  if (event.key === "Enter") {
    doSearch();
  }
}

function doSearch() {
  let query = document.getElementById("searchInput").value.trim().toLowerCase();
  if (query === "browny birthday cakes") {
    window.location.href = "search.html";
  } else {
    window.location.href = "search.html";
  }
}


const cakeData = [
  { id: 1, title: "Birthday Browny Mac", rating: "⭐ 4.8 (385 Reviews)", price: "₹249", old: "₹399", desc: "Crunchy nuts, creamy chocolate drizzle, choco sticks, perfect for birthdays!" },
  { id: 2, title: "Birthday Choco Cake", rating: "⭐ 4.7 (300 Reviews)", price: "₹566", old: "₹620", desc: "Rich dark chocolate layers and smooth cream filling." },
  { id: 3, title: "Hand Made Cake", rating: "⭐ 4.9 (500 Reviews)", price: "₹776", old: "₹800", desc: "Fresh handmade customized birthday cake." },
  { id: 4, title: "Milky Cream Cake", rating: "⭐ 4.5 (200 Reviews)", price: "₹747", old: "₹760", desc: "Soft milky vanilla cake with white frosting." },
  { id: 5, title: "Forest Cherry Cake", rating: "⭐ 4.6 (180 Reviews)", price: "₹445", old: "₹480", desc: "Classic black forest cake with cherry topping." },
  { id: 6, title: "Golden Theme Cake", rating: "⭐ 4.2 (120 Reviews)", price: "₹849", old: "₹900", desc: "Luxury golden coated cake for celebrations." },
  { id: 7, title: "Butter Fun Cake", rating: "⭐ 4.3 (140 Reviews)", price: "₹658", old: "₹700", desc: "Soft butter flavored beautifully decorated cake." },
  { id: 8, title: "Ice Cream Cake", rating: "⭐ 4.1 (110 Reviews)", price: "₹398", old: "₹420", desc: "Ice cream mixed flavor cake for kids parties." },
  { id: 9, title: "Spicy Theme Cake", rating: "⭐ 3.9 (90 Reviews)", price: "₹899", old: "₹940", desc: "Unique spicy theme decorative cake." }
];

function openProduct(id, imgSrc) {
  const item = cakeData.find(x => x.id === id);
  if (!item) return;

  // If view section not exist, create it
  let view = document.getElementById("product-view-top");
  if (!view) {
    view = document.createElement("section");
    view.id = "product-view-top";
    view.innerHTML = `
      <div class="view-product-container">
         <img id="main-view-img" class="main-image" src="" alt="Cake">
         <div class="details">
              <h1 id="cake-name"></h1>
              <div id="cake-rating" class="rating"></div>
              <div class="price-section">
                   <span id="cake-price" class="new-price"></span>
                   <span id="cake-old-price" class="old-price"></span>
              </div>
              <p id="cake-desc"></p>
         </div>
      </div>
    `;
    document.body.insertBefore(view, document.body.firstChild);
  }

  document.getElementById("main-view-img").src = imgSrc;
  document.getElementById("cake-name").innerText = item.title;
  document.getElementById("cake-rating").innerText = item.rating;
  document.getElementById("cake-price").innerText = item.price;
  document.getElementById("cake-old-price").innerText = item.old;
  document.getElementById("cake-desc").innerText = item.desc;

  view.style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

