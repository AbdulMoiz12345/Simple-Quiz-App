import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="container">
      <h1 className='l'>Welcome to Quiz App</h1>
      <Link to="/quiz" className="link">
        Attempt Quiz
      </Link>
      <br />
      <br />
      <br />
      <Link to="/enter" className="link">
        Add Question
      </Link>
    </div>
  );
};

export default Home;

