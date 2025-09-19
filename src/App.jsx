import React, { useState } from "react";
import "./index.css";

function App() {
  const [theme, setTheme] = useState("dark");
  const [selectedRace, setSelectedRace] = useState(null);

  const totalDays = 30;
  const startDay = 1; // 1 = Monday
  const days = Array.from({ length: totalDays }, (_, i) => i + 1);

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Race weekends (September 2025)
  const races = {
    7: "Italian GP 🇮🇹 (Monza)",
    21: "Singapore GP 🇸🇬",
    28: "Japanese GP 🇯🇵 (Suzuka)",
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={`app-container ${theme}`}>
      {/* 🍂 Falling leaves */}
      <div className="falling-leaves">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="leaf"
            style={{
              left: `${Math.random() * 100}vw`,
              animationDuration: `${5 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          >
            🍂
          </div>
        ))}
      </div>

      <div className="calendar-window">
        <div className="window-bar">
          <span className="window-title">🏎️ F1 Pixel Calendar</span>
          <div className="window-buttons">
            <span className="btn close">✖</span>
            <span className="btn min">—</span>
            <span className="btn max">□</span>
          </div>
        </div>

        <div className="window-content">
          <h2 className="calendar-month">September 2025</h2>

          {/* Weekday headers */}
          <div className="weekdays">
            {weekDays.map((day) => (
              <div key={day} className="weekday-cell">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="calendar-grid">
            {Array.from({ length: startDay - 1 }).map((_, i) => (
              <div key={`empty-${i}`} className="calendar-cell empty"></div>
            ))}

            {days.map((day) => (
              <div
                key={day}
                className={`calendar-cell ${races[day] ? "race-day" : ""}`}
                onClick={() => races[day] && setSelectedRace(races[day])}
              >
                <span className="day-number">{day}</span>
                {races[day] && <span className="race-flag">🏁</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="window-footer">
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </div>

      {/* Race details popup */}
      {selectedRace && (
        <div className="modal-overlay" onClick={() => setSelectedRace(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Race Weekend</h3>
            <p>{selectedRace}</p>
            <button onClick={() => setSelectedRace(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
