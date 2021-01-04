case nameAction.UPDATE_TASK:
    {
        debugger

        return {
            ...oldState,
            tasks: oldState.tasks.map((t) => (t.id === action.id ? action : t)),
        }

    }