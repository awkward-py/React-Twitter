import React, { useState } from 'react';

const Tweet = ({ tweet, user, onLike, onReply, onDelete, onEdit }) => {
  const [liked, setLiked] = useState(false);
  const [replying, setReplying] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [taggedUsers, setTaggedUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(tweet.text);

  const handleLike = () => {
    setLiked(!liked);
    onLike(tweet.id);
  };

  const handleReply = () => {
    setReplying(!replying);
  };

  const handleDelete = () => {
    onDelete(tweet.id);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setEditedText(tweet.text);
  };

  const handleSaveEdit = () => {
    if (editedText.trim() !== '') {
      onEdit(tweet.id, editedText);
      setEditing(false);
    }
  };

  const handleReplyTextChange = (e) => {
    setReplyText(e.target.value);
  };

  const handleTagUser = (e) => {
    const taggedUser = e.target.value;
    if (taggedUser.startsWith('@')) {
      setTaggedUsers((prevTaggedUsers) => [...prevTaggedUsers, taggedUser]);
    }
  };

  return (
    <div className="tweet">
      <p>{editedText}</p>
      <div>
        <button onClick={handleLike}>{liked ? 'Unlike' : 'Like'}</button>
        <span>{`Likes: ${tweet.likes}`}</span>
        <button onClick={handleReply}>Reply</button>
        <span>{`Replies: ${tweet.replies.length}`}</span>
        {user === tweet.user && (
          <>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </>
        )}
      </div>
      {replying && (
        <form>
          <textarea
            value={replyText}
            onChange={handleReplyTextChange}
            placeholder="Write your reply"
          />
          <input
            type="text"
            value={taggedUsers.join(' ')}
            onChange={handleTagUser}
            placeholder="Tag users with '@username'"
          />
          <button type="submit">Submit Reply</button>
        </form>
      )}
      {editing && (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </>
      )}
    </div>
  );
};

export default Tweet;
