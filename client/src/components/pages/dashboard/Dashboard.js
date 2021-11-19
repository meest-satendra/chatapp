import ChatHead from '../Chats/ChatHead';
import Chats from '../Chats/Chats';
import Users from '../users/Users';
import React, { useEffect, useState } from 'react';
import socketClient from 'socket.io-client'
import axios from 'axios';
import { useNavigate } from 'react-router';

const Dashboard = () => {
    const [chatHeadUserData, setchatHeadUserData] = useState([]);
    const [userData, setUserData] = useState([]);
    const [userId, setUserId] = useState('');
    const navigate = useNavigate();
    const getUser = async () => {
        try {
            const token = localStorage.getItem('token')
            // Headers
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            };
            if (token) {
                config.headers['x-auth-token'] = token;
            }
            const res = await axios.get(`/users/user/data`, config);
            setUserId(res.data);
        } catch (error) {
            console.log(error);
            if (error.response.status == 401) {
                localStorage.removeItem('token')
                navigate('/')
            }
        }
    }

    const io = socketClient('http://192.168.100.167:3001', {
        reconnectionDelay: 1000,
        reconnection: true,
        reconnectionAttempts: Infinity,
        jsonp: false,
        transports: ['websocket']
    })
    io.on('connect', (data) => { })
    const connectSocket = async () => {
        io.emit('getUserData');
        io.on('returndata', async (data) => {
            setUserData(data)
        })
    }
    const createChatHead = async (touserdata) => {
        const data = {
            userId: userId,
            toUserId: touserdata
        }
        io.emit('createChatHead', data);
        io.on('returncreateChatHead', async (data) => {
            setchatHeadUserData(data)
        })
    }
    useEffect(() => {
        connectSocket();
        getUser();
    }, []);
    return (
        <div className="container-fluid">
            <div className='card shadow' >
                <div className="card-header">
                    <h4 className="text-center">Chat</h4>
                </div>
                <div className="card-body" style={{
                    display: 'flex'
                }}>
                    <div style={{
                        width: '500px'
                    }}>
                        <Users createChatHead={createChatHead} userId={userId} data={userData} />
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <Chats userId={userId} io={io} createChatHead={createChatHead} />
                        </div>
                    </div>
                    <div>
                        <ChatHead io={io} userId={userId} data={chatHeadUserData} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
