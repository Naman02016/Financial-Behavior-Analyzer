from fastapi import APIRouter
from app.schemas.expense import ExpenseCreate
from app.models.expense import Expense
from app.database.database import SessionLocal

router = APIRouter()


@router.post("/expense")
def add_expense(expense: ExpenseCreate):
    db = SessionLocal()

    new_expense = Expense(
        amount=expense.amount,
        category=expense.category,
        expense_date=expense.expense_date,
        expense_time=expense.expense_time,
        description=expense.description,
    )

    db.add(new_expense)
    db.commit()
    db.refresh(new_expense)
    db.close()

    return {
        "message": "Expense Added Successfully"
    }
@router.get("/expenses")
def get_expenses():
    db = SessionLocal()

    expenses = db.query(Expense).all()

    db.close()

    return expenses