const Demo = (props) => {
  console.log("Demo component evaluated");

  return <p>{props.show ? "This is new!" : ""}</p>;
};

export default Demo;
