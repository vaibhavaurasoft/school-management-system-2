import React, { useState } from "react";
import "../userdetails/userprofile.css";

function Userprofile2() {
  const [name, setName] = useState("Vaibhav Rathore");
  const [classValue, setClassValue] = useState("10");
  const [email, setEmail] = useState("vaibhav@example.com");
  // Add more state variables for other fields as needed

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleClassChange = (e) => {
    setClassValue(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Add more change handlers for other fields as needed

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
                  <h6>{name}</h6>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-7" data-aos="fade-left">
            <table className="table table-borderless">
              <tbody>
                <tr>
                  <td className="tablefirst">Name</td>
                  <td>
                    <input
                      type="text"
                      value={name}
                      onChange={handleNameChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="tablefirst">Class</td>
                  <td>
                    <input
                      type="text"
                      value={classValue}
                      onChange={handleClassChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="tablefirst">Email</td>
                  <td>
                    <input
                      type="text"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </td>
                </tr>
                {/* Add more rows for other fields as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Userprofile2;
