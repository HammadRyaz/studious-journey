import React from "react";
import Page from "./Page";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  console.log(id);

  return id ? (
    <Page title={"Welcome User : " + id} />
  ) : (
    <Page title={"Welcome User Page "} />
  );
};

export default User;
