import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const HomePage = () => {
  const navigate = useNavigate();
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const moveNoButton = () => {
    setNoPosition({
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
    });
  };

  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        paddingTop: "50px",
        backgroundColor: "#FFEBEB", // Light red background
        height: "100vh",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#D32F2F", // Deep red heading
          marginBottom: "20px",
        }}
      >
        Will you be my Valentine? ❤️
      </h1>

      {/* Larger Image */}
      <img src="/Cute Couple.jpg" alt="Cute Couple" width="300px" />

      <div style={{ marginTop: "30px", display: "flex", justifyContent: "center", gap: "20px" }}>
        {/* Yes Button */}
        <button
          style={{
            backgroundColor: "#D32F2F", // Darker Red
            color: "white",
            padding: "12px 25px",
            fontSize: "1.2rem",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
          onClick={() => navigate("/thank-you")}
        >
          Yes
        </button>

        {/* No Button with Hover Effect */}
        <motion.button
          style={{
            backgroundColor: "#FFCDD2", // Lighter red
            color: "black",
            padding: "12px 25px",
            fontSize: "1.2rem",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            position: "relative",
            transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
          }}
          onMouseEnter={moveNoButton}
        >
          No
        </motion.button>
      </div>
    </div>
  );
};

export default HomePage;
