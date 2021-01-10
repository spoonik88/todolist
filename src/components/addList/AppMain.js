import React from "react";
import "./AppMain.scss";

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task: props.task,
      newTitle:props.task.title,
      newSelect:props.task.status,
      editMode: false,
      editModePryority: false,
    };
 
    this.deleteParentCallbackTasks = props.deleteCallback;
    this.NewParentTask = props.onNewTask;
  }

  
  
  deleteTasks(e) {
    this.deleteParentCallbackTasks(this.state.task.id);
  }
  editElementName(){
    this.setState({editMode:true})
  }
  editElementSelectPryority(){
    this.setState({editModePryority:true})
  }
  changeTitle(e){  

    this.setState({
     newTitle:e.target.value 
    })
  }
  changeSelect(e){  

    this.setState({
      newSelect:e.target.value 
    })
  }

  saveElementName(e){    
    const newTitleUpdate = e.target.value
    if(e.key === "Enter"){
      console.log(newTitleUpdate)
      const newTask = {
        ...this.state.task,        
        title:this.state.newTitle
      };
      this.props.updateTask(newTask)
    this.setState({editMode:false,newTitle:newTitleUpdate})
    }    
  }
  saveElementSelectPryority(e){
    const newSelectUpdate = e.target.value
    console.log(newSelectUpdate)
    
    const newTask = {
      ...this.state.task,        
      status:this.state.newSelect
    };
    
    console.log(this.state.newSelect)
    this.props.updateTask(newTask)
  this.setState({editModePryority:false,newSelect:newSelectUpdate})    
  }

  toggleTaskStatus(e) {    
    const newTask = {
      ...this.state.task,
      isDone: !this.state.task.isDone
    };
    this.props.updateTask(newTask);  
    this.setState({
      task: newTask,
    });
  }

  render() {
    const { editMode, editModePryority,newTitle,newSelect } = this.state;
    let editElement = "";
    let editElementSelect = "";
    if (editMode) {
      editElement = <input type="text" 
          value={newTitle} 
          onKeyPress={this.saveElementName.bind(this)}
          onChange={this.changeTitle.bind(this)}
          />;
    } else {
      editElement = (
        <div className="inputTitleTask" onDoubleClick ={this.editElementName.bind(this)}  >{this.state.task.title}</div>
      );
    }

    if (editModePryority) {
      editElementSelect = (
        <select
          name=""
          id=""
          status={newSelect}
          onBlur={this.saveElementSelectPryority.bind(this)}
          onChange={this.changeSelect.bind(this)}
        >
          <option value="Low"> Low </option>
          <option value="Medium"> Medium </option>
          <option value="High"> High </option>
        </select>
      );
    } else {
      editElementSelect = (
        <div className="inputStatusTask"  onDoubleClick ={this.editElementSelectPryority.bind(this)}> {this.state.task.status}</div>
      );
    }

    return (
      <div className={this.state.task.isDone ? "done tasks" : "tasks"}>
        <input
          id="toggle-all"
          name="toggle-all"
          type="checkbox"
          onChange={this.toggleTaskStatus.bind(this)}
          checked={this.state.task.isDone}
        />{" "}
        {editElement}
        {" - "}
        {editElementSelect}
        <button className="delete" onClick={this.deleteTasks.bind(this)}>
          x{" "}
        </button>{" "}
      </div>
    );
  }
}

export default Task;
