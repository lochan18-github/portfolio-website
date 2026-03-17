import React, { useState } from "react";
import ProductList from "./ProductList";
import "./App.css";

function App() {

  const [showProductList, setShowProductList] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
  };

  if (showProductList) {
    return <ProductList />;
  }

  return (
    <div className="landing-page">

      <div className="landing-content">

        <h1>Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery, your one stop shop for beautiful indoor
          plants. Discover a wide variety of plants that bring freshness and
          positivity into your home.
        </p>

        <button onClick={handleGetStarted}>
          Get Started
        </button>

      </div>

    </div>
  );
}

export default App;
