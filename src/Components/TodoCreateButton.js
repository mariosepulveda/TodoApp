/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons' */
import '../Styles/TodoCreateButton.css'; 


function  TodoCreateButton ({setOpenModal}) {
    return (
        <button onClick={()=>{
            setOpenModal(state => !state);
            console.log("se dio click");
        }} className="button-add">+</button>
    );
}
/* <FontAwesomeIcon icon={faCirclePlus} style={{color: "#4180ec", fontWeight:"bold"}} /> */

export { TodoCreateButton }; 
