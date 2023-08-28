/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons' */
import '../Styles/TodoCreateButton.css'
function  TodoCreateButton () {
    return (
        <button onClick={(e)=>{
            console.log('le diste click +');
            console.log(e.target);
        }} className="button-add">+</button>
    );
}
/* <FontAwesomeIcon icon={faCirclePlus} style={{color: "#4180ec", fontWeight:"bold"}} /> */

export { TodoCreateButton }; 
