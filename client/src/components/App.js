import Login from "./Login";
import {useState} from 'react';
import useLocalStorage from "../hooks/useLocalStorage";

function App() {
  const [id, setId] = useLocalStorage('id');

  return( 
    <>
     {id}
      <Login onSubmitId = {setId}/>
    </>
  )
}

export default App;
