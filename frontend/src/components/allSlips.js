import { useState, useEffect } from "react";
import axios from "axios";

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
            <th scope="col" style={{ color: "white", fontSize: "18px" }}>
              id
            </th>
            <th scope="col" style={{ color: "white", fontSize: "18px" }}>
              Class
            </th>
            <th scope="col" style={{ color: "white", fontSize: "18px" }}>
              Mobile number
            </th>
            <th scope="col" style={{ color: "white", fontSize: "18px" }}>
              Add Student
            </th>
          </tr>
        </thead>
        <tbody>
          {slips &&
            slips.map((slip) => {
              return (
                <tr>
                  <td>
                    <a href={slip.slip} style={{ textDecoration: "none" }}>
                      {slip._id}
                    </a>
                  </td>
                  <td style={{ color: "white", fontSize: "18px" }}>
                    {slip.classId}
                  </td>
                  <td style={{ color: "white", fontSize: "18px" }}>
                    {slip.mobile}
                  </td>
                  <td>
                    <a className="btn btn-warning" href="#">
                      <i className="fas fa-edit"></i>&nbsp;Add Student
                    </a>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
