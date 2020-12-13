import React from "react";

import "./App.scss";
import AppMain from "./components/addList/AppMain";
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
    this.NewIndexId = 3;
    this.state = {
      tasks: [
        {
          id: 0,
          title: "learn React",
          isDone: false,
          value: "",
        },
        {
          id: 1,
          title: "learn Redux",
          isDone: false,
          value: "",
        },
        {
          id: 2,
          title: "learn React Hoock",
          isDone: false,
          value: "",
        },
      ],
    };
  }
////TODO и создаёшь метод для выбора фильтра
  createNewTask(task) {
    const newTask = {
      title: task,
      isDone: false,
      value: "",
      id: this.NewIndexId,
    };
   
    console.log(task)
    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
    this.NewIndexId++;
  }

  deleteTasks(tasksId) {
    this.setState({
      tasks: this.state.tasks.filter((T) => {
        return T.id !== tasksId;
      }),
    });
  }

  render() {
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
            {this.state.tasks.map((tasks, index) => {
              return (
                <AppMain
                  tasks={tasks}
                  deleteCallback={this.deleteTasks.bind(this)}
                  key={tasks.id}
                />
              );
            })}{" "}
          </div>{" "}
        </div>
{/* ////TODO тут тебе нужно передавать только длинну тасок и фильтра. */}
        <AppFooter  tasks={this.state.tasks} />
      </div>
    );
  }
}

export default <App />;
