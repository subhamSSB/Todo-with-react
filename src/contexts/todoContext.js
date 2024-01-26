import { createContext, useContext } from "react";


export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:'msg',
            completed:false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id,todo) => {}
});

export const TodoContextProvider = TodoContext.Provider;

export const UseTodo = () => {
    return useContext(TodoContext);
}