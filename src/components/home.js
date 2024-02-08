import React from 'react'
import { useState, useEffect } from'react'
import axios from 'axios'
const Home = () => {
    const [data, setData] = useState([])

    // Fetch data from API and store it in the state variable "data"
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://65c4d786dae2304e92e37a01.mockapi.io/student_data/student_database'
            )
            setData(result.data)
        }
        fetchData()
    }, [])
  return (
    <div>
    <h2>Student Database</h2>
    
   
    <table className="table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Age</th>
      <th>Gender</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  {data.map((item) => (
    <tbody key={item.id}>
      <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.age}</td>
        <td>{item.gender}</td>
        <td><button className="btn btn-success">Edit</button></td>
        <td><button className="btn btn-danger">Delete</button></td>
      </tr>
    </tbody>
  ))}
 
</table>

  </div>
  )
}

export default Home