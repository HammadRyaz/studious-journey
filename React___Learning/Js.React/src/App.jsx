import React from 'react'
import HookFetch_App from "../Folders/03/HookFetch_App.jsx";
import HookWindow_App from "../Folders/03/HookWindow_App.jsx";

const App = () => {
  const styles = {
    color : "white",
    background : "black",
    padding : "2rem",
    width : "100%",
  }
    return (
        <>
        <h1 about={"App Js File"} style={styles}>App js </h1>
          <HookFetch_App/>
          <HookWindow_App/>
        </>
    )
}

export default App