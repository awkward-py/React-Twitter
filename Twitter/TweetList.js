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
    // You can filter out the tweet with the given id
    // and update the state accordingly
  };

  const handleEdit = (tweetId, editedText) => {
    // Implement edit functionality
    // You can map over the tweets, find the one with the given id,
    // update the text, and then update the state
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
