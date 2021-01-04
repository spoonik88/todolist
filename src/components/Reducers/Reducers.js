import { nameAction } from "../Action/Action";

export const defaultTodosState = {
    tasks: [{
        id: 0,
        title: "learn React",
        isDone: false,
        value: "",
        priority: "low",
    }, ],
    filters: [
        { value: "all", title: "All" },
        { value: "completed", title: "Completed" },
        { value: "uncompleted", title: "Uncompleted" },
    ],
    selectedFilter: "all",
};
let idCounter = 1;
export default function todoListReducers(oldState = defaultTodosState, action) {
    switch (action.type) {
        case nameAction.CREATE_NEW_TASK:
            {
                const newTask = {
                    id: idCounter,
                    title: action.newTask.title,
                    isDone: action.newTask.isDone,
                    value: action.newTask.value,
                    priority: action.newTask.priority,
                };
                idCounter++;
                let newTasks = [...oldState.tasks];
                newTasks.push(newTask);
                return {
                    ...oldState,
                    tasks: newTasks,
                };
            }

            // case nameAction.CHENGE_FILTER:
            //     return {
            //         ...oldState,
            //         filters: [
            //             { value: "all", title: "All" },
            //             { value: "completed", title: "Completed" },
            //             { value: "uncompleted", title: "Uncompleted" },
            //         ],
            //         selectedFilter: "completed",
            //     };
        case nameAction.DELETE_TASK:
            {
                return {
                    ...oldState,
                    tasks: oldState.tasks.filter((t) => t.id !== action.taskId.taskId),
                };
            }
        case nameAction.UPDATE_TASK:
            {
                return {
                    ...oldState,
                    task: oldState.tasks
                        .filter((t) => t.id === action.isDone.taskID)
                        .map((t) => (t.isDone = action.isDone.isDone)),
                };
            }
        case nameAction.CLEAR_TASK:
            {
                return {
                    ...oldState,
                    tasks: oldState.tasks.filter((t) => t.isDone !== true),
                };
            }

        default:
            {
                return oldState;
            }
    }
}