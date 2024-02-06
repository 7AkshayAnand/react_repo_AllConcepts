function PrintItem(props) {
  return (
    <>
      <h2>I am recieving the name </h2>
     
      <h3>
        My name is {props.value1} {props.value2}
      </h3>
      ;
    </>
  );
}

export default PrintItem;
