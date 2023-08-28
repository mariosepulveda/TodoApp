import '../Styles/TodoList.css'


function TodoList( props) {
    return(
        <div className='container-ul'>
        <ul>
            {props.children}
        </ul>
        </div>
    );
}

export default TodoList;