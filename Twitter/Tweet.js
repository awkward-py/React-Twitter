import React, { useState } from 'react';

const Tweet = ({ tweet, onLike, onReply }) => {
  const [liked, setLiked] = useState(false);
  const [replying, setReplying] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [taggedUsers, setTaggedUsers] = useState([]);

  const handleLike = () => {
    setLiked(!liked);
    onLike(tweet.id);
  };

  const handleReply = () => {
    setReplying(!replying);
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

  const handleReplySubmit = (e) => {
    e.preventDefault();
    onReply(tweet.id, replyText, taggedUsers);
    setReplyText('');
    setTaggedUsers([]);
    setReplying(false);
  };

  return (
    <div className="tweet">
      <p>{tweet.text}</p>
      <div>
        <button onClick={handleLike}>{liked ? 'Unlike' : 'Like'}</button>
        <span>{`Likes: ${tweet.likes}`}</span>
        <button onClick={handleReply}>Reply</button>
        <span>{`Replies: ${tweet.replies.length}`}</span>
      </div>
      {replying && (
        <form onSubmit={handleReplySubmit}>
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
    </div>
  );
};

export default Tweet;
