
// import Practice from "./practice";
// function App() {
//   let name='maitri'
//   return (
//     <div className="App">
//     This is my App
//     <Practice name={name} course='react' />
//     </div>
//   );
// }
// export default App;
// import React from 'react'
// import Hooks from './hooks'

// function App() {
//   return (
//     <div>App
//         <Hooks/>
//     </div>
//   )
// }

// export default App
import React, {useState}from 'react'
import Register from './register'
import Login from './login'

function App() {
  const[isRegister,setisRegister]=useState(true)
  const isLogin=()=>{
    setisRegister(false)
  }
  const isRegister1=()=>{
    setisRegister(true)

  }
  

  return (
    <div>
        {/* <Login/> */}
        {isRegister?<Register isLogin={isLogin}/>:<Login isRegister1={isRegister1}/> }
    </div>
  )
}

export default App