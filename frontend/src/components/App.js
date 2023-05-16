import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./CSSFile/Star.css";
import CreateNote from "./CreateNote";
import NavBar from "./NavBar";
import FetchNotes from "./FetchNotes";
import UpdateNote from "./UpdateNote";
import Payment from "./payment";
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

import AddVideos from "./videomanegement/AddVideos";
import Allvideos from "./videomanegement/AllVideos";
import UpdateVideos from "./videomanegement/UpdateVideo";
import ShowGrade10Videos from "./videomanegement/ShowGrade10Videos";
import ShowGrade11Videos from "./videomanegement/ShowGrade11Videos";
import ShowGrade12Videos from "./videomanegement/ShowGrade12Videos";
import ShowGrade13Videos from "./videomanegement/ShowGrade13Videos";
import VideoSelectByGrade from "./videomanegement/videoSelectbyGrade";
import GraphAboutViews from "./videomanegement/GraphAboutViews";

import PurchaseClass from "./PaymentComponents/PurchaseClass";
import Payments from "./allSlips";
import RequestedClasses from "./PaymentComponents/RequestedClasses";
import UpdatePurchase from "./PaymentComponents/UpdatePurchase";

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

            <Route exact path="/show" element={<Allvideos />} />
            <Route exact path="/addVideo" element={<AddVideos />} />
            <Route exact path="/update1/:id" element={<UpdateVideos />} />
            <Route exact path="/grade10" element={<ShowGrade10Videos />} />
            <Route exact path="/grade11" element={<ShowGrade11Videos />} />
            <Route exact path="/grade12" element={<ShowGrade12Videos />} />
            <Route exact path="/grade13" element={<ShowGrade13Videos />} />
            <Route exact path="/selectGrade" element={<VideoSelectByGrade />} />
            <Route exact path="/graph" element={<GraphAboutViews />} />

            <Route exact path="/purchase" element={<PurchaseClass />} />
            <Route exact path="/purchase/:id" element={<PurchaseClass />} />
            <Route exact path="/payments" element={<Payments />} />
            <Route exact path="/mypayments" element={<RequestedClasses />} />
            <Route exact path="/updatepurchase/:id" element={<UpdatePurchase />} />



          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
