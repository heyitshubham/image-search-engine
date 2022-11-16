import "../App.css";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { useContext, useState } from "react";
import { ImgUrlContext } from "../Context/ImgUrlContext";
import ImgSearch from "./ImgSearch";
import ContextProvider from "../Context/ContextProvider";
import Axios from "axios";

const Input = () => {
  const { imgName, setImgName } = useContext(ImgUrlContext);
  const { query, setQuery } = useContext(ImgUrlContext);
  // const apiKey = "563492ad6f91700001000001778398c14ce145b094840e7be5413d2b";
  const apiKey = process.env.REACT_APP_APIKEY;

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   setQuery(imgName);
  //   // console.log(query);
  // };

  const fetchPhotos = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.get(
        `https://api.pexels.com/v1/search?query=${imgName}&per_page=5`,
        {
          headers: {
            Authorization: apiKey,
          },
        }
      );
      const { photos } = data;
      const query = photos.map((photo) => ({
        pics: photo.src.medium,
      }));

      setQuery(query);
      console.log(query);
    } catch (err) {
      console.log(err);
    }
    setImgName("");
  };

  return (
    <div className="App">
      <form onSubmit={fetchPhotos}>
        <h1>Image Search Engine by Shubham</h1>
        <input
          className="form-control m-2"
          type="text"
          value={imgName}
          placeholder="Enter Image Name"
          onChange={(e) => {
            setImgName(e.target.value);
          }}
        ></input>
        <Button className="m-3" color="primary">
          Search
        </Button>
      </form>
    </div>
  );
};

export default Input;
