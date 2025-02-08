import React from "react";
import { useNavigate } from "react-router-dom";
import FallingHearts from "../components/FallingHearts"; // Corrected Import

const ThankYouPage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#FFF0F5",
        height: "100vh",
        overflow: "hidden",
        paddingTop: "50px",
        position: "relative",
      }}
    >
      <FallingHearts /> {/* Falling Hearts Animation */}

      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#D32F2F", marginBottom: "20px" }}>
        Thank You KMS... 💛
      </h1>

      <img src="/Happy me.jpg" alt="Happy Bear" width="250px" />

      <div style={{ marginTop: "20px" }}>
        <audio id="myAudio" controls preload="none">
          <source src="/Ek din zindagi.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>

      <button
        style={{
          backgroundColor: "#D32F2F",
          color: "white",
          padding: "12px 25px",
          fontSize: "1.2rem",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          marginTop: "20px",
        }}
        onClick={() => navigate("/date")}
      >
        Don't go yet! Click here ❤️
      </button>
    </div>
  );
};

export default ThankYouPage;
