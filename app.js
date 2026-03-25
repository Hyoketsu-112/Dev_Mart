/* ==========================================================
Dev_Mart — app.js
========================================================== */

// ── PRODUCT DATABASE ──────────────────────────────────────
const products = [
  // FABRICS
  {
    id: 1,
    name: "Vibrant Ankara Wax Print — Mixed Designs",
    category: "Fabrics",
    price: 5500,
    oldPrice: 7500,
    rating: 4.9,
    ratingCount: 342,
    image: "Assets/Ankara_Atampa.jpg",
    verified: true,
    hot: true,
    desc: "Premium quality Ankara wax print fabric. Rich, vibrant colours that don't fade. Perfect for Aso-Ebi, corporate wear, and casual outfits. 6 yards per bundle.",
    vendor: "AbikeTextiles",
    location: "Balogun Market, Lagos",
  },
  {
    id: 2,
    name: "Premium Kente Fabric — Bold Geometric",
    category: "Fabrics",
    price: 8900,
    oldPrice: 11500,
    rating: 4.8,
    ratingCount: 218,
    image: "Assets/kampala.jpg",
    verified: true,
    isNew: true,
    desc: "Authentic Kente-inspired prints with bold geometric patterns. Machine washable. 6 yards.",
    vendor: "FabricsNG",
    location: "Idumota, Lagos",
  },
  {
    id: 3,
    name: "Brocade Jacquard — Gold Embossed",
    category: "Fabrics",
    price: 12500,
    oldPrice: 15000,
    rating: 4.9,
    ratingCount: 156,
    image: "Assets/FANTASTIC.JPG",
    verified: true,
    hot: true,
    desc: "Luxurious brocade fabric with gold embossed patterns. Ideal for traditional attire, chieftaincy, and events.",
    vendor: "KingsTextile",
    location: "Eko Market, Lagos",
  },
  {
    id: 4,
    name: "Spa & Salon Uniform Fabric — White Stripe",
    category: "Fabrics",
    price: 3200,
    rating: 4.7,
    ratingCount: 89,
    image: "Assets/BOLDAN_1.JPG",
    verified: true,
    desc: "Durable white & black striped cotton fabric. Perfect for salon, spa, and hospitality uniforms. Breathable and easy to wash.",
    vendor: "UniformPlus",
    location: "Surulere, Lagos",
  },
  {
    id: 5,
    name: "African Wax Hollandais — Premium Grade",
    category: "Fabrics",
    price: 14500,
    oldPrice: 18000,
    rating: 5.0,
    ratingCount: 412,
    image: "Assets/Ankara.jpg",
    verified: true,
    hot: true,
    desc: "Top-grade Dutch Hollandais wax print. Double-wax technology, fade-resistant, vivid colours. The gold standard for Aso-ebi.",
    vendor: "HollandaisHub",
    location: "Balogun Market, Lagos",
  },
  {
    id: 6,
    name: "Superior Suiting Fabric — Classic Blues",
    category: "Fabrics",
    price: 9500,
    rating: 4.8,
    ratingCount: 174,
    image: "Assets/agbada material.png",
    verified: true,
    isNew: true,
    desc: "Premium suiting fabric rolls in rich blue tones. Perfect for corporate Agbada, suits, and formal wear. Per 3 yards.",
    vendor: "SuitMaster",
    location: "Computer Village Area, Lagos",
  },
  {
    id: 7,
    name: "Ankara Fabric — Vivid Kente Patterns",
    category: "Fabrics",
    price: 6200,
    oldPrice: 8000,
    rating: 4.7,
    ratingCount: 203,
    image: "Assets/skirt material.png",
    verified: true,
    desc: "Bold, colourful Ankara with Kente-inspired patterns. Ideal for dresses, trousers, skirts, and children's wear.",
    vendor: "VividFabrics",
    location: "Oshodi, Lagos",
  },
  {
    id: 8,
    name: "Ankara Fabric — Navy & Mustard Motifs",
    category: "Fabrics",
    price: 7800,
    rating: 4.8,
    ratingCount: 127,
    image: "Assets/Ankara with traditional motifs.png",
    verified: true,
    desc: "Stunning navy and mustard Ankara with traditional motifs. 100% cotton, bright colours, suitable for all styles.",
    vendor: "PatternsByFati",
    location: "Alaba, Lagos",
  },
  {
    id: 9,
    name: "Lace Fabric — Embroidered Sequence",
    category: "Fabrics",
    price: 18500,
    oldPrice: 22000,
    rating: 4.9,
    ratingCount: 98,
    image: "Assets/lace with sequence.png",
    verified: true,
    hot: true,
    desc: "Premium embroidered lace fabric with sequence detailing. Perfect for weddings, parties, and high-end fashion. Per yard: ₦5,500.",
    vendor: "BlizzFabricShop",
    location: "Worldwide Delivery",
  },
  {
    id: 10,
    name: "Plain Cotton Fabric — Rainbow Collection",
    category: "Fabrics",
    price: 2800,
    rating: 4.6,
    ratingCount: 321,
    image: "Assets/Pure Elements.jpg",
    verified: true,
    isNew: true,
    desc: "Solid plain cotton fabrics in a wide variety of vibrant colours. Soft, breathable, and durable. Great for uniforms, casual wear, and crafts.",
    vendor: "PureElements",
    location: "Lagos Island",
  },

  // FOOD
  {
    id: 11,
    name: "Beans & Fried Plantain Combo",
    category: "Food",
    price: 2500,
    rating: 4.9,
    ratingCount: 567,
    image: "Assets/Beans and plantain.jpg",
    verified: true,
    hot: true,
    desc: "Classic Nigerian honey beans (Ewa Agoyin) slow-cooked with palm oil, blended pepper & crayfish. Served with crispy fried plantain. Homemade, fresh daily.",
    vendor: "MamaChidi Kitchen",
    location: "Ojota, Lagos",
  },
  {
    id: 12,
    name: "Suya & Chips Combo Plate",
    category: "Food",
    price: 4500,
    rating: 4.8,
    ratingCount: 389,
    image: "Assets/potatoes&suya.jpg",
    verified: true,
    desc: "Perfectly spiced beef suya served with crispy golden fries, garnished with spring onions and tomato dipping sauce. A Lagos street food classic, elevated.",
    vendor: "SuyaKing",
    location: "Ikeja, Lagos",
  },
  {
    id: 13,
    name: "Jollof Rice, Chicken & Plantain",
    category: "Food",
    price: 5500,
    oldPrice: 6500,
    rating: 4.9,
    ratingCount: 892,
    image: "Assets/rice&chicken.jpg",
    verified: true,
    hot: true,
    desc: "The ultimate Nigerian party plate. Smoky party-style Jollof rice cooked over firewood, with oven-grilled chicken thigh, fried sweet plantain, and fresh coleslaw.",
    vendor: "PartyRice NG",
    location: "Victoria Island, Lagos",
  },
  {
    id: 14,
    name: "Amala, Ewedu & Abula",
    category: "Food",
    price: 3200,
    rating: 4.8,
    ratingCount: 445,
    image: "Assets/amala.jpg",
    verified: true,
    desc: "Authentic Yoruba delicacy. Smooth yam flour Amala served with silky Ewedu soup and spiced Gbegiri (bean soup), with assorted meat. Comfort food at its best.",
    vendor: "AbulaHouse",
    location: "Mushin, Lagos",
  },
  {
    id: 15,
    name: "Premium Goat Meat — Bone-In (1kg)",
    category: "Food",
    price: 8500,
    oldPrice: 10000,
    rating: 4.7,
    ratingCount: 234,
    image: "Assets/Halal Goat Meat.jpg",
    verified: true,
    isNew: true,
    desc: "Fresh, Halal-certified goat meat cut and prepared hygienically. Bone-in cuts ideal for pepper soup, nkwobi, and stew. Per 1kg. Same-day delivery within Lagos.",
    vendor: "FreshMeat Direct",
    location: "Mile 12, Lagos",
  },
  {
    id: 16,
    name: "Fresh Eggs — Crate of 30",
    category: "Food",
    price: 4200,
    oldPrice: 5000,
    rating: 4.9,
    ratingCount: 623,
    image: "Assets/Stacked Egg.jpg",
    verified: true,
    hot: true,
    desc: "Farm-fresh brown eggs. Collected daily from local poultry farms. No chemicals, no hormones. Full crate of 30. Order 2 crates for ₦7,500.",
    vendor: "FarmEggsNG",
    location: "Agege, Lagos",
  },
  {
    id: 17,
    name: "Amala with Ewedu & Assorted Meat",
    category: "Food",
    price: 3800,
    rating: 4.8,
    ratingCount: 310,
    image: "Assets/Amala with Ewedu.png",
    verified: true,
    desc: "Hearty Amala paired with thick Ewedu soup and assorted meat. Signature Yoruba home cooking delivered fresh. Order before 12pm for same-day delivery.",
    vendor: "AbulaHouse",
    location: "Mushin, Lagos",
  },

  // GROCERIES
  {
    id: 18,
    name: "Poiatti Spaghetti — Sicilian (1kg)",
    category: "Groceries",
    price: 3800,
    oldPrice: 4500,
    rating: 4.7,
    ratingCount: 156,
    image: "Assets/SPAG.jpg",
    verified: true,
    isNew: true,
    desc: "Authentic Sicilian pasta from the house of Poiatti, since 1946. 100% durum wheat semolina. Available in Spaghetti n.3, Pasta Integrale, and Bio varieties.",
    vendor: "ItalFoodNG",
    location: "Lekki Phase 1, Lagos",
  },
  {
    id: 19,
    name: "SunCo Premium Cooking Oil (5 Litres)",
    category: "Groceries",
    price: 9500,
    oldPrice: 12000,
    rating: 4.8,
    ratingCount: 412,
    image: "Assets/cooking oil.jpg",
    verified: true,
    hot: true,
    desc: "SunCo pure palm cooking oil — processed 5x for crystal clarity. Fortified with Vitamin A. Ideal for frying, stewing, and everyday Nigerian cooking. 5L jerry can.",
    vendor: "WholesaleGroceriesNG",
    location: "Tradefair, Lagos",
  },
  {
    id: 20,
    name: "Nigerian Tomato Paste & Grocery Bundle",
    category: "Groceries",
    price: 6500,
    oldPrice: 8000,
    rating: 4.7,
    ratingCount: 289,
    image: "Assets/tomato paste.jpg",
    verified: true,
    desc: "Top Nigerian tomato paste brands — Sonia, Tasty Tom, Ric-Giko, St. Rita and more. Bundle includes rice, seasoning cubes, soy sauce, and oyster sauce.",
    vendor: "NaijaPantry",
    location: "Oshodi, Lagos",
  },
];

