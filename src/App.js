import React from 'react';
import {AppUi} from './AppUi';
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
    <AppUi totalTodos={totalTodos}
    completeTodos={completeTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}/>
  );

}

export default App;
