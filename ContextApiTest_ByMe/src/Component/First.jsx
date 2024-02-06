 import { Called } from "./Called";
import { useContext } from "react";
const First = () => {
  let data = useContext(Called);
  return <h1> i am working {data}</h1>;
};
export default First;
