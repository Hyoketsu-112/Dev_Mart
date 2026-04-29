# Dev_Mart 🛍️

### Nigerian Tech Store — Lagos, Nigeria

A frontend e-commerce storefront built for Lagos tech enthusiasts and gadget lovers. It covers six product categories — **Smartphones**, **Laptops**, **Gaming**, **Audio**, **Wearables**, and **Accessories** — and delivers a full shopping experience from browsing to checkout, all in the browser with no backend required.

---

## What It Does

| Feature             | Details                                                           |
| ------------------- | ----------------------------------------------------------------- |
| Product catalogue   | 20+ premium tech products across all categories                   |
| Product galleries   | Multiple images per product with gallery switching                |
| Color variants      | Rich color selection for phones, laptops, and accessories         |
| Search              | Live search with instant dropdown suggestions                     |
| Filtering & sorting | Category pills, price sort, In Stock Only, Verified Sellers Only  |
| Quick View modal    | Product details + specs + quantity selector, all in a pop-up      |
| Cart                | Slide-out drawer; persists across page refreshes (localStorage)   |
| Wishlist            | Save items; badge count persists in localStorage                  |
| Stock indicators    | Low stock warnings (≤5 items), express delivery badges            |
| Coupon codes        | `DEVMART10`, `NAIJA20`, `LAGOS15`                                 |
| Checkout flow       | 3-step: Address → Order Review → Confirmation                     |
| AI Picks            | Top 6 products ranked by `rating × log(reviewCount)` — not random |
| Flash sale timer    | Countdown persists deadline across refreshes                      |
| Recently Viewed     | Tracks last-viewed products, stored in localStorage               |
| WhatsApp button     | Floating chat-with-us shortcut                                    |
| Mobile bottom nav   | Home, Shop, Cart, Saved, Account tabs                             |
| Newsletter signup   | Email capture with toast confirmation                             |

---

## Project Structure

```
dev_mart/
│
├── index.html       # All markup — navbar, hero, product grid, modals, drawers
├── style.css        # All styles — layout, components, animations, dark/light vars
├── app.js           # All logic — product data (20 tech products), cart, filters, checkout
│
└── Assets/          # Tech product images (referenced by filename in app.js)
    ├── iPhone17.jpg
    ├── Samsung s24.jpg
    ├── PS5 PACKAGE.jpg
    ├── JBL Boombox 3...jpg
    ├── pc setup.jpg
    └── ... (30+ tech product images)
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

## localStorage Keys

The app saves state to the browser's localStorage so nothing is lost on refresh.

| Key                 | What it stores                 |
| ------------------- | ------------------------------ |
| `dm_cart`           | Cart items and quantities      |
| `dm_wishlist`       | Saved/wishlisted product IDs   |
| `dm_recent`         | Recently viewed product IDs    |
| `dm_flash_deadline` | Flash sale timer end timestamp |

To fully reset the app state: open DevTools → Application → Local Storage → clear all `dm_*` keys.

---

## Adding Products

All products live in the `products` array at the top of `app.js`. Each product follows this shape:

```js
{
  id: 21,                          // unique number
  name: "Product Name",
  category: "Fabrics",             // "Fabrics" | "Food" | "Groceries"
  price: 5000,                     // in Naira (₦)
  oldPrice: 7000,                  // optional — shows strikethrough
  rating: 4.8,                     // out of 5
  ratingCount: 120,
  image: "Assets/your-image.jpg",
  verified: true,                  // shows ✅ badge
  inStock: true,                   // false = "Out of Stock"
  hot: true,                       // optional — shows 🔥 Hot badge
  isNew: true,                     // optional — shows ✨ New badge
  desc: "Short product description.",
  vendor: "VendorName",
  location: "Area, Lagos",
}
```

Drop the image into the `Assets/` folder and add the object to the array. That's it.

---

## Adding a New Category

1. Add a new `<button class="cat-pill" data-cat="YourCategory">` in `index.html` inside `#categoryFilter`
2. Make sure new products use the exact same string in their `category` field
3. The filter logic in `app.js` (`renderProducts()`) handles it automatically — no code changes needed

---

## Modals & UI Pieces

| Component             | How it's triggered                                |
| --------------------- | ------------------------------------------------- |
| Quick View modal      | Click any product card or "View" button           |
| Cart drawer           | Click the bag icon in navbar or mobile bottom nav |
| Checkout modal        | Click "Proceed to Checkout" in the cart drawer    |
| How It Works modal    | Click "How It Works" in the hero section          |
| Filter sheet (mobile) | Tap "Filters & Sort" bar on small screens         |
| Search suggestions    | Type 2+ characters in the search bar              |

All modals close on `Escape` key or clicking the backdrop overlay.

---

## Fonts & Icons

- **Syne** — headings and logo (via Google Fonts)
- **DM Sans** — body text (via Google Fonts)
- **Font Awesome 6.5** — all icons (via cdnjs CDN)

No icon font files are bundled locally. The app requires an internet connection to load fonts and icons correctly.

---

## Known Limitations / Things Not Yet Built

- No real payment integration (Paystack UI is simulated)
- No backend or database — product data is hardcoded in `app.js`
- Wishlist page UI is not built (badge count works, page says "coming soon")
- Account page is a placeholder
- No admin panel for vendors to manage listings

These are the natural next steps if the project grows.

---

## Contact

Built and maintained by the Dev_Mart team.  
WhatsApp: [+234 802 772 1006](https://wa.me/23408027721006)  
Location: Ojota, Lagos, Nigeria
