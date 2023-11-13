import React, { useState } from 'react';
import Tweet from './Tweet';
import PostTweet from './PostTweet';

const TweetList = ({ tweets }) => {
  const [likes, setLikes] = useState({});
  const [replies, setReplies] = useState({});
  const [newTweets, setNewTweets] = useState([]);

  const handleLike = (tweetId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [tweetId]: !prevLikes[tweetId],
    }));
  };

  const handleReply = (tweetId, replyText, taggedUsers) => {
    setReplies((prevReplies) => ({
      ...prevReplies,
      [tweetId]: [...(prevReplies[tweetId] || []), { text: replyText, taggedUsers }],
    }));
  };

  const handlePostTweet = (tweetText) => {
    const newTweet = {
      id: newTweets.length + 1,
      text: tweetText,
      likes: 0,
      replies: [],
    };
    setNewTweets((prevTweets) => [newTweet, ...prevTweets]);
  };

  const allTweets = [...tweets, ...newTweets];

  return (
    <div className="tweet-list">
      <PostTweet onPost={handlePostTweet} />
      {allTweets.map((tweet) => (
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
