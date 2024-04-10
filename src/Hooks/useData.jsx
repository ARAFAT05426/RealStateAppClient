import { useEffect, useState } from "react";

const useData = () => {
    const [data, setData] = useState([])
    const fetchData = async() =>{
        const response = await fetch('/Data.json')
        const dArray = await response.json()
        setData(dArray)
    }
    useEffect(() =>{
        fetchData()
    }, [])
    return data
};

export default useData;