import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Register from '../components/public/Register';
import Login from '../components/public/Login';
import { withRouter } from './customeRoute'
import Dashboard from './pages/dashboard/Dashboard';
import Chats from './pages/Chats/Chats';

const ProtectRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={(props) => {
        return localStorage.getItem('token') ? <Component {...props} /> : <Navigate to="/" />
    }} />
}



const Routing = () => {
    return (
        <Routes>
            <Route exact path='/dashboard' element={<Dashboard />} />
            <Route exact path="/" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path='/chat' element={<Chats />} />
            {/* <ProtectRoute exact path="/paymenthistory" component={MyPaymentHistory} /> */}
        </Routes>
    )
}

export default withRouter(Routing)