// ── STATE ──────────────────────────────────────────────────
let cart = [];
let activeCategory = "all";
let currentSort = "default";
let searchQuery = "";
let visibleCount = 12;
let priceMin = 0;
let priceMax = Infinity;
let ratingFilters = [];

// ── FILTER & SORT ──────────────────────────────────────────
function filterAndSortProducts() {
  let list = products.filter((p) => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const matchSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.desc || "").toLowerCase().includes(searchQuery.toLowerCase());
    const matchPrice = p.price >= priceMin && p.price <= priceMax;
    const matchRating =
      ratingFilters.length === 0 || ratingFilters.some((r) => p.rating >= r);
    return matchCat && matchSearch && matchPrice && matchRating;
  });

  switch (currentSort) {
    case "price_asc":
      list.sort((a, b) => a.price - b.price);
      break;
    case "price_desc":
      list.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      list.sort((a, b) => b.rating - a.rating);
      break;
    case "newest":
      list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      break;
    default:
      list.sort((a, b) => (b.hot ? 1 : 0) - (a.hot ? 1 : 0));
  }
  return list;
}

// ── RENDER PRODUCTS ────────────────────────────────────────
function renderProducts() {
  const data = filterAndSortProducts();
  const container = document.getElementById("productGridContainer");
  const loadBtn = document.getElementById("loadMoreBtn");
  if (!container) return;

  if (data.length === 0) {
    container.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:72px 20px;">
        <div style="font-size:3rem;margin-bottom:14px;">🔍</div>
        <h3 style="font-family:Syne,sans-serif;font-weight:800;color:var(--dark);margin-bottom:6px;">No products found</h3>
        <p style="color:var(--muted);">Try adjusting your search or filters</p>
      </div>`;
    if (loadBtn) loadBtn.style.display = "none";
    return;
  }

  const shown = data.slice(0, visibleCount);
  container.innerHTML = shown.map(renderCard).join("");
  if (loadBtn)
    loadBtn.style.display = data.length > visibleCount ? "inline-flex" : "none";

  // Add-to-cart buttons
  container.querySelectorAll(".add-to-cart-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const prod = products.find((p) => p.id === +btn.dataset.id);
      if (!prod) return;
      addToCart(prod);
      btn.classList.add("added");
      btn.innerHTML = '<i class="fas fa-check"></i>';
      setTimeout(() => {
        btn.classList.remove("added");
        btn.innerHTML = '<i class="fas fa-plus"></i>';
      }, 1200);
    });
  });

  // Quick-view buttons
  container.querySelectorAll(".quick-view-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openQuickView(+btn.dataset.id);
    });
  });

  // Card click → quick view
  container.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("click", () => openQuickView(+card.dataset.id));
  });
}

function renderCard(p) {
  const filled = Math.round(p.rating);
  const starsHtml = "★".repeat(filled) + "☆".repeat(5 - filled);
  const badges = [];
  if (p.verified)
    badges.push(
      `<span class="badge badge-verified"><i class="fas fa-shield-alt"></i> Verified</span>`,
    );
  if (p.hot) badges.push(`<span class="badge badge-hot">🔥 Hot</span>`);
  if (p.isNew) badges.push(`<span class="badge badge-new">✨ New</span>`);

  return `
    <div class="product-card" data-id="${p.id}">
      <div class="product-img-wrap">
        <img src="${p.image}" alt="${escHtml(p.name)}" loading="lazy"
             onerror="this.parentElement.style.background='var(--light)'">
        <div class="product-badge-row">${badges.join("")}</div>
        <button class="product-wishlist" aria-label="Save to wishlist"><i class="far fa-heart"></i></button>
        <button class="quick-view-btn" data-id="${p.id}">Quick View</button>
      </div>
      <div class="product-body">
        <div class="product-cat">${escHtml(p.category)}</div>
        <div class="product-name">${escHtml(p.name)}</div>
        <div class="product-rating">
          <span class="stars">${starsHtml}</span>
          <span class="rating-count">${p.rating} (${p.ratingCount.toLocaleString()})</span>
        </div>
        <div class="product-price-row">
          <div>
            <div class="product-price">₦${p.price.toLocaleString()}</div>
            ${p.oldPrice ? `<div class="product-old-price">₦${p.oldPrice.toLocaleString()}</div>` : ""}
          </div>
          <button class="add-to-cart-btn" data-id="${p.id}" aria-label="Add ${escHtml(p.name)} to cart">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>`;
}

function loadMore() {
  visibleCount += 8;
  renderProducts();
}

// ── QUICK VIEW ─────────────────────────────────────────────
function openQuickView(id) {
  const p = products.find((x) => x.id === id);
  if (!p) return;
  const stars =
    "★".repeat(Math.round(p.rating)) + "☆".repeat(5 - Math.round(p.rating));

  document.getElementById("modalContent").innerHTML = `
    <div class="modal-inner">
      <div class="modal-img">
        <img src="${p.image}" alt="${escHtml(p.name)}"
             onerror="this.parentElement.style.background='var(--light)'">
      </div>
      <div class="modal-details">
        <div class="modal-cat">${escHtml(p.category)}${p.vendor ? " · " + escHtml(p.vendor) : ""}</div>
        <div class="modal-name">${escHtml(p.name)}</div>
        <div class="modal-rating">
          <span class="stars">${stars}</span>
          <span style="color:var(--muted);font-size:13px;">${p.rating} · ${p.ratingCount.toLocaleString()} reviews</span>
        </div>
        <div class="modal-desc">${escHtml(p.desc || "Premium quality product from a verified Nigerian vendor.")}</div>
        <div class="modal-price">
          ₦${p.price.toLocaleString()}
          ${p.oldPrice ? `<span style="font-size:15px;color:var(--muted);text-decoration:line-through;font-weight:400;margin-left:10px;">₦${p.oldPrice.toLocaleString()}</span>` : ""}
        </div>
        ${p.location ? `<p style="font-size:12.5px;color:var(--muted);margin-bottom:20px;"><i class="fas fa-map-marker-alt" style="color:var(--green);margin-right:5px;"></i>${escHtml(p.location)}</p>` : ""}
        <button class="modal-add-btn" data-id="${p.id}">
          <i class="fas fa-shopping-bag"></i> Add to Cart
        </button>
      </div>
    </div>`;

  document
    .getElementById("modalContent")
    .querySelector(".modal-add-btn")
    .addEventListener("click", () => {
      addToCart(p);
      closeModal();
    });

  document.getElementById("modalOverlay").classList.add("open");
  document.getElementById("quickViewModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.getElementById("quickViewModal").classList.remove("open");
  document.body.style.overflow = "";
}
document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", closeModal);

// ── CART ───────────────────────────────────────────────────
function addToCart(product) {
  const existing = cart.find((i) => i.id === product.id);
  if (existing) existing.quantity++;
  else cart.push({ ...product, quantity: 1 });
  updateCartBadge();
  updateCartUI();
  showToast(
    `🛍️ ${product.name.length > 32 ? product.name.slice(0, 32) + "…" : product.name} added!`,
  );
}

function updateCartBadge() {
  const total = cart.reduce((s, i) => s + i.quantity, 0);
  document.getElementById("cartCount").textContent = total;
  document.getElementById("cartItemCount").textContent = total;
}

function updateCartUI() {
  const list = document.getElementById("cartItemsList");
  if (!list) return;

  if (cart.length === 0) {
    list.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛍️</div>
        <p>Your cart is empty</p>
        <span>Browse our collection and add items!</span>
      </div>`;
    document.getElementById("cartSubtotal").textContent = "₦0";
    document.getElementById("cartTotalPrice").textContent = "₦0";
    return;
  }

  let subtotal = 0;
  list.innerHTML = cart
    .map((item) => {
      subtotal += item.price * item.quantity;
      return `
      <div class="cart-item">
        <img class="cart-item-img" src="${item.image}" alt="${escHtml(item.name)}"
             onerror="this.style.display='none'">
        <div class="cart-item-info">
          <div class="cart-item-name">${escHtml(item.name)}</div>
          <div class="cart-item-price">₦${item.price.toLocaleString()} each</div>
          <div class="cart-item-controls">
            <button class="qty-btn" data-id="${item.id}" data-action="dec" aria-label="Decrease quantity">−</button>
            <span class="qty-num">${item.quantity}</span>
            <button class="qty-btn" data-id="${item.id}" data-action="inc" aria-label="Increase quantity">+</button>
            <button class="remove-cart-item" data-id="${item.id}" aria-label="Remove item">
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
        <div class="cart-item-total">₦${(item.price * item.quantity).toLocaleString()}</div>
      </div>`;
    })
    .join("");

  document.getElementById("cartSubtotal").textContent =
    `₦${subtotal.toLocaleString()}`;
  document.getElementById("cartTotalPrice").textContent =
    `₦${subtotal.toLocaleString()}`;

  list.querySelectorAll(".qty-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = +btn.dataset.id;
      const item = cart.find((i) => i.id === id);
      if (!item) return;
      if (btn.dataset.action === "inc") {
        item.quantity++;
      } else {
        item.quantity--;
        if (item.quantity <= 0) cart = cart.filter((i) => i.id !== id);
      }
      updateCartBadge();
      updateCartUI();
    });
  });

  list.querySelectorAll(".remove-cart-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      cart = cart.filter((i) => i.id !== +btn.dataset.id);
      updateCartBadge();
      updateCartUI();
      showToast("Item removed from cart");
    });
  });
}

