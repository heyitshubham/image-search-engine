import axios from "axios";

import { useContext } from "react";
import { ImgUrlContext } from "../Context/ImgUrlContext";
import { ListGroup, ListGroupItem, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/css/bootstrap.min.css";
const ImgSearch = () => {
  const { query, setQuery } = useContext(ImgUrlContext);
  console.log(query);
  if (!query) return;
  return (
    <>
      <h1>Pictures:</h1>
      {query.map((photo, i) => {
        return <img className="p-2" height={180} src={photo.pics}></img>;
      })}
    </>
  );
};
export default ImgSearch;
