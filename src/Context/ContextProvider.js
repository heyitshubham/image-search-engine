import Axios from "axios";
import { useEffect, useState } from "react";
import { ImgUrlContext } from "./ImgUrlContext";

const ContextProvider = ({ children }) => {
  const [imgName, setImgName] = useState("");
  const [query, setQuery] = useState(null);
  const [images, setImages] = useState("");

  return (
    <ImgUrlContext.Provider value={{ imgName, setImgName, query, setQuery }}>
      {children}
    </ImgUrlContext.Provider>
  );
};

export default ContextProvider;
