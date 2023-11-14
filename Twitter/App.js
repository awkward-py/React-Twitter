import React, { useState } from 'react';
import './App.css';
import TweetList from './TweetList';
import PostTweet from './PostTweet';
import UserProfile from './UserProfile';
import SearchBar from './SearchBar';
import Notifications from './Notifications';

function App() {
  const [tweets, setTweets] = useState([]);
  const [userName, setUserName] = useState("YourUsername");
  const [isVerified, setIsVerified] = useState(true); // Set to true for a verified account
  const [notifications, setNotifications] = useState([]);

  const addTweet = (tweet) => {
    // Update state and check for notifications
    setTweets([...tweets, { id: tweets.length + 1, text: tweet, user: userName, likes: 0, replies: [] }]);
    checkNotifications(tweet);
  };

  const checkNotifications = (tweet) => {
    // Example: Check for notifications based on tweet content
    if (tweet.includes('@YourUsername')) {
      setNotifications([...notifications, `You were mentioned in a tweet: "${tweet}"`]);
    }
  };

  const addTweet = (tweet) => {
    setTweets([...tweets, { id: tweets.length + 1, text: tweet, user: userName, likes: 0, replies: [] }]);
  };

  const handleEditProfile = (newUserName) => {
    setUserName(newUserName);
  };

  return (
    <div className="app">
      <UserProfile userName={userName} onEditProfile={handleEditProfile} verified={isVerified} />
      <PostTweet onPost={addTweet} />
      <TweetList tweets={tweets} user={userName} />
    </div>
  );
}

export default App;
