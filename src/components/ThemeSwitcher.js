import React, { useState, useEffect } from "react";
import "./ThemeSwitcher.css";

const lightTheme = {
  "--background-image": "url('./assets/bg-light.png')",
  "--primary-color": "#FEFDEC",
  "--secondary-color": "#D43A27",
  "--tertiary-color": "#30505c",
  "--ternery-color": "#fae7b2",
  "--text-color": "#aaa",
  "--border-color": "#fff",
  "--link-color": "#80d4ff",
  "--link-hover-color": "#58b2d6",
  "--app-black": "#0D2326",
  "--app-white": "#FFECCC",
};

const darkTheme = {
  "--background-image": "url('./assets/bg-dark.png')",
  "--primary-color": "#1a1a1a",
  "--secondary-color": "#ffa102",
  "--tertiary-color": "#30505c",
  "--ternery-color": "#9baf86",
  "--text-color": "#aaa",
  "--border-color": "#aaa",
  "--link-color": "#80d4ff",
  "--link-hover-color": "#58b2d6",
  "--app-black": "#eaf1fa",
  "--app-white": "#575757",
};

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = darkMode ? darkTheme : lightTheme;
    for (const key in theme) {
      document.documentElement.style.setProperty(key, theme[key]);
    }

    // Toggle the CSS class for the light theme on the body element
    if (darkMode) {
      document.body.classList.remove("body-light-theme");
    } else {
      document.body.classList.add("body-light-theme");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="switch">
      <label>
        Dark Mode
        <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
      </label>
    </div>
  );
};

export default ThemeSwitcher;
