# Django + Angular 16 Assessment

## Prerequisites

- Python 3.10+
- Node.js 18+

## Setup

### 1. Clone the repo

```bash
git clone https://github.com/vivek-ottimate/django-angular16-boilerplate.git
cd django-angular16-boilerplate
```

### 2. Backend

```bash
python3 -m venv env
source env/bin/activate        # Windows: env\Scripts\activate
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Django runs at `http://localhost:8000`

### 3. Frontend

Open a second terminal tab:

```bash
cd frontend
npm install
npm start
```

Angular runs at `http://localhost:4200`

## Verify the connection

Open `http://localhost:4200` and click **Ping Backend** — you should see a message and a ping count returned from Django.

## Running tests

**Django:**
```bash
cd backend
python manage.py test
```

**Angular:**
```bash
cd frontend
npm test
```

## Project structure

```
├── backend/          # Django project
│   ├── api/          # Example app — models, views, tests
│   └── backend/      # Django settings and URLs
└── frontend/         # Angular 16 app
    └── src/app/      # Components and services
```
