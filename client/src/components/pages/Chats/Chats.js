import React from 'react'

const Chats = (props) => {
    console.log(props);
    return (
        <section class="chat__section">
            <div class="message__area"></div>
            <div>
                <input id="textarea" cols="30" rows="1" placeholder="Write a message..." />
            </div>
        </section>
    )
}

export default Chats
