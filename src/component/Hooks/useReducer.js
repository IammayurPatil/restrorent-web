import React,{useReducer } from 'react'
import './style.css';

const reducer = (state , action) => {
    if(action.type === "INCR") {
        state = state + 1;
    }
    if(state > 0 && action.type === "DICR"){
        state = state - 1;
    }
    return state; 
}
const UseReducer = () => {
    const initialData = 10;
 const [state, dispatch] =  useReducer(reducer, initialData)
    

//   const [myNum, setMyNum] = UseState  (0);
  // console.log(myNum )
  return (
    
  <>
    <div className='center_div'>
    <p>{state}</p>
    
    <div className='button2' onClick={() => dispatch({type: "INCR"}) } >
    INCREMENT
    </div>
    <div className='button2' onClick={() => dispatch({type: "DICR"})}>
    DECREMENT
    </div>
    </div>
  </>  
    
  )
}

export default UseReducer;
