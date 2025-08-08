# 🛒 Shopnetic - E-commerce Website

Shopnetic is a full-stack e-commerce platform built with HTML, CSS, JavaScript for the frontend and Node.js, Express.js, and MongoDB for the backend. It features product browsing, filtering, sorting, cart/wishlist functionality, user authentication, order placement, and a simple billing system.

## 🌐 Frontend Deployment

The frontend of this project is deployed and accessible at:
 https://bhumika0305.github.io/Shopnetic-frontend/

---

## 📁 Folder Structure

```
Shopnetic/
├── backend/                # Node.js + Express backend
│   ├── models/             # Mongoose models (User, Product, Order)
│   ├── routes/             # API route handlers
│   ├── server.js           # Entry point
├── frontend/                 # Frontend files
│   ├── index.html
│   ├── css/
│   ├── cart.html
│   ├── wishlist.html
│   ├── signup.html
│   ├── login.html
│   ├── about.html
│   ├── contact.html
│   └── script.js                # JS file for functionality
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## 🚀 Features

### 🖥️ Frontend (HTML + CSS + JS)
- Product listing page
- Product filtering by category
- Sorting by price
- Add to Cart / Wishlist (uses localStorage)
- View Cart / Wishlist pages
- Remove and update quantity in cart
- Order Summary + Billing section (frontend only)
- Signup/Login UI

### 🛠️ Backend (Node.js + Express + MongoDB)
- User Signup/Login with JWT auth
- 
---

## ⚙️ How to Run Locally

### 🧑‍💻 Prerequisites
- Node.js + npm
- MongoDB (local or MongoDB Atlas)

### 🔧 Backend Setup

```bash
cd backend
npm install
# Create a `.env` file with the following:
# MONGO_URI=mongodb://localhost:27017/shopnetic
# JWT_SECRET=your_jwt_secret_here
npm run dev
```

### 🖼 Frontend Setup

Open `public/index.html` with Live Server or run:

```bash
npx live-server public
```

Or just open HTML files manually in browser.

---

## 📦 Deployment

### ✅ Frontend (GitHub Pages)
1. Push `public/` folder to GitHub
2. Go to repo settings → Pages → set source to `public`

### ✅ Backend (Render/Vercel)
1. Push backend to GitHub
2. Create new service on [Render](https://render.com/)
3. Add environment variables (`MONGO_URI`, `JWT_SECRET`)
4. Deploy

---

## 🙋‍♀️ Author

- **Bhumika Hazra**
- Intern Project for E-Commerce Development
