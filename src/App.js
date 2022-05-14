import { Routes, Route } from "react-router-dom";

import "./App.css";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Header from "./components/Header";
import Products from "./components/Products";
import About from "./components/About";
import FAQs from "./components/FAQs";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
