# Dev_Mart 🛍️

### Nigerian Tech & Gadgets Store — Lagos, Nigeria

A frontend e-commerce storefront built for Lagos tech enthusiasts and gadget lovers. It covers six product categories — **Smartphones**, **Laptops**, **Gaming**, **Audio**, **Wearables**, and **Accessories** — and delivers a full shopping experience from browsing to checkout, all in the browser with no backend required.

---

## What It Does

| Feature               | Details                                                                        |
| --------------------- | ------------------------------------------------------------------------------ |
| Product catalogue     | 20 premium tech products across all categories                                 |
| Product galleries     | Multiple images per product with thumbnail switching                           |
| Color variants        | Visual color picker for phones, laptops, and accessories (25+ colors)          |
| Trending Now section  | Auto-populated carousel sorted by popularity (rating × review count)           |
| Deal of the Day       | Featured product with the highest discount % and a live countdown timer        |
| Search                | Live search with instant dropdown suggestions                                  |
| Filtering & sorting   | Category pills, price sort, In Stock Only, Verified Sellers Only               |
| Quick View modal      | Product details, specs, gallery, color picker, and quantity selector in pop-up |
| Cart                  | Slide-out drawer; persists across page refreshes (localStorage)                |
| Wishlist              | Save items; badge count persists in localStorage                               |
| Stock indicators      | Low stock warnings (≤5 items), express delivery badges                         |
| Coupon codes          | `DEVMART10`, `NAIJA20`, `LAGOS15`                                              |
| Checkout flow         | 3-step: Address → Order Review → Confirmation                                  |
| AI Picks              | Top 6 products ranked by `rating × log(reviewCount)` — not random             |
| Flash sale timer      | Countdown persists deadline across refreshes                                   |
| Recently Viewed       | Tracks last-viewed products, stored in localStorage                            |
| Dark mode             | Full dark theme, preference saved to localStorage                              |
| WhatsApp button       | Floating chat-with-us shortcut                                                 |
| Mobile bottom nav     | Home, Shop, Cart, Saved, Account tabs                                          |
| Newsletter signup     | Email capture with toast confirmation                                          |

---

## Product Categories

```
✓ Smartphones  — iPhone 17 Pro Max, Samsung Galaxy S26 Ultra, Xiaomi 14 Pro, and more
✓ Laptops      — MacBook Air M3, Dell Precision 5690, Lenovo IdeaPad 5 Pro
✓ Gaming       — PS5 Pro, Xbox Series X, controllers, mechanical keyboards
✓ Audio        — JBL Boombox 3, Sony WH-1000XM6 headphones
✓ Wearables    — Apple Watch Ultra 3, Samsung Galaxy Watch 7
✓ Accessories  — Power banks, phone cases, charging cables
```

---

## Project Structure

```
Dev_Mart/
│
├── index.html       # All markup — navbar, hero, trending, deals, product grid, modals, drawers
├── style.css        # All styles — layout, components, animations, dark/light vars (500+ lines added in v2.0)
├── app.js           # All logic — 20 products, cart, filters, gallery, color picker, checkout
│
└── Assets/          # Tech product images (referenced by filename in app.js)
    ├── iPhone17.jpg
    ├── Galaxy S26 Ultra.jpg
    ├── PS5 PACKAGE.jpg
    ├── JBL Boombox 3...jpg
    ├── pc setup.jpg
    └── ... (20+ tech product images)
```

> The entire app is **three files + asset images**. No build step, no npm, no framework. Open `index.html` in a browser and it runs.

---

## How to Run

```bash
# Clone or download the project
git clone https://github.com/your-username/dev_mart.git
cd dev_mart

# Option 1 — just open it
open index.html

# Option 2 — use a local server (avoids image path issues on some browsers)
npx serve .
# or
python -m http.server 8000
```

---

## Coupon Codes

Three discount codes are built into `app.js`:

| Code        | Discount |
| ----------- | -------- |
| `DEVMART10` | 10% off  |
| `NAIJA20`   | 20% off  |
| `LAGOS15`   | 15% off  |

To add or change codes, find the `COUPONS` object near the top of `app.js`.

---

## Adding Products

All products live in the `products` array at the top of `app.js`. Each product follows this shape:

