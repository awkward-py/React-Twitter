import React, { useState } from 'react';
import './App.css';
import TweetList from './TweetList';
import PostTweet from './PostTweet';
import UserProfile from './UserProfile';
import SearchBar from './SearchBar';
import Notifications from './Notifications';
import Messages from './Messages';


function App() {
  const [tweets, setTweets] = useState([]);
  const [userName, setUserName] = useState("YourUsername");
  const [isVerified, setIsVerified] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching or any asynchronous operations
    setTimeout(() => {
      setTweets([
        { id: 1, text: 'Hello Twitter!', user: 'User1', likes: 10, replies: [] },
        { id: 2, text: 'Learning React!', user: 'User2', likes: 5, replies: [] },
        // Add more tweets as needed
      ]);
      setLoading(false);
    }, 2000);
  }, []); // Empty dependency array to run the effect only once on mount


  const addTweet = (tweet) => {
    setTweets([...tweets, { id: tweets.length + 1, text: tweet, user: userName, likes: 0, replies: [] }]);
    checkNotifications(tweet);
  };

  const checkNotifications = (tweet) => {
    if (tweet.includes('@YourUsername')) {
      setNotifications([...notifications, `You were mentioned in a tweet: "${tweet}"`]);
    }
  };

  const handleEditProfile = (newUserName) => {
    setUserName(newUserName);
  };

  const handleSendMessage = (messageText) => {
    setMessages([...messages, { sender: userName, text: messageText }]);
  };

  return (
    <div className="app">
      <UserProfile userName={userName} onEditProfile={handleEditProfile} verified={isVerified} />
      <Notifications notifications={notifications} />
      <Messages messages={messages} onSendMessage={handleSendMessage} />
      <PostTweet onPost={addTweet} />
      <TweetList tweets={tweets} user={userName} />
    </div>
  );
}

export default App;
