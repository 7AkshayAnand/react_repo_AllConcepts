import "./App.css";
import PrintItem from "./Components/PrintItem";
import PrintObj from "./Components/PrintObj";
import Container from "./Components/Container";
function App() {
  let obj = [
    { name: "Akshay", age: "24" },
    { name: "Amit", age: "22" },
    { name: "Abhay", age: "21" },
    { name: "Anand", age: "23" },
  ];
  return (
    <center class="todo-container">
      <h1>Hi i am wroking</h1>
      <PrintItem key={"Name"} value1={"Akshay"} value2={"Anand"}></PrintItem>
      <PrintObj value={obj}></PrintObj>
      <Container>
        <p>
          Hlo this is me and now I am thinking to take my skills to the next
          level
        </p>
      </Container>
    </center>
  );
}

export default App;
