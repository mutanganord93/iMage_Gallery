import {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
 


export const Header = (props)=>{

    
    const navigate = useNavigate();
    const navigateHome = ()=>{navigate("/")}
    const navigateSearch = ()=>{navigate(`/search/${props.query}`)}

    const searchClick = (el)=>{
        el.preventDefault();
        console.log(el.target.parentElement.previousElementSibling.firstElementChild.innerText);
    }

    const handleTask = (event)=>{   
        props.setQuery(event.target.value);
        console.log(props.query);
    }

    const handleKeyDown = (el)=>{
        // el.preventDefault();
        if (el.key === "Enter") {
            el.preventDefault();
            console.log(el.target);
        }
    }
    
    return (
        <div className="head">
                <i className="fa-solid fa-house" onClick={navigateHome}></i>
                <form action="" className="searchPic">
                    <div className="SearchBar__Container">
                        <input type="text" onChange={handleTask} placeholder="Search Pics ..." />
                    </div>
                    
                    <button className="SearchBar__button">
                        <i className="fa-solid fa-magnifying-glass" onClick={navigateSearch}></i>
                    </button>
                </form>
        </div>
    );
}

