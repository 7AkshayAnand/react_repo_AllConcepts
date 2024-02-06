import FoodItems from "./Components/foodItems";
import ErrorMsg from "./Components/ErrorMsg";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";
function App() {
  let [foodItems, setFoodItems] = useState([
    "Butter",
    "Green vegetables",
    "Roti",
    "Salad",
    "Milk",
  ]);
  const handleOnChange = (event) => {
    if (event.key === "Enter") {
      console.log("value is ", event.target.value);
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };
  return (
    <>
      <Container>
        <h1 className="foodHeading">Healthy Food</h1>

        <FoodInput handleOnChange={handleOnChange}></FoodInput>

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
