// import React, { useState } from 'react'

// const Header = () => {
// const [ count , setCount] = useState(0);

// const onClickHandler =  () => {
//   setCount(count + 1)
// }
// const onClickHandlerr =  () => {
//   if (count > 0) {
//     setCount(count - 1)
//   }  
//  }




// return (
//   <div>
{/* <h1>{count}</h1>
      <button onClick={onClickHandler}> <h1>+</h1> </button>
      <button onClick={onClickHandlerr}> <h1>-</h1> </button> */}
{/* </div>
  )
}

export default Header; */}

import React from "react"
const Header = () => {
  const data = [{
    id: 101,
    name: 'Amit',
    joining_date: '01-06-2021',
    salary: 50000
  },
  {
    id: 102,
    name: 'Piyush',
    joining_date: '01-01-2019',
    salary: 60000

  },
  {
    id: 103,
    name: 'Meet',
    joining_date: '01-03-2020',
    salary: 25000
  },
  {

    id: 104,
    name: 'Jeet',
    joining_date: '01-12-2021',
    salary: 30000

  }
  ]
  return (
    <div>Header</div>
  )
}

export default Header




