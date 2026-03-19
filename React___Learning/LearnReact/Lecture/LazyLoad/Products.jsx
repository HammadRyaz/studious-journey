import { createPortal } from "react-dom";
import Page from "./Page";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  fetch("https://dummyjson.com/products?limit=3")
    .then((res) => res.json())
    .then(console.log);
  return (
    <div className="text-center">
      <Page title={"Product Page"} />
      <Link to="laptop">
        <u>Laptop</u>
      </Link>
      &nbsp; ---/-- &nbsp;
      <Link to="mobile">
        <u>Mobile</u>
      </Link>
      <div className="border-3 border-amber-300 pt-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Products;
