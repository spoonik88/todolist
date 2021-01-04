import React from "react";
// import ReactDOM from "react-dom";
// import './index.css';
import "./AppFooter.scss";

class AppFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: this.props.selectedFilter,
      buttonHidden: [
        { value: "hide", title: "Hide" },
        { value: "show", title: "Show" },
      ],
      isHidden: true,
    };
  }
  handlerFilterChaged(e) {
    this.props.changeFilter(e.currentTarget.dataset.value);

    this.setState({
      selectedFilter: e.currentTarget.dataset.value,
    });
  }
  onHideFiltersClick(e) {
    // console.log(this.props.filters);
    this.setState({
      isHidden: this.state.isHidden === false,
    });
  }

  render() {
    // console.log(this.state.isHidden)
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{this.props.tasksCount}</strong> All task
        </span>

        <span className="todo-count">
          <strong>{this.props.comletedCount}</strong> task left
        </span>
        <ul className="filters">
          {!this.state.isHidden ? "" : this.props.filters.map((f) => (
            <li>
              <button
                data-value={f.value}
                className={
                  f.value === this.state.selectedFilter ? "selected" : ""
                }
                onClick={this.handlerFilterChaged.bind(this)}
              >
                {f.title}
              </button>
            </li>
          ))}
         
          <li>
            {this.state.buttonHidden
              .filter((b) =>
                b.value === "hide"
                  ? this.state.isHidden === true
                  : !this.state.isHidden
              )
              .map((b) => (
                <button onClick={this.onHideFiltersClick.bind(this)}>
                  {" "}
                  {b.title}
                </button>
              ))}
          </li>
          <li>
          <button onClick={this.props.onClearTaskComplited}> Clear task complited</button>
          </li>
        </ul>
      </footer>
    );
  }
}

export default AppFooter;
