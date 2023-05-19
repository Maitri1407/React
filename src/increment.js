import React from 'react'

function Increment() {
    const[val,setval]=React.useState(0)
    const handleButtonClick=(type)=>{
        console.log("Clicked",type)
        if(type==='decrement'){
        setval(val-1)
        }
        else if(type==='increment'){
            setval(val+1)
        }
    }
  return (
    <div>
        <button type="button" className="btn btn-primary" 
         onClick={()=>handleButtonClick("decrement")}
                >Decrement 
              </button>
              <button type="button" className="btn btn-primary" 
         onClick={()=>handleButtonClick("increment")}
                >Increment 
              </button>
              <h3>Value: {val}</h3>
    </div>
  )
}

export default Increment