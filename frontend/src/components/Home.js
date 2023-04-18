import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function Home() {

    //State
    const [classes, setClasses] = useState(null);

    //Use effect
    useEffect(() => {
        fetchClasses();
    }, []);

    const fetchClasses = async () => {
        //Fetch the classes
        const res = await axios.get("http://localhost:3000/getClasses");
        //Set to state
        setClasses(res.data.classes);
    };


    return (
        <div className="container-md">
            <h2>Classes:</h2>
            {classes &&
                classes.map((theClass) => {
                    return (
                        <div key={theClass._id}>
                            <h6>{theClass.title}</h6>
                            <a href={`/enroll/${theClass._id}`}>
                                <button type="button" class="btn btn-warning">
                                    Enroll
                                </button>
                            </a>
                        </div>
                    );
                })}
        </div>
    );
}