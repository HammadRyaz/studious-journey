import ProductList from "../components/ProductList";
import Navbar from "./../components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./../components/Cart";
import { useReducer } from "react";

const App = () => {
  function reducer(state, action) {
    return {
      ...state,
      [action.name]: action.value,
    };
  }
  const [state, dispatch] = useReducer(reducer, { username: "", email: "" });
  function handleChange(e) {
    dispatch({
      name: e.target.name,
      value: e.target.value,
    });
  }
  return (
    <>
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter> */}
      <div>
        <input
          type="text"
          name="username"
          className="border-2 border-amber-300 m-2 p-1"
          placeholder="Name.."
          value={state.username}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          className="border-2 border-amber-300 m-2 p-1"
          placeholder="Emai..."
          value={state.email}
          onChange={handleChange}
        />
        <h1>
          {state.username}
          <br />
          {state.email}
        </h1>
      </div>
    </>
  );
};

export default App;
