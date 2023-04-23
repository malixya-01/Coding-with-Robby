import axios from 'axios';
import React,{useState} from "react";
import './styles/AddAdm.css'

function AddAdmin(){

    const [aid, setAid] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    function sendData(event){
        event.preventDefault();
        const newAdmin = {
            aid,
            name,
            username,
            password,
            phone
        }

        axios.post("http://localhost:3000/admin/add", newAdmin).then(()=>{
            alert("New admin added")
        }).catch((err)=>{
            alert(err)
        })
    }

    return(
        <div>
        <h3 style={{textAlign:"center", marginTop:40, fontFamily:"poppins", fontWeight:"bold"}}>Add New Admin</h3>
        <form className='d-flex justify-content-center align-items-center flex-column p-5 shadow-lg rounded-5' onSubmit={sendData}>
            <div className="form-group">
                <label for="name">ID</label>
                <input type="text" className="form-control" id="id" placeholder="Enter ID" required onChange={(event)=>{
                    setAid(event.target.value);
                }}/>
            </div>
            <div className="form-group">
                <label for="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter Name" required onChange={(event)=>{
                    setName(event.target.value);
                }}/>
            </div>
            <div className="form-group">
                <label for="username">Username</label>
                <input type="text" className="form-control" id="usernamename" placeholder="Enter Username" required onChange={(event)=>{
                    setUsername(event.target.value);
                }}/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password" required onChange={(event)=>{
                    setPassword(event.target.value);
                }}/>
            </div>
            <div className="form-group">
                <label for="name">Phone</label>
                <input type="text" className="form-control" id="phone" placeholder="7xxxxxxxx" pattern="[0-9]{9}"  required onChange={(event)=>{
                    setPhone(event.target.value);
                }}/>
            </div>
            <button type="submit" className="btnn btn-primary mt-3 rounded-5">ADD</button>
        </form>
        </div>
    )
}

export default AddAdmin;