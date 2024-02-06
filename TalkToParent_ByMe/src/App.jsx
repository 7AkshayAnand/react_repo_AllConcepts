import FoodItems from "./Components/foodItems";
import ErrorMsg from "./Components/ErrorMsg";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";
function App() {
  let foodItems = ["Butter", "Green vegetables", "Roti", "Salad", "Milk"];

  let [textToShow, setTextState] = useState("This is just initial text");

  const handleOnChange = (event) => {
    setTextState(event.target.value);
    console.log(`current value of textstate after is  : ${textToShow}`);
  };
  return (
    <>
      <Container>
        <h1 className="foodHeading">Healthy Food</h1>

        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <p>{textToShow}</p>
        <ErrorMsg items={foodItems}></ErrorMsg>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      <Container>
        <p>Above is the list of healthy food for your health and well being</p>
      </Container>
    </>
  );
}
export default App;
