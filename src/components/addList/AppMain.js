import React from "react";
import "./AppMain.scss";

class MainForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: props.tasks,
    };

    this.deleteParentCallbackTasks = props.deleteCallback;
    this.NewParentTask = props.onNewTask;
  }

  deleteTasks(e) {
    console.log(this.NewParentTask);
    this.deleteParentCallbackTasks(this.state.task.id);
  }

  toggleTaskStatus(e) {
    const NewTask = {
      ...this.state.task,
      isDone: !this.state.task.isDone,
    };

    this.setState({
      task: NewTask,
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
        />
        {this.state.task.title}
        <button className="delete" onClick={this.deleteTasks.bind(this)}>
          x
        </button>
      </div>
    );
  }
}

export default MainForm;