// ── CART DRAWER ────────────────────────────────────────────
function openCart() {
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("cartOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeCart() {
  document.getElementById("cartDrawer").classList.remove("open");
  document.getElementById("cartOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("cartIconBtn").addEventListener("click", openCart);
document.getElementById("closeCartBtn").addEventListener("click", closeCart);
document.getElementById("cartOverlay").addEventListener("click", (e) => {
  if (e.target === document.getElementById("cartOverlay")) closeCart();
});

document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (cart.length === 0) {
    showToast("⚠️ Your cart is empty!");
    return;
  }
  const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  alert(
    `✅ Order Summary\n\n` +
      cart
        .map(
          (i) =>
            `• ${i.name} ×${i.quantity} — ₦${(i.price * i.quantity).toLocaleString()}`,
        )
        .join("\n") +
      `\n\nTotal: ₦${total.toLocaleString()}\n\n🔒 Secured by Paystack. Thank you for shopping with Dev_Mart!`,
  );
  cart = [];
  updateCartBadge();
  updateCartUI();
  closeCart();
});

// ── TOAST ──────────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
}

// ── SEARCH ─────────────────────────────────────────────────
function doSearch(val) {
  searchQuery = val.trim();
  visibleCount = 12;
  renderProducts();
  if (window.innerWidth < 640) {
    document
      .getElementById("productsSection")
      .scrollIntoView({ behavior: "smooth" });
  }
}

