import React from "react";  // ✅ Add this line
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ThankYouPage from "./pages/ThankYouPage";
import DatePage from "./pages/DatePage";
import FoodPage from "./pages/FoodPage";
import DessertPage from "./pages/DessertPage";
import FinalPage from "./pages/FinalPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/date" element={<DatePage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/dessert" element={<DessertPage />} />
        <Route path="/final" element={<FinalPage />} />
      </Routes>
    </Router>
  );
}

export default App;