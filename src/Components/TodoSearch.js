import React from 'react';
import '../Styles/TodoSearch.css'
function TodoSearch ({searchValue, setSearchValue}) {

    return(
            <input  
            className="input-search" placeholder="Encuentra aquí tu tarea!"
            value={searchValue}
            onChange={(e)=> {
            setSearchValue(e.target.value);
        }}
            />
    );
    /* <span><FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#08d946",}} /></span> */

}

export default TodoSearch;