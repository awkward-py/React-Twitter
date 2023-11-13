import React, { useState } from 'react';

const Tweet = ({ tweet, onLike }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    onLike(tweet.id); // Pass the tweet id to the parent component
  };

  return (
    <div className="tweet">
      <p>{tweet.text}</p>
      <button onClick={handleLike}>
        {liked ? 'Unlike' : 'Like'}
      </button>
    </div>
  );
};

export default Tweet;
