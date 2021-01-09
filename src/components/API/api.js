import axios from "axios";

const instance = axios.create({
    baseURL: "https://calm-wave-15099.herokuapp.com/todos",
});

export const todoListsAPI = {
    async getTasksAsync() {
        try {
            const res = await axios.get('https://calm-wave-15099.herokuapp.com/todos', {});
            console.log(res)
            return res;
        } catch (e) {
            console.log(e)
        }
    },
    getTasks() {
        return axios.get('https://calm-wave-15099.herokuapp.com/todos')
            .then(res => {
                if (res.data && res.data.todos) {
                    return res.data.todos
                }
            })
    },
    addNewTask(task) {
        const newTask = {
            title: task.title,
            isDone: task.isDone,
            value: 'aaa',
            status: task.priority,
        }
        debugger
        return axios
            .post('https://calm-wave-15099.herokuapp.com/todos', newTask)
            .then((res) => {

                if (res.data && res.data.id) {
                    return res.data
                }
            })
            .catch(e => console.log(e));
    },

};
// export const todoListsAPI = {
//     getTasks(todoListId) {
//         return instance.get(`todo-lists/${todoListId}/tasks`)
//             .then(res => {
//                 if (res.data.items) {
//                     return res.data.items;
//                 }
//             })
//     },
//     addNewTask(todoListId, taskTitle) {
//         return instance.post(`todo-lists/${todoListId}/tasks`, { title: taskTitle })
//             .then(res => {
//                 if (res.data.resultCode === 0) {
//                     return res.data;
//                 }
//             })
//     },
//     deleteTask(taskId) {
//         return instance.delete(`todo-lists/tasks/` + taskId)
//             .then(res => {
//                 return res.data.resultCode
//             })
//     },
//     changeTask(task) {
//         return instance.put(`todo-lists/tasks/`, task)
//             .then(res => {
//                 return res.data;
//             })
//     },

// };