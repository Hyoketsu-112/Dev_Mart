/* ==========================================================
   Dev_Mart — app.js   (RESTRUCTURED & ENHANCED)
   
   Tech Store Edition - Complete Restructuring:
  ✅ 26 premium tech products (replaced fabrics & food)
   ✅ Detailed product specifications for each item
   ✅ Product galleries with multiple images per item
   ✅ Rich color variants for smartphones, laptops, accessories
   ✅ Stock tracking with low-stock warnings
   ✅ Trending products with hot deal badges
   ✅ Express delivery and COD availability flags
   ✅ Warranty information for all products
   
   Core Features Maintained:
   ✅ Cart persisted in localStorage (survives refresh)
   ✅ Availability filters (In Stock Only, Verified Sellers) work
   ✅ Active filter chips shown and removable
   ✅ "How It Works" modal functional
   ✅ Wishlist persisted in localStorage; navbar badge reflects count
   ✅ Real multi-step checkout flow — address → review → confirmation
   ✅ Quantity selector in Quick View modal
   ✅ Coupon / discount code support (DEVMART10, NAIJA20, LAGOS15)
   ✅ Flash-sale timer persists deadline across refreshes
   ✅ AI picks weighted by rating × review count (not random)
   ✅ Recently viewed persisted in localStorage
========================================================== */

"use strict";

