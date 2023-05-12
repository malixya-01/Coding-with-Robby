import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./CSSFile/Star.css";
import CreateNote from "./CreateNote";
import NavBar from "./NavBar";
import FetchNotes from "./FetchNotes";
import UpdateNote from "./UpdateNote";
import Payment from "./payment";
import Home from "./Home";
import AllSlips from "./allSlips";
import ClassStudents from "./classStudents";
import AddAdmin from "./AddAdm";
import AllData from "./all";
import UpdateAdm from "./UpdateAdm";
import Header from "./NewNavbar";
import CreatePost from "./storecomponant/storeporduct";
import Product from "./storecomponant/adminstore";
import Store from "./storecomponant/adminp";
import Adminmain from "./MainAdmin";

import DisplayProduct from "./storecomponant/product";

import Allnotices from "./Notification/Allnotices";
import UpdateData from "./Notification/updateData";
import CounterFunction from "./Notification/CounterFunction";
import Addnotice from "./Notification/Addnotice";
import CounterClass from "./Notification/CounterClass";

import AllStudents from "./classStudents";
import AddClass from "./TimeTable/AddClass";

import DaySchedule from "./TimeTable/DaySchedule";
import AllClasses from "./TimeTable/AllClasses";
import TimeTable from "./TimeTable/TimeTable";
import UpdateClass from "./TimeTable/UpdateClass";
import ReviewForm from "./storecomponant/review";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Adminmain />} />
            <Route path="/add" element={<CreateNote />} />
            <Route path="/get" element={<FetchNotes />} />
            <Route path="/update/:id" element={<UpdateNote />} />
            <Route path="/enroll/:id" element={<Payment />} />

            <Route path="/addAdm" element={<AddAdmin />} />
            <Route path="/allAdm" element={<AllData />} />
            <Route path="/updateAdm/:id" element={<UpdateAdm />} />

            <Route path="/create" element={<CreatePost />} />
            <Route path="/admin" element={<Product />} />
            <Route path="/getpro" element={<Store />} />

            <Route path="/mainadmin" element={<Adminmain />} />
            <Route path="/Dproduct" element={<DisplayProduct />} />

            <Route exact path="/allNotice" element={<Allnotices />} />
            <Route exact path="/update/:id" element={<UpdateData />} />
            <Route exact path="/countFunction" element={<CounterFunction />} />
            <Route exact path="/addNotice" element={<Addnotice />} />
            <Route exact path="/counterClass" element={<CounterClass />} />

            <Route path="/classStu" element={<AllStudents />} />

            <Route path="/addtime" element={<AddClass />} />
            <Route path="/alltime" element={<AllClasses />} />
            <Route path="/Timetable" element={<TimeTable />} />
            <Route path="/schedule" element={<DaySchedule />} />
            <Route path="/getTime/:id" element={<UpdateClass />} />
            <Route path="/updateTime/:id" element={<UpdateClass />} />

           
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
