import React, { useState , useEffect } from 'react'

 const PracticeData = () => {
//   //  const [first, setfirst] = useState(0);
const [array, setArray] = useState(['a','b','c','d','e']);
const [count, setCount] = useState(0);

const btn = () => {
  setCount(count + 1);
}

useEffect(() => {

  
  return () => {
    alert('Do you really wanna close this tab')
      
  }
}, [])

//   //  const tap = () => {

//   //   setfirst(first + 10);
//   //   console.log(setfirst);
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     prompt(`You clicked {count} times`)
//   });

 
  return (
     <div>
      {/* <h1>{first}</h1>
//       <button onClick={tap}>Click Me</button> */}
       <h3> {array[count]} 
         <button onClick={btn}> Click me </button>
       </h3>
    
    </div>
  )
 }

 export default PracticeData

// import React, { useEffect, useState } from "react";
 
// export const Test = () => {
//   const [value, setValue] = useState(false);
 
//   useEffect(() => {
//     console.log("effect");
//   });
 
//   const clickHandler = () => {
//     setValue((prevState) => !prevState);
//   };
 
//   return (
//     <div>
//       {/* <h1>{value ? "hello" : "hey"}</h1>
//       <button onClick={clickHandler}>Click me</button> */}
//     </div>
//   )};