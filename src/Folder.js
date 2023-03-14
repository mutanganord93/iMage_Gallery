import React from "react";
import { useNavigate } from "react-router-dom";
import {Image} from "./Image";
import axios from "axios";

export const Folder = (props) => {

  const navigate = useNavigate();
  
  
  const editCollectionName = async(el)=>       
  {
    let name = el.target.parentElement.parentElement.parentElement.nextElementSibling;
    name.classList.toggle("hiddenEdit");
  }

  

  return (
    <>
      <li key={props.data._id}>
        <button
          className="collectionButton"
          onClick={() => {
            navigate(`/collections/${props.data.name}`);
          }}
        >
          <figure className="imagesContainer">
            <Image arr = {props.data.data}></Image>
          </figure>
        </button>
        <div className="options">
            <i className="fa-solid fa-trash"    
               onClick={async()=>{
                await axios.delete(`/pin/${props.data.name}?id=${props.data._id}`)
                props.setDB((res)=>{
                  return res.filter((item)=>{return item._id !== props.data._id})
                })}}></i>
            <div className="details">
              <h1>{props.data.name}</h1>
              {/* {console.log(props.data.name)} */}
            </div>
            <i className="fa-solid fa-pen-to-square" onClick={editCollectionName}></i>
        </div>
      </li>
    </>
  );
};

