import React from "react";
import "./Headerblock.scss";

class Headerblock extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  
    this.state = {
      task: props.tasks,
      value: ''
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  addNewTask(value) {
    // console.log(this.state.value);
    
    this.props.createNewTask(this.state.value);
    
    this.setState({value: ''})
    
  }

  render() {
    return (
      <header className="header">
        <h1> {this.props.title} </h1>
        <input
          onChange={this.handleChange.bind(this)}
          className="new-todo"
          placeholder="Type your todo list"
          value={this.state.value}
        />
        <button
          onClick={this.addNewTask.bind(this)}
          className="new-todo-button"
        ></button>{" "}
      </header>
    );
  }
}

export default Headerblock;
