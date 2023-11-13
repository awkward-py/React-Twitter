import React, { useState } from 'react';
import Tweet from './Tweet';

const TweetList = ({ tweets }) => {
  const [likes, setLikes] = useState({});
  const [replies, setReplies] = useState({});

  const handleLike = (tweetId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [tweetId]: !prevLikes[tweetId],
    }));
  };

  const handleReply = (tweetId, replyText) => {
    setReplies((prevReplies) => ({
      ...prevReplies,
      [tweetId]: [...(prevReplies[tweetId] || []), replyText],
    }));
  };

  return (
    <div className="tweet-list">
      {tweets.map((tweet) => (
        <Tweet
          key={tweet.id}
          tweet={tweet}
          onLike={handleLike}
          onReply={handleReply}
          liked={likes[tweet.id]}
        />
      ))}
    </div>
  );
};

export default TweetList;
