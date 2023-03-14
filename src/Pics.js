import React from "react";
import axios from "axios";
const Pics = (props) => {
  // console.log(`${props.name}  id:${props.id}`);
  
  return (

    <div key={props.id} className="imageW">
      <img src={props.url} alt="" />
      <div className="iCons">
        <i className="fa-solid fa-trash" onClick={async()=>{
          await axios.delete(`/pin/${props.name}/pics?id=${props.id}`)
          props.setData((res)=>{
            return res.filter((item)=>{return item._id !== props.id})
          })}}>
        </i>
        <button className="popup">Save</button>
      </div>
    </div>
    
  );
};

export default Pics;
