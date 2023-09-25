import React from 'react';
import { TodoContext } from '../Hooks';

import '../Styles/TodoCounter.css'

function TodoCounter(){
    const {
        totalTodos,
        completeTodos
    } = React.useContext(TodoContext);

    const finish = totalTodos-completeTodos;
    
    if(totalTodos === 0 && completeTodos === 0){
        return(           
            <h1 className='main-container'>No tienes ToDo's por hacer en tu ToDo Machine</h1> 
        );
    }else if(finish > 0){
        return(
            <h1 className='main-container'>Has completado <span>{completeTodos}</span> de <span>{totalTodos}</span> ToDo's!</h1> 
        );
    }else {
        return(
            <h1 className='main-container'>Felicidades, Has completado todas tus ToDo's!</h1> 
        );
    }
    
}

export default TodoCounter;