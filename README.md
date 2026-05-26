# Django + Angular 16 Assessment

## Option A — GitHub Codespaces (recommended, no local setup)

1. Click **Code → Codespaces → Create codespace on main** on the GitHub repo page
2. Wait ~30 seconds for the environment to build and dependencies to install
3. Open two terminal tabs and start the servers:

**Terminal 1 — Django:**
```bash
cd backend
python manage.py runserver 0.0.0.0:8000
```

**Terminal 2 — Angular:**
```bash
cd frontend
npm start
```

4. Codespaces will prompt you to open the forwarded port — click **Open in Browser** on port `4200`

---

## Option B — Run locally

### Prerequisites
- Python 3.10+
- Node.js 18+

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
python manage.py runserver 0.0.0.0:8000
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

---

## Verify the connection

Open the Angular app and click **Ping Backend** — you should see a message and ping count returned from Django.

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
