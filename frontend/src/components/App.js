import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';


import CreateNote from "./CreateNote";
import NavBar from "./NavBar";
import FetchNotes from "./FetchNotes";
import UpdateNote from "./UpdateNote";

function App() {
  
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar/>
        <div className='container'>
          <Routes>
            <Route path='/add' element={<CreateNote/>}/>
            <Route path='/' element={<FetchNotes/>}/>
            <Route path='/update/:id' element={<UpdateNote/>}/>

          </Routes>
        
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
