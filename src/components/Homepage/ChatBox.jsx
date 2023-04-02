import React, { useState } from 'react'
import conversation from '../assets/conversation.png'
import close from '../assets/close.png'
import down from '../assets/down.png'


function useFakeConversationsUser(User) {
    // generate fake messages between the two users
    const messages = [
        { id: 1, user: User.name, message: "lorem ipsum dolor sit amet, consectetur", timestamp: Date.now() },
        { id: 2, user: User.name, message: "lorem ipsum dolor sit", timestamp: Date.now() + 1000 },
    ];
    return messages;
}

function useFakeConversationsreceiver(User) {
    // generate fake messages between the two users
    const messages = [
        { id: 1, user: User.name, message: "lorem ipsum dolor", timestamp: Date.now() },
        { id: 2, user: User.name, message: "lorem ipsum", timestamp: Date.now() + 1000 },

    ];
    return messages;
}

function ChatBox({ otherProfiles, filteredProfiles }) {


    const [selectedUser, setSelectedUser] = useState(null);

    const [isClosed, setIsClosed] = useState(true);

    const [messageInput, setMessageInput] = useState('');


    const currentUser = filteredProfiles;

    const handleClose = () => {
        setIsClosed(prev => !prev)
    };

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    const handleChatClose = () => {
        setSelectedUser(null);
    }

    const handleInputChange = (event) => {
        setMessageInput(event.target.value);
    };

    const handleSend = () => {
        setMessageInput('');

    };
    const conversationUser = selectedUser ? useFakeConversationsUser(currentUser) : [];
    const conversationReceiver = selectedUser ? useFakeConversationsreceiver(selectedUser) : [];

    return (
        <div className={`chat-box ${isClosed ? 'closed' : ''}`} >
            <div className="chat-header">
                <img src={conversation} alt="chat-img" className='chat-img' />
                <div className="chat-title">Chats</div>
                <img src={down} className="chat-close" onClick={handleClose}/>
            </div>
            <div className="user-list">
                {otherProfiles.map((user) => (
                    <div
                        key={user.id}
                        onClick={() => handleUserClick(user)}
                        className={`chat-list ${selectedUser && selectedUser.id === user.id ? "active1" : ""}`}
                    >
                        <img src={user.profilepicture} alt="pic" className='chat-image' />
                        <p className='chat-name'>{user.name}</p>
                    </div>
                ))}
            </div>
            {selectedUser && (
                <div className="chat-section">
                    <div className="chat-header">
                        <div className="chat-title">{selectedUser.name}</div>
                        <img src={close} className="chat-close close" onClick={handleChatClose}/>
                    </div>
                    <div className="chatuser-list">

                        {conversationReceiver.map((message) => (
                            <div key={message.id} className={`message ${message.user === currentUser.name ? "sent" : "received"}`}>
                                <div className="message-text receiver-chat">{message.message}</div>
                            </div>
                        ))}

                        {conversationUser.map((message) => (
                            <div key={message.id} className={`message ${message.user === currentUser.name ? "sent" : "received"}`}>
                                <div className="message-text user-chat">{message.message}</div>
                            </div>
                        ))}

                    </div>
                        <div className="input-section">
                            <input type="text" value={messageInput} onChange={handleInputChange} placeholder="Type your message..." />
                            <button onClick={handleSend}>Send</button>
                        </div>
                </div>
            )}
        </div>
    )
}

export default ChatBox