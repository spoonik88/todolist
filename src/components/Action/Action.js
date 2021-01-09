import { todoListsAPI } from "../API/api"


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
export const getTasksSuccess = (data) => {
    return {
        type: nameAction.GET_TASK,
        tasks: data
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

export const getTasksThunk = () => (dispatch) => {
    todoListsAPI
        .getTasks()
        .then(data => {
            if (data) {
                dispatch(getTasksSuccess(data))
            }
        });
};


export const createTaskThunk = (task) => (dispatch) => {

    todoListsAPI
        .addNewTask(task)
        .then(task => {
            if (task) {
                dispatch(creatTaskActionCreater(task))
            }

        });
};

export const deleteTaskThunk = (taskId) => (dispatch) => {

    todoListsAPI
        .deleteTask(taskId)
        .then(taskId => {
            if (taskId) {
                dispatch(deleteTask(taskId))
            }

        });
};