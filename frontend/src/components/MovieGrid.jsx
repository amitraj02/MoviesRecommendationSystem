import React, { useState } from 'react';
import MovieCard from './MovieCard';

export default function MovieGrid({ 
  movies, 
  onSelectMovie, 
  watchlist, 
  onToggleWatchlist, 
  activeTab, 
  setActiveTab,
  searchQuery,
  genresList
}) {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [sortBy, setSortBy] = useState('rating-desc');

  // Filter movies based on active tabs, search query, and genre selection
  let filteredMovies = [...movies];

  // 1. Filter by Tab
  if (activeTab === 'watchlist') {
    filteredMovies = filteredMovies.filter(m => watchlist.includes(m.id));
  } else if (activeTab === 'trending') {
    filteredMovies = filteredMovies.filter(m => m.rating >= 8.6); // Treat >= 8.6 as trending
  }

  // 2. Filter by Genre
  if (selectedGenre !== 'All') {
    filteredMovies = filteredMovies.filter(m => m.genres.includes(selectedGenre));
  }

  // 3. Filter by Search Query
  if (searchQuery) {
    const query = searchQuery.toLowerCase().trim();
    filteredMovies = filteredMovies.filter(m => 
      m.title.toLowerCase().includes(query) || 
      m.director.toLowerCase().includes(query) ||
      m.genres.some(g => g.toLowerCase().includes(query)) ||
      m.cast.some(c => c.toLowerCase().includes(query))
    );
  }

  // 4. Sort movies
  filteredMovies.sort((a, b) => {
    if (sortBy === 'rating-desc') {
      return b.rating - a.rating;
    } else if (sortBy === 'year-desc') {
      return b.year - a.year;
    } else if (sortBy === 'year-asc') {
      return a.year - b.year;
    } else if (sortBy === 'title-asc') {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  const handleResetFilters = () => {
    setSelectedGenre('All');
    setSortBy('rating-desc');
  };

  return (
    <section className="movie-grid-section container">
      {/* Filters Bar Header */}
      <div className="grid-filters-header">
        <div className="feed-tabs">
          <button 
            className={`feed-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Collection
          </button>
          <button 
            className={`feed-tab-btn ${activeTab === 'trending' ? 'active' : ''}`}
            onClick={() => setActiveTab('trending')}
          >
            Trending
          </button>
          <button 
            className={`feed-tab-btn ${activeTab === 'watchlist' ? 'active' : ''}`}
            onClick={() => setActiveTab('watchlist')}
          >
            My Watchlist
          </button>
        </div>

        <div className="grid-sort-wrapper">
          <label htmlFor="sort-select" className="sort-label">Sort By</label>
          <select 
            id="sort-select" 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-dropdown"
          >
            <option value="rating-desc">Rating: High to Low</option>
            <option value="year-desc">Release: Newest First</option>
            <option value="year-asc">Release: Oldest First</option>
            <option value="title-asc">Title: A to Z</option>
          </select>
        </div>
      </div>

      {/* Genre Filter Chips Row */}
      <div className="genre-chips-container">
        <button 
          className={`genre-chip ${selectedGenre === 'All' ? 'active' : ''}`}
          onClick={() => setSelectedGenre('All')}
        >
          All Genres
        </button>
        {genresList.map((genre) => (
          <button 
            key={genre} 
            className={`genre-chip ${selectedGenre === genre ? 'active' : ''}`}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Search Header Banner */}
      {searchQuery && (
        <div className="search-results-banner">
          Search results for "<span>{searchQuery}</span>" ({filteredMovies.length} found)
        </div>
      )}

      {/* Movies Grid */}
      {filteredMovies.length > 0 ? (
        <div className="movies-grid">
          {filteredMovies.map((movie) => (
            <MovieCard 
              key={movie.id} 
              movie={movie} 
              onSelectMovie={onSelectMovie} 
              isWatchlisted={watchlist.includes(movie.id)}
              onToggleWatchlist={onToggleWatchlist}
            />
          ))}
        </div>
      ) : (
        <div className="no-movies-found glass-panel animate-fade-in">
          <svg className="no-movies-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
          </svg>
          <h3>No Movies Found</h3>
          <p>We couldn't find any movies matching your active search/filter settings.</p>
          <button className="btn btn-primary" onClick={handleResetFilters}>
            Clear Filters
          </button>
        </div>
      )}
    </section>
  );
}