document.getElementById("searchBtn").addEventListener("click", () => {
  doSearch(document.getElementById("searchInput").value);
});
document.getElementById("searchInput").addEventListener("keyup", (e) => {
  if (e.key === "Enter") doSearch(e.target.value);
  else if (!e.target.value) doSearch("");
});

// Mobile search toggle
document.getElementById("mobileSearchToggle").addEventListener("click", () => {
  const bar = document.getElementById("mobileSearchBar");
  bar.classList.toggle("open");
  if (bar.classList.contains("open"))
    document.getElementById("mobileSearchInput").focus();
});
document.getElementById("mobileSearchBtn").addEventListener("click", () => {
  doSearch(document.getElementById("mobileSearchInput").value);
  document.getElementById("mobileSearchBar").classList.remove("open");
});
document.getElementById("mobileSearchInput").addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    doSearch(e.target.value);
    document.getElementById("mobileSearchBar").classList.remove("open");
  }
});

// ── CATEGORY FILTER ────────────────────────────────────────
document.getElementById("categoryFilter").addEventListener("click", (e) => {
  const pill = e.target.closest(".cat-pill");
  if (!pill) return;
  setCategory(pill.dataset.cat);
  document
    .getElementById("productsSection")
    .scrollIntoView({ behavior: "smooth" });
});

