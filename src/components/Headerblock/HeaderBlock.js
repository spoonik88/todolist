import React from "react";
import "./Headerblock.scss";

class Headerblock extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.NewIndexId = 3;
    this.state = {
      task: props.tasks,
      value: ''
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  addNewTask(e) {
    console.log(this.state.value);
    const newTask = {
      title: this.state.value,
      isDone: false,
      value: "",
      id: this.NewIndexId,
    };
    this.props.createNewTask(newTask);
    // this.setState({
    //   task:CreateNewTask
    // });
    // control state
    e.currentTarget.value = "";
    this.NewIndexId++;
    // e.preventDefault();
  }

  render() {
    return (
      <header className="header">
        <h1> {this.props.title} </h1>
        <input
          onChange={this.handleChange.bind(this)}
          className="new-todo"
          placeholder="Type your todo list"
          value={ this.state.value}
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
