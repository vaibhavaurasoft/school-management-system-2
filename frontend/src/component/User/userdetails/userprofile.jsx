import React from "react";
import "./userprofile.css";

function Userprofile() {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-evenly p-5 mainuserprofile">
          <div className="col-3" data-aos="fade-right" data-aos-duration="2000">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBvxuhpUURCevNuacU4jg5F193kI79qfgUA&usqp=CAU"
                alt="user"
                className="userimage"
              />
            </div>
            <div className="mt-2 ps-5">
              <table className="table table-borderless pt-5">
                <tbody className="text-start">
                  <h6>Vaibahv Rathore</h6>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-7" data-aos="fade-left">
            <table className="table table-borderless">
              <tbody>
                <tr>
                  <td className="tablefirst" >Name </td>
                  <td>
                     Vaibhav Rathore 
                  </td>
                </tr>
                <tr>
                  <td className="tablefirst" >Class</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td className="tablefirst" >Email</td>
                  <td>vaibhav@example.com</td>
                </tr>
                <tr>
                  <td className="tablefirst" >Password</td>
                  <td>********</td>
                </tr>
                <tr>
                  <td className="tablefirst" >Role</td>
                  <td>student</td>
                </tr>
                <tr>
                  <td className="tablefirst" >Age</td>
                  <td>17</td>
                </tr>
                <tr>
                  <td className="tablefirst" >Address</td>
                  <td>123 Main St</td>
                </tr>
                <tr>
                  <td className="tablefirst" >Mobile Number</td>
                  <td>9876543210</td>
                </tr>
                <tr>
                  <td className="tablefirst" >Gender</td>
                  <td>Male</td>
                </tr>
                <tr>
                  <td className="tablefirst" >Previous Schools</td>
                  <td>ABC School</td>
                </tr>
                <tr>
                  <td className="tablefirst" >Nationality</td>
                  <td>Indian</td>
                </tr>
                <tr>
                  <td className="tablefirst" >Image</td>
                  <td>student123.jpg</td>
                </tr>
                <tr>
                  <td className="tablefirst" >Student ID</td>
                  <td>2023001</td>
                </tr>
                <tr>
                  <td className="tablefirst" >Section</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td className="tablefirst" >Mother's Name</td>
                  <td>Jane</td>
                </tr>
                <tr>
                  <td className="tablefirst" >Father's Name</td>
                  <td>John</td>
                </tr>
                <tr>
                  <td className="tablefirst" >Medical Condition</td>
                  <td>Asthma</td>
                </tr>
                <tr>
                  <td className="tablefirst" >Enrollment Date</td>
                  <td>2023-06-04</td>
                </tr>
                <tr>
                  <td className="tablefirst" >Subject 1</td>
                  <td>Mathematics</td>
                </tr>
                <tr>
                  <td className="tablefirst" >Date of Birth</td>
                  <td>2006-08-15</td>
                </tr>
                <tr>
                  <td className="tablefirst" >Previous School</td>
                  <td>XYZ School</td>
                </tr>
                <tr>
                  <td className="tablefirst" >Last Class Marks</td>
                  <td>Grade A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Userprofile;