function setCategory(cat) {
  activeCategory = cat;
  visibleCount = 12;

  // Sync all pill sets
  document
    .querySelectorAll(".cat-pill")
    .forEach((p) => p.classList.toggle("active", p.dataset.cat === cat));

  // Sync desktop sidebar radios
  document
    .querySelectorAll('input[name="catFilter"]')
    .forEach((r) => (r.checked = r.value === cat));

  // Sync mobile sheet radios
  document
    .querySelectorAll('input[name="catFilterM"]')
    .forEach((r) => (r.checked = r.value === cat));

  renderProducts();
}

// Called by sidebar / sheet radios
function setSideFilter(radio) {
  setCategory(radio.value);
}

// Called by category showcase cards
function filterCategory(cat) {
  setCategory(cat);
  document
    .getElementById("productsSection")
    .scrollIntoView({ behavior: "smooth" });
}

// ── SORT ───────────────────────────────────────────────────
document.getElementById("sortSelect").addEventListener("change", (e) => {
  currentSort = e.target.value;
  // keep mobile select in sync
  document.getElementById("mobileSortSelect").value = e.target.value;
  renderProducts();
});
document.getElementById("mobileSortSelect").addEventListener("change", (e) => {
  currentSort = e.target.value;
  // keep desktop select in sync
  document.getElementById("sortSelect").value = e.target.value;
  renderProducts();
});

