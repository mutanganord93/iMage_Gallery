import {useState,useEffect } from "react";
import axios from "axios";

const useDataApi = (url)=>{
    const [data,setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(()=>{
        const fetchData = async()=>{
            setIsError(false);
            setIsLoading(true);

            try {
                const res = await axios(url);
                console.log(res);
                setData(res.data.results);
            } catch (error) {
                setIsError(error);
            }
            setIsLoading(false);
        };
        fetchData();
    },[url]);
    return {data,isLoading,isError};
};

export default useDataApi;