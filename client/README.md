# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🛒 E-Commerce App

A full-stack e-commerce web application built with **React (Vite)** for the frontend and **Node.js + Express** for the backend.  
It allows browsing hardware components, seeding product data, and managing stock in MongoDB.

---

## 🚀 Features
- Modern **React frontend** with Vite + Tailwind CSS
- REST API built with **Express.js**
- MongoDB database with **Mongoose models**
- Product **seed script** (`seed.js`) for demo data
- Client–Server architecture (`client/`, `server/`)
- **Responsive design** for mobile and desktop
- Organized with **ESLint** rules and clean structure

---

## 📂 Project Structure
ECOMMERCE/
├── client/ # React (Vite) frontend
│ ├── src/ # React components & pages
│ ├── public/ # Static assets
│ ├── package.json
│ └── vite.config.js
│
├── server/ # Node.js + Express backend
│ ├── src/ # Routes, models, controllers
│ ├── seed.js # Database seeding script
│ ├── .env # Environment variables (not pushed to GitHub)
│ ├── .env.example
│ └── package.json
│
├── .gitignore # Ignore node_modules, env files, etc.
├── README.md # Project documentation

---

## 🛠️ Installation & Setup

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/ecommerce-app.git
cd ecommerce-app

##set up backend (server)
cd server
npm install
cp .env.example .env   # copy env file and add your MongoDB URI
npm run dev            # start backend (nodemon)

##set up frontend(client)
cd ../client
npm install
npm run dev            # start frontend (Vite dev server)

Frontend will typically run on http://localhost:5173
Backend will typically run on http://localhost:8000

##Create a .env file in server/ with:

MONGO_URI=your-mongodb-connection-string
PORT=8000

##🧑‍💻 Tech Stack

#Frontend

React (Vite)

CSS

Axios

React Router

#Backend

Node.js

Express.js

Mongoose (MongoDB)

#Other Tools

ESLint

Git & GitHub