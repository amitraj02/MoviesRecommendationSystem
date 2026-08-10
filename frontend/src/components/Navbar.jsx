import React from 'react';

export default function Navbar({ searchQuery, setSearchQuery, activeTab, setActiveTab, watchlistCount }) {
  return (
    <header className="navbar-container glass-panel animate-fade-in">
      <div className="navbar-content container">
        {/* Logo Section */}
        <div className="navbar-logo" onClick={() => { setActiveTab('all'); setSearchQuery(''); }}>
          <svg className="logo-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 3.5c0-.828.672-1.5 1.5-1.5h13c.828 0 1.5.672 1.5 1.5v17c0 .828-.672 1.5-1.5 1.5h-13c-.828 0-1.5-.672-1.5-1.5v-17zM6 5v2h2V5H6zm0 4v2h2V9H6zm0 4v2h2v-2H6zm0 4v2h2v-2H6zm10-12v2h2V5h-2zm0 4v2h2V9h-2zm0 4v2h2v-2h-2zm0 4v2h2v-2h-2zm-6-13a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-4z" />
          </svg>
          <span className="logo-text">RAJ<span>cinema</span></span>
        </div>

        {/* Navigation Items */}
        <nav className="navbar-links">
          <button
            className={`nav-link ${activeTab === 'all' && !searchQuery ? 'active' : ''}`}
            onClick={() => { setActiveTab('all'); setSearchQuery(''); }}
          >
            Home
          </button>
          <button
            className={`nav-link watchlist-nav-btn ${activeTab === 'watchlist' ? 'active' : ''}`}
            onClick={() => setActiveTab('watchlist')}
          >
            Watchlist
            {watchlistCount > 0 && <span className="nav-badge">{watchlistCount}</span>}
          </button>
        </nav>

        {/* Search & Actions */}
        <div className="navbar-actions">
          <div className="search-wrapper">
            <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button className="clear-search-btn" onClick={() => setSearchQuery('')}>
                &times;
              </button>
            )}
          </div>

          <div className="user-profile">
            <img
              src="../public/images/raj.jpeg"
              alt="User avatar"
              className="profile-avatar"
            />
            <span className="profile-status"></span>
          </div>
        </div>
      </div>
    </header>
  );
}
