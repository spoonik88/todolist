import React from "react";
// import ReactDOM from "react-dom";
// import './index.css';
import "./AppFooter.scss";

class   AppFooter extends React.Component{

  constructor(props){
    super(props);
    // this.state = {
    //   task: props.tasks
    // }
    // console.log(this.props.tasks.length)
    
  }
  filterChanged(e){

  }


  render(){
    return(
      <footer className="footer">
      <span className="todo-count">
        <strong>{this.props.tasks.length}</strong> All task
      </span>{" "}
      {/* <span className="todo-count">
        <strong>{this.props.tasks.filter((t) =>!t.isDone).length }</strong> task left
      </span>{" "} */}
      <ul className="filters">
        <li>
          <button className="selected" onClick={this.filterChanged.bind(this)}>
            All
          </button>
        </li>{" "}
        <li>
          <button  className="">
            Uncomplete
          </button>
        </li>{" "}
        <li>
          <button  className="">
            Completed
          </button>
        </li>
      </ul>
    </footer>
  )
  }
 
}
// const AppFooter = () =>{
//     return(
//         <footer className="footer">
//         <span className="todo-count">
//           <strong>1</strong> task left
//         </span>{" "}
//         <ul className="filters">
//           <li>
//             <a href="#/all" className="selected">
//               All
//             </a>
//           </li>{" "}
//           <li>
//             <a href="#/active" className="">
//               Uncomplete
//             </a>
//           </li>{" "}
//           <li>
//             <a href="#/completed" className="">
//               Completed
//             </a>
//           </li>
//         </ul>
//       </footer>
//     )
// }

export default AppFooter ;