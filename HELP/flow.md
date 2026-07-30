 ---------------------------------------------------
 flow diagram for a Movie Recommendation System built with React + Django + sqlite + TMDB API.
 ---------------------------------------------------
                                     USER
                                      │
                                      ▼
                           Opens React Application
                                      │
                                      ▼
                         ┌────────────────────────┐
                         │       Home Page        │
                         └────────────────────────┘
                                      │
                  ┌───────────────────┼───────────────────┐
                  │                   │                   │
                  ▼                   ▼                   ▼
            Search Movie        Trending Movies      Login/Register
                  │                   │                   │
                  └──────────────┬────┴───────────────────┘
                                 │
                                 ▼
                     React (Axios HTTP Requests)
                                 │
                                 ▼
                   Django REST Framework API Server
                                 │
          ┌──────────────────────┼──────────────────────┐
          │                      │                      │
          ▼                      ▼                      ▼
 Authentication API      Movie API Service     Recommendation Engine
          │                      │                      │
          │                      ▼                      ▼
          │             TMDB External API        Recommendation Logic
          │                      │                      │
          │                      ▼                      ▼
          │              Movie Information      Similar Movies
          │                      │              User Preferences
          │                      │              Genre Matching
          └──────────────┬───────┴──────────────┬──────────────┐
                         │                      │              │
                         ▼                      ▼              ▼
                    PostgreSQL Database    Favorites      Watchlist
                         │                      │              │
                         └──────────────┬───────┴──────────────┘
                                        │
                                        ▼
                            JSON Response to React
                                        │
                                        ▼
                         Render Movie Cards / Details
                                        │
               ┌────────────────────────┼────────────────────────┐
               │                        │                        │
               ▼                        ▼                        ▼
        Add to Favorites        Add to Watchlist      View Similar Movies
               │                        │                        │
               └────────────────────────┼────────────────────────┘
                                        │
                                        ▼
                                Updated Dashboard


------------------------------------------
Overall Project Architecture:
------------------------------------------
                 ┌──────────────────────────────┐
                 │          React UI            │
                 │                              │
                 │ Home                         │
                 │ Search                       │
                 │ Details                      │
                 │ Favorites                    │
                 │ Watchlist                    │
                 │ Profile                      │
                 └──────────────┬───────────────┘
                                │ Axios
                                ▼
                 ┌──────────────────────────────┐
                 │ Django REST Framework API    │
                 └──────────────┬───────────────┘
                                │
          ┌─────────────────────┼─────────────────────┐
          ▼                     ▼                     ▼
      Authentication        Movie Service      Recommendation
                                                    Engine
          │                     │                     │
          ▼                     ▼                     ▼
    sqlite Database      TMDB API         Recommendation Algorithm

------------------------------------------
Recommendation Engine Flow :
------------------------------------------
User Opens Movie
        │
        ▼
Movie ID Received
        │
        ▼
Fetch Movie Details
        │
        ▼
Read Genres
        │
        ▼
Read User Watch History
        │
        ▼
Find Similar Genres
        │
        ▼
Calculate Recommendation Score
        │
        ▼
Sort Movies
        │
        ▼
Return Top 10 Recommendations
        │
        ▼
Display in React

-------------------------------------------
Folder Structure Flow:
-------------------------------------------

Movie Recommendation Project
│
├── Frontend (React)
│   ├── App.jsx
│   ├── Navbar.jsx
│   ├── Home.jsx
│   ├── Search.jsx
│   ├── MovieDetails.jsx
│   ├── Favorites.jsx
│   ├── Watchlist.jsx
│   ├── Profile.jsx
│   └── API Service (Axios)
│
├── Backend (Django)
│   ├── Authentication
│   ├── Movies
│   ├── Recommendation
│   ├── REST APIs
│   └── Database Models
│
├── sqlite 
│
└── TMDB API