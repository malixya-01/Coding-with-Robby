import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';


import CreateNote from "./CreateNote";
import NavBar from "./NavBar";
import FetchNotes from "./FetchNotes";
import UpdateNote from "./UpdateNote";
import Payment from "./payment";
import Home from "./Home";
import AllSlips from "./allSlips"
import ClassStudents from "./classStudents"
import AddAdmin from "./AddAdm";
import AllAdm from "./AllAdm"
import UpdateAdm from "./UpdateAdm"
<<<<<<< HEAD
import Header from "./NewNavbar"
=======
import CreatePost from "./storecomponant/storeporduct";
import Product from "./storecomponant/adminstore";
import Store from "./storecomponant/adminp";
>>>>>>> 65b0040b7ee8a61167a2151295492ddf930fe8e7

function App() {
  
  return (
    <div className="App">

      <BrowserRouter>
        <Header/>
        <div className='container'>
          <Routes>
            <Route path='/' element={<ClassStudents/>}/>
            <Route path='/add' element={<CreateNote/>}/>
            <Route path='/get' element={<FetchNotes/>}/>
            <Route path='/update/:id' element={<UpdateNote/>}/>
            <Route path='/enroll/:id' element={<Payment/>}/>

            <Route path='/addAdm' element={<AddAdmin/>}/>
            <Route path='/allAdm' element={<AllAdm/>}/>
            <Route path='/updateAdm/:id' element={<UpdateAdm/>}/>

            <Route path='/create' element={<CreatePost/>}/>
            <Route path='/create/admin' element={<Product/>}/> 
            <Route path='/create/getpro' element={<Store/>}/>

          </Routes>
        
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;