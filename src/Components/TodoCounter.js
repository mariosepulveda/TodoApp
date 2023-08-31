import '../Styles/TodoCounter.css'

function TodoCounter({total,completed}){
    const finish = total-completed;
    if(total === 0 && completed === 0){
        return(           
            <h1 className='main-container'>No tienes ToDo's por hacer en tu ToDo Machine</h1> 
        );
    }else if(finish > 0){
        return(
            <h1 className='main-container'>Has completado <span>{completed}</span> de <span>{total}</span> ToDo's!</h1> 
        );
    }else {
        return(
            <h1 className='main-container'>Felicidades, Has completado todas tus ToDo's!</h1> 
        );
    }
    
}

export default TodoCounter;