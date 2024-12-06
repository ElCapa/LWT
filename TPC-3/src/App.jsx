import React, { useReducer } from "react";
import "./App.css";

function reducer(state, action) {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    { id: Date.now(), name: state.newTaskName, completed: false },
                ],
                newTaskName: "",
            };
        case "SET_NEW_TASK_NAME":
            return {
                ...state,
                newTaskName: action.payload,
            };
        case "SET_FILTER":
            return {
                ...state,
                filter: action.payload,
            };
        case "TOGGLE_TASK":
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload ? { ...task, completed: !task.completed } : task
                ),
            };
        case "REMOVE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };
        default:
            return state;
    }
}

const initialState = {
    tasks: [
        { id: 1, name: "Aprender useReducer", completed: false },
        { id: 2, name: "Criar exemplo prático", completed: true },
    ],
    filter: "all",
    newTaskName: "",
};

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const filteredTasks = state.tasks.filter((task) => {
        if (state.filter === "pending") return !task.completed;
        if (state.filter === "completed") return task.completed;
        return true;
    });

    return (
        <div className="main">
            <h1>Gerenciador de Tarefas</h1>
            <div>
                <input
                    type="text"
                    value={state.newTaskName}
                    onChange={(e) =>
                        dispatch({ type: "SET_NEW_TASK_NAME", payload: e.target.value })
                    }
                    placeholder="Nova tarefa"
                />
                <button onClick={() => dispatch({ type: "ADD_TASK" })}>Adicionar</button>
            </div>
            <div className="comandos">
                <button onClick={() => dispatch({ type: "SET_FILTER", payload: "all" })}>
                    Todos
                </button>
                <button onClick={() => dispatch({ type: "SET_FILTER", payload: "pending" })}>
                    Pendentes
                </button>
                <button onClick={() => dispatch({ type: "SET_FILTER", payload: "completed" })}>
                    Concluídas
                </button>
            </div>
            <ul>
                {filteredTasks.map((task) => (
                    <li key={task.id}>
                        <span
                            style={{
                                textDecoration: task.completed ? "line-through" : "none",
                            }}
                        >
                            {task.name}
                        </span>
                        <button
                            onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
                        >
                            {task.completed ? "Desfazer" : "Concluir"}
                        </button>
                        <button
                            onClick={() => dispatch({ type: "REMOVE_TASK", payload: task.id })}
                        >
                            Remover
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
