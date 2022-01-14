import { Routes, Route } from "react-router-dom"

import Home from "./pages/home/Home"
import Dashboard from "./pages/dashboard/Dashboard";

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/dashboard" element={<Dashboard />} ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
