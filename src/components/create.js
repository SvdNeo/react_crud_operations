import React from 'react';
import { useState } from'react';
import axios from 'axios';
const Create = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        gender: ''
      });
      const header = {"Access-Control-Allow-Origin": "*"};

const handleSubmit = (e) => {
    e.preventDefault(); 
    axios.post ('https://65c4d786dae2304e92e37a01.mockapi.io/student_data/student_database', { 
        name: formData.name,
        email: formData.email,
        age: formData.age,
        gender: formData.gender
     ,header})
    }
        

  return (
    <div className="container">
      <h2>Create Student</h2>
      <form>
        <div className="mb-3 row">
          <label htmlFor="name" className="col-sm-2 col-form-label">Name:</label>
          <div className="col-sm-4">
            <input type="text" className="form-control" id="name" name="name" onChange={(e) => setFormData({...formData, name: e.target.value})} />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="email" className="col-sm-2 col-form-label">Email:</label>
          <div className="col-sm-4">
            <input type="email" className="form-control" id="email" name="email" onChange={(e) => setFormData({...formData, email: e.target.value})} />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="age" className="col-sm-2 col-form-label">Age:</label>
          <div className="col-sm-4">
            <input type="number" className="form-control" id="age" name="age" onChange={(e) => setFormData({...formData, age: e.target.value})} />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="gender" className="col-sm-2 col-form-label">Gender:</label>
          <div className="col-sm-4">
            <select className="form-select" id="gender" name="gender" onChange={(e) => setFormData({...formData, gender: e.target.value})}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        
        <div className="mb-3 row">
          <div className="col-sm-2"></div>
          <div className="col-sm-4">
            
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </form>
      
    </div>
    
  );
};

export default Create;
