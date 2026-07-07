from sqlalchemy import Column, Integer, String, Float, Date, Time

from app.database.database import Base


class Expense(Base):
    __tablename__ = "expenses"

    id = Column(Integer, primary_key=True, index=True)

    amount = Column(Float)

    category = Column(String)

    expense_date = Column(Date)

    expense_time = Column(Time)

    description = Column(String)