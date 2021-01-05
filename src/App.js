import React from "react";
// import ReactDOM from "react-dom";
import "./App.scss";
import Task from "./components/addList/AppMain";
import HeaderBlock from "./components/Headerblock/HeaderBlock.js";
import AppFooter from "./components/footerBlock/AppFooter";
import AppBall from "./components/LogoSvg/LogoSvg.js";
import AppDate from "./components/AddDate/AppDate";
import {defaultTodosState,getTasks} from "./components/Reducers/Reducers";
import { connect } from "react-redux";
import { creatTaskActionCreater, deleteTask,clearTask,updateTask,changeFilterTask} from "./components/Action/Action";

// console.log(store);

class App extends React.Component {
  constructor() {
    super();
    this.state = defaultTodosState;
  }

  componentDidMount() {
    console.log( this.props.getTasks())
   
    // this.props.getTasks();
}
  ////TODO и создаёшь метод для выбора фильтра
  changeFilter = (selectedFilter) => {
    // const selectedFilterTask = selectedFilter;
//  console.log(selectedFilter);
 this.props.changeFilterTask({
  selectedFilter:selectedFilter
 })
    // this.setState({
    //   selectedFilter: selectedFilterTask,
    // });
  };
  onHideFiltersClick = (filters) => {
  
    this.setState({
      filters: [],
    });
  };
  updateTask = (task) => {
    console.log(task.id)
    this.props.updateTask({
      isDone: task.isDone,
      taskID:task.id
    })
    
  };

  createNewTask(title, priority,value) {
    this.props.addNewTask({
      title: title,
      priority: priority,
      isDone:false,
      value:value    
    })
  }
  
  deleteTask(taskId) {
    console.log(taskId)
    this.props.deleteTask({
      taskId:taskId
    })
  }
  clearTaskComplited(e,isDone) {
    
    this.props.clearTask({
      isDone:isDone
    })
   
  }

  render() {
    
    const { selectedFilter, tasks, filters } = this.props;
    console.log(selectedFilter)
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
        {/* ////TODO тут тебе нужно передавать только длинну тасок и фильтра. */}
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
      addNewTask: (newTask) => dispatch(creatTaskActionCreater(newTask)),
      deleteTask: (taskId) => dispatch(deleteTask(taskId)),
      updateTask:(isDoneUpdate) => dispatch(updateTask(isDoneUpdate)),
      changeFilterTask:(selectedFilter) => dispatch(changeFilterTask(selectedFilter)),
      clearTask:(isDone) => dispatch(clearTask(isDone)),
      getTasks:(data) => dispatch(getTasks(data)),
      addA: () => dispatch({})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
