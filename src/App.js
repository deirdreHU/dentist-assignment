import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import Procedures from "./components/Prodedures";
import Contact from "./components/Contact";

const App = () => {
  
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/procedures" element={<Procedures />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

function Home () {
  return (
    <>
    <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/procedures">Procedurs</Link>
        <Link to="/contact">Contact</Link>
    </nav>

    <main>
      <h2>Dentist Website </h2>
      <p>Welcome to my dentist website.</p>
    </main>
      
    </>
  );
}
export default App;
