import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import db from "./firebase.js";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Cart from "./components/Cart";
// import Popup from "./components/Popup";
import { onSnapshot, collection } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // const [timedPopup, setTimedPopup] = useState(false);
  // const [email, setEmail] = useState("");
  // const [name, setName] = useState("");
  // const [errors, setErrors] = useState(null);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTimedPopup(true);
  //   }, 15000);
  // }, []);

  const cartFromLocalStorage = JSON.parse(
    localStorage.getItem("cartItems") || "[]"
  );

  function isLocalStorage() {
    if (localStorage.getItem("cartItems")) {
    } else {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([...cartFromLocalStorage]);

  const onAdd = (product) => {
    isLocalStorage();
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...exist, quantity: (exist.quantity += 1) }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.quantity <= 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id)) &&
        localStorage.removeItem("cartItems", product);
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    // const exist = cartItems.find((x) => x.id === product.id);
    // if (exist.quantity === 1) {
    //   setCartItems(cartItems.filter((x) => x.id !== product.id));
    // } else {
    //   setCartItems(
    //     cartFromLocalStorage.map((x) =>
    //       x.id === product.id
    //         ? { ...exist, quantity: (exist.quantity -= 1) }
    //         : x
    //     )
    //   );
    // }
    // console.log(localStorage);
    // localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  useEffect(
    () =>
      onSnapshot(collection(db, "products"), (snapshot) =>
        setProducts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/products"
          element={
            <Products products={products} onAdd={onAdd} cartItems={cartItems} />
          }
        />
        <Route path="about" element={<About />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          }
        />
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
