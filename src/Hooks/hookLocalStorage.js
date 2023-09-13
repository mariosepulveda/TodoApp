import React from "react";

function useLocalStorage(itemName,initialValue) {

  const [item, setItem] = React.useState(initialValue);

  const [load, setLoad] = React.useState(true);

  const [error,setError] = React.useState(false);

  React.useEffect(()=>{
    setTimeout(()=>{
      try {
        const localStorageItem = localStorage.getItem(itemName);
    
        let parsedItem;
      
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }  
    
        setLoad(false);
      } catch (error) {
        setError(true);
        setLoad(false);
      }
    },2000);
    
  },[]);

  
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName,JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return {
      item,
      saveItem,
      load,
      error
    };
  }

export { useLocalStorage };