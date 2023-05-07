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
import Header from "./NewNavbar"
import CreatePost from "./storecomponant/storeporduct";
import Product from "./storecomponant/adminstore";
import Store from "./storecomponant/adminp";

//harith items
import Header1 from './videomanegement/header'
import AddVideos from './videomanegement/AddVideos';
import Allvideos from './videomanegement/AllVideos';
import UpdateVideos from './videomanegement/UpdateVideo'
import ShowGrade10Videos from './videomanegement/ShowGrade10Videos';
import ShowGrade11Videos from './videomanegement/ShowGrade11Videos';
import ShowGrade12Videos from './videomanegement/ShowGrade12Videos';
import ShowGrade13Videos from './videomanegement/ShowGrade13Videos';
import VideoSelectByGrade from './videomanegement/videoSelectbyGrade';


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

           
               <Route exact path="page" element={<Header1/>}/>
               <Route exact path="/show"  element={<Allvideos/>}/>
               <Route exact path="/addVideo"  element={<AddVideos/>}/>
               <Route exact path="/update1/:id" element={<UpdateVideos/>}/>
               <Route exact path="/grade10" element={<ShowGrade10Videos/>}/>
               <Route exact path="/grade11" element={<ShowGrade11Videos/>}/>
               <Route exact path="/grade12" element={<ShowGrade12Videos/>}/>
               <Route exact path="/grade13" element={<ShowGrade13Videos/>}/>
                <Route exact path="/selectGrade" element={<VideoSelectByGrade/>}/>

          </Routes>
        
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;