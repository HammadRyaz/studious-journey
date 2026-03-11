import React from "react";
import DisplayCounter from "./components/DisplayCounter";
import Button from "./components/Button";
import Container from "./components/Container";
import Heading from "./components/Heading";
import Input from "./components/Input";

const App = () => {
  console.log("render app.jsx");

  return (
    <Container>
      <Heading />
      <DisplayCounter />
      <Button />
      <Input />
    </Container>
  );
};

export default App;
