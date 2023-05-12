import { useState,useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts'; 
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default function Allnotices () {
    const[allData,setAlldata]=useState([])

    useEffect(()=>{
        function showAlldata(){
              axios.get('http://localhost:3000/notify/').then((res)=>{
                setAlldata(res.data)
              
              }).catch((err)=>{
                alert(err)
              })
        }

        showAlldata()
    },[])

    function deleteNotice(id){
        try{
            axios.delete('http://localhost:3000/notify/delete/'+id)
            window.location.reload();
        }catch(err){
           alert(err)
        }
    }
    
    const styles = {
        header: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 10]
        }
     };

     // function of downloard payment report
    function downloadReport() { 
        // Define the table headers and data 
        const tableHeaders = ['Notice Name', 'Date', 'Description of Notice']; 
        const tableData = allData.map(item => [item.name, item.date, item.discription]); 
        // Create a new document 
        const doc = pdfMake.createPdf({ content: [ 
            { text: "Notice Record Details", style: "header" },
            // Add the table to the document
             { table: { 
                headerRows: 1, 
                widths: ['', '', ''], 
                body: [ tableHeaders, ...tableData, ], 
            }, }, ], 
            styles:styles,
            pageSize: { width: 800, 
                // set custom width value 
                height: 1000, 
                // set custom height value
             },
            });
             // Save the PDF document 
             doc.getBlob((blob) => { 
                const url = URL.createObjectURL(blob); 
                const link = document.createElement('a'); 
                link.href = url; 
                link.download = 'notice_report.pdf'; 
                link.click(); 
            }); 
        }

   return(
       <div class="p-[30px] bg-gradient-to-r from-[#000000] bg-red-800 p-50 mt-5">
        <table class="table table bg-gradient-to-r from-[#000000] bg-red-800 p-50">
            <thead className="thead-dark">
            <tr>
                <th>
                    Name
                </th>
                <th>
                    Date
                </th>
                <th>
                    Diescreption
                </th>
                <th>
                    Action
                </th>
                <th>
                    Action
                </th>
            </tr>
            </thead>
            <tbody>
                {allData.map((item,index)=>(
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.date}</td>
                        <td>{item.discription}</td>
                        <td>
                            <Link to={'/update/'+item._id}>
                            <button class='text-white rounded bg-black px-6 py-2 hover:bg-red-900 p-28'>Update</button>
                            </Link>
                            </td>
                        <td><button class="btn btn-primary" onClick={(e)=>{deleteNotice(item._id)}}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        {/* <div>  */}
            <center>
                <p> </p>
                <button class="btn btn-primary" onClick={downloadReport}>Download Report</button>
            </center>
        {/* </div> */}
        
        </div>
    )
}