from fastapi import APIRouter
from app.schemas.user import UserCreate
from app.models.user import User
from app.database.database import SessionLocal

router = APIRouter()


@router.post("/signup")
def signup(user: UserCreate):
    db = SessionLocal()

    new_user = User(
        full_name=user.full_name,
        email=user.email,
        password=user.password
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    db.close()

    return {
        "message": "User created successfully"
    }


@router.post("/login")
def login():
    return {
        "message": "Login Working"
    }