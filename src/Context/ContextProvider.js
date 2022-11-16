import { useContext, useState } from "react";
import { ImgUrlContext } from "./ImgUrlContext";
const ContextProvider = ({ children }) => {
  const [imgName, setImgName] = useState("");

  return (
    <ImgUrlContext.Provider value="jajaj">{children}</ImgUrlContext.Provider>
  );
};

export default ContextProvider;

export const useGlobalContext = () => {
  return useContext(ContextProvider);
};
