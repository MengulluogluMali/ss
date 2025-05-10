# Full Stack Mobile Application

This project consists of a Django backend API and a React Native mobile application.

## Project Structure

```
.
├── backend/           # Django backend application
│   ├── api/          # Django REST Framework APIs
│   ├── core/         # Core application functionality
│   └── config/       # Django settings and configurations
│
└── mobile/           # React Native mobile application
    ├── src/          # Source code
    ├── components/   # Reusable components
    └── screens/      # Application screens
```

## Backend Setup

1. Create and activate a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
cd backend
pip install -r requirements.txt
```

3. Run migrations:
```bash
python manage.py migrate
```

4. Start the development server:
```bash
python manage.py runserver
```

## Mobile App Setup

1. Install dependencies:
```bash
cd mobile
npm install
```

2. Start the development server:
```bash
npm start
```

3. Run on iOS/Android:
```bash
npm run ios
# or
npm run android
```

## Features

- RESTful API using Django Rest Framework
- JWT Authentication
- PostgreSQL Database
- React Native mobile app
- Redux state management
- Cross-platform compatibility (iOS & Android)
- Push notifications support
- Offline functionality

## API Documentation

API documentation can be found at `/api/docs/` when running the backend server.

## Security

- JWT token-based authentication
- CORS configuration
- Environment variables for sensitive data
- Input validation and sanitization 