import React from 'react'

function Hooks() {
    const[val,setval]=React.useState()
    const handleButtonClick=(type)=>{
        console.log("Clicked",type)
        if(type==='red'){
            setval('Red')
        }
        else if (type==='yellow'){
        setval('Yellow')}
        else if (type==='orange'){
            setval('Orange')
        }
    }

    return (
    <div>
         <button type="button" className="btn btn-primary" 
         onClick={()=>handleButtonClick("red")}
                >Red
              </button>
              <button type="button" className="btn btn-primary" 
         onClick={()=>handleButtonClick("yellow")}
                >Yellow
              </button>
              <button type="button" className="btn btn-primary" 
         onClick={()=>handleButtonClick("orange")}
                >Orange
              </button>
              <h3>Color: {val}</h3>
    </div>
  )
}

export default Hooks