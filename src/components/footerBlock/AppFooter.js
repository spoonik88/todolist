import React from "react";
// import ReactDOM from "react-dom";
// import './index.css';
import "./AppFooter.scss";

class   AppFooter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedFilter:this.props.selectedFilter
    };
  }
  handlerFilterChaged(e){
    this.props.changeFilter(e.currentTarget.dataset.value);
    
    this.setState({
      selectedFilter:e.currentTarget.dataset.value
    })
   
  }
 
  render(){
    
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
          {/* <button data-value={f.value} className={this.props.selectedFilter === f.value ? "selected" : ""} onClick={() => this.props.changeFilter(f.value)}>
            {f.title}
          </button> */}
          <button data-value={f.value} className={ f.value === this.state.selectedFilter ? "selected" : "" } onClick={ this.handlerFilterChaged.bind(this)}>
            {f.title}
          </button>
        </li>))}
      </ul>
    </footer>
  )
  }
 
}


export default AppFooter ;