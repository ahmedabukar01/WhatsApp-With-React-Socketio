import Login from "./Login";
import {useState} from 'react';
import useLocalStorage from "../hooks/useLocalStorage";
import Dashboard from "./Dashboard";
import { ContactsProvider } from "../contexts/ContactsContext";

function App() {
  const [id, setId] = useLocalStorage('id');

  const dashboards = (
    <ContactsProvider>
      <Dashboard id={id}/>
    </ContactsProvider>
  )

  return( 
    <>
     {id ? dashboards : <Login onSubmitId = {setId}/>}
    </>
  )
}

export default App;