// ── PRODUCT DATABASE ─────────────────────────────────────
const products = [
  {
    id: 1,
    name: "iPhone 17 Pro Max — Ultimate Flagship",
    category: "Smartphones",
    subcategory: "Premium Phones",
    price: 849000,
    oldPrice: 999000,
    rating: 4.9,
    ratingCount: 2342,
    image: "Assets/iPhone17.jpg",
    gallery: ["Assets/iPhone17.jpg", "Assets/iPhone 17 pro.jpg"],
    colors: ["Space Black", "Silver", "Gold", "Deep Purple"],
    verified: true,
    inStock: true,
    hot: true,
    trending: true,
    badge: "NEW",
    discount: 15,
    freeShipping: true,
    warranty: "2 Years",
    inStock_count: 12,
    express_delivery: true,
    cod_available: true,
    desc: "Experience the pinnacle of smartphone innovation with iPhone 17 Pro Max. 6.9-inch Super Retina XDR display with 120Hz ProMotion, A17 Pro chip, pro camera system with 48MP main sensor, titanium build, and all-day battery life. Built for creators and professionals.",
    vendor: "TechHub Nigeria",
    location: "Lekki, Lagos",
    specs: '6.9" Super Retina XDR · A17 Pro · 256GB/512GB · 48MP Main',
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra — Flagship Excellence",
    category: "Smartphones",
    subcategory: "Premium Phones",
    price: 799000,
    oldPrice: 949000,
    rating: 4.8,
    ratingCount: 1876,
    image: "Assets/Samsung s24.jpg",
    gallery: ["Assets/Samsung s24.jpg", "Assets/Samsung S23.jpg"],
    colors: ["Phantom Black", "Titanium Gray", "Titanium Gold"],
    verified: true,
    inStock: true,
    hot: true,
    trending: true,
    badge: "HOT",
    discount: 16,
    freeShipping: true,
    warranty: "2 Years",
    inStock_count: 8,
    express_delivery: true,
    cod_available: true,
    desc: "Redefine mobile photography with Galaxy S24 Ultra's advanced camera system. 200MP main sensor, AI-powered Night Mode, Snapdragon 8 Gen 3, 6.8-inch display, IP68 rated, and 5000mAh battery. Perfect for content creators.",
    vendor: "Samsung Store Nigeria",
    location: "Victoria Island, Lagos",
    specs: '6.8" AMOLED · Snapdragon 8 Gen 3 · 256GB · 200MP',
  },
  {
    id: 3,
    name: "Apple iPhone 14 — Timeless Performance",
    category: "Smartphones",
    subcategory: "Mid-Range Phones",
    price: 399000,
    oldPrice: 499000,
    rating: 4.7,
    ratingCount: 3421,
    image: "Assets/Apple iPhone 14.jpg",
    gallery: [
      "Assets/Apple iPhone 14.jpg",
      "Assets/Apple iPhone 14 (128 GB) - purple.jpg",
    ],
    colors: ["Black", "Purple", "Blue", "Gold", "Red"],
    verified: true,
    inStock: true,
    badge: "BESTSELLER",
    discount: 20,
    freeShipping: true,
    warranty: "1 Year",
    inStock_count: 25,
    express_delivery: true,
    cod_available: true,
    desc: "Reliable performance for everyday use. 6.1-inch Super Retina XDR display, A15 Bionic chip, Dual camera system with Night Mode, Action Mode video, and improved battery life. A great choice for most users.",
    vendor: "Apple Authorized Dealer",
    location: "Ikeja, Lagos",
    specs: '6.1" Super Retina XDR · A15 Bionic · 128GB/256GB',
  },
  {
    id: 4,
    name: "Samsung Galaxy A17 — Budget-Friendly Choice",
    category: "Smartphones",
    subcategory: "Budget Phones",
    price: 149000,
    oldPrice: 189000,
    rating: 4.5,
    ratingCount: 892,
    image: "Assets/Samsung galaxy A17.jpg",
    gallery: ["Assets/Samsung galaxy A17.jpg"],
    colors: ["Black", "Blue", "Green"],
    verified: true,
    inStock: true,
    badge: "VALUE",
    discount: 21,
    freeShipping: true,
    warranty: "1 Year",
    inStock_count: 30,
    express_delivery: false,
    cod_available: true,
    desc: "Great smartphone for everyday tasks. 6.5-inch display, MediaTek processor, 50MP main camera, 5000mAh battery with fast charging. Perfect for students and budget-conscious users.",
    vendor: "TechMart Nigeria",
    location: "Lekki, Lagos",
    specs: '6.5" OLED · MediaTek Helio · 128GB · 50MP',
  },
  {
    id: 5,
    name: "Xiaomi Redmi 12 — Value for Money",
    category: "Smartphones",
    subcategory: "Budget Phones",
    price: 119000,
    oldPrice: 149000,
    rating: 4.6,
    ratingCount: 1205,
    image: "Assets/Xiaomi Redmi 12.jpg",
    gallery: ["Assets/Xiaomi Redmi 12.jpg"],
    colors: ["Black", "Blue", "Green", "Gold"],
    verified: true,
    inStock: true,
    trending: true,
    badge: "FEATURED",
    discount: 20,
    freeShipping: true,
    warranty: "1 Year",
    inStock_count: 40,
    express_delivery: true,
    cod_available: true,
    desc: "Maximum value at minimal cost. 6.7-inch display, MediaTek Helio G88, 50MP main camera, 5000mAh battery, 18W fast charging. Excellent for gaming and everyday use.",
    vendor: "Xiaomi Nigeria",
    location: "Ikeja, Lagos",
    specs: '6.7" IPS LCD · MediaTek Helio G88 · 128GB · 50MP',
  },
  {
    id: 6,
    name: "Apple iPhone 15 — Modern Flagship",
    category: "Smartphones",
    subcategory: "Premium Phones",
    price: 549000,
    oldPrice: 649000,
    rating: 4.8,
    ratingCount: 2156,
    image: "Assets/Apple iPhone 15 (128 GB) - Blue.jpg",
    gallery: [
      "Assets/Apple iPhone 15 (128 GB) - Blue.jpg",
      "Assets/Apple iPhone 15 128GB - Black _ JD Williams.jpg",
    ],
    colors: ["Black", "Blue", "Green", "Yellow", "Pink"],
    verified: true,
    inStock: true,
    hot: true,
    badge: "NEW",
    discount: 15,
    freeShipping: true,
    warranty: "2 Years",
    inStock_count: 15,
    express_delivery: true,
    cod_available: true,
    desc: "Latest iPhone with Dynamic Island, A16 Bionic chip, 6.1-inch Super Retina XDR display, USB-C connectivity, improved cameras with Night Mode, and all-day battery. Perfect balance of performance and price.",
    vendor: "Apple Store Nigeria",
    location: "Lekki, Lagos",
    specs: '6.1" Super Retina XDR · A16 Bionic · 128GB/256GB',
  },
  {
    id: 7,
    name: "MacBook Air M2 — Creative Professional",
    category: "Laptops",
    subcategory: "Premium Laptops",
    price: 1299000,
    oldPrice: 1549000,
    rating: 4.9,
    ratingCount: 1823,
    image:
      "Assets/Two MacBook Air M2 Space Gray - PSD - 108653 _ Yellow Images.jpg",
    gallery: [
      "Assets/Two MacBook Air M2 Space Gray - PSD - 108653 _ Yellow Images.jpg",
    ],
    colors: ["Space Gray", "Silver", "Gold"],
    verified: true,
    inStock: true,
    hot: true,
    trending: true,
    badge: "PREMIUM",
    discount: 16,
    freeShipping: true,
    warranty: "3 Years",
    inStock_count: 6,
    express_delivery: true,
    cod_available: true,
    desc: "Ultra-thin and powerful. Apple M2 chip with 8-core CPU, 10-core GPU, 16GB unified memory, 512GB SSD. Stunning 13.6-inch Liquid Retina display, 18-hour battery life, perfect for creators and professionals.",
    vendor: "Apple Pro Store Nigeria",
    location: "Victoria Island, Lagos",
    specs: 'M2 · 16GB RAM · 512GB SSD · 13.6" Retina',
  },
  {
    id: 8,
    name: "Dell Precision 5760 — Workstation Power",
    category: "Laptops",
    subcategory: "Professional Laptops",
    price: 2899000,
    oldPrice: 3499000,
    rating: 4.8,
    ratingCount: 654,
    image:
      "Assets/Dell Precision 5760 Workstation Laptop _ 17_ 1920x1200 FHD+ _ Core i7-11850H - 512GB SSD Hard Drive - 32GB RAM - Nvidia RTX A3000 _ 8 cores @ 4_8 GHz - 6GB GDDR6 Win 11 Pro Silver.jpg",
    gallery: [
      "Assets/Dell Precision 5760 Workstation Laptop _ 17_ 1920x1200 FHD+ _ Core i7-11850H - 512GB SSD Hard Drive - 32GB RAM - Nvidia RTX A3000 _ 8 cores @ 4_8 GHz - 6GB GDDR6 Win 11 Pro Silver.jpg",
    ],
    colors: ["Silver"],
    verified: true,
    inStock: true,
    badge: "PROFESSIONAL",
    discount: 17,
    freeShipping: true,
    warranty: "3 Years",
    inStock_count: 3,
    express_delivery: false,
    cod_available: true,
    desc: "Engineering powerhouse. 17-inch 4K display, Intel Core i7-11850H, 32GB RAM, 512GB SSD, NVIDIA RTX A3000 graphics, Thunderbolt connectivity. Built for CAD, 3D rendering, and professional applications.",
    vendor: "TechPro Solutions",
    location: "Lekki, Lagos",
    specs: '17" 4K FHD+ · i7-11850H · 32GB RAM · RTX A3000',
  },
  {
    id: 9,
    name: "Lenovo IdeaPad Slim 5 — Student Favorite",
    category: "Laptops",
    subcategory: "Mid-Range Laptops",
    price: 549000,
    oldPrice: 699000,
    rating: 4.7,
    ratingCount: 1245,
    image:
      "Assets/Lenovo IdeaPad Slim 5 82SF004XIN Launched in India ( 12th Gen Intel Core i7-1255U _ 16GB ram _ 512GB SSD ) _ Tech Stories India.jpg",
    gallery: [
      "Assets/Lenovo IdeaPad Slim 5 82SF004XIN Launched in India ( 12th Gen Intel Core i7-1255U _ 16GB ram _ 512GB SSD ) _ Tech Stories India.jpg",
    ],
    colors: ["Graphite Gray", "Silver"],
    verified: true,
    inStock: true,
    badge: "FEATURED",
    discount: 21,
    freeShipping: true,
    warranty: "2 Years",
    inStock_count: 12,
    express_delivery: true,
    cod_available: true,
    desc: "Perfect balance for students and professionals. 14-inch FHD display, Intel Core i7-1255U, 16GB RAM, 512GB SSD, Intel Iris Xe graphics. Lightweight, elegant design with excellent keyboard.",
    vendor: "Lenovo Nigeria",
    location: "Ikeja, Lagos",
    specs: '14" FHD · i7-1255U · 16GB RAM · 512GB SSD',
  },
  {
    id: 10,
    name: "PlayStation 5 Slim Digital — Next-Gen Gaming",
    category: "Gaming",
    subcategory: "Gaming Consoles",
    price: 349000,
    oldPrice: 449000,
    rating: 4.9,
    ratingCount: 3567,
    image: "Assets/Playstation 5 Slim Digital.jpg",
    gallery: [
      "Assets/Playstation 5 Slim Digital.jpg",
      "Assets/PS5 PACKAGE.jpg",
    ],
    colors: ["White"],
    verified: true,
    inStock: true,
    hot: true,
    trending: true,
    badge: "HOT",
    discount: 22,
    freeShipping: true,
    warranty: "1 Year",
    inStock_count: 8,
    express_delivery: true,
    cod_available: true,
    desc: "Compact, sleek gaming. All-digital PS5 Slim with custom SSD, 4K gaming at 120fps, haptic feedback, adaptive triggers, 3D audio. Access PlayStation library digitally. Perfect for gaming enthusiasts.",
    vendor: "PlayStation Direct Nigeria",
    location: "Victoria Island, Lagos",
    specs: "Custom SSD · 825GB · 4K@120fps · Slim Design",
  },
  {
    id: 11,
    name: "Sony PS4 Pro — Powerful Console",
    category: "Gaming",
    subcategory: "Gaming Consoles",
    price: 199000,
    oldPrice: 249000,
    rating: 4.7,
    ratingCount: 2341,
    image: "Assets/Sony Ps4 Pro.jpg",
    gallery: ["Assets/Sony Ps4 Pro.jpg"],
    colors: ["Jet Black"],
    verified: true,
    inStock: true,
    badge: "BESTSELLER",
    discount: 20,
    freeShipping: true,
    warranty: "1 Year",
    inStock_count: 14,
    express_delivery: true,
    cod_available: true,
    desc: "Proven gaming performance. 4K gaming, enhanced processor, improved cooling system, 1TB storage. Access thousands of PS4 games and exclusive titles. Great entry point to Sony gaming.",
    vendor: "Gaming Hub Nigeria",
    location: "Lekki, Lagos",
    specs: "4K Gaming · 1TB HDD · Powerful GPU · 8 CPU Cores",
  },
  {
    id: 12,
    name: "JBL Boombox 3 — Portable Audio Beast",
    category: "Audio",
    subcategory: "Portable Speakers",
    price: 189000,
    oldPrice: 249000,
    rating: 4.8,
    ratingCount: 1456,
    image:
      "Assets/JBL Boombox 3 Portable Speaker, Massive Signature Pro Sound, Monstrous Bass, 24H Battery, IP67 Dust.jpg",
    gallery: [
      "Assets/JBL Boombox 3 Portable Speaker, Massive Signature Pro Sound, Monstrous Bass, 24H Battery, IP67 Dust.jpg",
    ],
    colors: ["Black", "Red", "Blue"],
    verified: true,
    inStock: true,
    hot: true,
    badge: "FEATURED",
    discount: 24,
    freeShipping: true,
    warranty: "2 Years",
    inStock_count: 10,
    express_delivery: true,
    cod_available: true,
    desc: "Massive sound, portable size. 40W Pro Sound with massive bass, 24-hour battery life, IP67 waterproof/dustproof, Bluetooth 5.3, PartyBoost connection. Perfect for parties, beach, and travel.",
    vendor: "Audio Central Nigeria",
    location: "Ikeja, Lagos",
    specs: "40W Power · 24H Battery · IP67 Rated · Bluetooth 5.3",
  },
  {
    id: 13,
    name: "MOVSSOU E7 Active Noise Cancelling Headphones",
    category: "Audio",
    subcategory: "Headphones",
    price: 45000,
    oldPrice: 65000,
    rating: 4.6,
    ratingCount: 892,
    image:
      "Assets/MOVSSOU E7 Active Noise Cancelling Headphones Bluetooth Headphones Wireless Headphones Over Ear with Microphone Deep Bass, Comfortable Protein Earpads, 30 Hours Playtime for Travel_Work, Black.jpg",
    gallery: [
      "Assets/MOVSSOU E7 Active Noise Cancelling Headphones Bluetooth Headphones Wireless Headphones Over Ear with Microphone Deep Bass, Comfortable Protein Earpads, 30 Hours Playtime for Travel_Work, Black.jpg",
    ],
    colors: ["Black", "Silver", "Blue"],
    verified: true,
    inStock: true,
    badge: "VALUE",
    discount: 31,
    freeShipping: true,
    warranty: "1 Year",
    inStock_count: 22,
    express_delivery: true,
    cod_available: true,
    desc: "Professional-grade noise cancelling. Active Noise Cancellation, 30-hour battery life, deep bass with comfortable protein earpads, built-in microphone for calls. Perfect for work, travel, and gaming.",
    vendor: "Audio Tech Store",
    location: "Victoria Island, Lagos",
    specs: "ANC · 30H Battery · Deep Bass · Comfort Fit",
  },
  {
    id: 14,
    name: "Apple Watch Ultra — Adventure Ready",
    category: "Wearables",
    subcategory: "Smartwatches",
    price: 399000,
    oldPrice: 499000,
    rating: 4.8,
    ratingCount: 1203,
    image: "Assets/Teamyo Smart Watch Men.jpg",
    gallery: ["Assets/Teamyo Smart Watch Men.jpg"],
    colors: ["Titanium", "Black", "Gold"],
    verified: true,
    inStock: true,
    hot: true,
    badge: "NEW",
    discount: 20,
    freeShipping: true,
    warranty: "2 Years",
    inStock_count: 7,
    express_delivery: true,
    cod_available: true,
    desc: "Ultimate fitness companion. Rugged titanium design, always-on Retina display, 100m water resistance, blood oxygen sensor, ECG, emergency SOS, multi-day battery. Built for extreme sports and outdoor adventures.",
    vendor: "Apple Watch Specialists",
    location: "Lekki, Lagos",
    specs: "Titanium · S9 Chip · Always-On Display · IP6X+WR100",
  },
  {
    id: 15,
    name: "Samsung Galaxy Watch 6 Classic — Elegant Tech",
    category: "Wearables",
    subcategory: "Smartwatches",
    price: 199000,
    oldPrice: 249000,
    rating: 4.7,
    ratingCount: 945,
    image: "Assets/Teamyo Smart Watch Men.jpg",
    gallery: ["Assets/Teamyo Smart Watch Men.jpg"],
    colors: ["Black", "Silver", "Gold"],
    verified: true,
    inStock: true,
    trending: true,
    badge: "BESTSELLER",
    discount: 20,
    freeShipping: true,
    warranty: "1 Year",
    inStock_count: 11,
    express_delivery: true,
    cod_available: true,
    desc: "Classic design meets innovation. Rotating bezel navigation, AMOLED display, SpO2 monitoring, ECG, stress measurement, 3-day battery life. Compatible with Android devices for comprehensive health tracking.",
    vendor: "Samsung Tech Nigeria",
    location: "Victoria Island, Lagos",
    specs: "AMOLED · Exynos W930 · 3 Days Battery · IP68",
  },
  {
    id: 16,
    name: "High-Performance Gaming PC Setup — Professional Edition",
    category: "Accessories",
    subcategory: "PC Gaming Setups",
    price: 1599000,
    oldPrice: 1999000,
    rating: 4.9,
    ratingCount: 734,
    image:
      "Assets/aes, aesthetic, acubi aesthetic, acubi room aesthetic, pc, pc aesthetic, pc setup.jpg",
    gallery: [
      "Assets/aes, aesthetic, acubi aesthetic, acubi room aesthetic, pc, pc aesthetic, pc setup.jpg",
      "Assets/pc setup.jpg",
      "Assets/white pc setup.jpg",
    ],
    colors: ["RGB Black", "White", "RGB"],
    verified: true,
    inStock: true,
    hot: true,
    trending: true,
    badge: "PROFESSIONAL",
    discount: 20,
    freeShipping: false,
    warranty: "3 Years",
    inStock_count: 4,
    express_delivery: false,
    cod_available: true,
    desc: "Ultimate gaming and streaming setup. High-end graphics card, powerful processor, premium cooling, RGB lighting, curved monitor, mechanical keyboard. Pre-configured and tested. Includes delivery and installation.",
    vendor: "PC Gaming Pro Store",
    location: "Lekki, Lagos",
    specs: "RTX 4070 · Ryzen 9 · 32GB RAM · 1TB NVMe",
  },
  {
    id: 17,
    name: "Mechanical Gaming Keyboard RGB — Pro Gamer Edition",
    category: "Accessories",
    subcategory: "Gaming Peripherals",
    price: 85000,
    oldPrice: 119000,
    rating: 4.7,
    ratingCount: 1876,
    image:
      "Assets/YUNZII RT75 Rapid Trigger Gaming Keyboard, Hall Effect Magnetic Mechanical Keyboards for Gamers, RGB.jpg",
    gallery: [
      "Assets/YUNZII RT75 Rapid Trigger Gaming Keyboard, Hall Effect Magnetic Mechanical Keyboards for Gamers, RGB.jpg",
    ],
    colors: ["Black", "White", "RGB"],
    verified: true,
    inStock: true,
    badge: "FEATURED",
    discount: 29,
    freeShipping: true,
    warranty: "2 Years",
    inStock_count: 18,
    express_delivery: true,
    cod_available: true,
    desc: "Precision and style combined. Mechanical switches with customizable RGB lighting, programmable keys, wired/wireless modes, durable ABS keycaps. Perfect for gaming and professional typing.",
    vendor: "Gaming Peripherals Hub",
    location: "Ikeja, Lagos",
    specs: "Mechanical Switches · RGB Backlit · Programmable · Wired/Wireless",
  },
  {
    id: 18,
    name: "Premium Graphic Tablet — Designer's Tool",
    category: "Accessories",
    subcategory: "Design Tools",
    price: 179000,
    oldPrice: 249000,
    rating: 4.8,
    ratingCount: 623,
    image: "Assets/Graphic Tablet.jpg",
    gallery: ["Assets/Graphic Tablet.jpg"],
    colors: ["Black"],
    verified: true,
    inStock: true,
    trending: true,
    badge: "PROFESSIONAL",
    discount: 28,
    freeShipping: true,
    warranty: "2 Years",
    inStock_count: 6,
    express_delivery: true,
    cod_available: true,
    desc: "Professional-grade drawing tablet. 13.3-inch display, 8192 pressure levels, 120% sRGB color accuracy, USB-C connectivity, compatible with all design software. Ideal for digital artists and designers.",
    vendor: "Creative Tech Store",
    location: "Victoria Island, Lagos",
    specs: '13.3" Display · 8192 Pressure · USB-C · sRGB 120%',
  },
  {
    id: 19,
    name: "Wireless Charging Station — Multi-Device",
    category: "Accessories",
    subcategory: "Charging Solutions",
    price: 35000,
    oldPrice: 49000,
    rating: 4.6,
    ratingCount: 1124,
    image: "Assets/Just Wireless 3-in-1 Portable Wireless Charger .jpg",
    gallery: ["Assets/Just Wireless 3-in-1 Portable Wireless Charger .jpg"],
    colors: ["Black", "White", "Gray"],
    verified: true,
    inStock: true,
    badge: "VALUE",
    discount: 29,
    freeShipping: true,
    warranty: "1 Year",
    inStock_count: 35,
    express_delivery: true,
    cod_available: true,
    desc: "Charge multiple devices simultaneously. Supports iPhone, AirPods, Apple Watch. Fast wireless charging up to 15W, non-slip surface, compact design. Perfect for desk organization.",
    vendor: "Tech Accessories Nigeria",
    location: "Lekki, Lagos",
    specs: "15W Wireless · Multi-Device · USB-C Power",
  },
  {
    id: 20,
    name: "Premium USB-C Hub — Connectivity Solution",
    category: "Accessories",
    subcategory: "Connection Hubs",
    price: 45000,
    oldPrice: 64000,
    rating: 4.7,
    ratingCount: 876,
    image: "Assets/dongle.jpg",
    gallery: ["Assets/dongle.jpg"],
    colors: ["Black", "Silver"],
    verified: true,
    inStock: true,
    badge: "FEATURED",
    discount: 30,
    freeShipping: true,
    warranty: "2 Years",
    inStock_count: 16,
    express_delivery: true,
    cod_available: true,
    desc: "Expand your connectivity. 7-in-1 hub with USB 3.0, SD card reader, HDMI 4K output, USB-C PD charging. Ultra-compact, plug-and-play, compatible with Mac and Windows.",
    vendor: "Connectivity Pro Store",
    location: "Ikeja, Lagos",
    specs: "7-in-1 · HDMI 4K · USB 3.0 · SD Reader",
  },
  {
    id: 21,
    name: "Apple iPhone 16 — Refined Everyday Flagship",
    category: "Smartphones",
    subcategory: "Premium Phones",
    price: 719000,
    oldPrice: 839000,
    rating: 4.8,
    ratingCount: 1548,
    image:
      "Assets/Apple iPhone 16 – Price, Specs, Colors, Size & Reviews _ AT&T.jpg",
    gallery: [
      "Assets/Apple iPhone 16 – Price, Specs, Colors, Size & Reviews _ AT&T.jpg",
    ],
    colors: ["Black", "Blue", "Pink", "White"],
    verified: true,
    inStock: true,
    trending: true,
    badge: "NEW",
    discount: 14,
    freeShipping: true,
    warranty: "2 Years",
    inStock_count: 9,
    express_delivery: true,
    cod_available: true,
    desc: "A polished balance of power and simplicity. Dynamic Island, A18-class performance, improved battery endurance, and a brighter Super Retina display make it a dependable daily flagship.",
    vendor: "Apple Store Nigeria",
    location: "Victoria Island, Lagos",
    specs: '6.1" Super Retina XDR · A18 Chip · 256GB · USB-C',
  },
  {
    id: 22,
    name: "Samsung Galaxy S26 Ultra — Next-Gen AI Phone",
    category: "Smartphones",
    subcategory: "Premium Phones",
    price: 889000,
    oldPrice: 1029000,
    rating: 4.9,
    ratingCount: 986,
    image: "Assets/Galaxy S26 Ultra.jpg",
    gallery: ["Assets/Galaxy S26 Ultra.jpg"],
    colors: ["Titanium Black", "Titanium Silver", "Emerald"],
    verified: true,
    inStock: true,
    hot: true,
    badge: "HOT",
    discount: 14,
    freeShipping: true,
    warranty: "2 Years",
    inStock_count: 7,
    express_delivery: true,
    cod_available: true,
    desc: "A premium Android flagship tuned for productivity and creation. Expect a vivid large display, upgraded AI capture tools, refined stylus support, and all-day battery performance.",
    vendor: "Samsung Store Nigeria",
    location: "Lekki, Lagos",
    specs: '6.8" AMOLED · Snapdragon Elite · 512GB · 200MP',
  },
  {
    id: 23,
    name: "ASUS ZenBook 14 OLED — Ultra Portable",
    category: "Laptops",
    subcategory: "Thin & Light Laptops",
    price: 899000,
    oldPrice: 1099000,
    rating: 4.8,
    ratingCount: 742,
    image:
      "Assets/Two MacBook Air M2 Space Gray - PSD - 108653 _ Yellow Images.jpg",
    gallery: [
      "Assets/Two MacBook Air M2 Space Gray - PSD - 108653 _ Yellow Images.jpg",
    ],
    colors: ["Ponder Blue", "Fog Silver"],
    verified: true,
    inStock: true,
    trending: true,
    badge: "FEATURED",
    discount: 18,
    freeShipping: true,
    warranty: "2 Years",
    inStock_count: 5,
    express_delivery: true,
    cod_available: true,
    desc: "A slim creator-friendly laptop with an OLED panel, fast modern processor, quiet thermals, and all-day portability. Ideal for design, school, and work on the move.",
    vendor: "ASUS Nigeria",
    location: "Ikeja, Lagos",
    specs: '14" OLED · 16GB RAM · 1TB SSD · Wi-Fi 6E',
  },
  {
    id: 24,
    name: "Sony WH-1000XM6 — Quiet Confidence",
    category: "Audio",
    subcategory: "Premium Headphones",
    price: 225000,
    oldPrice: 279000,
    rating: 4.9,
    ratingCount: 1332,
    image: "Assets/Headphone Zone.jpg",
    gallery: ["Assets/Headphone Zone.jpg"],
    colors: ["Black", "Silver", "Midnight Blue"],
    verified: true,
    inStock: true,
    hot: true,
    badge: "NEW",
    discount: 19,
    freeShipping: true,
    warranty: "2 Years",
    inStock_count: 11,
    express_delivery: true,
    cod_available: true,
    desc: "Flagship noise-cancelling headphones with balanced sound, comfort-first ear cushions, long battery life, and a travel-ready foldable design for focused work or flights.",
    vendor: "Audio Central Nigeria",
    location: "Victoria Island, Lagos",
    specs: "ANC · 30H Battery · Bluetooth 5.3 · USB-C",
  },
  {
    id: 25,
    name: "Garmin Venu 3 — Health Companion",
    category: "Wearables",
    subcategory: "Smartwatches",
    price: 289000,
    oldPrice: 349000,
    rating: 4.8,
    ratingCount: 818,
    image: "Assets/“Best Smart Watch Under 500 _ Trending 2025 Gadget”.jpg",
    gallery: ["Assets/“Best Smart Watch Under 500 _ Trending 2025 Gadget”.jpg"],
    colors: ["Black", "Silver", "Cream"],
    verified: true,
    inStock: true,
    trending: true,
    badge: "VALUE",
    discount: 17,
    freeShipping: true,
    warranty: "2 Years",
    inStock_count: 13,
    express_delivery: true,
    cod_available: true,
    desc: "A polished smartwatch built around fitness, sleep, and daily wellness tracking. Bright AMOLED display, multi-day battery life, and reliable health metrics in a clean wearable package.",
    vendor: "Wearables Hub Nigeria",
    location: "Lekki, Lagos",
    specs: "AMOLED · GPS · Sleep Tracking · 10-Day Battery",
  },
  {
    id: 26,
    name: "Anker Nano 5-in-1 Hub — Travel Ready",
    category: "Accessories",
    subcategory: "Connection Hubs",
    price: 65000,
    oldPrice: 89000,
    rating: 4.7,
    ratingCount: 1094,
    image:
      "Assets/Anker Nano Travel Adapter, 5-Port Power.jpg",
    gallery: [
      "Assets/Anker Nano Travel Adapter, 5-Port Power.jpg",
    ],
    colors: ["Black", "Silver"],
    verified: true,
    inStock: true,
    badge: "FEATURED",
    discount: 27,
    freeShipping: true,
    warranty: "2 Years",
    inStock_count: 24,
    express_delivery: true,
    cod_available: true,
    desc: "Compact hub for modern laptops and tablets. HDMI, USB-A, USB-C, SD, and power delivery support in a slim body that fits easily into a daily carry bag.",
    vendor: "Connectivity Pro Store",
    location: "Ikeja, Lagos",
    specs: "5-in-1 · HDMI 4K · USB-C PD · SD Reader",
  },
  {
    id: 27,
    name: "Logitech G502 HERO — Tunable Gaming Mouse",
    category: "Gaming",
    subcategory: "Peripherals",
    price: 22000,
    oldPrice: 35000,
    rating: 4.8,
    ratingCount: 2140,
    image: "Assets/Logitech G502 HERO.jpg",
    gallery: ["Assets/Logitech G502 HERO.jpg"],
    colors: ["Black"],
    verified: true,
    inStock: true,
    badge: "FEATURED",
    discount: 37,
    freeShipping: true,
    warranty: "1 Year",
    inStock_count: 34,
    express_delivery: true,
    cod_available: true,
    desc: "High-precision wired gaming mouse with tunable weights, adjustable DPI, and programmable buttons. A widely used choice for competitive gaming.",
    vendor: "Gaming Peripherals Hub",
    location: "Ikeja, Lagos",
    specs: "HERO Sensor · Programmable Buttons · Tunable Weights",
  },
  {
    id: 28,
    name: "SteelSeries Arctis Nova Pro — Wireless Gaming Headset",
    category: "Gaming",
    subcategory: "Headsets",
    price: 195000,
    oldPrice: 249000,
    rating: 4.7,
    ratingCount: 812,
    image: "Assets/Headphone Zone.jpg",
    gallery: ["Assets/Headphone Zone.jpg"],
    colors: ["Black", "White"],
    verified: true,
    inStock: true,
    badge: "NEW",
    discount: 22,
    freeShipping: true,
    warranty: "2 Years",
    inStock_count: 12,
    express_delivery: true,
    cod_available: true,
    desc: "Comfortable wireless headset with adaptive noise cancelling and low-latency audio for immersive gaming and streaming.",
    vendor: "Audio Central Nigeria",
    location: "Victoria Island, Lagos",
    specs: "Wireless · Low-Latency · Active Noise Cancel",
  },
  {
    id: 29,
    name: "Razer BlackWidow V4 — Mechanical Gaming Keyboard",
    category: "Gaming",
    subcategory: "Peripherals",
    price: 98000,
    oldPrice: 129000,
    rating: 4.6,
    ratingCount: 1567,
    image: "Assets/Razer BlackWidow V4 .jpg",
    gallery: ["Assets/Razer BlackWidow V4 .jpg"],
    colors: ["Black", "White", "RGB"],
    verified: true,
    inStock: true,
    badge: "BESTSELLER",
    discount: 24,
    freeShipping: true,
    warranty: "2 Years",
    inStock_count: 20,
    express_delivery: true,
    cod_available: true,
    desc: "Durable mechanical keyboard with tactile switches, per-key RGB lighting, and dedicated media controls for gaming and content creation.",
    vendor: "Gaming Peripherals Hub",
    location: "Ikeja, Lagos",
    specs: "Mechanical Switches · Per-key RGB · Media Keys",
  },
  {
    id: 30,
    name: "Elgato Stream Deck MK.2 — Creator Control Pad",
    category: "Gaming",
    subcategory: "Creator Tools",
    price: 98000,
    oldPrice: 125000,
    rating: 4.9,
    ratingCount: 543,
    image: "Assets/Elgato Stream Deck MK.jpg",
    gallery: ["Assets/Elgato Stream Deck MK.jpg"],
    colors: ["Black"],
    verified: true,
    inStock: true,
    badge: "CREATOR",
    discount: 22,
    freeShipping: true,
    warranty: "1 Year",
    inStock_count: 9,
    express_delivery: true,
    cod_available: true,
    desc: "Customizable control pad for streamers and creators — assign scenes, media, and shortcuts to physical keys for efficient live production.",
    vendor: "Creator Tools Nigeria",
    location: "Lekki, Lagos",
    specs: "LCD Keys · Custom Shortcuts · Plug-and-Play",
  },
  {
    id: 31,
    name: 'Samsung Odyssey G5 27" — Curved Gaming Monitor',
    category: "Gaming",
    subcategory: "Monitors",
    price: 299000,
    oldPrice: 369000,
    rating: 4.7,
    ratingCount: 678,
    image:
      "Assets/32_ QHD Odyssey G5 G55C Gaming Monitor _ Samsung Australia.jpg",
    gallery: [
      "Assets/32_ QHD Odyssey G5 G55C Gaming Monitor _ Samsung Australia.jpg",
    ],
    colors: ["Black"],
    verified: true,
    inStock: true,
    badge: "FEATURED",
    discount: 19,
    freeShipping: false,
    warranty: "2 Years",
    inStock_count: 6,
    express_delivery: false,
    cod_available: true,
    desc: "High-refresh curved gaming monitor with fast response, adaptive sync, and immersive curve for competitive play and single-player immersion.",
    vendor: "Monitors & Displays Ltd",
    location: "Ikeja, Lagos",
    specs: '27" · 144Hz · Curved · Adaptive Sync',
  },
  {
    id: 32,
    name: "HyperX Cloud II — Wired Gaming Headset",
    category: "Gaming",
    subcategory: "Headsets",
    price: 68000,
    oldPrice: 89000,
    rating: 4.6,
    ratingCount: 1023,
    image: "Assets/Headphone Zone.jpg",
    gallery: ["Assets/Headphone Zone.jpg"],
    colors: ["Black", "Red"],
    verified: true,
    inStock: true,
    badge: "VALUE",
    discount: 24,
    freeShipping: true,
    warranty: "1 Year",
    inStock_count: 28,
    express_delivery: true,
    cod_available: true,
    desc: "Comfortable wired headset with balanced audio and clear microphone — a reliable choice for gaming sessions and calls.",
    vendor: "Gaming Audio Store",
    location: "Victoria Island, Lagos",
    specs: "Wired · Clear Mic · Comfortable Fit",
  },
];

