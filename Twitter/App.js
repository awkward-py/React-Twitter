import React, { useState } from 'react';
import './App.css';
import TweetList from './TweetList';
import PostTweet from './PostTweet';
import UserProfile from './UserProfile';

function App() {
  const [tweets, setTweets] = useState([]);
  const [userName, setUserName] = useState("YourUsername");

  const addTweet = (tweet) => {
    setTweets([...tweets, { id: tweets.length + 1, text: tweet, user: userName, likes: 0, replies: [] }]);
  };

  const handleEditProfile = (newUserName) => {
    setUserName(newUserName);
  };

  return (
    <div className="app">
      <UserProfile userName={userName} onEditProfile={handleEditProfile} />
      <PostTweet onPost={addTweet} />
      <TweetList tweets={tweets} user={userName} />
    </div>
  );
}

export default App;
