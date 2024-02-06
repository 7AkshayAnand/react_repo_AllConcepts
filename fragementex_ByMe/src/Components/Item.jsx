import styles from "./Item.module.css";
const Item = (props) => {
  const handleBuyButtonCLicked = (event, foodItem) => {
    console.log("event is ", event);

    
    console.log(`${foodItem} being bought`);
  };
  let { foodItem } = props;
  return (
    <li className={`${styles["kg-item"]}  list-group-item`}>
      <span className="kg-span">{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={(event) => handleBuyButtonCLicked(event, foodItem)}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
