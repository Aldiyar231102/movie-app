import './App.css';
import React from 'react';
import MovieList from './components/MovieList/MovieList';
import MovieDetail from './components/MovieDetail/MovieDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
