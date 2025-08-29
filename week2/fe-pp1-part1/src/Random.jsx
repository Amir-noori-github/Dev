
const Random = (props) => {
  const randomValue =
    Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;

  return (
    <div style={{ border: "2px solid black", padding: "10px", margin: "10px 0" }}>
      Random value between {props.min} and {props.max} = {randomValue}
    </div>
  );
};

export default Random;