// ── PRICE FILTER ───────────────────────────────────────────
function applyPriceFilter() {
  const min = document.getElementById("priceMin").value;
  const max = document.getElementById("priceMax").value;
  priceMin = min ? parseInt(min) : 0;
  priceMax = max ? parseInt(max) : Infinity;
  // sync mobile
  if (document.getElementById("priceMinM"))
    document.getElementById("priceMinM").value = min;
  if (document.getElementById("priceMaxM"))
    document.getElementById("priceMaxM").value = max;
  renderProducts();
}
function applyPriceFilterM() {
  const min = document.getElementById("priceMinM").value;
  const max = document.getElementById("priceMaxM").value;
  priceMin = min ? parseInt(min) : 0;
  priceMax = max ? parseInt(max) : Infinity;
  // sync desktop
  if (document.getElementById("priceMin"))
    document.getElementById("priceMin").value = min;
  if (document.getElementById("priceMax"))
    document.getElementById("priceMax").value = max;
  renderProducts();
}

// ── RATING FILTER ──────────────────────────────────────────
function applyRatingFilter(checkbox) {
  const val = parseInt(checkbox.value);
  if (checkbox.checked) {
    if (!ratingFilters.includes(val)) ratingFilters.push(val);
  } else {
    ratingFilters = ratingFilters.filter((r) => r !== val);
  }
  renderProducts();
}

// ── CLEAR ALL FILTERS ──────────────────────────────────────
function clearAllFilters() {
  activeCategory = "all";
  currentSort = "default";
  searchQuery = "";
  priceMin = 0;
  priceMax = Infinity;
  ratingFilters = [];
  visibleCount = 12;

  document.getElementById("searchInput").value = "";
  if (document.getElementById("mobileSearchInput"))
    document.getElementById("mobileSearchInput").value = "";
  document.getElementById("priceMin").value = "";
  document.getElementById("priceMax").value = "";
  if (document.getElementById("priceMinM"))
    document.getElementById("priceMinM").value = "";
  if (document.getElementById("priceMaxM"))
    document.getElementById("priceMaxM").value = "";

  document
    .querySelectorAll('input[name="catFilter"]')
    .forEach((r) => (r.checked = r.value === "all"));
  document
    .querySelectorAll('input[name="catFilterM"]')
    .forEach((r) => (r.checked = r.value === "all"));
  document
    .querySelectorAll('input[type="checkbox"]')
    .forEach((cb) => (cb.checked = false));
  document
    .querySelectorAll(".cat-pill")
    .forEach((p) => p.classList.toggle("active", p.dataset.cat === "all"));
  document.getElementById("sortSelect").value = "default";
  document.getElementById("mobileSortSelect").value = "default";

  renderProducts();
  showToast("✅ Filters cleared");
}
document
  .getElementById("clearAllFilters")
  .addEventListener("click", clearAllFilters);

