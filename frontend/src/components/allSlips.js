import { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function AllSlips() {
  //state
  const [slips, setSlips] = useState([]);

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

  const addEnrollment = async (e) => {
    e.preventDefault();

    //Create the note
    const res = await axios.post("http://localhost:3000/enrollStudent/");
  };

  const generateReport = () => {
    const doc = new jsPDF();
    const columns = ["User", "Class","Mobile"];
    const rows = slips.map(({ user, classId, mobile }) => [
      user,
      classId,
      mobile,
    ]);
    doc.autoTable({
      head: [columns],
      body: rows,
    });

    doc.save("Applicants.pdf");
  };

  return (
    <div className="container-md">
      <h2>All slips</h2>
      <button className="btn btn-warning" onClick={generateReport}>
        Report
      </button>

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
                    <button
                      className="btn btn-warning"
                      onClick={() => addEnrollment(slip.classId)}
                    >
                      Add Student
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
