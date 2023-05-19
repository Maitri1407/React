import React, { useState } from "react";

function Register(props) {
  console.log(props);
  const [val, setval] = useState();
  const [lname, setLName] = useState();
  const [email, setEmail] = useState();
  const [pass, setpass] = useState();

  const handleLogin = () => {
    props.isLogin();
    localStorage.setItem('email',email)
    localStorage.setItem('password',pass)
  };

  const textchange = (e) => {
    console.log(e.target.value);  
    setval(e.target.value);
  };

  const handleLNamechange = (e) => {
    console.log(e.target.value);
    setLName(e.target.value);
  };

  const handleEmailchange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlepasschange = (e) => {
    console.log(e.target.value);
    setpass(e.target.value);
  };
  return (
    <div
      style={{
        backgroundImage:
          'url("https://www.pixelstalk.net/wp-content/uploads/2016/05/Samsung-Backgrounds-Images-Download.jpg")',
      }}
    >
      <div
        className="main"
        style={{
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div className="container " style={{ width: 500, padding: 20 }}>
          <div className="card" style={{ padding: 20, borderRadius: 15 }}>
            <div className="card-body ">
              <h2
                className="text-uppercase text-center mb-5"
                style={{ padding: 20 }}
              >
                Register Here
              </h2>
              <form className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="firstname" className="form-label">
                    First Name
                  </label>
                  <input
                    type="firstname"
                    className="form-control"
                    id="firstname"
                    onChange={(e) => textchange(e)}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastname" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="lastname"
                    className="form-control"
                    id="lastname "
                    onChange={(e) => handleLNamechange(e)}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    onChange={(e) => handleEmailchange(e)}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputPassword4" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                    onChange={(e) => handlepasschange(e)}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="number" className="form-label">
                    Mobile Number
                  </label>
                  <input type="number" className="form-control" id="number" />
                </div>
                <div className="col-md-6">
                  <h6 className="mb-2 pb-1">Gender:</h6>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="femaleGender"
                      defaultValue="option1"
                    />
                    <label className="form-check-label" htmlFor="femaleGender">
                      Female
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="maleGender"
                      defaultValue="option2"
                    />
                    <label className="form-check-label" htmlFor="maleGender">
                      Male
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <label>Date of birth </label>
                  <input type="date" name="date of birth" />
                </div>
              </form>
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleLogin()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
