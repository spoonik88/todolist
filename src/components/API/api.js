import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: { "API-KEY": "0f32e29f-2408-4879-8199-f94cc9bd7861" },
});
export const todoListGet = {
        getTask(response) {
            return instance.get(response)
                .then(console.log('RESPONSE->', response))
                .catch(error => console.log(error.message))

        }
    }
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