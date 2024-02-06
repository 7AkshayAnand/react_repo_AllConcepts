import styles from "./FoodInput.module.css";
const FoodInput = () => {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <input
      type="text"
      placeholder="enter food item here"
      className={styles.foodinput}
      onChange={handleOnChange}
    />
  );
};

export default FoodInput;
