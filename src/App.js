import React from "react";

import "./App.scss";
import Task from "./components/addList/AppMain";
import HeaderBlock from "./components/Headerblock/HeaderBlock.js";
import AppFooter from "./components/footerBlock/AppFooter";
import AppBall from "./components/LogoSvg/LogoSvg.js";
import AppDate from "./components/AddDate/AppDate";
import store from "./components/Store/Store";
import todoListReducers from "./components/Reducers/Reducers";
import { createStore } from "redux";

// console.log(store);

class App extends React.Component {
  constructor(props) {
    super(props);
    ////TODO почему не хранишь индекс в стэйте?
    ////TODO и фильтры лучше тоже массивом в стэйте хранить, в футер передаёшь этот массив с флагом выбранный, сдесь же и фильтруешь передовая в Мэйн
    ////TODO и переменная с маленькой буквы должна быть
//  store.dispatch(changeFilter);
//  store.dispatch(creatTask);

    this.newIndexId = 3;
//     this.state = {
//       tasks: [{
//         id: 0,
//         title: "learn React",
//         isDone: false,
//         value: "",
//         priority: "low",
//     },
//     {
//         id: 1,
//         title: "learn Redux",
//         isDone: false,
//         value: "",
//         priority: "high",
//     },
//     {
//         id: 2,
//         title: "learn React Hoock",
//         isDone: false,
//         value: "",
//         priority: "medium",
//     },
// ],
// filters: [
//     { value: "all", title: "All" },
//     { value: "completed", title: "Completed" },
//     { value: "uncompleted", title: "Uncompleted" },
// ],
// selectedFilter: "all",

//     }
const store = createStore(todoListReducers)
// const state =store.getState();
 
     
  }
  ////TODO и создаёшь метод для выбора фильтра
  changeFilter = (selectedFilter) => {
    const selectedFilterTask = selectedFilter;

    this.setState({
      selectedFilter: selectedFilterTask,
    });
  };
  onHideFiltersClick =(filters)=>{
    console.log(filters);
    this.setState({
      filters: [],
    });
  }
  updateTask = (newTask) => {
    this.setState({
      tasks: this.state.tasks.map((t) => (t.id === newTask.id ? newTask : t)),
    });
  };
  createNewTask(task, priority) {
   
    const newTask = {
      title: task,
      isDone: false,
      value: "",
      priority: priority,
      id: this.newIndexId,
    };

    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
    this.newIndexId++;
  }

  deleteTasks(tasksId) {
    this.setState({
      tasks: this.state.tasks.filter((T) => {
        return T.id !== tasksId;
      }),
    });
  }
  clearTaskComplited(e){
   
    this.setState({
      tasks:this.state.tasks.filter(t => !t.isDone)
    })
  }

  render() {
    const { selectedFilter, tasks, filters } = this.state;

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
            {/* ////TODO тоесть вот сдесь фильтруешь! */}
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
                    deleteCallback={this.deleteTasks.bind(this)}
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
          onHideFiltersClick = {this.onHideFiltersClick.bind(this)}
          onClearTaskComplited ={this.clearTaskComplited.bind(this)}
          selectedFilter={selectedFilter}
        />
      </div>
    );
  }
}

export default <App />;