// ── MOBILE FILTER SHEET ────────────────────────────────────
function openFilterSheet() {
  document.getElementById("filterSheet").classList.add("open");
  document.getElementById("sheetOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeFilterSheet() {
  document.getElementById("filterSheet").classList.remove("open");
  document.getElementById("sheetOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

document
  .getElementById("openMobileFilters")
  .addEventListener("click", openFilterSheet);
document
  .getElementById("closeFilterSheet")
  .addEventListener("click", closeFilterSheet);
document.getElementById("sheetOverlay").addEventListener("click", (e) => {
  if (e.target === document.getElementById("sheetOverlay")) closeFilterSheet();
});
document.getElementById("clearSheetFilters").addEventListener("click", () => {
  clearAllFilters();
});
document.getElementById("applySheetFilters").addEventListener("click", () => {
  closeFilterSheet();
  document
    .getElementById("productsSection")
    .scrollIntoView({ behavior: "smooth" });
});

// ── HERO SHOP NOW button ───────────────────────────────────
document.getElementById("heroShopBtn").addEventListener("click", () => {
  document
    .getElementById("productsSection")
    .scrollIntoView({ behavior: "smooth" });
});

// ── AI RECOMMENDATIONS ─────────────────────────────────────
function renderAI() {
  const picks = [...products].sort(() => Math.random() - 0.5).slice(0, 6);
  const container = document.getElementById("aiRecommendations");
  if (!container) return;
  container.innerHTML = picks
    .map(
      (p) => `
    <div class="ai-product-card">
      <img class="ai-img" src="${p.image}" alt="${escHtml(p.name)}" loading="lazy"
           onerror="this.style.display='none'">
      <div class="ai-body">
        <div class="ai-tag">${escHtml(p.category)} · ⭐ ${p.rating}</div>
        <div class="ai-name">${escHtml(p.name)}</div>
        <div class="ai-price">₦${p.price.toLocaleString()}</div>
        <button class="ai-add-btn" data-id="${p.id}">Add to Cart</button>
      </div>
    </div>`,
    )
    .join("");

  container.querySelectorAll(".ai-add-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const prod = products.find((p) => p.id === +btn.dataset.id);
      if (prod) addToCart(prod);
    });
  });
}

// ── COUNTDOWN TIMER ────────────────────────────────────────
function startTimer() {
  let secs = 8 * 3600 + 34 * 60 + 22;
  const pad = (n) => String(n).padStart(2, "0");
  const tick = () => {
    if (secs <= 0) return;
    secs--;
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    document.getElementById("tHours").textContent = pad(h);
    document.getElementById("tMins").textContent = pad(m);
    document.getElementById("tSecs").textContent = pad(s);
  };
  setInterval(tick, 1000);
}

// ── WISHLIST TOGGLE (delegated) ────────────────────────────
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".product-wishlist");
  if (!btn) return;
  const icon = btn.querySelector("i");
  if (icon.classList.contains("far")) {
    icon.classList.replace("far", "fas");
    btn.style.color = "var(--orange)";
    showToast("❤️ Added to wishlist");
  } else {
    icon.classList.replace("fas", "far");
    btn.style.color = "";
    showToast("Removed from wishlist");
  }
});

// ── ESC KEY CLOSES OVERLAYS ────────────────────────────────
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  closeModal();
  closeCart();
  closeFilterSheet();
});

// ── HELPER: HTML escape ────────────────────────────────────
function escHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ── RECENTLY VIEWED ────────────────────────────────────────
const recentlyViewed = [];
const MAX_RECENT = 6;

function addToRecentlyViewed(product) {
  const exists = recentlyViewed.findIndex((p) => p.id === product.id);
  if (exists > -1) recentlyViewed.splice(exists, 1);
  recentlyViewed.unshift(product);
  if (recentlyViewed.length > MAX_RECENT) recentlyViewed.pop();
  renderRecentlyViewed();
}

