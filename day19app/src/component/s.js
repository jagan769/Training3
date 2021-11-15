import {useState} from "react";
import '../index.css';

import ReactDOM from "react-dom";

function Student(){   
    const [sid,setId] = useState("S1");
    const [sname,setName] = useState("Amy");
    const [saddress,setAddress] = useState("Ancheri,Thrissur");
    const [scourse,setCourse] = useState("BE");

    return(
        <>
        <table className="table">
            <thead className="table-header">
                <tr>
                  <th colSpan="4"><h1>...Student Information...</h1></th> 
                  <th>ID</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Course</th>
                </tr>  
            </thead>
            <tr className="table-body">
                <td>{sid}</td>
                <td>{sname}</td>
                <td>{saddress}</td>
                <td>{scourse}</td>
            </tr>
            <tr className="table-body">
                <td><input id="sid" type="text"></input></td>
                <td><input id="sname" type="text"></input></td>
                <td><input id="saddress" type="text"></input></td>
                <td><input id="scourse" type="text"></input></td>
            </tr>
            <tr className="table-body">
                <td colSpan="4">
                    <button onClick={() =>{
                        setId(document.getElementById("sid").value);
                        setName(document.getElementById("sname").value);
                        setAddress(document.getElementById("saddress").value);
                        setCourse(document.getElementById("scourse").value);
                    }}
                    type="button" className="cust-btn">Update</button>
                </td>
            </tr>
        </table>
        </>
    )
}
export default Student;