import {useState, useEffect} from 'react';

const prefix = "whatsapp-clone-";

function useLocalStorage(key, initial){
    const prefixedKey = prefix + key;

    const [value,setValue] = useState(()=>{
        const jsonValue = localStorage.getItem(prefixedKey);
        if(jsonValue != null) return JSON.parse(jsonValue);
        if(typeof initial === 'function'){
            return initial();
        } else{
            return initial;
        }
    })

    useEffect(()=>{
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    },[prefixedKey,value])

    return [value,setValue]
};

export default useLocalStorage;
