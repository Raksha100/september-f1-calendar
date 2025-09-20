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
    5: "P1 & P2 - Italian GP 🇮🇹 (Monza)",
    6: "Qualifying - Italian GP 🇮🇹 (Monza)",
    7: "Race - Italian GP 🇮🇹 (Monza)",
    19: "P1 & P2 - Azerbaijan GP 🇦🇿 (Baku)",
    20: "Qualifying - Azerbaijan GP 🇦🇿 (Baku)",
    21: "Race - Azerbaijan GP 🇦🇿 (Baku)",
  };

  // Drivers' standings (Sept 2025)
  const driverStandings = [
    { pos: 1, name: "Piastri", nat: "AUS", team: "McLaren", pts: 324 },
    { pos: 2, name: "Norris", nat: "GBR", team: "McLaren", pts: 293 },
    { pos: 3, name: "Verstappen", nat: "NED", team: "Red Bull Racing", pts: 230 },
    { pos: 4, name: "Russell", nat: "GBR", team: "Mercedes", pts: 194 },
    { pos: 5, name: "Leclerc", nat: "MON", team: "Ferrari", pts: 163 },
    { pos: 6, name: "Hamilton", nat: "GBR", team: "Ferrari", pts: 117 },
    { pos: 7, name: "Albon", nat: "THA", team: "Williams", pts: 70 },
    { pos: 8, name: "Antonelli", nat: "ITA", team: "Mercedes", pts: 66 },
    { pos: 9, name: "Hadjar", nat: "FRA", team: "Racing Bulls", pts: 38 },
    { pos: 10, name: "Hulkenberg", nat: "GER", team: "Kick Sauber", pts: 37 },
  ];

  // Constructors' standings (Sept 2025)
  const constructorStandings = [
    { pos: 1, team: "McLaren", pts: 617 },
    { pos: 2, team: "Ferrari", pts: 280 },
    { pos: 3, team: "Mercedes", pts: 260 },
    { pos: 4, team: "Red Bull Racing", pts: 239 },
    { pos: 5, team: "Williams", pts: 86 },
    { pos: 6, team: "Aston Martin", pts: 62 },
    { pos: 7, team: "Racing Bulls", pts: 61 },
    { pos: 8, team: "Kick Sauber", pts: 55 },
    { pos: 9, team: "Haas", pts: 44 },
    { pos: 10, team: "Alpine", pts: 20 },
  ];

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

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

      {/* Main layout */}
      <div className="main-layout">
        {/* Left: Constructor Standings */}
        <div className="standings-panel left">
          <h3>Constructor Standings</h3>
          <table>
            <thead>
              <tr>
                <th>POS</th>
                <th>TEAM</th>
                <th>PTS</th>
              </tr>
            </thead>
            <tbody>
              {constructorStandings.map((c) => (
                <tr key={c.pos}>
                  <td>{c.pos}</td>
                  <td>{c.team}</td>
                  <td>{c.pts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Center: Calendar */}
        <div className="calendar-wrapper">
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
                  <div key={day} className="weekday-cell">{day}</div>
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
        </div>

        {/* Right: Drivers' Standings */}
        <div className="standings-panel right">
          <h3>Drivers' Standings</h3>
          <table>
            <thead>
              <tr>
                <th>POS</th>
                <th>DRIVER</th>
                <th>NAT</th>
                <th>TEAM</th>
                <th>PTS</th>
              </tr>
            </thead>
            <tbody>
              {driverStandings.map((d) => (
                <tr key={d.pos}>
                  <td>{d.pos}</td>
                  <td>{d.name}</td>
                  <td>{d.nat}</td>
                  <td>{d.team}</td>
                  <td>{d.pts}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
