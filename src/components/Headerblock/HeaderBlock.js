import React from "react";
// import { createTask } from "../Servises/Servises";
import "./Headerblock.scss";
////  connect axios

class Headerblock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task: props.tasks,
      value: "",
      priority: "no priority selected",
      error: false,
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value, error: false });
  }
  handleChangePriority(e) {
    this.setState({ priority: e.target.value });
  }

  handleKeyDown(e) {
    if (!e.key || e.key === "Enter") {
      if (this.state.value) {
        this.props.createNewTask(this.state.value, this.state.priority);
        this.setState({ value: "", error: false });
      } else {
        this.setState({ error: true });
      }
    } else if (e.key) {
      this.setState({ error: false });
    }
  }

  render() {
    return (
      <header className="header">
        <h1> {this.props.title} </h1>{" "}
        <input
          onChange={this.handleChange.bind(this)}
          className={this.state.error === false ? "new-todo" : "new-todo error"}
          placeholder="Type your todo list"
          value={this.state.value}
          onKeyPress={this.handleKeyDown.bind(this)}
        />{" "}
        <div className="wrap_input-priority">
          <select
            name=""
            id=""
            priority={this.state.priority}
            onChange={this.handleChangePriority.bind(this)}
          >
            <option value="Low"> Low </option>{" "}
            <option value="Medium"> Medium </option>{" "}
            <option value="High"> High </option>{" "}
          </select>{" "}
        </div>{" "}
        <button
          onClick={this.handleKeyDown.bind(this)}
          className="new-todo-button"
        ></button>{" "}
      </header>
    );
  }
}

export default Headerblock;
