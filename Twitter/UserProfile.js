import React, { useState } from 'react';

const UserProfile = ({ userName, onEditProfile }) => {
  const [newUserName, setNewUserName] = useState(userName);
  const [editing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setNewUserName(userName);
  };

  const handleSaveEdit = () => {
    if (newUserName.trim() !== '') {
      onEditProfile(newUserName);
      setEditing(false);
    }
  };

  return (
    <div className="user-profile">
      {editing ? (
        <>
          <input
            type="text"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
          />
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </>
      ) : (
        <>
          <p>{userName}</p>
          <button onClick={handleEditClick}>Edit Profile</button>
        </>
      )}
    </div>
  );
};

export default UserProfile;
