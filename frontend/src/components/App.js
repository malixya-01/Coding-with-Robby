import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';


import CreateNote from "./CreateNote";
import NavBar from "./NavBar";
import FetchNotes from "./FetchNotes";
import UpdateNote from "./UpdateNote";
import Payment from "./payment";
import Home from "./Home";
import AddProduct from "./storecomponant/addProduct";
import CreatePost from "./storecomponant/storeporduct";

function App() {
  
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar/>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/add' element={<CreateNote/>}/>
            <Route path='/get' element={<FetchNotes/>}/>
            <Route path='/update/:id' element={<UpdateNote/>}/>
            <Route path='/enroll/:id' element={<Payment/>}/>
            <Route path='/addstore' element={<AddProduct/>}/>
            <Route path='/create' element={<CreatePost/>}/>
          </Routes>
        
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
