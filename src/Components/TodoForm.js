import React from "react";
import { TodoContext} from '../Hooks/index';
import '../Styles/ToDoForm.css';

function TodoForm(){

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');


    const onSubmit = (e) => {
        e.preventDefault();
        if(newTodoValue !== '' && newTodoValue !== undefined && newTodoValue !== null){
            addTodo(newTodoValue);
            setOpenModal(false); 
        }else {
            alert('Por favor llenar el campo de descripción');
        }

    }

    const onCancel = ()=> {
        setOpenModal(false);
    }

    const onChange = (e) => {
        setNewTodoValue(e.target.value);
    }

    return(
        <>
        <form onSubmit={onSubmit}>
            <label>Escribe tu ToDo</label>
            <textarea placeholder="Cortar cebolla para el almuerzo"
            value={newTodoValue}
            onChange={onChange}
            /**minLength={5}
            pattern='^([A-Za-z0-9.,])' */
            />
            <div className="TodoForm--ButtonContainer">
            <button className="TodoForm-button TodoForm-button--cancel"
            type="button" 
            onClick={onCancel}>
                Cancelar
            </button>
            <button type="submit" className="TodoForm-button TodoForm-button--add">
                Añadir
            </button>
            </div>
        </form>
        </>
    );
}

export { TodoForm };