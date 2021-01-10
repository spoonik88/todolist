import React from "react";
// import ReactDOM from "react-dom";
import "./App.scss";
import Task from "./components/addList/AppMain";
import HeaderBlock from "./components/Headerblock/HeaderBlock.js";
import AppFooter from "./components/footerBlock/AppFooter";
import AppBall from "./components/LogoSvg/LogoSvg.js";
import AppDate from "./components/AddDate/AppDate";
import {defaultTodosState} from "./components/Reducers/Reducers";
import { connect } from "react-redux";
import { createTaskThunk,updateTaskThunk, deleteTaskThunk,clearTask,changeFilterTask, getTasksThunk} from "./components/Action/Action";



class App extends React.Component {
  constructor() {
    super();
    this.state = defaultTodosState;
  }

  componentDidMount() {
  this.props.getTasks()

}

  changeFilter = (selectedFilter) => {

 this.props.changeFilterTask({
  selectedFilter:selectedFilter
 })
  
  };
  onHideFiltersClick = (filters) => {
  
    this.setState({
      filters: [],
    });
  };
  updateTask = (task) => {
    console.log(task)
  
    this.props.updateTask({
      task:task     
    })
    
  };

  createNewTask(title, status,value,newTitle) {      
    this.props.addNewTask({
      title: newTitle,
      status: status,
      isDone:false,
      value:value    
    })
  }
  
  deleteTask(id) {
    console.log(id)
    
    this.props.deleteTask({
      taskId:id
    })
    return id
  }
  clearTaskComplited(e,isDone) {
    
    this.props.clearTask({
      isDone:isDone
    })
   
  }

  render() {
    
    const { selectedFilter, tasks, filters } = this.props;
   
    return (
      <div className="todoapp">
        <AppDate />

        <AppBall />
        <HeaderBlock
          createNewTask={this.createNewTask.bind(this)}
          title={"New ToDo list"}
        />

        <div className="main">
          <div className="completed-wrapper">
            <label htmlFor="toggle-all"> Complete all tasks </label>

            {tasks
              .filter((t) =>
                selectedFilter !== "completed" &&
                selectedFilter !== "uncompleted"
                  ? t
                  : selectedFilter === "completed"
                  ? t.isDone
                  : !t.isDone
              )
              .map((task, index) => {
                return (
                  <Task
                    task={task}
                    deleteCallback={this.deleteTask.bind(this)}
                    key={task.id}
                    updateTask={this.updateTask}
                  />
                );
              })}
          </div>
        </div>
     
        <AppFooter
          tasksCount={tasks.length}
          key={tasks.id}
          comletedCount={tasks.filter((t) => t.isDone).length}
          filters={filters}
          changeFilter={this.changeFilter.bind(this)}
          onHideFiltersClick={this.onHideFiltersClick.bind(this)}
          onClearTaskComplited={this.clearTaskComplited.bind(this)}
          selectedFilter={selectedFilter}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = (dispatch) => {
  
  return {
      addNewTask: (newTask) => dispatch(createTaskThunk(newTask)),
      deleteTask: (id) => dispatch(deleteTaskThunk(id)),
      updateTask:(task) => dispatch(updateTaskThunk(task)),
      changeFilterTask:(selectedFilter) => dispatch(changeFilterTask(selectedFilter)),
      clearTask:(isDone) => dispatch(clearTask(isDone)),
      getTasks:() => dispatch(getTasksThunk())
      
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