function renderRecentlyViewed() {
  const section = document.getElementById("recentlySection");
  const grid = document.getElementById("recentlyGrid");
  if (!section || !grid) return;
  if (recentlyViewed.length === 0) {
    section.style.display = "none";
    return;
  }
  section.style.display = "";
  grid.innerHTML = recentlyViewed
    .map(
      (p) => `
    <div class="recently-card" onclick="openQuickView(${p.id})">
      <img src="${p.image}" alt="${escHtml(p.name)}" loading="lazy"
           onerror="this.parentElement.style.background='var(--light)'">
      <div class="recently-card-body">
        <div class="recently-card-name">${escHtml(p.name)}</div>
        <div class="recently-card-price">₦${p.price.toLocaleString()}</div>
      </div>
    </div>`,
    )
    .join("");
}

// ── SEARCH SUGGESTIONS ─────────────────────────────────────
const suggestionBox = document.getElementById("searchSuggestions");
let suggTimeout;

function positionSuggestions(inputEl) {
  const rect = inputEl.getBoundingClientRect();
  suggestionBox.style.top = rect.bottom + window.scrollY + 8 + "px";
  suggestionBox.style.left = rect.left + "px";
  suggestionBox.style.width = rect.width + "px";
}

function showSuggestions(val, inputEl) {
  clearTimeout(suggTimeout);
  if (!val || val.length < 2) {
    suggestionBox.classList.remove("open");
    return;
  }
  suggTimeout = setTimeout(() => {
    const matches = products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(val.toLowerCase()) ||
          p.category.toLowerCase().includes(val.toLowerCase()),
      )
      .slice(0, 5);
    if (matches.length === 0) {
      suggestionBox.classList.remove("open");
      return;
    }
    positionSuggestions(inputEl);
    suggestionBox.innerHTML = matches
      .map(
        (p) => `
      <div class="suggestion-item" data-id="${p.id}">
        <img src="${p.image}" alt="" onerror="this.style.display='none'">
        <span>${escHtml(p.name)}</span>
        <span class="suggestion-price">₦${p.price.toLocaleString()}</span>
      </div>`,
      )
      .join("");
    suggestionBox.classList.add("open");
    suggestionBox.querySelectorAll(".suggestion-item").forEach((item) => {
      item.addEventListener("click", () => {
        openQuickView(+item.dataset.id);
        suggestionBox.classList.remove("open");
      });
    });
  }, 200);
}

document.getElementById("searchInput").addEventListener("input", (e) => {
  showSuggestions(e.target.value, e.target);
});
document.addEventListener("click", (e) => {
  if (
    !e.target.closest(".search-box") &&
    !e.target.closest(".search-suggestions")
  ) {
    suggestionBox.classList.remove("open");
  }
});

// ── BACK TO TOP ─────────────────────────────────────────────
const backToTopBtn = document.getElementById("backToTop");
window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY > 400) backToTopBtn.classList.add("visible");
    else backToTopBtn.classList.remove("visible");
  },
  { passive: true },
);
backToTopBtn.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" }),
);

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ── MOBILE BOTTOM NAV CART SYNC ───────────────────────────
const mbnCartBtn = document.getElementById("mbnCartBtn");
if (mbnCartBtn) mbnCartBtn.addEventListener("click", openCart);

function updateMbnCartBadge() {
  const badge = document.getElementById("mbnCartCount");
  if (badge) badge.textContent = cart.reduce((s, i) => s + i.quantity, 0);
}

// Patch updateCartBadge to also update mobile bottom nav
const _origUpdateCartBadge = updateCartBadge;
function updateCartBadge() {
  _origUpdateCartBadge();
  updateMbnCartBadge();
}

// ── NEWSLETTER ─────────────────────────────────────────────
function handleNewsletter(e) {
  e.preventDefault();
  const email = document.getElementById("newsletterEmail").value;
  showToast(`🎉 Thanks! ${email} subscribed to Dev_Mart deals!`);
  document.getElementById("newsletterForm").reset();
}

// ── PATCH openQuickView for recently viewed ─────────────────
const _origOpenQuickView = openQuickView;
function openQuickView(id) {
  const p = products.find((x) => x.id === id);
  if (p) addToRecentlyViewed(p);
  _origOpenQuickView(id);
}

// ── INIT ──────────────────────────────────────────────────
function init() {
  renderProducts();
  updateCartBadge();
  updateCartUI();
  renderAI();
  startTimer();
  renderRecentlyViewed();
}
init();
