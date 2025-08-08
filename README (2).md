# 🛒 Shopnetic - E-commerce Website

Shopnetic is a full-stack e-commerce platform built with HTML, CSS, JavaScript for the frontend and Node.js, Express.js, and MongoDB for the backend. It features product browsing, filtering, sorting, cart/wishlist functionality, user authentication, order placement, and a simple billing system.

## 🌐 Live Preview

> Coming Soon (Deploy frontend on GitHub Pages and backend on Render/Vercel)

---

## 📁 Folder Structure

```
Shopnetic/
├── backend/                # Node.js + Express backend
│   ├── models/             # Mongoose models (User, Product, Order)
│   ├── routes/             # API route handlers
│   ├── controllers/        # Route logic
│   ├── config/             # DB and environment setup
│   ├── server.js           # Entry point
├── public/                 # Frontend files
│   ├── index.html
│   ├── style.css
│   ├── cart.html
│   ├── wishlist.html
│   ├── signup.html
│   ├── login.html
│   └── js/                 # JS files for functionality
├── .gitignore
├── package.json
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
- Product API (CRUD)
- Order placement (stores to MongoDB)
- Protected routes (user-based orders)
- CORS and secure headers

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
# MONGO_URI=your_mongodb_uri
# JWT_SECRET=your_secret
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

## 🧪 Example Test Data

```json
{
  "name": "T-Shirt",
  "price": 499,
  "category": "Apparel",
  "image": "https://link-to-image.jpg"
}
```

---

## 🙋‍♀️ Author

- **Bhumika Hazra**
- Intern Project for E-Commerce Development

---

## 📬 Contact

For queries or suggestions: [email@example.com](mailto:email@example.com)