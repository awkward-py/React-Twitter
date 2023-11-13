import React, { useState } from 'react';

const PostTweet = ({ onPost }) => {
  const [tweetText, setTweetText] = useState('');

  const handleTweetTextChange = (e) => {
    setTweetText(e.target.value);
  };

  const handlePostTweet = () => {
    if (tweetText.trim() !== '') {
      onPost(tweetText);
      setTweetText('');
    }
  };

  return (
    <div className="post-tweet">
      <textarea
        value={tweetText}
        onChange={handleTweetTextChange}
        placeholder="What's happening?"
        maxLength={280} // Set your desired character limit
      />
      <button onClick={handlePostTweet}>Post Tweet</button>
    </div>
  );
};

export default PostTweet;
