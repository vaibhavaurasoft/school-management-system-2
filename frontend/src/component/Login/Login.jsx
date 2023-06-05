import React, { useState } from "react";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-4 leftSideBar d-flex flex-column p-5 text-center align-items-center">
            <div>
              <img
                src="/SMSLogo.png"
                alt="Logo"
                height="300px"
                data-aos="fade-right"
                data-aos-duration="2000"
              />
            </div>
            <h2
              className="text-white"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              School Management System
            </h2>
          </div>
          <div className="col-8 rightSideBar d-flex flex-column gap-5 align-items-center justify-content-center text-center">
            <h2 data-aos="fade-right" data-aos-duration="2000">
              Welcome to AuraSoft School System
            </h2>
            <form
              data-aos="fade-left"
              onSubmit={handleSubmit}
              data-aos-duration="2000"
            >
              <input
                type="email"
                className="border-0 border-bottom inputfiled"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <input
                type="password"
                className="border-0 border-bottom inputfiled"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <div data-aos="fade-up" data-aos-duration="2000">
                <button type="submit" className="LoginBtn btn-warning">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
