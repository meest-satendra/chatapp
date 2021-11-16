import React, { useEffect, useState } from 'react';
import socketClient from 'socket.io-client'


const ChatHead = () => {
    const [response, setResponse] = useState("");
    const data = {
        userId: '30c8327c-b0e6-47f8-9cfb-e8b58e27067b'
    }
    useEffect(() => {
        const io = socketClient('http://192.168.100.167:3001', {
            reconnectionDelay: 1000,
            reconnection: true,
            reconnectionAttempts: Infinity,
            jsonp: false,
            transports: ['websocket']
        })
        io.on('connect', (data) => {
            console.log(io.id);
        })
        io.emit('chat message', data);
        io.on('chat message', data => {
            console.log(data);
        })
    }, [])
    return (
        <p>
            It's <time dateTime={response}>{response}</time>
        </p>
    );
}

export default ChatHead
