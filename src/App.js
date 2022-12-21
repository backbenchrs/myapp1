import React from 'react'
import data from './data.json'
const App = () => {
  let filter = data.filter((a) => a.salary > 35000)

  let newdata = filter.reduce (( acc , bcc) =>{
    return acc += bcc.bonus 
  },0)    
  // console.log(newdata);
  let medicineData = [
    {
      id: 101,
      name: 'Abacavir',
      quantity: 25, 
      price: 150,
      expiry: 2022,     
      status: "true"
    },
    { 
      id: 102,
      name: 'Eltrombopag',
      quantity: 90,
      price: 550,
      expiry: 2021,
      status: "true"
    },
    {
      id: 103,
      name: 'Meloxicam',
      quantity: 85,
      price: 450,
      expiry: 2025,
      status: "false"
    },
    {
      id: 104,
      name: 'Allopurinol',
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: "true"
    },
    {
      id: 105,
      name: 'Phenytoin',
      quantity: 63,
      price: 250,
      expiry: 2021,
      status: "false"
    }
  ];
  return (
    <div key={Math.random()}>
      <table border={1} key={Math.random()}>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>quantity</th>
          <th>price</th>
          <th>expiry</th>
          <th>status</th>
        </tr>

        {
          medicineData.map((i) => {
            return (
              <tr>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.quantity}</td>
                <td>{i.price}</td>
                <td>{i.expiry}</td>
                <td>{i.status}</td>
              </tr>)
          })
        }
      </table>


      <table border={1} key={Math.random()}>
        <tr>
          <th>name</th>
          <th>age</th>
          <th>salary</th>
          <th>bonus</th>
          <th>status</th>
        </tr>
        {
          filter.map((a) => {

            return (
              <tr>
                <td>{a.name}</td>
                <td>{a.age}</td>
                <td>{a.salary}</td>
                <td>{a.bonus}</td>
                <td>{a.status}</td>
              </tr>
            )
          } )
    
        }
          <tr>
          <td colSpan={3}>Total</td>
          {/* <td></td> */}
          {/* <td></td> */}
          <td colSpan={2}>{newdata}</td>
          {/* <td></td> */}
        </tr>
       
      </table>
    </div>
  )
}

export default App;