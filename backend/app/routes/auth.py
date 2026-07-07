from fastapi import APIRouter

router = APIRouter()


@router.post("/login")
def login():
    return {
        "message": "Login API Working"
    }


@router.post("/signup")
def signup():
    return {
        "message": "Signup API Working"
    }