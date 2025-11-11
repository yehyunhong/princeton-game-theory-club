# Backend README

## Setup

1. Create a virtual environment:
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

## Running the Server

```bash
uvicorn main:app --reload --port 8000
```

The API will be available at `http://localhost:8000`

API documentation (Swagger UI) will be available at `http://localhost:8000/docs`

## API Endpoints

- `GET /` - Root endpoint
- `GET /api/events` - Get all events
- `GET /api/events/{event_id}` - Get a specific event
- `POST /api/events` - Create a new event
- `GET /api/team` - Get all team members
- `GET /api/team/{member_id}` - Get a specific team member
- `POST /api/contact` - Submit a contact message
- `GET /api/health` - Health check endpoint

