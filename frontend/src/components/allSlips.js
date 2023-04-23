import { useState, useEffect } from "react";
import axios from 'axios';
import './styles/UpdateAdm.css'

export default function AllSlips() {

    //state
    const [slips, setSlips] = useState(null);

    //Use effect
    useEffect(() => {
        fetchSlips();
    }, []);

    const fetchSlips = async () => {
        //Fetch the Slips
        const res = await axios.get("http://localhost:3000/allSlips");
        //Set to state
        setSlips(res.data.payments);
    };

    return (
        <div className="container-md">
            <h2>All slips</h2>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col" style={{ fontFamily: "poppins", color: "white", fontSize: "25px" }} >id</th>
                        <th scope="col" style={{ fontFamily: "poppins", color: "white", fontSize: "25px" }}>Add Student</th>
                        <th scope="col" style={{ fontFamily: "poppins", color: "white", fontSize: "25px" }}>Invalid</th>
                    </tr>
                </thead>
                <tbody>

                    {slips &&
                        slips.map((slip) => {
                            return (
                                <tr>
                                    <td>
                                        <a href={slip.slip} style={{ textDecoration: 'none' }}>
                                            {slip._id}
                                        </a>
                                    </td>
                                    <td>
                                        <a href="#" style={{color: "white"}}>
                                            Add Student
                                        </a>
                                    </td>
                                    <td>
                                    <a href="#" style={{color: "white"}}>
                                            Invalid
                                        </a>
                                    </td>
                                </tr>
                            );
                        })}

                </tbody>
            </table>
        </div>
    );





};