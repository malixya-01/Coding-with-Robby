import axios from 'axios';
import React, { useState, useEffect } from 'react';
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function AllData() {
  const [data, setData] = useState([]);
  const [searchItems, setSearchItems] = useState("");

  
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('http://localhost:3000/admin/');
        setData(response.data);
      } catch (error) {
        alert('Error fetching data', error);
        console.log(error);
      }
    }
    getData();
  }, []);

  const deleteAdmin = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/admin/delete/${id}`);
      setData(data.filter((item) => item._id !== id));
      // alert('Data deleted successfully');
      // window.location.reload(); // This line is not necessary
    } catch (error) {
      alert('Error deleting data', error);
      console.log(error);
    }
  };


  const filteredData = data.filter((item) => {
    return item.name.toLowerCase().includes(searchItems.toLowerCase());
  });

  const generateReport = () => {
    
    const doc = new jsPDF();
    const columns = [
      "ID",
      "Name",
      "Username",
      "Phone",
    ];
    const rows = data.map(
      ({
        aid,
        name,
        username,
        phone
      }) => [
        aid,
        name,
        username,
        phone
      ]
    );
    doc.autoTable({
      head: [columns],
      body: rows,
    });

    doc.save("AdminData.pdf");
      
  }

  return (
    <div className="p-4 bg-gradient-to-r from-gray-900 to-gray-700">
    <h3 style={{textAlign:"left", fontSize:"40px", marginTop: 30, marginLeft: 50, fontFamily:"poppins", fontWeight:"bold"}}>Employees</h3>
    <button className="new rounded-5" style={{alignItems:"right", marginTop: 10, marginLeft: 50,  marginBottom: 20}}>
               <a style={{textDecoration:"none", color:"white"}} href="/addAdm"> Add new Admin </a>
     </button>
     <button 
      className="new btn-secondary"
        style={{marginLeft:"50px", width:"50%"}}
        variant="outline-dark"
        onClick={generateReport}
      >
        Download Admin List
      </button>
      <div className="flex justify-center">
        <input type="text" placeholder='Search Admin by Name' className='w-[400px] p-2 mr-3 rounded bg-gray-800 text-black' onChange={(e)=>{setSearchItems(e.target.value)}}></input>
      </div>
      <br/>
      <br/>
      <table className="table table-striped table-dark bg-gradient-to-r from-gray-900 to-gray-700">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Phone</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.aid}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.phone}</td>
              <td>
                <a href={`../updateAdm/${item._id}`}>
                  <button className="btn btn-success btn-rounded">Update</button>
                </a>
              </td>
              <td>
                <button
                  className="btn btn-warning btn-rounded"
                  onClick={() => deleteAdmin(item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
