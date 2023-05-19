import React ,{useState}from "react";

function Login(props) {
  console.log(props)
  const[val,setval]=useState()
  const[pass,setpass]=useState()
  const[click,setclick]=useState()

  const handleLogin=()=>{
    props.isRegister()
  }
  
  const textchange=(e)=>{
    console.log(e.target.value)
    setval(e.target.value)
  }
  
  const handlepasschange=(e)=>{
    console.log(e.target.value)
    setpass(e.target.value)
  }

  const handleclick=()=>{
    let email=localStorage.getItem('email')
    let pass=localStorage.getItem('pass')
    if(email===val){
      alert('Login successful')
    }
    else{
      alert('Login Failed')
    }

  }
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
        <div className="container" style={{ width: 400, padding: 20 }}>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="card rounded-3 text-black">
              <div className="col-lg-12">
                <form>
                  <p></p>
                  <h2 style={{ textAlign: "center" }}>Login here</h2>
                  <p />
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example11">
                     
                      Username
                    </label>
                    <input
                      type="email"
                      id="form2Example11"
                      className="form-control"
                      placeholder="Phone number or email address"
                      onChange={(e)=>textchange(e)}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example22"
                    onChange={(e)=>handlepasschange(e)}>
                      Password
                    </label>
                    <input
                      type="password"
                      id="form2Example22"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="text-center pt-1 mb-5 pb-1">
                    <button
                      className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                      type="button"
                      onClick={()=>{handleclick()}}>
              
                      Log in
                    </button>
                    <br />
                    <a className="text" href="#!">
                      Forgot password?
                    </a>
                  </div>
                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Don't have an account?</p>
                    <button type="button" className="btn btn-outline-primary"
                    onClick={()=>{handleLogin()}}>
                      
                      Create new
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
