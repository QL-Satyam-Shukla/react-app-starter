import { useState } from 'react'

const useCounter = (initialValue) => {
    console.log("initialValue",initialValue)
   const [count,setCount]=useState(initialValue)
   const increment=()=>{
       setCount((prev)=>prev+1)
   }
   const decrement=()=>{
       setCount((prev)=>prev-1)
   }
    const IncrementbyTan=()=>{
       setCount((prev)=>prev+10)
   }

   return[count,setCount,increment,decrement,IncrementbyTan]
}

export default useCounter