# Princeton Game Theory Club

A modern web application for the Princeton Game Theory Club, built with Next.js, Tailwind CSS, and FastAPI.

## Project Structure

```
princeton-game-theory-club/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── EventsPage.tsx
│   ├── ResourcesPage.tsx
│   ├── TeamPage.tsx
│   └── ContactPage.tsx
├── backend/               # FastAPI backend
│   ├── main.py           # FastAPI application
│   ├── requirements.txt  # Python dependencies
│   └── README.md         # Backend documentation
├── package.json          # Node.js dependencies
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── next.config.js        # Next.js configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Python 3.8+

### Frontend Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install --upgrade pip
pip install -r requirements.txt
```

4. Run the FastAPI server:
```bash
uvicorn main:app --reload --port 8000
```

The API will be available at `http://localhost:8000`
API documentation (Swagger UI) at `http://localhost:8000/docs`

## Features

- **Modern UI**: Built with Tailwind CSS for a responsive, beautiful design
- **Single Page Application**: Smooth navigation between sections
- **RESTful API**: FastAPI backend with endpoints for events, team members, and contact forms
- **TypeScript**: Type-safe React components
- **Princeton Branding**: Custom colors matching Princeton's orange and black theme

## Development

### Frontend Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Backend API Endpoints

- `GET /api/events` - Get all events
- `GET /api/events/{event_id}` - Get a specific event
- `POST /api/events` - Create a new event
- `GET /api/team` - Get all team members
- `GET /api/team/{member_id}` - Get a specific team member
- `POST /api/contact` - Submit a contact message

## Technologies Used

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: FastAPI, Python, Pydantic
- **Styling**: Tailwind CSS with custom Princeton colors

## License

MIT

