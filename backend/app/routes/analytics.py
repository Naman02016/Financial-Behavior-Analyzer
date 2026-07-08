from datetime import date, timedelta
from fastapi import APIRouter
from sqlalchemy import func

from app.database.database import SessionLocal
from app.models.expense import Expense

router = APIRouter(
    prefix="/analytics",
    tags=["Analytics"]
)


@router.get("/today")
def today_analytics():
    db = SessionLocal()

    today = date.today()

    expenses = (
        db.query(Expense)
        .filter(Expense.expense_date == today)
        .all()
    )

    today_total = sum(exp.amount for exp in expenses)

    expense_count = len(expenses)

    highest_category = None
    highest_amount = 0

    category_totals = {}

    for expense in expenses:
        category_totals[expense.category] = (
            category_totals.get(expense.category, 0)
            + expense.amount
        )

    if category_totals:
        highest_category = max(
            category_totals,
            key=category_totals.get
        )

        highest_amount = category_totals[highest_category]

    db.close()

    return {
        "today_total": today_total,
        "expense_count": expense_count,
        "highest_category": highest_category,
        "highest_amount": highest_amount,
    }


@router.get("/month")
def month_analytics():
    db = SessionLocal()

    today = date.today()

    expenses = (
        db.query(Expense)
        .filter(
            func.extract("month", Expense.expense_date) == today.month,
            func.extract("year", Expense.expense_date) == today.year
        )
        .all()
    )

    month_total = sum(exp.amount for exp in expenses)

    days = max(today.day, 1)

    average_daily = round(month_total / days, 2)

    category_totals = {}

    for expense in expenses:
        category_totals[expense.category] = (
            category_totals.get(expense.category, 0)
            + expense.amount
        )

    highest_category = None
    highest_amount = 0

    if category_totals:
        highest_category = max(
            category_totals,
            key=category_totals.get
        )

        highest_amount = category_totals[highest_category]

    db.close()

    return {
        "month_total": month_total,
        "average_daily": average_daily,
        "highest_category": highest_category,
        "highest_amount": highest_amount,
    }


@router.get("/insight")
def ai_insight():
    db = SessionLocal()

    today = date.today()
    yesterday = today - timedelta(days=1)

    today_expenses = (
        db.query(Expense)
        .filter(Expense.expense_date == today)
        .all()
    )

    yesterday_expenses = (
        db.query(Expense)
        .filter(Expense.expense_date == yesterday)
        .all()
    )

    month_expenses = (
        db.query(Expense)
        .filter(
            func.extract("month", Expense.expense_date) == today.month,
            func.extract("year", Expense.expense_date) == today.year
        )
        .all()
    )

    today_total = sum(exp.amount for exp in today_expenses)
    yesterday_total = sum(exp.amount for exp in yesterday_expenses)
    month_total = sum(exp.amount for exp in month_expenses)

    average_daily = round(
        month_total / max(today.day, 1),
        2
    )

    category_totals = {}

    for expense in today_expenses:
        category_totals[expense.category] = (
            category_totals.get(expense.category, 0)
            + expense.amount
        )

    highest_category = None

    if category_totals:
        highest_category = max(
            category_totals,
            key=category_totals.get
        )

    # Yesterday comparison
    if yesterday_total == 0:
        compare_text = "No expenses were recorded yesterday."
    elif today_total > yesterday_total:
        compare_text = (
            f"You spent ₹{today_total - yesterday_total:.2f} more than yesterday."
        )
    elif today_total < yesterday_total:
        compare_text = (
            f"You spent ₹{yesterday_total - today_total:.2f} less than yesterday."
        )
    else:
        compare_text = "Your spending is the same as yesterday."

    # Monthly comparison
    if average_daily == 0:
        average_text = "This is your first expense this month."
    elif today_total > average_daily:
        average_text = (
            f"You're spending above your monthly average of ₹{average_daily:.2f}."
        )
    elif today_total < average_daily:
        average_text = (
            f"You're spending below your monthly average of ₹{average_daily:.2f}."
        )
    else:
        average_text = (
            f"You're exactly at your monthly average of ₹{average_daily:.2f}."
        )

    if highest_category:
        category_text = (
            f"Your highest spending category today is {highest_category}."
        )
    else:
        category_text = "No expenses have been recorded today."

    insight = (
        f"Today you spent ₹{today_total:.2f}. "
        f"{compare_text} "
        f"{average_text} "
        f"{category_text} "
        f"Keep tracking your expenses to build healthier financial habits."
    )

    db.close()

    return {
        "today_total": today_total,
        "today_count": len(today_expenses),
        "average_daily": average_daily,
        "highest_category": highest_category,
        "insight": insight
    }