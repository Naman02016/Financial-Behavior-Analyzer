from fastapi import APIRouter
from app.schemas.user import UserCreate
from app.models.user import User
from app.database.database import SessionLocal
from app.schemas.user import UserCreate, UserLogin
from sqlalchemy.orm import Session

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
def login(user: UserLogin):
    db = SessionLocal()

    existing_user = (
        db.query(User)
        .filter(User.email == user.email)
        .first()
    )

    db.close()

    if existing_user is None:
        return {
            "message": "User not found"
        }

    if existing_user.password != user.password:
        return {
            "message": "Incorrect password"
        }

    return {
        "message": "Login Successful"
    }