import React from 'react';
import {AppUi} from './AppUi';
import { TodoProvider } from './Hooks';

function App() { 

  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
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
//localStorage.removeItem('TODOS_ARRAY');
