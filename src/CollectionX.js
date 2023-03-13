
import Pics from './Pics';
import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {Header} from './headerSection';

function CollectionX() {
  const navigate = useNavigate();
  const [data,setData] = useState([]);
  const {collection_id}= useParams();
  const [isLoading,setLoading]= useState(true);
  const [name,setName] = useState('');
  let url = `https://image-galleryapi.onrender.com/${collection_id}`;
  // let url = `https://image-galleryapi.onrender.com/${collection_id}`;
  console.log(`This is the collection id: ${collection_id}`);
  const [query, setQuery] = useState('');
  
  

  const navigateHome = ()=>{navigate("/")}
  

  const searchNewImage = (el)=>{
    console.log(el.target);
  }

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        console.log(res.data.collection.data); 
        setData(res.data.collection.data);
        setName(res.data.collection.name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);


  return (
    <>    
      <Header setQuery={setQuery} query={query}></Header>
        {isLoading ? (<div>Loading...</div>) : 
        ( 
          <div className="main">
            {/* {console.log(db)} */}
            <div className="grid">
              {data && data.map((val) => {
                
                return <Pics id={val._id} url = {val.url} name ={name} setData={setData}></Pics>
                
              })}
            </div>
          </div>
        
        )}
    </>
    )
    
}

export default CollectionX;