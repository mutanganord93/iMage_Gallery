
import { Folder } from "./Folder";
import { useState, useEffect } from "react";
import axios from "axios";
import {Edit} from './Edit';

import {Header} from './headerSection';


function App() {
  const [isLoading, setLoading] = useState(true);
  const [db, setDB] = useState([]);
  let [target,setTarget] = useState('');
  const [query, setQuery] = useState(''); 

  
  const randomFunc = (el)=>{
    setTarget(el.target.previousElementSibling.firstElementChild.innerText);
  }
  
  
  
  useEffect(() => {
    axios
      .get('/pin')
      .then((res) => {
        setLoading(false);
        setDB(res.data.collections);
        // console.log(res.data.collections);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="container">
          <Header setQuery={setQuery} query={query}></Header>
          <div className="galleryCollection" onClick={randomFunc}>
            <header>
              <div className="myProfile">
                <i className="fa-solid fa-user"></i>
              </div>
              <h1 className="name">Bill</h1>
            </header>
            <ul className="myCollections">
              {db.map((val) => {
                return <Folder data={val} setDB = {setDB}></Folder>;
              })}
            </ul>
            <Edit target={target}></Edit>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

