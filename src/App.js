import React, { useState, useEffect } from "react";
import { NavBar } from "./components/navBar";
import "./App.css";
import { FaCloudSun, FaRegMoon } from "react-icons/fa";
import { IoMdRainy } from "react-icons/io";
import { createRaindrops } from "./utils/createRainDrops";
import { ThemeIcons } from "./components/themeIcons";
import { ThemeContext } from "./contexts/themeContext";
import { HomePage } from './components/homePage';

function App() {
  const [theme, setTheme] = useState("moony");

  useEffect(() => {
    if (theme === "rainy") {
      createRaindrops();
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`h-screen ${
          theme === "moony"
            ? "bg-gradient-to-br from-[#282644] to-[#0b0617] text-white"
            : theme === "sunny"
            ? "bg-gradient-to-r from-yellow-300 to-yellow-50 text-gray-800"
            : theme === "rainy"
            ? "bg-gradient-to-br from-[#282644] to-[#0b0617] text-white"
            : null
        } relative`}
      >
        <NavBar />
        <ThemeIcons />
        <HomePage />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
