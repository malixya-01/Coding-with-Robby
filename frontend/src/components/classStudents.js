import { useState, useEffect } from "react";
import axios from 'axios';

export default function AllStudents() {

    //state
    const [students, setstudents] = useState(null);

    const classId = "643e88e801c4d00425501093";
    //Use effect
    useEffect(() => {
        fetchstudents();
    }, []);

    const fetchstudents = async () => {
        //Fetch the students
        const res = await axios.get(`http://localhost:3000/getStudents/${classId}`);
        //Set to state
        setstudents(res.data.students);
    };

    /* const fetchTheStudents = async () => {
    //Fetch students
    const res = await axios.get("");
    //Set to state
    setStudent(res.data.#);
    }; */

    /* const fetchTheClass = async () => {
        //Fetch the classs
        const res = await axios.get("");
        //Set to state
        setTheClass(res.data.#);
    }; */

    return (
        <div className="container-md">
            <h2>All Students - 2024AL</h2>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col" style={{ fontFamily: "poppins", color: "white", fontSize: "25px" }}>StdId</th>
                        <th scope="col" style={{ fontFamily: "poppins", color: "white", fontSize: "25px" }}>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {students &&
                        students.map((student) => {
                            return (
                                <tr>
                                    <td style={{ color: "white", textDecoration: 'none' }}>{student._id}</td>
                                    <td>
                                        <a href="#" style={{ color: "white", textDecoration: 'none' }}>
                                            Delete
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