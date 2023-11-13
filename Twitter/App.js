import React, { useState } from 'react';
import './App.css';
import TweetList from './TweetList';

function TweetForm({ addTweet }) {
  const [tweet, setTweet] = useState('');

  const handleTweetChange = (e) => {
    setTweet(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tweet.trim() !== '') {
      addTweet(tweet);
      setTweet('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        rows="4"
        cols="50"
        placeholder="What's happening?"
        value={tweet}
        onChange={handleTweetChange}
      />
      <br />
      <button type="submit">Tweet</button>
    </form>
  );
}

function TweetList({ tweets }) {
  return (
    <div>
      {tweets.map((tweet, index) => (
        <div key={index}>{tweet}</div>
      ))}
    </div>
  );
}

function App() {
  const [tweets, setTweets] = useState([]);

  const addTweet = (tweet) => {
    setTweets([...tweets, tweet]);
  };

  return (
    <div className="App">
      <h1>Twitter Clone</h1>
      <TweetForm addTweet={addTweet} />
      <TweetList tweets={tweets} />
    </div>
  );
}

export default App;
