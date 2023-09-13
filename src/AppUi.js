import TodoCounter from './Components/TodoCounter';
import TodoSearch from './Components/TodoSearch';
import TodoList from './Components/TodoList';
import TodoItem from './Components/TodoItem';
import { TodoCreateButton } from './Components/TodoCreateButton';

function AppUi(
    {
        load,
        error,
        totalTodos,
        completeTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo
    }
    ) {
    
        return (
        <>
        <TodoCounter total={totalTodos} completed={completeTodos}/>
        <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        />
        <TodoList >
          {load && <p>Estamos cargando...</p>}
          {error && <p>Hubo un error!!</p>}
          {(!load && searchedTodos.length === 0) && <p>¡Crea tu primer ToDo!</p>}
          {searchedTodos.map(todo =>(
            <TodoItem key={todo.description+todo.complete} 
            description={todo.description}
            complete={todo.complete}
            onComplete={()=>completeTodo(todo.description)}
            onDelete={()=>deleteTodo(todo.description)}
            />
          ))}
        </TodoList>
        <TodoCreateButton />
       </>
    );
}

export { AppUi };