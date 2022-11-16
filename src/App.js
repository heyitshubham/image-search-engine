import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import ImgSearch from "./components/ImgSearch";
import Input from "./components/Input";
import ContextProvider from "./Context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <Input />
      <ImgSearch />
    </ContextProvider>
  );
}

export default App;
