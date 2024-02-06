import { useState } from "react";
import ChildFun from "./Components/ChildFun";
function App() {
  let [text, setText] = useState("initaltext");
  console.log(text);
  function funApp(event) {
    console.log("i am called back by child ", event.target.value);

    setText(event.target.value);
  }
  function handler2(val) {
    console.log("returned value is  ", val);
  }
  return (
    <>
      <p>{text}</p>
      <ChildFun
        key={1}
        value={"Akshay Anand"}
        handlerFun={funApp}
        handler2={handler2}
      ></ChildFun>
    </>
  );
}
export default App;
