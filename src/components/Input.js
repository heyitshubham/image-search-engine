import "../App.css";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { useGlobalContext } from "../Context/ContextProvider";

const Input = () => {
  const context = useGlobalContext();
  console.log(context);

  return (
    <div className="App">
      <form>
        <h1>Input Image Name:</h1>
        <input
          type="text"
          placeholder="Enter Image Name"
          // onChange={(e) => {
          //   setImgName(e.target.value);
          // }}
        ></input>
        <Button
          // onSubmit={(e) => {
          //   e.preventDefault();
          // }}
          className="m-3"
          color="primary"
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default Input;
