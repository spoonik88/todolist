import React from "react";
// import ReactDOM from "react-dom";
// import './index.css';
import "./AppFooter.scss";

class   AppFooter extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      task: props.tasks
    }
  }
  render(){
    return(
      <footer className="footer">
      <span className="todo-count">
        <strong>1</strong> task left
      </span>{" "}
      <ul className="filters">
        <li>
          <a href="#/all" className="selected">
            All
          </a>
        </li>{" "}
        <li>
          <a href="#/active" className="">
            Uncomplete
          </a>
        </li>{" "}
        <li>
          <a href="#/completed" className="">
            Completed
          </a>
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