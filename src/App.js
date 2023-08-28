import React from 'react';
import TodoCounter from './Components/TodoCounter';
import TodoSearch from './Components/TodoSearch';
import TodoList from './Components/TodoList';
import TodoItem from './Components/TodoItem';
import { TodoCreateButton } from './Components/TodoCreateButton';

const arrayTareas = [
  {description:'Taller de Inglés básico sobre elementos de trabajo.', complete:false},
  {description:'Curso para conseguir trabajo en EEUU.', complete:false},
  {description:'Curso de inglés intermedio para el trabajo.', complete:false},
  {description:'Curso de introducción a React.js', complete:false},
  {description:'Estudiar Inglés A2', complete:false},
  {description:'Terminar Hoja de vida', complete:false},
];

function App() {
  const [todos,setTodos] = React.useState(arrayTareas);
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
    setTodos(newTodos); 
  };

  const deleteTodo = (key) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.key === key);
    newTodos.splice(todoIndex,1);
    setTodos(newTodos); 
  }
 

  console.log('numero de todos completados y totales',completeTodos,totalTodos);

  console.log('los usuarios buscaron: ', searchValue);
  return (
    <>
      <TodoCounter total={totalTodos} completed={completeTodos}/>
      <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      <TodoList >
        {searchedTodos.map(todo =>(
          <TodoItem key={todo.description+todo.complete} 
          description={todo.description}
          complete={todo.complete}
          onComplete={()=>completeTodo(todo.description)}
          onDelete={()=>deleteTodo(todo.key)}
          />
        ))}
      </TodoList>
      <TodoCreateButton />
     </>

  );

}

export default App;
