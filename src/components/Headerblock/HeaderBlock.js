import React from "react";
import "./Headerblock.scss";

class Headerblock extends React.Component {
  constructor(props) {
    super(props);
    
  
    this.state = {
      task: props.tasks,
      value: '',
      priority:'no priority selected',
      error: false
    };
  }

  handleChange(e) {
     this.setState({ value: e.target.value,error:false });  
    
  }
  handleChangePriority(e) {
    
    this.setState({ priority: e.target.value });
   
  }
 
  
  addNewTask(value,priority,error,e) {
 
    if(e.key === "Enter") { 
      if(this.state.value !== ''){
          
        this.props.createNewTask(this.state.value,this.state.priority); 
        this.setState({value: '',error:false})    
        
    } else(this.setState({value: '',error:true}))  
  }

    
  }
  handleKeyDown(e) {
   

}

  render() {
    
    return (
      <header className="header">
        <h1> {this.props.title} </h1>
        <input
          onChange={this.handleChange.bind(this)}
          className= { this.state.error === false ? "new-todo" : "new-todo error" }
          placeholder="Type your todo list"
          value={this.state.value}
          onKeyPress={this.addNewTask.bind(this)}

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
