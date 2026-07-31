import React from 'react';

export default function MovieCard({ movie, onSelectMovie, isWatchlisted, onToggleWatchlist }) {
  const handleWatchlistClick = (e) => {
    e.stopPropagation(); // Prevent opening the modal
    onToggleWatchlist(movie);
  };

  return (
    <div 
      className="movie-card animate-fade-in" 
      onClick={() => onSelectMovie(movie)}
    >
      {/* Poster Image Container */}
      <div className="card-image-wrapper">
        <img 
          src={movie.poster} 
          alt={`${movie.title} poster`} 
          className="card-image"
          loading="lazy"
        />
        
        {/* Rating Badge Overlay */}
        <div className="card-rating-badge">
          <span>⭐ {movie.rating.toFixed(1)}</span>
        </div>

        {/* Hover Overlay */}
        <div className="card-hover-overlay">
          <button 
            className={`card-watchlist-btn ${isWatchlisted ? 'in-watchlist' : ''}`}
            onClick={handleWatchlistClick}
            title={isWatchlisted ? "Remove from Watchlist" : "Add to Watchlist"}
          >
            {isWatchlisted ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon-sm">
                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon-sm">
                <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
              </svg>
            )}
          </button>

          <span className="card-view-details">Click for details</span>
        </div>
      </div>

      {/* Info Section */}
      <div className="card-info">
        <div className="card-meta-line">
          <span className="card-year">{movie.year}</span>
          <span className="card-duration">{movie.duration}</span>
        </div>
        <h3 className="card-title" title={movie.title}>{movie.title}</h3>
        <div className="card-genres">
          {movie.genres.slice(0, 2).map((genre) => (
            <span key={genre} className="card-genre-chip">{genre}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
