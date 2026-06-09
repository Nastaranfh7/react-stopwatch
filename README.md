⏱ React Stopwatch

:rocket: Live Demo
Check it out :point_right: Open Demo

A lightweight and minimal stopwatch built with React, designed to demonstrate clean component structure, state management with hooks, and precise timer logic.

---

:sparkles: Features

• ⏱ Start / Stop / Reset functionality
• ⚛ React Hooks (useState, useEffect)
• :dart: Millisecond‑accurate timer
• :iphone: Fully responsive UI
• 🧩 Clean and modular component structure
• :art: Simple, modern design


---

:file_folder: Folder Structure

project/
│
├── index.html
├── package.json
├── vite.config.js
│
└── src/
    ├── StopWatch.jsx        # Stopwatch logic & UI
    ├── main.jsx             # App entry point
    ├── index.css            # Styles
    └── assets/              # Icons & images


---

:rocket: How to Run

Clone or download the project:

git clone https://github.com/Nastaranfh7/react-stopwatch.git


Install dependencies:

npm install


Start the development server:

npm run dev


Then open in your browser:

http://localhost:5173


---

🧠 Core Logic (React Hooks)

Timer Interval

useEffect(() => {
  let interval;
  if (isRunning) {
    interval = setInterval(() => {
      setTime(prev => prev + 10);
    }, 10);
  }
  return () => clearInterval(interval);
}, [isRunning]);


Controls

• Start → begins the timer
• Stop → pauses the timer
• Reset → clears the time


---

📸 Screenshot

(Add your screenshot here)

---

🧠 Created by Nastaran Fazli Heravi

Feel free to fork, customize, or contribute :blue_heart:
:link: My GitHub Profile

---

If you want, I can also add:

• Badges (React, Vite, License, Stars)
• GitHub Pages setup for a real online demo
• A more advanced version with laps, animations, or sound


Just tell me which direction you want to take it.
