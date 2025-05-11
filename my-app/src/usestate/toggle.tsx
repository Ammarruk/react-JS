import React, { useState } from "react";

const ToggleTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div style={{ background: isDarkMode ? "black" : "white", color: isDarkMode ? "white" : "black", padding: "20px" }}>
      <h2>Current Mode: {isDarkMode ? "Dark Mode" : "Light Mode"}</h2>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle Mode</button>
    </div>
  );
};

export default ToggleTheme;
  