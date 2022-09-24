import React from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './components/Navbar';
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
    </div>
  );
}
export default App;
