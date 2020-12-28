import store from "../Store/Store";

export const creatTask = {
    type: "CREATE_NEW_TASK",
    id: 0,
    title: "learn Redux",
    isDone: true,
    value: "",
    priority: "low",

}
export const changeFilter = {
    type: "CHENGE_FILTER"
}
export const changeDaleteTask = {
    type: "DELETE_TASK"
}
export const updateTask = {
    type: "UPDATE_TASK"
}
store.dispatch(changeFilter);
store.dispatch(creatTask);