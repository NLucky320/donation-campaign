import React, { useEffect, useState } from 'react';
import { getFromLocalStorage } from '../Utils/localstorage';

const useLocalStorage = () => {
    const [localData, setLocalData] = useState([]);
    console.log(localData)
    useEffect(() => {
        setLocalData(getFromLocalStorage())
    },[])
    return { localData };
};

export default useLocalStorage;