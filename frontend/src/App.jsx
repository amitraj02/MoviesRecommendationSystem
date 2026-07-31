import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieGrid from './components/MovieGrid';
import MovieDetailModal from './components/MovieDetailModal';
import './App.css';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [watchlist, setWatchlist] = useState(() => {
    const saved = localStorage.getItem('rajcinema_watchlist');
    return saved ? JSON.parse(saved) : [];
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'trending', 'watchlist'
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Sync watchlist to localStorage
  useEffect(() => {
    localStorage.setItem('rajcinema_watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  // Fetch movies from Django REST API endpoint
  useEffect(() => {
    setIsLoading(true);
    fetch('http://127.0.0.1:8000/api/movies/')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to retrieve movies database');
        }
        return res.json();
      })
      .then((data) => {
        setMovies(data);
        setError(null);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  const handleToggleWatchlist = (movie) => {
    if (watchlist.includes(movie.id)) {
      setWatchlist(watchlist.filter((id) => id !== movie.id));
    } else {
      setWatchlist([...watchlist, movie.id]);
    }
  };

  const handleWatchTrailer = (movie) => {
    setSelectedMovie(movie);
  };

  // Derive unique genres list dynamically from fetched database movies
  const genresList = [...new Set(movies.flatMap(m => m.genres || []))].sort();

  // Select movie with ID 9 (12th Fail) or fallback to first element for Hero spotlight
  const featuredMovie = movies.find(m => m.id === 9) || movies[0];

  return (
    <div className="app-wrapper">
      {/* Header / Navbar */}
      <Navbar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        watchlistCount={watchlist.length}
      />

      {/* Main Content Area */}
      <main className="main-content">
        {isLoading ? (
          <div className="container animate-fade-in" style={{ textAlign: 'center', padding: '5rem 0' }}>
            <div className="video-spinner" style={{ margin: '0 auto 1.5rem' }}></div>
            <h3>Loading RAJcinema Catalog...</h3>
            <p style={{ color: 'var(--text-muted)' }}>Retrieving movie records from SQLite database...</p>
          </div>
        ) : error ? (
          <div className="container animate-fade-in" style={{ textAlign: 'center', padding: '5rem 1rem' }}>
            <div className="badge badge-secondary" style={{ marginBottom: '1.5rem' }}>Connection Offline</div>
            <h3 style={{ color: 'var(--accent-secondary)' }}>Unable to connect to local Django server</h3>
            <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0.5rem auto 1.5rem' }}>
              Ensure your Django backend server is running at <code>http://127.0.0.1:8000</code> and try refreshing the page.
            </p>
            <button className="btn btn-secondary" onClick={() => window.location.reload()}>
              Retry Connection
            </button>
          </div>
        ) : (
          <>
            {!searchQuery && activeTab === 'all' && (
              <Hero 
                featuredMovie={featuredMovie}
                onWatchTrailer={handleWatchTrailer}
              />
            )}
            
            <MovieGrid 
              movies={movies}
              onSelectMovie={setSelectedMovie}
              watchlist={watchlist}
              onToggleWatchlist={handleToggleWatchlist}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              searchQuery={searchQuery}
              genresList={genresList}
            />
          </>
        )}
      </main>

      {/* Movie Details Modal Overlay */}
      {selectedMovie && (
        <MovieDetailModal 
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
          watchlist={watchlist}
          onToggleWatchlist={handleToggleWatchlist}
          allMovies={movies}
          onSelectMovie={setSelectedMovie}
        />
      )}

      {/* Footer */}
      <footer className="footer-container">
        <div className="footer-content container">
          <div className="footer-brand">
            <span className="logo-text">RAJ<span>cinema</span></span>
            <p>Your personalized movie assistant. Discover perfect films tailored to your precise genres, ratings, and release eras.</p>
          </div>
          <div className="footer-links">
            <div className="footer-link-group">
              <h4>System Links</h4>
              <ul>
                <li><a href="#root" onClick={() => { setActiveTab('all'); setSearchQuery(''); }}>Catalog Feed</a></li>
                <li><a href="#root" onClick={() => setActiveTab('watchlist')}>My Watchlist</a></li>
              </ul>
            </div>
            <div className="footer-link-group">
              <h4>Stack Info</h4>
              <ul>
                <li><a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React Framework</a></li>
                <li><a href="https://vite.dev/" target="_blank" rel="noopener noreferrer">Vite Bundler</a></li>
                <li><a href="https://docs.djangoproject.com/" target="_blank" rel="noopener noreferrer">Django Backend</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} RAJcinema. ITs my first movies recomendation project. </p>
        </div>
      </footer>
    </div>
  );
}
