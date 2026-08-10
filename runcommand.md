FOR SINGLE FILE RUN :
---------------------------------------
1. Open a single terminal tab.
2. Navigate to the project root directory:
bash
cd /Users/amitraj/git_repo_project/MovieRecommendationSystem
3. Run the combined start script:
bash    
./start.sh
4. Open the App in Your Browser
Go to: http://localhost:5173/   

-----------------------------------------
Stopping both servers:
Press Ctrl+C in the terminal where start.sh is running.
The script will automatically detect the Ctrl+C and stop both servers.
---------------------------------------

FOR TWO TERMINAL RUN :
---------------------------------------

Step 1: Open Your Terminal
You will need two terminal tabs/windows open to run the backend and the frontend simultaneously.

Step 2: Start the Django Backend Server
In your first terminal tab/window, run the following commands:

Navigate to the backend directory:
bash
cd /Users/amitraj/git_repo_project/MovieRecommendationSystem/backend
Activate the Python virtual environment:
bash
source .venv/bin/activate
(You should see (.venv) appear in your terminal prompt, indicating that it is active.)
Start the Django development server:
bash
:( python manage.py runserver )
The backend should successfully start running at http://127.0.0.1:8000/.
Step 3: Start the React Frontend Server
In a new terminal tab or window, run the following commands:
---------------------------------------
Navigate to the frontend directory:
bash
cd /Users/amitraj/git_repo_project/MovieRecommendationSystem/frontend
Start the Vite development server:
bash
:( npm run dev ):
The frontend should start running at http://localhost:5173/.
Step 4: Open the App in Your Browser
Open your web browser (e.g., Chrome, Safari).
Go to: http://localhost:5173/
The page will load the dynamic movie catalog from the backend database (populated in 

db.sqlite3
). You can search, filter, view details, and save movies to your watchlist.




