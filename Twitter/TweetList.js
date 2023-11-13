import React, { useState } from 'react';
import Tweet from './Tweet';
import PostTweet from './PostTweet';

const TweetList = ({ tweets, user }) => {
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
      user,
      likes: 0,
      replies: [],
    };
    setNewTweets((prevTweets) => [newTweet, ...prevTweets]);
  };

  const handleDelete = (tweetId) => {
    // Implement delete functionality
    const updatedTweets = allTweets.filter((tweet) => tweet.id !== tweetId);
    setNewTweets(updatedTweets.slice(tweets.length));
  };

  const handleEdit = (tweetId, editedText) => {
    // Implement edit functionality
    const updatedTweets = allTweets.map((tweet) =>
      tweet.id === tweetId ? { ...tweet, text: editedText } : tweet
    );
    setNewTweets(updatedTweets.slice(tweets.length));
  };

  const allTweets = [...tweets, ...newTweets];

  return (
    <div className="tweet-list">
      <PostTweet onPost={handlePostTweet} />
      {allTweets.map((tweet) => (
        <Tweet
          key={tweet.id}
          tweet={tweet}
          user={user}
          onLike={handleLike}
          onReply={handleReply}
          onDelete={handleDelete}
          onEdit={handleEdit}
          liked={likes[tweet.id]}
        />
      ))}
    </div>
  );
};

export default TweetList;
