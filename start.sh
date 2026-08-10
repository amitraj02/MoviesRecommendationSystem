#!/bin/bash

# Function to kill both servers on exit (Ctrl+C)
cleanup() {
    echo ""
    echo "Stopping servers..."
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
    exit 0
}

# Trap Ctrl+C (SIGINT) and terminal exit (SIGTERM)
trap cleanup SIGINT SIGTERM

echo "========================================="
echo "   Starting Movie Recommendation System  "
echo "========================================="

# 1. Start Backend Django Server
echo " Starting Django Backend..."
cd backend
source .venv/bin/activate
python manage.py runserver 127.0.0.1:8000 &
BACKEND_PID=$!
cd ..

# Give the backend a brief moment to spin up
sleep 1

# 2. Start Frontend Vite Server
echo " Starting Vite Frontend..."
cd frontend
npm run dev &
FRONTEND_PID=$!
cd ..

echo "-----------------------------------------"
echo "Servers are running! Press [Ctrl+C] to stop both."
echo "========================================="

# Keep the script running to wait for servers to be terminated
wait
