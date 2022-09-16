import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
    <Navbar/>
    <div className="App max-w-7xl mx-auto">
     <Outlet/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
