import {useState,useEffect } from "react";
import axios from "axios";

// const apiData = (url)=>{
//     const [db,setDB] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [isError, setIsError] = useState(false);

//     useEffect(()=>{
//         const fetchData = async()=>{
//             setIsError(false);
//             setIsLoading(true);

//             try {
//                 const res = await axios(url);
//                 setDB(res.data.collection);
//             } catch (error) {
//                 setIsError(error);
//             }
//             setIsLoading(false);
//         };
//         fetchData();
//     },[url]);

//     return {db,isLoading,isError};
// };

// export default apiData;