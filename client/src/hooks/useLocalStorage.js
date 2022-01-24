import {useState, useEffect} from 'react';

const prefix = "whatsapp-clone-";

const useLocalStorage = (key,initial) => {
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
};

export default useLocalStorage;
