import React, { useState } from 'react';
import Tweet from './Tweet';

const TweetList = ({ tweets }) => {
  const [likes, setLikes] = useState({});

  const handleLike = (tweetId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [tweetId]: !prevLikes[tweetId],
    }));
  };

  return (
    <div className="tweet-list">
      {tweets.map((tweet) => (
        <Tweet
          key={tweet.id}
          tweet={tweet}
          onLike={handleLike}
          liked={likes[tweet.id]}
        />
      ))}
    </div>
  );
};

export default TweetList;
