import React from "react";
import "./App.css";

function App() {
  return (
    <div className="landing-page">
      <div>
        <h1>Paradise Nursery</h1>
        <p>Welcome to Paradise Nursery - Your one stop shop for beautiful plants.</p>

        <button
          onClick={() => alert("Welcome to Paradise Nursery!")}
          style={{
            padding: "12px 24px",
            fontSize: "18px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            marginTop: "20px"
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
