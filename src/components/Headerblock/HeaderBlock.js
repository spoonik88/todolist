import React from "react";
import "./Headerblock.scss";

class Headerblock extends React.Component {
  constructor(props) {
    super(props);
    
  
    this.state = {
      task: props.tasks,
      value: '',
      priority:'no priority selected'
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleChangePriority(e) {
    this.setState({ priority: e.target.value });
   
  }

  addNewTask(value,priority) {
      
    this.props.createNewTask(this.state.value,this.state.priority);
    
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
        <div className = "wrap_input-priority">
          <select name="" id="" priority={this.state.priority} onChange={this.handleChangePriority.bind(this)}>
            
            <option value="Low" >Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
       
        </div>
        
        <button
          onClick={this.addNewTask.bind(this)}
          className="new-todo-button"
        ></button>{" "}
      </header>
    );
  }
}

export default Headerblock;
