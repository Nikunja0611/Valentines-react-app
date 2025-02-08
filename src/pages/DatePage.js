import React from "react";
import { useNavigate } from "react-router-dom";

const DatePage = () => {
  const navigate = useNavigate();

  // Inline styles
  const styles = {
    container: {
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#ffe6f2", // Soft pink background
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#d63384", // Sweet pink
      marginBottom: "20px",
    },
    input: {
      padding: "12px",
      fontSize: "1.2rem",
      border: "2px solid #d63384",
      borderRadius: "8px",
      outline: "none",
      marginBottom: "20px",
      cursor: "pointer",
    },
    button: {
      backgroundColor: "#d63384",
      color: "white",
      padding: "12px 25px",
      fontSize: "1.2rem",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold",
      transition: "background 0.3s, transform 0.2s",
    },
    buttonHover: {
      backgroundColor: "#b0236c",
      transform: "scale(1.1)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Are you free on...</h1>

      <input type="date" style={styles.input} />

      <button
        style={styles.button}
        onMouseOver={(e) => (e.target.style.background = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.background = styles.button.backgroundColor)}
        onClick={() => navigate("/food")}
      >
        Lock the Date 💖
      </button>
    </div>
  );
};

export default DatePage;
