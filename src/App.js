import "./App.css";
import "./CollectionX.css";
import "./Collections.css";
import Homepage from './Homepage';
import Search from './Search';
import Collections from './Collections';
import CollectionX from './CollectionX';
import {Routes, Route} from 'react-router-dom';


const App = () =>{

  return(
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/search/:val' element={<Search/>}></Route>
      <Route path='/collections' element={<Collections/>}></Route>
      <Route path='/collections/:collection_id' element={<CollectionX/>}></Route>
    </Routes>
  )
}


export default App;