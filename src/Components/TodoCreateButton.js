/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons' */
import React from 'react';
import { TodoContext } from '../Hooks';
import '../Styles/TodoCreateButton.css'; 


function  TodoCreateButton () {
    const {
        setOpenModal,
        openModal,
    } = React.useContext(TodoContext);
    return (
        <button onClick={()=>{
            setOpenModal(!openModal);
            console.log("se dio click");
        }} className="button-add">+</button>
    );
}
/* <FontAwesomeIcon icon={faCirclePlus} style={{color: "#4180ec", fontWeight:"bold"}} /> */

export { TodoCreateButton }; 
