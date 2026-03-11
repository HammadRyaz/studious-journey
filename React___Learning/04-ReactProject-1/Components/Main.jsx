import React from "react";
import Tracker from './Tracker';
import Total from './Total';
import Data from './Data';

const Main = () => {
    return (
        <>
            <section id="center">
                <Tracker />
                <Total />
            </section>
            <Data />
        </>
    );
};

export default Main;
