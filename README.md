# Django + Angular 16 Assessment

## Setup Instructions

Open **two terminal tabs** in VS Code (Terminal → New Terminal, then click `+` for a second tab).

### Terminal 1: Django Backend
```bash
cd backend
pip install -r requirements.txt
python manage.py runserver 0.0.0.0:8000
```

### Terminal 2: Angular Frontend
```bash
cd frontend
npm install
npm start
```

## Viewing the Apps (Coderbyte / Cloud IDE)

Once both servers are running:

1. Click the **Ports** tab in the bottom panel (next to the Terminal tab).
2. You will see Port `8000` (Django) and Port `4200` (Angular) listed.
3. Hover over the **Forwarded Address** for Port 4200 and click the **Globe icon** to open it in the browser.

The URL will look like `https://4200-project-<id>.cblab.app` — this is the Angular app.

## Notes

- Both servers bind to `0.0.0.0` so Coderbyte's proxy can reach them.
- `ALLOWED_HOSTS = ['*']` and `CORS_ALLOW_ALL_ORIGINS = True` are set for the assessment environment. Restrict these in any real deployment.
