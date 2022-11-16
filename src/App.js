import { useState } from "react";
import Footer from "./Layout/Footer";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ImgUrlContext } from "./Context/ImgUrlContext";
import Input from "./components/Input";
import ContextProvider from "./Context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <Input />
    </ContextProvider>
  );
}

export default App;