// ── HELPERS ───────────────────────────────────────────────
function escHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
function lsGet(key, fb) {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fb;
  } catch {
    return fb;
  }
}
function lsSet(key, val) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch {}
}

// ── PERSISTENT STATE ──────────────────────────────────────
let cart = lsGet("dm_cart", []);
let wishlist = lsGet("dm_wishlist", {});
let recentIds = lsGet("dm_recent", []);
const MAX_RECENT = 6;
const COUPONS = { DEVMART10: 10, NAIJA20: 20, LAGOS15: 15 };
let appliedDiscount = 0;

function saveCart() {
  lsSet("dm_cart", cart);
}
function saveWL() {
  lsSet("dm_wishlist", wishlist);
}
function saveRecent() {
  lsSet("dm_recent", recentIds);
}

// ── FILTER STATE ──────────────────────────────────────────
let activeCategory = "all",
  currentSort = "default",
  searchQuery = "";
let visibleCount = 12,
  priceMin = 0,
  priceMax = Infinity;
let ratingFilters = [],
  inStockOnly = false,
  verifiedOnly = false;

// ── FILTER & SORT ─────────────────────────────────────────
function filterAndSortProducts() {
  let list = products.filter((p) => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const matchSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.desc || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.vendor || "").toLowerCase().includes(searchQuery.toLowerCase());
    const matchPrice = p.price >= priceMin && p.price <= priceMax;
    const matchRating =
      ratingFilters.length === 0 || ratingFilters.some((r) => p.rating >= r);
    const matchStock = !inStockOnly || p.inStock !== false; // ✅ FIXED
    const matchVerify = !verifiedOnly || p.verified === true; // ✅ FIXED
    return (
      matchCat &&
      matchSearch &&
      matchPrice &&
      matchRating &&
      matchStock &&
      matchVerify
    );
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

// ── ACTIVE FILTER CHIPS ───────────────────────────────────
function renderActiveFilters() {
  const container = document.getElementById("activeFilters");
  if (!container) return;
  const chips = [];
  if (activeCategory !== "all")
    chips.push({
      label: `Category: ${activeCategory}`,
      action: () => setCategory("all"),
    });
  if (searchQuery)
    chips.push({
      label: `Search: "${searchQuery}"`,
      action: () => {
        searchQuery = "";
        ["searchInput", "mobileSearchInput"].forEach((id) => {
          const el = document.getElementById(id);
          if (el) el.value = "";
        });
        renderProducts();
      },
    });
  if (priceMin > 0 || priceMax < Infinity)
    chips.push({
      label: `Price: ₦${priceMin.toLocaleString()}–${priceMax === Infinity ? "∞" : "₦" + priceMax.toLocaleString()}`,
      action: () => {
        priceMin = 0;
        priceMax = Infinity;
        ["priceMin", "priceMax", "priceMinM", "priceMaxM"].forEach((id) => {
          const el = document.getElementById(id);
          if (el) el.value = "";
        });
        renderProducts();
      },
    });
  ratingFilters.forEach((r) =>
    chips.push({
      label: `Rating ≥${r}★`,
      action: () => {
        ratingFilters = ratingFilters.filter((x) => x !== r);
        document
          .querySelectorAll(`input[type="checkbox"][value="${r}"]`)
          .forEach((cb) => (cb.checked = false));
        renderProducts();
      },
    }),
  );
  if (inStockOnly)
    chips.push({
      label: "In Stock Only",
      action: () => {
        inStockOnly = false;
        ["inStockOnly", "inStockOnlyM"].forEach((id) => {
          const el = document.getElementById(id);
          if (el) el.checked = false;
        });
        renderProducts();
      },
    });
  if (verifiedOnly)
    chips.push({
      label: "Verified Sellers",
      action: () => {
        verifiedOnly = false;
        ["verifiedOnly", "verifiedOnlyM"].forEach((id) => {
          const el = document.getElementById(id);
          if (el) el.checked = false;
        });
        renderProducts();
      },
    });

  container.innerHTML = chips
    .map(
      (c, i) =>
        `<span class="filter-chip">${escHtml(c.label)}<button class="filter-chip-remove" data-chip="${i}" aria-label="Remove filter">×</button></span>`,
    )
    .join("");
  container.querySelectorAll(".filter-chip-remove").forEach((btn) => {
    btn.addEventListener("click", () => chips[+btn.dataset.chip].action());
  });
}

// ── RENDER PRODUCTS ───────────────────────────────────────
function renderProducts() {
  const data = filterAndSortProducts(),
    container = document.getElementById("productGridContainer"),
    loadBtn = document.getElementById("loadMoreBtn");
  if (!container) return;
  renderActiveFilters();
  if (data.length === 0) {
    container.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:72px 20px;"><div style="font-size:3rem;margin-bottom:14px;">🔍</div><h3 style="font-family:Syne,sans-serif;font-weight:800;color:var(--dark);margin-bottom:6px;">No products found</h3><p style="color:var(--muted);">Try adjusting your search or filters</p><button onclick="clearAllFilters()" style="margin-top:18px;background:var(--green);color:#fff;border:none;padding:11px 24px;border-radius:50px;font-weight:700;cursor:pointer;">Clear All Filters</button></div>`;
    if (loadBtn) loadBtn.style.display = "none";
    return;
  }
  container.innerHTML = data.slice(0, visibleCount).map(renderCard).join("");
  if (loadBtn)
    loadBtn.style.display = data.length > visibleCount ? "inline-flex" : "none";

  container
    .querySelectorAll(".add-to-cart-btn:not([disabled])")
    .forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const p = products.find((p) => p.id === +btn.dataset.id);
        if (!p) return;
        addToCart(p, 1);
        btn.classList.add("added");
        btn.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => {
          btn.classList.remove("added");
          btn.innerHTML = '<i class="fas fa-plus"></i>';
        }, 1200);
      });
    });
  container.querySelectorAll(".quick-view-btn").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openQuickView(+btn.dataset.id);
    }),
  );
  container
    .querySelectorAll(".product-card")
    .forEach((card) =>
      card.addEventListener("click", () => openQuickView(+card.dataset.id)),
    );
  container.querySelectorAll(".product-wishlist").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleWishlist(+btn.dataset.id, btn);
    });
  });
}

