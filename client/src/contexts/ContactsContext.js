import {createContext, useContext} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const MyContext = createContext();

export const ContactsProvider = ({children})=>{
    const [contacts, setContacts] = useLocalStorage('contacts',[])

    const createContact = (id,name) =>{
        setContacts(prevContacts =>{
            return [...prevContacts, {id,name}];
        })
    }
    return (
        <MyContext.Provider value={{contacts, createContact}}>
            {children}
        </MyContext.Provider>
    )
}

export function useContexts(){
    return useContext(MyContext);
}