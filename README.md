# e-plantShopping

**Final Project** - Paradise Nursery Shopping Cart Application

A fully functional React + Redux shopping cart application for Paradise Nursery - an online plant shop.

## Features

* Responsive landing page with background image
* Product listing with multiple categories (Air Purifying, Aromatic, Insect Repellent, Medicinal, Low Maintenance)
* Add to Cart functionality using Redux Toolkit
* Dynamic shopping cart with quantity management (increase / decrease / delete)
* Total calculation and checkout simulation
* Cart item counter in navbar

## Technologies Used

- React 18
- Redux Toolkit
- React-Redux
- Vite
- CSS3

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── App.jsx          # Landing page with Get Started button
├── App.css          # Background image and landing styles
├── AboutUs.jsx      # Company about section
├── ProductList.jsx  # Product listing page
├── CartItem.jsx     # Shopping cart page
├── CartSlice.jsx    # Redux reducers: addItem, removeItem, updateQuantity
├── store.js         # Redux store configuration
└── main.jsx
```

## About

This project was created as the final project for the IBM course  
**Developing Front-End Apps with React**.
