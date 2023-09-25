import React from "react";
import { useLocalStorage } from "./hookLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}){

    const {
        item: todos,
        saveItem: savesTodos,
        load,
        error,
    
      } = useLocalStorage('TODOS_V1',[]);

      const [searchValue,setSearchValue] = React.useState('');

      const totalTodos = todos.length;
      const completeTodos = todos.filter(todo=>!!todo.complete).length;
      const searchedTodos = todos.filter((todo)=>{
       return todo.description.toLowerCase().includes(searchValue.toLowerCase());
      });

      

  const completeTodo = (description) => { 
    const newTodos = [...todos]; 
    const todoIndex = newTodos.findIndex((todo) => todo.description === description);
    newTodos[todoIndex].complete = !newTodos[todoIndex].complete; 
    //setTodos(newTodos); 
    savesTodos(newTodos);
  };

  const deleteTodo = (key) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.description === key);
    //console.log('array:\n'+newTodos);
    //console.log('elemento a eliminar:',todoIndex);
    newTodos.splice(todoIndex,1);
    //setTodos(newTodos); 
    savesTodos(newTodos);
    };

    return(
        <TodoContext.Provider value={{
            load,
            error,
            totalTodos,
            completeTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export {TodoContext , TodoProvider};