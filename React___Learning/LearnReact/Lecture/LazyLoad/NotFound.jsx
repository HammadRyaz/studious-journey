import React from "react";
import Page from "./Page";
import { useNavigate, useParams } from "react-router-dom";

const NotFound = () => {
  const { id } = useParams;
  console.log(id);
  const navigate = useNavigate();
  return (
    <>
      <div className="text-center">
        <Page title={"404 : Page Not Found "} />
        <button
          onClick={() => navigate("/")}
          className="text-yellow-400 underline underline-offset-8"
        >
          Go Back To Home
        </button>
      </div>
    </>
  );
};

export default NotFound;