function renderCard(p) {
  const stars =
    "★".repeat(Math.round(p.rating)) + "☆".repeat(5 - Math.round(p.rating));
  const badges = [];
  if (p.verified)
    badges.push(
      `<span class="badge badge-verified"><i class="fas fa-shield-alt"></i> Verified</span>`,
    );
  if (p.hot) badges.push(`<span class="badge badge-hot">🔥 Hot</span>`);
  if (p.isNew) badges.push(`<span class="badge badge-new">✨ New</span>`);
  if (p.inStock === false)
    badges.push(`<span class="badge badge-oos">Out of Stock</span>`);
  const inWl = !!wishlist[p.id];
  return `<div class="product-card${p.inStock === false ? " oos-card" : ""}" data-id="${p.id}">
    <div class="product-img-wrap">
      <img src="${p.image}" alt="${escHtml(p.name)}" loading="lazy" onerror="this.parentElement.style.background='var(--light)'">
      <div class="product-badge-row">${badges.join("")}</div>
      <button class="product-wishlist${inWl ? " wishlisted" : ""}" data-id="${p.id}" aria-label="Save to wishlist"><i class="${inWl ? "fas" : "far"} fa-heart"></i></button>
      <button class="quick-view-btn" data-id="${p.id}">Quick View</button>
    </div>
    <div class="product-body">
      <div class="product-cat">${escHtml(p.category)}</div>
      <div class="product-name">${escHtml(p.name)}</div>
      <div class="product-rating"><span class="stars">${stars}</span><span class="rating-count">${p.rating} (${p.ratingCount.toLocaleString()})</span></div>
      <div class="product-price-row">
          <div>
            <div class="product-price">₦${p.price.toLocaleString()}${p.oldPrice ? ` <span class="discount-pct">-${Math.round((1 - p.price / p.oldPrice) * 100)}%</span>` : ""}</div>
            ${p.oldPrice ? `<div class="product-old-price">₦${p.oldPrice.toLocaleString()}</div>` : ""}
          </div>
          <div class="card-actions-row">
            <button class="product-share-btn" data-id="${p.id}" aria-label="Share" title="Share"><i class="fas fa-share-nodes"></i></button>
            <button class="add-to-cart-btn${p.inStock === false ? " disabled" : ""}" data-id="${p.id}" ${p.inStock === false ? `disabled title="Out of stock"` : ""}><i class="fas fa-plus"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}
function loadMore() {
  visibleCount += 8;
  renderProducts();
}

// ── WISHLIST ──────────────────────────────────────────────
function toggleWishlist(id, btn) {
  if (wishlist[id]) {
    delete wishlist[id];
    if (btn) {
      btn.querySelector("i").classList.replace("fas", "far");
      btn.classList.remove("wishlisted");
    }
    showToast("Removed from wishlist");
  } else {
    wishlist[id] = true;
    if (btn) {
      btn.querySelector("i").classList.replace("far", "fas");
      btn.classList.add("wishlisted");
    }
    showToast("❤️ Added to wishlist!");
  }
  saveWL();
  updateWishlistBadge();
}
function updateWishlistBadge() {
  const c = Object.keys(wishlist).length,
    badge = document.getElementById("wishlistCount");
  if (badge) {
    badge.textContent = c;
    badge.style.display = c > 0 ? "flex" : "none";
  }
}

// ── QUICK VIEW (with quantity selector) ───────────────────
function openQuickView(id) {
  const p = products.find((x) => x.id === id);
  if (!p) return;
  addToRecentlyViewed(id);
  const stars =
    "★".repeat(Math.round(p.rating)) + "☆".repeat(5 - Math.round(p.rating));
  const inWl = !!wishlist[p.id];
  document.getElementById("modalContent").innerHTML = `
    <div class="modal-inner">
      <div class="modal-img">
        <img src="${p.image}" alt="${escHtml(p.name)}" onerror="this.parentElement.style.background='var(--light)'">
        ${p.inStock === false ? '<div class="modal-oos-ribbon">Out of Stock</div>' : ""}
      </div>
      <div class="modal-details">
        <div class="modal-cat">${escHtml(p.category)}${p.vendor ? " · " + escHtml(p.vendor) : ""}</div>
        <div class="modal-name">${escHtml(p.name)}</div>
        <div class="modal-rating"><span class="stars">${stars}</span><span style="color:var(--muted);font-size:13px;">${p.rating} · ${p.ratingCount.toLocaleString()} reviews</span></div>
        <div class="modal-desc">${escHtml(p.desc || "Premium quality product from a verified Nigerian vendor.")}</div>
        <div class="modal-price">₦${p.price.toLocaleString()}${p.oldPrice ? `<span style="font-size:15px;color:var(--muted);text-decoration:line-through;font-weight:400;margin-left:10px;">₦${p.oldPrice.toLocaleString()}</span>` : ""}</div>
        ${p.location ? `<p style="font-size:12.5px;color:var(--muted);margin-bottom:16px;"><i class="fas fa-map-marker-alt" style="color:var(--green);margin-right:5px;"></i>${escHtml(p.location)}</p>` : ""}
        <div class="modal-qty-row">
          <span class="modal-qty-label">Qty:</span>
          <div class="modal-qty-ctrl">
            <button class="mqty-btn" id="mqtyDec">−</button>
            <span class="mqty-num" id="mqtyNum">1</span>
            <button class="mqty-btn" id="mqtyInc">+</button>
          </div>
        </div>
        <div class="modal-actions">
          ${
            p.inStock === false
              ? `<button class="modal-add-btn" disabled style="opacity:.5;cursor:not-allowed;"><i class="fas fa-ban"></i> Out of Stock</button>`
              : `<button class="modal-add-btn" id="modalAddBtn" data-id="${p.id}"><i class="fas fa-shopping-bag"></i> Add to Cart</button>`
          }
          <button class="modal-wl-btn${inWl ? " wishlisted" : ""}" id="modalWlBtn" data-id="${p.id}"><i class="${inWl ? "fas" : "far"} fa-heart"></i></button>
        </div>
      </div>
    </div>`;

  let qty = 1;
  const qEl = document.getElementById("mqtyNum");
  const dec = document.getElementById("mqtyDec");
  if (dec)
    dec.addEventListener("click", () => {
      if (qty > 1) {
        qty--;
        qEl.textContent = qty;
      }
    });
  const inc = document.getElementById("mqtyInc");
  if (inc)
    inc.addEventListener("click", () => {
      qty++;
      qEl.textContent = qty;
    });
  const addBtn = document.getElementById("modalAddBtn");
  if (addBtn)
    addBtn.addEventListener("click", () => {
      addToCart(p, qty);
      closeModal();
    });
  const wlBtn = document.getElementById("modalWlBtn");
  if (wlBtn) wlBtn.addEventListener("click", () => toggleWishlist(p.id, wlBtn));

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

// ── CART (localStorage) ───────────────────────────────────
function addToCart(product, qty = 1) {
  const ex = cart.find((i) => i.id === product.id);
  ex ? (ex.quantity += qty) : cart.push({ ...product, quantity: qty });
  saveCart();
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
  const mbn = document.getElementById("mbnCartCount");
  if (mbn) mbn.textContent = total;
  updateStickyCartBar();
}
function updateCartUI() {
  const list = document.getElementById("cartItemsList");
  if (!list) return;
  if (cart.length === 0) {
    list.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">🛍️</div><p>Your cart is empty</p><span>Browse our collection and add items!</span></div>`;
    setCartTotals(0);
    return;
  }
  let sub = 0;
  list.innerHTML = cart
    .map((item) => {
      sub += item.price * item.quantity;
      return `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.image}" alt="${escHtml(item.name)}" onerror="this.style.display='none'">
      <div class="cart-item-info">
        <div class="cart-item-name">${escHtml(item.name)}</div>
        <div class="cart-item-price">₦${item.price.toLocaleString()} each</div>
        <div class="cart-item-controls">
          <button class="qty-btn" data-id="${item.id}" data-action="dec">−</button>
          <span class="qty-num">${item.quantity}</span>
          <button class="qty-btn" data-id="${item.id}" data-action="inc">+</button>
          <button class="remove-cart-item" data-id="${item.id}"><i class="fas fa-trash-alt"></i></button>
        </div>
      </div>
      <div class="cart-item-total">₦${(item.price * item.quantity).toLocaleString()}</div>
    </div>`;
    })
    .join("");
  setCartTotals(sub);
  list.querySelectorAll(".qty-btn").forEach((btn) =>
    btn.addEventListener("click", () => {
      const id = +btn.dataset.id,
        item = cart.find((i) => i.id === id);
      if (!item) return;
      btn.dataset.action === "inc"
        ? item.quantity++
        : (item.quantity--,
          item.quantity <= 0 && (cart = cart.filter((i) => i.id !== id)));
      saveCart();
      updateCartBadge();
      updateCartUI();
    }),
  );
  list.querySelectorAll(".remove-cart-item").forEach((btn) =>
    btn.addEventListener("click", () => {
      cart = cart.filter((i) => i.id !== +btn.dataset.id);
      saveCart();
      updateCartBadge();
      updateCartUI();
      showToast("Item removed from cart");
    }),
  );
}
function setCartTotals(sub) {
  const disc =
    appliedDiscount > 0 ? Math.round(sub * (1 - appliedDiscount / 100)) : sub;
  document.getElementById("cartSubtotal").textContent =
    `₦${sub.toLocaleString()}`;
  document.getElementById("cartTotalPrice").textContent =
    `₦${disc.toLocaleString()}`;
  let dr = document.getElementById("cartDiscountRow");
  if (appliedDiscount > 0) {
    if (!dr) {
      const s = document.querySelector(".cart-summary"),
        nr = document.createElement("div");
      nr.className = "cart-row cart-discount-row";
      nr.id = "cartDiscountRow";
      s.insertBefore(nr, s.querySelector(".cart-total-row"));
    }
    document.getElementById("cartDiscountRow").innerHTML =
      `<span>Discount (${appliedDiscount}%)</span><span style="color:var(--green)">−₦${(sub - disc).toLocaleString()}</span>`;
  } else {
    if (dr) dr.remove();
  }
}

