import React from 'react';

const Notifications = ({ notifications }) => {
  return (
    <div className="notifications">
      <h2>Notifications</h2>
      {notifications.length > 0 ? (
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>{notification}</li>
          ))}
        </ul>
      ) : (
        <p>No new notifications.</p>
      )}
    </div>
  );
};

export default Notifications;
