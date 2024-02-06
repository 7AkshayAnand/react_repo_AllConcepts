function ChildFun(props) {
  return (
    <>
      <input
        type="text"
        placeholder="enter something"
        onChange={props.handlerFun}
      />
      <h1>child called with name {props.value}</h1>;
      <button onClick={() => props.handler2("Akshay")}>Click me for sending back the value to parent </button>
    </>
  );
}
export default ChildFun;
