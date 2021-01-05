export const nameAction = {
    CREATE_NEW_TASK: 'CREATE_NEW_TASK',
    CHENGE_FILTER: 'CHANGE_FILTER',
    DELETE_TASK: 'DELETE_TASK',
    CLEAR_TASK: 'CLEAR_TASK',
    UPDATE_TASK: 'UPDATE_TASK',
    GET_TASK: 'GET_TASK'

}

export const creatTaskActionCreater = (task) => {

    return {
        type: nameAction.CREATE_NEW_TASK,
        newTask: task
    }
}
export const getTasks = (data) => {
    return {
        type: nameAction.GET_TASK,
        task: data
    }
}
export const changeFilterTask = (selectedFilter) => {

    return {
        type: nameAction.CHENGE_FILTER,
        selectedFilter: selectedFilter
    }

}

export const deleteTask = (taskId) => {


    return {
        type: nameAction.DELETE_TASK,
        taskId: taskId
    }


}
export const clearTask = (isDone) => {

    return {
        type: nameAction.CLEAR_TASK,
        isDone: isDone

    }
}
export const updateTask = (isDone) => {

    return {
        type: "UPDATE_TASK",
        isDone: isDone
    }

}

// export const putTasksActionCreater = (task) => {
//     return {
//         type: nameAction.PUT_TASKS,
//         task: task
//     }
// }
// export const createNewTask = (task) => {
//     return {
//         type: "ADD_TODOLIST",
//         task: "ghbdfgdfg"
//     }
// }