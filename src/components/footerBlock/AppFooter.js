import React from "react";
// import ReactDOM from "react-dom";
// import './index.css';
import "./AppFooter.scss";

class   AppFooter extends React.Component{
  constructor(props){
    super(props);
    
  }

  render(){
    console.log(this.props)
    return(
      <footer className="footer">
      <span className="todo-count">
        <strong>{this.props.tasksCount}</strong> All task
      </span>

     <span className="todo-count">
        <strong>{this.props.comletedCount }</strong> task left
      </span>
      <ul className="filters">
        {this.props.filters.map(f => (<li>
          <button className={this.props.selectedFilter === f.value ? "selected" : ""} onClick={() => this.props.changeFilter(f.value)}>
            {f.title}
          </button>
        </li>))}
      </ul>
    </footer>
  )
  }
 
}


export default AppFooter ;