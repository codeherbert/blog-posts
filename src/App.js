import React from 'react';
import PostList from './components/PostList';
import './app.css';

const App = () => {
  return (
    <div className="Blog-App">
      <h1>Blog Posts</h1>
      <h2>(API request)</h2>
      <PostList />
    </div>
  )
}

export default App;
