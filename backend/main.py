from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

app = FastAPI(title="Princeton Game Theory Club API")

# CORS middleware to allow frontend to access the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Next.js default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models
class Event(BaseModel):
    id: Optional[int] = None
    date: str
    title: str
    description: str
    location: Optional[str] = None

class TeamMember(BaseModel):
    id: Optional[int] = None
    initials: str
    name: str
    role: str
    year: str

class ContactMessage(BaseModel):
    name: str
    email: str
    message: str

# In-memory storage (replace with database in production)
events_db = [
    {
        "id": 1,
        "date": "November 8, 2025 • 7:00 PM • Friend Center 101",
        "title": "Introduction to Nash Equilibria",
        "description": "A beginner-friendly workshop covering the fundamentals of Nash equilibria with interactive examples. Perfect for new members!",
        "location": "Friend Center 101"
    },
    {
        "id": 2,
        "date": "November 15, 2025 • 6:30 PM • McCosh 50",
        "title": "Guest Lecture: Prof. Sarah Chen on Algorithmic Game Theory",
        "description": "Join us for an exciting talk on the intersection of computer science and game theory, featuring Professor Chen from the CS department.",
        "location": "McCosh 50"
    },
    {
        "id": 3,
        "date": "November 22, 2025 • 7:00 PM • Friend Center 101",
        "title": "Game Night: Prisoner's Dilemma Tournament",
        "description": "Compete in our annual iterated prisoner's dilemma tournament! Bring your strategy or code your own bot.",
        "location": "Friend Center 101"
    },
    {
        "id": 4,
        "date": "December 1, 2025 • 4:00 PM • Robertson Hall",
        "title": "Research Symposium",
        "description": "Club members present their semester research projects. Topics include auction theory, voting systems, and evolutionary game theory.",
        "location": "Robertson Hall"
    },
]

team_db = [
    {"id": 1, "initials": "AJ", "name": "Alex Johnson", "role": "President", "year": "Economics '26"},
    {"id": 2, "initials": "SP", "name": "Sophia Patel", "role": "Vice President", "year": "Mathematics '26"},
    {"id": 3, "initials": "MC", "name": "Marcus Chen", "role": "Events Coordinator", "year": "Computer Science '27"},
    {"id": 4, "initials": "EN", "name": "Emma Nguyen", "role": "Research Lead", "year": "ORFE '26"},
    {"id": 5, "initials": "DB", "name": "David Brown", "role": "Treasurer", "year": "Economics '27"},
    {"id": 6, "initials": "LK", "name": "Lila Kumar", "role": "Communications", "year": "Politics '26"},
]

@app.get("/")
async def root():
    return {"message": "Princeton Game Theory Club API"}

@app.get("/api/events", response_model=List[Event])
async def get_events():
    return events_db

@app.get("/api/events/{event_id}", response_model=Event)
async def get_event(event_id: int):
    event = next((e for e in events_db if e["id"] == event_id), None)
    if not event:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Event not found")
    return event

@app.post("/api/events", response_model=Event)
async def create_event(event: Event):
    new_id = max([e["id"] for e in events_db], default=0) + 1
    event_dict = event.dict()
    event_dict["id"] = new_id
    events_db.append(event_dict)
    return event_dict

@app.get("/api/team", response_model=List[TeamMember])
async def get_team():
    return team_db

@app.get("/api/team/{member_id}", response_model=TeamMember)
async def get_team_member(member_id: int):
    member = next((m for m in team_db if m["id"] == member_id), None)
    if not member:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Team member not found")
    return member

@app.post("/api/contact")
async def submit_contact(message: ContactMessage):
    # In production, you would save this to a database or send an email
    return {
        "status": "success",
        "message": "Thank you for your message! We'll get back to you soon."
    }

@app.get("/api/health")
async def health_check():
    return {"status": "healthy"}

