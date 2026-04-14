
import React from "react";
import "./App.css";

const App = () => {

  const handleGetStarted = () => {
    window.location.href = "/plants"; // later we will create this page
  };

  return (
    <div className="landing-page">
      <h1>🌿 Paradise Nursery</h1>

      <p>
        Welcome to Paradise Nursery, your one-stop destination for beautiful
        houseplants. Bring nature into your home with our wide collection of
        plants.
      </p>

      <button onClick={handleGetStarted}>
        Get Started
      </button>
    </div>
  );
};

export default App;