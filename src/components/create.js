import React from 'react';

const Create = () => {
  return (
    <div className="container">
      <h2>Create Student</h2>
      <form>
        <div className="mb-3 row">
          <label htmlFor="name" className="col-sm-2 col-form-label">Name:</label>
          <div className="col-sm-4">
            <input type="text" className="form-control" id="name" name="name" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="email" className="col-sm-2 col-form-label">Email:</label>
          <div className="col-sm-4">
            <input type="email" className="form-control" id="email" name="email" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="age" className="col-sm-2 col-form-label">Age:</label>
          <div className="col-sm-4">
            <input type="number" className="form-control" id="age" name="age" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="gender" className="col-sm-2 col-form-label">Gender:</label>
          <div className="col-sm-4">
            <select className="form-select" id="gender" name="gender">
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
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Create;
