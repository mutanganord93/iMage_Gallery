import React from 'react';
import { useState } from 'react';
import axios from "axios";

export const Popup = (props)=>{
    const data = props.data;
    const setDB = props.setDB;
    const image = props.iMage;
    const [input, setInput] = useState('');
    console.log(data);
    const close = (el)=>{
        let name = '';
        console.log(el.target.parentElement);
        name = el.target.parentElement;
        name.classList.toggle("hiddenDrop")
    }
    const addToThisCollection = async(el)=>{
        el.preventDefault();
        let collectionId = el.target.nextElementSibling.firstElementChild.innerText
        const newPicture = await axios.post(`https://image-galleryapi.onrender.com/${collectionId}/pics`,
        {
            "url":image
        });
        return newPicture;

    }
    const newCollectionW = (el)=>{
        console.log(el.target.parentElement.parentElement.nextElementSibling);
        let name = '';
        name = el.target.parentElement.parentElement.nextElementSibling;
        name.classList.toggle("active");
    }
    const closeNew = (el)=>{
        let name = el.target.parentElement.parentElement;
        
        if(el.target.classList.contains('submit')){
            console.log(el.target.parentElement.previousElementSibling.firstElementChild.value);
            name.classList.toggle("active");
        }
        else
            name.classList.toggle("active");
        
    }
    const addToCollection = async(el)=>{
        el.preventDefault();
        setInput('');
        const newCollection = await axios.post(`https://image-galleryapi.onrender.com/${input}`,
        {
            "name":input,
            "data":[
                {"url":image}
            ]
        });
        console.log(newCollection.data.collection)
        console.log(setDB)
        setDB((res)=>{return res.concat(newCollection.data.collection)})
        console.log(data);
        let name = el.target.parentElement.parentElement;        
        if(el.target.classList.contains('submit')){
            console.log(el.target.parentElement.previousElementSibling.firstElementChild.value);
            name.classList.toggle("active");
        }
        else
            name.classList.toggle("active");

        return newCollection;
        
    }

    const handleEdit = (event)=>{
        setInput(event.target.value);
        console.log(event.target.value);
    }

    return(
        <div className="popUpWindow hiddenDrop">
            <ul className='myOldCollection'>
                <li>
                    <button className='CreateNewCollection' onClick={newCollectionW}>Create A new Collection</button>
                </li>
                {data.map((val) => { 
                    return(
                    <li className = 'collectionList' key={val._id}>
                        <button onClick={addToThisCollection}>
                            <img src={val.data[0].url} alt="" />
                            <div className="details">
                                <h1>{val.name}</h1>
                            </div>     
                        </button>
                    </li>
                    )
                })}
            </ul>
            <div className='myNewCollection active'>
                <div className="myNewCollectionInput">
                    <input 
                        type="text" 
                        placeholder='collection name'
                        onChange={handleEdit}
                        value={input}/>
                </div>
                <div className="options">
                    <button className="cancel" onClick={closeNew}>cancel</button>
                    <button className="submit" onClick={addToCollection}>submit</button>
                </div>
            </div>
            <i className="fa-solid fa-xmark" onClick={close}></i>
        </div>
    )   
}