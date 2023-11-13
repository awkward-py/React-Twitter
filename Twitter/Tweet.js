import React, { useState } from 'react';

const Tweet = ({ tweet, onLike, onReply }) => {
  const [liked, setLiked] = useState(false);
  const [replying, setReplying] = useState(false);
  const [replyText, setReplyText] = useState('');

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

  const handleReplySubmit = (e) => {
    e.preventDefault();
    onReply(tweet.id, replyText);
    setReplyText('');
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
          <input
            type="text"
            value={replyText}
            onChange={handleReplyTextChange}
            placeholder="Write your reply"
          />
          <button type="submit">Submit Reply</button>
        </form>
      )}
    </div>
  );
};

export default Tweet;