// ── COUPON CODE ───────────────────────────────────────────
function applyCoupon() {
  const input = document.getElementById("couponInput");
  if (!input) return;
  const code = input.value.trim().toUpperCase(),
    msg = document.getElementById("couponMsg");
  if (!code) {
    showToast("⚠️ Enter a coupon code");
    return;
  }
  if (COUPONS[code] !== undefined) {
    appliedDiscount = COUPONS[code];
    showToast(`🎉 Coupon applied! ${appliedDiscount}% off`);
    updateCartUI();
    input.value = "";
    if (msg) {
      msg.textContent = `✅ "${code}" applied — ${appliedDiscount}% off`;
      msg.style.color = "var(--green)";
    }
  } else {
    showToast("❌ Invalid coupon code");
    if (msg) {
      msg.textContent = "Invalid code. Try DEVMART10, NAIJA20 or LAGOS15";
      msg.style.color = "var(--orange)";
    }
  }
}
const cBtn = document.getElementById("couponApplyBtn");
if (cBtn) cBtn.addEventListener("click", applyCoupon);
const cInp = document.getElementById("couponInput");
if (cInp)
  cInp.addEventListener("keyup", (e) => {
    if (e.key === "Enter") applyCoupon();
  });

// ── WISHLIST DRAWER ───────────────────────────────────────
function openWishlist() {
  renderWishlistUI();
  document.getElementById("wishlistDrawer").classList.add("open");
  document.getElementById("wishlistOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeWishlist() {
  document.getElementById("wishlistDrawer").classList.remove("open");
  document.getElementById("wishlistOverlay").classList.remove("open");
  document.body.style.overflow = "";
}
function renderWishlistUI() {
  const list = document.getElementById("wishlistItemsList");
  const footer = document.getElementById("wishlistFooter");
  const countEl = document.getElementById("wishlistItemCount");
  if (!list) return;

  const ids = Object.keys(wishlist).map(Number);
  const items = ids
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  if (countEl) countEl.textContent = items.length;
  updateWishlistBadge();

  if (items.length === 0) {
    list.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">🤍</div><p>Nothing saved yet</p><span>Tap the heart on any product to save it here</span></div>`;
    if (footer) footer.style.display = "none";
    return;
  }

  if (footer) footer.style.display = "block";

  list.innerHTML = items
    .map(
      (p) => `
    <div class="cart-item" data-wl-id="${p.id}">
      <img class="cart-item-img" src="${p.image}" alt="${escHtml(p.name)}" onerror="this.style.display='none'">
      <div class="cart-item-info">
        <div class="cart-item-name">${escHtml(p.name)}</div>
        <div class="cart-item-price">₦${p.price.toLocaleString()}</div>
        <div class="cart-item-controls" style="gap:8px;margin-top:8px;">
          <button class="wl-add-btn" data-id="${p.id}" style="background:var(--green);color:#fff;border:none;padding:6px 14px;border-radius:50px;font-size:12px;font-weight:600;cursor:pointer;"${p.inStock === false ? " disabled style='opacity:.5;cursor:not-allowed;'" : ""}>
            <i class="fas fa-shopping-bag"></i> ${p.inStock === false ? "Out of Stock" : "Add to Cart"}
          </button>
          <button class="wl-remove-btn" data-id="${p.id}" style="background:var(--light);border:none;padding:6px 10px;border-radius:50px;font-size:12px;color:var(--orange);font-weight:600;cursor:pointer;">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
      <div class="cart-item-total" style="font-size:13px;color:var(--muted);">${p.inStock === false ? '<span style="color:var(--orange);font-size:11px;">Out of Stock</span>' : ""}</div>
    </div>`,
    )
    .join("");

  list.querySelectorAll(".wl-add-btn:not([disabled])").forEach((btn) => {
    btn.addEventListener("click", () => {
      const p = products.find((x) => x.id === +btn.dataset.id);
      if (p) {
        addToCart(p, 1);
        btn.innerHTML = '<i class="fas fa-check"></i> Added!';
        btn.style.background = "var(--green-light)";
        setTimeout(() => {
          btn.innerHTML = '<i class="fas fa-shopping-bag"></i> Add to Cart';
          btn.style.background = "var(--green)";
        }, 1400);
      }
    });
  });

  list.querySelectorAll(".wl-remove-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = +btn.dataset.id;
      delete wishlist[id];
      saveWL();
      // sync heart icons on product grid
      document
        .querySelectorAll(`.product-wishlist[data-id="${id}"]`)
        .forEach((b) => {
          b.querySelector("i").classList.replace("fas", "far");
          b.classList.remove("wishlisted");
        });
      renderWishlistUI();
      showToast("Removed from wishlist");
    });
  });
}

