// const initialState = {
//     todolists: []
// }
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "CREATE_NEW_TASK":
//             return {...state,
//                 state: [...state.state, {
//                     id: action.id,
//                     title: action.title,
//                     isDone: action.isDone,
//                     value: action.value,
//                     priority: action.priority,
//                 }]
//             }
//     }
// }

// // const store = createStore(reducer);

// export default reducer;
export default function todoListReducers(oldState = {
    tasks: [{
        id: 0,
        title: "learn React",
        isDone: false,
        value: "",
        priority: "low",
    }],
    filters: [
        { value: "all", title: "All" },
        { value: "completed", title: "Completed" },
        { value: "uncompleted", title: "Uncompleted" },
    ],
    selectedFilter: "all",

}, action) {
    switch (action.type) {
        case "CREATE_NEW_TASK":
            return {...oldState,
                oldState: [...oldState.oldState, {
                    id: action.id,
                    title: action.title,
                    isDone: action.isDone,
                    value: action.value,
                    priority: action.priority,
                }]
            }
        case "CHENGE_FILTER":
            return {...oldState,
                filters: [
                    { value: "all", title: "All" },
                    { value: "completed", title: "Completed" },
                    { value: "uncompleted", title: "Uncompleted" },
                ],
                selectedFilter: "completed",
            }
        default:
            return oldState;
    }

}