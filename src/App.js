import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import db from "./firebase.js";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import FAQs from "./components/FAQs";
import Cart from "./components/Cart";
import Popup from "./components/Popup";

function App() {
  const [timedPopup, setTimedPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 15000);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const elementsArray = [...event.target.elements];

    const data = elementsArray.reduce((acc, currentValue) => {
      if (currentValue.id) {
        acc[currentValue.id] = currentValue.value;
      }
      return acc;
    }, {});
    db.collection("PopupResponses").add({ name: "" });
  };

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
      {/* <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <h2>Welcome To Gabby's Salsa!</h2>
        <br />
        <p>
          Signup here to receive Gabby's newsletter with all the deets! Upcoming
          events, updates to the menu, and specials!
        </p>
        <br />
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <br />
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <br />
        <br />
        <button type="text" className="popupButton" onClick={handleSubmit}>
          Submit
        </button>
      </Popup> */}
    </div>
  );
}

export default App;
