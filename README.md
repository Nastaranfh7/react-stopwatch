# ⏱ React Stopwatch

## 🚀 Live Demo
Check it out 👉 **[Live Demo](https://nastaranfh7.github.io/react-stopwatch/)**

A clean, lightweight and responsive stopwatch built with **React + Vite**. Designed with simplicity, good component structure, and precise timer logic.

## ✨ Features

- ⏱ Start / Stop / Reset functionality
- ⚡ Millisecond accurate timer (updates every 10ms)
- ⚛ Built with React Hooks (`useState`, `useEffect`)
- 📱 Fully responsive design
- 🧩 Clean and modular component structure
- 🎨 Modern and minimal UI

## 📁 Folder Structure

```plaintext
project/
│
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── StopWatch.jsx          # Main stopwatch logic & UI
    ├── main.jsx               # App entry point
    ├── index.css              # Styles
    └── assets/                # Icons and images


🚀 How to Run

Clone the repository:Bashgit clone https://github.com/Nastaranfh7/react-stopwatch.git
Go to the project directory:Bashcd react-stopwatch
Install dependencies:Bashnpm install
Start the development server:Bashnpm run dev
Open your browser at: http://localhost:5173

🧠 Core Logic
jsxuseEffect(() => {
  let interval;
  if (isRunning) {
    interval = setInterval(() => {
      setTime(prev => prev + 10);
    }, 10);
  }
  return () => clearInterval(interval);
}, [isRunning]);
📸 Screenshot
(اینجا عکس صفحهٔ پروژه رو اضافه کن)
🧠 Created by Nastaran Fazli Heravi
Feel free to fork, customize, or contribute 💙
My GitHub Profile (https://github.com/Nastaranfh7)
