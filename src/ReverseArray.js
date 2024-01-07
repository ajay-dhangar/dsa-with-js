import React from "react";
import "./ReverseArray.css";

function sort(array) {
  snapshot(array);
}

export function SortComponent() {}

class ReverseArrayComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reverseArray: [],
      inputValue: "",
    };
  }

  pushValue = () => {
    const { inputValue, reverseArray } = this.state;
    if (inputValue.trim() !== "") {
      this.setState({
        reverseArray: [...reverseArray, inputValue],
        inputValue: "",
      });
    }
  };

  popValue = () => {
    const { reverseArray } = this.state;
    if (reverseArray.length > 0) {
      this.setState({
        reverseArray: reverseArray.slice(0, -1),
      });
    }
  };

  deleteValue = () => {
    const { inputValue, reverseArray } = this.state;
    const indexToDelete = parseInt(inputValue, 10);
    if (
      !isNaN(indexToDelete) &&
      indexToDelete >= 0 &&
      indexToDelete < reverseArray.length
    ) {
      this.setState({
        reverseArray: reverseArray.filter(
          (_, index) => index !== indexToDelete
        ),
        inputValue: "",
      });
    }
  };

  reverseArray = () => {
    const { reverseArray } = this.state;
    this.setState({
      reverseArray: reverseArray.reverse(),
    });
  }



  render() {
    const { reverseArray, inputValue } = this.state;

    return (
      <div className="container">
        <h1>ReverseArray Visualization</h1>
        <div className="form">
          <label htmlFor="inputValue">Enter a value:</label>
          <input
            type="text"
            id="inputValue"
            value={inputValue}
            onChange={(e) => this.setState({ inputValue: e.target.value })}
          />
          <button onClick={this.pushValue}>Push</button>
          <button onClick={this.popValue}>Pop</button>
          <button onClick={this.deleteValue}>Delete</button>
          <button onClick={this.reverseArray}>Reverse</button>
        </div>
        <div>
          <h2>Array Elements:</h2>
          <tr className="row">
            {reverseArray.map((value, index) => (
              <td key={index}>
                {value}
              </td>
            ))}
          </tr>
          <p>Length: {reverseArray.length}</p>
        </div>
      </div>
    );
  }
}

export default ReverseArrayComponent;
