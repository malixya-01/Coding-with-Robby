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
            <h2>All slips</h2>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Slip</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {students &&
                        students.map((student) => {
                            return (
                                <tr>
                                    <td>{student._id}</td>
                                    <td>
                                        <a className="btn btn-danger" href="#">
                                            <i className="fas fa-edit"></i>&nbsp;Delete Student
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