import FoodItems from "./Components/foodItems";
import ErrorMsg from "./Components/ErrorMsg";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
function App() {
  let foodItems = ["Butter", "Green vegetables", "Roti", "Salad", "Milk"];

  return (
    <>
      <Container>
        <h1 className="foodHeading">Healthy Food</h1>
        {/* example of ternary  */}
        {/* {foodItems.length == 0 ? <h1>I am hungry</h1> : null} */}
        {/* {food.length == 0 && <h1>then to i need food re</h1>} */}
        <FoodInput></FoodInput>
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
