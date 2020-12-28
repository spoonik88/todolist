import React from "react";
import "./AppMain.scss";

class Task extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      task: props.task,
    };

    this.deleteParentCallbackTasks = props.deleteCallback;
    this.NewParentTask = props.onNewTask;
  }

  deleteTasks(e) {
    console.log(this.NewParentTask);
    this.deleteParentCallbackTasks(this.state.task.id);
  }

  toggleTaskStatus(e) {
    const newTask = {
      ...this.state.task,
      isDone: !this.state.task.isDone,
    };
    this.props.updateTask(newTask)
    this.setState({
      task: newTask,
    });
  }

  render() {
    return (
      <div className={this.state.task.isDone ? "done tasks" : "tasks"}>
        <input
          id="toggle-all"
          name="toggle-all"
          type="checkbox"
          onChange={this.toggleTaskStatus.bind(this)}
          checked={this.state.task.isDone}
        />{" "}
        {this.state.task.title} {" - "}
        {this.state.task.priority}

        <button className="delete" onClick={this.deleteTasks.bind(this)}>
          x{" "}
        </button>{" "}
      </div>
    );
  }
}

export default Task;
