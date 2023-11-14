import React, { useState } from 'react';

const Messages = ({ messages, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="messages">
      <h2>Messages</h2>
      <div className="message-list">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <span>{message.sender}:</span>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="message-input">
        <textarea
          rows="4"
          cols="50"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Messages;