```js
{
  id: 21,
  name: "Product Name",
  category: "Smartphones",        // "Smartphones" | "Laptops" | "Gaming" | "Audio" | "Wearables" | "Accessories"
  subcategory: "Premium Phones",  // optional — for internal grouping
  price: 150000,                  // in Naira (₦)
  oldPrice: 200000,               // optional — shows strikethrough price
  rating: 4.8,                    // out of 5
  ratingCount: 1234,
  image: "Assets/your-image.jpg",
  gallery: ["Assets/img1.jpg", "Assets/img2.jpg"],  // optional — enables thumbnail gallery
  colors: ["Black", "Silver", "Gold"],              // optional — enables color picker
  verified: true,                 // shows ✅ Verified Seller badge
  inStock: true,                  // false = "Out of Stock"
  inStock_count: 10,              // shows "Low Stock" warning if ≤5
  hot: true,                      // optional — shows 🔥 Hot badge + pulse glow
  trending: true,                 // optional — appears in Trending Now section
  badge: "NEW",                   // optional — "NEW" | "BESTSELLER" | "EXCLUSIVE" | "LIMITED" | "PREMIUM" | "FEATURED"
  discount: 20,                   // optional — discount % (auto-calculates from price/oldPrice if omitted)
  freeShipping: true,             // optional — shows Free Shipping tag
  express_delivery: true,         // optional — shows Express Delivery badge
  cod_available: true,            // optional — shows Cash on Delivery tag
  warranty: "2 Years",            // optional — shows warranty info
  desc: "Short product description.",
  vendor: "VendorName",
  location: "Area, Lagos",
  specs: "Technical spec summary line",
}
```

Drop the image into `Assets/` and add the object to the `products` array. That's it — no other code changes needed.

---

## Adding a New Category

1. Add a new `<button class="cat-pill" data-cat="YourCategory">` in `index.html` inside `#categoryFilter`
2. Make sure new products use the exact same string in their `category` field
3. The filter logic in `app.js` (`renderProducts()`) handles it automatically

---

## localStorage Keys

The app saves state to the browser's localStorage so nothing is lost on refresh.

| Key                 | What it stores                  |
| ------------------- | ------------------------------- |
| `dm_cart`           | Cart items and quantities       |
| `dm_wishlist`       | Saved/wishlisted product IDs    |
| `dm_recent`         | Recently viewed product IDs     |
| `dm_flash_deadline` | Flash sale timer end timestamp  |
| `dm_theme`          | User's dark/light mode preference |

To fully reset the app state: open DevTools → Application → Local Storage → clear all `dm_*` keys.

---

## Modals & UI Pieces

| Component             | How it's triggered                                 |
| --------------------- | -------------------------------------------------- |
| Quick View modal      | Click any product card or "View" button            |
| Cart drawer           | Click the bag icon in navbar or mobile bottom nav  |
| Checkout modal        | Click "Proceed to Checkout" in the cart drawer     |
| How It Works modal    | Click "How It Works" in the hero section           |
| Filter sheet (mobile) | Tap "Filters & Sort" bar on small screens          |
| Search suggestions    | Type 2+ characters in the search bar               |

All modals close on `Escape` key or clicking the backdrop overlay.

---

## Fonts & Icons

- **Syne** — headings and logo (via Google Fonts)
- **DM Sans** — body text (via Google Fonts)
- **Font Awesome 6.5** — all icons (via cdnjs CDN)

No font or icon files are bundled locally. The app requires an internet connection to load fonts and icons correctly.

---

## Browser Support

- Chrome / Chromium (v90+)
- Firefox (v88+)
- Safari (v14+)
- Edge (v90+)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Known Limitations / Things Not Yet Built

- No real payment integration (Paystack UI is simulated)
- No backend or database — product data is hardcoded in `app.js`
- Wishlist page UI is not built (badge count works, page says "coming soon")
- Account page is a placeholder
- No admin panel for vendors to manage listings

---

## Roadmap

- [ ] Product comparison tool
- [ ] Customer reviews system
- [ ] Advanced search with autocomplete
- [ ] Related products recommendations
- [ ] Vendor profiles
- [ ] Loyalty points system
- [ ] Live chat support
- [ ] Email notifications

---

## Contact

Built and maintained by the Dev_Mart team.  
WhatsApp: [+234 802 772 1006](https://wa.me/23408027721006)  
Location: Ojota, Lagos, Nigeria

---

*Version 2.0 — Modern Tech Store Edition · Last updated April 2026*