import React, { Component } from "react";
import "./App.css";

import Validation from "./Components/Validation/Validation";
import Char from "./Components/Char/Char";

class App extends Component {
  state = {
    userInput: ""
  };

  inputChangeHandler = e => {
    this.setState({ userInput: e.target.value });
  };

  handleDelete = characterIndex => {
    const text = this.state.userInput.split("");

    text.splice(characterIndex, 1);

    const updatedText = text.join("");

    this.setState({ userInput: updatedText });
  };

  render() {
    //characterList
    const CharacterList = this.state.userInput
      .split("")
      .map((character, index) => (
        <Char
          key={index}
          clicked={() => this.handleDelete(index)}
          character={character}
        />
      ));
    //end characterList
    return (
      <div className="App">
        <ol>
          <li>
            Create an input field (in App component) with a change listener
            which outputs the length of the entered text below it (e.g. in a
            paragraph).
          </li>
          <li>
            Create a new component (=> ValidationComponent) which receives the
            text length as a prop
          </li>
          <li>
            Inside the ValidationComponent, either output "Text too short" or
            "Text long enough" depending on the text length (e.g. take 5 as a
            minimum length)
          </li>
          <li>
            Create another component (=> CharComponent) and style it as an
            inline box (=> display: inline-block, padding: 16px, text-align:
            center, margin: 16px, border: 1px solid black).
          </li>
          <li>
            Render a list of CharComponents where each CharComponent receives a
            different letter of the entered text (in the initial input field) as
            a prop.
          </li>
          <li>
            When you click a CharComponent, it should be removed from the
            entered text.
          </li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <hr />
        <hr />
        <hr />

        <input
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <p>{this.state.userInput.length}</p>

        <Validation length={this.state.userInput.length} />

        <hr />
        <hr />
        <hr />

        {CharacterList}
      </div>
    );
  }
}

export default App;
