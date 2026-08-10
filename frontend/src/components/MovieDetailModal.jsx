import React, { useState } from 'react';

export default function MovieDetailModal({ movie, onClose, watchlist, onToggleWatchlist, allMovies, onSelectMovie }) {
  const [userRating, setUserRating] = useState(0);
  const [isPlayingTrailer, setIsPlayingTrailer] = useState(false);
  const isWatchlisted = watchlist.includes(movie.id);

  // Find 3 similar movies based on overlapping genres (excluding current movie)
  const similarMovies = allMovies
    .filter(m => m.id !== movie.id)
    .map(m => {
      const overlap = m.genres.filter(g => movie.genres.includes(g)).length;
      return { movie: m, overlap };
    })
    .filter(item => item.overlap > 0)
    .sort((a, b) => b.overlap - a.overlap || b.movie.rating - a.movie.rating)
    .slice(0, 3)
    .map(item => item.movie);

  const handleRating = (rating) => {
    setUserRating(rating);
  };

  const toggleTrailer = () => {
    setIsPlayingTrailer(!isPlayingTrailer);
  };

  return (
    <div className="modal-overlay animate-fade-in" onClick={onClose}>
      <div className="modal-container glass-panel" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        {/* Modal Content */}
        <div className="modal-grid">
          {/* Left Column: Poster, Watchlist and Rating */}
          <div className="modal-left">
            <div className="modal-poster-wrapper">
              <img src={movie.poster} alt={movie.title} className="modal-poster-img" />
              <div className="modal-poster-rating">
                <span className="rating-num">⭐ {movie.rating.toFixed(1)}</span>
                <span className="rating-label">IMDb</span>
              </div>
            </div>

            <button 
              className={`btn btn-block ${isWatchlisted ? 'btn-secondary' : 'btn-primary'}`}
              onClick={() => onToggleWatchlist(movie)}
              style={{ width: '100%', marginTop: '1rem' }}
            >
              {isWatchlisted ? '✓ In Watchlist' : '+ Add to Watchlist'}
            </button>

            {/* User Rating Action */}
            <div className="user-rating-section">
              <span className="user-rating-title">Your Rating:</span>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button 
                    key={star}
                    type="button"
                    className={`star-btn ${star <= userRating ? 'active' : ''}`}
                    onClick={() => handleRating(star)}
                  >
                    ★
                  </button>
                ))}
              </div>
              {userRating > 0 && (
                <p className="user-rating-feedback">
                  You rated this {userRating * 2}/10! Saved.
                </p>
              )}
            </div>
          </div>

          {/* Right Column: Information, Trailer, Similar Movies */}
          <div className="modal-right">
            <div className="modal-header">
              <h2 className="modal-title">{movie.title}</h2>
              <div className="modal-meta-row">
                <span className="modal-year">{movie.year}</span>
                <span className="modal-dot">•</span>
                <span>{movie.duration}</span>
                <span className="modal-dot">•</span>
                <span className="modal-vibe-tag">{movie.vibe}</span>
              </div>
              <div className="modal-genres">
                {movie.genres.map(g => (
                  <span key={g} className="modal-genre-chip">{g}</span>
                ))}
              </div>
            </div>

            <div className="modal-section">
              <h3>Synopsis</h3>
              <p className="modal-description">{movie.description}</p>
            </div>

            <div className="modal-section details-grid">
              <div>
                <strong>Director:</strong>
                <p>{movie.director}</p>
              </div>
              {movie.cast && (
                <div>
                  <strong>Cast:</strong>
                  <p>{movie.cast.join(', ')}</p>
                </div>
              )}
              <div>
                <strong>Intensity Vibe:</strong>
                <div className="intensity-bar">
                  {[1, 2, 3, 4, 5].map(step => (
                    <span 
                      key={step} 
                      className={`intensity-dot ${step <= movie.intensity ? 'active' : ''}`}
                    ></span>
                  ))}
                  <span className="intensity-label">{movie.intensity}/5</span>
                </div>
              </div>
            </div>

            {/* Mock Trailer Section */}
            <div className="modal-section">
              <h3>Official Trailer</h3>
              {isPlayingTrailer ? (
                <div className="trailer-player-box playing">
                  <div className="video-overlay">
                    <div className="video-spinner"></div>
                    <p>Simulating secure video stream...</p>
                  </div>
                  <button className="btn btn-secondary btn-sm stop-trailer-btn" onClick={toggleTrailer}>
                    Stop Stream
                  </button>
                </div>
              ) : (
                <div className="trailer-player-box" onClick={toggleTrailer}>
                  <img src={movie.poster} alt="trailer poster thumbnail" className="trailer-thumbnail" />
                  <div className="play-button-overlay">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="play-icon-lg">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                    </svg>
                    <span>Click to Stream Trailer</span>
                  </div>
                </div>
              )}
            </div>

            {/* Similar Movies Section */}
            {similarMovies.length > 0 && (
              <div className="modal-section similar-movies-section">
                <h3>Similar Recommendations</h3>
                <div className="similar-movies-grid">
                  {similarMovies.map(sm => (
                    <div 
                      key={sm.id} 
                      className="similar-movie-item"
                      onClick={() => {
                        setIsPlayingTrailer(false); // Reset trailer state
                        onSelectMovie(sm); // Switch active movie in modal
                      }}
                    >
                      <img src={sm.poster} alt={sm.title} className="similar-poster" />
                      <div className="similar-info">
                        <span className="similar-title">{sm.title}</span>
                        <div className="similar-meta">
                          <span>⭐ {sm.rating.toFixed(1)}</span>
                          <span>•</span>
                          <span>{sm.year}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
