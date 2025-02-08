import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const desserts = [
  { name: "Ice-Cream", src: "/Ice-Cream.jpg" },
  { name: "Pudding", src: "/Pudding.jpg" },
  { name: "Pastries", src: "/Pastries.jpg" },
  { name: "Cookies", src: "/Cookies.jpg" },
  { name: "Cake", src: "/Cake.jpg" },
  { name: "Imarti", src: "/Imarti.jpg" },
  { name: "Gulabjamun", src: "/Gulabjamun.jpg" },
  { name: "Rasgulla", src: "/Rasgulla.jpg" },
];

const DessertPage = () => {
  const navigate = useNavigate();
  const [selectedDesserts, setSelectedDesserts] = useState([]);

  const toggleSelection = (dessertName) => {
    setSelectedDesserts((prevSelected) =>
      prevSelected.includes(dessertName)
        ? prevSelected.filter((item) => item !== dessertName)
        : [...prevSelected, dessertName]
    );
  };

  // Inline CSS styles
  const styles = {
    container: {
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#fff5e6",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#ff6f61",
      marginBottom: "20px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: "15px",
      maxWidth: "800px",
    },
    dessertItem: (isSelected) => ({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "10px",
      backgroundColor: isSelected ? "#ffd1dc" : "white", // Highlight when selected
      borderRadius: "10px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      cursor: "pointer",
      transition: "0.3s",
    }),
    image: {
      width: "120px",
      height: "120px",
      objectFit: "cover",
      borderRadius: "10px",
    },
    button: {
      backgroundColor: "#ff6f61",
      color: "white",
      padding: "12px 25px",
      fontSize: "1.2rem",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold",
      marginTop: "20px",
      transition: "background 0.3s, transform 0.2s",
    },
    buttonHover: {
      backgroundColor: "#d94740",
      transform: "scale(1.1)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Which dessert we eatin'? 🍰</h1>

      <div style={styles.grid}>
        {desserts.map((dessert, index) => (
          <div
            key={index}
            style={styles.dessertItem(selectedDesserts.includes(dessert.name))}
            onClick={() => toggleSelection(dessert.name)}
          >
            <img src={dessert.src} alt={dessert.name} style={styles.image} />
            <p>{dessert.name}</p>
          </div>
        ))}
      </div>

      <button
        style={styles.button}
        onMouseOver={(e) => (e.target.style.background = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.background = styles.button.backgroundColor)}
        onClick={() => navigate("/final")}
        disabled={selectedDesserts.length === 0}
      >
        {selectedDesserts.length > 0 ? "On to the Finale 🎉" : "Pick a dessert first! 🍪"}
      </button>
    </div>
  );
};

export default DessertPage;
