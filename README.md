# DigiTools - Premium Digital Tools Buying Website

A responsive React-based digital tools storefront built for the assignment requirements. The project includes a premium landing page, product showcase, cart management, toast notifications, and modern responsive sections inspired by the provided design.

## Live Project Overview
DigiTools helps users browse premium digital products such as writing tools, design packs, automation kits, and creator resources. Visitors can switch between the Products and Cart views, add tools to the cart, remove items, and clear the cart through checkout.

## Technologies Used
- React.js
- Tailwind CSS
- DaisyUI
- JavaScript (ES6+)
- React-Toastify
- Vite
- JSON data structure

## Core Features
1. Responsive landing page with navbar, hero banner, stats, product section, steps section, pricing cards, CTA area, and footer.
2. Interactive product and cart toggling with add to cart, remove from cart, live cart count, and total price calculation.
3. Toast notifications for add, remove, duplicate item alerts, empty cart warning, and checkout completion.

## Local Setup
```bash
npm install
npm run dev
```

## Build for Production
```bash
npm run build
```

## Folder Highlights
- `src/App.jsx` - main page layout and cart logic
- `src/data/products.js` - product, pricing, and step data
- `public/assets/` - assignment images and icons

## Suggested Meaningful Git Commits
1. Initialize Vite React project structure
2. Configure Tailwind CSS and DaisyUI
3. Add landing page hero and stats section
4. Create product JSON data and product card layout
5. Implement product and cart toggle logic
6. Add cart total, remove button, and checkout reset
7. Integrate react-toastify alerts
8. Polish responsive layout and update README
