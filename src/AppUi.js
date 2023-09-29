import React from 'react';
import TodoCounter from './Components/TodoCounter';
import TodoSearch from './Components/TodoSearch';
import TodoList from './Components/TodoList';
import TodoItem from './Components/TodoItem';
import { TodoCreateButton } from './Components/TodoCreateButton';
import { TodosLoading } from './Components/TodosLoading';
import { TodosError } from './Components/TodosError';
import { EmptyTodo } from './Components/EmptyTodo';
import { Modal } from './Components/Modal';
import { TodoForm } from './Components/TodoForm';
import { TodoContext } from './Hooks';

function AppUi() {
  const {
    load,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList >
        {load &&
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>}
        {error && <TodosError />}
        {(!load && !error && searchedTodos.length === 0) && <EmptyTodo />}
        {searchedTodos.map(todo => (
          <TodoItem key={todo.description + todo.complete}
            description={todo.description}
            complete={todo.complete}
            onComplete={() => completeTodo(todo.description)}
            onDelete={() => deleteTodo(todo.description)}
          />
        ))}
      </TodoList>
      
      <TodoCreateButton setOpenModal={setOpenModal}/>
      {openModal && (
        <Modal>
          <TodoForm>

          </TodoForm>
        </Modal>
      )}
    </>
  );
}

export { AppUi };