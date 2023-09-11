import React from 'react';
import TodoCounter from './Components/TodoCounter';
import TodoSearch from './Components/TodoSearch';
import TodoList from './Components/TodoList';
import TodoItem from './Components/TodoItem';
import { TodoCreateButton } from './Components/TodoCreateButton';
import { useLocalStorage } from './Hooks/hookLocalStorage';

/* const arrayTareas = [
  {description:'Pedir las vacaciones en la empresa.', complete:false},
  {description:'Comprar el Pan Tajado.', complete:false},
  {description:'Arreglar hoja de vida.', complete:false},
  {description:'Tender la cama', complete:false},
  {description:'Almorzar', complete:false},
  {description:'Hacer jugo de guanabana', complete:false},
  {description:'Comprar Tomates y frutas para jugo', complete:false}
]; */
//
//localStorage.setItem('TODOS_ARRAY',arrayTareas);
// cambio ultimo 
localStorage.removeItem('TODOS_ARRAY');

function App() {

  const [todos,savesTodos] = useLocalStorage('TODOS_V1',[]);

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

  }
 
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
          onDelete={()=>deleteTodo(todo.description)}
          />
        ))}
      </TodoList>
      <TodoCreateButton />
     </>

  );

}

export default App;