import React ,{useState} from 'react'

const PracticeData = () => {
//  const [first, setfirst] = useState(0);

//  const tap = () => {

//   setfirst(first + 10);
//   console.log(setfirst);
const [count, setCount] = useState(0);

useEffect(() => {
  alert(`You clicked ${count} times`)
});

const btn = () => {
  setCount(count + 1)
 }
  return (
    <div>
      {/* <h1>{first}</h1>
      <button onClick={tap}>Click Me</button> */}
      <h3> You have clicked {count} times  
      <button onClick={ btn } >
        Click me
      </button>
      </h3>
   </div>
  )
}

export default PracticeData