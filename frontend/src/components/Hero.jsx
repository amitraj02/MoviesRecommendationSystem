import React from 'react';

export default function Hero({ featuredMovie, onWatchTrailer }) {
  if (!featuredMovie) return null;

  return (
    <section className="hero-container animate-fade-in">
      {/* Background Poster Overlay */}
      <div 
        className="hero-backdrop" 
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 15, 0.4) 0%, rgba(10, 10, 15, 0.95) 100%), url(${featuredMovie.poster})` }}
      >
        <div className="hero-glow-effect"></div>
      </div>

      <div className="hero-content container">
        <div className="hero-badge-container">
          <span className="badge badge-primary">Featured Spotlight</span>
        </div>

        <h1 className="hero-title">{featuredMovie.title}</h1>

        <div className="hero-meta">
          <span className="hero-rating">⭐ {featuredMovie.rating.toFixed(1)}</span>
          <span className="hero-dot">•</span>
          <span>{featuredMovie.year}</span>
          <span className="hero-dot">•</span>
          <span>{featuredMovie.duration}</span>
          <span className="hero-dot">•</span>
          <div className="hero-genres">
            {featuredMovie.genres.map(genre => (
              <span key={genre} className="hero-genre-tag">{genre}</span>
            ))}
          </div>
        </div>

        <p className="hero-description">{featuredMovie.description}</p>

        <div className="hero-buttons">
          <button className="btn btn-primary hero-btn" onClick={() => onWatchTrailer(featuredMovie)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="btn-icon">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
            </svg>
            Watch Trailer
          </button>
        </div>
      </div>
    </section>
  );
}
