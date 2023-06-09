import React from "react";
import "./alluser.css";

function Alluser() {
  return (
    <>
      <div className="container-fluid mianalladminlist2 ">
        <div className="container  ">
          <div className="row justify-content-evenly ">
            {/* left side */}
            <div className="col-3 leftsidebar2 mt-2 ">
              <div className="alladminlist2 p-2">
                <h3>all admin</h3>
                {/* card 1 */}
                <div className="d-flex detailacard2 align-items-center ">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBvxuhpUURCevNuacU4jg5F193kI79qfgUA&usqp=CAU"
                    alt="admin"
                    className="adminimage2"
                  />
                  <div className="adminnamedetails2 d-flex flex-column  ">
                    <h5>Vaibhav Rathore</h5>
                    <h5>Principal</h5>
                  </div>
                </div>{" "}
                {/* card 2 */}
                <div className="d-flex detailacard2 align-items-center ">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBvxuhpUURCevNuacU4jg5F193kI79qfgUA&usqp=CAU"
                    alt="admin"
                    className="adminimage2"
                  />
                  <div className="adminnamedetails2 d-flex flex-column  ">
                    <h5>Vaibhav Rathore</h5>
                    <h5>Teacher</h5>
                  </div>
                </div>{" "}
                <div className="d-flex detailacard2 align-items-center ">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBvxuhpUURCevNuacU4jg5F193kI79qfgUA&usqp=CAU"
                    alt="admin"
                    className="adminimage2"
                  />
                  <div className="adminnamedetails2 d-flex flex-column  ">
                    <h5>Vaibhav Rathore</h5>
                    <h5>Student</h5>
                  </div>
                </div>{" "}
                <div className="d-flex detailacard2 align-items-center ">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBvxuhpUURCevNuacU4jg5F193kI79qfgUA&usqp=CAU"
                    alt="admin"
                    className="adminimage2"
                  />
                  <div className="adminnamedetails2 d-flex flex-column  ">
                    <h5>Vaibhav Rathore</h5>
                    <p>Student</p>
                  </div>
                </div>
              </div>
            </div>
            {/* right side */}
            <div className="col-8 p-5 d-flex  mt-2 profile2">
              <div className="">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBvxuhpUURCevNuacU4jg5F193kI79qfgUA&usqp=CAU"
                  alt="user"
                  className="userimage2"
                />
              </div>
              <div className="text-center pt-2">
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <td className="tablefirst2">Name </td>
                      <td>Vaibhav Rathore</td>
                    </tr>
                    <tr>
                      <td className="tablefirst2">Class</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td className="tablefirst2">Email</td>
                      <td>vaibhav@example.com</td>
                    </tr>
                    <tr>
                      <td className="tablefirst2">Password</td>
                      <td>********</td>
                    </tr>
                    <tr>
                      <td className="tablefirst2">Role</td>
                      <td>student</td>
                    </tr>
                    <tr>
                      <td className="tablefirst2">Age</td>
                      <td>17</td>
                    </tr>
                    <tr>
                      <td className="tablefirst2">Address</td>
                      <td>123 Main St</td>
                    </tr>
                    <tr>
                      <td className="tablefirst2">Mobile Number</td>
                      <td>9876543210</td>
                    </tr>
                    <tr>
                      <td className="tablefirst2">Gender</td>
                      <td>Male</td>
                    </tr>
                    <tr>
                      <td className="tablefirst2">Previous Schools</td>
                      <td>ABC School</td>
                    </tr>
                    <tr>
                      <td className="tablefirst2">Nationality</td>
                      <td>Indian</td>
                    </tr>
                    <tr>
                      <td className="tablefirst2">Image</td>
                      <td>student123.jpg</td>
                    </tr>
                    <tr></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Alluser;
