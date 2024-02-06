import styles from "./FoodInput.module.css";
const FoodInput = (props) => {
  // const handleOnChange = (event) => {
  //   console.log(event.target.value);
  // };
  return (
    <input
      type="text"
      placeholder="enter food item here"
      className={styles.foodinput}
      onKeyDown={props.handleOnChange}
    />
  );
};

export default FoodInput;
