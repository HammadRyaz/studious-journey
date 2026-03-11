import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <section
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "3em",
                    padding: "20px",
                }}
            >
                <button className="button">
                    <Link to="/">Home</Link>
                </button>
                <button className="button">
                    <Link to="/tracker">Tracker</Link>
                </button>
                <button className="button">
                    <Link to="/data">Data</Link>
                </button>
                <button className="button">
                    <Link to="/total">Total</Link>
                </button>
            </section>
        </>
    );
};

export default Navbar;