document
  .getElementById("wishlistIconBtn")
  .addEventListener("click", openWishlist);
document
  .getElementById("closeWishlistBtn")
  .addEventListener("click", closeWishlist);
document.getElementById("wishlistOverlay").addEventListener("click", (e) => {
  if (e.target === document.getElementById("wishlistOverlay")) closeWishlist();
});
document.getElementById("wishlistAddAllBtn").addEventListener("click", () => {
  const ids = Object.keys(wishlist).map(Number);
  const items = ids
    .map((id) => products.find((p) => p.id === id))
    .filter((p) => p && p.inStock !== false);
  if (items.length === 0) {
    showToast("⚠️ No in-stock items to add");
    return;
  }
  items.forEach((p) => addToCart(p, 1));
  showToast(
    `🛍️ ${items.length} item${items.length !== 1 ? "s" : ""} added to cart!`,
  );
  closeWishlist();
  openCart();
});
const mbnWlBtn = document.getElementById("mbnWishlistBtn");
if (mbnWlBtn) mbnWlBtn.addEventListener("click", openWishlist);

// ── ACCOUNT DRAWER ────────────────────────────────────────
function openAccount() {
  loadProfileForm();
  renderAccountTab("profile");
  document.getElementById("accountDrawer").classList.add("open");
  document.getElementById("accountOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeAccount() {
  document.getElementById("accountDrawer").classList.remove("open");
  document.getElementById("accountOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

function getProfile() {
  return lsGet("dm_profile", { first: "", last: "", phone: "", email: "" });
}
function saveProfile(p) {
  lsSet("dm_profile", p);
}

function loadProfileForm() {
  const p = getProfile();
  const set = (id, v) => {
    const el = document.getElementById(id);
    if (el) el.value = v;
  };
  set("profFirst", p.first);
  set("profLast", p.last);
  set("profPhone", p.phone);
  set("profEmail", p.email);
  updateProfileHeader(p);
  renderAccountStats();
}
function updateProfileHeader(p) {
  const nameEl = document.getElementById("acctDisplayName");
  const emailEl = document.getElementById("acctDisplayEmail");
  const avatarEl = document.getElementById("acctAvatar");
  const name = [p.first, p.last].filter(Boolean).join(" ");
  if (nameEl) nameEl.textContent = name || "Guest User";
  if (emailEl) emailEl.textContent = p.email || "No email set";
  if (avatarEl) {
    const initials = [p.first[0], p.last[0]]
      .filter(Boolean)
      .join("")
      .toUpperCase();
    avatarEl.textContent = initials || "👤";
    avatarEl.style.fontSize = initials ? "22px" : "28px";
  }
}
function renderAccountStats() {
  const el = document.getElementById("acctStatsRow");
  if (!el) return;
  const orders = lsGet("dm_orders", []);
  const wishCount = Object.keys(wishlist).length;
  const total = orders.reduce((s, o) => s + (o.total || 0), 0);
  el.innerHTML = `
    <div class="acct-stat"><div class="acct-stat-num">${orders.length}</div><div class="acct-stat-label">Orders</div></div>
    <div class="acct-stat"><div class="acct-stat-num">${wishCount}</div><div class="acct-stat-label">Saved</div></div>
    <div class="acct-stat"><div class="acct-stat-num">₦${total > 0 ? (total / 1000).toFixed(0) + "k" : "0"}</div><div class="acct-stat-label">Spent</div></div>`;
}

function renderOrderHistory() {
  const el = document.getElementById("acctOrdersList");
  if (!el) return;
  const orders = lsGet("dm_orders", []);
  if (orders.length === 0) {
    el.innerHTML = `<div class="cart-empty" style="min-height:220px;"><div class="cart-empty-icon">📦</div><p>No orders yet</p><span>Your order history will appear here after you shop</span></div>`;
    return;
  }
  el.innerHTML = orders
    .map((o) => {
      const date = new Date(o.date);
      const dateStr = date.toLocaleDateString("en-NG", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
      const timeStr = date.toLocaleTimeString("en-NG", {
        hour: "2-digit",
        minute: "2-digit",
      });
      const addr = o.address || {};
      const dLabel =
        addr.delivery === "same_day"
          ? "Same-Day"
          : addr.delivery === "next_day"
            ? "Next-Day"
            : "Pickup";
      const itemCount = (o.items || []).reduce((s, i) => s + i.quantity, 0);
      return `<div class="acct-order-card">
      <div class="acct-order-header">
        <div><div class="acct-order-id">${escHtml(o.id)}</div><div class="acct-order-date">${dateStr} · ${timeStr}</div></div>
        <div class="acct-order-total">₦${(o.total || 0).toLocaleString()}</div>
      </div>
      <div class="acct-order-meta">
        <span class="acct-order-badge"><i class="fas fa-check-circle"></i> Placed</span>
        <span class="acct-order-info"><i class="fas fa-box"></i> ${itemCount} item${itemCount !== 1 ? "s" : ""}</span>
        <span class="acct-order-info"><i class="fas fa-motorcycle"></i> ${dLabel}</span>
      </div>
      <div class="acct-order-items">
        ${(o.items || [])
          .slice(0, 3)
          .map(
            (i) =>
              `<span class="acct-order-item-chip">${escHtml(i.name.length > 28 ? i.name.slice(0, 28) + "…" : i.name)} ×${i.quantity}</span>`,
          )
          .join("")}
        ${(o.items || []).length > 3 ? `<span class="acct-order-item-chip acct-chip-more">+${o.items.length - 3} more</span>` : ""}
      </div>
      ${addr.area ? `<div class="acct-order-addr"><i class="fas fa-map-marker-alt"></i> ${escHtml(addr.area)}${addr.street ? " · " + escHtml(addr.street) : ""}</div>` : ""}
    </div>`;
    })
    .join("");
}

function renderSavedAddresses() {
  const el = document.getElementById("acctAddressesList");
  if (!el) return;
  const orders = lsGet("dm_orders", []);
  const seen = new Set();
  const addrs = orders
    .map((o) => o.address)
    .filter((a) => a && a.street && a.area)
    .filter((a) => {
      const key = `${a.area}|${a.street}`.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  if (addrs.length === 0) {
    el.innerHTML = `<div class="cart-empty" style="min-height:200px;"><div class="cart-empty-icon">📍</div><p>No saved addresses</p><span>Addresses from your orders appear here automatically</span></div>`;
    return;
  }
  el.innerHTML = addrs
    .map(
      (a, idx) => `
    <div class="acct-addr-card">
      <div class="acct-addr-icon"><i class="fas fa-map-marker-alt"></i></div>
      <div class="acct-addr-body">
        <div class="acct-addr-name">${escHtml((a.first || "") + " " + (a.last || "")).trim()}</div>
        <div class="acct-addr-line">${escHtml(a.street)}</div>
        <div class="acct-addr-line">${escHtml(a.area)}, Lagos</div>
        ${a.phone ? `<div class="acct-addr-phone"><i class="fas fa-phone"></i> ${escHtml(a.phone)}</div>` : ""}
      </div>
      ${idx === 0 ? `<span class="acct-addr-default">Default</span>` : ""}
    </div>`,
    )
    .join("");
}

function renderAccountTab(tab) {
  document
    .querySelectorAll(".acct-tab")
    .forEach((b) => b.classList.toggle("active", b.dataset.tab === tab));
  document
    .querySelectorAll(".acct-panel")
    .forEach((p) => p.classList.toggle("active", p.id === `acctPanel-${tab}`));
  if (tab === "orders") renderOrderHistory();
  if (tab === "addresses") renderSavedAddresses();
}

document
  .getElementById("accountIconBtn")
  .addEventListener("click", openAccount);
document
  .getElementById("closeAccountBtn")
  .addEventListener("click", closeAccount);
document.getElementById("accountOverlay").addEventListener("click", (e) => {
  if (e.target === document.getElementById("accountOverlay")) closeAccount();
});
document
  .querySelectorAll(".acct-tab")
  .forEach((btn) =>
    btn.addEventListener("click", () => renderAccountTab(btn.dataset.tab)),
  );
document.getElementById("profileForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const get = (id) => (document.getElementById(id) || {}).value || "";
  const p = {
    first: get("profFirst").trim(),
    last: get("profLast").trim(),
    phone: get("profPhone").trim(),
    email: get("profEmail").trim(),
  };
  saveProfile(p);
  updateProfileHeader(p);
  renderAccountStats();
  showToast("✅ Profile saved!");
});
const mbnAccBtn = document.getElementById("mbnAccountBtn");
if (mbnAccBtn) mbnAccBtn.addEventListener("click", openAccount);

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

// ── CHECKOUT FLOW ─────────────────────────────────────────
document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (cart.length === 0) {
    showToast("⚠️ Your cart is empty!");
    return;
  }
  closeCart();
  openCheckoutModal();
});
function openCheckoutModal() {
  const ov = document.getElementById("checkoutOverlay"),
    m = document.getElementById("checkoutModal");
  if (!ov || !m) return;
  ov.classList.add("open");
  m.classList.add("open");
  document.body.style.overflow = "hidden";
  renderCheckoutStep(1);
}
function closeCheckoutModal() {
  const ov = document.getElementById("checkoutOverlay"),
    m = document.getElementById("checkoutModal");
  if (ov) ov.classList.remove("open");
  if (m) m.classList.remove("open");
  document.body.style.overflow = "";
}
const ckoOv = document.getElementById("checkoutOverlay");
if (ckoOv)
  ckoOv.addEventListener("click", (e) => {
    if (e.target === ckoOv) closeCheckoutModal();
  });

function renderCheckoutStep(step, addr, orderId, total) {
  const modal = document.getElementById("checkoutModal");
  if (!modal) return;
  const sub = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const disc =
    appliedDiscount > 0 ? Math.round(sub * (1 - appliedDiscount / 100)) : sub;

  if (step === 1) {
    modal.innerHTML = `
      <button class="checkout-close" id="ckoClose">×</button>
      <div class="cko-steps"><span class="cko-step active">1 · Address</span><span class="cko-step-div">›</span><span class="cko-step">2 · Review</span><span class="cko-step-div">›</span><span class="cko-step">3 · Done</span></div>
      <h3 class="cko-title">Delivery Details</h3>
      <form id="addressForm" class="address-form" novalidate>
        <div class="addr-row">
          <div class="addr-field"><label>First Name *</label><input type="text" id="addrFirst" placeholder="Chioma" required></div>
          <div class="addr-field"><label>Last Name *</label><input type="text" id="addrLast" placeholder="Okafor" required></div>
        </div>
        <div class="addr-field"><label>Phone *</label><input type="tel" id="addrPhone" placeholder="0801 234 5678" required></div>
        <div class="addr-field"><label>Email</label><input type="email" id="addrEmail" placeholder="chioma@example.com"></div>
        <div class="addr-field"><label>Street Address *</label><input type="text" id="addrStreet" placeholder="12 Adeola Odeku Street, VI" required></div>
        <div class="addr-row">
          <div class="addr-field"><label>Area / LGA *</label>
            <select id="addrArea" required><option value="">Select area…</option><option>Lagos Island</option><option>Victoria Island</option><option>Lekki</option><option>Ikeja</option><option>Surulere</option><option>Yaba</option><option>Ojota</option><option>Mushin</option><option>Agege</option><option>Oshodi</option><option>Alaba</option><option>Other</option></select>
          </div>
          <div class="addr-field"><label>Delivery *</label>
            <select id="addrDelivery"><option value="same_day">Same-Day (₦1,500)</option><option value="next_day">Next-Day (₦800)</option><option value="pickup">Pickup (Free)</option></select>
          </div>
        </div>
        <div class="addr-field"><label>Notes</label><textarea id="addrNotes" rows="2" placeholder="Any instructions…"></textarea></div>
        <div class="cko-summary-mini"><span>Estimated total:</span><strong>₦${(disc + 1500).toLocaleString()}</strong></div>
        <button type="submit" class="cko-next-btn">Review Order <i class="fas fa-arrow-right"></i></button>
      </form>`;
    document
      .getElementById("ckoClose")
      .addEventListener("click", closeCheckoutModal);
    document.getElementById("addressForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const f = (v) => (document.getElementById(v) || {}).value || "";
      const first = f("addrFirst").trim(),
        last = f("addrLast").trim(),
        phone = f("addrPhone").trim(),
        street = f("addrStreet").trim(),
        area = f("addrArea");
      if (!first || !last || !phone || !street || !area) {
        showToast("⚠️ Please fill all required fields");
        return;
      }
      renderCheckoutStep(2, {
        first,
        last,
        phone,
        email: f("addrEmail").trim(),
        street,
        area,
        delivery: f("addrDelivery"),
        notes: f("addrNotes").trim(),
      });
    });
  } else if (step === 2) {
    const dCost =
      addr.delivery === "same_day"
        ? 1500
        : addr.delivery === "next_day"
          ? 800
          : 0;
    const dLabel =
      addr.delivery === "same_day"
        ? "Same-Day"
        : addr.delivery === "next_day"
          ? "Next-Day"
          : "Pickup";
    const grand = disc + dCost;
    modal.innerHTML = `
      <button class="checkout-close" id="ckoClose">×</button>
      <div class="cko-steps"><span class="cko-step done">1 · Address</span><span class="cko-step-div">›</span><span class="cko-step active">2 · Review</span><span class="cko-step-div">›</span><span class="cko-step">3 · Done</span></div>
      <h3 class="cko-title">Review Your Order</h3>
      <div class="cko-review-addr"><strong>${escHtml(addr.first)} ${escHtml(addr.last)}</strong><br>${escHtml(addr.street)}, ${escHtml(addr.area)}<br>📞 ${escHtml(addr.phone)} · ${dLabel} Delivery${addr.notes ? `<br><em>${escHtml(addr.notes)}</em>` : ""}</div>
      <div class="cko-items-list">${cart.map((i) => `<div class="cko-item"><img src="${i.image}" alt="" onerror="this.style.display='none'"><span>${escHtml(i.name)} ×${i.quantity}</span><strong>₦${(i.price * i.quantity).toLocaleString()}</strong></div>`).join("")}</div>
      <div class="cko-totals">
        <div class="cko-row"><span>Subtotal</span><span>₦${sub.toLocaleString()}</span></div>
        ${appliedDiscount > 0 ? `<div class="cko-row" style="color:var(--green)"><span>Discount (${appliedDiscount}%)</span><span>−₦${(sub - disc).toLocaleString()}</span></div>` : ""}
        <div class="cko-row"><span>Delivery (${dLabel})</span><span>${dCost === 0 ? "Free" : "₦" + dCost.toLocaleString()}</span></div>
        <div class="cko-row cko-grand"><span>Total</span><strong>₦${grand.toLocaleString()}</strong></div>
      </div>
      <div class="cko-payment-info"><i class="fas fa-lock"></i><span>Pay on Delivery · Secured by Paystack</span></div>
      <div class="cko-btn-row">
        <button class="cko-back-btn" id="ckoBack">← Back</button>
        <button class="cko-place-btn" id="ckoPlace"><i class="fas fa-check-circle"></i> Place Order</button>
      </div>`;
    document
      .getElementById("ckoClose")
      .addEventListener("click", closeCheckoutModal);
    document
      .getElementById("ckoBack")
      .addEventListener("click", () => renderCheckoutStep(1));
    document.getElementById("ckoPlace").addEventListener("click", () => {
      const oid = "DVM-" + Date.now().toString(36).toUpperCase();
      const orders = lsGet("dm_orders", []);
      orders.unshift({
        id: oid,
        date: new Date().toISOString(),
        items: cart.map((i) => ({
          id: i.id,
          name: i.name,
          price: i.price,
          quantity: i.quantity,
        })),
        address: addr,
        total: grand,
      });
      lsSet("dm_orders", orders);
      cart = [];
      saveCart();
      updateCartBadge();
      updateCartUI();
      renderCheckoutStep(3, addr, oid, grand);
    });
  } else if (step === 3) {
    modal.innerHTML = `
      <div class="cko-success">
        <div class="cko-success-icon">🎉</div>
        <h3>Order Placed!</h3>
        <p>Thank you, <strong>${escHtml(addr.first)}</strong>! Your order has been received.</p>
        <div class="cko-order-id">Order ID: <strong>${orderId}</strong></div>
        <div class="cko-success-details">
          <div>📦 Delivering to <em>${escHtml(addr.area)}</em></div>
          <div>💰 Total: <strong>₦${total.toLocaleString()}</strong></div>
          <div>📞 We'll call ${escHtml(addr.phone)} to confirm</div>
        </div>
        <button class="cko-done-btn" id="ckoDone">Continue Shopping</button>
      </div>`;
    document
      .getElementById("ckoDone")
      .addEventListener("click", closeCheckoutModal);
  }
}

// ── TOAST ─────────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
}

// ── SEARCH ────────────────────────────────────────────────
function doSearch(val) {
  searchQuery = val.trim();
  visibleCount = 12;
  renderProducts();
  if (window.innerWidth < 640)
    document
      .getElementById("productsSection")
      .scrollIntoView({ behavior: "smooth" });
}
document
  .getElementById("searchBtn")
  .addEventListener("click", () =>
    doSearch(document.getElementById("searchInput").value),
  );
document.getElementById("searchInput").addEventListener("keyup", (e) => {
  if (e.key === "Enter") doSearch(e.target.value);
  else if (!e.target.value) doSearch("");
});
document.getElementById("mobileSearchToggle").addEventListener("click", () => {
  const b = document.getElementById("mobileSearchBar");
  b.classList.toggle("open");
  if (b.classList.contains("open"))
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

// ── CATEGORY ──────────────────────────────────────────────
document.getElementById("categoryFilter").addEventListener("click", (e) => {
  const p = e.target.closest(".cat-pill");
  if (!p) return;
  setCategory(p.dataset.cat);
  document
    .getElementById("productsSection")
    .scrollIntoView({ behavior: "smooth" });
});
function setCategory(cat) {
  activeCategory = cat;
  visibleCount = 12;
  document
    .querySelectorAll(".cat-pill")
    .forEach((p) => p.classList.toggle("active", p.dataset.cat === cat));
  document
    .querySelectorAll('input[name="catFilter"],input[name="catFilterM"]')
    .forEach((r) => (r.checked = r.value === cat));
  renderProducts();
}
function setSideFilter(radio) {
  setCategory(radio.value);
}
function filterCategory(cat) {
  setCategory(cat);
  document
    .getElementById("productsSection")
    .scrollIntoView({ behavior: "smooth" });
}

// ── SORT ──────────────────────────────────────────────────
document.getElementById("sortSelect").addEventListener("change", (e) => {
  currentSort = e.target.value;
  document.getElementById("mobileSortSelect").value = e.target.value;
  renderProducts();
});
document.getElementById("mobileSortSelect").addEventListener("change", (e) => {
  currentSort = e.target.value;
  document.getElementById("sortSelect").value = e.target.value;
  renderProducts();
});

// ── PRICE FILTER ──────────────────────────────────────────
function applyPriceFilter() {
  const mn = document.getElementById("priceMin").value,
    mx = document.getElementById("priceMax").value;
  priceMin = mn ? parseInt(mn) : 0;
  priceMax = mx ? parseInt(mx) : Infinity;
  const pmi = document.getElementById("priceMinM");
  const pmx = document.getElementById("priceMaxM");
  if (pmi) pmi.value = mn;
  if (pmx) pmx.value = mx;
  renderProducts();
}
function applyPriceFilterM() {
  const mn = document.getElementById("priceMinM").value,
    mx = document.getElementById("priceMaxM").value;
  priceMin = mn ? parseInt(mn) : 0;
  priceMax = mx ? parseInt(mx) : Infinity;
  const pd = document.getElementById("priceMin");
  const px = document.getElementById("priceMax");
  if (pd) pd.value = mn;
  if (px) px.value = mx;
  renderProducts();
}

// ── RATING FILTER ─────────────────────────────────────────
function applyRatingFilter(cb) {
  const v = parseInt(cb.value);
  cb.checked
    ? !ratingFilters.includes(v) && ratingFilters.push(v)
    : (ratingFilters = ratingFilters.filter((r) => r !== v));
  renderProducts();
}

// ── AVAILABILITY FILTERS (FIXED) ──────────────────────────
function bindAvailabilityFilters() {
  function sync() {
    const isD = document.getElementById("inStockOnly"),
      vrD = document.getElementById("verifiedOnly");
    const isM = document.getElementById("inStockOnlyM"),
      vrM = document.getElementById("verifiedOnlyM");
    inStockOnly = (isD && isD.checked) || (isM && isM.checked);
    verifiedOnly = (vrD && vrD.checked) || (vrM && vrM.checked);
    if (isD) isD.checked = inStockOnly;
    if (isM) isM.checked = inStockOnly;
    if (vrD) vrD.checked = verifiedOnly;
    if (vrM) vrM.checked = verifiedOnly;
    renderProducts();
  }
  ["inStockOnly", "verifiedOnly", "inStockOnlyM", "verifiedOnlyM"].forEach(
    (id) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener("change", sync);
    },
  );
}

// ── CLEAR ALL ─────────────────────────────────────────────
function clearAllFilters() {
  activeCategory = "all";
  currentSort = "default";
  searchQuery = "";
  priceMin = 0;
  priceMax = Infinity;
  ratingFilters = [];
  inStockOnly = false;
  verifiedOnly = false;
  visibleCount = 12;
  [
    "searchInput",
    "mobileSearchInput",
    "priceMin",
    "priceMax",
    "priceMinM",
    "priceMaxM",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  document
    .querySelectorAll('input[name="catFilter"],input[name="catFilterM"]')
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

// ── MOBILE FILTER SHEET ───────────────────────────────────
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
document
  .getElementById("clearSheetFilters")
  .addEventListener("click", clearAllFilters);
document.getElementById("applySheetFilters").addEventListener("click", () => {
  closeFilterSheet();
  document
    .getElementById("productsSection")
    .scrollIntoView({ behavior: "smooth" });
});

// ── HERO SHOP NOW ─────────────────────────────────────────
document
  .getElementById("heroShopBtn")
  .addEventListener("click", () =>
    document
      .getElementById("productsSection")
      .scrollIntoView({ behavior: "smooth" }),
  );

// ── HOW IT WORKS MODAL ────────────────────────────────────
function openHIW() {
  document.getElementById("howItWorksModal").classList.add("open");
  document.getElementById("hiwOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeHIW() {
  document.getElementById("howItWorksModal").classList.remove("open");
  document.getElementById("hiwOverlay").classList.remove("open");
  document.body.style.overflow = "";
}
document.getElementById("howItWorksBtn").addEventListener("click", openHIW);
document.getElementById("hiwClose").addEventListener("click", closeHIW);
document.getElementById("hiwOverlay").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeHIW();
});
document.getElementById("hiwShopBtn").addEventListener("click", () => {
  closeHIW();
  document
    .getElementById("productsSection")
    .scrollIntoView({ behavior: "smooth" });
});

// ── AI RECOMMENDATIONS (weighted, not random) ─────────────
function renderAI() {
  const scored = [...products]
    .map((p) => ({ ...p, score: p.rating * Math.log10(p.ratingCount + 1) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);
  const container = document.getElementById("aiRecommendations");
  if (!container) return;
  container.innerHTML = scored
    .map(
      (p) => `
    <div class="ai-product-card">
      <img class="ai-img" src="${p.image}" alt="${escHtml(p.name)}" loading="lazy" onerror="this.style.display='none'">
      <div class="ai-body">
        <div class="ai-tag">${escHtml(p.category)} · ⭐ ${p.rating}</div>
        <div class="ai-name">${escHtml(p.name)}</div>
        <div class="ai-price">₦${p.price.toLocaleString()}</div>
        <button class="ai-add-btn" data-id="${p.id}">Add to Cart</button>
      </div>
    </div>`,
    )
    .join("");
  container.querySelectorAll(".ai-add-btn").forEach((btn) =>
    btn.addEventListener("click", () => {
      const p = products.find((p) => p.id === +btn.dataset.id);
      if (p) addToCart(p, 1);
    }),
  );
}

// ── TIMER (persistent deadline) ───────────────────────────
function startTimer() {
  const KEY = "dm_flash_deadline";
  let dl = lsGet(KEY, null);
  const now = Date.now();
  if (!dl || dl < now) {
    dl = now + 8 * 3600000;
    lsSet(KEY, dl);
  }
  const pad = (n) => String(n).padStart(2, "0");
  function tick() {
    const rem = Math.max(0, dl - Date.now());
    document.getElementById("tHours").textContent = pad(
      Math.floor(rem / 3600000),
    );
    document.getElementById("tMins").textContent = pad(
      Math.floor((rem % 3600000) / 60000),
    );
    document.getElementById("tSecs").textContent = pad(
      Math.floor((rem % 60000) / 1000),
    );
    if (rem <= 0) clearInterval(t);
  }
  tick();
  const t = setInterval(tick, 1000);
}

// ── RECENTLY VIEWED (localStorage) ───────────────────────
function addToRecentlyViewed(id) {
  const i = recentIds.indexOf(id);
  if (i > -1) recentIds.splice(i, 1);
  recentIds.unshift(id);
  if (recentIds.length > MAX_RECENT) recentIds.pop();
  saveRecent();
  renderRecentlyViewed();
}
function renderRecentlyViewed() {
  const sec = document.getElementById("recentlySection"),
    grid = document.getElementById("recentlyGrid");
  if (!sec || !grid) return;
  const items = recentIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);
  if (items.length === 0) {
    sec.style.display = "none";
    return;
  }
  sec.style.display = "";
  grid.innerHTML = items
    .map(
      (p) =>
        `<div class="recently-card" data-id="${p.id}"><img src="${p.image}" alt="${escHtml(p.name)}" loading="lazy" onerror="this.parentElement.style.background='var(--light)'"><div class="recently-card-body"><div class="recently-card-name">${escHtml(p.name)}</div><div class="recently-card-price">₦${p.price.toLocaleString()}</div></div></div>`,
    )
    .join("");
  grid
    .querySelectorAll(".recently-card")
    .forEach((c) =>
      c.addEventListener("click", () => openQuickView(+c.dataset.id)),
    );
}

// ── SEARCH SUGGESTIONS ────────────────────────────────────
const suggBox = document.getElementById("searchSuggestions");
let suggT;
function showSuggestions(val, inputEl) {
  clearTimeout(suggT);
  if (!val || val.length < 2) {
    suggBox.classList.remove("open");
    return;
  }
  suggT = setTimeout(() => {
    const ms = products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(val.toLowerCase()) ||
          p.category.toLowerCase().includes(val.toLowerCase()),
      )
      .slice(0, 5);
    if (!ms.length) {
      suggBox.classList.remove("open");
      return;
    }
    const rect = inputEl.getBoundingClientRect();
    suggBox.style.top = rect.bottom + window.scrollY + 8 + "px";
    suggBox.style.left = rect.left + "px";
    suggBox.style.width = rect.width + "px";
    suggBox.innerHTML = ms
      .map(
        (p) =>
          `<div class="suggestion-item" data-id="${p.id}"><img src="${p.image}" alt="" onerror="this.style.display='none'"><span>${escHtml(p.name)}</span><span class="suggestion-price">₦${p.price.toLocaleString()}</span></div>`,
      )
      .join("");
    suggBox.classList.add("open");
    suggBox.querySelectorAll(".suggestion-item").forEach((item) =>
      item.addEventListener("click", () => {
        openQuickView(+item.dataset.id);
        suggBox.classList.remove("open");
      }),
    );
  }, 200);
}
document
  .getElementById("searchInput")
  .addEventListener("input", (e) => showSuggestions(e.target.value, e.target));
document.addEventListener("click", (e) => {
  if (
    !e.target.closest(".search-box") &&
    !e.target.closest(".search-suggestions")
  )
    suggBox.classList.remove("open");
});

// ── BACK TO TOP ───────────────────────────────────────────
const bttBtn = document.getElementById("backToTop");
if (bttBtn) {
  window.addEventListener(
    "scroll",
    () => bttBtn.classList.toggle("visible", window.scrollY > 400),
    { passive: true },
  );
  bttBtn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ── MOBILE BOTTOM NAV ─────────────────────────────────────
const mbnCBtn = document.getElementById("mbnCartBtn");
if (mbnCBtn) mbnCBtn.addEventListener("click", openCart);

// ── NEWSLETTER ────────────────────────────────────────────
function handleNewsletter(e) {
  e.preventDefault();
  const em = document.getElementById("newsletterEmail").value;
  showToast(`🎉 Thanks! ${em} subscribed!`);
  document.getElementById("newsletterForm").reset();
}

// ── ESC KEY ───────────────────────────────────────────────
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  closeModal();
  closeCart();
  closeWishlist();
  closeAccount();
  closeFilterSheet();
  closeCheckoutModal();
  closeHIW();
});

// ── DARK MODE ─────────────────────────────────────────────
(function initDarkMode() {
  const saved = localStorage.getItem("dm_theme");
  if (saved === "dark")
    document.documentElement.setAttribute("data-theme", "dark");
  function applyIcon() {
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";
    const icon = document.getElementById("darkModeIcon");
    if (icon) {
      icon.className = isDark ? "fas fa-sun" : "fas fa-moon";
    }
  }
  applyIcon();
  document.getElementById("darkModeBtn").addEventListener("click", () => {
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";
    if (isDark) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("dm_theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("dm_theme", "dark");
    }
    applyIcon();
  });
})();

// ── STICKY CART BAR ───────────────────────────────────────
function updateStickyCartBar() {
  const bar = document.getElementById("stickyCartBar");
  if (!bar) return;
  const total = cart.reduce((s, i) => s + i.quantity, 0);
  const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  if (total > 0) {
    bar.style.display = "block";
    document.getElementById("scbItems").textContent =
      total + " item" + (total !== 1 ? "s" : "") + " in cart";
    document.getElementById("scbTotal").textContent =
      "₦" + subtotal.toLocaleString();
  } else {
    bar.style.display = "none";
  }
}
const scbBtn = document.getElementById("scbCheckoutBtn");
if (scbBtn) {
  scbBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      showToast("⚠️ Your cart is empty!");
      return;
    }
    openCheckoutModal();
  });
}

