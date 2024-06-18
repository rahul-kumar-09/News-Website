import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <NewsBoard></NewsBoard>
    </>
  );
}

export default App;
