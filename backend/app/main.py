from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.auth import router as auth_router
from app.database.database import Base, engine
from app.models.user import User
from app.models.expense import Expense
from app.routes.expense import router as expense_router


app = FastAPI(title="Financial Behavior Analyzer API")
Base.metadata.create_all(bind=engine)

app.include_router(auth_router)
app.include_router(expense_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "Financial Behavior Analyzer API Running"
    }