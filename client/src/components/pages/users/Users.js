import React, { useEffect, useState } from 'react';

const ChatHead = ({ createChatHead, userId, data }) => {
    return (
        <div className='one'>
            <div className='two'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">UserName</th>
                        </tr>
                    </thead>
                    {data.length ? data.map((user, index) => {
                        return (
                            <tbody key={index}>
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td onClick={() => createChatHead(user)}>{user.username} {userId._id === user._id ? 'You' : null}</td>
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
