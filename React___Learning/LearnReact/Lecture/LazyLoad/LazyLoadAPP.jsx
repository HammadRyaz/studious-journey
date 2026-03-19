import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./Home"));
const Navbar = lazy(() => import("./Navbar"));
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
const NotFound = lazy(() => import("./NotFound"));
const User = lazy(() => import("./User"));
const Products = lazy(() => import("./Products"));
import Laptop from "./Products/Laptop";
import Mobile from "./Products/Mobile";

const links = [
  { Page: <NotFound />, path: "*" },
  { Page: <Home />, path: "/" },
  { Page: <About />, path: "/about" },
  { Page: <Contact />, path: "/contact" },
  { Page: <User />, path: "/user/:id" },
];
const LazyLoadAPP = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <h2 className="item-center flex h-screen w-100 animate-pulse justify-end text-3xl text-blue-600">
              Loading...
            </h2>
          }
        >
          <Navbar />
          <Routes>
            {links.map((link) => (
              <Route path={link.path} element={link.Page} />
            ))}
            <Route path="/products" element={<Products />}>
              <Route path="laptop" element={<Laptop />} />
              <Route path="mobile" element={<Mobile />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default LazyLoadAPP;
