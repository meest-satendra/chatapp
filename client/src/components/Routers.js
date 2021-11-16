import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Register from '../components/public/Register';
import Login from '../components/public/Login';
import ChatHead from './pages/Chats/ChatHead';


const ProtectRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={(props) => {
        return localStorage.getItem('token') ? <Component {...props} /> : <Navigate to="/" />
    }} />
}



const Routers = () => {
    return (
        <Routes>
            {/* <Route exact path='/' element={<ChatHead />} /> */}
            <Route exact path="/" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            {/* <ProtectRoute exact path="/paymenthistory" component={MyPaymentHistory} /> */}
        </Routes>
    )
}

export default Routers