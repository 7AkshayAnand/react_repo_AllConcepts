import "./App.css";

import { Called } from "./Component/Called";
import First from "./Component/First";
function App() {
  return (
    <Called.Provider value={"Akshay"}>
      <First></First>
    </Called.Provider>
  );
}

export default App;
