import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons'



import '../Styles/TodoItem.css'

function TodoItem({description,complete,onComplete,onDelete}) {
    return (
        <li className="list-element">
            <span onClick={onComplete} //
            className={`icon icon-check ${complete && "icon-check--active"}`}><FontAwesomeIcon icon={faSquareCheck} /></span>
            <p className={`task task-check ${complete && "task-check--active"}`}>{description}</p>
            <span onClick={onDelete} 
            className={`icon icon-delete`}><FontAwesomeIcon icon={faRectangleXmark}/></span>
        </li>
    );
}

export default TodoItem;