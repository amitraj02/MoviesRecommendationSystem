Movie Recommendation System (**RAJcinema**)
This is a full-stack movie directory and custom recommendation catalog application.

1. Frontend:
a. Core Library          : **React 19** (configured inside App.jsx) utilizing hooks (useState, useEffect).
b. Build Tooling & Dev Server: **Vite 8.x** (see package.json).
c. Styling               : **Vanilla CSS** (see index.css) with custom dark/light styling (Warm Slate light theme, custom card layouts, and modal graphics).

d. Linter                : **oxlint** for fast JavaScript code quality checks.
e. Client Storage        : **localStorage** to persist user-selected watchlists.

2. Backend:
a. Language & Framework : **Python** with **Django 5.2.x** (configured in settings.py).
b. Database             : **SQLite 3** (db.sqlite3).
c. Database Management  : **Native Django ORM** with a custom movie model (see models.py) and a custom management command (seed_movies.py) to seed Bollywood, Marvel, and animated cinema catalogs.
d. API Formatting       : **JSON REST API endpoint** (Django custom JsonResponse view).
e. Cross-Origin Headers  : **django-cors-headers** middleware (corsheaders) enabling the Vite frontend to query the local API server.

3. DevOps / Control:
a. Control Scripts      : **Bash utility script** (start.sh) to spin up the Django backend and Vite frontend concurrently.    