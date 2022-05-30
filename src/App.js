import "./styles.css";
import HigherOrderCompont from "./HigherOrderComponent";

function App(props) {
  return (
    <div className="App">
      <h1>{props.name}</h1>
    </div>
  );
}

export default HigherOrderCompont(App);
