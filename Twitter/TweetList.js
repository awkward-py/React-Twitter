import React, { useState } from 'react';
import Tweet from './Tweet';
import PostTweet from './PostTweet';
import SearchBar from './SearchBar';

const TweetList = ({ tweets, user }) => {
  const [likes, setLikes] = useState({});
  const [replies, setReplies] = useState({});
  const [newTweets, setNewTweets] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredTweets = [...tweets, ...newTweets].filter(
    (tweet) =>
      tweet.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tweet.user.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="tweet-list">
      <SearchBar onSearch={handleSearch} />
      <PostTweet onPost={handlePostTweet} />
      {filteredTweets.map((tweet) => (
        <Tweet
          key={tweet.id}
          tweet={tweet}
          user={user}
          onLike={handleLike}
          onReply={handleReply}
          liked={likes[tweet.id]}
        />
      ))}
    </div>
  );
};

export default TweetList;
