import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ChatHead = ({ io, createChatHead, userId, data }) => {
    // const [chatHead, setChatHead] = useState([])
    // io.emit('getChatHead', userId._id);
    // io.on('returnChatHead', async (data) => {
    //     setChatHead(data)
    // })
    return (
        <div className='one'>
            <div className='two'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">ChatHead</th>
                        </tr>
                    </thead>
                    {data.length ? data.map((user, index) => {
                        return (
                            <tbody key={index}>
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    {/* <Link to={{ pathname: `/chat`, query: user }} query={user}> */}
                                    <td /*onClick={() => createChatHead(user)}*/ >{user.username} {userId._id === user._id ? 'You' : null}</td>
                                    {/* </Link> */}
                                </tr>
                            </tbody>
                        )
                    }) : null}
                </table>
            </div>
        </div>
    );
}

export default ChatHead
