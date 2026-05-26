#!/bin/bash
set -e

echo ">>> Installing Python dependencies..."
pip3 install -r backend/requirements.txt

echo ">>> Installing Node dependencies..."
npm --prefix frontend install

echo ">>> Setup complete. Run the servers:"
echo "    Terminal 1: cd backend && python manage.py runserver"
echo "    Terminal 2: cd frontend && npm start"