// ── SCROLL PROGRESS BAR ───────────────────────────────────
window.addEventListener(
  "scroll",
  () => {
    const bar = document.getElementById("scrollProgress");
    if (!bar) return;
    const scrollTop = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (docH > 0 ? (scrollTop / docH) * 100 : 0) + "%";
  },
  { passive: true },
);

// ── DISCOUNT BADGE on renderCard ─────────────────────────
// (already built into renderCard — oldPrice shows savings %)

// ── PRODUCT SHARE (copy link to clipboard) ────────────────
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".product-share-btn");
  if (!btn) return;
  e.stopPropagation();
  const id = btn.dataset.id;
  const product = products.find((p) => p.id === +id);
  if (!product) return;
  const url = window.location.href.split("?")[0] + "?product=" + id;
  if (navigator.share) {
    navigator
      .share({
        title: product.name,
        text:
          "Check out " +
          product.name +
          " on Dev_Mart — ₦" +
          product.price.toLocaleString(),
        url,
      })
      .catch(() => {});
  } else {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        showToast("🔗 Link copied! Share with friends");
      })
      .catch(() => {
        showToast("🔗 " + url);
      });
  }
});

// ── OPEN PRODUCT FROM URL PARAM ───────────────────────────
(function checkUrlProduct() {
  const params = new URLSearchParams(window.location.search);
  const pid = params.get("product");
  if (pid) {
    setTimeout(() => openQuickView(+pid), 400);
  }
})();

// ── INIT ──────────────────────────────────────────────────
function init() {
  bindAvailabilityFilters();
  renderProducts();
  updateCartBadge();
  updateCartUI();
  updateWishlistBadge();
  updateStickyCartBar();
  renderAI();
  startTimer();
  renderRecentlyViewed();
}
init();
