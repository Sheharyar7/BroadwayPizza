import React, { useState } from 'react';

const Userdata = ({ uemail, uphone, upassword, updaterow, deleterow }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="row my-4">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Email</th>
            <th>Phone</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{uemail}</td>
            <td>{uphone}</td>
            <td>
              {showPassword ? upassword : '****'}
              <button 
                className="btn btn-sm btn-link" 
                onClick={togglePasswordVisibility}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </td>
            <td>
              <button className="btn btn-info" onClick={updaterow}>Update</button>
              <button className="btn btn-danger mx-2" onClick={deleterow}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Userdata;
