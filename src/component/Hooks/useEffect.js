import React, { useState , useEffect } from 'react'
import './style.css';


const UseEffect = () => {
  const [myNum, setMyNum] = useState(0);
  // console.log(myNum )
  useEffect(
    () => {
     document.title = `Chats(${myNum})`;
      }
    // ,[]   this can be used for loding at first time only
  );
  return (
    
  <>
    <div className='center_div'>
    <p>{myNum}</p>
    
    <div className='button2' onClick={() => setMyNum(myNum + 1)}>
    INCREMENT
    </div>
    
    </div>
  </>  
    
  )
}

export default UseEffect;
