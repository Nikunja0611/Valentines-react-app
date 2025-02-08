import React, { useEffect } from "react";

const FinalPage = () => {
  useEffect(() => {
    createHearts();
  }, []);

  const createHearts = () => {
    setInterval(() => {
      const heart = document.createElement("div");
      heart.className = "falling-heart";
      heart.innerHTML = "❤️";
      document.body.appendChild(heart);

      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = Math.random() * 3 + 2 + "s";

      setTimeout(() => {
        heart.remove();
      }, 5000);
    }, 500);
  };

  // Inline styles
  const styles = {
    container: {
      textAlign: "center",
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: "#ffdde1",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
    },
    text: {
      fontSize: "3.5rem",
      fontWeight: "bold",
      color: "#d90429",
      textShadow: "3px 3px 5px rgba(0, 0, 0, 0.2)",
      animation: "pulse 1.5s infinite",
    },
    loveText: {
      fontSize: "1.8rem",
      color: "#590d22",
      fontWeight: "bold",
      marginTop: "10px",
    },
    bearImage: {
      width: "350px", // Increased image size
      height: "auto",
      marginTop: "20px",
      animation: "wink 1.5s infinite",
      borderRadius: "20px",
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
    },
    bgEffect: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "radial-gradient(circle, #ff758c, #ff7eb3)",
      opacity: 0.4,
      zIndex: -1,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.bgEffect}></div>
      <h1 style={styles.text}>POT TR MLA KHAUNACH BHRNAR A!!</h1>
      <p style={styles.loveText}>
        Thank you for being my love 💖 I don't want to lose you ever! 💞
      </p>
      <img src="/Us.jpg" alt="Winking Bear" style={styles.bearImage} />
    </div>
  );
};

export default FinalPage;
