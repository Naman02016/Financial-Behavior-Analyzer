from datetime import date
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


@router.get("/expenses/today")
def get_today_expenses():
    db = SessionLocal()

    today = date.today()

    expenses = (
        db.query(Expense)
        .filter(Expense.expense_date == today)
        .all()
    )

    db.close()

    return expenses


@router.delete("/expense/{expense_id}")
def delete_expense(expense_id: int):
    db = SessionLocal()

    expense = (
        db.query(Expense)
        .filter(Expense.id == expense_id)
        .first()
    )

    if expense is None:
        db.close()
        return {
            "message": "Expense not found"
        }

    db.delete(expense)
    db.commit()
    db.close()

    return {
        "message": "Expense deleted successfully"
    }


@router.put("/expense/{expense_id}")
def update_expense(expense_id: int, updated_expense: ExpenseCreate):
    db = SessionLocal()

    expense = (
        db.query(Expense)
        .filter(Expense.id == expense_id)
        .first()
    )

    if expense is None:
        db.close()
        return {
            "message": "Expense not found"
        }

    expense.amount = updated_expense.amount
    expense.category = updated_expense.category
    expense.expense_date = updated_expense.expense_date
    expense.expense_time = updated_expense.expense_time
    expense.description = updated_expense.description

    db.commit()
    db.refresh(expense)
    db.close()

    return {
        "message": "Expense updated successfully"
    }