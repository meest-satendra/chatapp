import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    if (token) {
        navigate('/dashboard')
    }
    const [userData, setUserData] = useState({
        password: '',
        mobile: '',
        loggedIn: false
    })
    const changeHandle = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }
    const submitData = async (e) => {
        e.preventDefault();
        try {
            const data = {
                password: userData.password,
                mobile: userData.mobile
            }
            const res = await Axios.post('/users/login', data)
            console.log(res.data);
            if (res.data) {
                localStorage.setItem('token', res.data.token)
                setUserData({ loggedIn: true })
                navigate('/dashboard')
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="container">
            <div className="row" style={{ paddingTop: '50px' }}>
                <div className="col-md-5 m-auto">
                    <div className="card mt-5 shadow-sm mb-5">
                        <h3 className="card-header bg-dark text-center text-light">Login</h3>
                        <div className="card-body">
                            <form onSubmit={(e) => submitData(e)}>
                                <div className="form-group">
                                    <label className="col-form-label" htmlFor="mobile">Mobile</label>
                                    <input type="number" name="mobile" id="mobile" placeholder="Enter Mobile" className="form-control form-control-sm" value={userData.mobile} onChange={(e) => changeHandle(e)} />
                                </div>
                                <div className="form-group">
                                    <label className="col-form-label" htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password" placeholder="Enter Password" className="form-control form-control-sm" value={userData.password} onChange={(e) => changeHandle(e)} />
                                </div>
                                <Link className="nav-link float-right" to="/Register">Dont have an Account?</Link>
                                <Link className="nav-link float-right" to="/reset">Forget Password ?</Link>
                                <button className="btn mt-3 btn-dark">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
