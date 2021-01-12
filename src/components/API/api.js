import axios from "axios";

// const instance = axios.create({
//     baseURL: "https://calm-wave-15099.herokuapp.com/todos",
// });

export const todoListsAPI = {
    async getTasksAsync() {
        try {
            const res = await axios.get(
                "https://calm-wave-15099.herokuapp.com/todos", {}
            );
            console.log(res);
            return res;
        } catch (e) {
            console.log(e);
        }
    },
    getTasks() {
        return axios
            .get("https://calm-wave-15099.herokuapp.com/todos")
            .then((res) => {
                if (res.data && res.data.todos) {
                    return res.data.todos;
                }
            });
    },
    addNewTask(task) {

        const newTask = {
            title: task.title,
            isDone: task.isDone,
            value: "aaa",
            status: task.status,
        };
        return axios
            .post("https://calm-wave-15099.herokuapp.com/todos", newTask)
            .then((res) => {
                if (res.data && res.data.id) {
                    return res.data;
                }
            })
            .catch((e) => console.log(e));
    },
    async deleteTask(taskId) {
        try {
            const res = await axios
                .delete("https://calm-wave-15099.herokuapp.com/todos" + '/' + taskId);
            if (res.status === 204) {
                return true
            }
        } catch (e) {
            console.log(e);
        }
    },
    updateTask(task) {
        return axios
            .put("https://calm-wave-15099.herokuapp.com/todos", task.task)
            .then((res) => {
                if (res.status === 200) {
                    return true
                }
            })
            .catch((e) => console.log(e));
    },
};