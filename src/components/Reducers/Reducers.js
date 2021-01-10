import { nameAction } from "../Action/Action";


export const defaultTodosState = {
    tasks: [],
    filters: [
        { value: "all", title: "All" },
        { value: "completed", title: "Completed" },
        { value: "uncompleted", title: "Uncompleted" },
    ],
    selectedFilter: "all",
};


export default function todoListReducers(oldState = defaultTodosState, action) {
    switch (action.type) {
        case nameAction.CREATE_NEW_TASK:
            {

                const newTask = {
                    id: action.newTask.id,
                    title: action.newTask.title,
                    isDone: action.newTask.isDone,
                    value: action.newTask.value,
                    status: action.newTask.status,
                };

                let newTasks = [...oldState.tasks];
                newTasks.push(newTask);
                return {
                    ...oldState,
                    tasks: newTasks,
                };
            }

        case nameAction.CHENGE_FILTER:

            return {
                ...oldState,
                selectedFilter: action.selectedFilter.selectedFilter
            };
        case nameAction.DELETE_TASK:
            {

                return {
                    ...oldState,
                    tasks: oldState.tasks.filter((t) => t.id !== action.taskId.taskId),
                };
            }
        case nameAction.UPDATE_TASK:
            {
                console.log(action.task)
                debugger
                return {
                    ...oldState,
                    task: oldState.tasks
                        .filter((t) => t.id === action.task.taskID)
                        .map((t) => (t = action.task)),
                };
            }
        case nameAction.CLEAR_TASK:
            {

                return {
                    ...oldState,
                    tasks: oldState.tasks.filter((t) => t.isDone !== true),
                };
            }
        case nameAction.GET_TASK:
            {
                return {...oldState, tasks: action.tasks };

            }

        default:
            {
                return oldState;
            }
    }
}