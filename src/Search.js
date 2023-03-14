// import "./App.css";
import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Popup } from "./Popup";
import useDataApi from "./dataFetch";

function Search(){
    const {val} = useParams()
    // console.log(`query parameter ${val}`)
    const [query, setQuery] = useState(val);
    const [iMage, setImage] = useState("");
    const url = `https://weatheappdesignapi.onrender.com/pictures?query=${val}`
    const { data, isLoading, isError } = useDataApi(url);
    const [Hovering, IsHovering] = useState(false);
    const [db, setDB] = useState([]);
    const navigate = useNavigate();

    const goToPage = (go)=>{
        
    }

    const handleClick = (el) => {
        expand(el);
        saveImage(el);
    }
    const expand = (el) => {
        let name = "";
        // console.log(el.target.classList);
        if (el.target.classList.contains("popup")) {
            name =
                el.target.parentElement.parentElement.parentElement.nextElementSibling;
            name.classList.toggle("hiddenDrop");
        }
    };
    const changeQuery = (el) => {
        el.preventDefault();
        setQuery(el.target.value);
    };

    const saveImage = (el) => {
        el.preventDefault();
        let val = "";
        val = el.target.parentElement.previousElementSibling.src;
        setImage(val);
        // console.log(val);
    }

    useEffect(() => {
        axios
            .get('https://weatheappdesignapi.onrender.com/pin/')
            .then((res) => {
                setDB(res.data.collections);

            })
            .catch((error) => {
                // console.log(error);
            });
    }, []);

    const toggleHover = () => {
        IsHovering(!Hovering);
    };

    return (
        <>
            {isError && <div>Something Went Wrong...</div>}
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div className="mainContainer">
                    <div className="gridContainer">
                        <header>
                            <h1 className="name">iMAGE Gallery</h1>
                            <button className="myProfile" onClick={()=>{navigate("/collections")}}>
                                <i className="fa-solid fa-user"></i>
                            </button>
                            <form action="" className="searchPic">
                                <div className="SearchBar__Container">
                                    <input 
                                    type="text" 
                                    placeholder="Search Pics ..." 
                                    onChange={changeQuery}/>
                                </div>
                                <button className="SearchBar__button" onClick={()=>navigate(`/search/${query}`)}>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </form>
                        </header>
                        {data.map((ele) => {
                            return (
                                <div key={ele.id} className="imageWidth">
                                    <img src={ele.urls.small} alt="" />
                                    <div className="iCons">
                                        <i className="fa-regular fa-heart"></i>
                                        <button className="popup" onClick={handleClick}>
                                            Save
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <Popup data={db} setDB={setDB} iMage={iMage}></Popup>
                </div>
            )}
        </>
    );
}

export default Search;