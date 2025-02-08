import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const foodItems = [
  { name: "Pav Bhaji", src: "/Pav Bhaji.jpg" },
  { name: "Biryani", src: "/Biryani.jpg" },
  { name: "Fish Curry", src: "/Fish Curry.jpg" },
  { name: "Shahi Paneer", src: "/Shahi Paneer.jpg" },
  { name: "Masala Dosa", src: "/Masala Dosa.jpg" },
  { name: "Dal Tadka", src: "/Dal tadka.jpg" },
  { name: "Butter Chicken", src: "/Butter Chicken.jpg" },
  { name: "Paratha", src: "/Paratha.jpg" },
  { name: "Idli", src: "/Idli.jpg" },
  { name: "Vada Pav", src: "/Vada Pav.jpg" },
  { name: "Chaat", src: "/Chaat.jpg" },
  { name: "Pakora", src: "/Pakora.jpg" },
];

const FoodPage = () => {
  const navigate = useNavigate();
  const [selectedFoods, setSelectedFoods] = useState([]);

  const toggleSelection = (foodName) => {
    setSelectedFoods((prevSelected) =>
      prevSelected.includes(foodName)
        ? prevSelected.filter((item) => item !== foodName)
        : [...prevSelected, foodName]
    );
  };

  // Inline CSS styles
  const styles = {
    container: {
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#fff0f5",
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
      color: "#d63384",
      marginBottom: "20px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: "15px",
      maxWidth: "800px",
    },
    foodItem: (isSelected) => ({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "10px",
      backgroundColor: isSelected ? "#ffb3c6" : "white", // Highlight when selected
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
      backgroundColor: "#d63384",
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
      backgroundColor: "#b0236c",
      transform: "scale(1.1)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>What food would you like to eat? 🍽️</h1>

      <div style={styles.grid}>
        {foodItems.map((food, index) => (
          <div
            key={index}
            style={styles.foodItem(selectedFoods.includes(food.name))}
            onClick={() => toggleSelection(food.name)}
          >
            <img src={food.src} alt={food.name} style={styles.image} />
            <p>{food.name}</p>
          </div>
        ))}
      </div>

      <button
        style={styles.button}
        onMouseOver={(e) => (e.target.style.background = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.background = styles.button.backgroundColor)}
        onClick={() => navigate("/dessert")}
        disabled={selectedFoods.length === 0}
      >
        {selectedFoods.length > 0 ? "Let's Move to Desserts 🍰" : "Select something first! 🍛"}
      </button>
    </div>
  );
};

export default FoodPage;
