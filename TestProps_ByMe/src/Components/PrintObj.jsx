function PrintObj(props) {
  return (
    <>
      <h1>i am here {props.value[0].name}</h1>
      {props.value.map((obj) => (
        <h4>
          Name is {obj.name} and age is {obj.age}
        </h4>
      ))}
    </>
  );
}

export default PrintObj;
