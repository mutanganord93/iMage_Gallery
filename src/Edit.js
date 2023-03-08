import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";

export const Edit = (props)=>{
    let collection_id = props.target;
    let [newName,setNewName] = useState('');
    console.log(collection_id);

    const editCollectionName = async(el)=>       
    {
        console.log(`new collection name: ${newName}`);
        const newCollection = await axios.patch(`http://localhost:5000/${collection_id}`,
        {"name":newName});
        let name = el.target.parentElement.parentElement.classList;
        name.classList.toggle("hiddenEdit");
        
        return newCollection;
    }

    const collectionName = (event)=>{
        console.log(event.target.value);
        setNewName(event.target.value);
  }
    



    return(
        <div className="editCollection hiddenEdit">
            <div className="prompt">
                <input type="text" 
                    value={newName}
                    placeholder="......" 
                    onChange={collectionName}/>
                <button onClick={editCollectionName}>Save</button>
            </div>
        </div>
    )
};

