import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Axios from 'axios';


const Register = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    username: '',
    password: '',
    mobile: ''
  })
  const changeHandle = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }
  const submitData = async (e) => {
    e.preventDefault();
    try {
      const data = {
        username: userData.username,
        firstName: userData.firstName,
        password: userData.password,
        mobile: userData.mobile
      }
      const res = await Axios.post('/users/register', data)
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="container">
      <div className="row" style={{ paddingTop: '50px' }}>
        <div className="col-md-5 m-auto">
          <div className="card mt-5 shadow-sm mb-5">
            <h3 className="card-header bg-dark text-center text-light">Register</h3>
            <div className="card-body">
              <form onSubmit={(e) => submitData(e)}>
                <div className="form-group">
                  <label className="col-form-label" htmlFor="firstName">First Name</label>
                  <input onFocus='true' type="text" name="firstName" id="firstName" placeholder="Enter first name" className="form-control form-control-sm" value={userData.firstName} onChange={(e) => changeHandle(e)} />
                </div>
                <div className="form-group">
                  <label className="col-form-label" htmlFor="username">Username</label>
                  <input onFocus='true' type="text" name="username" id="username" placeholder="Enter username" className="form-control form-control-sm" value={userData.username} onChange={(e) => changeHandle(e)} />
                </div>
                <div className="form-group">
                  <label className="col-form-label" htmlFor="mobile">Mobile</label>
                  <input onFocus='true' type="number" name="mobile" id="mobile" placeholder="Enter Mobile" className="form-control form-control-sm" value={userData.mobile} onChange={(e) => changeHandle(e)} />
                </div>
                <div className="form-group">
                  <label className="col-form-label" htmlFor="password">Password</label>
                  <input type="password" name="password" id="password" placeholder="Enter Password" className="form-control form-control-sm" value={userData.password} onChange={(e) => changeHandle(e)} />
                </div>
                <Link className="nav-link float-right" to="/">Dont have an Account?</Link>
                <Link className="nav-link float-right" to="/reset">Forget Password ?</Link>
                <button className="btn mt-3 btn-dark">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
