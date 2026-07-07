from pydantic import BaseModel
from datetime import date, time


class ExpenseCreate(BaseModel):
    amount: float
    category: str
    expense_date: date
    expense_time: time
    description: str