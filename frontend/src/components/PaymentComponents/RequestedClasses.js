import { useState, useEffect } from "react";
import axios from 'axios';
import { Button } from "react-bootstrap";

export default function RequestedClasses() {

    //state
    const [slips, setSlips] = useState(null);

    //Use effect
    useEffect(() => {
        fetchSlips();
    }, []);

    const fetchSlips = async () => {
        //Fetch the Slips
        const res = await axios.get("http://localhost:3000/mySlips");
        //Set to state
        console.log(res);
        setSlips(res.data.slips);
    };

    const deleteRecord = async (id) => {
        //delete a Slips
        const res = await axios.delete(`http://localhost:3000/deleteSlip/${id}`);
        window.location.reload();        
    };


    

    return (
        <div className="container-md">
            <h2>Requested Classes</h2>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col" style={{color:"white", fontSize:"25px"}}>Slip</th>
                        <th scope="col" style={{color:"white", fontSize:"25px"}}>Options</th>
                    </tr>
                </thead>
                <tbody>

                    {slips &&
                        slips.map((slip) => {
                            return (
                                <tr>
                                    <td>
                                        <a href={slip.slip} style={{ textDecoration: 'none' }}>
                                            Click here to view slip
                                        </a>
                                    </td>
                                    <td>
                                        
                                        <Button className="btn btn-warning">
                                                    Update
                                        </Button>                               
                                        &nbsp;&nbsp;                           
                                        <Button  className="btn btn-danger" onClick={() =>deleteRecord(slip._id)}>Delete</Button>
                                      
                                    </td>
                                </tr>
                            );
                        })}

                </tbody>
            </table>
        </div>
    );





};