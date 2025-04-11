# 🚀 Cryptocurrency Price Quoter

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-TypeSafe-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-Speedy🔥-purple?logo=vite)
![Status](https://img.shields.io/badge/Status-Deployed-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)

A modern web app built with **React**, allowing users to get real-time prices of cryptocurrencies in **USD**, **EUR** ,**Pesos**, and other currencies. This app also lets you **track your favorite coins**, see how your **portfolio value changes over time**, and persist your data using **LocalStorage**.

![App Preview](https://wilmed10.github.io/portfolio/img/project-crypto2.png)


## 🌐 Live Demo

👉 Try it here:  
🔗 [https://wilmed10.github.io/cryptocurrency-market/](https://wilmed10.github.io/cryptocurrency-market/)


## ✅ Features

- 🔄 Real-time prices of cryptocurrencies in multiple currencies (USD, MXN, etc.).
- ⭐ **Favorites section** to track selected coins.
- 📈 **Portfolio variation**: view the change in value over time.
- ♻️ Auto-refresh every 60 seconds.
- 💾 Persistent data using LocalStorage.
- 💡 Intuitive and clean UI with responsive layout.
- 🧠 Built with performance and scalability in mind.


## 🛠️ Technologies Used

- ⚛️ React 19
- ⚡ Vite
- 💅 TypeScript
- 🧠 Zustand – Global state manager
- ✅ Zod – API response validation
- 🌐 Axios – HTTP requests
- 💾 LocalStorage – Persistence
- 🎨 Tailwind CSS (optional styling layer)


## 🧠 What I Learned

- Managing global state efficiently using Zustand.
- Validating API responses with Zod to prevent runtime errors.
- Building a reactive app with real-time updates and persistence.
- Structuring scalable React applications using TypeScript.
- Deploying apps with GitHub Pages for public access.


## 📁 Project Structure

```bash
cryptocurrency-market/
├── public/               # Static files (favicon, images, etc.)
├── src/
│   ├── components/       # Reusable UI components
│   ├── data/             # Static data
│   ├── schema/           # Zod validation schemas
│   ├── services/         # API service logic
│   ├── types/            # TypeScript type definitions
│   ├── App.tsx           # Root component
│   ├── main.tsx          # Entry point
│   ├── store.ts          # Zustand store configuration
│   └── Spinner.css       # Loading animation styles
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## ⚙️ Getting Started

To run the project locally:

```bash
# Clone the repository
git clone https://github.com/wilmed10/cryptocurrency-market

# Navigate to the project folder
cd cryptocurrency-market

# Install dependencies
npm install

# Run the app
npm run dev
