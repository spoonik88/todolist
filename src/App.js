import React from "react";

import "./App.scss";
import Task from "./components/addList/AppMain";
import HeaderBlock from "./components/Headerblock/HeaderBlock.js";
import AppFooter from "./components/footerBlock/AppFooter";
import AppBall from "./components/LogoSvg/LogoSvg.js";
import AppDate from "./components/AddDate/AppDate";

class App extends React.Component {
  constructor(props) {
    super();
    ////TODO почему не хранишь индекс в стэйте?
   ////TODO и фильтры лучше тоже массивом в стэйте хранить, в футер передаёшь этот массив с флагом выбранный, сдесь же и фильтруешь передовая в Мэйн
    ////TODO и переменная с маленькой буквы должна быть
    this.newIndexId = 3;
    this.state = {
      tasks: [
        {
          id: 0,
          title: "learn React",
          isDone: false,
          value: "",
          priority:"low"
        },
        {
          id: 1,
          title: "learn Redux",
          isDone: false,
          value: "",
          priority:"high"
        },
        {
          id: 2,
          title: "learn React Hoock",
          isDone: false,
          value: "",
          priority:"medium"
        },
      ],
      filters: [{value: 'all', title: 'All'}, {value: 'not_done', title: 'Completed'}, {value: 'done', title: 'Uncompleted'}],
      selectedFilter: 'all'
    };
  }
////TODO и создаёшь метод для выбора фильтра
changeFilter = (value) => {
  console.log(this.state.selectedFilter)
  if (value && this.state.filters.map(f => f.value).includes(value)) {
    if (value !== this.state.selectedFilter) {
      this.setState({selectedFilter: value})
    } else if( value =="not_done"){
      this.setState({selectedFilter: value})
      console.log(this.state.selectedFilter)
    }
     else {
      this.setState({selectedFilter: 'all'})
    }
  }
}
updateTask = (newTask) => {
 
  this.setState({
    tasks: this.state.tasks.map(t => t.id === newTask.id ? newTask : t),
  });
}
  createNewTask(task,priority) {
    console.log(priority)
    const newTask = {
      title: task,
      isDone: false,
      value: "",
      priority:priority,
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

  render() {
   
    const {selectedFilter, tasks, filters} = this.state;
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
            {this.state.tasks.filter(t => selectedFilter === 'all' || t.isDone).map((task, index) => {
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
          comletedCount={tasks.filter(t => t.isDone).length}
          filters={filters}
          changeFilter={this.changeFilter}
          selectedFilter={selectedFilter}
        />
      </div>
    );
  }
}

export default <App />;
