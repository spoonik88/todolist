case nameAction.UPDATE_TASK:
    {


        return {
            ...oldState,
            tasks: oldState.tasks.map((t) => (t.id === action.id ? action : t)),
        }

    }

    filters: [
            { value: "all", title: "All" },
            { value: "completed", title: "Completed" },
            { value: "uncompleted", title: "Uncompleted" },
        ],
        selectedFilter: "completed",